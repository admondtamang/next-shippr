import React, { useCallback, useEffect, useRef, useState } from "react";
import ProductItem from "../ProductItem";
import jsonProducts from "../../json/json-products";
import useFetchQuery from "../../hooks/useAxiosQuery";
import { PRODUCTS } from "../../utils/constants";
import { useFetch } from "../../hooks";
import { useRouter } from "next/router";
import axiosInstance from "../../utils/axios";
import { Loading } from "../../components";
export default function InfiniteProducts() {
  // const { error, isLoading, status, response } = useFetchQuery(
  //   "search_products",
  //   PRODUCTS
  // );
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [EndOfContent, setEndOfContent] = useState(false);

  let { query } = useRouter();
  const observer = useRef();

  // const {
  //   response,
  //   res,
  //   error,
  //   status: { isIdle, isLoading, isRejected, isResolved },
  // } = useFetch(PRODUCTS + "?page=" + page, {}, query, hasMore);
  const URL = PRODUCTS + "?page=" + page;
  console.log(URL);

  async function getProducts() {
    const res = await axiosInstance.get(URL);
    // Check last page:  current page = last page then return null
    if (res.headers["x-wp-totalpages"] < page) {
      setHasMore(false);
      setEndOfContent(true);
      return "Null";
    }
    if (hasMore) setProducts((pre) => [...new Set([...pre, ...res.data])]);
    // else setProducts(res.data);
  }

  useEffect(async () => {
    if (!hasMore) return null;

    setIsLoading(true);

    await getProducts();
    // setProducts((pre) => [...new Set([...pre, ...res.data])]);
    setIsLoading(false);
  }, [URL]);

  // Get the last products and rerender next page
  const lastProductRef = useCallback(
    (node) => {
      // Validate
      if (isLoading) return null;
      if (observer.current) observer.current.disconnect();
      // Load data if the screen intersect
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          // When user focus on last item and has more is true
          setPage((pre) => pre + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  return (
    // <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-2 container">
    <>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mb-10">
        {products.map((item, index) => {
          // Last elemet of array
          if (products.length === index + 1)
            return (
              <ProductItem
                item={item}
                key={index}
                lastProductRef={lastProductRef}
              />
            );
          else return <ProductItem item={item} key={index} />;
        })}
      </div>
      {isLoading && <Loading />}
    </>
  );
}
