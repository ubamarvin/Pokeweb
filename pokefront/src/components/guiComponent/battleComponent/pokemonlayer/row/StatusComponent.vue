
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
        <p>{{ pokemon.hp }}</p>
        <p>{{ stateMap[pokemon.status.stateType] }}</p>
        <p>{{ pokemon.type }}</p>
    </div>
</template>