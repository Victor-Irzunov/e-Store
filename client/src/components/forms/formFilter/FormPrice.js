import { Col, InputNumber, Row, Slider } from 'antd';
import React, { useState } from 'react';
const IntegerStep = () => {
	const [inputValue, setInputValue] = useState(1);
	const onChange = (newValue) => {
		setInputValue(newValue);
	}
	return (
		<Row>
			<Col span={24}>
				<span>от</span>
			</Col>
			<Col span={24}>
				<Slider
					min={15}
					max={600}
					step={0.1}
					onChange={onChange}
					value={typeof inputValue === 'number' ? inputValue : 0}
				/>
			</Col>
			<Col span={12}>
				<InputNumber
					min={15}
					max={600}
					step={0.1}
					style={{
						margin: '0 16px',
					}}
					value={inputValue}
					onChange={onChange}
				/>
			</Col>
		</Row>
	);
};
const DecimalStep = () => {
	const [inputValue, setInputValue] = useState(0);
	const onChange = (value) => {
		if (isNaN(value)) {
			return;
		}
		setInputValue(value);
	};
	return (
		<Row>
			<Col span={24}>
				<span>до</span>
			</Col>
			<Col span={24}>
				<Slider
					min={15}
					max={600}
					onChange={onChange}
					value={typeof inputValue === 'number' ? inputValue : 0}
					step={0.1}
				/>
			</Col>
			<Col span={12}>
				<InputNumber
					min={15}
					max={600}
					style={{
						margin: '0 16px',
					}}
					step={0.1}
					value={inputValue}
					onChange={onChange}
				/>
			</Col>
		</Row>
	);
};
const FormPrice = () => (
	<div>
		<IntegerStep />
		<DecimalStep />
	</div>
);
export default FormPrice