import React, { useState } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space, message } from 'antd'
import { createBrand } from '../../../http/adminAPI'

const FormCreateBrand = () => {
	const [isBtn, setIsBtn] = useState(false)
	const [form] = Form.useForm()

	const onFinish = values => {
		createBrand(values.brand)
			.then(data => {
				message.success(data.message)
				setIsBtn(false)
				setTimeout(() => { form.resetFields() }, [1000])
			})
			.catch(data => {
				message.error(data.message)
			})
	}

	const onFinishFailed = errorInfo => message.error('Ошибка')

	return (
		<Form
			name="dynamic_form_nest_item"
			onFinish={onFinish}
			autoComplete="off"
			className='border-l pl-6'
			onFinishFailed={onFinishFailed}
			form={form}
		>

			<Form.List name="brand">
				{(fields, { add, remove }) => (
					<>
						{fields.map(({ key, name, ...restField }, idx) => (
							<>
								<Space
									key={key}
									style={{
										display: 'flex',
										marginBottom: 8,
									}}
									align="baseline"
								>
									<Form.Item
										{...restField}
										name={[name, 'title']}
										rules={[
											{
												required: true,
												message: 'Введите бренд',
											},
										]}
									>
										<Input placeholder="Бренд" />
									</Form.Item>

									<MinusCircleOutlined onClick={() => {
										remove(name)
										if (fields.length <= 1) setIsBtn(false)
									}} />
								</Space>
							</>
						))}
						<Form.Item>
							<Button
								type="dashed"
								onClick={() => {
									add()
									setIsBtn(true)
								}}
								// block
								icon={<PlusOutlined />}>
								Добавить бренд
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>
			{
				isBtn &&
				<Form.Item>
					<Button type="primary" htmlType="submit" >
						Добавить
					</Button>
				</Form.Item>
			}



		</Form>
	)
}
export default FormCreateBrand