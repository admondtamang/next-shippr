import Image from "next/image";
import React from "react";
import icon from "./icon.png";

export default function CustomImage({ className, ...rest }) {
  return (
    <div className="pt-2 imageWrapper">
      <Image placeholder="blur" blurDataURL={icon} {...rest} />
    </div>
  );
}
