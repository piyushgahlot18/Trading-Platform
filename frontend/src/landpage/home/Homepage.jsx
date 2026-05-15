import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero';
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import About from '../about/About'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'
import StatsSection from "./StatsSection";

const Homepage = () => {
  return (
    <div>
      
      <Hero/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <About/>
      
    </div>
  )
}

export default Homepage
