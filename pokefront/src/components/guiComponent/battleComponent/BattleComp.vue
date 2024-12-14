<script setup>
import InfoLayer from './infoLayer/InfoLayer.vue';
import PokeLayerss from './pokemonlayer/PokeLayerss.vue'
import { ref , defineProps, onMounted} from 'vue';
//import {findPokemonByName} from '@util/MapPokeToImg.hs'

const data = defineProps({
    gameData : {
        type: Object,
        required: true
    }
});
// reactive for rerender
const playerPokemon = ref(null);
//const playerPokemonSprite = ref(null); 
const opponentPokemon = ref(null);
//const opponentPokemonSprite = ref(null); 


onMounted(() => {
    console.log("mounting BattleComp");
    playerPokemon.value = data.gameData.state.player.currentPokemon;
    opponentPokemon.value = data.gameData.state.opponent.currentPokemon;
    console.log(playerPokemon.value);
    //:player-pokemon="playerPokemon"
})

</script>
<template>
    <div v-if="playerPokemon">

        <PokeLayerss 
        :player-pokemon="playerPokemon"
        :opponent-pokemon="opponentPokemon"
        />
        <InfoLayer
        :player-pokemon="playerPokemon"
        :game-data="data.gameData" />
    </div>
    <div v-else>
        fuck
    </div>
</template>