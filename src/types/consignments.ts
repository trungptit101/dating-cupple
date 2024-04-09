import type { IQuery } from '@/types/query'

export interface DataType {
  shipmentTypeList: object[]
  warehouseList: object[]
  manuFacturerList: object[]
  staffList: object[]
  listData: object[]
  totals: number
}
export interface DataTypeForm {
  unitList: object[]
  shipmentTypeList: object[]
  productList: DataTypeProductList[]
  weightUnitList: object[]
}
export interface DataTypeProductList {
  data: {
    unit: string
  }
  label: string
  value: number
}
export interface IConsignmentsQuery extends IQuery {
  key?: string | null
  shipmentTypeId?: number | null
  status?: number | null
  warehouseId?: number | null
  manuFacturerId?: number | null
  expiryTimeStart?: string | null
  expiryTimeEnd?: string | null
  createdAtStart?: string | null
  createdAtEnd?: string | null
  updateedAtStart?: string | null
  updateedAtEnd?: string | null
  userCreatedId?: number | string | null
}

export interface IConsignmentsItem {
  id?: number | string | null
  image?: string | null
  name?: string | null | undefined
  code?: string | null
  shipmentType?: string | null
  manuFacturerName?: string | null
  produceTime?: string | null
  expiryDate?: string | null
  warehouseId?: number
  warehouseName?: string | null
  userId?: number | null
  userName?: string | null
  createdAt?: string | null
  updatedAt?: string | null
}
export interface IConsignmentsPayload {
  id?: number | null
  name?: string | null
  code?: string | null
  images?: string[]
  shipmentTypeId?: number | null
  productId?: string | number | null
  weight?: number | null
  quantity?: number | null
  quantityUnit?: string | number | null
  produceTime?: string | null
  expiryDate?: string | null
}
export interface IConsignmentsResponseDetail {
  id?: number | null
  name?: string | null
  code?: string | null
  images?: string[]
  shipmentTypeId?: number | null
  shipmentTypeName?: string | null
  manufacturerName?: string | null
  productId?: string | number | null
  productName?: string | null
  produceTime?: string | null
  expiryDate?: string | null
  warehouseId?: number | null
  warehouseName?: string | null
  userId?: number | null
  userName?: string | null
  createdAt?: string | null
  updatedAt?: string | null
  weight?: number | null
  quantity?: number | null
  quantityUnit?: string | number | null
  weightUnit?: string | number | null
}
