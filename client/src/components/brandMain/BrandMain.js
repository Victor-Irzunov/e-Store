import React from 'react'
import {  Image } from 'antd'
import nike from '../../images/brandMain/nike.svg'
import adidas from '../../images/brandMain/adidas.svg'
import jordan from '../../images/brandMain/jordan.png'
import puma from '../../images/brandMain/puma.png'
import reebok from '../../images/brandMain/reebok.png'

function BrandMain() {
	return (
		<div className='flex justify-between pt-12 pb-12'>
			<Image src={nike} preview={false} className='w-28' />
			<Image src={adidas} className='w-24' />
			<Image src={jordan} className='w-24' />
			<Image src={puma} className='w-24' />
			<Image src={reebok} className='w-24' />
		</div>
	)
}

export default BrandMain