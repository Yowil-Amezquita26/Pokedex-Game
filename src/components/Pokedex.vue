<template>
    
    <div class="pokedex-container">
        <img src="@/assets/Pokemon-logo-blue.png" alt="" class="pokemon-image" > 
        <img v-if="imgSrc !== null" 
            :src="imgSrc" 
            alt= ""
            class="pokemon-image">
        <img v-else
            src="@/assets/pokeball.jpg" 
            alt="img">
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

<style >
    .pokemon-image {
        width: 15rem;
        justify-items: center;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }


</style>