import dayjs from 'dayjs'
import { VI_DATE_FORMAT, VI_DATE_TIME_FORMAT } from '@/constants'

export const formatViDate = (time: string | null) => {
  if (!time) return ''
  return dayjs(time).format(VI_DATE_FORMAT)
}

export const formatViDateTime = (time: string | null) => {
  if (!time) return ''
  return dayjs(time).format(VI_DATE_TIME_FORMAT)
}

export const formatViDateElementPlus = (time: string | null) => {
  if (!time) return ''
  return dayjs(time, VI_DATE_FORMAT).format('MM/DD/YYYY')
}
