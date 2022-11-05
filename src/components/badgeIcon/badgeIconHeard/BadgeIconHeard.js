// import { HeartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import heart from '../../../images/menuIcon/heart.svg'
import React, { useContext } from 'react'
import { ReactComponent as Heart } from '../../../images/menuIcon/heart.svg'
import './BadgeIconHeard.css'
import { Context } from '../../../App'

const BadgeIconHeard = ({ cardComp, header, addToLiked, id }) => {
	const { dataApp } = useContext(Context)
	return (
		<>
			{cardComp &&
				<div
					className='absolute top-2 right-4 cursor-pointer'
					onClick={() => addToLiked(id)}
				>
					<Heart className='icon-heart' />
				</div>
			}
			{
				header &&
				<div className='absolute top-1/4 right-48 cursor-pointer'>
					<Badge count={dataApp.likedLength} size="small">
						<img
							src={heart}
							className='w-6 hover:scale-110 duration-500'
						/>
					</Badge>
				</div>
			}
		</>

	)
}
export default BadgeIconHeard