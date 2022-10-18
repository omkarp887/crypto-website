import React from 'react'
import Crypto from '../assets/graph.png'
import Navbar from "./Navbar";

function Contact() {
  return (
    <div>
    <Navbar />
    <h2>This is the information page for this website.</h2>
    <p>Here is the something you might get help</p>
    <br></br>
    <p>CoinSwitch is now India's largest crypto app with millions of users and more than 500 employees.
         We're backed by some of the world's leading investors including a16z, Tiger Global and Sequoia Capital.
        The cornerstones of our culture are customer obsession and an employee-first approach. We're building a platform that democratises investments for everyone — making them simple, safe and accessible to every Indian.</p>
    <img src={Crypto} alt='' width='1500px'/>
    </div>
  )
}

export default Contact