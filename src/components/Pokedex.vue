<template>
    <div class="logo">
        <img src="@/assets/Pokemon-logo-blue.png" alt="" > 
    </div>
     
    <div class="pokemon-container">
        <img v-if="showPokemon" 
            :src="imgSrc" 
            alt="pokemon"
            class="">
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
    width: fit-content;
    }
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

</style>