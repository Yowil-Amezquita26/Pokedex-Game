<template>
    <div class="logo">
        <img src="@/assets/Pokemon-logo-blue.png" alt="" > 
    </div>
     
    <div class="pokemon-container">
        <img v-if="imgSrc !== null" 
            :src="imgSrc" 
            alt= ""
            class="">
        <img v-else
            src="@/assets/pokeball.jpg" 
            alt="">
    </div>
</template>

<script>


export default {
    props:{
        pokemonId:{
            required: true

        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
            
        } 
    },
    data(){
        return{
            // pokeball: pokeBall
        }
    },
    computed: {
        imgSrc(){
            
            return this.pokemonId
        },
    }

}
</script>

<style scoped>
    .logo{
        height: 200px;
        width: fit-content;
        position: center;
        right: 40%;
    }
    img {
        height: 250px;
    position: absolute;
    
    right: 40%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    }

    .pokemon-container {
        height: 250px;
        display: flex;
        justify-content: center;
    }
</style>