import axios from 'axios'
import qs from 'qs'

// 1. create axios instance
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  withCredentials: true,
  timeout: 5000
})

// 2. request interceptors
instance.interceptors.request.use(
  config => {
    if (config.method.toLocaleLowerCase() === 'get') {
      config.params = config.data
      config.data = null
    } else {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 3. response interceptors
instance.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200 || res.code !== 1) {
      alert('服务器繁忙')
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  },
  error => {
    console.log('err', error)
    alert(error.message)
  }
)

export default instance
