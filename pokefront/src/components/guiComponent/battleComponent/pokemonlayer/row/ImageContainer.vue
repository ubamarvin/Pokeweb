https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/showdown/25.gif?raw=true
<template>
    <div>
        <img :id="imgId" class="pk-sprite" src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png">

    </div>
</template>

<script setup>
defineProps({
    imgId: {
        type: String, 
        required: true, 
    },
});
</script>