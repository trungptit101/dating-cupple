import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import router from '@/router'
import { ElNotification } from 'element-plus'
import { CookieService } from '@/services/Base/CookieService'
import pinia from '@/stores/init'
import { useUserStore } from '@/stores/user'

export class BaseDmsService {
  protected instance: AxiosInstance
  protected readonly baseURL: string
  protected cookieService: CookieService
  protected userStore
  public constructor() {
    this.baseURL = import.meta.env.VITE_DMS_API
    this.cookieService = new CookieService()
    this.userStore = useUserStore(pinia)
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_DMS_API,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    this.initializeRequestInterceptor()
    this.initializeResponseInterceptor()
  }

  private initializeRequestInterceptor = () => {
    // @ts-ignore
    this.instance.interceptors.request.use(this.handleRequest)
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use((response) => {
      return response.data
    }, this.handleError)
  }

  private handleRequest = (config: AxiosRequestConfig) => {
    const token = this.cookieService.getToken()
    config.headers!.Authorization = `Bearer ${
      token || '97737214-4529-4f5a-9a09-fd9af35a60e1_1_1'
    }`
    return config
  }

  private handleError = async (error: AxiosError) => {
    const response = error.response?.data
    if (error.response?.status === 401 || error.response?.status === 403) {
      // @ts-ignore
      response.code = error.response?.status
      ElNotification({
        title: 'Hết phiên đăng nhập',
        message: 'Vui lòng đăng nhập lại',
        type: 'error',
      })
      this.cookieService.removeToken()
      this.userStore.$reset()
      return await router.push('/login')
    }
    return response
  }
}
