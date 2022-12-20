<template>
  <div>
    <h1>Custom</h1>
    <slot />
  </div>
</template>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 10rem);
  min-height: 10rem;
  margin: 0 auto 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  text-align: center;
  font-size: 3rem;
  color: green;
}
div {
  background-color: lightpink;
  padding: 50px;
  border-radius: 1.5rem;
}
</style>
