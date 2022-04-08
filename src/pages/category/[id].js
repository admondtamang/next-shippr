import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import ProductsFilter from "../../components/products-filter";
import ProductsContent from "../../components/products-content";
import { useRouter } from "next/router";
const Category = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);
  return (
    <Layout>
      <Breadcrumb currentPage="Products" />

      <section className="products-page">
        <div className="container">
          <ProductsFilter />
          {id && <ProductsContent id={id} />}
        </div>
      </section>
    </Layout>
  );
};
export default Category;
