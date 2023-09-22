<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCountStore as useOptionStore } from '@/stores/count'
import { useCountStore as useSetupStore } from '@/stores/countSetup'

const optionStore = useOptionStore()
const { count: optionCount, doubleCount: optionDoubleCount } = storeToRefs(optionStore)

const setupStore = useSetupStore()
const { count: setupCount, doubleCount: setupDoubleCount } = storeToRefs(setupStore)
</script>

<template>
  <div class="container">
    <h1>Count</h1>
    <div>
      <ul>
        <li>count: {{ optionCount }}</li>
        <li>doubleCount: {{ optionDoubleCount }}</li>
      </ul>
      <button type="button" @click="optionStore.increment">증감</button>
    </div>
    <hr />
    <div>
      <ul>
        <li>count: {{ setupCount }}</li>
        <li>doubleCount: {{ setupDoubleCount }}</li>
      </ul>
      <button type="button" @click="setupStore.increment">증감</button>
    </div>
  </div>
</template>

<style scoped></style>
