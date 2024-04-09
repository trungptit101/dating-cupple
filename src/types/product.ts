import type { IQuery } from '@/types/query'
import type { IEcommerce } from '@/types/ecommerce'
import type { IAttribute } from '@/types/base'

export interface IProductFilter extends IQuery {
  keyword: string | null
  brand: string | null
  createdFrom: string | null
  createdTo: string | null
  updatedFrom: string | null
  updatedTo: string | null
}

export interface IProductExtraInfo {
  detail: string
  images: string[]
  description: string
}

export interface IProductExtendPayload {
  attributeId?: number | null
  config?: IAttribute
  value?: string | null | number | string[] | IProductExtraInfo
}

export interface IProductPayload {
  id?: number
  name: string
  barcode: string
  price: number | null
  priceUnit: string
  origin: string
  manufacturerId: number | null
  brand: string
  expiryDate: number | null
  productInfo: IProductExtraInfo
  businessInfo: IProductExtraInfo
  verifiedInfo: IProductExtraInfo
  unit: string | null
  weight: number | null
  capacity: number | null
  height: number | null
  width: number | null
  length: number | null
  weightUnit: string | null
  capacityUnit: string | null
  heightUnit: string | null
  widthUnit: string | null
  lengthUnit: string | null
  packageMethod: string | null
  packageNumber: number | null
  color: string
  images: string[]
  ecommerces: IEcommerce[]
  productExtends?: IProductExtendPayload[]
}

export interface IUnitItem {
  id?: number
  domain?: string
  subDomain?: string
  value?: string | number
  description?: string
  config?: string | null
}

export interface IProductUnit {
  UNIT?: IUnitItem[]
  PRICE?: IUnitItem[]
  PACKAGE_UNIT?: IUnitItem[]
  ECOMMERCE?: IUnitItem[]
  WEIGHT_UNIT?: IUnitItem[]
  CAPACITY_UNIT?: IUnitItem[]
  HEIGHT_UNIT?: IUnitItem[]
  WIDTH_UNIT?: IUnitItem[]
  LENGTH_UNIT?: IUnitItem[]
  BUSINESS_TYPE?: IUnitItem[]
}

export interface IProductItem extends IProductPayload {
  createdAt: string | null
  createdAtStr: string | null
  createdByName: string | null
  updatedAt: string | null
  updatedAtStr: string | null
  userId: number | null
  manufacturerName: string | null
}
