<template lang="pug">
.app#app
    BaseHeader
    .app__container
        IndexBanner
        IndexAbout
        section#products
            IndexSection(
                title="Наши продукты"
                desc="товары"
                count="2"
                index="1"
            )
                IndexProduct(
                    index="first"
                )
                IndexProductSecond(
                    index="second"
                    dark
                )
        section#buy
            IndexSection(
                title="Где купить"
                desc="Партнеры"
                count="2"
                index="2"
            )
                IndexPartners
    BaseFooter
</template>

<script setup>
import { gsap, ScrollTrigger } from "gsap/all";


setTimeout(() => {
    window.scrollTo(0, 0)
}, 1)
onMounted(() => {
    // let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    // if (isSafari) {
    //     document.body.classList.add('isSafari')
    // }

    ScrollTrigger.create({
        trigger: `.trigger-dark-bg`,
        start: 'top 30%',
        end: 'bottom 30%',
        onToggle: (self) => gsap.to('#app', {
            backgroundColor: self.isActive ? '#0E0E0E' : '#071D49'
        })
    });
})
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