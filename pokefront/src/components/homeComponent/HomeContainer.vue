<script setup>
//import ImageContainer from './ImageContainer/ImageContainer.vue';
/**
 * At this point, usePokemonStore.fetchAllPokemons is already called
 */
//import { usePokemonStore } from '@/stores/pokeapifetcher/pokemonStore';
//const pokemonStore = usePokemonStore();
</script>
<template>
  <div class="Home-Container">
    <div>
      <p>Welcome to the Pokebattle Simulator</p>
      <p>The goal of the game is to beat the opponents Pokemon</p>
      <p>At first you will be prompted to choose a Pokemon</p>
      <p>Then the battle Starts!</p>
      <p>Each round you can choose either to attack, switch out, or use an Item</p>
      <p>Below you can see one of those Pokemons</p>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png">
      <p>Select the Gui to Start the game, have fun!</p>
    </div>
  </div>
    
</template>
<style>

@media (min-width: 322px) and (max-width: 576px){
  .Home-Container {
    width: 100vw !important;
    height: 90vh !important;
    border-radius: 0px !important;
    padding: 5px !important;
}
  
}



/* Mobile (landscape) - Small devices  */
@media (min-width: 577px) and (max-width: 767px) {
  .Home-Container {
    width: 100vw !important;
    height: 90vh !important;
    border-radius: 0px !important;
    padding: 5px !important;
}
}

/* Tablets*/
@media (min-width: 768px) and (max-width: 991px) {
  .Home-Container {
    width: 100vw !important;
    height: 90vh !important;
    border-radius: 0px !important;
    padding: 5px !important;
}
.poke-image-container div {
  width: 250px !important;
  height: auto !important;
  margin-left: 0px !important;
}

.about {
  width: 75vw !important;
  height: 50vh !important;
}
}
/* Tablets Landscape */
@media (min-width: 991px) and (max-width: 1024px) {
  .Home-Container {
    width: 100vw !important;
    height: 90vh !important;
    border-radius: 0px !important;
    padding: 5px !important;
}
.poke-image-container div {
  width: 250px !important;
  height: auto !important;
  margin-left: 0px !important;
}

.about {
  width: 75vw !important;
  height: 50vh !important;
}
}



.Home-Container {
    padding: 10px;
    background-color: rgb(0,0,0);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);
    color: white;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; /* Center text inside */

    width: 75vw;
    height: 90vh;
    border-radius: 10px;
    

    width: 100%;
    
}

/*overall styles */

</style>