<script setup>
import ButtonComp from "./button/ButtonComp.vue"
</script>
<template>
    <div class="button-box">
        <ButtonComp class="attack-btn"/>
        <ButtonComp class="switch-btn"/>
        <ButtonComp class="items-btn"/>
        <ButtonComp class="run-btn"/>
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

</style>