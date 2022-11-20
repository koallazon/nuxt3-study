<script setup lang="ts">
    const route = useRoute()
    const message = computed(() => `내 팀 이름은 ${route.params.teamSlug}이고 이름은 ${route.params.userId}`)
</script>

<template>
    <h1>{{message}}</h1>
</template>

<style scoped>

</style>