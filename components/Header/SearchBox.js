import React, { useRef, useState } from "react";
import { Tooltip } from "@mui/material";
import Icon from "../Icon";
import ProductItem from "../ProductItem";
import { useFetch, useClickOutside } from "../../hooks";
import { SEARCH_PRODUCTS } from "../../utils/constants";
import Router from "next/router";

export default function SearchBox() {
  const [visible, setVisible] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef();

  useClickOutside(ref, () => {
    setVisible(false);
  });

  //   URL
  const url = SEARCH_PRODUCTS + searchTerm;

  const {
    response,
    error,
    status: { isLoading, isResolved },
  } = useFetch(searchTerm ? url : null);

  function handleChange(e) {
    setVisible(true);
    setSearchTerm(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setVisible(false);

    Router.push({
      pathname: "/search",
      query: { searchTerm },
    });
  }

  return (
    <form onSubmit={onSubmit} className="search_bar relative rounded-full border-2 w-full flex items-center px-2">
      <Icon name="search-alt-2" />

      <input className="outline-none border-0 py-2 ml-2 text-sm w-full" type="text" onChange={handleChange} placeholder="Search products" />

      {/* Submit button */}
      <Tooltip title="Search" onClick={onSubmit}>
        <div className="flex-center rounded-full p-1 bg-secondary-500">
          <Icon name="search-alt-2" color="white" />
        </div>
      </Tooltip>

      {/* View for search data */}
      <div
        ref={ref}
        // border-bottom-2 font-bold hover:text-primary-50 hover:bg-primary-400
        className={`absolute w-full mt-10 rounded-full border-bottom-2 font-bold p-2 bg-white bottom-4 px-4 top-0 z-50 ${
          visible ? "visible" : "invisible"
        }`}
      >
        <div>
          {isLoading && searchTerm != "" && <p>Loading</p>}
          {isResolved && response.map((item) => <ProductItem item={item} key={item.id} small_product />)}
        </div>
      </div>
    </form>
  );
}
