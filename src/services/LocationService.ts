import { BaseDmsService } from '@/services/Base/DmsService'
import type { IDmsDataResponse } from '@/types/interceptors'
import type { ILocationItem, ILocationQuery } from '@/types/location'

class LocationService extends BaseDmsService {
  async getLocation(
    query: ILocationQuery
  ): Promise<IDmsDataResponse<ILocationItem[]>> {
    return await this.instance.get('/product-service/v1/public/location', {
      params: query,
    })
  }
}
export default new LocationService()
