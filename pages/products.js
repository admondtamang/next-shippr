import Layout from "../components/Layout";
import Breadcrumb from "../components/breadcrumb";

// import ProductsFilter from "../components/products-filter";
// import ProductsContent from "../components/products-content";

const Products = () => (
  <Layout>
    <Breadcrumb />
    <section className="products-page">
      <div className="container">
        {/* <ProductsFilter />
        <ProductsContent /> */}
      </div>
    </section>
    {/* <Footer /> */}
  </Layout>
);

export default Products;
