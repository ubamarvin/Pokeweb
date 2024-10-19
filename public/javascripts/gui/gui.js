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
import { createPickLayout } from "./gui/pick.js"
import { createDeadLayout} from "./gui/dead.js"
import { createMainLayout, updateInfoToAttack, updateInfoToItem, updateInfoToMain, updateInfoToSwitch } from "./gui/main.js"

import { fakeServer } from "./fakeServer.js"


const gui_container = document.querySelector(".root")


//render State based on fakeServers result..


const renderPickState = () => {
    gui_container.textContent="";
    gui_container.appendChild(createPickLayout());
}

const renderMainLayout = () => {
    gui_container.textContent="";
    gui_container.appendChild(createMainLayout());
}

const renderDeadLayout = () => {
    gui_container.textContent="";
    gui_container.appendChild(createDeadLayout());
}

const updateGui = (state) => {
    if (state === "pick")
        renderPickState()
    if (state === "main")
        renderMainLayout()
    if (state === "attack")
        updateInfoToAttack()
    if (state === "switch")
        updateInfoToSwitch()
    if (state === "item")
        updateInfoToItem()
    if (state === "main-box")
        updateInfoToMain()
    if (state === "dead")
        renderDeadLayout()
}

//
const startPolling = () => {
    let previousState = fakeServer.getState(); // Store the initial state

    // Set an interval to check for changes every 500 ms
    setInterval(() => {
        const currentState = fakeServer.getState(); // Get the current state

        if (currentState !== previousState) {
            console.log("State has changed:", currentState); // Log if there's a change
            previousState = currentState; // Update the previous state
            updateGui(currentState);
        }
    }, 500); // Adjust polling frequency as needed
};

startPolling();

renderMainLayout()
//renderDeadLayout()
//renderPickState()