import React, { useContext, } from 'react'
import { Helmet } from "react-helmet"
import { BackTop } from 'antd'
import CarouselComp from '../../components/carousel/CarouselComp'
import MainCard from '../../components/mainCard/MainCard'
import HisotyStore from '../../components/historyeStore/HisotyStore'
import BrandMain from '../../components/brandMain/BrandMain'
import SubscriptionMain from '../../components/subscriptionMain/SubscriptionMain'
import TitleAffix from '../../components/titleAffix/TitleAffix'
import { observer } from "mobx-react-lite"
import { Context } from '../../App'
// import {fetchProducts } from '../../http/deviceAPI'

const MainPage = observer(() => {
  const { dataApp } = useContext(Context)

  // useEffect(() => {
  //   fetchProducts()
  //     .then(data => {
  //       dataProducts.setDataAllProducts(data)
  //     })
  // }, [])

  return (
    <>
      <Helmet>
        <title>{dataApp.data['/'].title}</title>
        <meta name="description" content={dataApp.data['/'].description} />
      </Helmet>

      
      <BackTop />
      <section className='container'>
        <TitleAffix url={'/'} btn={'Изменить Title'} form={'FormTitleChange'} title={'Изменить Title / Description'} />
        <CarouselComp />
        <MainCard />
        <HisotyStore />
        <BrandMain />
        <SubscriptionMain />
      </section>
    </>
  )
})

export default MainPage