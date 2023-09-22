<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useAuth } from '@/composables/states'
import { useUserStore as useOptionUserStore } from '~/stores/user'
import { useUserStore as useSetupUserStore } from '~/stores/userSetup'

// composable
const { userInfo, isLogged, setUserInfo } = useAuth()

// Options Store
const optionUserStore = useOptionUserStore()
const { userInfo: optionUserInfo, isLogged: optionIsLogged } = storeToRefs(optionUserStore)

// Setup Store
const setupUserStore = useSetupUserStore()
const { userInfo: setupUserInfo, isLogged: setupIsLogged } = storeToRefs(setupUserStore)

const change = (type: 'composition' | 'optionStore' | 'setupStore') => {
  const data = {
    name: '홍길동',
    department: '대표부서',
  }
  switch (type) {
    case 'composition':
      setUserInfo(data)
      break
    case 'optionStore':
      optionUserStore.setUserInfo(data)
      break
    case 'setupStore':
      setupUserStore.setUserInfo(data)
      break
  }
}
</script>

<template>
  <header>
    <nav class="flex bg-gradient-to-r from-[#16c0b0] to-[#84c6fa] justify-center">
      <ul class="flex gap-x-10 p-5 min-w-[1280px]">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li><RouterLink to="/count">Count</RouterLink></li>
        <li><RouterLink to="/movies/">Movies</RouterLink></li>
        <li><RouterLink to="/movies/mable">Mable Movies</RouterLink></li>
        <li><RouterLink to="/about" replace prefetch>About</RouterLink></li>
      </ul>
    </nav>
  </header>
  <main>
    <div class="p-10">
      <section class="py-3">
        <h2 class="mb-3">Composables 전역 상태</h2>
        <p class="w-full border p-5 bg-slate-300">로그인 {{ isLogged ? 'On' : 'Off' }}</p>
        <div v-if="userInfo !== null" class="w-full border p-5 bg-slate-300">
          <ul>
            <li>이름 : {{ userInfo.name }}</li>
            <li>부서 : {{ userInfo.department }}</li>
          </ul>
          <button type="button" @click="change('composition')">변경</button>
        </div>
      </section>
      <section class="py-3">
        <h2 class="mb-3">Pinia Option</h2>
        <p class="w-full h-[60px] border p-5 bg-slate-300">
          로그인 {{ optionIsLogged ? 'On' : 'Off' }}
        </p>
        <div v-if="optionUserInfo !== null" class="w-full border p-5 bg-slate-300">
          <ul>
            <li>이름 : {{ optionUserInfo.name }}</li>
            <li>부서 : {{ optionUserInfo.department }}</li>
          </ul>
          <button type="button" @click="change('optionStore')">변경</button>
        </div>
      </section>
      <section class="py-3">
        <h2 class="mb-3">Pinia Setup</h2>
        <p class="w-full h-[60px] border p-5 bg-slate-300">
          로그인 {{ setupIsLogged ? 'On' : 'Off' }}
        </p>
        <div v-if="setupUserInfo !== null" class="w-full border p-5 bg-slate-300">
          <ul>
            <li>이름 : {{ setupUserInfo.name }}</li>
            <li>부서 : {{ setupUserInfo.department }}</li>
            <button type="button" @click="change('setupStore')">변경</button>
          </ul>
        </div>
      </section>
    </div>
    <slot />
  </main>
</template>

<style scoped></style>
