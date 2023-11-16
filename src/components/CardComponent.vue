<template>
    <div class="card">
      <div class="col-12 card-img text-center">
        <figure class="w-100">
          <img :src="card_images" alt="Card Image">
        </figure>
      </div>
  
      <div class="col-12 text-center">
        <h3>{{ name }}</h3>
      </div>
  
      <div class="col-12 text-center">
        <div>{{ archetype }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import { store } from "../data/store";
  
  export default {
    name: 'CardComponent',
    props: {
      card_images: String,
      name: String,
      archetype: String,
    },
    data() {
      return {
        store,
      };
    }
  }
  </script>
  
  <style lang="scss" scoped>
    .card {
      position: relative;
      height: 550px;
      background-color: #D48F38;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;
    }
  
    figure {
      position: relative;
      align-items: center;
      justify-content: center;
      text-align: center;
      vertical-align: top;
    }
  
    img {
      display: block;
      width: 100%;
    }
  
    h3 {
      color: white;
    }
  
    .card-img {
      margin-top: 0;
      padding: 0;
    }
  </style>
  