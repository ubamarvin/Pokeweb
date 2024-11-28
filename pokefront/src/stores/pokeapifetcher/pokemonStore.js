// pokemonStore.js
import {defineStore} from "pinia";
import {fetchAllPokemon} from "./pokefetcheh.js"

export const usePokemonStore = defineStore("pokemon", {
    state: () => ({
        pokeData: [],
        loading: false,
    }),
    actions: {
        async getPokeData() {
            if (this.pokeData.length === 0) {
                this.loading = true;
                try {
                    this.pokedata = await fetchAllPokemon();
                }catch (error){
                    console.error("Failed to fetch Pokemon pictures:", error);
                }finally{
                    this.loading = false;
                }
            }
        },
    },
});