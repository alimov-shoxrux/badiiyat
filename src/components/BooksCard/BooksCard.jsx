import React from 'react'
import './BooksCard.css'
import star from './img/star.png'
import { Link, useNavigate } from 'react-router-dom';
function BooksCard({ item }) {
    const navigate = useNavigate()
    return (
        <Link to={`/book-detail/${item.id}`}>
            <div className='BookCard'>
                <img src={item.img} />
                <h4>{item.title.slice(0, 13)}</h4>
                <p>{item.author.slice(0, 20)}</p>
                <div className='rating'>
                    <div className='rating__one'>
                        <img src={star} alt="" />
                        <p>{item.rating}</p>
                    </div>
                    <div className='rating__two'>
                        <p>{item.price} uzs</p>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default BooksCard