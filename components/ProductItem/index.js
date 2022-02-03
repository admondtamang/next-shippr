import Image from "next/image";
import Link from "next/link";
import React from "react";
import Products from "../../json/json-products";

export default function ProductItem({ item }) {
    console.log(item);
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
            images?.length < 0 ? "https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png" : images[0].src;
    }

    return (
        <div className="product-item w-56 rounded p-1">
            <Image
                layout="responsive"
                src={image}
                alt=""
                width={200}
                height={150}
                placeholder="blur"
                blurDataURL="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
                className="swiper-lazy rounded w-full"
            />
            <div className="product__description mt-2">
                <h3 className="line-clamp">{name}</h3>
                <div className="product__price flex items-center mt-2">
                    <h4 className="font-bold text-primary-400">Rs. {price}</h4>
                    {on_sale && <span className="line-through text-sm text-primary-300 pl-2">Rs.{regular_price}</span>}
                    {discount != 0 && (
                        <span className="rounded text-xs font-normal ml-2 text-white bg-secondary-200 p-1 ">-{discount}%</span>
                    )}
                </div>
            </div>
        </div>
    );
}
