export interface IResponsePagination {
  currentPage: number
  pageSize: number
  totalElement: number
  totalPage: number
}

export interface IResponseList<T> extends IResponsePagination {
  items: T[]
}
