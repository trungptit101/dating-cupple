import type { AxiosError, AxiosInstance } from 'axios'
import axios from 'axios'

export class BaseUploadService {
  protected instance: AxiosInstance
  protected readonly baseURL: string

  public constructor() {
    this.baseURL = import.meta.env.VITE_UPLOAD_API
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_UPLOAD_API,
    })
    this.initializeResponseInterceptor()
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use((response) => {
      return response.data
    }, this.handleError)
  }

  private handleError = async (error: AxiosError) => {
    return error.response?.data
  }
}
