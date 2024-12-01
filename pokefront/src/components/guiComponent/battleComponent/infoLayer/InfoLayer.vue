//InfoLayer.vue
<script setup>
import ButtonBox from './buttonBox/ButtonBox.vue';  
import RoundMsgComp from './RoundMsgComp.vue';

defineProps({
  gameData: {
    type: Object,
    required: false,
  },
});

      
</script>

<template>
  <div class="Info-Layer">
    <RoundMsgComp :msg="gameData.state.roundReport"/>
    <ButtonBox :game-data="gameData"/>
  </div>
</template>

<style>

</style>
