import React from 'react'

import Navbar from "./Navbar";
import Hero from "./Hero";
import Featured from "./Featured";
import Signup from "./Signup";
import Footer from "./Footer";

function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Featured />
    <Signup />
    <Footer />
    </>
  )
}

export default Home