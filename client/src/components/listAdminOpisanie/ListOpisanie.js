import React from 'react'
import { Button, List, message, } from 'antd'
import { deleteOpisanie } from '../../http/adminAPI'

const ListOpisanie = ({ data, setMessages }) => {

	const deleteFu = id => {
		deleteOpisanie(id)
			.then(data => {
				setMessages(i => !i)
			})
			.catch(err => {
				message.error(err.message)
			})
	}



	return (
		<List
			grid={{
				gutter: 4,
				column: 2,
			}}
			itemLayout='vertical'
			size='small'
			dataSource={data}
			renderItem={(item) => (
				<List.Item key={item.id} >
					<List.Item.Meta
						title={<p className='font-semibold'>{item.title}</p>}
						description={<List
							dataSource={item.content}
							renderItem={el => (
								<List.Item>
									{el}
								</List.Item>
							)}
						/>}
					/>

					<Button
						type='text'
						className='text-red-600 font-light text-xs'
						onClick={() => deleteFu(item.id)}
					>
						удалить
					</Button>
				</List.Item>
			)}
		/>
	)
}
export default ListOpisanie