import type {
    IUserLoginSohaPayload,
    IUserLoginSohaResponse,
} from '@/types/auth'
import { BaseSohaService } from '@/services/Base/SohaService'
import type {ISohaDataResponse } from '@/types/interceptors'
import type {IUserInfo} from "@/types/user";

class UserSohaService extends BaseSohaService {
    async login(
        payload: IUserLoginSohaPayload
    ): Promise<ISohaDataResponse<IUserLoginSohaResponse>> {
        return await this.instance.post('/v1/login', payload)
    }
    async verify(): Promise<ISohaDataResponse<IUserInfo>> {
        return await this.instance.get('/v1/admin')
    }


}
export default new UserSohaService()
