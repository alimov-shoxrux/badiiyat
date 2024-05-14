import React from 'react'
import './BooksCard.css'
import { Rate } from 'antd';
import star from './img/star.png'
import { books } from '../../lib/books'
function BooksCard({ item }) {
    return (
        <div className='BookCard'>
            <img src={item.img} />
            <h4>{item.title.slice(0,13)}</h4>
            <p>{item.author.slice(0,20)}</p>
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
    )
}

export default BooksCard