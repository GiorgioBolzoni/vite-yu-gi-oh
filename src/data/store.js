// store.js
import { reactive } from "vue";

export const store = reactive({
    cardsUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    // endPoint:{
    //     image_url: 'img',
    //     name: 'name',
    //     archetype: 'archetype'
    // }

//   error:"",


  cardList: [],
});
