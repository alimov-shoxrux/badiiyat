import React, { useContext } from 'react'
import Hero from '../../components/Hero/Hero'
import BooksCard from '../../components/BooksCard/BooksCard'
import { books } from '../../lib/books'
import { useLocation } from 'react-router-dom'
import { Context } from '../../Context/Context'

function Book() {
  let location = useLocation().pathname
  let {search} = useContext(Context)
  return (
    <div className='container'>
      <Hero/> 
     <ul className="books__list">
    {
   location == '/book' ? books.filter((i)=> i.title.toLowerCase().includes(search.toLowerCase())).map((item,i)=>(
        <li key={i} className='books__item'>
          <BooksCard item={item}/>
        </li>
       )): null
    }
     </ul>
    </div>
  )
}

export default Book