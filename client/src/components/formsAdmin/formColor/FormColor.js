import React, { useState, useEffect } from 'react'
import FormComp from '../FormComp'
import { fetchColor } from '../../../http/productsAPI'
import { createColor, deleteColor } from '../../../http/adminAPI'


const FormColor = () => {
	const [isLoad, setIsLoad] = useState(false)
	const [data, setData] = useState([])

	useEffect(() => {
		fetchColor().then(data => {
			setData(data)
		})
	}, [isLoad])

	return (
		<div>
			<p className='mb-4'>Добавить / Удалить цвет обуви</p>
			<FormComp
				setIsLoad={setIsLoad}
				data={data}
				fuCreate={createColor}
				fuDelete={deleteColor}
				text='цвет'
				row={'color'}
				color={true}
			/>
		</div>
	)
}
export default FormColor