import axiosInstance from "../utils/axios";
import { handleError, handleResponse } from "../utils/response";

const url = "/wp-json/wc/v3/orders";

function postPlaceOrder(payload) {
    return axiosInstance.post(`${url}`, payload).then(handleResponse).catch(handleError);
}

export { postPlaceOrder };
