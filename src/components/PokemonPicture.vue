<template>
    <h3>Pokemon picture</h3>
    <div class="pokemon-container">
        <img v-if="!showPokemon" 
            :src="imgSrc"
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
    
    .hidden-pokemon {
        width: 15rem;
        filter: brightness(0);
    }

</style>