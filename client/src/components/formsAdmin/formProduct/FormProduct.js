import React, { useEffect, useState } from 'react'
import {
	Button, InputNumber,
	Form, Input, Radio,
	message, Select, Tag,
	Tooltip, Space,
	Collapse,
	Checkbox
} from 'antd'
import DragableComp from '../../upload/DragableComp'
import {
	fetchBrands,
	fetchCategory, fetchColor,
	fetchNaznachenie,
	fetchOpisanie, fetchSize,
	fetchType
} from '../../../http/productsAPI'
import { InfoCircleOutlined, CopyOutlined } from '@ant-design/icons'
import { createProduct } from '../../../http/adminAPI'
// import { CirclePicker } from 'react-color'

import Resizer from "react-image-file-resizer"
const { Panel } = Collapse

const resizeFile = (file, size) =>
	new Promise((resolve) => {
		Resizer.imageFileResizer(
			file,
			size,
			size,
			"WEBP",
			100,
			0,
			(uri) => {
				resolve(uri)
			},
			"file",
		)
	})


const { TextArea } = Input
const { Option } = Select

// const tagRender = props => {
// 	const { label, value, closable, onClose } = props
// 	const onPreventMouseDown = event => {
// 		event.preventDefault()
// 		event.stopPropagation()
// 	}
// 	return (
// 		<Tag
// 			color={value}
// 			onMouseDown={onPreventMouseDown}
// 			closable={closable}
// 			onClose={onClose}
// 			style={{
// 				marginRight: 3,
// 			}}
// 		>
// 			<span className={value === '#ffffff' ? 'text-black' : ''}>{label}</span>
// 		</Tag>
// 	)
// }



const FormProduct = () => {
	const [form] = Form.useForm()
	const [dataColor, setDataColor] = useState([])
	const [dataSize, setDataSize] = useState([])
	const [dataOpisanie, setDataOpisanie] = useState([])
	const [dataCategory, setDataCategory] = useState([])
	const [dataType, setDataType] = useState([])
	const [dataNaznachenie, setDataNaznachenie] = useState([])
	const [dataBrands, setDataBrands] = useState([])

	const [title, setTitle] = useState('')
	const [checkBox, setCheckBox] = useState()


	useEffect(() => {
		fetchColor()
			.then(data => {
				setDataColor(data)
			})
			.catch(err => {
				message.error(err.message)
			})
		fetchSize()
			.then(data => {
				setDataSize(data)
			})
			.catch(err => {
				message.error(err.message)
			})
		fetchOpisanie()
			.then(data => {
				setDataOpisanie(data)
			})
			.catch(err => {
				message.error(err.message)
			})
		fetchCategory()
			.then(data => {
				setDataCategory(data)
			})
			.catch(err => {
				message.error(err.message)
			})
		fetchType()
			.then(data => {
				setDataType(data)
			})
			.catch(err => {
				message.error(err.message)
			})
		fetchNaznachenie()
			.then(data => {
				setDataNaznachenie(data)
			})
			.catch(err => {
				message.error(err.message)
			})
		fetchBrands()
			.then(data => {
				setDataBrands(data)
			})
			.catch(err => {
				message.error(err.message)
			})
	}, [])


	// const onchange = async (file) => {
	// 	try {
	// 		const image = await resizeFile(file);
	// 		console.log("image: ", image);
	// 		return image
	// 	} catch (err) {
	// 		console.log("err: ", err);
	// 	}
	// };

	const requestTitle = e => {
		const title = e.target.value.replace(/\s+/g, ' ').trim()
		console.log('-----e.target.value: ', e.target.value)
		console.log('-----title: ', title)
	}


	const change = () => {
		let b = '',
			c = ''
		return (elem, i) => {
			if (i === 1) b = elem
			else c = elem
			let a = `${b} ${c}`
			return form.setFieldsValue({ name: a })
		}
	}
	const fu = change()

	const onFinish = async values => {
		console.log('Success:', values)

		// const arrColor = []
		// values.color.forEach(el => {
		// 	const obj = dataColor.find(elem => elem.color === el)
		// 	if (obj) arrColor.push({ name: obj.name, color: obj.color })
		// })

		const arrOpisanie = []
		const keys = Object.keys(values.Opisanie)
		keys.forEach(el => {
			arrOpisanie.push({ title: el, description: values.Opisanie[el].content })
		})

		const formData = new FormData()
		formData.append('opisanie', JSON.stringify(arrOpisanie))
		formData.append('brand', values.brand)
		formData.append('category', values.category)
		formData.append('color', values.color)
		formData.append('count', values.count)
		formData.append('description', values.description)
		formData.append('discountPercentage', values.discountPercentage)
		formData.append('inStock', values.inStock)
		formData.append('name', values.name)
		formData.append('naznachenie', values.naznachenie)
		formData.append('price', values.price)
		formData.append('size', JSON.stringify(values.size))
		formData.append('type', values.type)

		for (let k in values.img.fileList) {
			const pic = await resizeFile(values.img.fileList[k].originFileObj, 1000)
			formData.append('img', pic)
		}
		for (let k in values.img.fileList) {
			formData.append('imgMini', await resizeFile(values.img.fileList[k].originFileObj, 250))
		}

		createProduct(formData)
			.then(data => {
				console.log('data: ', data)
			})
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}

	const copyFunction = () => {
		console.log('---form: ', form.name)
		navigator.clipboard.writeText(title)
			.then(() => {
				if (title) message.success(`Вы скопировали: ${title}`)
				else message.warning('Введите полное название для копирования!')
			})
			.catch(err => console.log('err: ', err))

	}


	return (
		<>
			<Form
				name="product"
				form={form}
				labelCol={{
					span: 4,
				}}
				wrapperCol={{
					span: 20,
				}}
				initialValues={{
					inStock: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Категория"
					name="category"
					hasFeedback
					rules={[{
						required: true,
						message: 'Выберите категорию!',
					},]}
				>
					<Radio.Group buttonStyle="solid">
						{dataCategory.map(el => {
							return (<Radio.Button key={el.id} value={el.id}>{el.title}</Radio.Button>)
						})}
					</Radio.Group>
				</Form.Item>

				<Form.Item
					label="Тип"
					name="type"
					hasFeedback
					rules={[{
						required: true,
						message: 'Выберите тип!',
					},]}
				>
					<Radio.Group buttonStyle="solid">
						{dataType.map(el => {
							return (<Radio.Button
								key={el.id}
								value={el.id}

								onClick={() => fu(el.type, 1)}
							>
								{el.type}
							</Radio.Button>)
						})}
					</Radio.Group>
				</Form.Item>

				<Form.Item
					label="Назначение"
					name="naznachenie"
					hasFeedback
					rules={[{
						required: true,
						message: 'Выберите назначение!',
					},]}
				>
					<Radio.Group buttonStyle="solid">
						{dataNaznachenie.map(el => {
							return (<Radio.Button key={el.id} value={el.id}>{el.title}</Radio.Button>)
						})}
					</Radio.Group>
				</Form.Item>

				<Form.Item
					label="Бренд"
					name="brand"
					hasFeedback
					rules={[{
						required: true,
						message: 'Выберите бренд!',
					},]}
				>
					<Radio.Group buttonStyle="solid">
						{dataBrands.map(el => {
							return (<Radio.Button
								key={el.id}
								value={el.id}

								onClick={() => fu(el.title, 2)}
							>
								{el.title}
							</Radio.Button>)
						})}
					</Radio.Group>
				</Form.Item>



				<Form.Item
					label="Название"
					// hasFeedback
					name="name"

					rules={[{
						required: true,
						message: 'Введите название!',
					},]}
				>
					<Input
						allowClear
						onBlur={e => {
							requestTitle(e)
							setTitle(e.target.value)
						}}
						addonAfter={<Tooltip title="скопировать название">
							<span
								onClick={copyFunction}
							>
								<CopyOutlined />
							</span>
						</Tooltip>}
						suffix={
							<Tooltip title="Название у разных цветов отдного товара должно быть одинаковым">
								<InfoCircleOutlined
									style={{
										color: 'rgba(0,0,0,.45)',
									}}
								/>
							</Tooltip>
						}
					/>
				</Form.Item>

				<Form.Item
					label="Описание товара"
					name="description"
				// rules={[{
				// 		required: true,
				// 		message: 'Введите описание!'
				// 	},]}
				>
					<TextArea
						autoSize allowClear showCount
					/>
				</Form.Item>


				<Form.Item
					label="Цвет"
					name="color"
					hasFeedback
					rules={[{
						required: true,
						message: 'Добавьте цвет!',
					},]}
				>

					{/* <CirclePicker
							colors={dataColor.map(el => {
								return el.color
							})}

						/> */}
					<Radio.Group>
						<Space direction="vertical">
							{dataColor.map(el => {
								return (
									<Radio key={el.id} className='mt-2' value={el.color}>
										<span className={`ml-2 ${el.color === '#ffffff' && 'bg-slate-300 p-1 rounded-sm'}`} style={{ color: `${el.color}` }}>
											{el.name}
										</span>
									</Radio>
								)
							})}
						</Space>
					</Radio.Group>
				</Form.Item>


				<hr className='pb-5' />

				{/* <Form.Item
					label="Цвет"
					name="color"
					hasFeedback
					rules={[{
						required: true,
						message: 'Добавьте цвет!',
					},]}
				>
					<Select
						mode="multiple"
						showArrow
						tagRender={tagRender}
						style={{
							width: '100%',
						}}
						placeholder="выберите цвет"
					>
						{dataColor.map(el => {
							return (<Option key={el.id} value={el.color} label={el.name} >
								{el.name}
							</Option>
							)
						})}
					</Select>
				</Form.Item> */}

				{/* ---------------------------------------------------- */}

				<Form.Item
					label="Размеры"
					name="size"
					// hasFeedback
					tooltip="Необходимо"

				// rules={[
				// 	{
				// 		required: true,
				// 		message: 'Добавьте размеры!',
				// 	},
				// ]}
				>
					{/* <Select
						mode="multiple"
						showArrow
						style={{
							width: '100%',
						}}
						placeholder="выберите размер"
						optionLabelProp="label"
					>
						{dataSize.map(el => {
							return (
								<Option key={el.id} value={el.size} label={el.size}>
									{el.size}
								</Option>
							)
						})}
					</Select> */}

					{dataSize.map(el => {
						return (
							<div key={el.id} className='bg-slate-300 p-2 mb-3'>

								<Form.Item
									name={['size', `${el.size}`, 'sizesize']}
									valuePropName="checked"
								>
									<Checkbox onChange={e => setCheckBox(e.target.checked)}>{el.size}</Checkbox>
								</Form.Item>

								<Form.Item
									name={['size', `${el.size}`, 'price']}
									labelCol={{
										span: 3,
									}}
									wrapperCol={{
										span: 20,
									}}
									label="Цена"
									rules={[
										{
											required: true,
											message: 'Введите цену!',
										},
									]}
								>
									<InputNumber addonAfter="руб." />
								</Form.Item>

								<Form.Item
									name={['size', `${el.size}`, 'count']}
									labelCol={{
										span: 3,
									}}
									wrapperCol={{
										span: 20,
									}}
									label="Количество"
									rules={[
										{
											required: true,
											message: 'Введите количество!',
										},
									]}
								>
									<InputNumber addonAfter="шт." />
								</Form.Item>

								<Form.Item
									label="Скидка"
									labelCol={{
										span: 3,
									}}
									wrapperCol={{
										span: 20,
									}}
									name={['size', `${el.size}`, 'discountPercentage']}
									rules={[
										{
											required: true,
											message: 'Введите скидку!',
										},
									]}
								>
									<InputNumber addonAfter="%" />
								</Form.Item>

								<Form.Item
									label="Наличие"
									labelCol={{
										span: 3,
									}}
									wrapperCol={{
										span: 20,
									}}
									name={['size', `${el.size}`, 'inStock']}
									initialValue={true}
								>
									<Radio.Group
										optionType="button"
										buttonStyle="solid"
									>
										<Radio.Button value={true}>в наличии</Radio.Button>
										<Radio.Button value={false}>под заказ</Radio.Button>
									</Radio.Group>
								</Form.Item>

							</div>
						)
					})}



				</Form.Item>

				{/* <Form.Item
					label="Цена"
					name="price"
					rules={[
						{
							required: true,
							message: 'Введите цену!',
						},
					]}
				>
					<InputNumber addonAfter="руб." />
				</Form.Item> */}

				{/* <Form.Item
					label="Процент скидки"
					name="discountPercentage"
					rules={[
						{
							required: true,
							message: 'Введите скидку!',
						},
					]}
				>
					<InputNumber
						min={0}
						max={100}
						formatter={(value) => `${value}%`}
						parser={(value) => value.replace('%', '')}
					/>
				</Form.Item> */}

				{/* <Form.Item
					label="Количество"
					name="count"
					rules={[
						{
							required: true,
							message: 'Введите количество!',
						},
					]}
				>
					<InputNumber />
				</Form.Item> */}

				{/* <Form.Item
					label="Наличие"
					name="inStock"
					rules={[{
						required: true,
						message: 'Укажите наличие!',
					},]}
				>
					<Radio.Group
						optionType="button"
						buttonStyle="solid"
					>
						<Radio.Button value={true}>в наличии</Radio.Button>
						<Radio.Button value={false}>под заказ</Radio.Button>
					</Radio.Group>
				</Form.Item> */}

				<hr className='pb-9' />

				<Form.Item
					label="Картинки"
					name="img"
					valuePropName='img'
					// extra=''
					rules={[{
						required: true,
						message: 'Добавьте картинки!',
					},]}
				>
					<DragableComp />
				</Form.Item>

				{/* <Form.Item
					label="Маленькие картинки"
					name="imgMini"

					valuePropName='imgMany'
					extra='! 250/150 .webp'
					rules={[
						{
							required: true,
							message: 'Добавьте картинки!',
						},
					]}
				>
					<DragableComp />
				</Form.Item> */}

				{/* ------------------------------------------- */}

				<Form.Item
					label="Описание"
					name='Opisanie'
					tooltip="Необходимо"
				>
					{dataOpisanie.map(el => {
						return (
							<div className='mb-3 mt-1.5' key={el.id}>
								<p className=''>{el.title}</p>
								<Form.Item
									name={['Opisanie', `${el.title}`, 'content']}
									noStyle
									rules={[
										{
											required: true,
											message: 'Выберите характеристику',
										},
									]}
								>
									<Radio.Group buttonStyle="solid">
										{el.content.map((item, idx) => {
											return (<Radio.Button key={idx} value={item}>{item}</Radio.Button>)
										})}
									</Radio.Group>
								</Form.Item>
							</div>
						)
					})}
				</Form.Item>


				<Form.Item
					wrapperCol={{
						offset: 16,
						span: 8,
					}}
				>
					<Button type="primary" htmlType="submit">
						Сохранить
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}
export default FormProduct