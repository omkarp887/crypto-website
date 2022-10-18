import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const[click, setClick] =useState(false)
    const handleClick =()=>{
        setClick(!click)
    }

  return (
    <div className='header'>
        <div className='container'>
        <h1>Coin<span className='primary'>Trade</span></h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>Featured</a>
            </li>
            <li>
                <a href='/'>Earn</a>
            </li>
            <li>
                <Link to="/contact">About Us</Link>
                {/* <a href='/'>Contact</a> */}
            </li>
        </ul>
        <div className='btn-group'>
            <button className='btn'><a href='https://coinswitch.co/pro/trade?currency=btc%2Finr&exchange=csx' target="_blank">Connect Wallet</a></button>
        </div>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}}/>) }
        </div>
        </div>
    </div>
  )
}

export default Navbar