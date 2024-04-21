import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);
  const totalPrice = (item) => {
    return item.price * item.quantity;
  };
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems(...cartItems);

        localStorage.setItem("cart",JSON.stringify(cartItems))
  };
  const handleDecrease = (item)=>{
    if(item.quantity > 1){
        item.quantity -= 1
        setCartItems(...cartItems)
        localStorage.setItem("cart",JSON.stringify(cartItems))
    }
  }
  const handleRemoveItem = (item)=>{
    const updateCart = cartItems.filter((cartItems)=> cartItems.id !== item.id)
    setCartItems(updateCart)
    updateLocalStorge(updateCart)
  }
  const updateLocalStorge = (cart)=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  }
  const cartSubtotal = cartItems.reduce((total,item)=>{
    return total + totalPrice(item)
  },0)
  return <div>CartPage</div>;
};
const orderTotal = cartSubtotal

export default CartPage;
