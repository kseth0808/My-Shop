import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import  CartItem  from "./cart-item";

function Cart() {
  const { cartItems, getTotalAmount} = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ?(
      <div className="checkout">
        <h2>Subtotal: ${totalAmount}</h2>
        <button onClick={()=> navigate("/")}>Continue Shopping</button>
        <button onClick={()=> navigate("/Checkout")}>Checkout</button>
      </div>
    ): (
      <h1>Your cart is empty</h1>
    )}
    </div>
  );
};

export default Cart;