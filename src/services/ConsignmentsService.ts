import type { IDmsDataResponse } from '@/types/interceptors'
import type {
  IConsignmentsItem,
  IConsignmentsPayload,
  IConsignmentsQuery,
  IConsignmentsResponseDetail,
} from '@/types/consignments'
import { BaseDmsService } from '@/services/Base/DmsService'
import type { IResponseList } from '@/types/response'

class ConsignmentsService extends BaseDmsService {
  async getList(
    query: IConsignmentsQuery | object
  ): Promise<IDmsDataResponse<IResponseList<IConsignmentsItem>>> {
    return await this.instance.get('/product-service/shipments', {
      params: query,
    })
  }
  async create(payload: IConsignmentsPayload): Promise<IDmsDataResponse<{}>> {
    return await this.instance.post('/product-service/shipment/', payload)
  }
  async update(
    id: number,
    payload: IConsignmentsPayload
  ): Promise<IDmsDataResponse<{}>> {
    return await this.instance.put('/product-service/shipment/' + id, payload)
  }
  async getDetail(
    id: number | string | undefined | null
  ): Promise<IDmsDataResponse<IConsignmentsResponseDetail>> {
    return await this.instance.get('/product-service/shipment/' + id)
  }
  async delete(id: number): Promise<IDmsDataResponse<{}>> {
    return await this.instance.delete('/product-service/shipment/' + id)
  }

  async export(query: IConsignmentsQuery | object): Promise<Blob> {
    return await this.instance.get('/product-service/shipment/export', {
      params: query,
      responseType: 'blob',
    })
  }
}
export default new ConsignmentsService()
