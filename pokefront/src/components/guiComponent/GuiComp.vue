<script setup>
import BattleComp from "./battleComponent/BattleComp.vue"
import PickComp from "./pickComponent/PickComp.vue"
import { ref, onMounted, onUnmounted, computed} from "vue";
import webSocketManager from "../../util/webSocketManager.js"

// ref is like state in React
const gameJson = ref(null);

const stateToComp = {
    "PickPokemonState": PickComp,
    "MainState": BattleComp,
    "ChooseAttackState" : BattleComp
};
// like memo or useEffect with dependcy array in React.
// Is computed only when
// ref on which it depends changes
const currentComp = computed(() => {
    console.log("computed:");
    return gameJson.value?.state?.type ? stateToComp[gameJson.value.state.type] || null : null;
});
onMounted(() => {
    console.log("GuiComp Mounts");
    const handleUpdate = (data) => {
        console.log("on mount" + data);
        gameJson.value = data;
        console.log("fugg");
        if(!data){
            console.log("nodata");
        }
    }

    webSocketManager.setListener(handleUpdate);

    onUnmounted(() => {
        webSocketManager.removeListener();
        console.log("GuiGone");
    })

});
</script>
<template>
    <div class="gui-container">
        <div v-if="!gameJson">Loading data</div>

        <component v-else :is="currentComp" :game-data="gameJson" />
    </div>
</template>

<style>
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace; /* Monospace font for terminal look */

}

.hamburger-button {
    background-color: rgb(0,0,0) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(5px);
    color: black;
    border-top-left-radius: 0% !important;
    border-top-right-radius: 0% !important;
    border-bottom-color: black !important;
    border-left-color:  black !important;
    border-right-color: black !important;
    border-top-color: black !important;
}
.offcanvas-start {
    background-color: grey;
}

.offcanvas,
.offcanvas-body {
    background-color: rgba(0,0,0,0.8);
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(5px);
    opacity: 0.9;
    font-size: 26px;


}                          

@media (min-width: 322px) and (max-width: 576px){
    /*________GUI__________*/
    .gui-container,
    .gui-container-switch{
        width: 100vw !important;
        height: 90vh !important;
        border-radius: 0px !important;    

    }
    .info-layer {
        bottom: 2% !important;
    }

    .status {
        font-size: 12px;
        font-weight: bold;
    }

    .pl-image-box {
        left: -10% !important;
    }

    .round-msg,
    .btn {
        font-size: 14px !important;
        color: white !important;
        font-weight: bold !important;

    }
    .round-msg {
        text-align: left !important;
    }
  }
  

  
/* Mobile (landscape) - Small devices  */
@media (min-width: 577px) and (max-width: 767px) {
    .gui-container,
    .gui-container-switch{
        width: 100vw !important;
        height: 90vh !important;
        border-radius: 0px !important;    
        padding-top: 0px !important;

    }
    .info-layer {
        bottom: 2% !important;
    }
    
    .pick-poke-img {
        width: 60px !important;
        height: auto !important;
    }

    .gui-container-switch {
        display: flex !important;
        flex-wrap: wrap !important;
        padding-right: 10px;
    }

    .d-flex,
    .flex-collumn {
        display: flex !important;
        flex-wrap: wrap !important;
    }

    .poke-card {
        flex: 1 !important;
        max-width: 200px !important;
    }
    .status {
        font-size: 12px;
        font-weight: bold;
        height: 50% !important;
    }
    .status-pl {
        bottom: 4px !important;
    }

    .pl-image-box {
        left: -10% !important;
        bottom: -80% !important;

    }

    .round-msg,
    .btn {
        font-size: 14px !important;
        color: white !important;
        font-weight: bold !important;

    }
    .round-msg {
        text-align: left !important;
    }
  }


/* Tablets*/
@media (min-width: 768px) and (max-width: 991px) {
  /*________GUI__________*/
  .gui-container,
  .gui-container-switch{
      width: 100vw !important;
      height: 90vh !important;
      border-radius: 0px !important;    

  }
  .info-layer {
      bottom: 2% !important;
  }

  .status {
      font-size: 24px;
      font-weight: bold;
  }

  .pl-image-box {
      left: -10% !important;
  }

  .round-msg,
  .btn {
      font-size: 24px !important;
      color: white !important;
      font-weight: bold !important;

  }
  .round-msg {
      text-align: left !important;
  }
}

/* Tablets landscape*/
@media (min-width: 991px) and (max-width: 1400px) {
    /*________GUI__________*/
    .gui-container,
    .gui-container-switch{
        width: 100vw !important;
        height: 90vh !important;
        border-radius: 0px !important;    
  
    }
    .info-layer {
        bottom: 2% !important;
    }
  
    .status {
        font-size: 24px;
        font-weight: bold;
    }
  
    .pl-image-box {
        left: -0% !important;
    }
  
    .round-msg,
    .btn {
        font-size: 24px !important;
        color: white !important;
        font-weight: bold !important;
  
    }
    .round-msg {
        text-align: left !important;
    }


    .gui-container-switch {
        display: flex !important;
        flex-wrap: wrap !important;
        padding-right: 10px;
    }

    .d-flex,
    .flex-collumn {
        display: flex !important;
        flex-wrap: wrap !important;
    }

    .poke-card {
        flex: 1 !important;
        max-width: 200px !important;
    }
  }



:root {
    --container-padding: 10px;
}

/* Keyframes for the up-and-down animation */
@keyframes moveUpDown {
    0% {
        transform: translateY(0); /* Starting position */
    }
    50% {
        transform: translateY(-10px); /* Move up */
    }
    100% {
        transform: translateY(0); /* Back to starting position */
    }
}


.hidden {
    display: none !important;
}

/*Start of gui layout*/

.gui-container {
    padding: var(--container-padding);
    background-color: rgb(0,0,0);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);
    color: black;
    opacity: 0.8;
    width: 75vw;
    height: 75vh;  
    border-radius: 10px;    
    position: relative;
}

.poke-layer {
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: 1fr 1fr;
   height: 100%;
   position: relative;
   z-index: -1;
}
.Info-Layer {
    background-color: rgba(68, 110, 146, 0.548);
    flex: 1;
    position: absolute;
    /*z-index: 0;*/
    height: 25%;
    bottom: var(--container-padding);
    left: var(--container-padding);
    right: var(--container-padding);


    display: grid;
    grid-template-columns: 1fr 1fr;
}
/*
https://www.w3schools.com/css/css_positioning.asp
*/
.top-row,
.bot-row {
    position: relative;
    height: 100%; 
}
.top-row {
    grid-row: 1;
}

.bot-row {
    grid-row: 2;    
}


.status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: absolute;
    width: 40%;
    height: 40%;
    background-color: #6e6e6e;
    
}

.status-op {
    border-bottom-right-radius: 75px; /* Round bottom right corner */
    text-align: left;
}

.status-pl {
    border-top-left-radius: 75px; /* Round bottom right corner */
    right: 0;
    bottom: 10%;
    text-align: right;

}


.op-image-box,
.pl-image-box {
    position: absolute;
    width: 300px; /*else it just fucks it all up */
    animation: moveUpDown 1s ease-in-out infinite; /* Animation properties */

}

.op-image-box {
    top: 30%;
    right: 0%;
    animation-delay: 0s;
    text-align: right;
}

#op-pk {
    width: 70%;
    height: auto;
}


.pl-image-box {
    bottom: -45%;
    left: 0%; 
    animation-delay: 0.13s;
}
#pl-pk {
    width: 100%;
    height: auto;
}



</style>