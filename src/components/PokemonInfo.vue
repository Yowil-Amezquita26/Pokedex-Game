import getPokemonName from '@/helpers/getPokemonName';
<template>
  <div class="title">
    <h3>Pokemon Details</h3>
  </div>
  
  <div v-for="poke in pokemons" :key="poke" class="options-container">
      <h2>{{poke.name}}</h2>
  </div>
</template>

<script>
export default {
  props:['pokemons'],
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}
title{
  margin:auto;
  text-align: center;
}
li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
    text-align: center;
    
}


</style>