import Image from "next/image";
import React from "react";
import icon from "./icon.png";

export default function CustomImage({ ...rest }) {
  return <Image placeholder="blur" blurDataURL={icon} {...rest} />;
}
