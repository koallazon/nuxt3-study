<template>
  <div>
    <h1>Some default layout shared across all pages</h1>
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
}
</style>
