<template >
    <div class="bodyHome">
        
        <div v-if="activeTab != 'PokemonHome'" class="navbar">
            <div class="navBarContainer">
                <img src="@/assets/pngwing.com.png" class="pokeLogo" alt="">

                <button class="buttonNavbar" @click="activeTab = 'PokemonHome'">Home</button>
                <button class="buttonNavbar" @click="activeTab = 'PokemonSearch'">Pokedex</button>
                <button class="buttonNavbar" @click="activeTab = 'PokemonPage'">Who's that Pokemon?</button>

            </div>
        </div>
        <div v-if="activeTab == 'PokemonHome'" >
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
    </div>
  
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
}
</script>

<style >
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

.home-container {
    height: 200px;
    display: flex;
    justify-content: center;
    
}
.navbar{
    top: 0;
    background-color:#2A4280;
    
}


.buttonNavbar{
    border: none;
    padding: 0.2;
    display: inline-block;
    position: relative;
    text-decoration: none;
    background-color: #EAEAED;
    font-size: 18px;
}
.buttonNavbar:hover {
  background-color: #2CB3D9; 
  color: white;
}
.bodyHome{
    background-image: url('@/assets/background.png') ; 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 100vw;
    height:100vh;
    display: flex;
    flex-direction: column;
    margin: 0;

    position: absolute;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  
}
    

</style>