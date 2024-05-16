import React from 'react'
import './BooksDetail.css'
import { useParams } from 'react-router-dom'
import { books } from '../../lib/books';
import BooksCard from '../../components/BooksCard/BooksCard'; 

function BooksDetail() {
  let { slug } = useParams()
  let findBook = books.find((i) => i.id == slug)
  let fillBooks = books.filter((i) => i.category == findBook.category && i.id != findBook.id)

  return (
    <div className='BooksDetail container'>
        <div className="booksDetail">
          <div className="books_dl">
            <img src={findBook.img} alt="" />
          </div>
          <div className="books_dr">
              <h1>{findBook.title}</h1>
              <div className='books__ds'>
                  <p className='books_da'></p>
              </div>
          </div>
        </div>





      <ul className="bd__list">
        {
          fillBooks?.map((item) => (
            <li className="bd__item">
              <BooksCard item={item}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default BooksDetail