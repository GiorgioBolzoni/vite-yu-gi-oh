<template>
    <div class="row">
        <div class="col-2">
            <figure><img :src="img" :alt="img"></figure>
            <h3>{{ name }}</h3>
            <h4>{{ archetype }}</h4>
        </div>
    </div>
</template>

<script>
import { store } from "../data/store";
export default {
    name: 'CardComponent',
    props:{
        img: String,
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