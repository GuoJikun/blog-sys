import { get, post } from "@/utils/request.js";

export const list = data => {
    const url = "/article";
    return get(url, data);
};

export const add = data => {
    const url = "/article/add";
    return post(url, data);
};

export const detail = id => {
    const url = `/article/${id}`;
    return get(url);
};
