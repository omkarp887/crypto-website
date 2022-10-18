import React from 'react'
import './Signup.css'
import Crypto from '../assets/trade.png'

function Signup() {
  return (
    <div className='signup'>
        <div className='container'>
            {/* left */}
            <div className='left'>
                <img src={Crypto} alt=''/>
            </div>
            {/* right */}
            <div className='right'>
                <h2>Earn passive income with Crypto</h2>
                <p>Earn upto 20% qnnual rewards and get free 1 BitCoin</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your email'/>
                    <button className='btn'>learn more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup