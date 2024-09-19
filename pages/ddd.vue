<template>
    <div class="index-page">
      <div class="categories-projects-container">
        <!-- Categories Section -->
        <div class="categories">
          <div class="categories-links">
            <span
              :class="{'small-highlighted': isHighlighted('small')}"
              @mouseover="highlightCategory('small')"
              @mouseleave="clearHighlight"
              id="small"
            >
              {SMALL}
            </span>
            <span
              :class="{'medium-highlighted': isHighlighted('medium')}"
              @mouseover="highlightCategory('medium')"
              @mouseleave="clearHighlight"
              id="medium"
            >
              {MEDIUM}
            </span>
            <span
              :class="{'large-highlighted': isHighlighted('large')}"
              @mouseover="highlightCategory('large')"
              @mouseleave="clearHighlight"
              id="large"
            >
              {LARGE}
            </span>
          </div>
          <a href="/contact" class="contact-link">{CONTACT}</a>
        </div>
  
        <!-- Projects Section -->
        <div class="projects-container">
          <div class="projects">
            <nuxt-link
              :class="getClass('large')"
              @mouseover="highlightCategory('large')"
              @mouseleave="clearHighlight"
              to="/pizzaiolo"
            >
              PIZZAIOLO PAWILONY
            </nuxt-link>
            <nuxt-link
              :class="getClass('medium')"
              @mouseover="highlightCategory('medium')"
              @mouseleave="clearHighlight"
              to="/kujkoxbush"
            >
              KUJKO X BUSH
            </nuxt-link>
            <div class="line-break"></div>
            <nuxt-link
              :class="getClass('medium')"
              @mouseover="highlightCategory('medium')"
              @mouseleave="clearHighlight"
              to="/coolcat"
            >
              THE COOL CAT
            </nuxt-link>
            <nuxt-link
              :class="getClass('small')"
              @mouseover="highlightCategory('small')"
              @mouseleave="clearHighlight"
              to="/houseofphobia"
            >
              THE HOUSE OF PHOBIA
            </nuxt-link>
            <div class="line-break"></div>
            <nuxt-link
              :class="getClass('medium')"
              @mouseover="highlightCategory('medium')"
              @mouseleave="clearHighlight"
              to="/kujko"
            >
              KUJKO NAIL BAR
            </nuxt-link>
            <nuxt-link
              :class="getClass('large')"
              @mouseover="highlightCategory('large')"
              @mouseleave="clearHighlight"
              to="/debki"
            >
              HOLIDAY HOUSE IN DĘBKI
            </nuxt-link>
            <div class="line-break"></div>
            <nuxt-link
              :class="getClass('small')"
              @mouseover="highlightCategory('small')"
              @mouseleave="clearHighlight"
              to="/green"
            >
              SALEM GREEN RIETVELD FREESTYLE
            </nuxt-link>
            <nuxt-link
              :class="getClass('medium')"
              @mouseover="highlightCategory('medium')"
              @mouseleave="clearHighlight"
              to="/negativespace"
            >
              THE NEGATIVE SPACE
            </nuxt-link>
            <div class="line-break"></div>
            <nuxt-link
              :class="getClass('large')"
              @mouseover="highlightCategory('large')"
              @mouseleave="clearHighlight"
              to="/moodforwood"
            >
              ANGLER SPOT MOOD FOR WOOD
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const highlightedCategory = ref('');
  
  function highlightCategory(category) {
    highlightedCategory.value = category;
  }
  
  function clearHighlight() {
    highlightedCategory.value = '';
  }
  
  function getClass(category) {
    return highlightedCategory.value === category ? `${category}-highlighted` : '';
  }
  
  function isHighlighted(category) {
    return highlightedCategory.value === category;
  }
  </script>
  
  <style scoped>
  /* Base styles */
  .index-page {
    padding: 20px;
  }
  
  .categories-projects-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .categories {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }
  
  .categories-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }
  
  .categories span {
    display: inline-block;
    text-decoration: none;
    font-weight: normal;
  }
  
  .categories span:hover {
    font-weight: normal;
    color: #000;
  }
  
  .contact-link {
    display: block;
    text-decoration: none;
    color: black;
    font-weight: normal;
    margin-top: 10px;
    transition: font-weight 0.3s;
  }
  
  .contact-link:hover {
    text-decoration: underline;
  }
  
  .projects-container {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    min-height: 400px;
  }
  
  .projects {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    line-height: 2.5;
  }
  
  .projects a {
    margin: 0 15px;
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    color: black;
    transition: color 0.3s, text-decoration 0.3s;
  }
  
  .projects a:hover {
    font-weight: bold;
    text-decoration: underline;
  }
  
  .line-break {
    flex-basis: 100%;
    height: 0;
    width: 0;
  }
  
  /* Highlight classes for different categories */
  #small:hover {
    color: #31B1E9;
  }
  
  #medium:hover {
    color: #FFD149;
  }
  
  #large:hover {
    color: red;
  }
  
  .small-highlighted,
  .projects a.small-highlighted {
    color: #31B1E9;
  }
  
  .medium-highlighted,
  .projects a.medium-highlighted {
    color: #FFD149;
  }
  
  .large-highlighted,
  .projects a.large-highlighted {
    color: red;
  }
  
  /* Responsive styles for small screens */
  @media (max-width: 768px) {
    .categories-projects-container {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .projects-container {
      margin-top: 20px;
    }
  
    .projects {
      flex-direction: column;
      align-items: flex-start;
      line-height: 0.5;
    }
  
    .projects a {
      margin: 5px 0;
    }
  
    .line-break {
      display: none;
    }
  }
  </style>
  