import { useState } from "react";
import InfiniteProducts from "../InfiniteProducts";
// import List from './list';

const ProductsContent = () => {
  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>
          All Products <span>(133)</span>
        </h2>

        <form className={`products-content__filter`}>
          <div className="products__filter__select">
            <h4>Sort by: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      {/* <List />
       */}
      <InfiniteProducts />
    </section>
  );
};

export default ProductsContent;
