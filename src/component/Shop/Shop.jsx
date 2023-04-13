import React, { useEffect, useState } from "react";
import {addToDb, getShoppingCart} from '../../utilities/fakedb';
import "./Shop.css";
import Product from "../Product/Product";

import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
 

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(()=>{
    const storedCart=getShoppingCart();
const saveCart=[];

    // step 1// get product
    for(const id in storedCart){
      //step 2:, get the product by using id
      const addedProduct=products.find(product=>product.id===id)
  if(addedProduct){
//step3; get quality of product
const quantity = storedCart[id];
addedProduct.quantity=quantity;
// step:4 add the added product to the save cart
saveCart.push(addedProduct)
  }
      

    }
    // step5: set cart
    setCart(saveCart)
  },[products])


  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);

addToDb(product.id)
    
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={() => handleAddToCart(product)}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
