import pokemonApi from "../api/pokemonApi"

const getPokemonName = async (id) => {

    const pokemons = await getPokemonDetails(id)
    
    return pokemons

}
const getPokemonDetails = async (pokemon= []) =>{
    try {
        const resp = await pokemonApi.get(`/${pokemon}`)
        // console.log(resp.data.types[1] !== undefined ? resp.data.types[1].type.name : 'no tiene 2 tipos')
        const pokemonObj = [{
            id: resp.data.id, 
            name: resp.data.name, 
            picture: resp.data.sprites.front_default,
            types: resp.data.types
        }]
    
    
        // console.log(pokemonObj,pokemonObj.picture);
        return await pokemonObj
    } catch (error) {
        console.log(error);
        const pokemonObj = [{id: 1, name: 'that pokemon doesn`t exist', picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}]
    
        return await pokemonObj
    }
    
    // const name = await Promise.all(resp)
    
    // return [
    //     {name: name.data.name, id: name.data.id }
    // ]

}
export default getPokemonName