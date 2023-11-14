<template lang="pug">
.partners
    .trigger-color.trigger-color-partner
    .partners__trigger
    .partners__wrapper
        .partners__item
            .partners__content
                
            .partners__planets
                .partners__planet
                    img(
                        src="/images/p6.svg"
                    )
                .partners__planet
                    img(
                        src="/images/p7.svg"
                    )
                .partners__planet
                    img(
                        src="/images/p8.svg"
                    )
                .partners__planet
                    img(
                        src="/images/p9.svg"
                    )
                .partners__planet
                    img(
                        src="/images/p10.svg"
                    )
            .partners__circles
                .partners__circle
                    img(
                        src="/images/p1.svg"
                    )
                .partners__circle
                    img(
                        src="/images/p2.svg"
                    )
                .partners__circle
                    img(
                        src="/images/p3.svg"
                    )
                .partners__circle
                    img(
                        src="/images/p4.svg"
                    )
                .partners__circle
                    img(
                        src="/images/p5.svg"
                    )
        .partners__item
            .partners__content
                .partners__logo
                    img(
                        src="/images/mvideo.svg"
                    )
                .partners__text Официальный партнер
            .partners__planets
                .partners__planet
                    img(
                        src="/images/p6.svg"
                    )
                .partners__planet
                    img(
                        src="/images/p7.svg"
                    )
                .partners__planet
                    img(
                        src="/images/p8.svg"
                    )
                .partners__planet
                    img(
                        src="/images/p9.svg"
                    )
                .partners__planet
                    img(
                        src="/images/p10.svg"
                    )
            .partners__circles
                .partners__circle
                    img(
                        src="/images/p1.svg"
                    )
                .partners__circle
                    img(
                        src="/images/p2.svg"
                    )
                .partners__circle
                    img(
                        src="/images/p3.svg"
                    )
                .partners__circle
                    img(
                        src="/images/p4.svg"
                    )
                .partners__circle
                    img(
                        src="/images/p5.svg"
                    )
</template>

<script setup>
const { $gsap } = useNuxtApp()

onMounted(() => {
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.trigger-color-partner`,
            scrub: true,
            start: "center center",
            end: "+=80%",
        },
    }).to('#app', {
        backgroundColor: '#071D49',
        transformOrigin: "center center", 
        ease: "none"
    })
})
</script>

<style lang="scss" scoped>
@keyframes rotation {
    0% {
        transform: translate3d(-50%, -50%, 0) rotate(0);
    }
    100% {
        transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
}

.partners {
    position: relative;
    padding: 80px 0 150px;
    $root: &;
    &__content {

    }
    &__logo {
        img {
            display: block;
            margin: 0 auto;
        }
    }
    &__text {
        font-family: "Cygre";
        font-weight: 300;
        font-size: 16px;
        text-align: center;
        margin-top: 25px;
    }
    &__trigger {
        position: absolute;
        top: -2000px;
        pointer-events: none;
    }
    &__wrapper {
        display: flex;
        margin: -10px;
    }
    &__item {
        flex: 1 1 1px;
        margin: 10px;
        position: relative;
        height: 690px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            #{$root} {
                &__circle {
                    &:nth-child(2) {
                        animation: rotation 200s linear infinite;
                    }
                    &:nth-child(3),
                    &:nth-child(4),
                    &:nth-child(5) {
                        opacity: 1;
                    }
                }
            }
        }
    }
    &__circles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    &__circle {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        transition: opacity .3s ease, transform .3s ease;
        &:nth-child(4) {
            opacity: 0;
            animation: rotation 40s linear infinite;
        }
        &:nth-child(3) {
            opacity: 0;
            animation: rotation 120s linear infinite backwards;
        }
        &:nth-child(5) {
            opacity: 0;
        }
    }
    &__planets {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    @keyframes planetSquare1 {
        0% {
            left: -0.5%;
            top: -0.7%;
        }
        25% {
            left: 99.4%;
            top: -0.7%;
        }
        50% {
            top: 99%;
            left: 99.4%;
        }
        75% {
            left: -0.4%;
            top: 99%;
        } 
        100% {
            left: -0.5%;
            top: -0.7%;
        }
    }
    &__planet {
        position: absolute;
        width: 7px;
        height: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            display: block;
        }
        &:nth-child(1) {
            animation: planetSquare1 50s infinite linear;
            animation-delay: -40s;
        }
        &:nth-child(2) {
            animation: planetSquare1 15s infinite linear;
            animation-delay: -10s;
        }
        &:nth-child(3) {
            animation: planetSquare1 25s infinite linear;
            animation-delay: -35s;
        }
        &:nth-child(4) {
            animation: planetSquare1 30s infinite linear;
            animation-delay: -2.5s;
        }
        &:nth-child(5) {
            animation: planetSquare1 50s infinite linear;
            animation-delay: -55s;
        }
    }
}
</style>