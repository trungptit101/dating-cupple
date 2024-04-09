import UserService from '@/services/UserService'
import UserSohaService from '@/services/UserSohaService'
import { useUserStore } from '@/stores/user'
import pinia from '@/stores/init'
import { CookieService } from '@/services/Base/CookieService'
import { I18nUtils } from '@/utils'
import { router } from '@/router/init'
const userStore = useUserStore(pinia)
const cookieService = new CookieService()

const PageNoAuth = ['Login', 'Register', 'Otp', 'ForgotPassword']

//
// router.beforeEach(async (to, from, next) => {
//   const toPage = to.name as string
//   if (!PageNoAuth.includes(toPage)) {
//     if (!userStore?.userInfo) {
//       const response = await UserSohaService.verify()
//       const unAuthenticated = response.code === 'UnauthorizedException'
//       if (unAuthenticated) {
//         cookieService.removeToken()
//         userStore.$reset()
//         return next({ path: I18nUtils.i18nRouteByPath('/auth/login') })
//       } else {
//         userStore.userInfo = response.data
//       }
//     }
//     return next()
//   } else {
//     return next()
//   }
// })

export default router
