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
    updateInfoToSwitch 
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


//render State based on fakeServers result..


const renderPickState = () => {
    if(gui_container === null)
        return;
    gui_container.textContent="";
    gui_container.appendChild(createPickLayout());
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

const updateGui = (state) => {
    //actually i do not have to pass
    //the json file but i cant assure
    //consitency of data
    const data = jsonFetcher.gameData
    if (state === "PickPokemonState")
        renderPickState()
    if (state === "MainState")
        renderMainLayout(data)
    if (state === "ChooseAttackState")
        updateInfoToAttack()
    if (state === "BattleEvalState")
    {}
    if (state === "SwitchPokemonState")
        updateInfoToSwitch()
    if (state === "ChooseItemState")
        updateInfoToItem()
    if (state === "main-box")
        updateInfoToMain()
    if (state === "YourDeadState")
        renderDeadLayout()
}

//
const startPolling =  async () => {
    //let previousState = fakeServer.getState(); // Store the initial state
    let previousState = ""
    // Set an interval to check for changes every 500 ms
    setInterval(async () => {
        await jsonFetcher.fetchGameJson(); // Get the current state
        const currentState = jsonFetcher.gameData.state.type
        if (currentState !== previousState) {
            console.log("State has changed:", currentState); // Log if there's a change
            previousState = currentState; // Update the previous state
            updateGui(currentState);
        }
    }, 500);
};



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