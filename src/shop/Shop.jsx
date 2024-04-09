import React, { useState } from "react";

import { LuList, LuLayoutGrid } from "react-icons/lu";
import PageHeader from "../components/PageHeader";

const showResults = "نمایش 1 - 12 از 139 محصول";

const Shop = () => {
  const [gridList, setGridList] = useState(true);
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
              </article>
            </div>
            <div className="col-lg-4 col-12">left side</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
