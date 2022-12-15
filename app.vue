<script lang="ts" setup>
// import { showError } from '#app'
const layouts = ['default', 'custom']
const curLayout = ref('default')
const route = useRoute()

useHead({
  // script: [{ hid: 'awesome', src: 'https://awesome-lib.js', body: true }],
  // title: route.meta.title || '',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title'
  },
})

// route가 변경될 때마다 document.title을 변경해준다.
// watch(
//   route,
//   () => {
//     useHead({
//       title: route.meta.title,
//     })
//   },
//   {
//     immediate: true,
//   }
// )
const { data, error, pending } = await useFetch('/api/movieSearch', {
  method: 'get',
  query: {
    query: 1,
  },
})
console.log('data', !!data.value, process.server, process.client)
if (!!data.value) {
  // throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
  // showError({ statusCode: 500, statusMessage: 'Page Not Found', stack: '2' })
  // showError(new Error('에러지롱'))
}

const counter = useCounter()
const name = useName()
const { num, increment } = useNumber()
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
    <button class="n-link-base" @click="showError">Trigger fatal error</button>
    <div>{{ counter }}</div>
    {{ name }}
    <button type="button" @click="name = 'koalla'">이름 바꾸자</button>
    <div>
      num: {{ num }}
      <button type="button" @click="increment">+</button>
    </div>
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
