import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ products, gridList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteProducts = products.filter((product) =>
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
    </div>
  );
};

export default Search;
