import type { IDmsDataResponse } from '@/types/interceptors'
import { BaseDmsService } from '@/services/Base/DmsService'
import type { IResponseList } from '@/types/response'
import type {
  IWarehouseInventoryProductItem,
  IWarehouseInventoryProductQuery,
  IWarehouseInventoryShipmentItem,
  IWarehouseInventoryShipmentQuery,
  IWarehouseItem,
  IWarehousePayload,
  IWarehouseQuery,
  IWarehouseReceiptPayload,
  IWarehouseResponseDetail,
  IWarehousesShipmentsItem,
  IWarehousesShipmentsQuery,
} from '@/types/warehouse'

class WarehouseService extends BaseDmsService {
  async getList(
    query: IWarehouseQuery | object
  ): Promise<IDmsDataResponse<IResponseList<IWarehouseItem>>> {
    return await this.instance.get('/warehouse-service/warehouses', {
      params: query,
    })
  }
  async create(payload: IWarehousePayload): Promise<IDmsDataResponse<{}>> {
    return await this.instance.post('/warehouse-service/warehouse/', payload)
  }
  async receipt(
    payload: IWarehouseReceiptPayload
  ): Promise<IDmsDataResponse<{}>> {
    return await this.instance.post(
      '/warehouse-service/warehouse/receipt',
      payload
    )
  }
  async update(
    id: number,
    payload: IWarehousePayload
  ): Promise<IDmsDataResponse<{}>> {
    return await this.instance.put(
      '/warehouse-service/warehouse/' + id,
      payload
    )
  }
  async getDetail(
    id: number | string | undefined | null
  ): Promise<IDmsDataResponse<IWarehouseResponseDetail>> {
    return await this.instance.get('/warehouse-service/warehouse/' + id)
  }
  async delete(id: number): Promise<IDmsDataResponse<{}>> {
    return await this.instance.delete('/warehouse-service/warehouse/' + id)
  }

  async export(query: IWarehouseQuery | object): Promise<Blob> {
    return await this.instance.get('/warehouse-service/warehouse/export', {
      params: query,
      responseType: 'blob',
    })
  }
  async exportInventoryProduct(query: IWarehouseQuery | object): Promise<Blob> {
    return await this.instance.get(
      '/warehouse-service/warehouse/product-inventory/export',
      {
        params: query,
        responseType: 'blob',
      }
    )
  }
  async exportInventoryConsignment(
    query: IWarehouseQuery | object
  ): Promise<Blob> {
    return await this.instance.get(
      '/warehouse-service/warehouse/shipment-inventory/export',
      {
        params: query,
        responseType: 'blob',
      }
    )
  }
  async getListProductInventory(
    query: IWarehouseInventoryProductQuery | object
  ): Promise<IDmsDataResponse<IResponseList<IWarehouseInventoryProductItem>>> {
    return await this.instance.get(
      '/warehouse-service/warehouse/product-inventory',
      {
        params: query,
      }
    )
  }

  async getListShipmentInventory(
    query: IWarehouseInventoryShipmentQuery | object
  ): Promise<IDmsDataResponse<IResponseList<IWarehouseInventoryShipmentItem>>> {
    return await this.instance.get(
      '/warehouse-service/warehouse/shipment-inventory',
      {
        params: query,
      }
    )
  }
  async getListWarehousesShipments(
    query: IWarehousesShipmentsQuery | object
  ): Promise<IDmsDataResponse<IResponseList<IWarehousesShipmentsItem>>> {
    return await this.instance.get('/warehouse-service/warehouse/shipments', {
      params: query,
    })
  }
}
export default new WarehouseService()
