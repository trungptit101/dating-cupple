export interface IDmsDataResponse<DataType> {
  data: DataType
  code: string
  message: string
  statusCode?: string
}

export interface IUploadDataResponse<DataType> {
  data: DataType
  status: number
  message: string
}

export interface ISohaDataResponse<DataType> {
  code: string
  data: DataType
  message: string
  status: number
}
