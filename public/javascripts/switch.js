// switch.js
import pokemonFetcher from "./pokemonFetcher.js"
import { findPokemonByName } from "./main.js";

export const createSwitchLayout = (data) => {
  
    const guiContainer = document.createElement("div");
    guiContainer.classList.add('gui-container-switch');

    const switchBox = document.createElement("div");
    switchBox.classList.add("switch-box", "d-flex", "flex-column");
    
    const switchInfo = document.createElement("div");
    switchInfo.classList.add("switch-info");
    switchInfo.textContent="Drag your Pokemon into battle"
    switchBox.appendChild(switchInfo);

    const dropZone = document.createElement("div");
    dropZone.classList.add("drop-zone", "p-2", "my-3", "flex-grow-1");
    dropZone.textContent = "Drop Pokémon Here";

    dropZone.addEventListener("dragover", (event) => {
        event.preventDefault(); // Allow the drop
        event.dataTransfer.dropEffect = "move"; 
            });

    dropZone.addEventListener("drop", (event) => {
        event.preventDefault();
        const pokemonName = event.dataTransfer.getData("text/plain");

        // Optionally, you can create a visual representation of the dropped Pokémon
        alert("put" + pokemonName + " into Battle?");
    });


    data.pokemons.forEach(pokemon => {
        const pk = findPokemonByName(pokemonFetcher, pokemon.name)

        const pokeCard = document.createElement("div");
        pokeCard.classList.add("poke-card", "data-mdb-block-x-axis");
        pokeCard.draggable = true;

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("switch-poke-img-box");
        const img = document.createElement("img");
        img.src = pk.srcFront;
        img.classList.add("img-fluid");
        imgDiv.appendChild(img);
        pokeCard.appendChild(imgDiv);

        const pokeStats = document.createElement("div");
        pokeStats.classList.add("poke-switch-stats");
        const name = document.createElement("p");
        name.textContent = pokemon.name;
        const hp = document.createElement("p");
        hp.textContent = pokemon.hp;
        pokeStats.appendChild(name);
        pokeStats.appendChild(hp)
        pokeCard.appendChild(pokeStats)


        pokeCard.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text/plain", pokemon.name);
            event.dataTransfer.effectAllowed = "move";
        });

        pokeCard.addEventListener("dragend", (event) => {
            // Restore opacity when dragging ends
            event.currentTarget.style.opacity = '';
        });

        switchBox.appendChild(pokeCard);
        switchBox.appendChild(dropZone);

    });
    guiContainer.appendChild(switchBox);


    return guiContainer;
};