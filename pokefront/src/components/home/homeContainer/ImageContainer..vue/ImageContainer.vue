<template>
    <div>
      <img :src="src" class="img-fluid" alt="Pokemon image" />
    </div>
  </template>
  
  <script>
  export default {
    name: "ImageContainer",
    props: {
      src: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  </style>
  