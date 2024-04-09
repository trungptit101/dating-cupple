import { ref } from 'vue'
import type { Ref } from 'vue'
import type { ILocationItem } from '@/types/location'
import LocationService from '@/services/LocationService'
import { S001 } from '@/constants'

export type UseLocationType = {
  listProvinces: Ref<ILocationItem[]>
  listDistricts: Ref<ILocationItem[]>
  listWards: Ref<ILocationItem[]>
  getListProvinces: () => Promise<void>
  getListDistricts: (id: number) => Promise<void>
  getListWards: (id: number) => Promise<void>
  changeProvinceId: (id?: number) => void
  changeDistrictId: (id?: number) => void
}

export default function useLocation(): UseLocationType {
  const listProvinces = ref<ILocationItem[]>([])
  const listDistricts = ref<ILocationItem[]>([])
  const listWards = ref<ILocationItem[]>([])

  const getListProvinces = async () => {
    const { code, data } = await LocationService.getLocation({
      type: 1,
      parentId: 0,
    })
    if (code === S001) {
      listProvinces.value = data
    }
  }
  const getListDistricts = async (parentId: number) => {
    const { code, data } = await LocationService.getLocation({
      type: 2,
      parentId,
    })
    if (code === S001) {
      listDistricts.value = data
    }
  }
  const getListWards = async (parentId: number) => {
    const { code, data } = await LocationService.getLocation({
      type: 3,
      parentId,
    })
    if (code === S001) {
      listWards.value = data
    }
  }
  const changeProvinceId = async (id?: number | null) => {
    listDistricts.value = []
    listWards.value = []
    if (id) {
      await getListDistricts(id)
    }
  }
  const changeDistrictId = async (id?: number | null) => {
    listWards.value = []
    if (id) {
      await getListWards(id)
    }
  }
  return {
    listProvinces,
    listDistricts,
    listWards,
    getListProvinces,
    getListDistricts,
    getListWards,
    changeProvinceId,
    changeDistrictId,
  }
}
