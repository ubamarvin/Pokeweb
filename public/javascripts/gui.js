//This js should serve as the gui-layout-controller
//its job is it to append and remove Elements


//
/**___Goal Architecture
 * OnClick(): send json to server
 * Server: serverController delegates to game and back
 * Server: controller notifys client
 * updateWebGui in Client transforms Webgui accordingly
 * 
 * This shit only works with json because onClick receives a json body from 
 * the scala server.
 * In later versions updateWeb gui will listen for changes and is notified with
 * Html Object containing a Json body
 */
//gui.js

import { createPickLayout } from "./pick.js"
import { createDeadLayout} from "./dead.js"
import { createSwitchLayout} from "./switch.js"
import {createMainLayout,
        updateInfoToAttack,
        updateInfoToMain,
        animation } from "./main.js"
import pokemonFetcher from "./pokemonFetcher.js"
import jsonManipulator from "./jsonManipulator.js"
import webSocketManager from "./webSocketManager.js"


///bad naming
const gui_container = document.querySelector(".root")


const renderPickState = (data) => {
    if(gui_container === null)
        return;
    gui_container.textContent="";
    gui_container.appendChild(createPickLayout(data));
}

const renderMainLayout = (data) => {
    if(gui_container === null)
        return;
    gui_container.textContent="";
    gui_container.appendChild(createMainLayout(data));
}

const renderSwitchLayout = (data) => {
    if(gui_container === null)
        return;
    gui_container.textContent="";
    gui_container.appendChild(createSwitchLayout(data));
}

const renderDeadLayout = () => {
    if(gui_container === null)
        return;
    gui_container.textContent="";
    gui_container.appendChild(createDeadLayout());
}

let previousState = localStorage.getItem("previousState");
const PICK = "PickPokemonState";
const MAIN = "MainState";
const ATT  = "ChooseAttackState";
const SW = "SwitchPokemonState";
const IT = "ChooseItemState";
const BE = "BattleEvalState";
const DEAD = "YourDeadState";

export const updateGui = (data) => {
   
    const state = data.state.type;
    console.log("UpdateGui from "+previousState+" to "+ state);

    if(!document.querySelector(".gui-container")) {
        console.log("PageReload. Render Main")
        renderMainLayout(data);
    }
    
    if ((previousState === "ChooseAttackState"  |
        previousState === "ChooseItemState")
        && state == MAIN
    ) {
        console.log("(sw|at|ch) to updateInfoToMain");
        updateInfoToMain();
    }
    if (state === PICK || 
        (previousState === PICK && state === PICK) /////here it starts
    ){
        console.log("renderPick")
        renderPickState(data);
        }

    if (state === "MainState"){
        renderMainLayout(data);
        }

    if (state === "ChooseAttackState"){
        updateInfoToAttack(data)
        }


    if (state === "SwitchPokemonState"){
        renderSwitchLayout(data.state.player)
        }

    if (state === "ChooseItemState"){
        console.log("update to item");
    }

    if (state === "YourDeadState"){
        renderDeadLayout()
    }
    previousState = state;
    localStorage.setItem("previousState", state);

}




//// Starts here !!
//// Wait for Pokemon Fetcher Pokemonfetcher
//// Since Pokefetcher only loads once it fetches the Data
//// in its Module and is then exported
(async function() {
    while(pokemonFetcher.loading) {
        
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    if (!pokemonFetcher.error) {


    }else{
        gui_container.textContent="Error Loading"
    }

})();

