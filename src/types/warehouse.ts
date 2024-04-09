import type { IQuery } from '@/types/query'

export interface DataType {
  statusList: object[]
  staffList: object[]
  warehouseTypeList: object[]
  listData: object[]
  totals: number
}
export interface DataTypeForm {
  unitList: object[]
  warehouseTypeList: object[]
  staffList: object[]
  weightUnitList: object[]
}
export interface IWarehouseQuery extends IQuery {
  key?: string | null
  warehouseTypeId?: number | null
  status?: number | null
  createdAtStart?: string | null
  createdAtEnd?: string | null
  updateedAtStart?: string | null
  updateedAtEnd?: string | null
  persionInChargeId?: number | null
}
export interface IWarehouseItem {
  id?: number | null
  image?: string | null
  name?: string | null
  code?: string | null
  warehouseTypeId?: number | null
  warehouseType?: string | null
  status?: number | null
  persionInChargeId?: number | null
  persionInCharge?: string | null
  createdAt?: string | null
  updatedAt?: string | null
}
export interface IWarehousePayload {
  code?: string | null
  name?: string | null
  images?: string[] | undefined
  warehouseTypeId?: number | null
  persionInChargeId?: number | null
  provinceId?: number | null
  districtId?: number | null
  wardId?: number | null
  address?: string | null
  // groupSale?: string | null
  description?: string | null
}
export interface IWarehouseResponseDetail {
  id?: number | null
  images?: string[]
  name?: string | null
  code?: string | null
  warehouseTypeId?: number | null
  warehouseType?: string | null
  persionInChargeId?: number | null
  persionIncharge?: string | null
  createdByUserId?: number | null
  createdByUserName?: string | null
  status?: number | null
  createdAt?: string | null
  updatedAt?: string | null
  provinceId?: number | null
  districtId?: number | null
  wardId?: number | null
  address?: string | null
  description?: string | null
}
export interface IWarehouseInventoryProductQuery extends IQuery {
  productId?: number | null
  warehouseId?: number | null
}
export interface IWarehouseInventoryProductItem {
  productId?: number | null
  productName?: string | null
  barcode?: string | null
  productImage?: string | null
  brand?: string | null
  quantity?: number | null
  quantityUnit?: string | null
}

export interface IWarehouseInventoryShipmentQuery extends IQuery {
  productId?: number | null
  warehouseId?: number | null
  shipmentId?: number | null
}
export interface IWarehouseInventoryShipmentItem {
  productId?: number | null
  productName?: string | null
  barcode?: string | null
  productImage?: string | null
  shipmentId?: number | null
  shipmentName?: string | null
  shipmentCode?: string | null
  expiryDate?: string | null
  quantity?: number | null
  quantityUnit?: string | null
}

export interface IWarehousesShipmentsQuery extends IQuery {
  key?: string | null
}
export interface IWarehousesShipmentsItem {
  id?: number | null
  image?: string | null
  name?: string | null
  code?: string | null
  shipmentType?: string | null
}
export interface IWarehouseReceiptPayload {
  warehouseId?: number | null
  shipmentIds?: number[]
}
