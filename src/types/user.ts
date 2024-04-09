export interface IUserInfo {
    userName: string
    email: string
}

export interface IUserLoginPayload {
    userName: string
    password: string
}

export interface IUserLoginResponse {
    token: string
    userInfo: IUserInfo
}

// Tuanba: 7-3-2024: Soha Express

export interface IUserInfo {
    createdAt: string | null,
    createdByAdmin: number | null,
    delete: boolean | null
    // @ts-ignore
    email: string | null,
    fullName: string | null,
    id: number | null,
    phone: string | null,
    role: string | null,
    status: string | null
    updatedAt: string | null,
    updatedByAdmin: number | null
}
