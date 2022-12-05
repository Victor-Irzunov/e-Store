import React, { useEffect, useState } from 'react'
import FormOpisanie from './FormOpisanie_'
import { Button, message, Space } from 'antd'
import { fetchOpisanie } from '../../../http/productsAPI'
import ListOpisanie from '../../listAdminOpisanie/ListOpisanie'

function Opisanie() {
	const [data, setData] = useState([])
	const [isActive, setIsActive] = useState(false)
	const [messages, setMessages] = useState(false)

	useEffect(() => {
		fetchOpisanie()
			.then(data => {
				setData(data)
			}).catch(error => {
				message.error(error)
			})
	}, [messages])

	return (
		<div>
			<p className='mb-4'>Добавить описание</p>
			<FormOpisanie data={data} setMessages={setMessages}  />
			<Button
				type='text'
				className='font-bold mb-8'
				onClick={() => setIsActive(i => !i)}
			>Смотреть описание</Button>
			<div>
				{isActive &&
					<ListOpisanie data={data} setMessages={setMessages} />
				}
			</div>
		</div>
	)
}

export default Opisanie