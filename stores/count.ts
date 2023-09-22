export const useCountStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async increment(): Promise<number> {
      this.count++
      return this.count
    },
  },
})
