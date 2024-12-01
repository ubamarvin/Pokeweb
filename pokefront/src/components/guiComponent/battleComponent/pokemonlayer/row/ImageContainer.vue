https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/showdown/25.gif?raw=true
<template>
    <div v-if="imgSrc === undefined">
        Loading
    </div>
    <div v-else>
        <img :id="imgId" class="pk-sprite" :src = "imgSrc" />
    </div>
</template>

<script setup>
defineProps({
    imgId: {
        type: String, 
        required: true, 
    },
    imgSrc: {
        type: String,
        required: true,
    }
});
</script>