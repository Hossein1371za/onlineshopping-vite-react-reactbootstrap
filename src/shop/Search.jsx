import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Search = ({ products, gridList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filterProducts = products.filter((product) =>
    product.name.includes(searchTerm)
  );
  return (
    <div className="widget widget-search">
      <form className="search-wrapper mb-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="جستوجو..."
          defaultValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      {
        searchTerm && filterProducts.map((product)=>(
          <Link key={product.id} to={`/shop${product.id}`}>
            <div className="d-flex gap-3 p-2">
              <div>
                <div className="pro-thumb h-25">
                  <img src={product.img} alt="" width={70} className="flex-{grow|shrink}-0" />
                </div>
              </div>
              <div className="product-content">
                <p>
                  <Link to={`/shop${product.id}`}>{product.name}</Link>
                </p>
                <h6>{product.price} تومان</h6>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  );
};

export default Search;
