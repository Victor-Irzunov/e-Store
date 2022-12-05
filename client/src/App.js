import React, { createContext, useState, useEffect } from 'react'
import './App.css'
import { Spin, ConfigProvider } from 'antd'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import UserStore from './store/UserStore'
import DataStore from './store/DataStore'
import ProductsStore from './store/ProductsStore'
import Header from './components/header/Header'
import BreadCrumbComp from './components/breadcrumb/BreadcrumbComp'
import MainPage from './pages/main/MainPage'
import ErrorPage from './pages/error/ErrorPage'
import Footer from './components/footer/Footer'
import MenPage from './pages/men/MenPage'
import ProductPage from './pages/productPage/ProductPage'
import { observer } from "mobx-react-lite"
import { check } from './http/userAPI'
import ResultComp from './components/result/ResultComp'
import { duration } from 'moment'
import AdminPage from './pages/admin/AdminPage'
import locale from 'antd/es/locale/ru_RU'

// ConfigProvider.config({
//   theme: {
//     primaryColor: 'f96a0e',
//     primaryColor: '#6a11cb',
//     primaryColor: '#f80759',
//   },
// });


// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';


export const Context = createContext(null)

const App = observer(() => {
  const [loading, setLoading] = useState(true)
  const [user] = useState(new UserStore())

  useEffect(() => {
    check()
      .then(data => {
        user.setUserData(data)
        if (data.isActivation) {
          user.setIsAuth(true)
          user.setUser(true)
          
        }
      })
      .finally(() => setLoading(false))
  }, [])


  if (loading) {
    return <Spin size="large" />
  }


  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorPrimary: '#038fd4',
        },
      }}
    >
      <Context.Provider value={{
        user,
        dataApp: new DataStore(),
        dataProducts: new ProductsStore()
      }}>

        
{/* <DndProvider backend={HTML5Backend}> */}
        


        <BrowserRouter>
          <div className="app">
            <Header />

            <main className='bg-gray-50 relative'>
              <BreadCrumbComp />
              <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/muzhskie' element={<MenPage />} />
                <Route path='/uspeshno' element={<ResultComp />} />
                <Route path='/super-adminka' element={<AdminPage />} />
                <Route
                  path='/muzhskie/:category/:id/:title'
                  element={<ProductPage />}
                />
                <Route path='*' element={<ErrorPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>


        {/* </DndProvider>      */}





      </Context.Provider>
    </ConfigProvider>
  )
})

export default App
