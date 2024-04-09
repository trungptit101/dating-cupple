import type { IQuery } from '@/types/query'

export interface IManufacturerPayload {
  name: string
  tax?: string
  email?: string
  phoneNumber?: string
  website?: string
  descriptions?: string
  cityId: number | null
  districtId: number | null
  wardId: number | null
  address: string
}

export interface IManufacturerQuery extends IQuery {
  keyword?: string
  phoneNumber?: number | string
  createdFrom?: string | null
  createdTo?: string | null
  updatedFrom?: string | null
  updatedTo?: string | null
}

export interface IManufacturerItem {
  id?: number
  name: string
  tax: string
  email: string
  phoneNumber: string
  website: string
  descriptions: string
  cityId: number | null
  districtId: number | null
  wardId: number | null
  address: string
  createdAt?: string | null
  updatedAt?: string | null
  createdByName?: string | null
  wardName?: string | null
  districtName?: string | null
  cityName?: string | null
}
