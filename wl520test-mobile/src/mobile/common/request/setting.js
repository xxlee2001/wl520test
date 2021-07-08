import axios from 'axios'

axios.defaults.withCredentials = true
axios.interceptors.request.use(
  config => {
    const configProperty = config

    const { url } = configProperty
    if (!/[http|https]:\/\//gi.test(url)) {
      configProperty.url = `${window.$PORTAL_CONFIG.host}/${url}`
    }
    return configProperty
  },
  error => {
    Promise.reject(error)
  },
)

// 添加响应拦截器
axios.interceptors.response.use( (response) => {
  // 对响应数据做点什么
  return response;
},  (error) => {
  const { response: { data } = {} } = error;
  // 对响应错误做点什么
  return Promise.reject(data || error);
});
