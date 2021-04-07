import axios from 'axios'
import { Notification } from 'element-ui'
import Config from '@/settings'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8000', // api 的 base_url
  timeout: Config.timeout // 请求超时时间
})

// response 拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // 兼容blob下载出错json提示
    if (error.response.data instanceof Blob && error.response.data.type.toLowerCase().indexOf('json') !== -1) {
      const reader = new FileReader()
      reader.readAsText(error.response.data, 'utf-8')
      // eslint-disable-next-line no-unused-vars
      reader.onload = function(e) {
        const errorMsg = JSON.parse(reader.result).message
        Notification.error({
          title: errorMsg,
          duration: 5000
        })
      }
    } else {
      let code = 0
      try {
        code = error.response.code
      } catch (e) {
        if (error.toString().indexOf('Error: timeout') !== -1) {
          Notification.error({
            title: '网络请求超时',
            duration: 5000
          })
          return Promise.reject(error)
        }
      }
      window.console.log(code)
    }
    return Promise.reject(error)
  }
)
export default service
