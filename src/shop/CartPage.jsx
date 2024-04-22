import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import { FaAngleDown } from "react-icons/fa";

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
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCart);
      updateLocalStorage(updatedCart);
    }
  };

  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
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
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice number">
                        {totalPrice(item)} تومان
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-bottom">
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="کد تخفیف..."
                  />
                  <input type="submit" value="ارسال کد تخفیف" />
                </form>
                <form className="cart-checkout">
                  <input type="submit" value="تازه سازی خرید" />
                  <div>نوع پرداخت</div>
                </form>
              </div>
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>هزینه ارسال</h3>
                      <div className="outline-select">
                        <select>
                          <option value="ایران">ایران</option>
                          <option value="امریکا">آمریکا</option>
                          <option value="انگلیس">انگلیس</option>
                          <option value="چین">چین</option>
                          <option value="پاکستان">پاکستان</option>
                        </select>
                        <span className="select-icon">
                          <FaAngleDown />
                        </span>
                      </div>
                      <div className="outline-select shiping-select">
                        <select>
                          <option value="ایران">تهران</option>
                          <option value="امریکا">نیو یورک</option>
                          <option value="انگلیس">لندن</option>
                          <option value="چین">پکن</option>
                          <option value="پاکستان">اسلام اباد</option>
                        </select>
                        <span className="select-icon">
                          <FaAngleDown />
                        </span>
                      </div>
                      <input type="text" name="postalCode" id="postalCode" placeholder="کد پستی" className="cart-page-input-tet"/>
                      <button type="submit" className="mt-3">ارسال آدرس</button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>مجموع سبد خرید</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">جمع سبد خرید</span>
                          <p className="pull-right">{cartSubtotal} تومان</p>
                        </li>
                        <li>
                          <span className="pull-left">هزینه ارسال و بسته بندی</span>
                          <p className="pull-right">هزینه رایگان است</p>
                        </li>
                        <li>
                          <span className="pull-left">کل سفارش</span>
                          <p className="pull-right">{orderTotal} تومان</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
