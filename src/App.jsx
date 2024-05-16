import { useContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Book from './pages/Book/Book'
import Adib from './pages/Adib/Adib'
import BooksDetail from './pages/BooksDetail/BooksDetail'
import { Context } from './Context/Context'
import Login from './pages/Login/Login'

function App() {
  let {setSearch} = useContext(Context)
  let location = useLocation().pathname
  const navigate = useNavigate()
  useEffect(() => {
    setSearch('')
    if(window.localStorage.getItem('token') !== 'abvgd'){
      navigate('/login')
    }
  }, [location])
  

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book' element={<Book />} />
        <Route path='/book-detail/:slug' element={<BooksDetail />} />
        <Route path='/adib/:id' element={<Adib />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
