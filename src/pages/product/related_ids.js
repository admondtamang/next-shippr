import axios from "axios";
import React from "react";
import useSWR from "swr";
import { Loading } from "../../components";
import ProductCarousel from "../../components/ProductCarousel";
import axiosInstance from "../../utils/axios";
import { RELATED_IDS } from "@/utils/constants";

export default function Related_ids({ ids }) {
  const URL = RELATED_IDS + ids;
  // const {
  //   response,
  //   error,
  //   status: { isIdle, isLoading, isRejected, isResolved },
  // } = useFetch(URL, {}, URL);

  const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

  const { data, error } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  return (
    <div>
      <ProductCarousel products={data} title="Related Products" />
    </div>
  );
}
