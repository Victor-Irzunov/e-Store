import React, { useState, useContext } from 'react'
import { Helmet } from "react-helmet"
import { Typography, Layout, Space, Button, Divider } from 'antd'
// import { titles } from '../../content/Content'
import { HighlightOutlined, } from '@ant-design/icons'
import CardComp from '../../components/Card/CardComp'
import FilterAll from '../../components/filterAll/FilterAll'
import { textMenPage } from '../../content/Content'
import TitleAffix from '../../components/titleAffix/TitleAffix'
import { Context } from '../../App'
import { observer } from "mobx-react-lite"

const { Sider, Content } = Layout
const { Paragraph } = Typography

const MenPage = observer(() => {
	const { dataApp } = useContext(Context)
	const [editH1, setEditH1] = useState(textMenPage.h1)
	const [editH2, setEditH2] = useState(textMenPage.h2)
	const [editH3, setEditH3] = useState(textMenPage.h3)
	const [editP, setEditP] = useState(textMenPage.p)
	const [editP2, setEditP2] = useState(textMenPage.p2)
	const [editP3, setEditP3] = useState(textMenPage.p3)

	return (
		<>
			<Helmet>
				<title>{dataApp.data['/muzhskie'].title}</title>
				<meta name="description" content={dataApp.data['/muzhskie'].description} />
			</Helmet>
			<section className='container pt-10'>
				<TitleAffix url={'/muzhskie'} btn={'Изменить Title'} form={'FormTitleChange'} title={'Изменить Title / Description'} />
				<Space align='center'>
					<Typography.Title
						editable={{
							onChange: setEditH1,
							icon: <HighlightOutlined />,
						}}
						level={1}
						className=''
					>
						{editH1}
					</Typography.Title>
					<span className='text-slate-400'>256 товаров</span>
				</Space>
				<br />
				<Space className='mt-6 mb-6'>
					<span className='text-sm text-slate-400'>Ещё категории:
						<Button size='large' type="link">
							<span className='underline'>Кроссовки</span>
						</Button>
						<Button type="link" size='large'>
							<span className='underline'>Ботинки</span>
						</Button>
						<Button type="link" size='large'>
							<span className='underline'>Сланцы</span>
						</Button>
						<Button type="link" size='large'>
							<span className='underline'>Сандалии</span>
						</Button>
					</span>
				</Space>
				<br />
				<Space>
					<div>
						<Button
							type="primary"
							shape="round"
							size='small'
							className='mr-16'
						>
							Фильтр подбора
						</Button>
					</div>
					<div>
						<span className='text-sm text-slate-400'>
							Сортировать по:
							<Button
								type="text"
							>
								<span className='underline'>Популярности</span>
							</Button>
							<Button
								type="text"
							>
								<span className='underline'>Рейтингу</span>
							</Button>
							<Button
								type="text"
							>
								<span className='underline'>Цене</span>
							</Button>
						</span>
					</div>
				</Space>

				<Layout className='mt-2'>

					<Sider theme='light'>
						<FilterAll />
					</Sider>


					<Content className='pb-20 bg-white'>
						<CardComp />
						<div className='mt-32'>
							<Paragraph editable={{ onChange: setEditP }}>{editP}</Paragraph>
							<Divider orientation="left">
								<Typography.Title
									editable={{
										onChange: setEditH2,
										icon: <HighlightOutlined />,
									}}
									level={2}
									className=''
								>
									{editH2}
								</Typography.Title>
							</Divider>
							<Paragraph editable={{ onChange: setEditP2 }}>{editP2}</Paragraph>
							<Typography.Title
								editable={{
									onChange: setEditH3,
									icon: <HighlightOutlined />,
								}}
								level={3}
								className=''
							>
								{editH3}
							</Typography.Title>
							<Paragraph editable={{ onChange: setEditP3 }}>{editP3}</Paragraph>
						</div>
					</Content>
				</Layout>

			</section>
		</>
	)
})

export default MenPage