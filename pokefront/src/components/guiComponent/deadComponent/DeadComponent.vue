<script setup>
import jsonManipulator from "@/util/jsonManipulator.js";
import {defineProps} from "vue";
const data = defineProps({
    gameData : {
        type: Object,
        required: true
    }
});
function newGame() {
    jsonManipulator.postUpdatedJson(data.gameData);
}
  </script>
<template>
    <div style="text-align: center; padding: 20px;">
      <h1>{{ data.gameData.state.roundReport }}</h1>
      <h1>{{ data.gameData.state.winner }} has won</h1>
      <h1>play again?</h1>
      <button style="margin-top: 20px; padding: 10px 20px; font-size: 16px;"
        @click="newGame">
        New Game
      </button>
    </div>
  </template>
  
  
  
  <style scoped>
  h1 {
    color: white;
    font-size: large;
  }
  </style>