import { defineStore } from 'pinia'

interface UserInfo {
  name: string
  department: string
}

interface State {
  userInfo: UserInfo | null
}

export const useUserStore = defineStore('optionUser', {
  state: (): State => ({
    userInfo: null,
  }),
  getters: {
    isLogged: (state) => !!state.userInfo,
  },
  actions: {
    setUserInfo(data: UserInfo) {
      this.userInfo = data
    },
  },
})
