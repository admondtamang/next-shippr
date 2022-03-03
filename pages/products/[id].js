import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";

import ProductsFilter from "../../components/products-filter";
import ProductsContent from "../../components/products-content";
import BackToTop from "../../components/backtoTop";

import { useRouter } from "next/router";
const CategoryProducts = () => {
  let { query } = useRouter();

  return (
    <Layout>
      <Breadcrumb currentPage="Products" />
      <section className="products-page">
        <div className="container">
          <ProductsFilter />
          <ProductsContent id={query.id} />
        </div>
      </section>
      {/* <BackToTop /> */}
      {/* <Footer /> */}
    </Layout>
  );
};

export default CategoryProducts;
