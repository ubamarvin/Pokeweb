
<script setup>
import { RouterLink, RouterView } from 'vue-router'
/**Fetching and Storing pokeData globally
 * Making it available across components and modules
 * Fetching at Top Component because all sub-comp are dependent on it
 */
import { usePokemonStore } from '../../stores/pokeapifetcher/pokemonStore.js';
const pokemonStore = usePokemonStore();
pokemonStore.getPokeData()
</script>
<template>
    <header>
      <div class="wrapper">
        <button class="btn btn-primary hamburger-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
          <span class="me-2">☰</span> 
        </button>
  
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
          <div class="offcanvas-header">
            <h5 id="offcanvasMenuLabel">PokewebApp</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="nav flex-column">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/tui">Tui</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/gui">WebGui</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
      <RouterView class ="Content"/>
  </template>
  <style>

.Content {
    flex: 1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>

