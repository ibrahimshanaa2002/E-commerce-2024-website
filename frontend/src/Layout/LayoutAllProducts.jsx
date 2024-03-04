import React from 'react'
import Navbar from '../components/navBar/Navbar'
import Footer from '../components/Footer/Footer'
import AllProducts from '../Pages/AllProducts/AllProducts'

const LayoutAllProducts = () => {
  return (
    <div>
    <Navbar />
    <AllProducts/>
    <Footer />
  </div>
  )
}

export default LayoutAllProducts