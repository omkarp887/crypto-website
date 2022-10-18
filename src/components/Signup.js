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
                    <button className='btn'><a href='https://en.wikipedia.org/wiki/Cryptocurrency' target="_blank">learn more</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup