<template>
  <div>
    <nav style="display: flex; gap: 10px">
      <NuxtLink to="/">Home</NuxtLink>
      <RouterLink to="/movies/">Movies</RouterLink>
      <RouterLink to="/movies/mable">Mable Movies</RouterLink>
      <RouterLink to="/about" replace prefetch>About</RouterLink>
      <NuxtLink to="https://blog.yookidz.site" no-rel>My blog</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>

<style>
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
