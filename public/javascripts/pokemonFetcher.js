//pokemonFetcher.js

class PokemonFetcher {
    constructor(pokeNames, waitTime = 3) {
        this.pokeNames = pokeNames;
        this.waitTime = waitTime;
        this.results = [];
        this.loading = true;
        this.error = false;
    }

    async fetchPokemonData(name) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            if (!response.ok) {
                console.log(`${name} was not found`);
                throw new Error(`Network response was not ok`);
            }
            const pokemon = await response.json();
            return {
                id: pokemon.id,
                srcFront: pokemon.sprites.front_default,
                srcBack: pokemon.sprites.back_default,
                name: pokemon.name.toUpperCase()
            };
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    // Delay function to simulate loading time
    waitSeconds(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    // Fetch all Pokemon data
    async fetchAllPokemons() {
        try {
            const promises = this.pokeNames.map(name => this.fetchPokemonData(name.toLowerCase()));
            this.results = await Promise.all(promises);
        } catch (err) {
            this.error = true;
            console.log("Error while fetching all Pokemons");
        } finally {
            this.loading = false;
            if (!this.loading && !this.error) {
                await this.waitSeconds(this.waitTime);
                console.log("Data has arrived.");
                return this.results;
            } else if (this.error) {
                console.log("There was an error.");
                return null;
            }
        }
    }
}

// Instantiate the class and fetch Pokemon data
const pokeNames = ["mew", "bulbasaur", "ivysaur", "venusaur", "charmander", "charizard", "squirtle", "wartortle", "Blastoise", "Ekans", "Arbok", "pikachu", "Raichu", "Vulpix", "zubat", "Golbat", "oddish", "gloom", "diglett", "Meowth", "paras", "venonat", "mankey", "primeape", "psyduck", "golduck", "horsea" ]
const WAIT_TIME = 3;

const pokemonFetcher = new PokemonFetcher(pokeNames, WAIT_TIME);

// This is the module syntax, function is created and immeadiatly called
(async () => {
    await pokemonFetcher.fetchAllPokemons();
})();

export default pokemonFetcher; // Export the instantiated object
