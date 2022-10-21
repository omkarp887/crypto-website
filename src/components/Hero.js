import React, { useState } from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'
import { Link } from 'react-router-dom'

function Hero() {
    const[disable, setDisable] = useState(true)
    const handleChange=(e)=>{
        setDisable(e.target.value === '')
    }
  return (
    <div className='hero'>
        <div className='container'>
            {/* left side  */}
            <div className='left'>
                <p>Buy & Sell Crypto 24/7 using your account</p>
                <h1>Invest in Cryptocurrency</h1>
                <p>Buy, Sell and store hundereds of Cryptocurrency</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your email' onChange={handleChange} />
                    <Link to="/login"><button className='btn' disabled={disable}>Login</button></Link>
                </div>
            </div>

            {/* right side */}
            <div className='right'>
                <div className='img-container'>
                    <img src={Crypto} alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero