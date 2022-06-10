<template>
  <pokemon-home />
</template> 

<script>

import PokemonHome from './pages/PokemonHome.vue'

import PokemonPage from './pages/PokemonPage.vue'
import PokemonSearch from './pages/PokemonSearch.vue'




export default {
  name: 'App',
  components: {
    PokemonSearch,
    PokemonPage,
    PokemonHome,
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
