import pokemonFetcher from "./pokemonFetcher.js";

const indexContainer = document.querySelector(".index-container");



// as long as the screen loads show a spinning div 
function renderLoading() {
    console.log("loading");
    if(!indexContainer){
        return;
    }
    
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




function renderPage(results) {
    
    const aboutSection = document.querySelector(".about")
    if (!aboutSection) {
        console.error("Element with class '.about' not found");
        return;
    }
    aboutSection.classList.remove("hidden");
    indexContainer.textContent = "";
    indexContainer.appendChild(aboutSection);
    const poke_image_container = document.createElement("div");
    poke_image_container.classList.add("poke-image-container");

    // Use a 'for' loop to limit to 10 items
    for (let i = 0; i < results.length && i < 10; i++) {
        const pokemon = results[i];

        const pokeDiv = document.createElement("div");
        const img = document.createElement("img");
        img.src = pokemon.srcFront;

        pokeDiv.appendChild(img);
        poke_image_container.appendChild(pokeDiv);
    }

    indexContainer.appendChild(poke_image_container);
}



renderLoading();

(async function() {
    while(pokemonFetcher.loading) {
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    if (!pokemonFetcher.error) {
        renderPage(pokemonFetcher.results);
    }else{
        indexContainer.textContent ="Error fetching"
    }

})();

