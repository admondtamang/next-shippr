import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Pagination, Navigation } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

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
        <div className="container">
            <Swiper
                lazy={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Lazy, Pagination, Navigation]}
                className="swiper-slide"
            >
                {images.map(({ image }, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            layout="responsive"
                            src={image || ""}
                            alt=""
                            width={500}
                            height={150}
                            placeholder="blur"
                            blurDataURL="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
                            className="swiper-lazy rounded"
                        />
                        {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div> */}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
