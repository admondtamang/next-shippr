import Image from "next/image";
import React from "react";

export default function CustomImage({ ...rest }) {
    return (
        <Image
            placeholder="blur"
            blurDataURL="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
            {...rest}
        />
    );
}
