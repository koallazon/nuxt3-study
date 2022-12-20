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
function triggerError() {
  throw new Error('manually triggered error')
}
</script>

<template>
  <section>
    <div>Page: Home Page</div>
    <dl class="p-5">
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
      <button @click="triggerError">에러 유발</button>
    </dl>
  </section>
</template>

<style scoped>
section {
  background-color: lightblue;
  padding: 50px;
  border-radius: 10px;
  margin: 1.5rem auto;
}
</style>
