import React from 'react'
import './Search.css'

function Search() {
  return (
    <div className='Search'>
      <h2>Qidirish</h2>
      <div className="search__inner">
      <input type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
      <button>search</button>
      </div>
    </div>
  )
}

export default Search