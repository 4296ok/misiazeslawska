<template>
  <div class="contact-page">
    <div class="contact-sidebar">
      <!-- Categories Section -->
        <div class="placeholder">
           <br>
        </div>
        <a href="/" class="contact-link">{CONTACT}</a>
      </div>


      <!-- Contact Info Section -->
      <div class="contact-container">
        <div class="contact-info">
          <div class="info-column">
            <p>Misia Zeslawska 1997 {PL}<br>Currently based in The Hague {NL}<br><a href= "mailto: zeslawskam@gmail.com"> zeslawskam@gmail.com

</a></p>
          </div>
          <div class="info-column">
            <p>Education:<br>2025 MA Interior architecture, Royal Academy of Art, The Hague {NL}<br>2021 BA Architecture, Warsaw Faculty of Architecture, Warsaw {PL}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
/* Base styles */
.contact-page {
  padding: 20px;
}

.contact-link {
  display: block;
  text-decoration: none;
  color: black;
  font-weight: normal;
  margin-top: 10px;
}

.contact-link:hover {
  text-decoration: underline;
}

.contact-container {
  display: flex;
  flex: 1;
  justify-content: center; /* Center the contact info horizontally */
  align-items: center; /* Center the contact info vertically */
  min-height: 400px; /* Adjust as needed */
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  gap: 50px; /* Space between columns */
  justify-content: center; /* Center contact info horizontally */
}

.info-column {
  flex: 1;
  max-width: 1000px;
  line-height: 1;

}
</style>
