import type { EFileType } from '@/constants'
import { MaxFile } from '@/constants'

export const formatFileNameBeforeUpload = (input: string): string => {
  if (!input) return ''
  return input.split(' ').join('').split(',').join('')
}

export const validateFileType = (file: File, type: EFileType): boolean => {
  if (!file) return false
  const fileType = file.type.indexOf(type)
  return fileType !== -1
}

export const validateFileSize = (
  file: File,
  size: number = MaxFile
): boolean => {
  if (!file) return false
  const fileSize = file.size
  return fileSize < size
}

export const exportFileExcel = (file: Blob, name: string) => {
  const link = document.createElement('a')
  const url = URL.createObjectURL(file)
  link.setAttribute('href', url)
  link.setAttribute('download', `${name}.xlsx`)
  link.click()
}
