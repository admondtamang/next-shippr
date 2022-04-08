import { useContext, useEffect, useState } from "react";
import { Layout, Loading, ShowComponentInView } from "../../components";
import Breadcrumb from "../../components/Breadcrumb";
import Gallery from "../../components/product-single/gallery";
import Description from "../../components/product-single/description";
import Reviews from "../../components/product-single/reviews";
import products from "../../json/json-products";
import Content from "../../components/product-single/content";
import ProductCarousel from "../../components/ProductCarousel";
import { ScreenContext } from "../../contexts";
import { useRouter, withRouter } from "next/router";
import { PRODUCTS, SINGLE_PRODUCTS } from "../../utils/constants";
import Related_ids from "./related_ids";
import useSWR from "swr";
import axiosInstance from "../../utils/axios";

const Product = (props) => {
  const { id } = props.router.query;

  const URL = SINGLE_PRODUCTS + id;
  const [showBlock, setShowBlock] = useState("description");
  const { mobileScreen } = useContext(ScreenContext);

  const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);
  const { data, error } = useSWR(URL, fetcher);
  if (error) return <Layout>failed to load</Layout>;
  if (data?.length === 0) return <Layout>No Product Found</Layout>;

  let product = typeof data == "object" ? data[0] : [];

  return (
    <Layout status={{ isLoading: !data, error }}>
      <>
        <Breadcrumb currentPage={product.name} />
        <div className={`flex h-2/6 container mb-8 gap-8 rounded-lg p-4 bg-white ${mobileScreen && "flex-col"}`}>
          <Gallery images={product.images} />
          <Content product={product} />
        </div>

        <div className="product-single__info container mb-8 bg-white p-4 rounded-md">
          <div className="product-single__info-btns">
            <button
              type="button"
              onClick={() => setShowBlock("description")}
              className={`btn rounded-lg bg-white ${showBlock === "description" ? "btn--active" : ""}`}
            >
              Description
            </button>
            <button
              type="button"
              onClick={() => setShowBlock("reviews")}
              className={`btn rounded-lg bg-white ${showBlock === "reviews" ? "btn--active" : ""}`}
            >
              Reviews (2)
            </button>
          </div>

          <Description product={product} show={showBlock === "description"} />
          {/* <Reviews product={product} show={showBlock === "reviews"} /> */}
        </div>
        <ShowComponentInView component={<Related_ids ids={product.related_ids} />} />
      </>
    </Layout>
  );
};

export default withRouter(Product);
