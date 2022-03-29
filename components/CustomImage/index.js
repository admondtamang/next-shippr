import Image from "next/image";
import React from "react";
import icon from "./icon.png";

export default function CustomImage({ className, ...rest }) {
    return (
        <div className="pt-2 imageContainer ">
            <Image placeholder="blur" blurDataURL={icon} className={`image ${className}`} {...rest} />
        </div>
    );
}
