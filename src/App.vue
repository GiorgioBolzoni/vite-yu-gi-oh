<template>
    <HeaderComponent title="Yu-Gi-Oh Api"  />
    <main v-for="(card, index) in store.cardList" :key="card.id" class="col-3 p-3">
    <CardComponent 
      :img="card.image_url_small"
      :name="card.name" 
      :archetype="card.archetype" 
    />
  </main>
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
        num:20 ,
        offset: 0
      }
    }
  },
  methods: {
    getCards() {
      const url = store.apiUrl + store.endPoint.card;
      axios.get(url).then((response) => {
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