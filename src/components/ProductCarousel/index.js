import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import jsonProducts from "../../json/product_asc";
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

export default function ProductCarousel({ product_data, products, title, category_id, flash_sale }) {
  const { mobileScreen } = useContext(ScreenContext);

  const data = typeof products == "object" && products?.length > 0 ? products : product_data || jsonProducts;

  function toPage(id) {
    Router.push("/category/" + id);
  }

  return (
    <div className="mb-8 container">
      <div className="flex-center-between mb-2">
        <h1 className="font-bold text-2xl mb-4">{title || "Featured Product"}</h1>

        {category_id && <OutlineButton label="More" icon="chevron-right" onClick={() => toPage(44)} />}
      </div>
      {!flash_sale ? (
        <Swiper slidesPerView={mobileScreen ? 2 : 5} spaceBetween={mobileScreen ? 10 : 40} freeMode={true} modules={[FreeMode]}>
          {shuffleArray(data).map((item) => (
            <SwiperSlide key={item.id}>
              <ProductItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {shuffleArray(data)
            .slice(0, mobileScreen ? 6 : 16)
            .map((item) => (
              <div key={item.id}>
                <ProductItem item={item} discount_label_top />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
