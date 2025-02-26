import React,{createContext}  from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext=createContext(null);

const ShopContextProvider=(props)=>{
    console.log("ShopContextProvider - all_product:", all_product); // Debug log
    const contextValue={all_product}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider