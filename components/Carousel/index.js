import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Lazy, Pagination, Navigation } from "swiper";

export default function App() {
    const images = [
        {
            image: "https://swiperjs.com/demos/images/nature-1.jpg",
        },
        {
            image: "https://swiperjs.com/demos/images/nature-2.jpg",
        },
        {
            image: "https://swiperjs.com/demos/images/nature-3.jpg",
        },
        {
            image: "https://swiperjs.com/demos/images/nature-4.jpg",
        },
    ];
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                lazy={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Lazy, Pagination, Navigation]}
                className="swiper-slide"
            >
                {images.map((image) => (
                    <SwiperSlide>
                        <img data-src={image} height={200} className="swiper-lazy carousel-image" />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
