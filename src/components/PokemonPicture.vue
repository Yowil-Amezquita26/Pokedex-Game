<template>
    <h3>Pokemon picture</h3>
    <div class="pokemon-container">
        <img :src='imgSrc'
            class="hidden-pokemon"
            alt="pokemon">
        <img v-if="showPokemon" 
            :src="imgSrc" 
            alt="pokemon"
            class="fade-in"> 
    </div>
</template>

<script>
export default {
    
    props:{
        pokemonId:{
            type: Number,
            required: true 

        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
            
        } 
    },
    computed: {
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemonId}.png`
        }
    }

}
</script>

<style >
    .pokemon-container {
    height: 200px;
    padding: 5%;

    }
    img {
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
    .hidden-pokemon {
    filter: brightness(0);
    }

</style>