import WhyUs from "./WhyUs";
import Featured from "./Featured";
import Carousel from "../../components/Carousel";
import ProductCarousel from "../../components/ProductCarousel";
import ProductItem from "../../components/ProductItem";
import { ShowComponentInView } from "../../components";
import InfiniteProducts from "../../components/InfiniteProducts";
import jsonProducts from "../../json/products-electronic";
import fashion from "../../json/products-fashion";

export default function Home() {
  return (
    <>
      <Carousel />

      <ProductCarousel title="Flash Sale" flash_sale />
      {/* <Featured /> */}
      <ShowComponentInView component={<ProductCarousel category_id={44} />} />
      <ShowComponentInView component={<ProductCarousel title="Electronic" product_data={jsonProducts} category_id={69} />} />
      <ShowComponentInView component={<ProductCarousel title="Fashion" product_data={fashion} category_id={69} />} />
      <ShowComponentInView component={<ProductCarousel title="More Products" />} />
      <Carousel />
      <WhyUs />

      {/* <ProductItem /> */}

      {/* show in collection */}
      {/* <ShowComponentInView component={<Featured />} /> */}
      <ShowComponentInView
        component={<InfiniteProducts title="Just For You" className="container" parameters={{ orderby: "popularity" }} showLoadMore />}
      />
    </>
  );
}
