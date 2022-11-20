<script lang="ts" setup>
definePageMeta({
  pageTransition: true,
})
const router = useRouter()
</script>

<template>
  <h1>
    Page: Movie<br />
    {{ $route.params.id }}
  </h1>
</template>

<style scoped></style>
