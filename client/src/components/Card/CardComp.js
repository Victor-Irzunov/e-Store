// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { Rate, Card, Row, Col, Button, Tooltip, Badge, Image } from 'antd'
import React, { useContext, useState } from 'react'
import Svg from '../../images/menuIcon/Svg'
// import { itemCard } from '../../content/Content'
import { Link } from 'react-router-dom'
import BadgeIconVesy from '../badgeIcon/badgeIconVesy/BadgeIconVesy'
import BadgeIconHeard from '../badgeIcon/badgeIconHeard/BadgeIconHeard'
import { observer } from "mobx-react-lite"
import { Context } from '../../App'
import { useCookieList } from '../../hooks/useCookieList'


const CardComp = observer(({ itemCard }) => {
	const { dataApp } = useContext(Context)
	const [visible, setVisible] = useState(false)

	const { addList } = useCookieList(null)




	const addBasket = () => {
		dataApp.setBasketLength(dataApp.basketLength + 1)
	}

	return (
		<Row gutter={[0, 0]}>
			{itemCard.map(el => {
				return (
					<Col xl={8}>
						<Card
							className='hover:border-blue-500 relative'
							key={el.id}
						>

							<BadgeIconVesy
								cardComp={true}
								addToComparisonList={addList}
								id={el.id}
							/>
							<BadgeIconHeard
								cardComp={true}
								addToLiked={addList}
								id={el.id}
							/>
							<div className='h-60 overflow-hidden'>
								<Image
									preview={{
										visible: false,
									}}
									src={el.thumbnail}
									onClick={() => setVisible(true)}
								// className='w-auto bg-cover bg-center'
								/>
								<div
									style={{
										display: 'none',
									}}
								>
									<Image.PreviewGroup
										preview={{
											visible,
											onVisibleChange: (vis) => setVisible(vis),
										}}
									>
										{el.images.map((elem, idx) => {
											return (
												<Image
													src={elem}
													key={idx}
												/>
											)
										})}
									</Image.PreviewGroup>
								</div>
							</div>

							{/* <Link to={{`/muzhskie/${el.category}/${el.id}/${el.title}`, { state: 123 }}}> */}
							<Link to={{
								pathname: `/muzhskie/${el.category}/${el.id}/${el.title}`
							}}> 
							<div className='h-72 p-2 cursor-pointer'>
								<div className='h-36 mb-3 flex flex-col justify-between'>
									<p className='font-bold text-lg'>{el.title}</p>
									<p className='text-sm'>
										{el.description}
									</p>
									<p className='font-thin text-xs'>Артикул:
										{el.id}
									</p>
									<div>
										<Rate allowHalf defaultValue={el.rating} disabled />
										<span className="ant-rate-text"> <Badge style={{
											backgroundColor: '#52c41aa8',
										}} count={el.rating} /></span>
									</div>
								</div>

								<div
								>
									<Badge
										status="success"
										text="в наличии"
									/>
									<p className='uppercase text-2xl font-semibold'>{el.price} BYN</p>
									<Tooltip title="Добавить в корзину">
										<Button
											type="primary"
											shape="round"
											size="large"
											onClick={() => addBasket()}
											icon={<Svg />}
											className='absolute bottom-3 right-3'
										/>
									</Tooltip>
								</div>
							</div>
						</Link>
					</Card>
					</Col>
	)
})}




		</Row >
	)
})
export default CardComp