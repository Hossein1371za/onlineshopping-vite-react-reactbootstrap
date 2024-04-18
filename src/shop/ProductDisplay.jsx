import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const desc ="با نصب اپلیکیشن ما روی دستگاه خود از خرید لذت ببرید و در زمان صرفه جویی کنید فقط کافیست نصب کنید و شروع به خریدن کنید."

const ProductDisplay = ({ item }) => {
  const { id, name, price, seller, ratingsCount, quantity } = item;
  const [precouantity, setPrequantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("انتخاب سایز");
  const [color, setColor] = useState("انتخاب رنگ");

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
        <h4>{price} تومان </h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
