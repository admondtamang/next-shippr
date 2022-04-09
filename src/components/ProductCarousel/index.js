import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import jsonProducts from "../../json/json-products";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Pagination } from "swiper";
import ProductItem from "@/components/ProductItem";
import { ScreenContext } from "../../contexts";
import OutlineButton from "../OutlineButton";
import Router from "next/router";
import { shuffleArray } from "../../utils/shuffleArray";

export default function ProductCarousel({ products, title, category_id }) {
  const { mobileScreen } = useContext(ScreenContext);

  const data = typeof products == "object" && products?.length > 0 ? products : jsonProducts;

  function toPage(id) {
    Router.push("/products/" + id);
  }

  return (
    <div className="mb-8 container">
      <div className="flex-center-between">
        <h1 className="font-bold text-2xl mb-4">{title || "Featured Product"}</h1>

        {category_id && <OutlineButton label="More" icon="chevron-right" onClick={() => toPage(1)} />}
      </div>
      <Swiper slidesPerView={mobileScreen ? 2 : 5} spaceBetween={mobileScreen ? 10 : 40} freeMode={true} modules={[FreeMode]}>
        {shuffleArray(data).map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
