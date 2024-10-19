const indexContainer = document.querySelector(".index-container");
const WAIT_TIME = 3; // Wait for 3 seconds to show off loading screen

 async function fetchPokemonData(name) {
    let pokemon
    try {
        //this is a public api therefore me pushing this to the hub is not baka
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
            console.log(`${name} was not found`)
            throw new Error(`Network response was not ok`)
        }
        pokemon = await response.json()
        //console.log(pokemon.name)
        //console.log(pokemon.id)
        return {id: pokemon.id, src: pokemon.sprites.front_default, name: pokemon.name.toUpperCase()}
            
    } catch(error) {
        console.log(error.message);
        return null;             
        }
   
}

function waitSeconds(milliSeconds) {
    return new Promise(resolve => setTimeout(resolve, milliSeconds*1000))
}

const pokeNames = ["mew", "bulbasaur", "ivysaur", "venusaur", "charmander", "charizard", "squirtle", "wartortle", "Blastoise", "Ekans", "Arbok", "pikachu", "Raichu", "Vulpix", "zubat", "Golbat", "oddish", "gloom", "diglett", "Meowth", "paras", "venonat", "mankey", "primeape", "psyduck", "golduck", "horsea" ]
  //const pokeNames = ["mew", "bulbasaur", "ivysaur", "venusaur", "charmander", "charizard"]

let loading = true;
let error = false;
const fetchAllPokemons = async () => {
  try {
    const promises = pokeNames.map(name => fetchPokemonData(name.toLocaleLowerCase()));
    const results = await Promise.all(promises);
  } catch (err) {
    error = true;
    console.log("error while fetching all pokemons")
  } finally {
    loading = false;
    if (!loading && !error) {
        await waitSeconds(WAIT_TIME);
        console.log("Data has arrived.");
        indexContainer.textContent="";
        indexContainer.textContent="fuck";

    } else if (error) {
        console.log("There was an error.");
    }
  }
}
fetchAllPokemons();
////




// as long as the screen loads show a spinning div 
if (loading) {
    console.log("loading");
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


  if (error) {
    console.log("error")
  }

  if(!loading) {
    console.log("data has arrived")
  }