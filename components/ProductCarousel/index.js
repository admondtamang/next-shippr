import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import jsonProducts from "../../json/json-products";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Pagination } from "swiper";
import ProductItem from "../ProductItem";

export default function ProductCarousel({ products }) {
  const data =
    typeof products == "object" && products?.length > 0
      ? products
      : jsonProducts;
  return (
    <div className="productCarousel container">
      <div className="flex-center-between">
        <h1 className="font-bold text-2xl mb-8">Featured Product</h1>
        <h3 className="bg-gray-600 p-1 px-2 rounded font-bold text-white">
          More
        </h3>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={40}
        freeMode={true}
        modules={[FreeMode]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
