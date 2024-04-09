import { defineStore } from 'pinia'
import type { IUserInfo } from '@/types/user'

interface State {
  userInfo: IUserInfo | null
}
export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      userInfo: null,
    }
  },
})
