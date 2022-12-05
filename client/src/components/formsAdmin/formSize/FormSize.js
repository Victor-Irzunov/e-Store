import React, { useState, useEffect } from 'react'
import FormComp from '../FormComp'
import { fetchSize } from '../../../http/productsAPI'
import { createSize, deleteSize } from '../../../http/adminAPI'

const FormSize = () => {
	const [isLoad, setIsLoad] = useState(false)
	const [data, setData] = useState([])

	useEffect(() => {
		fetchSize().then(data => {
			setData(data)
		})
	}, [isLoad])

	return (
		<div>
			<p className='mb-4'>Добавить / Удалить размер обуви</p>
			<FormComp
				setIsLoad={setIsLoad}
				data={data}
				fuCreate={createSize}
				fuDelete={deleteSize}
				text='размер'
				row={'size'}
			/>
		</div>
	)
}
export default FormSize