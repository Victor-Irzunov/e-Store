import { Collapse } from 'antd'
import React from 'react'
import FormCategory from '../forms/formFilter/FormSize'
import FormBrand from '../forms/formFilter/FormBrand'
import FormRadioColor from '../forms/formFilter/FormRadioColor'
import FormPrice from '../forms/formFilter/FormPrice'
const { Panel } = Collapse


const FilterAll = () => {
	return (
		<Collapse defaultActiveKey={['1', '2', '3', '4']} ghost expandIconPosition='end'>
			<Panel header="Размер" key="1">
				<FormCategory />
			</Panel>
			<Panel header="Бренд" key="2">
				<FormBrand />
			</Panel>
			<Panel header="Цвет" key="3">
				<FormRadioColor />
			</Panel>
			<Panel header="Цена" key="4">
				<FormPrice />
			</Panel>
		</Collapse>
	)
}
export default FilterAll