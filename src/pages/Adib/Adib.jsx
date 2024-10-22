import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { adib } from '../../lib/adib'
import { books } from '../../lib/books'
import './Adib.css'
import BookcApp from '../../components/BooksCarusel/BooksCarusel'
import BooksCard from '../../components/BooksCard/BooksCard'

function Adib() {
  const { id } = useParams()
  let findAdib = adib.find((item) => item.id == id)
  let filBooks = books.filter((item) => item.adibId == id)
  return (
    <div className="container">
      <div className='adiv__detail'>
        <div className="adib__div">
          <div className="adib__left">
            <div className='adib__img'>
              <img src={findAdib.img} alt="" />
            </div>

            <div className="adib__dates">
              <div>
                <h4>Tavallud sanasi</h4>
                <h1>{findAdib.date.slice(0, 4)}</h1>
                <h3>Toshkent, Uzbekistan</h3>
              </div>
              <span>-</span>
              <div>
                <h4>Dafn etilgan sanasi</h4>
                <h1>{findAdib.date.slice(-4)}</h1>
                <h3>Toshkent, Uzbekistan</h3>
              </div>
            </div>

          </div>
          <div className="adib__right">
            <h1 className='adib__right__name'>{findAdib.name}</h1>
            <p>{findAdib.dis}</p>
            <ul className="books__list">
              {
                filBooks?.length > 0 ? (
                  filBooks.map((item, i) => (
                    <li key={i} className="books__item">
                      <BooksCard item={item} />
                    </li>
                  ))):(
                    <h2 className='not__books'>haven't books yet :(</h2>
                  )
              }

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adib