import { Popover } from 'antd'
import {
  SearchOutlined,
} from '@ant-design/icons'
import React from 'react'
import FormSearch from '../forms/formSearch/FormSearch'



const SearchComp = () => (
  <Popover content={FormSearch} placement="bottomLeft" title="Поиск по каталогу">
    <SearchOutlined style={{ fontSize: '1.3em' }} />
  </Popover>
);
export default SearchComp