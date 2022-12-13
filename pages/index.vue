<script lang="ts" setup>
definePageMeta({
  title: 'Home Page',
})
useHead({
  titleTemplate: '%s - Site Home index',
})
const counter = useCounter()
const counter1 = useSameCounter()
const name = useName()
const { num, increment } = useNumber()
const useDoctor = useState('doctor', 'doctor')
const useSameDoctor = useState('doctor', () => 'Same doctor')
</script>

<template>
  <div>Page: Home Page</div>
  <dl>
    <dt>counter: {{ counter }}</dt>
    <dd>
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </dd>
    <dt>counter1: {{ counter1 }}</dt>
    <dd>
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </dd>
    <dd>
      {{ name }}
      <button type="button" @click="name = 'koalla'">이름 바꾸자</button>
    </dd>
    <dd>
      index의 num : {{ num }}
      <button type="button" @click="increment">+</button>
    </dd>
    <dd>
      {{ useDoctor }}
      {{ useSameDoctor }}
    </dd>
  </dl>
</template>

<style scoped></style>
