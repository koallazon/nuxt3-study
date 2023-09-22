<script lang="ts" setup>
import { useCountStore } from '~/stores/count'

const countStore = useCountStore()

function increment() {
  countStore.increment().then((res: number) => {
    console.log(res) // 1
  })
}
</script>

<template>
  <strong>Page: about:</strong>
  <section class="p-5">
    <div>{{ countStore.count }}</div>
    <button type="button" @click="increment">증감</button>
  </section>
</template>

<style scoped></style>
