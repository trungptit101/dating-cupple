import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import type { IRouterItem } from '@/types/layout'
import { useRoute } from 'vue-router'
import { flattenAllRouterFlat } from '@/utils'
import { cloneDeep } from 'lodash'
import { AllRouter } from '@/constants'

export type UseLayoutType = {
  currentSidebarRouter: Ref<IRouterItem | null>
  currentExactRouter: Ref<IRouterItem | null>
}

export default function useLayout(): UseLayoutType {
  const currentSidebarRouter = ref<IRouterItem | null>(null)
  const currentExactRouter = ref<IRouterItem | null>(null)
  const route = useRoute()
  const allFlattenRouter = flattenAllRouterFlat(cloneDeep(AllRouter))
  watch(
    () => route.path,
    (path) => {
      const locale = route.params.locale
      let routeNoLocale = path
        ?.split('/')
        .filter((item) => item !== locale)
        .join('/')
      const id = route.params.id
      if (id) {
        routeNoLocale = routeNoLocale.replace(`${id}`, ':id')
      }
      currentSidebarRouter.value =
        allFlattenRouter.find(
          (item) => item.path === `/${path?.split('/')[2]}`
        ) || null
      currentExactRouter.value =
        allFlattenRouter.find((item) => item.path === `${routeNoLocale}`) ||
        null
    },
    {
      immediate: true,
      deep: true,
    }
  )
  return {
    currentSidebarRouter,
    currentExactRouter,
  }
}
