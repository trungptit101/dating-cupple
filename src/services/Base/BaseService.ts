import { BaseDmsService } from '@/services/Base/DmsService'
import type { IDmsDataResponse } from '@/types/interceptors'
import type {
  IAttribute,
  IManufacturerSelectItem,
  IManufacturerSelectList,
  IProductSelectItem,
  IProductSelectList,
  IShipmentSelectItem,
  IShipmentSelectList,
  IShipmentTypeSelectItem,
  IShipmentTypeSelectList,
  IStaffSelectItem,
  IStaffSelectList,
  IUnitSelectItem,
  IUnitSelectList,
  IWarehouseSelectItem,
  IWarehouseSelectList,
  IWarehouseTypeSelectItem,
  IWarehouseTypeSelectList,
} from '@/types/base'
import type { IResponseList } from '@/types/response'
import type { IProductUnit } from '@/types/product'

class BaseService extends BaseDmsService {
  async getListShipmentType(
    query: IShipmentTypeSelectList
  ): Promise<IDmsDataResponse<IResponseList<IShipmentTypeSelectItem>>> {
    return await this.instance.get(
      '/product-service/v1/select-item/shipment-type',
      {
        params: query,
      }
    )
  }
  async getUnits(domain?: string): Promise<IDmsDataResponse<IProductUnit>> {
    return await this.instance.get(
      `/product-service/v1/public/config?domain=${domain}`
    )
  }
  async getListWarehouse(
    query: IWarehouseSelectList
  ): Promise<IDmsDataResponse<IResponseList<IWarehouseSelectItem>>> {
    return await this.instance.get('/warehouse-service/select-item/warehouse', {
      params: query,
    })
  }

  async getListManufacturer(
    query: IManufacturerSelectList
  ): Promise<IDmsDataResponse<IResponseList<IManufacturerSelectItem>>> {
    return await this.instance.get(
      '/product-service/v1/select-item/manufacturer',
      {
        params: query,
      }
    )
  }

  async getListAttributes(): Promise<IDmsDataResponse<IAttribute[]>> {
    return await this.instance.get('/product-service/v1/public/attribute')
  }

  async getListUnit(
    query: IUnitSelectList
  ): Promise<IDmsDataResponse<IResponseList<IUnitSelectItem>>> {
    return await this.instance.get('/product-service/v1/select-item/unit', {
      params: query,
    })
  }
  async getListProduct(
    query: IProductSelectList
  ): Promise<IDmsDataResponse<IResponseList<IProductSelectItem>>> {
    return await this.instance.get('/product-service/v1/select-item/product', {
      params: query,
    })
  }
  async getListShipment(
    query: IShipmentSelectList
  ): Promise<IDmsDataResponse<IResponseList<IShipmentSelectItem>>> {
    return await this.instance.get('/product-service/v1/select-item/shipment', {
      params: query,
    })
  }
  async getListStaff(
    query: IStaffSelectList
  ): Promise<IDmsDataResponse<IResponseList<IStaffSelectItem>>> {
    return await this.instance.get('/iam-service/select-item/staff', {
      params: query,
    })
  }

  async getListWarehouseType(
    query: IWarehouseTypeSelectList
  ): Promise<IDmsDataResponse<IResponseList<IWarehouseTypeSelectItem>>> {
    return await this.instance.get(
      '/warehouse-service/select-item/warehouse-type',
      {
        params: query,
      }
    )
  }
}
export default new BaseService()
