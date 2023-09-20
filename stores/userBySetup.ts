import { defineStore } from 'pinia'
import { ref, computed } from '#imports'

interface UserInfo {
  name: string
  department: string
}

export const useUserBySetupStore = defineStore('UserBySetup', () => {
  // state
  const userInfo = ref<UserInfo | null>(null)

  // getters
  const isLogged = computed(() => !!userInfo.value)

  // actions
  const setUserInfo = (data: UserInfo) => {
    userInfo.value = data
  }

  return {
    userInfo: readonly(userInfo),
    isLogged,
    setUserInfo,
  }
})
