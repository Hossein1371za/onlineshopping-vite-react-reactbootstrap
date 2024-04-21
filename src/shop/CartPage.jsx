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
  return <div>CartPage</div>;
};

export default CartPage;
