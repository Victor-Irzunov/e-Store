import React, { useState, useRef } from 'react'
import { MinusCircleOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space, message, } from 'antd'
import { createOpisanie } from '../../../http/adminAPI'



// const data = [
// 	{
// 		id: 1,
// 	},
// ]


const FormOpisanie = ({ setMessages }) => {
	const [form] = Form.useForm()
	const ref = useRef('')
	const [arr, setArr] = useState({})
	const [data, setData] = useState([{ id: 1, }])


	const onFinish = values => {
		const array = [{ title: values.title, content: Object.values(arr) }]
		createOpisanie(array)
			.then(data => {
				message.success(data.message)
				setTimeout(() => { clearForm() }, [500])
				setMessages(i => !i)
			})
			.catch(error => {
				message.error(error)
			})
	}

	const addArr = e => {
		setArr(st => ({ ...st, [e.target.name]: e.target.value }))
	}
	const delElemArr = () => {
		if (data.length > 1) setData((previousArr) => (previousArr.slice(0, -1)))
	}

	const fu = (num) => {
		setData([...data, { id: num }])
	}

	const clearForm = () => {
		form.resetFields()
		// if (data.length >= 1)
		if (data.length > 1) setData([{ id: 1, }])
		// setArr({})
		// console.log('ref: ', ref)
		// console.log('data: ', data)

	}


	return (
		<Form
			name="dynamic_form_nest_item"
			onFinish={onFinish}
			autoComplete="off"
			form={form}
		>
			<Space
				style={{
					display: 'flex',
					marginBottom: 8,
				}}
				align="baseline"
			>

				<Form.Item
					name='title'
					rules={[
						{
							required: true,
							message: 'Напишите описание!',
						},
					]}
				>
					<Input placeholder="Тип описания" className='w-48' allowClear />
				</Form.Item>

				<div className='flex flex-col'>

					{
						data.map((el, idx) => {
							return (
								<React.Fragment key={el.id} >
									<Form.Item
										name={String(el.id)}
										rules={[
											{
												required: true,
												message: 'Введите характеристику!',
											},
										]}
									>
										<Input
											placeholder="Введите характеристику"
											className=''
											onBlur={addArr}
											name={String(el.id + 1)}
											ref={ref}
											allowClear
										/>
									</Form.Item>

									{idx === data.length - 1 &&
										<div className='flex'>
											<PlusCircleOutlined
												onClick={() => fu(el.id + 1)}
												className='ml-1 mr-4'
											/>
											{data.length > 1 &&
												<MinusCircleOutlined onClick={delElemArr} />
											}
										</div>
									}
								</React.Fragment>
							)
						})
					}
				</div>
				<DeleteOutlined onClick={clearForm} />


			</Space>


			<Form.Item>
				<Button type="" htmlType="submit" >
					Сохранить описание
				</Button>
			</Form.Item>

		</Form >
	)
}
export default FormOpisanie