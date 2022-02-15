import axiosInstance from "../utils/axios";

function api() {
    try {
        axiosInstance.get();
    } catch (error) {}
}

const url = "/wp-json/wc/v3/products";
function getProducts() {}
