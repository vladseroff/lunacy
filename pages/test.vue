<template lang="pug">
.app#app
    BaseHeader
    .app__container
        IndexBanner
        IndexSection(
            title="Наши продукты"
            desc="товары"
            count="2"
            index="1"
        )
            IndexProduct(
                index="first"
            )
    BaseFooter
</template>

<script setup>
setTimeout(() => {
    window.scrollTo(0, 0)
}, 1)
</script>

<style lang="scss" scoped>
.app {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background: #071D49 url('/images/noise.png') repeat left top;
    max-width: 100vw;
}
</style>