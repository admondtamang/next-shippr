import Link from "next/link";
import Router from "next/router";
import React from "react";

export default function CustomLink({ href, children, ...rest }) {
  function toPage() {
    Router.push(href || "");
  }

  return (
    <span onClick={toPage} {...rest}>
      {children}
    </span>
  );
}
