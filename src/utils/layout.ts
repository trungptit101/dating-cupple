import type { IRouterItem } from '@/types/layout'

export const flattenAllRouterFlat = (menu: IRouterItem[]): IRouterItem[] => {
  return menu.reduce(function (result: IRouterItem[], next: IRouterItem) {
    result.push(next)
    if (next.children) {
      result = result.concat(flattenAllRouterFlat(next.children))
      next.children = []
    }
    return result
  }, [])
}
