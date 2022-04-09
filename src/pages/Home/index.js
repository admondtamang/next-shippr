import WhyUs from "./WhyUs";
import Featured from "./Featured";
import Carousel from "../../components/Carousel";
import ProductCarousel from "../../components/ProductCarousel";
import ProductItem from "../../components/ProductItem";
import { ShowComponentInView } from "../../components";
import InfiniteProducts from "../../components/InfiniteProducts";

export default function Home() {
  return (
    <>
      <Carousel />

      <ProductCarousel />
      {/* <Featured /> */}
      <ShowComponentInView component={<ProductCarousel />} />
      <Carousel />
      <WhyUs />
      <ProductCarousel />
      {/* <ProductItem /> */}
      <ShowComponentInView component={<Featured />} />
      <ShowComponentInView
        component={<InfiniteProducts title="Just For You" className="container" parameters={{ orderby: "popularity" }} showLoadMore />}
      />
    </>
  );
}
