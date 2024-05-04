import React from 'react'
import './Header.css'
import logo from './img/logo.svg'
import acccaunt from './img/accaunt.svg'
import { Link, useLocation } from 'react-router-dom'
function Header() {
    const location = useLocation().pathname
  return (
    <header>
        <nav className='nav container'>
            <Link to='/'>
                <img src={logo} alt="logo" />
            </Link>
            <ul className="nav__list">
                <li className="nav__item">
                    <Link className={location == '/' ? 'active' : null}to='/'>
                        Bosh sahifa
                    </Link>
                </li>
                <li className="nav__item">
                    <Link className={location == '/book' ? 'active' : null}  to='/book'>
                        Kitoblar
                    </Link>
                </li>
                <li className="nav__item">
                    <Link className={location == '/profile' ? 'active' : null} to='/profile'>
                        Profile
                    </Link>
                </li>
            </ul>
            <img src={acccaunt} alt="acccaunt" />
        </nav>
    </header>
  )
}

export default Header