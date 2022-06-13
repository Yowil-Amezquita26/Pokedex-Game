<template >
<body>
    
    <button @click="activeTab = 'PokemonHome'">Home</button>
    <button @click="activeTab = 'PokemonSearch'">Pokedex</button>
    <button @click="activeTab = 'PokemonPage'">Who's that Pokemon?</button>
    <div v-if="activeTab == 'PokemonHome'">
        <h1>Welcome new Pokemon Trainer Student</h1>
        <div class="home-container">
            <ul>
                <li @click="activeTab = 'PokemonSearch'">pokedex</li>
                <li @click="activeTab = 'PokemonPage'">Who`s that Pokemon?</li>
            </ul>
        </div>
    </div>
    <component :is="activeTab"></component>
    <!-- <pokemon-search v-if="activeTab == 'pokedex'"/>
    <pokemon-page v-if="activeTab == 'pokemonGame'"/> -->
</body>
  
</template>

<script>
import PokemonPage from './PokemonPage.vue'
import PokemonSearch from './PokemonSearch.vue'

export default {
  components: { PokemonSearch, PokemonPage },
  props:{
        activeTab:{
            type: String,
            default: 'PokemonHome'}},
  data() {
      return {
          
      }
  },
    

}
</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(255, 27, 2, 0.05);
}
img{
    height: 250px;
    position: absolute;
    right: 40%;
    justify-items: center;

    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.home-container {
    height: 200px;
    display: flex;
    justify-content: center;
}
body{
  background-image: url('@/assets/background.png') ; 
  width: auto;
  height: auto;
  padding: 25%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  
}
    

</style>