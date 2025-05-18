import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <Link to='/' className='logo'>Logo</Link>
            <div className='menu' onClick={() => {setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
                <li>
                    <NavLink to='/home'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/story'>Story</NavLink>
                </li>
                <li>
                    <NavLink to='/safety_map'>Safety Map</NavLink>
                </li>
            </ul>
        </nav>
    )
}