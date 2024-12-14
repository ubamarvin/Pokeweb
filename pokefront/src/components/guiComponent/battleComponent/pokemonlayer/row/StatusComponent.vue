
<script setup>
defineProps({
    pokemon: {
        type: Object, 
        required: false, 
    },
});
const stateMap = {
  NormalState: '',
  BurnedState: 'brnd',
};

</script>

<template>
    <div >
        <p>{{ pokemon.name }}</p>
        <p>Health: {{ pokemon.hp }} / 100</p>
        <p>{{ stateMap[pokemon.status.stateType] }}</p>
        <p>{{ pokemon.type }}</p>
    </div>
</template>

