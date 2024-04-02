import React, { useState } from "react";
import productData from "../products.json";
import { FaBell, FaGlobe, FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import SelectedCategoty from "../components/SelectedCategoty";

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
  const [searchInput,setSearchInput] = useState("")
  const [filteredProducts,setFilteredProducts] = useState("")

  const handleSearch = (e)=>{
    const searchTerm = e.target.value;
    setSearchInput(searchTerm)

    const filtered = productData.filter((product)=>product.name.includes(searchTerm))
    setFilteredProducts(filtered)
  }

  return <div className="banner-section style-4">
    <div className="container">
      <div className="banner-content">
        {title}
        <form>
          <SelectedCategoty select={"all"}/>
          <input type="text" name="search" id="search" placeholder="جستو جو در محصولات ..." value={searchInput} onChange={handleSearch}/>
          <button type="submit"><FaSearch/></button>
        </form>
        <p>{desc}</p>
        <ul className="lab-ul">
          {
            searchInput && filteredProducts.map((product, index)=>{
              return(
                <li key={index}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  </div>;
};

export default Banner;
