
import { Badge } from 'antd'
import React, { useContext } from 'react'
import { observer } from "mobx-react-lite"
import vesy from '../../../images/menuIcon/scale.svg'
import { ReactComponent as Vesy } from '../../../images/menuIcon/scale.svg'
import './BadgeIconVesy.css'
import { Context } from '../../../App'



const BadgeIconVesy = observer(({ cardComp, header, addToComparisonList, id }) => {
	const { dataApp } = useContext(Context)



	return (
		<>
			{
				cardComp &&
				<div
					className='absolute top-2 right-14 cursor-pointer'
					onClick={() => addToComparisonList(id)}
				>
					<Vesy className='icon-vesy' />
				</div>
			}
			{
				header &&
				<div className='absolute top-3 right-60 cursor-pointer'>
					<Badge count={dataApp.vesyLength} size="small">
						<img
							src={vesy}
							className='w-6 hover:scale-110 duration-500'
						/>
					</Badge>
				</div>
			}

		</>

	)
})
export default BadgeIconVesy