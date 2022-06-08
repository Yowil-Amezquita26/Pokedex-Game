<template>
    <h1>Which Pokemon you want to see?</h1>
    <h3>insert a Number or Text</h3>
    <input type= "text" v-model="pokemon"
            v-on:keypress="view" 
            placeholder="Search by Number">
    <div v-if="statusPoke" class="body">
        <!-- img pokemon -->
        <Pokedex :pokemonId="returnPicture" :showPokemon="true" />
        <!-- opciones -->
        <PokemonInfo :pokemons="searchPokemon"></PokemonInfo>
    </div>
    <div v-else>
        <h1>Waiting for the search</h1>
    </div>
    <!-- <h3>{{pokemonName}}</h3> -->
    
</template> 

<script>


import getPokemonName from '@/helpers/getPokemonName'
import Pokedex from '@/components/Pokedex.vue'
import PokemonInfo from '@/components/PokemonInfo.vue'




export default {
    components: { PokemonInfo, Pokedex, PokemonInfo },
    data(){
        return{
            searchPokemon:{
                type:Array,
                id: 1,
                name: '',
                picture: '',
                types: {}
            },
            statusPoke: false,
            pokemon: null,
            pokemonName: "bulbasaur",
            returnPicture: null
        }
    },
    methods:{
        async view(event){
            if(event.key == "Enter"){
            //    this.searchPokemon = await getPokemonName(this.pokemon)
               this.searchPokemon = await getPokemonName(this.pokemon)
               console.log(this.searchPokemon.name);
               this.pokemonName = this.searchPokemon[0].name
               this.returnPicture = this.searchPokemon[0].picture
               this.statusPoke = true

            //    console.log(this.pokemon);
            //    this.pokemonName =await (await pokemonApi.get(`/${this.pokemon}`)).data
            //     console.log(pokemonName);
                this.pokemon = null

            }
        }
    }
}
</script>