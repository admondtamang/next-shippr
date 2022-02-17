import { useRouter } from "next/router";
import InfiniteProducts from "../../components/InfiniteProducts";
import Layout from "../../components/Layout";

export default function Search({ props }) {
  const { query } = useRouter();
  console.log(query);
  return (
    <Layout>
      <h1 className="container font-bold text-lg">
        Reasult for "
        <span className="text-primary-300">{query.searchTerm}</span>"
      </h1>

      <InfiniteProducts />
    </Layout>
  );
}
