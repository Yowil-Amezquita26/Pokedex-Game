<template>
  
  <h3>Pokemon options</h3>
  <div class="options-container">
    <ul>
      <li class="option-button" v-for="pokemon in pokemons" 
          :key="pokemon.id"
          @click="$emit( 'selectionPokemon', pokemon.id )">
          {{pokemon.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ['selectionPokemon'],
  props:{
    pokemons:{
      type:Array,
      required: true

    }
  }
 
}
</script>

<style scoped>
ul {
  justify-items: center;
    list-style-type: none;
}
.option-button {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 200px;
}

.option-button:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    height: 200px;
    display: flex;
    justify-content: center;
    
}


</style>