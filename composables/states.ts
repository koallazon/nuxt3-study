export const useName = () => ref('ltg')

const number = ref<number>(0)
export const useNumber = () => {
  const increment = () => number.value++

  return {
    num: readonly(number),
    increment,
  }
}
