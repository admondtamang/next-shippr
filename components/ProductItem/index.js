import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomImage } from "..";
import Products from "../../json/json-products";
import CustomLink from "../CustomLink";
import ToolTipWithButton from "../ToolTipWithButton";

export default function ProductItem({ item, small_product }) {
  var discount = 2;
  const { id, name, price, regular_price = 322, images, on_sale, slug } = item;

  // Calculate discount price
  if (regular_price) {
    discount = ((regular_price - price) / regular_price) * 100;
    discount = discount.toFixed(0);
  }

  // image validation choosing 1st image
  let image;
  if (typeof images == "object") {
    image =
      images?.length <= 0
        ? "https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
        : images[0]?.src;
  }

  if (small_product)
    return (
      <CustomLink href={`/product/${slug}`}>
        <div className=" w-full rounded p-1 flex bg-primary-50 hover:bg-primary-50">
          {/* <CustomImage
            layout="responsive"
            src={image}
            alt={slug}
            width={230}
            height={200}
            className="rounded"
          /> */}
          <div className="product__description mt-2">
            <h3 className="line-clamp">{name}</h3>
            <div className="product__price flex items-center mt-2">
              <h4 className="font-bold text-primary-400">Rs. {price}</h4>
              {on_sale && (
                <span className="line-through text-sm text-primary-300 pl-2">
                  Rs.{regular_price}
                </span>
              )}
              {discount != 0 && (
                <span className="rounded text-xs font-normal ml-2 text-white bg-secondary-200 p-1 ">
                  -{discount}%
                </span>
              )}
            </div>
          </div>
        </div>
      </CustomLink>
    );
  return (
    <CustomLink href={`/product/${slug}`}>
      <div className="product-item w-56 rounded p-1 hover:shadow-lg ">
        <CustomImage
          layout="responsive"
          src={image}
          alt={slug}
          width={230}
          height={200}
          className="rounded relative w-full"
        />
        <div className="product__description mt-2">
          <h3 className="line-clamp">{name}</h3>
          <div className="product__price flex items-center mt-2">
            <h4 className="font-bold text-primary-400">Rs. {price}</h4>
            {on_sale && (
              <span className="line-through text-sm text-primary-300 pl-2">
                Rs.{regular_price}
              </span>
            )}
            {discount != 0 && (
              <span className="rounded text-xs font-normal ml-2 text-white bg-secondary-200 p-1 ">
                -{discount}%
              </span>
            )}
          </div>
        </div>
      </div>
    </CustomLink>
  );
}
