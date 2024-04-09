import type { IUploadDataResponse } from '@/types/interceptors'
import { BaseUploadService } from '@/services/Base/UploadService'
import type { IUploadResponse } from '@/types/upload'

class UploadService extends BaseUploadService {
  async upload(
    formData: FormData
  ): Promise<IUploadDataResponse<IUploadResponse>> {
    return await this.instance.post('/', formData)
  }
}
export default new UploadService()
