import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Shop from './Components/Pages/Shop'
import ShopCategory from './Components/Pages/ShopCategory'
import Product from './Components/Pages/Product'
import Carts from './Components/Pages/Carts'
import LoginSignUp from './Components/Pages/LoginSignUp'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/mens" element={<ShopCategory category="mens"/>} />
      <Route path="/womens" element={<ShopCategory category="womens"/>} />
      <Route path="/kids" element={<ShopCategory category="kids"/>} />
      <Route path="/product" element={<Product/>}/>
         <Route path=":productId" element={<Product/>}/>
      <Route path="/cart" element={<Carts/>}/>
      <Route path="/login" element={<LoginSignUp/>}/>
      
      
    </Routes>
    <Footer/>
   </Router>
    
   </>
  )
}

export default App