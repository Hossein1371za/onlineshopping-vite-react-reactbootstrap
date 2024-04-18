import React, { useState } from "react";
import { FaStar,FaAngleDown } from "react-icons/fa";

const desc ="با نصب اپلیکیشن ما روی دستگاه خود از خرید لذت ببرید و در زمان صرفه جویی کنید فقط کافیست نصب کنید و شروع به خریدن کنید."

const ProductDisplay = ({ item }) => {
  const { id, name, price, seller, ratingsCount, quantity } = item;
  const [preqouantity, setPrequantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("انتخاب سایز");
  const [color, setColor] = useState("انتخاب رنگ");

  const handleDec = ()=>{
    if(preqouantity >= 1){
        setPrequantity(preqouantity - 1)
    }
  }

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <span>{ratingsCount}  بازدید</span>
        </p>
        <h4 className="number">{price} تومان </h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>
      <div>
        <form>
            <div className="select-product size">
                <select value={size} onChange={(e)=>setSize(e.target.value)}>
                    <option>انتخاب سایز</option>
                    <option>SM</option>
                    <option>MD</option>
                    <option>LG</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
            </div>
            <div >
                <select value={color} onChange={(e)=>setColor(e.target.value)}>
                    <option>انتخاب رنگ</option>
                    <option>صورتی</option>
                    <option>کرمی</option>
                    <option>قرمز</option>
                    <option>سفید</option>
                    <option>ابی</option>
                    <option>مشکی</option>
                </select>
            </div>
            <div className="cart-plus-minus">
                <div className="dec qtybutton" onClick={handleDec}>-</div>
                <input className="cart-plus-minus-box" type="text" name="qtybutton" id="qtybutton" value={preqouantity} onChange={(e)=>setPrequantity(parseInt(e.target.value ,10))}/>
                <div className="inc qtybutton" onClick={()=>setPrequantity(preqouantity + 1)}>+</div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
