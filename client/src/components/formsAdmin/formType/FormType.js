import React, { useState, useEffect } from 'react'
import FormComp from '../FormComp'
import { fetchType } from '../../../http/productsAPI'
import { createType, deleteeType } from '../../../http/adminAPI'



const FormType = () => {
	const [isLoad, setIsLoad] = useState(false)
	const [data, setData] = useState([])

	useEffect(() => {
		fetchType().then(data => {
			setData(data)
		})
	}, [isLoad])

	return (
		<div>
			<p className='mb-4'>Добавить / Удалить тип продукта</p>
			<FormComp
				setIsLoad={setIsLoad}
				data={data}
				fuCreate={createType}
				fuDelete={deleteeType}
				text='тип'
				row='type'
			/>
		</div>
	)
}
export default FormType