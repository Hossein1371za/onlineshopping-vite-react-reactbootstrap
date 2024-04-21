import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

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

    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems(...cartItems);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };
  const handleRemoveItem = (item) => {
    const updateCart = cartItems.filter(
      (cartItems) => cartItems.id !== item.id
    );
    setCartItems(updateCart);
    updateLocalStorge(updateCart);
  };
  const updateLocalStorge = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + totalPrice(item);
  }, 0);
  const orderTotal = cartSubtotal;

  return (
    <div>
      <PageHeader title={"سبد خرید"} curPage={"خرید کردن"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">محصول</th>
                    <th className="cat-price">قیمت</th>
                    <th className="cat-quantity">تعداد</th>
                    <th className="cat-toprice">مجموع</th>
                    <th className="cat-edit">ویرایش</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link className="me-3 " to="/shop">
                            {item.name}
                          </Link>
                        </div>
                      </td>
                      <td className="cat-price number">{item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                            <div className="dec qtybutton" onClick={()=>handleDecrease(item)}>-</div>
                            <input type="text" className="cart-plus-minus-box" name="qtybutton" value={item.quantity}/>
                            <div className="inc qtybutton" onClick={()=>handleDecrease(item)}>+</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
