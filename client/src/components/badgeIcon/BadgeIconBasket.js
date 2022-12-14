import { Badge } from 'antd'
import React, { useContext } from 'react'
import Svg from '../../images/menuIcon/Svg.js'
import { Context } from '../../App.js'
import { observer } from "mobx-react-lite"

const BadgeIconBasked = observer(() => {
	const { dataApp } = useContext(Context)

	return (
		<div className='absolute top-5 right-36 cursor-pointer'>
			<Badge count={dataApp.basketLength} size="small" showZero>
				<Svg />
			</Badge>

		</div>
	)
})
export default BadgeIconBasked