<template lang="pug">
.app
    BaseHeader
    .app__container
        IndexWelcome
        IndexAbout
        IndexProduct
        IndexProductSecond
        IndexProducts
        IndexText
        IndexPartners
    BaseFooter
</template>

<script setup>
onMounted(() => {
    nextTick(() => {
        if (process?.cleint) {
            window.scrollTo(0, 0)
        }
    })
})
</script>

<style lang="scss" scoped>
.app {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    min-width: 1230px;
}
.index {
    
}
</style>