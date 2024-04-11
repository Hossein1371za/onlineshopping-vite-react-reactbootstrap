import React from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({
  productPerPage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="default-pagination lab-ul">
        <li>
            <a href="#" onClick={()=>{
                if(activePage < pageNumbers.length){
                    paginate(activePage - 1)
                }
            }}>
                <FaAngleRight/>
            </a>
        </li>
      {pageNumbers.map((number) => (
        <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
            <button onClick={()=> paginate(number)} className="bg-transparent">{number}</button>
        </li>
      ))}
      <li>
            <a href="#" onClick={()=>{
                if(activePage < pageNumbers.length){
                    paginate(activePage + 1)
                }
            }}>
                <FaAngleLeft/>
            </a>
        </li>
    </ul>
  );
};

export default Pagination;
