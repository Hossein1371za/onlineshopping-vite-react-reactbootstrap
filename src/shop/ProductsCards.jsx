import React from "react";

import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsCards = ({ gridList, products }) => {
  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        gridList ? "grid" : "list"
      }`}
    >
      {products.map((product) => {
        return (
          <div className="col-lg-4 col-md-6 col-12" key={products.id}>
            <div className="product-item">
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={product.img} alt="" />
                </div>
                <div className="product-action-link">
                  <Link to={`/shop/${product.id}`}>
                    <FaEye/>
                  </Link>
                  <a href="#">
                    <FaHeart />
                  </a>
                  <Link to="/cart-page">
                    <FaShoppingCart />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsCards;
