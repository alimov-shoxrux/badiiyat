import React, { useContext, useRef } from 'react'
import './Search.css'
import { Context } from '../../Context/Context'

function Search() {
  const {setSearch} = useContext(Context)
  let inpRef = useRef()
  return (
    <div className='Search'>
      <h2>Qidirish</h2>
      <div className="search__inner">
      <input ref={inpRef} type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
      <button onClick={()=> setSearch(inpRef.current.value)}>search</button>
      </div>
    </div>
  )
}

export default Search