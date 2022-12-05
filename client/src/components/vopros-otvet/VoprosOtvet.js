import { Comment, List, Tooltip } from 'antd'
import moment from 'moment'
import React from 'react'
import 'moment/locale/ru'
moment.locale('ru')


const data = [
	{
		actions:['Да, Стас, натуральная кожа.'],
		author: 'Стас Борецкий',
		avatar: 'https://joeschmoe.io/api/v1/random',
		content: 'Натуральная кожа?',
		datetime: '2022-07-12 09:31:33',
	},
	{
		actions: ['В течении двух недель можете вернуть товар, с чеком или без него.'],
		author: 'Надежда Зык',
		avatar: 'https://joeschmoe.io/api/v1/random',
		content: 'Если отклеется подошва, что делать?',
		datetime: '2022-06-22 11:22:33',
	},
];
const VoprosOtvet = () => (
	<List
		className="comment-list"
		header={`${data.length} вопроса`}
		itemLayout="horizontal"
		dataSource={data}
		renderItem={(item) => (
			<li>
				<Comment
					actions={item.actions}
					author={item.author}
					avatar={item.avatar}
					content={item.content}
					datetime={
						<Tooltip title={item.datetime}>
							<span>{moment(item.datetime).fromNow()}</span>
						</Tooltip>
					}
				/>
			</li>
		)}
	/>
);
export default VoprosOtvet