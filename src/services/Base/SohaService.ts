import type {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios'
import axios from 'axios'
import router from '@/router'
import {ElNotification} from 'element-plus'
import {CookieService} from '@/services/Base/CookieService'
import pinia from '@/stores/init'
import {useUserStore} from '@/stores/user'
import { I18nUtils, notifyEl, notifyServerError } from '@/utils'

export class BaseSohaService {
    protected instance: AxiosInstance
    protected readonly baseURL: string
    protected cookieService: CookieService
    protected userStore

    public constructor() {
        this.baseURL = import.meta.env.VITE_SOHA_API
        this.cookieService = new CookieService()
        this.userStore = useUserStore(pinia)
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_SOHA_API,
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
        if (token) {
            config.headers!.Authorization = token
        }
        return config
    }

    private handleError = async (error: AxiosError) => {
        const response = error.response?.data
        if (error.response?.status === 401) {
            // @ts-ignore
            response.code = error.response?.status
            notifyEl({
                title: 'Hết phiên đăng nhập',
                message: 'Vui lòng đăng nhập lại',
                type: 'error',
            })
            this.cookieService.removeToken()
            this.userStore.$reset()
            await router.push(I18nUtils.i18nRouteByPath('/auth/login'))
        }
        if (error.response?.status === 403) {
            // @ts-ignore
            // response.code = error.response?.status
            notifyEl({
                message: 'Tài khoản không có quyền truy cập',
                type: 'error',
            })
            // return await router.push(I18nUtils.i18nRouteByPath('/dashboard'))
        }
        if (error.response?.status === 500) {
            notifyServerError()
        }
        return response
    }
}
