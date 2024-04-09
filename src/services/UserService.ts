import type {
  IUserInfo,
  IUserLoginPayload,
  IUserLoginResponse,
} from '@/types/user'
import { BaseDmsService } from '@/services/Base/DmsService'
import type { IDmsDataResponse, ISohaDataResponse } from '@/types/interceptors'
import type {
  IRegisterBusinessPayload,
  IRegisterFormSoha,
  IRegisterIcheckPayload,
  IRegisterIcheckResponse,
  ISendOtpIcheckPayload,
  ISendOtpIcheckResponse,
} from '@/types/auth'

class UserService extends BaseDmsService {
  async login(
    payload: IUserLoginPayload
  ): Promise<IDmsDataResponse<IUserLoginResponse>> {
    return await this.instance.post('/product-service/v1/login', payload)
  }
  async verify(): Promise<IDmsDataResponse<IUserInfo>> {
    return await this.instance.get('/product-service/v1/user/info')
  }
  async createIcheckAccount(
    payload: IRegisterIcheckPayload
  ): Promise<IDmsDataResponse<IRegisterIcheckResponse>> {
    return await this.instance.post(
      '/user-management/api/v1/noauth/register/request',
      payload
    )
  }
  async sendOtpIcheckAccount(
    payload: ISendOtpIcheckPayload
  ): Promise<IDmsDataResponse<ISendOtpIcheckResponse>> {
    return await this.instance.post(
      '/user-management/api/v1/noauth/register/confirm',
      payload
    )
  }
  async resendOtpIcheckAccount(query: {
    token: string
  }): Promise<IDmsDataResponse<ISendOtpIcheckPayload>> {
    return await this.instance.get(
      '/user-management/api/v1/noauth/register/resent-otp',
      {
        params: query,
      }
    )
  }
  async createBusinessAccount(
    payload: IRegisterFormSoha
  ): Promise<IDmsDataResponse<IRegisterBusinessPayload>> {
    return await this.instance.post('/iam-service/public/register', payload)
  }

  async registerAccountSoha(
    payload: IRegisterIcheckPayload
  ): Promise<ISohaDataResponse<IRegisterIcheckResponse>> {
    return await this.instance.post(
      '/user-management/api/v1/noauth/register/request',
      payload
    )
  }
}
export default new UserService()
