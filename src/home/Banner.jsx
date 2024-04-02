import React, { useState } from "react";
import productData from "../products.json";
import { FaBell, FaGlobe, FaUser } from "react-icons/fa6";

const title = (
  <h2>
    محصول خود را از بین <span>هزاران</span> محصول جستوجو کنید
  </h2>
);
const desc = "ماز بزرگتریت بزرگ از انواع محصولات را داریم";

const bannerList =[
  {
    icon:<FaUser/>,
    text: "1.5 ملیون مشتری"
  },
  {
    icon:<FaBell />,
    text: "1.5 ملیون مشتری"
  },
  {
    icon:<FaGlobe />,
    text: "1.5 ملیون مشتری"
  },
]

const Banner = () => {
  const [serchInput,setSearchInput] = useState("")
  const [filteredProducts,setFilteredProducts] = useState("")


  return <div className="banner-section style-4">
    <div className="container">
      <div className="banner-content">
        {title}
        <form>
          <input type="text" name="search" id="search" placeholder="جستو جو در محصولات ..."/>
        </form>
      </div>
    </div>
  </div>;
};

export default Banner;
