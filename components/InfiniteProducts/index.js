import React from "react";
import ProductItem from "../ProductItem";
import jsonProducts from "../../json/json-products";
import useFetchQuery from "../../hooks/useAxiosQuery";
import { PRODUCTS } from "../../utils/constants";

export default function InfiniteProducts() {
  const { error, isLoading, status, response } = useFetchQuery(
    "search_products",
    PRODUCTS
  );

  if (isLoading) {
    return "loading";
  }
  return (
    <div className="flex flex-wrap gap-8 container">
      {response.map((item) => (
        <ProductItem item={item} />
      ))}
    </div>
  );
}
