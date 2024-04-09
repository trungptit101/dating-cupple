import { ElNotification } from 'element-plus'
// import { ArrayErrors } from '@/constants'

export const notifyServerError = () => {
  return ElNotification({
    title: 'Hệ thống đang nâng cấp',
    message: 'Vui lòng thử lại sau',
    type: 'error',
  })
}
type ArgType = {
  title?: string
  message?: string
  type?: 'success' | 'error' | 'info' | 'warning'
  dangerouslyUseHTMLString?: boolean
  duration?: number
}

interface ArgTypeCode extends ArgType {
  code: string
}

// const findMessageByCode = (code: string) => {
//     if (!code) return
//     return (
//         ArrayErrors.find((item) => item.code === code)?.vi ||
//         'Có lỗi xảy ra, vui lòng thử lại'
//     )
// }
export const notify = ({
  title,
  message,
  type,
  dangerouslyUseHTMLString,
  code,
}: ArgTypeCode) => {
  ElNotification.closeAll()
  return ElNotification({
    title,
    message: code === 'S001' || code === '200' ? message : message,
    type: code === 'S001' || code === '200' ? 'success' : type || 'error',
    position: 'bottom-right',
    dangerouslyUseHTMLString: dangerouslyUseHTMLString || false,
  })
}
export const notifyEl = ({
  title,
  message,
  type,
  dangerouslyUseHTMLString,
  duration,
}: ArgType) => {
  ElNotification.closeAll()
  return ElNotification({
    title,
    message,
    type: type || 'info',
    position: 'bottom-right',
    dangerouslyUseHTMLString: dangerouslyUseHTMLString || false,
    duration,
  })
}
