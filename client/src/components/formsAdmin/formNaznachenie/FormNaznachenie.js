import React, { useState, useEffect } from 'react'
import FormComp from '../FormComp'
import { fetchNaznachenie } from '../../../http/productsAPI'
import { createNaznachenie, deleteNaznachenie } from '../../../http/adminAPI'

const FormNaznachenie = () => {
	const [isLoad, setIsLoad] = useState(false)
	const [data, setData] = useState([])

	useEffect(() => {
		fetchNaznachenie().then(data => {
			setData(data)
		})
	}, [isLoad])

	return (
		<div>
			<p className='mb-4'>Добавить / Удалить назначение обуви</p>
			<FormComp
				setIsLoad={setIsLoad}
				data={data}
				fuCreate={createNaznachenie}
				fuDelete={deleteNaznachenie}
				text='назначение'
				row={'title'}
			/>
		</div>
	)
}
export default FormNaznachenie