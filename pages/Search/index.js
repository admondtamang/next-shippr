import InfiniteProducts from "../../components/InfiniteProducts";
import Layout from "../../components/Layout";

export default function Search({ props }) {
  // const { name } = props;

  return (
    <Layout>
      {/* <h1>Reasult for "{name}"</h1> */}

      <InfiniteProducts />
    </Layout>
  );
}
