import WhyUs from "./WhyUs";
import Featured from "./Featured";
import Carousel from "../../components/Carousel";
import ProductCarousel from "../../components/ProductCarousel";
import ProductItem from "../../components/ProductItem";
export default function Home() {
    return (
        <>
            <Carousel />
            <ProductCarousel />
            <Featured />
            <ProductCarousel />
            <Carousel height={100} />
            <WhyUs />
            <ProductCarousel />
            {/* <ProductItem /> */}
        </>
    );
}
