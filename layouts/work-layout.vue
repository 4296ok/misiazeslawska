<template>
  <div class="work-layout">
    <!-- Main Container -->
    <div class="main-content">
      <!-- Image Gallery at the Top -->
      <div class="gallery">
        <div v-for="(image, index) in images" :key="image" class="gallery-item">
          <img
            :src="image"
            :alt="`${workTitle} image`"
            :class="{ 'enlarged': selectedImageIndex === index }"
            @click="toggleImageEnlarge(index)"
          />
        </div>
      </div>

      <!-- Content Area with Two Columns Below the Gallery -->
      <div class="content-columns">
        <!-- Left Column -->
        <div class="column left-column">
          <p class="bold">{{ workTitle }}</p>
          <p><strong></strong> {{ workLocation }}</p>
          <p>{{ workDescription }}</p>
        </div>

        <!-- Right Column -->
        <div class="column right-column">
          <slot name="additionalContent"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

defineProps({
  workTitle: String,
  workLocation: String,
  workDescription: String,
  images: Array,
});

// Track the index of the selected/enlarged image
const selectedImageIndex = ref(null);

// Toggle the image enlargement
const toggleImageEnlarge = (index) => {
  if (selectedImageIndex.value === index) {
    // If the same image is clicked again, reset (shrink)
    selectedImageIndex.value = null;
  } else {
    // Otherwise, enlarge the clicked image
    selectedImageIndex.value = index;
  }
};

// Watch for changes in the enlarged image state
watch(selectedImageIndex, (newValue) => {
  if (newValue !== null) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});
</script>


<style scoped>
.work-layout {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px); /* Ensure the container takes the full height of the viewport */
}

.main-content {
  display: flex;
  flex-direction: column;
  flex: 1; /* Allows this container to grow and push content-columns to the bottom */
}

.bold {
  font-weight: 900;
}

.gallery {
  display: flex;
  overflow-x: auto; /* Enables horizontal scrolling */
  height: 500px; /* Fixed height for the gallery */
  padding: 0; /* Removed padding to prevent unnecessary space */
  box-sizing: border-box; /* Ensure padding/border is included in the height */
  white-space: nowrap; /* Prevent line breaks between images */
  overflow-y: hidden; /* Prevent vertical scrolling */
}

.gallery-item {
  display: inline-block; /* Align items horizontally */
  height: 100%;
  margin-right: 10px; /* Space between images */
}

.gallery-item img {
  height: 100%;
  width: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Ensure images cover their container while maintaining aspect ratio */
  display: block; /* Prevent default image margins */
  cursor: pointer;
  transition: transform 0.3s ease; /* Smooth transition for enlargement */
}

/* Prevent scrolling when an image is enlarged */
.no-scroll {
  overflow: hidden;
}

/* Enlarged image styles */
.gallery-item img.enlarged {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: contain; /* Maintain aspect ratio, fit within the viewport */
  z-index: 1000; /* Ensure it's on top of everything */
}

.gallery::-webkit-scrollbar {
  display: none; /* Hide scrollbar in Chrome, Safari, and Opera */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .gallery {
    height: 300px; /* Adjusted height for smaller screens */
  }

  .gallery-item {
    margin-right: 5px; /* Reduced space between images */
  }
}

.content-columns {
  display: flex;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
}

.column {
  flex: 1;
}

.left-column p {
  margin: 0;
}

/* Stack content-columns on very small screens */
@media (max-width: 480px) {
  .content-columns {
    flex-direction: column; /* Stack columns vertically */
  }
}
</style>
