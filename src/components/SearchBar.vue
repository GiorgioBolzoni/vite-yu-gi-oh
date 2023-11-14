<template>
    <div>
        <select name="searchbar" id="searchbar" v-model="textSearch" @change="passData">
            <option value="" selected>All</option>
            <option value="">-Eyes Dragon</option>
            <option value="">Abyss Script</option>
            <option value="">Alien</option>
            <option value="">Assault Mode</option>
            <option value="">Barbaros</option>
            <option value="">Blue-Eyes</option>
            
        </select>
    </div>
</template>

<script>

export default {
    name: 'SearchBar',
    data() {
        return {
            textSearch: ''
        }
    },
    methods: {
        passData() {
            this.$emit('filterChange', this.textSearch);
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>