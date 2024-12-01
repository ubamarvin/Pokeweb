<script setup>
import ImageContainer from '../../homeComponent/ImageContainer/ImageContainer.vue';
import { usePokemonStore } from '@/stores/pokeapifetcher/pokemonStore';
import jsonManipulator from "@/util/jsonManipulator.js";
import {defineProps, ref, onMounted} from "vue";
const data = defineProps({
    gameData : {
        type: Object,
        required: true
    }
});
const availablePokemons = ref([]);
const pickedPokemons = ref([]);
const pokemonStore = usePokemonStore();
onMounted(() => {


    availablePokemons.value = data.gameData.state.pokedex.pokedex.available_pokemon;
    pickedPokemons.value = data.gameData.state.player.pokemons;
});


function findPokemonByName(pokemonName) {
  const foundPokemon = pokemonStore.pokeData.find(pokemon => pokemon.name.toUpperCase() === pokemonName.toUpperCase());
  if (foundPokemon) {
    return foundPokemon;
  } else {
    console.log("findPk not found " + pokemonName)
    return pokemonStore.pokeData[0];
  }
}


function selectPokemonClick(pokemon) {
    jsonManipulator.manipulateJson(data.gameData, pokemon.name)
}


</script>
<template>
    <div v-if="pokemonStore.loading">
        loading...
    </div>
    <div v-else class ="pick-container">

        <h3>Pick your Pokemon</h3>
        <div class="pick-available">
            <ImageContainer
            v-for="(pokemon, index) in availablePokemons" 
            :key="index"
            :src="findPokemonByName(pokemon.name).srcFront"
            @click="selectPokemonClick(pokemon)"
            />
        </div>
        <h3>Your Team!</h3>
        <div class="pick-picked">
            <ImageContainer
            v-for="(pokemon, index) in pickedPokemons" 
            :key="index"
            :src="findPokemonByName(pokemon.name).srcFront"
            />
        </div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace; /* Monospace font for terminal look */

}
h3 {

    color: white;
}
.gui-container{
    display: grid;
    grid-template-rows: 3fr 1fr;
}
.available-container {
    grid-row: 1;
    display: flex;
    flex-direction: column;
}
.pick-available {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15%, 1fr)); /* Automatically adjusts columns based on container width */
    grid-auto-rows: minmax(25px, auto); /* Automatic row sizing */
    grid-auto-flow: dense; 
}

.pick-picked {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15%, 1fr)); /* Automatically adjusts columns based on container width */
    grid-auto-rows: minmax(25px, auto); /* Automatic row sizing */
    grid-auto-flow: dense;
}
.pick-poke-img {
    transition: transform 0.3s ease; 
}
.pick-poke:hover .pick-poke-img {
    transform: scale(1.7); 
}
</style>