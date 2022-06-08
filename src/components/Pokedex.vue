<template>
    <h3>Pokedex</h3>
    <div class="pokemon-container">
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
            return this.pokemonId
        }
    }

}
</script>

<style scoped>
    .pokemon-container {
    height: 250px;
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
    .hidden-pokemon {
    filter: brightness(0);
    }

</style>