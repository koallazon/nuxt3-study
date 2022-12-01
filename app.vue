<script lang="ts" setup>
const layouts = ['default', 'custom']
const curLayout = ref('default')
</script>

<template>
  <NuxtLayout>
    <!-- :name="curLayout" -->
    <nav style="display: flex; gap: 10px">
      <NuxtLink to="/">Home</NuxtLink>
      <RouterLink to="/movies/">Movies</RouterLink>
      <RouterLink to="/movies/mable">Mable Movies</RouterLink>
      <RouterLink to="/about" replace prefetch>About</RouterLink>
      <NuxtLink to="https://blog.yookidz.site" no-rel>My blog</NuxtLink>
    </nav>
    <NuxtPage />
    <div class="btn-area">
      <button
        v-for="(layout, i) in layouts"
        class="button"
        type="button"
        @click="curLayout = layout"
      >
        {{ layout.toUpperCase() }}
      </button>
    </div>
  </NuxtLayout>
</template>

<style>
.btn-area {
  display: flex;
  padding: 10px;
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
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
