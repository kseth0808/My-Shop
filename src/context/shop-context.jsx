import React, { createContext ,useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}
  for(let i=0; i<PRODUCTS.length; i++){
    cart[i] = 0;
  }
  return cart;
};

function ShopContextProvider (props) {
  const getTotalAmount =()=>{
    let totalAmount = 0;
    for(const item in cartItems){
    if(cartItems[item]>0){
      let iteminfo = PRODUCTS.find((product)=>product.id ===Number(item));
      totalAmount +=cartItems[item]*iteminfo.price
    }
    }
    return totalAmount;
  }
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => { 
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }
  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }
  const updateCartItem = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount}));
  }
  const contextValue = { cartItems, addToCart, removeCart, updateCartItem, getTotalAmount }
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  ) 
}

export default ShopContextProvider;