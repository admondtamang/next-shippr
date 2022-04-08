import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";

import ProductsFilter from "../components/products-filter";
import ProductsContent from "../components/products-content";
import BackToTop from "../components/backtoTop";
const Products = () => (
  <Layout>
    <div className="mt-12 lg:mt-0">
      <Breadcrumb currentPage="Products" />
      <section className="products-page">
        <div className="container">
          <ProductsFilter />
          <ProductsContent />
        </div>
      </section>
      {/* <BackToTop /> */}
      {/* <Footer /> */}
    </div>
  </Layout>
);

export default Products;
