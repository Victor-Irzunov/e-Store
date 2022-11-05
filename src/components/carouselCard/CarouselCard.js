import React from 'react'
import { Card, Space, Button,Image } from 'antd'
import { cardItem } from '../../content/Content'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
	ArrowRightOutlined,
	ArrowLeftOutlined,
} from '@ant-design/icons'

const ButtonGroup = ({ next, previous, ...rest }) => {
	const { carouselState: { currentSlide } } = rest;
	return (
		<div className="absolute top-56 right-10">
			<Button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} ><ArrowLeftOutlined /> Назад</Button>
			<Button onClick={() => next()} >Вперед <ArrowRightOutlined /></Button>
		</div>
	);
};
const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};
const CarouselCard = () => {

	return (
		<div className='overflow-hidden h-64'>
			<Carousel
				arrows={false}
				customButtonGroup={<ButtonGroup />}
				responsive={responsive}
			>
				{
					cardItem.map(el => {
						return (
							<Card bordered={false} hoverable={true} style={{ background: '#efefef', height: '200px', marginRight: '1em' }}>
								<Space>
									{el.image}
									<div>
										{el.title}
										{el.btn}
									</div>
								</Space>
							</Card>
						)
					})
				}
			</Carousel>
		</div>
	)
}

export default CarouselCard