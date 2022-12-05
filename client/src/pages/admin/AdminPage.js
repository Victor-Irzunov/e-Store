import React from 'react'
import { Row, Col, Divider } from 'antd'
import FormBrand from '../../components/formsAdmin/formBrand/FormBrand'
import FormType from '../../components/formsAdmin/formType/FormType'
import FormSize from '../../components/formsAdmin/formSize/FormSize'
import FormColor from '../../components/formsAdmin/formColor/FormColor'
import FormNaznachenie from '../../components/formsAdmin/formNaznachenie/FormNaznachenie'
import Opisanie from '../../components/formsAdmin/formOpisanie/Opisanie'
import FormCategory from '../../components/formsAdmin/formCategory/FormCategory'
import FormProduct from '../../components/formsAdmin/formProduct/FormProduct'



const AdminPage = () => {


	return (
		<section className='pb-28'>
			<div className='container'>
				<p className='text-2xl mt-8'>Страница администратора</p>
				<Row gutter={[0, 30]} className='pt-10 pb-10'>
					<Col xl={12}>
						<FormCategory />
					</Col>
					<Col xl={12}>
						<FormNaznachenie />
					</Col>
					<Col xl={12}>
						<FormBrand />
					</Col>
					<Col xl={12}>
						<FormType />
					</Col>
					<Col xl={12}>
						<FormSize />
					</Col>
					<Col xl={12}>
						<FormColor />
					</Col>


				</Row>

				<Divider />

				<Row gutter={[10, 10]} className=''>
					<Col xl={24}>
						<Opisanie />
					</Col>
				</Row>

				<Divider />

				<Row>
					<Col xl={24}>
						<p className='text-xl mb-10'>Добавить товар</p>
						<FormProduct />
					</Col>
					<Col xl={24}>

					</Col>
				</Row>
			</div>
		</section>
	)
}

export default AdminPage