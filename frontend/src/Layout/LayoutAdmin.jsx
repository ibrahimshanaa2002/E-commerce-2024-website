import React from 'react'
import AddProduct from '../components/addProduct/AddProduct'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'

const LayoutAdmin = () => {
  return (
    <div>
         <Navbar/>
         <AddProduct/>
         <Footer/>
    </div>
  )
}

export default LayoutAdmin