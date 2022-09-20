import axios from "axios";
import store from "@/store/index.js";
import { ElMessage } from "element-plus";
import router from "@/router/index.js";
import { formatParam } from "@/utils/utils.js";

// const baseURL = process.env.VUE_APP_AXIOS_BASE_URL;
const baseURL = "http://localhost:5173/v1";

const conf = {
    baseURL: baseURL,
    withCredentials: true,
    timeout: 15 * 1000,
};

const _axios = axios.create(conf);

_axios.interceptors.request.use(
    config => {
        // const excludesApi = [`/v1/login`];
        // if (!excludesApi.includes(config.url)) {
        //     const stores = store;
        //     config.headers["Authorization"] = `${stores.state.token}`;
        // }
        return config;
    },
    error => Promise.reject(error)
);

_axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            if (response.data.code === 10005) {
                if (store.state.toastCount === 1) {
                    ElMessage.error("登陆失效，跳转到登陆界面");
                    store.commit("toastCount", 2);
                }
                store.commit("isLogin", false);
                router.replace("/login");
            }
            if (!["application/json;charset=UTF-8", "application/json"].includes(response.headers["content-type"])) {
                return response;
            } else {
                return response.data;
            }
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        const { response } = error;
        if (response) {
            const status = response.status;
            if (status === 500) {
                ElMessage.error("服务端异常");
            }
            if (status === 401) {
                if (store.state.toastCount === 1) {
                    ElMessage.error("登陆失效，跳转到登陆界面");
                    store.commit("toastCount", 2);
                }
                store.commit("isLogin", false);
                router.push("/login");
            }
        }
        return Promise.reject(error);
    }
);

const get = (url, params, config) => {
    const conf = config || {};
    Object.assign(conf, {
        url,
        params,
        method: "get",
    });
    return _axios(conf);
};

const put = (url, params, config) => {
    const conf = config || {};
    return _axios.put(url, params, conf);
};

const post = (url, data, config = {}) => {
    const { format = true, ...conf } = config;

    Object.assign(conf, {
        data: format ? formatParam(data) : data,
        url,
        method: "post",
    });
    return _axios(conf);
};

const del = (url, params, config) => {
    const conf = config || {};
    return _axios.delete(url, { params }, conf);
};

export { _axios, get, post, put, del, baseURL };
