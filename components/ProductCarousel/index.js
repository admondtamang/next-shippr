import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import jsonProducts from "../../json/json-products";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import ProductItem from "../ProductItem";

export default function ProductCarousel() {
    return (
        <>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                freeMode={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                {jsonProducts.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ProductItem item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
