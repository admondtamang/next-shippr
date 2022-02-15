import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";

const useFetch = (url, options) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("idle");

    if (!url) return;

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchData = async () => {
            try {
                setStatus("loading");
                const res = await axiosInstance(url, { ...options, cancelToken: source.token });
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
    }, [url]);
    return {
        response,
        error,
        status: {
            isLoading: status === "loading" || status === "idle",
            isRejected: status === "error",
            isResolved: status === "resolved",
        },
    };
};

export default useFetch;
