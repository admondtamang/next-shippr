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

export default function App({ height, images }) {
    images = [
        {
            image: "https://icms-image.slatic.net/images/ims-web/1c90e149-ecc7-4ed0-962b-6cf10b011514.jpg_1200x1200.jpg",
        },
        {
            image: "https://icms-image.slatic.net/images/ims-web/c17058d4-1c75-4c9d-9446-45bc7982cadd.jpg",
        },
        {
            image: "https://icms-image.slatic.net/images/ims-web/a340f37b-a228-4ec6-b14c-e96f6a94a3c0.jpg",
        },
    ];
    return (
        <div className="container mb-12">
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
                            height={height || 150}
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
