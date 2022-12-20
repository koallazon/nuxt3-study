<script lang="ts" setup>
const layouts = ['default', 'custom']
const curLayout = ref('default')
const route = useRoute()

useHead({
  // script: [{ hid: 'awesome', src: 'https://awesome-lib.js', body: true }],
  // title: route.meta.title || '',
  titleTemplate: (titleChunk) => {
    console.log('🚀 ~ file: app.vue:14 ~ titleChunk', titleChunk)
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

onMounted(() => {
  // $(function () {
  //   console.log($('nav'))
  // })
})
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
  transform: rotate3d(1, 1, 1)
}
.layout-enter-active,
.layout-leave-active {
  transition: all .4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}

</style>
