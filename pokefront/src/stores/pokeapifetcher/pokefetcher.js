//pokemonFetcher.js
const pokeNames = ["mew", "bulbasaur", "ivysaur", "venusaur", "charmander", "charizard", "squirtle", "wartortle", "Blastoise", "Ekans", "Arbok", "pikachu", "Raichu", "Vulpix", "zubat", "Golbat", "oddish", "gloom", "diglett", "Meowth", "paras", "venonat", "mankey", "primeape", "psyduck", "golduck", "horsea" ]

async function fetchPokemonData(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
            console.log(`${name} was not found`);
            throw new Error(`Network response was not ok`);
        }
        const pokemon = await response.json();
        //console.log("found:" + name);
        return {
            id: pokemon.id,
            srcFront: pokemon.sprites.front_default,
            srcBack: pokemon.sprites.back_default,
            name: pokemon.name.toUpperCase()
        };
    } catch (error) {
        //console.log("not found: " + name);
        console.log(error.message);
        return null;
    }
}

    

    // Fetch all Pokemon data
export async function fetchAllPokemons() {
    try {
        const promises = pokeNames.map(name => fetchPokemonData(name.toLowerCase()));
        const results = await Promise.all(promises);
        return results.filter((pokemon) => pokemon !== null);
    } catch (error) {
        console.error("Error fetching all Pokemon from Api: ", error.message);
    } 
}




