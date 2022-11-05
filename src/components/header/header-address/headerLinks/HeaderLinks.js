import React from 'react'
import { Divider, Space, Typography } from 'antd'
import { Link as LinkDom } from 'react-router-dom'

function HeaderLinks() {
	return (
		<Space split={<Divider type="vertical" />}>
			<Typography.Link>
				<LinkDom to=''>Оплата и доставка</LinkDom>
			</Typography.Link>
			<Typography.Link>
				<LinkDom to=''>Кредит</LinkDom>
			</Typography.Link>
			<Typography.Link>
				<LinkDom to=''>Рассрочка</LinkDom>
			</Typography.Link>
			<Typography.Link>
				<LinkDom to=''>Возврат</LinkDom>
			</Typography.Link>
			<Typography.Link>
				<LinkDom to=''>Гарантия</LinkDom>
			</Typography.Link>
		</Space>
	)
}

export default HeaderLinks