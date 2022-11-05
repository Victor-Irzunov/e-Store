import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { Rate, Card, Row, Col, Button, Tooltip, Badge } from 'antd'
import React, { useContext } from 'react'
import Svg from '../../images/menuIcon/Svg'
import { itemCard } from '../../content/Content'
import BadgeIconVesy from '../badgeIcon/badgeIconVesy/BadgeIconVesy'
import BadgeIconHeard from '../badgeIcon/badgeIconHeard/BadgeIconHeard'
import { observer } from "mobx-react-lite"
import { Context } from '../../App'


const CardComp = observer(() => {
	const { dataApp } = useContext(Context)

	function getCookie(name) {
		var matches = document.cookie.match(new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}

	const addToComparisonList = id => {
		let arr = []
		var value_cookie = getCookie("ComparisonList")
		if (value_cookie === undefined) {
			let cookieArr = []
			let date = new Date()
			date.setYear(date.getFullYear() + 1)
			document.cookie = encodeURIComponent('ComparisonList') + '=' + encodeURIComponent(JSON.stringify(cookieArr)) + '; expires=' + date.toUTCString() + ';'
		}
		let cookie = {}
		decodeURIComponent(document.cookie).split(';').forEach(el => {
			let [k, v] = el.split('=')
			cookie[k.trim()] = v
		})
		arr = JSON.parse(cookie['ComparisonList'])
		if (!arr.includes(id)) {
			arr.push(id)
			dataApp.setVesyLength(arr.length)
		}
		let date = new Date()
		date.setYear(date.getFullYear() + 1)
		let json_str = JSON.stringify(arr)
		document.cookie = encodeURIComponent('ComparisonList') + '=' + encodeURIComponent(json_str) + '; expires=' + date.toUTCString() + ';'
	}


	const addToLiked = id => {
		let arr = []
		var value_cookie = getCookie("LikedList")
		if (value_cookie === undefined) {
			let cookieArr = []
			let date = new Date()
			date.setYear(date.getFullYear() + 1)
			document.cookie = encodeURIComponent('LikedList') + '=' + encodeURIComponent(JSON.stringify(cookieArr)) + '; expires=' + date.toUTCString() + ';'
		}
		let cookie = {}
		decodeURIComponent(document.cookie).split(';').forEach(el => {
			let [k, v] = el.split('=')
			cookie[k.trim()] = v
		})
		arr = JSON.parse(cookie['LikedList'])
		if (!arr.includes(id)) {
			arr.push(id)
			dataApp.setLikedLength(arr.length)
		}
		let date = new Date()
		date.setYear(date.getFullYear() + 1)
		let json_str = JSON.stringify(arr)
		document.cookie = encodeURIComponent('LikedList') + '=' + encodeURIComponent(json_str) + '; expires=' + date.toUTCString() + ';'
	}

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
							<BadgeIconVesy cardComp={true} addToComparisonList={addToComparisonList} id={el.id} />
							<BadgeIconHeard cardComp={true} addToLiked={addToLiked} id={el.id} />
							<div className='h-56'>
								<img src={el.img} />
							</div>
							<p className='font-bold text-lg'>{el.title}</p>
							<p className='text-base'>{el.description}</p>
							<p className='font-thin text-xs'>Артикул: {el.art}</p>
							<br />
							<Rate allowHalf defaultValue={el.rate} disabled />
							<span className="ant-rate-text"> <Badge style={{
								backgroundColor: '#52c41aa8',
							}} count={el.rateText} /></span>
							<br />
							<br />
							<p className='uppercase text-2xl font-semibold'>{el.price} BYN</p>
							<br />
							<br />
							<Tooltip title="Добавить в корзину">
								<Button
									type="primary"
									shape="round"
									size="large"
									onClick={() => addBasket()}
									icon={<Svg />}
									style={{ float: 'right' }}
								/>
							</Tooltip>
						</Card>
					</Col>
				)
			})}




		</Row>
	)
})
export default CardComp