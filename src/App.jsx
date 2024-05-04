import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Book from './pages/Book/Book'
import Adib from './pages/Adib/Adib'
import BooksDetail from './pages/BooksDetail/BooksDetail'

function App() {

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/booksdetail/:id' element={<BooksDetail/>}/>
        <Route path='/adib/:slug' element={<Adib/>}/>
      </Routes>
    </div>
  )
}

export default App
