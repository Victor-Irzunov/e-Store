import React, { useContext, useEffect, useState } from 'react'
import HeaderAddress from './header-address/HeaderAddress'
import { Affix } from 'antd'
import HeaderMenu from './headerMenu/HeaderMenu'
import BadgeIconHeard from '../badgeIcon/badgeIconHeard/BadgeIconHeard'
import BadgeIconBasked from '../badgeIcon/BadgeIconBasket'
import BadgeIconVesy from '../badgeIcon/badgeIconVesy/BadgeIconVesy'
import { Context } from '../../App'
import { observer } from "mobx-react-lite"
// import {fetchProducts } from '../../http/deviceAPI'

const Header = observer(() => {
  const { dataApp,dataProducts } = useContext(Context)
  const [isAffix, setIsAffix] = useState(false)



  // useEffect(() => {
  //   fetchProducts()
  //     .then(data => {
  //       dataProducts.setDataAllProducts(data)
  //     })
  // }, [])

  useEffect(() => {
    let cookie = {}
    decodeURIComponent(document.cookie).split(';').forEach(el => {
      let [k, v] = el.split('=')
      cookie[k.trim()] = v
    })
    if (cookie['ComparisonList']) {
      let arr = JSON.parse(cookie['ComparisonList'])
      dataApp.setVesyLength(arr.length)
      dataApp.setVesyArr(arr)
    }
  }, [dataApp.vesyLength])

  useEffect(() => {
    let cookie = {}
    decodeURIComponent(document.cookie).split(';').forEach(el => {
      let [k, v] = el.split('=')
      cookie[k.trim()] = v
    })
    if (cookie['LikedList']) {
      let arr = JSON.parse(cookie['LikedList'])
      dataApp.setLikedLength(arr.length)
      dataApp.setLikedArr(arr)
    }
  }, [dataApp.likedLength])

  return (
    <>
      <HeaderAddress />
      <Affix
        offsetTop={0}
        className='z-50'
        onChange={(affixed) => setIsAffix(affixed)}
      >
        <header
          className={isAffix ? 'relative pt-1 pb-2' : 'relative pt-3 pb-4'}
          style={{backgroundImage: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)', }}>
          <div className='container'>
            <nav>
              <HeaderMenu />
            </nav>
            <BadgeIconVesy header={true} />
            <BadgeIconHeard header={true} />
            <BadgeIconBasked />
          </div>
        </header>
      </Affix>
    </>
  )
})

export default Header