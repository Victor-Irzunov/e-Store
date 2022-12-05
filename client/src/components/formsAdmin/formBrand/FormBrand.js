import React, { useState, useEffect } from 'react'
import FormComp from '../FormComp'
import { fetchBrands } from '../../../http/productsAPI'
import { createBrand, deleteBrand } from '../../../http/adminAPI'

const FormBrand = () => {
	const [isLoad, setIsLoad] = useState(false)
	const [data, setData] = useState([])

	useEffect(() => {
		fetchBrands().then(data => {
			setData(data)
		})
	}, [isLoad])

	return (
		<div>
			<p className='mb-4'>Добавить / Удалить бренд</p>
			<FormComp
				setIsLoad={setIsLoad}
				data={data}
				fuCreate={createBrand}
				fuDelete={deleteBrand}
				text='бренд'
				row={'title'}
			/>
		</div>
	)
}
export default FormBrand