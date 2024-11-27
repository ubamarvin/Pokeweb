
<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
  
    <RouterView />
  </template>