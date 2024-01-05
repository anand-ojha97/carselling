import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Makes from './components/Makes'
import BodyType from './components/BodyType'
import FeaturedCar from './components/FeaturedCar'

const Landingpage = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Makes />
        <BodyType />    
        <FeaturedCar/>
    </div>
  )
}

export default Landingpage
