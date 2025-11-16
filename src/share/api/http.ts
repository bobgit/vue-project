import axios from 'axios'


const http = axios.create({
baseURL: '/api',
timeout: 8000
})


http.interceptors.request.use(config => {
const token = localStorage.getItem('token')
if (token && config.headers) config.headers.Authorization = token
return config
})


http.interceptors.response.use(res => res.data, err => {
console.error('API ERROR', err)
return Promise.reject(err)
})


export default http
