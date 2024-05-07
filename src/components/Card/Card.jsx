import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({item}) {
    const navigation = useNavigate()

    return (
        <div>
            <div onClick={()=> navigation(`/adib/${item.id}`)} className="adib__card">
                <img src={item.img} alt="" />
                <div className="card__inner">
                    <h4 >{item.name.slice(0,18)}</h4>
                    <p>{item.date}</p>
                    <div className='book__audio'>
                        <span><i className="bi bi-book-fill"></i><p>{item.books}</p></span>
                        <span><i className="bi bi-headphones"></i><p>{item.au}</p></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card