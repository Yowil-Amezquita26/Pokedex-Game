<template>
  <PokemonSearch />
</template> 

<script>

import PokemonPage from './pages/PokemonPage.vue'
import PokemonSearch from './pages/PokemonSearch.vue'




export default {
  name: 'App',
  components: {
    PokemonSearch,
    PokemonPage,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
