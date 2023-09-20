<script lang="ts" setup>
import { useHead } from '#imports'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title'
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.btn-area {
  gap: 10px;
}
.button {
  outline: none;
  background-color: #fff;
  border-radius: 4px;
  border-width: 1px;
  padding: 6px 12px;
  font-size: 1.5rem;
}
a:not(.router-link-exact-active) {
  color: #333;
  text-decoration: none;
}
a.router-link-exact-active {
  font-weight: bold;
  color: #00f;
  font-family: sans-serif;
}
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
