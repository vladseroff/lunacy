<template lang="pug">
.app#app
    BaseHeader
    .app__container
        IndexBanner
        IndexSection(
            title="Наши продукты"
            desc="товары"
            count="2"
        )
            IndexProduct(
                index="first"
            )
            IndexProductSecond(
                index="second"
                dark
            )
            //- IndexProductSecond
    BaseFooter
</template>

<script setup>
// onMounted(() => {
//     let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
//     if (isSafari) {
//         document.body.classList.add('isSafari')
//     }
// })
</script>

<style lang="scss" scoped>
.app {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background: #071D49 url('/images/noise.png') repeat left top;
}
</style>