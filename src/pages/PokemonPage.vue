<template>
    <h1 v-if="!pokemon"> Wait a moment...</h1>
    <div v-if="pokemon">
        <h1>Who's that Pokemon?</h1>
        <!-- img pokemon -->
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <!-- opciones -->
        <PokemonOptions :pokemons="pokemonArr"
                        @selectionPokemon="checkAnswer($event)" 
                        />
        <div v-if="showPokemon">
            <h2 class="fade-in">{{selected}}</h2>
            <button @click="newGame()">New Game</button>
        </div>
        
    </div>
</template>

<script>

import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue' 
import getPokemonOptions from'@/helpers/getPokemonOptions'


export default {
    components: { PokemonOptions, PokemonPicture },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            emits:['selection'],
            selected: 'Want to give it a try?'
        }
    },
    methods: {
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()
            const rndInt = Math.floor(Math.random() * 4)
            // console.log(rndInt)
            this.pokemon = this.pokemonArr[rndInt]
            console.log(this.pokemon.id)
        },
        checkAnswer(selected) {  
            this.showPokemon = true
            if(this.pokemon.id == selected){
                this.selected = `It's ${this.pokemon.name} ,Nice you got it !!`
            }else{
                this.selected = `Oh well, nice try, that's ${this.pokemon.name}`
            }
        },
        async newGame(){
            this.showPokemon = false
            this.showPokemon = false
            this.pokemonArr = []
            this.pokemon = null
            await this.mixPokemonArray()
        }
    }, 
    mounted() {
        this.mixPokemonArray()
    }
}
</script>
