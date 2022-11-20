<script lang="ts" setup>
interface MovieItem {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
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
    movies.value = data.value?.Search ?? []
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <form @submit.prevent="search">
    <input type="text" v-model="query" />
    <button>Search</button>
  </form>
  <ul>
    <li v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
        <img :src="movie.Poster" :alt="movie.Title" />
      </NuxtLink>
    </li>
  </ul>
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
