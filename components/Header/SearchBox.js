import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import Icon from "../Icon";
import ProductItem from "../ProductItem";
import jsonProducts from "../../json/json-products";
import useFetch from "../../hooks/useFetch";
import { SEARCH_PRODUCTS } from "../../utils/constants";
export default function SearchBox() {
  const [visible, setVisible] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  //   URL
  const url = SEARCH_PRODUCTS + searchTerm;

  const {
    response,
    error,
    status: { isLoading, isResolved },
  } = useFetch(searchTerm ? url : null);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="searchbox relative">
      <form className="search_bar rounded-full border-2 w-full flex items-center px-2">
        <Icon name="search-alt-2" />

        <input
          className="outline-none border-0 py-2 ml-2 text-sm w-full"
          type="text"
          onChange={handleChange}
          placeholder="Search products"
        />

        <Tooltip title="Search">
          <div className="flex-center rounded-full p-1 bg-secondary-500">
            <Icon name="search-alt-2" color="white" />
          </div>
        </Tooltip>
      </form>
      <div
        className={`absolute mt-10 rounded-full bottom-4 top-0 z-50 ${
          visible ? "visible" : "invisible"
        }`}
      >
        {isLoading
          ? "Loding"
          : response.map((item) => <ProductItem item={item} small_product />)}
      </div>
    </div>
  );
}
