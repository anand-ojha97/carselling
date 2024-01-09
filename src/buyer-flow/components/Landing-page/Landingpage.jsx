import React from 'react'
import Banner from './components/Banner'
import Makes from './components/Makes'
import BodyType from './components/BodyType'
import FeaturedCar from './components/FeaturedCar'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Faqs from './components/Faqs'
import FreeAccount from './components/FreeAccount'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Landingpage = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Makes />
        <BodyType />    
        <FeaturedCar/>
        <Services />
        <HowItWorks />
        <Faqs />
        <FreeAccount />
        <Footer />
    </div>
  )
}

export default Landingpage
