import axios from 'axios'
import { merge } from 'lodash'
import './setting'

const request = async (_options) => {
  // 默认GET方法
  const method = _options.method || 'GET'
  const options = merge({
    ..._options,
  }, {
    method,
  })
  return axios(options)
}

/**
 * 封装get请求
 * @param { String } url 请求路径
 * @param { Object } 请求参数
 *  params GET请求参数
 */
const get = (url, params, _options) => request({
  ..._options,
  params: {
    ...params,
    t: new Date().getTime(),
  },
  url,
})
/**
 * 封装post请求
 * @param { Object } 请求参数
 *  data POST请求请求参数，对象形式
 */
const post = (url, data, _options) => request({
  ..._options,
  data,
  url,
  method: 'POST',
})
/**
 * 封装PUT请求
 * @param { Object } 请求参数
 *  data POST请求请求参数，对象形式
 */
const put = (url, data, _options) => request({
  ..._options,
  data,
  url,
  method: 'PUT',
})

/**
 * 封装PATCH请求
 * @param { Object } 请求参数
 *  data POST请求请求参数，对象形式
 */
const patch = (url, data, _options) => request({
  ..._options,
  data,
  url,
  method: 'PATCH',
})
export {
  get,
  post,
  put,
  patch,
}
export default request
