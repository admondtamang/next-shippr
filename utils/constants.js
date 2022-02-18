const url = "/wp-json/wc/v3/";

const PRODUCTS = url + "products";
const SINGLE_PRODUCTS = PRODUCTS + "?slug=";
const SEARCH_PRODUCTS = PRODUCTS + "?per_page=5&search=";
const RELATED_IDS = PRODUCTS + "?related_ids=";

const CUSTOMERS = url + "customers";
const ORDERS = url + "orders";
const CATEGORIES = PRODUCTS + "/categories";
const LOGIN_JWT = "wp-json/jwt-auth/v1/token";
const STATUS = { loading: "loading", success: "success", idle: "idle" };

const GET_FEEDER = "http://localhost:3000/api/feeder";

export {
  url,
  PRODUCTS,
  SINGLE_PRODUCTS,
  SEARCH_PRODUCTS,
  CATEGORIES,
  CUSTOMERS,
  LOGIN_JWT,
  ORDERS,
  RELATED_IDS,
  STATUS,
  GET_FEEDER,
};
