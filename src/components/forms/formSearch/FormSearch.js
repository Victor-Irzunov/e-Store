import { Form, Input } from 'antd'
import { AudioOutlined } from '@ant-design/icons'

import React from 'react'
const { Search } = Input

const suffix = (
	<AudioOutlined
		style={{
			fontSize: 16,
			color: '#1890ff',
		}}
	/>
);
const onSearch = (value) => console.log(value)



const FormSearch = () => {
	return (

		<Search
			placeholder="введите текст"
			size="large"
			suffix={suffix}
			allowClear
			onSearch={onSearch}
			style={{
				width: 350,
			}}
		/>

	)
}
export default FormSearch