import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";

function Shop(){
    return(
        <div className="shop">
            <div className="shopTitle">
                <h3>My Shop</h3>
                <div className="products">
                {PRODUCTS.map((product)=>(
                 <Product data={product}/>
                ))}
                </div>
            </div>
        </div>

    )
}

export default Shop;