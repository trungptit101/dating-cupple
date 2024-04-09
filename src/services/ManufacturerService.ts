import type { IDmsDataResponse } from '@/types/interceptors'
import type {
  IManufacturerItem,
  IManufacturerPayload,
  IManufacturerQuery,
} from '@/types/manufacturer'
import { BaseDmsService } from '@/services/Base/DmsService'
import type { IResponseList } from '@/types/response'

class ManufacturerService extends BaseDmsService {
  async getList(
    query: IManufacturerQuery
  ): Promise<IDmsDataResponse<IResponseList<IManufacturerItem>>> {
    return await this.instance.get('/product-service/v1/manufacturer', {
      params: query,
    })
  }
  async create(
    payload: IManufacturerPayload
  ): Promise<IDmsDataResponse<IManufacturerItem>> {
    return await this.instance.post('/product-service/v1/manufacturer', payload)
  }
  async update(
    id: number,
    payload: IManufacturerPayload
  ): Promise<IDmsDataResponse<IManufacturerItem>> {
    return await this.instance.put(
      '/product-service/v1/manufacturer/' + id,
      payload
    )
  }
  async getDetail(
    id: number | string
  ): Promise<IDmsDataResponse<IManufacturerItem>> {
    return await this.instance.get('/product-service/v1/manufacturer/' + id)
  }
  async delete(id: number): Promise<IDmsDataResponse<IManufacturerItem>> {
    return await this.instance.delete('/product-service/v1/manufacturer/' + id)
  }
}
export default new ManufacturerService()
