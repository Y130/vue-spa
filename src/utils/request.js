import axios from 'axios'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {
  // 让每个请求携带token-- ['X-Token']为自定义key, 根据实际情况修改
  config.headers['X-Token'] = getToken()
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

service.interceptors.response.use(response => response, error => {
  console.log('err' + error)
  return Promise.reject(error)
})

export default service
