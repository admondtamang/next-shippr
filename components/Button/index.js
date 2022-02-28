import { Icon } from "@mui/material";
import Router from "next/router";
import React from "react";
import { CustomLink } from "..";

export default function Button({
  variant,
  icon,
  title,
  borderd,
  boxIcon,
  primary,
  href,
  ...rest
}) {
  function toPage(e) {
    e.preventDefault();
    Router.push(href || "/");
  }

  switch (variant) {
    case "icon-button":
      return (
        <button
          className={`flex-center gap-2 font-bold  ${
            primary
              ? borderd
                ? "border-2"
                : "bg-primary-200"
              : borderd
              ? "border-2"
              : "bg-gray-200"
          } rounded-full p-3 pr-4  hover:bg-primary-300`}
          onClick={toPage}
          {...rest}
        >
          {icon || <box-icon name={boxIcon || "left-arrow-alt"}></box-icon>}
          <span>{title}</span>
        </button>
      );

    case "outline":
      return (
        <button
          type="button"
          className={`rounded-full uppercase text-xs font-bold px-4 p-3 mr-2 border-2`}
          {...rest}
        >
          {title}
        </button>
      );
    default:
      break;
  }

  return (
    <button
      type="button"
      className={`rounded-full uppercase text-xs font-bold px-4 py-3 mr-2 ${
        borderd ? "border-2" : "bg-primary-400"
      }`}
      {...rest}
    >
      {title}
    </button>
  );
}
