import {
	ArrowRightOutlined,
} from '@ant-design/icons'
import { NavLink,Link } from 'react-router-dom'
import logo from '../images/logo/logo.png'
import SearchComp from '../components/searchComp/SearchComp'
import img from '../images/carousel/NIKE.webp'
import img2 from '../images/carousel/NIKE-2.webp'
import img3 from '../images/carousel/NIKE-3.webp'
import sneakers from '../images/mainCardImg/sneakers.webp'
import sneakers2 from '../images/mainCardImg/sneakers-2.webp'
import sneakers3 from '../images/mainCardImg/sneakers-3.webp'
import sneakers4 from '../images/mainCardImg/sneakers-4.webp'
import sneakers5 from '../images/mainCardImg/sneakers-5.webp'
import sneakers6 from '../images/mainCardImg/sneakers-6.webp'
import sneakers7 from '../images/mainCardImg/sneakers-7.webp'
import sneakers8 from '../images/mainCardImg/sneakers-8.webp'
import sneakers9 from '../images/mainCardImg/sneakers-9.webp'
import { Button, Image } from 'antd'


export const items = [
	{
		label: (
			<NavLink to="/">
				<img src={logo} className='inline w-36' />
			</NavLink>),
		key: 'mail',
	},
	{
		label: (
			<SearchComp />
		),
		key: 'search',
	},
	{
		label: <NavLink to="/muzhskie" >
			Мужчинам
		</NavLink>,
		key: 'sub',
		children: [
			{
				type: 'group',
				label: 'Обувь',
				children: [
					{
						label: (
							<Link to="/" >
								Кроссовки
							</Link>
						),
						key: 'setting:1',
						children: [
							{
								label: (
									<Link to="/uslugi/kvartirnyi-pereezd">
										Спорт
									</Link>),
								key: 'setting:21',
							},
							{
								label: (
									<Link to="/uslugi/kvartirnyi-pereezd">
										Зимние
									</Link>),
								key: 'setting:22',
							},
							{
								label: (
									<Link to="/uslugi/kvartirnyi-pereezd">
										Повседневные
									</Link>),
								key: 'setting:23',
							},
						]
					},
					{
						label: (
							<Link to="/">
								Ботинки
							</Link>),
						key: 'setting:2',
						children: [
							{
								label: (
									<Link to="/">
										Зимние
									</Link>),
								key: 'setting:24',
							},
							{
								label: (
									<Link to="/">
										Летние
									</Link>),
								key: 'setting:25',
							},
							{
								label: (
									<Link to="/">
										Осение
									</Link>),
								key: 'setting:26',
							},
						]
					},
					{
						label: (
							<Link to="/uslugi/dostavka-gruzov">
								Сланцы
							</Link>),
						key: 'setting:3',
					},
					{
						label: (
							<Link to="/uslugi/dostavka-gruzov">
								Сандалии
							</Link>),
						key: 'setting:37',
					},
				],
			}
		]
	},
	{
		label: 'Женщинам',
		key: 'search2',
	},
	{
		label: 'Детям',
		key: 'search3',
	},
	{
		label: 'Бренды',
		key: 'search5',
	},
	{
		label: 'Носки',
		key: 'search6',
	},
	{
		label: '|',
	},
	{
		label: 'Распродажа',
		key: 'search8',
	},
	{
		label: 'Акции',
		key: 'search9',
	},
]

export const itemCarousel = [
	{
		id: 1,
		box: img,
	},
	{
		id: 2,
		box: img2,
	},
	{
		id: 3,
		box: img3,
	}
]

export const cardItem = [
	{
		title: 'Card content1',
		image: <Image src={sneakers} />,
		id: 1,
		btn: <Button type='NavLink'>Посмотреть{' '}<ArrowRightOutlined /></Button>
	},
	{
		title: 'Card content2',
		image: <Image src={sneakers2} />,
		id: 2,
		btn: <Button type='NavLink'>Посмотреть{' '}<ArrowRightOutlined /></Button>
	},
	{
		title: 'Card content3',
		image: <Image src={sneakers3} />,
		id: 3,
		btn: <Button type='NavLink'>Посмотреть{' '}<ArrowRightOutlined /></Button>
	},
	{
		title: 'Card content4',
		image: <Image src={sneakers4} />,
		id: 4,
		btn: <Button type='NavLink'>Посмотреть{' '}<ArrowRightOutlined /></Button>
	},
	{
		title: 'Card content5',
		image: <Image src={sneakers} />,
		id: 5,
		btn: <Button type='NavLink'>Посмотреть{' '}<ArrowRightOutlined /></Button>
	},
	{
		title: 'Card content6',
		image: <Image src={sneakers2} />,
		id: 6,
		btn: <Button type='NavLink'>Посмотреть{' '}<ArrowRightOutlined /></Button>
	},
]

export const dataListFooter = [
	'Возврат товара',
	'Доставка',
	'Размеры',
	'Уход за обувью и гарантия',
	'Подарочные карты'
]
export const dataListFooter2 = [
	'Зимние кроссовки',
	'Кроссовки для бега',
	'Баскетбольные кроссовки',
	'Белье кроссовки'
]


export const titles = {
	'/': {
		title: 'Крупный онлайн-магазин обуви в Беларуси - e-Store',
		description: 'Огромный выбор кроссовок известных производителей. Доставка.'
	},
	'/muzhskie': {
		title: 'Мужская обувь купить в Минске',
		description: 'Огромный выбор мужской обуви известных производителей. Кожанные. Белые. Рассрочка.'
	},
}

export const itemCard = [
	{
		id: 1,
		img: sneakers,
		title: 'Nike / Кроссовки',
		description: 'Jordan 4 Retro',
		art: '50069669',
		price: 235,
		rate: 2.5,
		rateText:34,
	},
	{
		id: 2,
		img: sneakers2,
		title: 'Nike / Кроссовки',
		description: 'Jordan 4 Retro',
		art: '50069669',
		price: 235,
		rate: 4.5,
		rateText: 45,
	},
	{
		id: 3,
		img: sneakers3,
		title: 'Nike / Кроссовки',
		description: 'Jordan 4 Retro',
		art: '50069669',
		price: 235,
		rate: 5,
		rateText:14,
	},
	{
		id: 4,
		img: sneakers4,
		title: 'Nike / Кроссовки',
		description: 'Jordan 4 Retro',
		art: '50069669',
		price: 235,
		rate: 1.5,
		rateText: 31,
	},
	{
		id: 5,
		img: sneakers5,
		title: 'Nike / Кроссовки',
		description: 'Jordan 4 Retro',
		art: '50069669',
		price: 220,
		rate: 4,
		rateText: 36,
	},
	{
		id: 6,
		img: sneakers6,
		title: 'Nike / Кроссовки',
		description: 'Jordan 4 Retro',
		art: '50069669',
		price: 235,
		rate: 3,
		rateText:12,
	},
	{
		id: 7,
		img: sneakers7,
		title: 'Nike / Кроссовки',
		description: 'Jordan 4 Retro',
		art: '50069669',
		price: 235,
		rate: 5,
		rateText:69,
	},
	{
		id: 8,
		img: sneakers8,
		title: 'Nike / Кроссовки',
		description: 'Jordan 4 Retro',
		art: '50069669',
		price: 235,
		rate: 4.5,
		rateText:58,
	},
	{
		id: 9,
		img: sneakers9,
		title: 'Nike / Кроссовки',
		description: 'Jordan 4 Retro',
		art: '50069669',
		price: 235,
		rate: 3.5,
		rateText:24,
	},
]

export const textMenPage = {
	h1: 'Мужская обувь',
	h2: 'Где купить мужские кроссовки?',
	h3: 'Преимущества покупки на сайте',
	p: 'Кроссовки – неотъемлемый атрибут любого молодого человека. Сегодня комфорт ценится превыше всего, а активный образ жизни диктует свои правила. Поэтому любой человек, который предпочитает удобство и стиль в одном флаконе, отдает предпочтение кроссовкам.',
	p2:`Чтобы быстро сориентироваться в широком ассортименте мужских кроссовок, необходимо обратить внимание на целевое предназначение этого важного элемента гардероба. Для офисного использования и прогулок нужно ориентироваться на элегантные модели с эластичными мягкими стельками и гибкой подошвой. Если необходимы кроссовки для активного занятия спортом необходимо обратить внимание на вес обуви, её эргономичность и удобство. Они надежно зафиксируют стопу, и не будут ограничивать движения. В интернет-магазине sneakers.by представлены модели из последних брендовых коллекций и цветовой гаммы, различающиеся по функциональности. В каталоге представлена мужская продукция от Nike, Adidas, Puma и других производителей.

	Если у покупателя остаются сомнения по выбору подходящего товара можно обратиться за консультацией к менеджерам, которые предоставят исчерпывающую информацию о продукции, способах покупки и доставки. Покупатель сможет найти в каталоге модель, подходящую для занятия спортом и активного отдыха. Вся продукция создается из надежных и долговечных материалов. У покупателей есть возможность подобрать соответствующего цвета, дизайна, размера. На мужские кроссовки цена оптимальная.`,
	p3:`В Минске купить мужские кроссовки достаточно легко. Всего-то стоит написать в поисковой строке «купить мужские кроссовки» и поисковик сразу выдаст вам как минимум 10 Интернет-магазинов, где спортивная обувь представлена в большом разнообразии. Естественно, в первую очередь мы обращаем внимание на кроссовки известных брендов. В этом нет ничего удивительного, потому как только у них можно найти обувь, которая будет не только выполнена из качественных материалов, но и обеспечит полный комфорт при ходьбе.
	Однако как выбрать мужские кроссовки в Беларуси? На что обращать внимание? В этой статье мы бы хотели дань несколько дельных советов, которые помогут вам выбрать идеально сидящую на ноге пару спортивной обуви.
	·Совет № 1 Лучше всего примерять кроссовки вечером, так как под конец дня ноги устают, а значит становятся больше в размере. Обувь, которая не доставит вам дискомфорта вечером, будет отлично носится и не будет натирать.
	·Совет № 2 Обувь должна быть максимально легкой, поэтому просто сравните несколько понравившихся моделей, держа их в руках.
	·Совет № 3 Лучше выбрать модель со съемной стелькой.
	·Совет № 4 Если вы ищете кроссовки для занятий спортом, то выбирайте модели со шнурками, так как они лучше фиксируют ногу.
	·Совет № 5 Пройдитесь в новой паре по магазину. Обувь не должна нигде давить, но и болтаться на ней тоже не должна.`
}

export const user = [
	{
		user: 'Хомичь Надежда Ивановна',
		id: 1,
		nik: 'jaqueline',
		text: 'Перевозили диван в Минске. Вышла на улицу без телефона к указанному времени, прождала 25 минут, сказали, что звонили предупрудить об пробке на дороге.  А так я очень давольна, вежливые и аккуратные сотрудники, еще и по адекватной цене. Рекомендую!',
		date: '2022-06-22 11:22:33'
	},
	{
		user: 'Сацук Сергей',
		id: 2,
		nik: 'jed',
		text: 'Вывозили строительный мусор, не ожидал, что придут со щёткой. В подьезде и лифте осталось чисто и это круто)) ',
		date: '2022-07-12 09:31:33'
	},
	{
		user: 'Лукашевич Петр',
		id: 3,
		nik: 'jai',
		text: 'Отличная компания. Остались очень довольны. Цены средние. В общем всем рекомендую этих ребят!!!',
		date: '2022-07-25 18:01:33'
	},
	{
		user: 'Окуневич Егор',
		id: 4,
		nik: 'jerry',
		text: 'Заказал переезд на другой офис в Минске, позвонил и в этот же день все было перевезено. Спасибо за сервис!',
		date: '2022-08-01 20:11:13'
	},
	{
		user: 'Корачун Настя',
		id: 5,
		nik: 'jodi',
		text: 'Заказала доставку бытовой техники, предлагали в магазине доставку, надо было долго ждать. Узнала от подруги об этой компании, когда заносили немного ударили холодильник (маленькая вмятина), но это я виновата долго решала куда ставить технику. Очень довольна, рекомендую!',
		date: '2022-08-10 21:22:18'
	},
]