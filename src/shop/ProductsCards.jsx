import React from "react";

import { FaEye, FaHeart, FaShoppingCart,FaStar } from "react-icons/fa";
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
          <div className="col-lg-4 col-md-6 col-12" key={product.id}>
            <div className={`${gridList ? "product-item" : "product-list-item"}`}>
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={product.img} alt="" />
                </div>
                <div className="product-action-link">
                  <Link to={`/shop/${product.id}`}>
                    <FaEye />
                  </Link>
                  <a href="#">
                    <FaHeart />
                  </a>
                  <Link to="/cart-page">
                    <FaShoppingCart />
                  </Link>
                </div>
              </div>
              <div className="product-content">
                <h5>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h5>
                <p className="productRating">
                    <FaStar className="yellow-color"/>
                    <FaStar className="yellow-color"/>
                    <FaStar className="yellow-color"/>
                    <FaStar className="yellow-color"/>
                    <FaStar className="yellow-color"/>
                </p>
                <h6>قیمت : {product.price}</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsCards;
