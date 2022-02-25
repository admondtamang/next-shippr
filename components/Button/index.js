import React from "react";
import { CustomLink } from "..";

export default function Button({ variant, title, borderd, ...rest }) {
  switch (variant) {
    case "icon-button":
      return (
        <button className="font-bold bg-gray-200 rounded-full p-4 pr-4 hover:bg-primary-300">
          <CustomLink href="/" {...rest}>
            <i className="icon-left mr-2"></i> {title}
          </CustomLink>
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
