import { useRouter } from "next/router";
import InfiniteProducts from "../../components/InfiniteProducts";
import Layout from "../../components/Layout";

export default function Search({ props }) {
  const { query } = useRouter();
  console.log(query);
  return (
    <Layout>
      <div className="container">
        <h1 className="font-bold text-lg">
          Reasult for &apos;
          <span className="text-primary-300">{query.searchTerm}</span>&apos;
        </h1>
        <InfiniteProducts search_page={query.searchTerm} />
      </div>
    </Layout>
  );
}
