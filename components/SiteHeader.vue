<!-- components/SiteHeader.vue -->
<template>
  <header class="site-header">
    <nuxt-link to ="/"><div class="site-title"><p class="bold">MISIA ZESŁAWSKA</p></div></nuxt-link>
  </header>
</template>

<style scoped>
.site-header {
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
}

.site-title {
  font-size: 1rem;
  font-weight: 900;

}

.site-nav a {
  font-size: 1rem;
}



</style>
