export const formatNumberWithCommas = (
  input: string | number,
  comma?: string
) => {
  if (!input) return
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, comma || '.')
}

export const getFullAddress = ({
  address,
  ward,
  district,
  province,
}: {
  address: string
  ward: string
  district: string
  province: string
}): string => {
  return [
    address ? address.trim() : '',
    ward ? ward.trim() : '',
    district ? district.trim() : '',
    province ? province.trim() : '',
  ]
    .join(', ')
    .trim()
}
