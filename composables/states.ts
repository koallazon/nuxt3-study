import { reactive, computed } from '#imports'

interface UserInfo {
  name: string
  department: string
}

interface State {
  userInfo: UserInfo | null
}

// data
export const state = reactive<State>({
  userInfo: null,
})

export const useAuth = () => {
  // computed
  const userInfo = computed(() => state.userInfo)
  const isLogged = computed(() => !!state.userInfo)

  // methods
  function setUserInfo(data: UserInfo): void {
    state.userInfo = data
  }

  return {
    userInfo,
    isLogged,
    setUserInfo,
  }
}
