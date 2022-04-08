import axiosInstance from "../utils/axios";
import { PRODUCTS } from "../utils/constants";
import { handleError, handleResponse } from "../utils/response";

const url = PRODUCTS;
// GET ALL
function getProducts(_url) {
  return axiosInstance.get(_url).then(handleResponse).catch(handleError);
}

// GET SINGLE
function getSingleProduct(id) {
  return axiosInstance
    .get(`${url}?slug=${id}`)
    .then(handleResponse)
    .catch(handleError);
}

// GET VARIGATION
function getProductVariations(id) {
  return axiosInstance
    .get(`${url}/${id}/variations`)
    .then(handleResponse)
    .catch(handleError);
}

export { getProducts, getSingleProduct, getProductVariations };
