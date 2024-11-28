// pokemonStore.js
import {defineStore} from "pinia";
import {fetchAllPokemons} from "./pokefetcher.js"

export const usePokemonStore = defineStore("pokemonStore", {
    state: () => ({
        pokeData: [],
        loading: false,
    }),
    actions: {
        async getPokeData() {
            if (this.pokeData.length === 0) {
                this.loading = true;
                try {
                    this.pokeData = await fetchAllPokemons();
                }catch (error){
                    console.error("Failed to fetch Pokemon pictures:", error);
                }finally{
                    this.loading = false;
                }
            }
        },
    },
});