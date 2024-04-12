import React from "react";
import Data from "../products.json"
const ShopCategory = (
  {filterItem,menuItems,setProducts,selectCategory}
) => {

  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">همه ی محصولات</h5>
      </div>
      <div>
        <button
          className={`m-2 ${selectCategory === "همه" ? "bg-warning " : ""}`}
          onClick={()=>setProducts(Data)}
        >
          همه
        </button>
        {menuItems.map((item, id) => {
          return (
            <button
              className={`m-2 ${selectCategory === item ? "bg-warning " : ""}`}
              key={id}
              onClick={() => filterItem(item)}
            >
              {item}
            </button>
          )
        })}
      </div>
    </>
  );
};

export default ShopCategory;
