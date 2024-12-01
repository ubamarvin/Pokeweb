<script setup>

import ImageContainer from './row/ImageContainer.vue';
import StatusComponent from './row/StatusComponent.vue';
import { computed, ref , onMounted} from 'vue';
import { usePokemonStore } from '@/stores/pokeapifetcher/pokemonStore';

const pokemonStore = usePokemonStore();

function findPokemonByName(pokemonName) {
    const foundPokemon = pokemonStore.pokeData.find(pokemon => pokemon.name.toUpperCase() === pokemonName.toUpperCase());
    if (foundPokemon) {
      return foundPokemon;
    } else {
      console.log("findPk not found " + pokemonName)
      return pokemonStore.pokeData[27] || {srcFront:"https://pngimg.com/d/sprite_PNG98773.png"}
    }
  }
const data = defineProps({
    playerPokemon : {
        type: Object,
        required: false,
    },
    opponentPokemon : {
      type: Object,
      required: false,
    }
});

const isReady = ref(false);

//Not cool at all
//wish i had the time to properly read the vue docs
// and gain an understanding instead of just fumbly
// trying out what works and what not
// Not even Chat Gippidy could tell me why
// how?
// Doesnt onMount ensure 
const pokemonSprite = computed(() => {
  console.log("computed");
  const pl = findPokemonByName(data.playerPokemon.name)
  const op = findPokemonByName(data.opponentPokemon.name) 

  return {pl, op};
})

onMounted(async()=> {
  //await pokemonStore.getPokeData();
  console.log("mounting pokeLayerss");
  isReady.value = true;
  /*
    playerMonSprite.value = findPokemonByName(data.playerPokemon.name);
    console.log(playerMonSprite.value?.srcBack)
    console.log(isReady.value);
    */
});



</script>

<template>
    <div v-if="pokemonStore.loading">
        Loading
    </div>
    <div v-else-if="isReady" class="poke-layer">
      <div class="top-row">
        <StatusComponent 
        :pokemon="data.opponentPokemon"
        class="status status-op"/>
        <div class="op-image-box">
          <ImageContainer
          class="pk-sprite"
          img-id="op-pk"
          :img-src="pokemonSprite.op.srcFront"
          />
        </div>
       
      </div>
      <div class="bot-row">
        <div class="pl-image-box">
          <ImageContainer
          class="pk-sprite"
          img-id="pl-pk"
          :img-src="pokemonSprite.pl.srcBack"
          />
        </div>
        <StatusComponent 
        :pokemon="data.playerPokemon"
        class="status status-pl"/>

      </div>
    </div>
    <div v-else>
      loading
    </div>
</template>

<style>
.status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: absolute;
    width: 40%;
    height: 40%;
    background-color: #6e6e6e;
    
}

.status-op {
    border-bottom-right-radius: 75px; /* Round bottom right corner */
    text-align: left;
}

.status-pl {
    border-top-left-radius: 75px; /* Round bottom right corner */
    right: 0;
    bottom: 10%;
    text-align: right;

}


.op-image-box,
.pl-image-box {
    position: absolute;
    width: 300px; /*else it just fucks it all up */
    animation: moveUpDown 1s ease-in-out infinite; /* Animation properties */

}

.op-image-box {
    top: 30%;
    right: 0%;
    animation-delay: 0s;
    text-align: right;
}

#op-pk {
    width: 70%;
    height: auto;
}


.pl-image-box {
    bottom: -45%;
    left: 0%; 
    animation-delay: 0.13s;
}
#pl-pk {
    width: 100%;
    height: auto;
}

</style>