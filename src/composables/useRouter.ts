import { useRouter } from 'vue-router'
import type { RouteLocationRaw, RouteLocationNormalized } from 'vue-router'
import { I18nUtils } from '@/utils'

export default function useDmsRouter() {
  const router = useRouter()
  const push = (to: RouteLocationRaw) => {
    return router.push(to)
  }
  const replace = (to: RouteLocationRaw) => {
    return router.replace(to)
  }
  const go = (to: number) => {
    return router.go(to)
  }
  const back = () => {
    return router.back()
  }
  const pushByName = (to: RouteLocationNormalized) => {
    return router.push(I18nUtils.i18nRouteByName(to))
  }
  const pushByPath = (to: RouteLocationRaw) => {
    return router.push(I18nUtils.i18nRouteByPath(to))
  }
  const replaceByPath = (to: RouteLocationRaw) => {
    return router.replace(I18nUtils.i18nRouteByPath(to))
  }
  const replaceByName = (to: RouteLocationRaw) => {
    return router.replace(I18nUtils.i18nRouteByPath(to))
  }
  return {
    router,
    pushByName,
    pushByPath,
    replaceByPath,
    replaceByName,
    push,
    go,
    back,
    replace,
  }
}
