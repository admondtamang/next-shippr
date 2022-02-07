import React, { useState } from "react";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/breadcrumb";
import Gallery from "../../components/product-single/gallery";
import Description from "../../components/product-single/description";
import Reviews from "../../components/product-single/reviews";
import products from "../../json/json-products";
import Content from "../../components/product-single/content";

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

const Product = ({ product }) => {
    const [showBlock, setShowBlock] = useState("description");
    product = products[1];

    return (
        <Layout>
            <Breadcrumb currentPage={product.name} />

            <div className="flex">
                <Gallery />
                <Content product={product} />
            </div>

            <div className="product-single__info">
                <div className="product-single__info-btns">
                    <button
                        type="button"
                        onClick={() => setShowBlock("description")}
                        className={`btn btn--rounded ${showBlock === "description" ? "btn--active" : ""}`}
                    >
                        Description
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowBlock("reviews")}
                        className={`btn btn--rounded ${showBlock === "reviews" ? "btn--active" : ""}`}
                    >
                        Reviews (2)
                    </button>
                </div>

                <Description product={product} show={showBlock === "description"} />
                {/* <Reviews product={product} show={showBlock === "reviews"} /> */}
            </div>
        </Layout>
    );
};

export default Product;
