<script lang="ts" setup>
import { useAuth } from '#imports'
import { useUserByOptionsStore } from '~/stores/userByOptions'
import { useUserBySetupStore } from '~/stores/userBySetup'

// composable
const { userInfo, isLogged } = useAuth()
console.log('🚀 ~ file: default.vue:9 ~ userInfo, isLogged:', userInfo, isLogged)

onMounted(() => {
  console.log('🚀 ~ file: default.vue:9 ~ mounted', userInfo, isLogged)
})

// Options Store
const { userInfo: userInfoFromOptions, isLogged: isLoggedFromOptions } = useUserByOptionsStore()

// Setup Store
const { userInfo: userInfoFromSetup, isLogged: isLoggedFromSetup } = useUserBySetupStore()
</script>

<template>
  <header>
    <nav class="flex bg-gradient-to-r from-[#16c0b0] to-[#84c6fa] justify-center">
      <ul class="flex gap-x-10 p-5 min-w-[1280px]">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li><RouterLink to="/movies/">Movies</RouterLink></li>
        <li><RouterLink to="/movies/mable">Mable Movies</RouterLink></li>
        <li><RouterLink to="/about" replace prefetch>About</RouterLink></li>
        <li><NuxtLink to="https://blog.yookidz.site" no-rel>My blog</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <main>
    <div class="p-10">
      <section class="mb-10">
        <h2 class="mb-3">Composables 전역 상태</h2>
        <p class="w-full border p-5 bg-slate-300">로그인 {{ isLogged ? 'On' : 'Off' }}</p>
        <div v-if="userInfo !== null" class="w-full border p-5 bg-slate-300">
          <ul>
            <li>이름 : {{ userInfo.name }}</li>
            <li>부서 : {{ userInfo.department }}</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 class="mb-3">Pinia Option</h2>
        <p class="w-full h-10 border p-5 bg-slate-300"></p>
      </section>
      <section>
        <h2 class="mb-3">Pinia Option</h2>
        <p class="w-full h-10 border p-5 bg-slate-300"></p>
      </section>
    </div>
    <slot />
  </main>
</template>

<style scoped></style>
