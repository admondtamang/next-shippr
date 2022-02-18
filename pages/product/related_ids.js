import React from "react";
import ProductCarousel from "../../components/ProductCarousel";
import { useFetch } from "../../hooks";
import { RELATED_IDS } from "../../utils/constants";

export default function Related_ids({ ids }) {
  const URL = RELATED_IDS + ids;
  const {
    response,
    error,
    status: { isIdle, isLoading, isRejected, isResolved },
  } = useFetch(URL, {}, URL);
  console.log(response, error);
  return (
    <div>
      <ProductCarousel products={response} />
    </div>
  );
}
