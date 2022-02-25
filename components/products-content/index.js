import Router, { useRouter } from "next/router";
import { useState } from "react";
import InfiniteProducts from "../InfiniteProducts";
// import List from './list';

const ProductsContent = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  let { asPath } = useRouter();

  function handleChange(e) {
    e.preventDefault();
    Router.replace({
      pathname: "/products",
      query: { orderby: e.target.value },
    });
  }
  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>
          All Products <span>({totalProduct})</span>
        </h2>

        <form className={`products-content__filter`}>
          <div className="products__filter__select">
            <h4>Sort by: </h4>
            <div className="select-wrapper">
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

      {/* <List />
       */}
      <InfiniteProducts setTotalProduct={setTotalProduct} />
    </section>
  );
};

export default ProductsContent;
