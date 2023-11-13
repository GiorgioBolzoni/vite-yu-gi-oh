<template>
    <header class="container">
        <div class="d-flex align-items-center">
            <figure><img src="images/logo.com-426278.png" alt="logo" id="logo-img"></figure>
            <h1 class="ms-2">{{ title }}</h1>
        </div>
    </header>
</template>

<script>

export default {
    name: 'HeaderComponent',
    props: ['title']
}

</script>

<style lang="scss" scoped>

</style>