<script setup>

import ImageContainer from './row/ImageContainer.vue';
import StatusComponent from './row/StatusComponent.vue';
import { ref , defineProps, onMounted} from 'vue';
import { usePokemonStore } from '@/stores/pokeapifetcher/pokemonStore';

const pokemonStore = usePokemonStore();

function findPokemonByName(pokemonName) {
    const foundPokemon = pokemonStore.pokeData.find(pokemon => pokemon.name.toUpperCase() === pokemonName.toUpperCase());
    if (foundPokemon) {
      return foundPokemon;
    } else {
      console.log("findPk not found " + pokemonName)
      return pokemonStore.pokeData[0];
    }
  }
const data = defineProps({
    playerPokemon : {
        type: Object,
        required: true,
    },
    opponentPokemon : {
        type: Object,
        required: true,
    },
});

const playerMonSprite = ref(null);
const oppMonSprite = ref(null);



onMounted(()=> {
    console.log("mountin")
    playerMonSprite.value = findPokemonByName(data.playerPokemon.name);
    oppMonSprite.value = findPokemonByName(data.opponentPokemon.name);

})



</script>

<template>
    <div v-if="pokemonStore.loading">
        Loading
    </div>

    <div v-else class="poke-layer">
        <div class="top-row">
            <StatusComponent 
            class="status status-op"  
            :pokemon = "data.opponentPokemon"
            /> 
            <ImageContainer 
            class="op-image-box" 
            img-id="op-pk"
            :img-src = "oppMonSprite.value.srcFront"
            />
        </div>
        <div class="bot-row">
            <ImageContainer 
            class="pl-image-box" 
            img-id="pl-pk"
            :img-src="playerMonSprite.value.srcBack"
            />
            <StatusComponent
            class="status status-pl"
            :status="data.playerPokemon"/> 
        </div>
    </div>
</template>