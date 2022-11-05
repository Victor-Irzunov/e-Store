import React from 'react'
// import logo from './img/logo.png'
// import { useLocation } from 'react-router-dom'
import HeaderLinks from './headerLinks/HeaderLinks'
import HeaderTimeTel from './headerTimeTel.js/HeaderTimeTel'
import { Space, Row, Col } from 'antd'
import {
	UserOutlined,
} from '@ant-design/icons'


function HeaderAddress() {

	// const location = useLocation()
	// let isPath = location.pathname === '/'


	return (
		<section className='pt-4 pb-4'>
			<div className='container'>
				{/* <Row justify='space-between'>
					<Col xl={21}> */}
						<Space>
							<HeaderLinks />
							<HeaderTimeTel />
						</Space>
					{/* </Col>
					<Col xl={3}> */}
						{/* <Space align='center'>
							<UserOutlined className='text-base' />
							<span>Личный кабинет</span>
						</Space> */}
					{/* </Col>
				</Row> */}
			</div >
		</section >
	)
}

export default HeaderAddress