export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig()
  const { query } = getQuery(event)
  return $fetch(
    `${runtimeConfig.public.apiBaseUrl}?apikey=${runtimeConfig.apiKey}&s=${query}`
  )
})
