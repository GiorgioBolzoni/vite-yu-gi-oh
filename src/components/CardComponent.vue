<template>
    <div class="row">
        <div class="col-2">
            <figure>
                <img :src="card_images" alt="img">
            </figure>
            <h3>{{ name }}</h3>
            <div>{{ archetype }}</div>
        </div>
    </div>
</template>

<script>
import { store } from "../data/store";
export default {
    name: 'CardComponent',
    props:{
        card_images: String,
        name: String,
        archetype: String,
    },
    data(){
        return{
            store,
        }
    }
}

</script>

<style lang="scss" scoped></style>