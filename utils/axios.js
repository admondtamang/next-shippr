import axios from "axios";
import { consumerKey, consumerSecret, baseURL } from "../config/config";

const axiosInstance = axios.create({
    baseURL,
    auth: {
        username: consumerKey,
        password: consumerSecret,
    },
});

// Add a request interceptor
// axiosInstance.interceptors.request.use(
//     (config) => {
//         if (store.user.data && Object.keys(store.user.data).length !== 0) {
//             let token = store.user?.data?.token;

//             // let token = getAuthorizationToken();
//             if (token) {
//                 config.headers.Authorization = `Bearer ${token}`;
//                 config.headers["Access-Control-Allow-Origin"] = "*";
//                 config.headers["Content-Type"] = "application/json";
//             }

//             return config;
//         }
//     },
//     (error) => {
//         alert("interceptor request has error");
//         return Promise.reject(error);
//     }
// );

export default axiosInstance;
