// pick
import pokemonFetcher from "./pokemonFetcher.js"
import jsonManipulator from "./jsonManipulator.js"

function findPokemonByName(pokemonFetcher, pokemonName) {
    //console.log(player.currentPokemon.name)
    const foundPokemon = pokemonFetcher.results.find(pokemon => pokemon.name === pokemonName.toUpperCase());

    if (foundPokemon) {
        return foundPokemon; // 
    } else {
        return pokemonFetcher.results[0]; // give a mew as trostpreis
    }
}
export const createPickLayout = (data) => {
    const pokedex = data.state.pokedex.pokedex.available_pokemon;
    const pickedPokemon = data.state.player.pokemons;
    const guiContainer = document.createElement("div");
    guiContainer.classList.add('gui-container');
    console.log(pickedPokemon);
    //Container for availablePokemon
    const available = document.createElement("div");
    available.classList.add("pick-available");
    //Container for pickedPokemon
    const picked = document.createElement("div");
    picked.classList.add("pick-picked");

    pokedex.map((pokemon) => {
        //get pokemonImageSrc
        const sprite = findPokemonByName(pokemonFetcher,pokemon.name);
        const pokeImg = sprite.srcFront;
        //put image in img element
        const img = document.createElement("img");
        img.classList.add("pick-poke-img");
        img.src = pokeImg;
        //Create Div to hold image and pit img in pokediv
        const pokeDiv = document.createElement("div");
        pokeDiv.addEventListener("click", () => {               ////<-------Here
            jsonManipulator.manipulateJson(data,pokemon.name); //// <------ Here 
        });
        pokeDiv.classList.add("pick-poke");
        pokeDiv.appendChild(img);
        available.appendChild(pokeDiv);
          
    });

    pickedPokemon.map((pokemon) => {
        const sprite = findPokemonByName(pokemonFetcher,pokemon.name);
        const pokeImg = sprite.srcFront;
        //put image in img element
        const img = document.createElement("img");
        img.classList.add("pick-poke-img");
        img.src = pokeImg;
        //Create Div to hold image and pit img in pokediv
        const pokeDiv = document.createElement("div");
        pokeDiv.classList.add("pick-poke");
        pokeDiv.appendChild(img);
        picked.appendChild(pokeDiv);
    });
    const prompt = document.createElement("p");
    prompt.textContent = "Choose one to six Pokemon!"

    const team = document.createElement("p");
    team.textContent = "Your team consists of:"

    const availableContainer = document.createElement("div");
    availableContainer.classList.add("available-container");
    const teamContainer = document.createElement("div");
    teamContainer.classList.add("team-container");

    availableContainer.appendChild(prompt);
    availableContainer.appendChild(available);

    teamContainer.appendChild(team);
    teamContainer.appendChild(picked);




    guiContainer.appendChild(availableContainer);
    guiContainer.appendChild(teamContainer);
    
   

    return guiContainer;

};
