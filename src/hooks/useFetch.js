import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";

// Call upon
//
// const {
//   response,
//   error,
//   status: { isIdle, isLoading, isRejected, isResolved },
// } = useFetch(URL, {});

const useFetch = (url, options, dependent) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  //   if (!url)
  //     return {
  //       response,
  //       error,
  //       status: {
  //         isIdle: status === "idle",
  //         isLoading: status === "loading",
  //         isRejected: status === "error",
  //         isResolved: status === "resolved",
  //       },
  //     };

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        setStatus("loading");
        const res = await axiosInstance(url, {
          ...options,
          cancelToken: source.token,
        });
        setResponse(res.data);
        setStatus("resolved");
      } catch (error) {
        setStatus("error");
        setError(error);
      }
    };
    fetchData();
    return () => {
      source.cancel();
    };
  }, [url, dependent]);

  return {
    response,
    error,
    status: {
      isIdle: status === "idle",
      isLoading: status === "loading",
      isRejected: status === "error",
      isResolved: status === "resolved",
    },
  };
};

export default useFetch;
