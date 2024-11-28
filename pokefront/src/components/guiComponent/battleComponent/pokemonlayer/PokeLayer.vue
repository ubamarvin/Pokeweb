<script setup>

import ImageContainer from './row/ImageContainer.vue';
import StatusComponent from './row/StatusComponent.vue';

 
</script>

<template>
    <div class="poke-layer">
        <div class="top-row">
            <StatusComponent class="status status-op"  /> 
            <ImageContainer class="op-image-box" img-id="op-pk"/>
        </div>
        <div class="bot-row">
            <ImageContainer class="pl-image-box" img-id="pl-pk"/>
            <StatusComponent class="status status-pl" /> 
        </div>
    </div>
</template>