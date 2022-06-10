<template>
    <h1>Which Pokemon you want to see?</h1>
    <h3>insert a Number or Text</h3>
    <input type= "text" v-model="pokemon"
            v-on:keypress="view" 
            placeholder="Search by Number">
    <div v-if="!statusPoke" >
        <img src="@/assets/Pokemon-logo-blue.png" alt="" > 
        <h2>Waiting for the search</h2>
        
    </div>
    <div  v-else class="body">
        <!-- img pokemon -->
        <Pokedex :pokemonId="returnPicture" :showPokemon="true" />
        <!-- opciones -->
        <PokemonInfo :pokemons="searchPokemon"></PokemonInfo>
    </div>
    
    <!-- <h3>{{pokemonName}}</h3> -->
    
</template> 

<script>


import getPokemonName from '@/helpers/getPokemonName'
import Pokedex from '@/components/Pokedex.vue'
import PokemonInfo from '@/components/PokemonInfo.vue'
import styles from '@/css/styles.css'


export default {
    components: { PokemonInfo, Pokedex, styles },
    data(){
        return{
            searchPokemon:[{
                type:Object,
                id: 1,
                name: '',
                picture: '',
                types: {}
            }],
            statusPoke: false,
            pokemon: '',
            pokemonName: "",
            returnPicture: ""
        }
    },
    methods:{
        async view(event){
            if(event.key == "Enter"){
                // console.log(this.pokemon.toLowerCase(), "hi world");
                this.searchPokemon = await getPokemonName( this.pokemon.toString().toLowerCase())
                // console.log(this.searchPokemon,"hi");
                this.pokemonName = this.searchPokemon[0].name
                this.returnPicture = this.searchPokemon[0].picture
                // if(this.returnPicture == null){
                //     console.log("need asset");
                //     this.returnPicture = "@/assetes/pokeball.jpg"
                // }
                this.statusPoke = true
            //    console.log(this.searchPokemon[0].types);
            //    this.pokemonName =await (await pokemonApi.get(`/${this.pokemon}`)).data
            //     console.log(pokemonName);
                this.pokemon = null

            }
        }
    }
}
</script>
