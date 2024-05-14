import React from 'react'
import Hero from '../../components/Hero/Hero'
import BooksCard from '../../components/BooksCard/BooksCard'
import { books } from '../../lib/books'

function Book() {
  return (
    <div className='container'>
      <Hero/> 
     <ul className="books__list">
    {
       books?.map((item,i)=>(
        <li key={i} className='books__item'>
          <BooksCard item={item}/>
        </li>
       ))
    }
     </ul>
    </div>
  )
}

export default Book