import axios from "axios";
import { getToken } from "../utils/cookie";
export function request(config) {
    const ins = axios.create({
        baseURL: process.env.VUE_APP_BASE_API,
    });
    ins.interceptors.request.use(
        function (config) {
            if (config.headers.isToken !== false) {
                if (getToken("token")) {
                    config.headers.Authorization =
                        "Bearer " + getToken("token");
                }
            }
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    ins.interceptors.response.use(
        function (response) {
            return response.data;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    return ins(config);
}
