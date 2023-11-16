<template>
    <HeaderComponent title="Yu-Gi-Oh Api"  />
    <div class="container">
      <SearchBar @filter-change="setParams" />
    </div>
    <div class="row mt-5">
      <main v-for="(card, index) in store.cardList" :key="index" class="col-2 p-3">
    <CardComponent 
      :card_images="card.card_images[0].image_url"
      :name="card.name" 
      :archetype="card.archetype" 
    />
  </main>
    </div>
</template>


<script>
import { store } from './data/store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import CardComponent from './components/CardComponent.vue';
import SearchBar from './components/SearchBar.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    CardComponent,
    SearchBar,
  },
  data() {
    return {
      store,

      params:{
        num: 20,
        offset: 0
      }
    }
  },
  methods: {
    setParams(search) {
      console.log(search);
      if (search) {
        this.params.archetype =  search.archetype
        
      } else {
        this.params = null;
      }

      this.getCards();
    },
    getCards() {
      const url = store.cardsUrl ;
      // + store.endPoint.card;
      axios.get(store.cardsUrl, {params: this.params}).then((response) => {
        store.cardList = response.data.data;
      })
      
    },
    getArchetype(){
      const archUrl = store.archetypeUrl;

      axios.get(store.archetypeUrl, {params: this.params}).then((response) => {
        store.archetypeList = response.data.data;
      })
    }

    
  },
  created() {
    this.getCards();
    this.getArchetype();


  }
}
</script>


<style lang="scss" scoped>

</style>