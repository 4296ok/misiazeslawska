<!-- layouts/default.vue -->
<template>
    <div class="layout">
      <SiteHeader />
      <main>
        <slot />  <!-- Ensure this slot is present to render the page content -->
      </main>
    </div>
  </template>
  
  <script setup>
  import SiteHeader from '~/components/SiteHeader.vue'
  </script>
  
  <style scoped>


  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  main {
    flex: 1;
  }
  </style>
  