import { reactive, computed } from '#imports'

interface UserInfo {
  name: string
  department: string
}

interface State {
  userInfo: UserInfo | null
}

// data
const state = reactive<State>({
  userInfo: null,
})

export function useAuth() {
  // computed
  const isLogged = computed(() => !!state.userInfo)

  // methods
  function setUserInfo(data: UserInfo): void {
    state.userInfo = data
  }

  return {
    userInfo: readonly(state.userInfo),
    isLogged,
    setUserInfo,
  }
}
