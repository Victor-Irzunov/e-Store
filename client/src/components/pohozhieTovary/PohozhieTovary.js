import { Divider } from 'antd'
import React, { useState,useEffect } from 'react'
import CarouselCard from '../carouselCard/CarouselCard'
import axios from 'axios'


const PohozhieTovary = () => {
	const [product, setProduct] = useState([])
	const [open, setOpen] = useState(false)
	const showDrawer = () => {
		setOpen(true)
	}


	useEffect(() => {
		axios.get(`https://dummyjson.com/products?limit=10`)
			.then(data => {
				setProduct(data.data.products)
			})
	}, [])


	return (
		<div className="site-card-wrapper relative">
			<Divider
				orientation="left"
				style={{ fontSize: '1.5em', color: '#ccc' }}
				className=''
			>
				Похожие товары
			</Divider>
			<CarouselCard product={product} />
		</div>
	)
}
export default PohozhieTovary