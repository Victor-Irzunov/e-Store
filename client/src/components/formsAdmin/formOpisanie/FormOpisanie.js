import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space } from 'antd';
const { Option } = Select;
const areas = [
	{
		label: 'Beijing',
		value: 'Beijing',
	},
	{
		label: 'Shanghai',
		value: 'Shanghai',
	},
];
const sights = {
	Beijing: ['Tiananmen', 'Great Wall'],
	Shanghai: ['Oriental Pearl', 'The Bund'],
}



const FormOpisanie = ({ data }) => {
	const [form] = Form.useForm()

	const onFinish = (values) => {
		console.log('Received values of form:', values);
	};
	const handleChange = () => {
		form.setFieldsValue({
			sights: [],
		});
	};
	return (
		<Form
			form={form}
			name="dynamic_form_complex"
			onFinish={onFinish}
			autoComplete="off"
		>

			<Form.List name="sights">
				{(fields, { add, remove }) => (
					<>
						{fields.map((field) => (
							<Space key={field.key} align="baseline">
								<Form.Item
									noStyle
									shouldUpdate={(prevValues, curValues) =>
										prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
									}
								>

									<Form.Item
										{...field}
										label="Price"
										name={[field.name, 'price']}
										rules={[
											{
												required: true,
												message: 'Missing price',
											},
										]}
									>
										<Input />
									</Form.Item>

									
										<Form.Item
											{...field}
											label="Sight"
											name={[field.name, 'sight']}
											rules={[
												{
													required: true,
													message: 'Missing sight',
												},
											]}
										>
											<Select
												style={{
													width: 130,
												}}
											>
												{[{ id: 1, title: 'tttt' }].map(el => (
													<Option key={el.id} value={el.title}>
														{el.title}
													</Option>
												))}
											</Select>
										</Form.Item>
									
								</Form.Item>


								<MinusCircleOutlined onClick={() => remove(field.name)} />
							</Space>
						))}

						<Form.Item>
							<Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
								Add sights
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};
export default FormOpisanie