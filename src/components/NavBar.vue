<template>

    <div v-if="activeTab != 'PokemonHome'" class="navbar ">
            <div class="buttonNavBar">
                <a @click="activeTab = 'PokemonHome'">Home</a>
                <a @click="activeTab = 'PokemonSearch'">Pokedex</a>
                <a @click="activeTab = 'PokemonPage'">Who's that Pokemon?</a>

            </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
    height: 5.15%;
    top: 0;
    background-color: azure ;
    
    

}
.buttonNavBar{
    /* padding: 2%; */
    justify-content: center;
    display: flex;
    justify-content: baseline;
}
</style>