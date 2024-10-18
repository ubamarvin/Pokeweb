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

import { createPickLayoutHtml } from "./pick.js"
import { createMainLayoutHtml } from "./main.js"

const gui_container = document.querySelector(".gui-container")

const renderPickState = () => {
    gui_container.appendChild(createPickLayoutHtml())
}

const renderMainLayout = () => {
    gui_container.appendChild(createMainLayoutHtml())
}

renderMainLayout()