import React, { useState } from "react";

import Data from "../products.json";

import { LuList, LuLayoutGrid } from "react-icons/lu";
import PageHeader from "../components/PageHeader";
import ProductsCards from "./ProductsCards";
import Pagination from "./Pagination";
import Search from "./Search";

const showResults = "نمایش 1 - 12 از 139 محصول";

const Shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 12;
  const lastProduct = currentPage * productPerPage;
  const firstProduct = lastProduct - productPerPage;
  const currentProduct = products.slice(firstProduct, lastProduct);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <PageHeader title="صفحه فروشگاهی ما" curPage="فروشگاه" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p className="number">{showResults}</p>
                  <div
                    className={`product-view-mode ${
                      gridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a
                      className="grid mx-3"
                      onClick={() => setGridList(!gridList)}
                    >
                      <LuLayoutGrid size={25} />
                    </a>
                    <a className="list" onClick={() => setGridList(!gridList)}>
                      <LuList size={25} />
                    </a>
                  </div>
                </div>
                <div>
                  <ProductsCards products={currentProduct} gridList={gridList} />
                </div>
                <Pagination 
                productPerPage ={productPerPage}
                totalProducts = {products.length}
                paginate={paginate}
                activePage= {currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} gridList={gridList}/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
