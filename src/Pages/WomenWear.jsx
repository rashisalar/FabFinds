import React from 'react'
import Jewellery from './Jewellery'
import HeroWomenwear from './HeroWomenwear'
import FlashSales from '../components/FlashSaleTimer/FlashSaleTimer'
import Navbar from '../components/Navbar/Navbar'
import Goggles from './Goggles'
import Womenwestern from './Womenwestern'
import Shirt from './Shirt'
import Subscribe from '../components/Subscribe/Subscribe'
import TopandBottom from './TopandBottom'
import Footer from '../components/Footer/Footer'


const WomenWear = ({ setOrderPopup }) => {
  return (
    <div>
      <Navbar/>
      <HeroWomenwear/>
      <Jewellery/>
      <FlashSales/>
      <Goggles/>
      <FlashSales/>    
      <Womenwestern/>
      <FlashSales/>   
      <Shirt/>
      <Subscribe/>
      <TopandBottom/>
      <Footer/>
    </div>
  )
}

export default WomenWear


