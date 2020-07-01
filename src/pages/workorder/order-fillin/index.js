import {
	InputItem,
	Toast,
	Picker,
	List,
	Button,
	TextareaItem,
	ImagePicker,
	Icon,
} from "antd-mobile";
import styles from "./styles.module.less";
import { ORDER_PRODUCT_LIST, ORDER_PRODUCT_MAP } from "../constants";
import { AddWorkOrder, UploadFiles } from '../services';
import { PhotoSwipe } from 'react-photoswipe';
import { CompressImage } from '@/utils';

/**
 * 提交报障信息页面
 */
export default class extends React.Component {
	constructor(props) {
		super(props);
		document.title = '填报报障信息'
		this.state = {
			openImg: false,
			data: {
				photoUri: []
			}
		};
	}

	getBaseColumns = () => [
		{ label: '企业名称', valueKey: 'enterpriseName', required: true, maxLength: 200, placeholder: '输入企业名称', verifyMes: '请输入企业名称' },
		{ label: '产品', valueKey: 'product', type: 'select', required: true, placeholder: '请选择', options: ORDER_PRODUCT_LIST, verifyMes: '请选择产品' },
		{ label: '报障联系人', valueKey: 'contactName', required: true, maxLength: 64, placeholder: '输入报障人姓名', verifyMes: '请输入报障人姓名' },
		{ label: '联系电话', valueKey: 'contactMobile', required: true, maxLength: 64, placeholder: '输入报障人电话', verifyMes: '请输入报障人电话' },
	]

	getMoreColumns = () => [
		{ label: '故障描述', valueKey: 'description', required: true, maxLength: 500, placeholder: '输入详细故障描述', verifyMes: '请输入故障描述' }
	]

	onChange = (key, val) => {
		const { data } = this.state;
		data[key] = val;
		this.setState({ data });
	}

	uploadChange = (files) => {
		const { data } = this.state;
		data.photoUri = files;  //这里存的是图片的formdata数据，提交的时候会一起上传换取真实url
		data.photoUri.forEach(item => item.src = item.url)
		this.setState({ data });
	}

	// 校验数据
	verifyData = () => {
		const { data } = this.state;
		let verifys = [...this.getBaseColumns(), ...this.getMoreColumns()];
		for (let i = 0; i < verifys.length; i++) {
			let item = verifys[i];
			if (item.required && !data[item.valueKey]) {
				Toast.info(item.verifyMes);
				return;
			}
		}
		return data;
	}

	getBlobFile = (filesItem) => {
		return CompressImage(filesItem).then((newFile) => {
			return newFile
		})
	}

	// 将存的图片上传换取真实url
	uploadImg = async () => {
		const { photoUri } = this.state.data;
		let UploadPromise = [];
		for (let i = 0; i < photoUri.length; i++) {
			let formData = new FormData();
			const filesItem = photoUri[i].file;
			const blobFile = await this.getBlobFile(filesItem);
			formData.append('file', new File([blobFile], filesItem.name, { type: filesItem.type }));
			UploadPromise.push(UploadFiles(formData));
		}
		let res = await Promise.all(UploadPromise);
		return res;
	}

	submit = async () => {
		const { history } = this.props;
		let { data } = this.state;
		if (!this.verifyData()) return;
		data = JSON.parse(JSON.stringify(data));
		try {
			this.setState({ loading: true });
			let resImgs = await this.uploadImg();
			data.photoUri = resImgs.map(item => item.url);
			await AddWorkOrder(data);
			Toast.success('报障信息提交成功')
			history.push('orderList');
		} finally {
			this.setState({ loading: false })
		}

	}

	// 获取预览图片数据
	getPhotos = () => {
		let { data } = this.state;
		const photoList = []
		data.photoUri.forEach(item => {
			let imgOption = this.getImageOption(item);
			photoList.push(imgOption)
		})
		return photoList;
	}

	// 获取图片的真实大小
	getImageOption = (imgData) => {
		let option = {}
		var img = new Image();
		img.src = imgData.url;
		option.src = imgData.url;
		if (img.complete) {
			option.w = img.width;
			option.h = img.height;
		} else {
			img.onload = function () {
				option.w = img.width;
				option.h = img.height;
			}
		}
		return { ...imgData, ...option }
	}

	render() {
		const { data, openImg, swipeIndex, loading } = this.state;
		return (
			<div className={styles["v-error-submit"]}>
				<List className='mb-8'>
					{
						this.getBaseColumns().map(item => {
							switch (item.type) {
								case 'select':
									return (
										<List.Item key={item.valueKey}>
											<Picker data={item.options} cols={1} onChange={(val) => this.onChange(item.valueKey, val[0])}>
												<div className={styles["select"]}>
													<label>{item.label}</label>
													<div className={styles["select-right"]}>
														{
															data[item.valueKey] ?
																<span>{ORDER_PRODUCT_MAP[data[item.valueKey]]}</span>
																: <span className={styles['holder']}>请选择</span>
														}
														<Icon type="right" />
													</div>
												</div>
											</Picker>
										</List.Item>
									)
								default:
									return (
										<InputItem
											key={item.valueKey}
											maxLength={item.maxLength}
											placeholder={item.placeholder}
											value={data[item.valueKey]}
											onChange={(val) => this.onChange(item.valueKey, val)}
										>{item.label}</InputItem>
									)
							}
						})
					}
				</List>
				<List>
					{
						this.getMoreColumns().map(item => (
							<TextareaItem
								key={item.valueKey}
								title={item.label}
								maxLength={item.maxLength}
								rows={4}
								placeholder={item.placeholder}
								onChange={(val) => this.onChange(item.valueKey, val)}
							></TextareaItem>
						))
					}
					<List.Item>
						<div className={styles["upload-box"]}>
							<label>附件</label>
							<ImagePicker
								length="3"
								files={data.photoUri}
								onChange={this.uploadChange}
								onImageClick={(index) => this.setState({ openImg: true, swipeIndex: index })}
								selectable={data.photoUri.length < 3}
							/>
						</div>
					</List.Item>
					{data.photoUri.length > 0 && <PhotoSwipe
						id="img-pc"
						isOpen={openImg}
						options={{
							fullscreenEl: false,
							shareEl: false,
							index: swipeIndex || 0,
							tapToClose: true
						}}
						onClose={() => this.setState({ openImg: false })}
						items={this.getPhotos()}
					/>}
				</List>
				<div className={styles["footer"]}>
					<Button type="primary" loading={loading} disabled={loading} onClick={this.submit}>提交</Button>
				</div>
			</div>
		);
	}
}
