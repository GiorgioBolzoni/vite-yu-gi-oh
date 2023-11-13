// store.js
import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  endPoint: {
    character: "character",
    location: "location",
    episode: "episode",
  },
  characterList: [],
});