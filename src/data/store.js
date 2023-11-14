// store.js
import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  endPoint: {
    // data: "data"
    // id: "id",
    // cardinfo: "cardinfo"
        name: 'name',
        archetype: 'archetype',
        image_url: 'image_url',
    // num 20
    // offset 0
  },
//   error:"",


  cardList: [],
});
