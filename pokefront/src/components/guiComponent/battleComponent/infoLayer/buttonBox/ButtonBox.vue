<script setup>

import jsonManipulator from "@/util/jsonManipulator";

const data = defineProps({
    gameData:{
        type: Object,
        required: true,
    }
});
function handleClick(choice){
    jsonManipulator.manipulateJson(data.gameData, choice);
}

//but why
const attack = "ChooseAttackState";
</script>
<template>
    <div class="button-box">
      <div
        class="attack-btn btn brn-outline-secondary"
        @click="handleClick(attack)">
        Attack
      </div>

      <div
        class="item-btn btn brn-outline-secondary">
        Switch
      </div>

      <div
        class="attack-btn btn brn-outline-secondary">
        Item
      </div>

      <div
        class="run-btn btn brn-outline-secondary">
        Run
      </div>
        
     
    </div>
</template>
<style>
.button-box {
    grid-column: 2;
    display: grid;
    grid-template: 1fr 1fr/ 1fr 1fr;
    border-left: 5px solid black;
    font-size: 1.5em;
    height: 100%;
}

.attack-btn:hover,
.switch-btn:hover,
.items-btn:hover,
.run-btn:hover {
    background-color: #d3d3d3; 
    color: #fff; 
}


.attack-btn {
    /*
    border-right: 2.5px solid black;
    border-bottom: 2.5px solid black;
    */
    transition: background-color 0.3s ease, color 0.3s ease; 
    font-size: large;
}

.switch-btn {
    border-right: 2.5px solid black;
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition for background-color */
}

.items-btn {
    border-bottom: 2.5px solid black;
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition for background-color */
}

.run-btn {
    border-bottom: 2.5px solid black;
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition for background-color */
}

.button-box div {
    font-size: large;
}

</style>