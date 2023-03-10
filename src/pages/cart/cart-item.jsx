import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function CartItem (props){
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeCart } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
         <div className="countHandler">
           <button onClick={()=> removeCart(id)}>-</button>
           <input value={cartItems[id]} />
           <button onClick={()=> addToCart(id)}>+</button>
         </div>
      </div>
    </div>
  );
};

export default CartItem;