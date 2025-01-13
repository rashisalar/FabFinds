import React from 'react'
import Jewellery from './Jewellery'
import Hero from '../components/Hero/Hero'
import FlashSales from '../components/FlashSaleTimer/FlashSaleTimer'
import Navbar from '../components/Navbar/Navbar'
import Goggles from './Goggles'
// import Womenwestern from './Womenwestern'


const WomenWear = ({ setOrderPopup }) => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Jewellery setOrderPopup={setOrderPopup} />
      <FlashSales/>
      <Goggles/>
      <FlashSales/>    
      {/* <Womenwestern/> */}
    </div>
  )
}

export default WomenWear


