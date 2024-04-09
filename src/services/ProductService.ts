import { BaseDmsService } from '@/services/Base/DmsService'
import type { IDmsDataResponse } from '@/types/interceptors'
import type {
  IProductFilter,
  IProductItem,
  IProductPayload,
} from '@/types/product'
import type { IResponseList } from '@/types/response'

class ProductService extends BaseDmsService {
  async getList(
    query: IProductFilter
  ): Promise<IDmsDataResponse<IResponseList<IProductItem>>> {
    return await this.instance.get('/product-service/v1/product', {
      params: query,
    })
  }
  async export(query: IProductFilter): Promise<Blob> {
    return await this.instance.get('/product-service/v1/product/export', {
      params: query,
      responseType: 'blob',
    })
  }
  async create(
    payload: IProductPayload
  ): Promise<IDmsDataResponse<IProductPayload>> {
    return await this.instance.post('/product-service/v1/product', payload)
  }
  async import(payload: FormData): Promise<IDmsDataResponse<IProductPayload>> {
    return await this.instance.post(
      '/product-service/v1/product/import',
      payload,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
  }
  async delete(id: number): Promise<IDmsDataResponse<IProductItem>> {
    return await this.instance.delete('/product-service/v1/product/' + id)
  }
  async getDetail(
    id: number | string
  ): Promise<IDmsDataResponse<IProductItem>> {
    return await this.instance.get('/product-service/v1/product/' + id)
  }
  async update(
    id: number,
    payload: IProductPayload
  ): Promise<IDmsDataResponse<IProductItem>> {
    return await this.instance.put('/product-service/v1/product/' + id, payload)
  }
}
export default new ProductService()
