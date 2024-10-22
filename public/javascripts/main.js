//main.js

import { fakeServer } from "./fakeServer.js";
import pokemonFetcher from "./pokemonFetcher.js"



function findPokemonByName(pokemonFetcher, pokemonName) {
    //console.log(player.currentPokemon.name)
    const foundPokemon = pokemonFetcher.results.find(pokemon => pokemon.name === pokemonName.toUpperCase());

    if (foundPokemon) {
        return foundPokemon; // 
    } else {
        return pokemonFetcher.results[0]; // give a mew as trostpreis
    }
}

let currentInfoLayout

export const createMainLayout = (data) => {
    ///Get Data from Json Object
    //pokemonNames
    const player1 = data.state.player
    const player2 = data.state.opponent

    
    const player1MonSprite = findPokemonByName(pokemonFetcher, player1.currentPokemon.name)
    const player2MonSprite = findPokemonByName(pokemonFetcher, player2.currentPokemon.name)
    

    const guiContainer = document.createElement("div");
    guiContainer.classList.add('gui-container');

    const pokeLayer = document.createElement('div');
    pokeLayer.classList.add('poke-layer');

    const topRow = document.createElement('div');
    topRow.classList.add('top-row');

    const opStatusBox = document.createElement("div");
    opStatusBox.classList.add("status");
    opStatusBox.classList.add("status-op");

    const opPkName = document.createElement("p");
    opPkName.textContent = player2.currentPokemon.name
    const opHealth = document.createElement("p");
    const hp = player2.currentPokemon.hp
    opHealth.textContent =`Health: ${hp} / 100`;

    console.log("player 2 health " + hp); 


    opStatusBox.appendChild(opPkName);
    opStatusBox.appendChild(opHealth);
    topRow.appendChild(opStatusBox);

    const opImageBox = document.createElement('div');
    opImageBox.classList.add('op-image-box');
    const opImage = document.createElement('img');
    opImage.classList.add('pk-sprite');
    opImage.id = 'op-pk';
    opImage.src = player2MonSprite.srcFront;
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
    plImage.src = player1MonSprite.srcBack;
    plImage.alt = 'Weezing';
    plImageBox.appendChild(plImage);
    botRow.appendChild(plImageBox);

    const plStatusBox = document.createElement("div");
    plStatusBox.classList.add("status");
    plStatusBox.classList.add("status-pl");

    const plPkName = document.createElement("p");
    plPkName.textContent = player1.currentPokemon.name;
    const plHealth = document.createElement("p");
    const hp_pl = player1.currentPokemon.hp;
    plHealth.textContent =`Health: ${hp_pl} / 100`

    plStatusBox.appendChild(plPkName);
    plStatusBox.appendChild(plHealth);

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
    roundMsg.textContent = 'What Will you do?';

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
    itemsBtn.classList.add('items-btn');
    itemsBtn.addEventListener("click", () => {
        fakeServer.receiveString("item");
    })

    const switchBtn = document.createElement('div');
    switchBtn.textContent = 'Switch';
    switchBtn.classList.add('switch-btn');

    switchBtn.addEventListener("click", () => {
        fakeServer.receiveString("switch");
    })

    const runBtn = document.createElement('div');
    runBtn.textContent = 'Run';
    runBtn.classList.add('run-btn');


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

export const updateInfoToAttack = (player1) => {
    currentInfoLayout.textContent ="";
    const moveBox = document.createElement("div")
    moveBox.classList.add("move-box");
    console.log(player1.currentPokemon.moves)

    player1.currentPokemon.moves.forEach(move => {
        const moveDiv = document.createElement("div");
        moveDiv.classList.add("move");
        const moveName = document.createElement("p")
        moveName.textContent = move.name;
        moveDiv.appendChild(moveName);
        moveBox.appendChild(moveDiv);
    });
    currentInfoLayout.appendChild(moveBox)
    currentInfoLayout.appendChild(backBtn);
};
export const updateInfoToSwitch = (player1) => {
    if(currentInfoLayout !== undefined)
        currentInfoLayout.textContent="";
    const switchBox = document.createElement("div");
    switchBox.classList.add("switch-box");
    console.log(player1);

    player1.pokemons.forEach(pokemon => {
        const pk = findPokemonByName(pokemonFetcher, pokemon.name)

        const pokeSwitchDiv = document.createElement("div");
        pokeSwitchDiv.classList.add("poke-switch");

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("switch-poke-img-boc");
        const img = document.createElement("img");
        img.src = pk.srcFront;
        imgDiv.appendChild(img);
        pokeSwitchDiv.appendChild(imgDiv);

        const pokeStats = document.createElement("div");
        pokeStats.classList.add("poke-switch-stats");
        const name = document.createElement("p");
        name.textContent = pokemon.name;
        const hp = document.createElement("p");
        hp.textContent = pokemon.hp;
        pokeStats.appendChild(name);
        pokeStats.appendChild(hp)
        pokeSwitchDiv.appendChild(pokeStats)
        switchBox.appendChild(pokeSwitchDiv)

    });
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
