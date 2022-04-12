import React from "react";

const Description = ({ show, product }) => {
  const style = {
    display: show ? "" : "none",
  };

  return (
    <section style={style} className="product-single__description p-8">
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
    </section>
  );
};

export default Description;
