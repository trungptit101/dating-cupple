import type {IUserInfo} from "@/types/user";

export interface IRegisterIcheckPayload {
  phoneNumber: string | null
  password: string | null
  confirmPassword: string | null
}

export interface ISendOtpIcheckPayload {
  token: string
  otp: string
}

export interface ISendOtpIcheckResponse {
  appUserId: number
  expiredTime?: number
  firebaseToken?: string
  firstLogin?: boolean
  keepAlive?: boolean
  responseCode?: string | null
  token: string | null
  uploadKey?: string | null
  userType: number
}

export interface IRegisterIcheckResponse {
  token: string
}

export interface IRegisterBusinessPayload {
  icheckId?: number | null
  icheckPhone?: string | null
  avatar?: string | null
  name?: string | null
  businessType?: number | null
  taxcode?: string | null
  idCard?: string | null
  idCardDeliveryDate?: string | null
  idCardDeliveryPlace?: string | null
  phone?: string | null
  email?: string | null
  attachments?: string[] | null
  countryId?: number | null
  cityId?: number | null
  districtId?: number | null
  address?: string | null
}

export interface IRegisterIcheckPayload {
  phoneNumber: string | null
  password: string | null
  confirmPassword: string | null
}

export interface IRegisterFormSoha {
  email: string
  fullName: string
  phone: string
  role: string
  status: 'ACTIVE'
  password: string
}

export interface ILoginResponse {
  code: string
  message: string
  data: {
    token: string
  }
  status: number
}

export interface ILoginPayload {
  username?: string
  password?: string
  otp?: string
}

export interface IUserLoginResponse {
  token: string
  userInfo: IUserInfo
}

// Soha
export interface IUserLoginSohaPayload {
  username: string
  password: string
}
export interface IUserLoginSohaResponse {
  token: string
}
