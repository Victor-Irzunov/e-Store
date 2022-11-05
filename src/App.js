import React, { createContext } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import UserStore from './store/UserStore'
import DataStore from './store/DataStore'
import Header from './components/header/Header'
import BreadCrumbComp from './components/breadcrumb/BreadcrumbComp'
import MainPage from './pages/main/MainPage'
import ErrorPage from './pages/error/ErrorPage'
import Footer from './components/footer/Footer'
import MenPage from './pages/men/MenPage'
import { ConfigProvider } from 'antd'

// ConfigProvider.config({
//   theme: {
//     primaryColor: 'f96a0e',
//     primaryColor: '#6a11cb',
//     primaryColor: '#f80759',
//   },
// });


export const Context = createContext(null)

function App() {
  return (
    <Context.Provider value={{
      data: new UserStore(),
      dataApp: new DataStore()
    }}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <BreadCrumbComp />
          <main>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/muzhskie' element={<MenPage />} />


              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
