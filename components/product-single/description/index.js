import Script from "next/script";
import React, { useState } from "react";

const Description = ({ show, product }) => {
    const style = {
        display: show ? "flex" : "none",
    };

    return (
        <section style={style} className="product-single__description">
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </section>
    );
};

export default Description;
