import pokemonFetcher from "./pokemonFetcher.js";

const indexContainer = document.querySelector(".index-container");
const aboutSection = document.querySelector(".about");
// Loading Spinner
function renderLoading() {
    if (!indexContainer) return;
    
    indexContainer.textContent = "";
    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('loading-container');
    
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    const loadingText = document.createElement('p');
    loadingText.textContent = "Loading...";

    loadingDiv.appendChild(spinner);
    loadingDiv.appendChild(loadingText);
    indexContainer.appendChild(loadingDiv);
}

// Render Pokémon
function renderPage(results) {
    
    indexContainer.innerHTML = ""; // Clear indexContainer
    aboutSection.classList.remove("hidden");
    const pokeImageContainer = document.createElement("div");
    pokeImageContainer.classList.add("poke-image-container");

    for (let i = 0; i < results.length && i < 10; i++) {
        const pokemon = results[i];
        
        const pokeDiv = document.createElement("div");
        const img = document.createElement("img");
        img.classList.add("img-fluid");
        img.src = pokemon.srcFront;

        pokeDiv.appendChild(img);
        pokeImageContainer.appendChild(pokeDiv);
    }

    indexContainer.appendChild(pokeImageContainer);
    indexContainer.appendChild(aboutSection);
}

renderLoading();

(async function() {
    while (pokemonFetcher.loading) {
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    if (!pokemonFetcher.error) {
        console.log("POkeData is loaded");
        renderPage(pokemonFetcher.results);
    } else {
        indexContainer.textContent = "Error fetching Pokémon data";
    }
})();
