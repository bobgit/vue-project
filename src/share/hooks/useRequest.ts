import http from '@/share/api/http'

export const useRequest = () => {
  const get = (url: string, params?: any) => http.get(url, { params })
  const post = (url: string, data?: any) => http.post(url, data)
  return { get, post }
}
