import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import TotalPriceCalculator from '../Car-listing/components/TotalPriceCalculator'
const CarList = () => {
  return (
        <>
           <Navbar />
           <TotalPriceCalculator />
           <Footer />
        </>
  )
}

export default CarList
