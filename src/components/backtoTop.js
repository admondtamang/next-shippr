import React from "react";
export default function BackToTop() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col justify-center container">
      <hr />
      <p>You have just reached to the bottom of page.</p>
      <a
        className="cursor-pointer hover:font-bold bg-divide-primary-100"
        onClick={scrollTop}
      >
        Back To Top
      </a>
    </div>
  );
}
