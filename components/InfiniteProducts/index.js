import React, { useCallback, useEffect, useRef, useState } from "react";
import ProductItem from "../ProductItem";
import { PRODUCTS, url_asPath } from "../../utils/constants";
import { useRouter } from "next/router";
import axiosInstance from "../../utils/axios";
import { Loading } from "../../components";
import { getProducts } from "../../api/products";
import Button from "../Button";

export default function InfiniteProducts({
  setTotalProduct,
  search_page,
  fourColumns,
  title,
  parameters,
  className,
  ...rest
}) {
  // const { error, isLoading, status, response } = useFetchQuery(
  //   "search_products",
  //   PRODUCTS
  // );

  const style_search_page = `grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ${
    fourColumns ? "xl:grid-cols-4" : "xl:grid-cols-5"
  }  gap-2 `;

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [EndOfContent, setEndOfContent] = useState(false);
  const [queryLength, setQueryLength] = useState(null);
  const [loadMore, setLoadMore] = useState(false);

  let { asPath, query } = useRouter();
  const observer = useRef();

  let url_params = "";
  // get data from url and add to request url
  Object.entries(query).map(([key, value], index) => {
    url_params = `&${key}=${value}`;
  });

  // get data from object and add to request url
  Object.entries(parameters).map(([key, value], index) => {
    url_params = `&${key}=${value}`;
  });

  const URL =
    PRODUCTS +
    "?perpage=15&page=" +
    page +
    url_params +
    (search_page ? "&search=" + search_page : "");

  let totalProducts = 0;

  async function handleProducts() {
    try {
      const res = await getProducts(URL);
      totalProducts = res.headers["x-wp-totalpages"];
      setTotalProduct && setTotalProduct(totalProducts);
      // Check last page:  current page = last page then return null
      if (totalProducts < page) {
        setHasMore(false);
        setEndOfContent(true);
        return "Null";
      }

      // url get changed then set new data
      if (asPath != queryLength) {
        setProducts(res.data);
        setQueryLength(asPath);
        setPage(1);
        return;
      }

      setQueryLength(asPath);
      if (hasMore) setProducts((pre) => [...new Set([...pre, ...res.data])]);
      // else setProducts(res.data);
    } catch (error) {
      console.log("Error");
    }
  }

  useEffect(async () => {
    if (!hasMore) return null;

    setIsLoading(true);
    // console.log(URL, "===", query, asPath);
    await handleProducts();
    setIsLoading(false);
  }, [URL, query, loadMore]);

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
    <div className={className}>
      {title && <h1 className="font-bold text-2xl mb-4">{title}</h1>}
      <div
        className={
          style_search_page
          //  "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10"
        }
        {...rest}
      >
        {products.map((item, index) => {
          // Last elemet of array
          if (products.length === index + 1 && loadMore)
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
      <div className="flex-center mt-5">
        {!loadMore && (
          <Button
            title="Load More"
            variant={"outline"}
            onClick={() => {
              setPage((pre) => pre + 1);
              setLoadMore(true);
            }}
          />
        )}
      </div>

      {isLoading && <Loading />}
    </div>
  );
}
