import { Row, Col } from 'antd'
import React from 'react'


const property = [
	{
		title: 'Основные',
		id: 1,
		children: [
			{
				type: 'Тип',
				kakoj: 'Кроссовки',
			},
			{
				type: 'Назначение',
				kakoj: 'Беговые',
			},
			{
				type: 'Цвет',
				kakoj: 'черный',
			},
			{
				type: 'Коллекция',
				kakoj: 'Powerlift (Adidas)',
			},
		]
	},
	{
		title: 'Размеры',
		id: 2,
		children: [
			{
				type: 'Размер (UK)',
				kakoj: '11',
			},
			{
				type: 'Размер (US)',
				kakoj: '11.5',
			},
			{
				type: 'Размер (EU)',
				kakoj: '46',
			},
			{
				type: 'Длина стельки',
				kakoj: '28.5',
			},
		]
	},
	{
		title: 'Конструктивные особенности',
		id: 3,
		children: [
			{
				type: 'Материал верха',
				kakoj: 'текстиль (парусина)',
			},
			{
				type: 'Внутренний материал',
				kakoj: 'текстиль',
			},
			{
				type: 'Материал подошвы',
				kakoj: 'резина',
			},
			{
				type: 'Вид застежки',
				kakoj: 'шнуровка, липучка',
			},
		]
	},
	{
		title: '',
		id: 3,
		children: [
			{
				type: 'Страна производства',
				kakoj: 'Китай'
			}
		]
	}

]

const Property = () => {
	return (
		<>
			<Row>
				{
					property.map((el, idx) => {
						return (
							<Col
								xl={{ span: 8, offset: `${idx === 1 && 2 || idx === 3 && 2}` }}
								className='mt-10 p-3'
							>
								<h6
									key={el.id}
									className='font-bold text-base mb-2'
								>
									{el.title}
								</h6>
								{el.children && el.children.map((elem, i) => {
									return (
										<div key={i} className='flex justify-between'>
											<p>{elem.type}</p>
											<p className='text-left'>{elem.kakoj}</p>
										</div>
									)
								})}
							</Col>
						)
					})
				}
			</Row>
		</>
	)
}
export default Property