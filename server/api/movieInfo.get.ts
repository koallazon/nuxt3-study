export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig()
  const { id } = getQuery(event)
  return $fetch(
    `${runtimeConfig.public.apiBaseUrl}?apikey=${runtimeConfig.apiKey}&i=${id}`
  )
})
