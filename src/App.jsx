import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Shop from './Components/Pages/Shop'
import ShopCategory from './Components/Pages/ShopCategory'
import Product from './Components/Pages/Product'
import Carts from './Components/Pages/Carts'
import LoginSignUp from './Components/Pages/LoginSignUp'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import kids_banner from "./Components/Assets/banner_kids.png"
import women_banner from './Components/Assets/banner_women.png'


const App = () => {
  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/mens" element={<ShopCategory banner={men_banner} category="mens"/>} />
      <Route path="/womens" element={<ShopCategory banner={women_banner} category="womens"/>} />
      <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids"/>} />
      <Route path="/product" element={<Product/>}/>
         <Route path=":productId" element={<Product/>}/>
      <Route path="/cart" element={<Carts/>}/>
      <Route path="/login" element={<LoginSignUp/>}/>
      
      
    </Routes>
   
   </Router>
     <Footer/>
   </>
  )
}

export default App