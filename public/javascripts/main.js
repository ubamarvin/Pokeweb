//main.js

import { fakeServer } from "./fakeServer.js";

let currentInfoLayout

export const createMainLayout = () => {
    const guiContainer = document.createElement("div");
    guiContainer.classList.add('gui-container');

    const pokeLayer = document.createElement('div');
    pokeLayer.classList.add('poke-layer');

    const topRow = document.createElement('div');
    topRow.classList.add('top-row');

    const opStatusBox = document.createElement("div");
    opStatusBox.classList.add("status");
    topRow.appendChild(opStatusBox);

    const opImageBox = document.createElement('div');
    opImageBox.classList.add('op-image-box');
    const opImage = document.createElement('img');
    opImage.classList.add('pk-sprite');
    opImage.id = 'op-pk';
    opImage.src = 'https://img.pokemondb.net/sprites/silver/normal/weezing.png';
    opImage.alt = 'Weezing';
    opImageBox.appendChild(opImage);
    topRow.appendChild(opImageBox);

    // Bottom row with player image
    const botRow = document.createElement('div');
    botRow.classList.add('bot-row');
    const plImageBox = document.createElement('div');
    plImageBox.classList.add('pl-image-box');
    const plImage = document.createElement('img');
    plImage.classList.add('pk-sprite');
    plImage.id = 'pl-pk';
    plImage.src = 'https://img.pokemondb.net/sprites/silver/normal/weezing.png';
    plImage.alt = 'Weezing';
    plImageBox.appendChild(plImage);
    botRow.appendChild(plImageBox);

    const plStatusBox = document.createElement("div");
    plStatusBox.classList.add("status");
    plStatusBox.classList.add("status-pl");
    botRow.appendChild(plStatusBox);

    // Append rows to poke-layer
    pokeLayer.appendChild(topRow);
    pokeLayer.appendChild(botRow);


    //Move into its own function
    // Create the info-layer
    const infoLayer = document.createElement('div');
    infoLayer.classList.add('info-layer');
    currentInfoLayout = infoLayer;




    // Round message
    const roundMsg = document.createElement('div');
    roundMsg.classList.add('round-msg');
    roundMsg.textContent = 'What Will you do';

    // Choice buttons
    const choiceButtons = document.createElement('div');
    choiceButtons.classList.add('choice-buttons');

    const attackBtn = document.createElement('div');
    attackBtn.classList.add('attack-btn');
    attackBtn.textContent = 'Attack';
    attackBtn.addEventListener("click", () => {
        fakeServer.receiveString("attack");
    })

    const itemsBtn = document.createElement('div');
    itemsBtn.textContent = 'Items';
    itemsBtn.addEventListener("click", () => {
        fakeServer.receiveString("item");
    })

    const switchBtn = document.createElement('div');
    switchBtn.textContent = 'Switch';
    switchBtn.addEventListener("click", () => {
        fakeServer.receiveString("switch");
    })

    const runBtn = document.createElement('div');
    runBtn.textContent = 'Run';

    // Append buttons to choiceButtons container
    choiceButtons.appendChild(attackBtn);
    choiceButtons.appendChild(itemsBtn);
    choiceButtons.appendChild(switchBtn);
    choiceButtons.appendChild(runBtn);

    // Append roundMsg and choiceButtons to infoLayer
    infoLayer.appendChild(roundMsg);
    infoLayer.appendChild(choiceButtons);

    // Append pokeLayer and infoLayer to guiContainer
    guiContainer.appendChild(pokeLayer);
    guiContainer.appendChild(infoLayer);

    return guiContainer;
};


//____Button to get back to main layout
const backBtn = document.createElement("div");
    backBtn.classList.add("back-btn")
    backBtn.addEventListener("click", () => {
        currentInfoLayout.textContent="";
        fakeServer.receiveString("main-box")
    })

export const updateInfoToAttack = () => {
    currentInfoLayout.textContent ="";
    
    currentInfoLayout.appendChild(backBtn);
}
export const updateInfoToSwitch = () => {
    currentInfoLayout.textContent="";
    const switchBox = document.createElement("div");
    switchBox.classList.add("switch-box");
    currentInfoLayout.appendChild(switchBox);

    currentInfoLayout.appendChild(backBtn);
}


export const updateInfoToItem = () => {
    currentInfoLayout.textContent="";
    const itemBox = document.createElement("div");
    itemBox.classList.add("item-box");
    currentInfoLayout.appendChild(itemBox);
    currentInfoLayout.appendChild(backBtn);
}

export const updateInfoToMain = () => {
    currentInfoLayout.textContent="";

    const roundMsg = document.createElement('div');
    roundMsg.classList.add('round-msg');
    roundMsg.textContent = 'What Will you do';

    // Choice buttons
    const choiceButtons = document.createElement('div');
    choiceButtons.classList.add('choice-buttons');

    const attackBtn = document.createElement('div');
    attackBtn.classList.add('attack-btn');
    attackBtn.textContent = 'Attack';
    attackBtn.addEventListener("click", () => {
        fakeServer.receiveString("attack");
    })

    const itemsBtn = document.createElement('div');
    itemsBtn.textContent = 'Items';
    itemsBtn.addEventListener("click", () => {
        fakeServer.receiveString("item");
    })

    const switchBtn = document.createElement('div');
    switchBtn.textContent = 'Switch';
    switchBtn.addEventListener("click", () => {
        fakeServer.receiveString("switch");
    })

    const runBtn = document.createElement('div');
    runBtn.textContent = 'Run';

    // Append buttons to choiceButtons container
    choiceButtons.appendChild(attackBtn);
    choiceButtons.appendChild(itemsBtn);
    choiceButtons.appendChild(switchBtn);
    choiceButtons.appendChild(runBtn);

    // Append roundMsg and choiceButtons to infoLayer
    currentInfoLayout.appendChild(roundMsg);
    currentInfoLayout.appendChild(choiceButtons);

}
