import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CustomImage from "../../CustomImage";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function App() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-gallery"
            >
                <SwiperSlide>
                    <CustomImage
                        layout="responsive"
                        src={"https://swiperjs.com/demos/images/nature-1.jpg"}
                        alt=""
                        width={500}
                        height={150}
                        className="swiper-lazy rounded"
                    />
                </SwiperSlide>{" "}
                <SwiperSlide>
                    <CustomImage
                        layout="responsive"
                        src={"https://swiperjs.com/demos/images/nature-1.jpg"}
                        alt=""
                        width={500}
                        height={150}
                        className="swiper-lazy rounded"
                    />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-gallery--navigation"
            >
                <SwiperSlide>
                    <CustomImage
                        layout="responsive"
                        src={"https://swiperjs.com/demos/images/nature-1.jpg"}
                        alt=""
                        width={500}
                        height={150}
                        className="swiper-lazy rounded"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
