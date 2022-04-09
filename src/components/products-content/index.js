import Router from "next/router";
import { useState } from "react";
import InfiniteProducts from "../InfiniteProducts";
// import List from './list';

const ProductsContent = ({ id }) => {
  const [totalProduct, setTotalProduct] = useState(0);

  function handleChange(e) {
    e.preventDefault();
    Router.replace({
      pathname: "/products",
      query: { orderby: e.target.value },
    });
  }
  return (
    <section className="products-content mb-4">
      <div className="products-content__intro flex-center-between">
        <h2>
          All Products <span>({totalProduct})</span>
        </h2>

        <form>
          <div className={`flex-center-between`}>
            <h4>Sort by: </h4>
            <div className="select-wrapper ml-2">
              <select onChange={handleChange}>
                <option value="date&order=desc">Latest</option>
                <option value="popularity">Popular</option>
                <option value="rating">Rating</option>
                <option value="price&order=asc">Low to High</option>
                <option value="price&order=desc">High to Low</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <InfiniteProducts parameters={id ? { category: id } : {}} setTotalProduct={setTotalProduct} fourColumns />
    </section>
  );
};

export default ProductsContent;
