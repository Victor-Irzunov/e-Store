import React, { useContext } from 'react'
import { Helmet } from "react-helmet"
import CarouselComp from '../../components/carousel/CarouselComp'
import MainCard from '../../components/mainCard/MainCard'
import HisotyStore from '../../components/historyeStore/HisotyStore'
import BrandMain from '../../components/brandMain/BrandMain'
import SubscriptionMain from '../../components/subscriptionMain/SubscriptionMain'
import TitleAffix from '../../components/titleAffix/TitleAffix'
import { observer } from "mobx-react-lite"
import { Context } from '../../App'

const MainPage = observer(() => {
  const { dataApp } = useContext(Context)

  return (
    <>
      <Helmet>
        <title>{dataApp.data['/'].title}</title>
        <meta name="description" content={dataApp.data['/'].description} />
      </Helmet>
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