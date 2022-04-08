import { handleError, handleResponse } from "../utils/response";
import { CUSTOMERS, LOGIN_JWT } from "../utils/constants";
import axiosInstance from "../utils/axios";

function user_login(params) {
    return axiosInstance.post(LOGIN_JWT, params).then(handleResponse).catch(handleError);
}

function user_signUp(params) {
    return axiosInstance.post(CUSTOMERS, params).then(handleResponse).catch(handleError);
}

export { user_login, user_signUp };
