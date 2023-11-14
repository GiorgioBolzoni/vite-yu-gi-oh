<template>
    <HeaderComponent title="Yu-Gi-Oh Api"  />
    <div class="row mt-5">
      <main v-for="(card, index) in store.cardList" :key="index" class="col-3 p-3">
    <CardComponent 
      :img="card.card_images.image_url"
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
export default {
  name: 'App',
  components: {
    HeaderComponent,
    CardComponent,
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
    getCards() {
      const url = store.cardsUrl ;
      // + store.endPoint.card;
      axios.get(store.cardsUrl).then((response) => {
        store.cardList = response.data.data;
      })
      // .catch((error) => {
      //   console.log(error)
      //   this.store.error = error.message;
      // })
    }
  },
  created() {
    this.getCards();
  }
}
</script>


<style lang="scss" scoped>

</style>