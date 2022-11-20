export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig()
  const { query } = getQuery(event)
  return $fetch(
    `${runtimeConfig.public.apiBaseUrl}?i=tt3896198&apikey=${runtimeConfig.apiKey}&s=${query}`
  )
})
