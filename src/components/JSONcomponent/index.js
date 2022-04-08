import Featured from "../../pages/Home/Featured";
import WhyUs from "../../pages/Home/WhyUs";
import Carousel from "../Carousel";
import ProductCarousel from "../ProductCarousel";

export default function JSONcomponent() {
    return (
        <>
            <Carousel />
            <ProductCarousel />
            <Featured />
            <ProductCarousel />
            <Carousel height={100} />
            <WhyUs />
            <ProductCarousel />
        </>
    );
}
