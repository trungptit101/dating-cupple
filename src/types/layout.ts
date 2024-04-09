export interface IRouterItem {
  id: number
  label: string
  parentLabel?: string[]
  parentId?: number
  path: string | null
  icon: string | null
  hiddenChildren?: boolean | null
  children: IRouterItem[] | null
}
