import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Shop from './Components/Pages/Shop'
import ShopCategory from './Components/Pages/ShopCategory'
import Product from './Components/Pages/Product'
import Carts from './Components/Pages/Carts'
import LoginSignUp from './Components/Pages/Login'
import SignUp from './Components/Pages/SignUp'
import TermsAndConditions from './Components/Pages/TermsAndConditions'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import kids_banner from "./Components/Assets/banner_kids.png"
import women_banner from './Components/Assets/banner_women.png'
import NewCollections from './Components/NewCollections/NewCollections'


const App = () => {
  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>} />
      <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>} />
      <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>} />
      <Route path="/product" element={<Product/>}>
         <Route path=":productId" element={<Product/>}/>
      </Route>
      <Route path="/cart" element={<Carts/>}/>
      <Route path="/login" element={<LoginSignUp/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/termsAndConditions'element={<TermsAndConditions/>}/>
      <Route path='/newCollections' element={<NewCollections/>}/>
      
    </Routes>
   
   </Router>
     <Footer/>
   </>
  )
}

export default App