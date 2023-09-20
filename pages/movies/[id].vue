<script lang="ts" setup>
// definePageMeta({
//   pageTransition: true,
// })
definePageMeta({
  layout: 'custom',
})
const detail = ref<any>(null)
const route = useRoute()

const { data, error } = await useFetch('/api/movieInfo', {
  method: 'GET',
  params: {
    id: route.params.id,
  },
  pick: ['Plot', 'Title', 'Error'],
  key: `/movies/${route.params.id}`,
})

if (error.value) {
  showError({ statusCode: 500, statusMessage: 'Oh noes!' })
}

if (data.value) {
  detail.value = data.value
}

if (data.value.Error === 'Incurrect IMDb ID.') {
  showError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

onMounted(() => {
  setTimeout(() => {
    test.value = true
  }, 3000)
})
</script>

<template>
  <h1>
    Page: Movie<br />
    {{ $route.params.id }}
  </h1>
  <section v-if="detail">
    <p>{{ detail }}</p>
  </section>
</template>

<style scoped></style>
