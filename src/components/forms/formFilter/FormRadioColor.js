import { Input, Radio, Space } from 'antd';
import React from 'react';
const FormRadioColor = () => {
	const onChange = (e) => {
		console.log('radio checked', e.target.value);
	};
	return (
		<Radio.Group onChange={onChange}>
			<Space direction="horizontal" wrap>
				<Radio className='relative' value='red'><span className='absolute top-0 left-0 w-6 h-6 bg-red-500 rounded-full'></span></Radio>
				<Radio className='relative' value='white'><span className='absolute top-0 left-0 w-6 h-6 border border-gray-300 bg-white rounded-full'></span></Radio>
				<Radio className='relative' value='blue'><span className='absolute top-0 left-0 w-6 h-6 bg-blue-500 rounded-full'></span></Radio>
				<Radio className='relative' value='yellow'><span className='absolute top-0 left-0 w-6 h-6 bg-yellow-300 rounded-full'></span></Radio>
				<Radio className='relative' value='green'><span className='absolute top-0 left-0 w-6 h-6 bg-green-500 rounded-full'></span></Radio>
				<Radio className='relative' value='black'><span className='absolute top-0 left-0 w-6 h-6 bg-black rounded-full'></span></Radio>
				<Radio className='relative' value='lightblue'><span className='absolute top-0 left-0 w-6 h-6 bg-blue-300 rounded-full'></span></Radio>
				<Radio className='relative' value='pink'><span className='absolute top-0 left-0 w-6 h-6 bg-red-300 rounded-full'></span></Radio>
				<Radio className='relative' value='gray'><span className='absolute top-0 left-0 w-6 h-6 bg-gray-400 rounded-full'></span></Radio>
			</Space>
		</Radio.Group>
	);
};
export default FormRadioColor