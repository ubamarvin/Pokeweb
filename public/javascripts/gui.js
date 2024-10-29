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
import { 
    createMainLayout,
    updateInfoToAttack,
    updateInfoToItem,
    updateInfoToMain,
    updateInfoToSwitch,
    animation 
    } from "./main.js"

//import { fakeServer } from "./fakeServer.js"
import pokemonFetcher from "./pokemonFetcher.js"
import jsonFetcher  from "./jsonFetcher.js"

(async () => {
    await jsonFetcher.fetchGameJson(); // Fetch the game JSON first
    const type = jsonFetcher.gameData.state.type; // Access the type after fetching
    console.log(type); // Now you can log or use the type
})();

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

const renderDeadLayout = () => {
    if(gui_container === null)
        return;
    gui_container.textContent="";
    gui_container.appendChild(createDeadLayout());
}

let lock = 0;
const updateGui = (previousState ,state) => {
    //actually i do not have to pass
    //the json file but i cant assure
    //consitency of data
    const data = jsonFetcher.gameData
    if (lock == 1){
        return
    }

    // check if gui-container Element exists
    // if not main has not been rendered
    // case: Load or Reload
    if(!document.querySelector(".gui-container")) {
        console.log("PageReload. Render Main")
        renderMainLayout(data);
    }
    
    if (previousState === "SwitchPokemonState" |
        previousState === "ChooseAttackState"  |
        previousState === "ChooseItemState"
    ) {
        console.log("(sw|at|ch) to updateInfoToMain");
        updateInfoToMain();
    }
    if (previousState === "BattleEvalState") {
        lock = 1;
        animation();
        lock = 0;
    }
    if (state === "PickPokemonState")
        renderPickState(data);
    if (state === "MainState")
        renderMainLayout(data)
    if (state === "ChooseAttackState")
        updateInfoToAttack(data.state.player)
    if (state === "BattleEvalState")
    {} // af
    if (state === "SwitchPokemonState")
        updateInfoToSwitch(data.state.player)
    if (state === "ChooseItemState")
        updateInfoToItem()
    if (state === "YourDeadState")
        renderDeadLayout()
}

//
const startPolling =  async () => {
    
    let previousState = ""
    
    setInterval(async () => {
        await jsonFetcher.fetchGameJson(); 
        const currentState = jsonFetcher.gameData.state.type
        if (currentState !== previousState || currentState === "PickPokemonState") {
            console.log("State has changed from:",previousState +" to "+ currentState); // Log if there's a change
            updateGui(previousState,currentState);
            previousState = currentState; 
        }
    }, 500);
};


//// Starts here !!
//// Wait for Pokemon Fetcher Pokemonfetcher
//// Since Pokefetcher only loads once it fetches the Data
//// in its Module and is then exported
(async function() {
    while(pokemonFetcher.loading) {
        
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    if (!pokemonFetcher.error) {
        startPolling();
        //renderMainLayout()
        //console.log("neverreach")
    }else{
        gui_container.textContent="Error Loading"
    }

})();

//renderMainLayout()
//renderDeadLayout()
//renderPickState()