import type { IQuery } from '@/types/query'
import type { IProductExtraInfo } from '@/types/product'

export interface IConsignmentsFilter extends IQuery {
  key: string
  shipmentTypeId: number
  warehouseId: number
  manuFacturerId: number
  filter: string
  userCreatedId: string
  createdAt: string
  updateedAt: string
  expiryTime: string
}

export interface IShipmentTypeSelectList extends IQuery {
  key: string
}
export interface IShipmentTypeSelectItem {
  label: string
  value: number
}

export interface IUnitSelectList extends IQuery {
  key: string
}
export interface IUnitSelectItem {
  label: string
  value: number
}
export interface IWarehouseSelectList extends IQuery {
  key: string
  status: number | null
}
export interface IWarehouseSelectItem {}
export interface IProductSelectList extends IQuery {
  keyword: string
}
export interface IProductSelectItem {
  label: string
  value: number
  data: {
    unit: string
  }
}
export interface IShipmentSelectList extends IQuery {
  key: string
}
export interface IShipmentSelectItem {
  label: string
  value: number
}
export interface IStaffSelectList extends IQuery {
  key: string
  status: number | null
}
export interface IStaffSelectItem {
  label: string
  value: number
}
export interface IManufacturerSelectList extends IQuery {
  keyword?: string
}
export interface IManufacturerSelectItem {
  lable: string
  value: number
}
export interface IAttributeItem {
  label: string | null
  value: string | null
}

export interface IAttribute {
  id: number
  name: string
  code: string | null
  desc: string | null
  backEndType: string | null
  frontEndInput: string | null
  items: IAttributeItem[] | null
  required: boolean
  uniqueValue: boolean
  attribute?: {
    id: number | null
    value: string | null | number | string[] | IProductExtraInfo
  }
}

export interface ISelectedAttribute {
  name?: string
  frontEndInput?: string | null
  items?: IAttributeItem[] | null
  attribute?: {
    id: number | null
    value: string | null | number | string[] | IProductExtraInfo
  }
}
export interface IWarehouseTypeSelectList extends IQuery {
  key: string
  status: number | null
}
export interface IWarehouseTypeSelectItem {
  label: string
  value: number
}
