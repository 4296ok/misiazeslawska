<template>
    <a href="/contact" class="contact-link">{CONTACT}</a>
  </template>
  
  <style scoped>
  .contact-link {
    display: block;
    text-decoration: none;
    color: black;
    font-weight: normal;
    margin-top: 20px; /* Space between categories and CONTACT link */
    transition: font-weight 0.3s, text-decoration 0.3s;
  }
  
  .contact-link:hover {
    text-decoration: underline;
  }
  </style>
  