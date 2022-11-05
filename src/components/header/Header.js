import React, { useContext, useEffect } from 'react'
import HeaderAddress from './header-address/HeaderAddress'
import { Affix } from 'antd'
import HeaderMenu from './headerMenu/HeaderMenu'
import BadgeIconHeard from '../badgeIcon/badgeIconHeard/BadgeIconHeard'
import BadgeIconBasked from '../badgeIcon/BadgeIconBasket'
import BadgeIconVesy from '../badgeIcon/badgeIconVesy/BadgeIconVesy'
import { Context } from '../../App'
import { observer } from "mobx-react-lite"

const Header = observer(() => {
  const { dataApp } = useContext(Context)

  useEffect(() => {
    let cookie = {}
    decodeURIComponent(document.cookie).split(';').forEach(el => {
      let [k, v] = el.split('=')
      cookie[k.trim()] = v
    })
    if (cookie['ComparisonList']) {
      let arr = JSON.parse(cookie['ComparisonList'])
      dataApp.setVesyLength(arr.length)
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
    }
  }, [dataApp.likedLength])

  return (
    <>
      <HeaderAddress />
      <Affix
        offsetTop={0}
      >
        <header
          className='relative'
          style={{
            backgroundImage: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
            minHeight: '7vh'
          }}>
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