import React from "react";

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
                        <img src={product.img} alt=""/>
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
