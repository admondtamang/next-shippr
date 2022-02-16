import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../utils/axios";

/**
 *
 * @param {*} queryName key for storing
 * @param {*} url addresss for request
 * @param {*} options axios properities
 * @returns {resopnse, error,isLoading, status}
 */
const useFetchQuery = (queryName, url, options, dependent) => {
  const { isLoading, error, data, status } = useQuery(queryName, () =>
    axiosInstance
      .get(url, { ...options })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((error) => console.log(error))
  );
  useEffect(() => {
    console.log(url, isLoading, status);
  }, [url, data, status, dependent]);

  return {
    response: data || [],
    error,
    isLoading,
    status,
  };
};

export default useFetchQuery;
