//InfoLayer.vue
<script setup>
import ButtonBox from './buttonBox/ButtonBox.vue';
import AttackBox from './attackBox/AttackBox.vue';  
import RoundMsgComp from './RoundMsgComp.vue';
import { computed, defineProps } from 'vue';

const data = defineProps({
  gameData: {
    type: Object,
    required: false,
    default: () => ({state: {}})
  },
});
const currentState = computed(() => data.gameData?.state?.type || '');


      
</script>

<template>
  <div class="Info-Layer">
    <template v-if="currentState === 'MainState'">
      <RoundMsgComp :msg="gameData.state.roundReport"/>
      <ButtonBox :game-data="gameData"/>
    </template>
    <template v-else-if="currentState === 'ChooseAttackState'">
      <AttackBox :game-data="gameData"/>
    </template>
  </div>
</template>

<style>

</style>
