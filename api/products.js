import axiosInstance from "../utils/axios";
import { handleError, handleResponse } from "../utils/response";

const url = "/wp-json/wc/v3/products";
function getSingleProduct(id) {
  return axiosInstance
    .get(`${url}?slug=${id}`)
    .then(handleResponse)
    .catch(handleError);
}
function getProductVariations(id) {
  return axiosInstance
    .get(`${url}/${id}/variations`)
    .then(handleResponse)
    .catch(handleError);
}

export { getSingleProduct, getProductVariations };
