
import { Menu } from 'antd';
import React, { useState } from 'react';
import { items } from '../../../content/Content'
// import { useScreens } from '../../../Constants/constants'


const HeaderMenu = () => {
	const [current, setCurrent] = useState('main')
	// const screens = useScreens()
	const onClick = e => { setCurrent(e.key) }



	return (
		<div
			style={{ position: 'relative' }}
		>
			<Menu
				onClick={onClick}
				selectedKeys={[current]}
				mode="horizontal"
				// triggerSubMenuAction='click'
				items={items}
				style={{
					background: 'transparent',
					color: '#fff',
				}}
			/>

		</div>
	)
}
export default HeaderMenu