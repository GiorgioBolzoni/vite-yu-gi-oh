<template>
    <div>
      <select name="searchbar" id="searchbar" v-model="textSearch" @change="passData">
        <option value="" selected>All</option>
        <option value="Blue-Eyes">Blue-Eyes</option>
        <option value="Abyss Script">Abyss Script</option>
        <option value="Alien">Alien</option>
        <option value="-Eyes Dragon">-Eyes Dragon</option>
        <option value="Assault Mode">Assault Mode</option>
        <option value="Barbaros">Barbaros</option>
        <option value="Bonding">Bonding</option>
        <option value="Bystial">Bystial</option>
        <option value="Cataclysmic">Cataclysmic</option>
        <option value="Magician">Magician</option>
        <option value="Malefic">Malefic</option>
        <option value="Red-Eyes">Red-Eyes</option>
        <option value="Vampire">Vampire</option>
        <option value="">...</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        textSearch: '',
      };
    },
    methods: {
      passData() {
        this.$emit('filter-change', { archetype: this.textSearch });
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>

  </style>
  