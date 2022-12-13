export const useCounter = () => useState<number>('counter', () => 100)
export const useSameCounter = () => useState<number>('counter', () => 5)
