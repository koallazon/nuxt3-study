<script lang="ts" setup>
interface MovieItem {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

const hasIssue = ref(false)

const fixIssue = (error: any) => {
  hasIssue.value = false
  error.value = null
}

const query = ref('')
const movies = ref<MovieItem[]>([])
const search = async () => {
  try {
    const { data, error, pending } = await useFetch('/api/movieSearch', {
      method: 'get',
      query: {
        query: query.value,
      },
    })
    throw new Error('에러지롱')
    movies.value = data.value?.Search ?? []
  } catch (err) {
    hasIssue.value = true
    console.error(err)
  }
}
</script>

<template>
  <form @submit.prevent="search">
    <input type="text" v-model="query" />
    <button>Search</button>
  </form>
  <NuxtErrorBoundary>
    <throw-error v-if="hasIssue" />
    <div v-else>
      <ul>
        <li v-for="movie in movies" :key="movie.imdbID">
          <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
            <img :src="movie.Poster" :alt="movie.Title" />
          </NuxtLink>
        </li>
      </ul>
    </div>

    <template #error="{ error }">
      Component failed to Render -_-
      <button @click="fixIssue(error)">(fix the issue)</button>
    </template>
  </NuxtErrorBoundary>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
}
li {
  list-style: none;
  width: calc(20% - 20px);
  font-size: 20rem;
  text-align: center;
  color: brown;
}
img,
li > a {
  width: 100%;
}
</style>
