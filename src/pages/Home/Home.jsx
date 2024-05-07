import React from 'react'
import Hero from '../../components/Hero/Hero'
import './Home.css'
import Card from '../../components/Card/Card'
import { adib } from '../../lib/adib'

function Home() {
  return (
    <div className='container'>
      <Hero/>
      <ul className="home__list">
        {
          adib.map((item,index)=>(
            <li key={index} className='home__item'>
              <Card item={item} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home