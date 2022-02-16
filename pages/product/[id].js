import { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import Gallery from "../../components/product-single/gallery";
import Description from "../../components/product-single/description";
import Reviews from "../../components/product-single/reviews";
import products from "../../json/json-products";
import Content from "../../components/product-single/content";
import ProductCarousel from "../../components/ProductCarousel";
import { ScreenContext } from "../../contexts";
import { useRouter } from "next/router";
import { useFetchQuery } from "../../hooks";
import { PRODUCTS, SINGLE_PRODUCTS } from "../../utils/constants";
// import { server } from "../../utils/server";

// export async function getServerSideProps({ query }) {
//     const pid = query.pid;
//     const res = await fetch(`${server}/api/product/${pid}`);
//     const product = await res.json();

//     return {
//         props: {
//             product,
//         },
//     };
// }

const Product = (props) => {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return null;
  }

  const URL = SINGLE_PRODUCTS + id;
  const [product, setFinalData] = useState([]);
  const [showBlock, setShowBlock] = useState("description");
  const { mobileScreen } = useContext(ScreenContext);

  const { error, isLoading, status, response } = useFetchQuery(
    "single_product",
    URL
  );

  useEffect(() => {
    console.log(response);
    if (typeof response == "object" && response.length > 0)
      setFinalData(response[0]);
  }, [product]);
  console.log("out", product);

  if (isLoading || !product) {
    return "Loading";
  }

  return (
    <Layout>
      <Breadcrumb currentPage={product.name} />
      <div
        className={`flex h-2/6 container mb-8 gap-8 ${
          mobileScreen && "flex-col"
        }`}
      >
        <Gallery images={product.images} />
        <Content product={product} />
      </div>

      <div className="product-single__info container mb-8">
        <div className="product-single__info-btns">
          <button
            type="button"
            onClick={() => setShowBlock("description")}
            className={`btn btn--rounded ${
              showBlock === "description" ? "btn--active" : ""
            }`}
          >
            Description
          </button>
          <button
            type="button"
            onClick={() => setShowBlock("reviews")}
            className={`btn btn--rounded ${
              showBlock === "reviews" ? "btn--active" : ""
            }`}
          >
            Reviews (2)
          </button>
        </div>

        <Description product={product} show={showBlock === "description"} />
        {/* <Reviews product={product} show={showBlock === "reviews"} /> */}
      </div>

      <ProductCarousel />
    </Layout>
  );
};

export default Product;
