import "./styles.less";
import ColumnDetail from "@common/components/column";
import { GetWorkOrderList } from "../services";
import Empty from "@common/components/emtry";
import { WORKORDER_STATUS_MAP, ORDER_PRODUCT_MAP } from '../constants';
import classnames from 'classnames';

export default class extends React.Component {
	constructor(props) {
		super(props);
		document.title = '服务进度';
		this.state = {};
	}

	componentDidMount() {
		this.getList();
	}

	getList = async () => {
		let data = await GetWorkOrderList();
		this.setState({ data });
	}

	goDetail = (id) => {
		const { history } = this.props;
		history.push(`/orderDetail/${id}`)
	}

	render() {
		const { data } = this.state;
		if (data && !data.rows.length) {
			return <Empty />
		}
		return !!data && (
			<div className="services-schedule">
				<div className="lists">
					<ul>
						{data.rows.map((item, index) => (
							<li key={index} onClick={() => this.goDetail(item.id)}>
								<div className="li-item">
									<header>
										<p className="title">{item.description}</p>
										<span className={classnames("tag", WORKORDER_STATUS_MAP[item.status].key)}>{WORKORDER_STATUS_MAP[item.status].label}</span>
									</header>
									<ColumnDetail className="label-left label-long-4" label="产品">
										{ORDER_PRODUCT_MAP[item.product]}
									</ColumnDetail>
									<ColumnDetail className="label-left label-long-4" label="单号">
										{item.number}
									</ColumnDetail>
									<ColumnDetail
										className="label-left label-long-4"
										label="报障时间"
									>
										{item.crtTime}
									</ColumnDetail>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
