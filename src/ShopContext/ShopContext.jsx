import React,{createContext, useState, useEffect}  from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext=createContext(null);
 const getDefaultCart=()=>{
        let cart={}
        all_product.forEach((product) => {
            cart[String(product.id)] = 0;
          });
        return cart
    }
const ShopContextProvider=(props)=>{
    //console.log("ShopContextProvider - all_product:", all_product); // Debug log
    
    const [cartItems, setCartItems]=useState(getDefaultCart())
  

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }

     // Log cartItems whenever it changes
  useEffect(() => {
    console.log("Updated cartItems:", cartItems);
  }, [cartItems]);

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
     const contextValue={all_product,cartItems,addToCart,removeFromCart}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider