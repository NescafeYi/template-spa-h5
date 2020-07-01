import React, { Component } from "react";

import "./styles.less";
import ColumnDetail from "@common/components/column";
import { GetWorkOrderDetail } from "../services";
import { WORKORDER_STATUS_MAP, ORDER_PRODUCT_MAP, WORKORDER_STATUS_LIST } from '../constants';
import { PhotoSwipe } from 'react-photoswipe';

export default class extends Component {
	constructor(props) {
		super(props);
		document.title = '报障详情';
		this.state = {};
	}

	componentDidMount() {
		this.getDetail();
	}

	getInfoColumns = () => {
		const { data } = this.state;
		return [
			{ lable: "企业名称", value: data.enterpriseName },
			{ lable: "产品", value: ORDER_PRODUCT_MAP[data.product] },
			{ lable: "报障联系人", value: data.contactName },
			{ lable: "联系电话", value: data.contactMobile },
			{ lable: "故障描述", value: data.description, },
		]
	}

	getMoreColumns = () => {
		const { data } = this.state;
		return [
			{ lable: "单号", value: data.number },
			{ lable: "报障时间", value: data.crtTime },
		]
	}

	getDetail = async () => {
		const { match } = this.props;
		let data = await GetWorkOrderDetail(match.params.id);
		this.setState({ data });
	}

	// 获取预览图片数据
	getPhotos = () => {
		let { data } = this.state;
		const photoList = []
		data.photoUri.forEach(item => {
			let imgOption = this.getImageOption({ url: item });
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

	getStatusImg = () => {
		const { data } = this.state;
		let op = WORKORDER_STATUS_LIST.find(item => item.value == data.status);
		return op ? <img src={require(`@static/assets/images/workorder-status-${op.key}.png`)} alt="" /> : null
	}

	render() {
		const { data, openImg, swipeIndex } = this.state;
		return !!data && (
			<div className="workorder-detail">
				<div className="unit-chunk">
					<div className="header-status">
						{this.getStatusImg()}
						<span>{WORKORDER_STATUS_MAP[data.status].label}</span>
					</div>
				</div>
				<div className="unit-chunk">
					{this.getInfoColumns().map((item, index) => (
						<ColumnDetail key={index} className="label-left" label={item.lable}>
							{item.value}
						</ColumnDetail>
					))}
					<ColumnDetail className="label-left" label="附件">
						<div className="img-lists">
							{data.photoUri && data.photoUri.map((item, index) => (
								<img key={index} src={item} onClick={() => this.setState({ openImg: true, swipeIndex: index })} />
							))}
						</div>
					</ColumnDetail>
				</div>
				<div className="unit-chunk">
					{this.getMoreColumns().map((item, index) => (
						<ColumnDetail key={index} className="label-left" label={item.lable}>
							{item.value}
						</ColumnDetail>
					))}
				</div>
				{data.photoUri && data.photoUri.length > 0 && <PhotoSwipe
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
			</div>
		);
	}
}
