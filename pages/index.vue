<script lang="ts" setup>
import { definePageMeta, useHead } from '#imports'
definePageMeta({
  title: 'Home Page',
})

useHead({
  titleTemplate: '%s - Site Home index',
})
</script>

<template>
  <section>
    <div>Page: Home Page</div>
  </section>
</template>

<style scoped>
section {
  background-color: lightblue;
  padding: 50px;
  border-radius: 10px;
  margin: 1.5rem auto;
}
</style>
