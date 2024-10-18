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
const attack_btn = document.querySelector(".attack-btn");
const info_layer = document.querySelector(".info-layer");

attack_btn.addEventListener("click", () =>{
    alert("Attack button clicked");
    // later, updatew
    updateWebGui("main_to_attack")
    
    }
)

// This is to be the observer
function updateWebGui(state) {
    // Identify which to which state
    
    //delegate accordingly
    // from to is unnötig "main" sufficec
    if ( state === "main_to_attack")
        mainToAttack()
    if ( state === "attack_to_main")
        attackToMain()
}

function mainToAttack() {
    const attack_list = document.querySelector(".attack-list");
    document.querySelector(".round-msg").classList.add("hidden");
    document.querySelector(".choice-buttons").classList.add("hidden");
    info_layer.appendChild(attack_list);
    attack_list.classList.remove("hidden");

    const back_button = document.querySelector(".btn"); // eig id 
    back_button.addEventListener("click", ()=> {
        alert("backButtonClicked");
        updateWebGui("attack_to_main")
    }) 
}

function attackToMain() {
    document.querySelector(".round-msg").classList.remove("hidden");
    document.querySelector(".choice-buttons").classList.remove("hidden");
    document.querySelector(".attack-list").classList.add("hidden");

}