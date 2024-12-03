
<script setup>
import { ref, computed, defineProps } from 'vue';
import jsonManipulator from '@/util/jsonManipulator';

const data = defineProps({
  gameData: {
    type: Object,
    required: false,
    default: () => ({state: {}})
  },
});

  
const showDescription = ref(false);
const hoveredMove = ref({});


const currentPokemonMoves = computed(() => data.gameData.state.player.currentPokemon.moves);

const handleMoveClick = (move) => {
  console.log(`${move.name} clicked`);
  jsonManipulator.manipulateJson(data.gameData, move.name)
 
};

const showMoveDescription = (move) => {
  hoveredMove.value = move;
  showDescription.value = true;
};
const hideMoveDescription = () => {
  showDescription.value = false;
};



</script>

<template>
    
      <!-- Move Box -->
      <div class="move-box">
        <div 
          v-for="(move, index) in currentPokemonMoves" 
          :key="index" 
          class="move btn btn-secondary" 
          @click="handleMoveClick(move)"
          @mouseenter="showMoveDescription(move)"
          @mouseleave="hideMoveDescription"
        >
          <p>{{ move.name }}</p>
        </div>
      </div>
  
      <!-- Move Info -->
      <div v-if="showDescription" class="move-info">
        <div class="move-description">
          <p>Power: {{ hoveredMove.power }}</p>
          <p>Type: {{ hoveredMove.moveType }}</p>
          <p>Status: {{ hoveredMove.statusEffect }}</p>
        </div>
      </div>
    
  </template>
  
<style scoped>

*{
    font-size: large;
}

.move-box {
    grid-column: 1;
    padding: 5px;
    font-size: 1.5em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:  1fr 1fr
    
}

.move {
    height: 25%;
    padding: 5px;
    padding-left: 10px;
    transition: transform 0.3s ease;
    transform-origin: center;
    color:black;
}

.move p {
    color: white;
    font-size: large
}


.move-info {
    grid-column: 2;
    display:grid;
    grid-template-columns: 0.75fr  0.25fr;
}

.moveDescription {
    grid-column: 1;
    
}

.move-info p {
    color: white;
    font-size: large
}

.move-info-box-btn-box {
    grid-column: 2;
    width: 100%;
    height: 100%;
}


.move:hover {
    transform: scale(1.1);
}

  </style>
  