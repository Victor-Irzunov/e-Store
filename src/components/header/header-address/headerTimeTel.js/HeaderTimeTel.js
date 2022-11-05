import React, { useState } from 'react'
import { Space, Typography } from 'antd'
import {
	HistoryOutlined,
	PhoneOutlined,
	UserOutlined
} from '@ant-design/icons'
const { Paragraph } = Typography

function HeaderTimeTel() {
	return (

		<Space
			align="center"
			className='border-l pl-2 pr-2'
		>
			<HistoryOutlined className='text-base' />
			<Space
				direction='vertical'
				size={[1, 0]}
				align="center"
				className='mr-5'
			>
				<Paragraph
					editable={{
						triggerType: 'text'
					}}
				>
					08:30-20:00 пн-пт
				</Paragraph>
				<Paragraph
					editable={{
						triggerType: 'text'
					}}
				>
					10:00-19:00 сб-вс
				</Paragraph>
			</Space>
			<Space
				// align='center'
			>
				<PhoneOutlined className='text-base' />
				<Typography.Link>
					<a href='tel:80290000000'>+375 29 000-00-00</a>
				</Typography.Link>
			</Space>
			<Space
				// align='center'
				className='ml-10'
			>
				<UserOutlined
					className='text-lg'
				/>
				<span
					className='text-lg'
				>
					Личный кабинет
				</span>
			</Space>
		</Space>
	)
}

export default HeaderTimeTel