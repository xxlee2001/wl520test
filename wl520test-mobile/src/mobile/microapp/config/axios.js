import axios from "axios";

import {
    getHost
} from '../util'

axios.defaults.baseURL = getHost();
axios.defaults.timeout = 5000;

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    const { response: { data } = {} } = error;
    // 对响应错误做点什么
    return Promise.reject(data || error);
});
