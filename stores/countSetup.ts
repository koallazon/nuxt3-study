export const useCountStore = defineStore('setupCounter', () => {
  // state
  const count = ref<number>(0)

  // getters
  const doubleCount = computed<number>(() => count.value * 2)

  // actions
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
