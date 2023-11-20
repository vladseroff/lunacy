<template lang="pug">
.partners
    .partners__wrapper
        .partners__box.partners__box-1
            //- .partners__top
            //-     .partners__logo
            //-         img(
            //-             src="/images/mvideo.svg"
            //-         )
            //-     .partners__description Официальный партнер
            .partners__item
                a.partners__content(
                    href="#"
                )
                    span купить в мвидео
                    .partners__logo
                        img(
                            src="/images/mvideo.svg"
                        )
                    .partners__description Официальный партнер
                .partners__circles
                    .partners__circles-zoom
                        .partners__circle
                            img(
                                src="/images/cp3.svg"
                            )
                        .partners__circle
                            img(
                                src="/images/cp4.svg"
                            )
                        
                    .partners__circles-wrapper
                        .partners__circle
                            img(
                                src="/images/cp2.svg"
                            )
                        .partners__circle
                            img(
                                src="/images/cp1.svg"
                            )
                        .partners__circle
                            img(
                                src="/images/cp5.svg"
                            )
        .partners__box.partners__box-2
            //- .partners__top
            //-     .partners__logo
            //-         img(
            //-             src="/images/ozon.svg"
            //-         )
            //-     .partners__description Официальный партнер
            .partners__item
                a.partners__content(
                    href="#"
                )
                    span купить в озоне
                    .partners__logo
                        img(
                            src="/images/ozon.svg"
                        )
                    .partners__description Официальный партнер
                .partners__circles
                    .partners__circles-zoom
                        .partners__circle
                            img(
                                src="/images/cp3.svg"
                            )
                        .partners__circle
                            img(
                                src="/images/cp4.svg"
                            )
                        
                    .partners__circles-wrapper
                        .partners__circle
                            img(
                                src="/images/cp2.svg"
                            )
                        .partners__circle
                            img(
                                src="/images/cp1.svg"
                            )
                        .partners__circle
                            img(
                                src="/images/cp5.svg"
                            )
</template>

<script setup>
const { $gsap } = useNuxtApp()

onMounted(() => {
    // $gsap.fromTo(".partners__box-1", {
    //     scrollTrigger: {
    //         trigger: ".partners__wrapper",
    //         start: "10% bottom",
    //     },
    //     x: 0,
    //     y: 1000,
    //     scale: 1.5,
    //     transformOrigin: "center center", 
    //     ease: "none"
    // }, {
    //     scrollTrigger: {
    //         trigger: ".partners__wrapper",
    //         start: "10% bottom",
    //     },
    //     x: 0,
    //     y: 0,
    //     scale: 1,
    //     transformOrigin: "center center", 
    //     ease: "none"
    // })
    // $gsap.timeline({
    //     scrollTrigger: {
    //         trigger: `.partners__wrapper`,
    //         start: "top 20%",
    //         end: "+=100%",
    //     },
    // })
    //     .from(`.partners__box-1`, {
    //         x: 0,
    //         y: 1000,
    //         scale: 1.5,
    //         transformOrigin: "center center", 
    //         ease: "none"
    //     })
    //     .to(`.partners__box-1`, {
    //         x: 0,
    //         y: 0,
    //         scale: 1,
    //         transformOrigin: "center center", 
    //         ease: "none"
    //     })
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
        width: 220px;
        height: 220px;
        background: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: 'Open Sans';
        font-style: italic;
        font-weight: 600;
        font-size: 16px;
        text-transform: uppercase;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0) scale(.8);
        z-index: 3;
        cursor: pointer;
        color: #fff;
        text-decoration: none;
        transition: .4s ease;
        span {
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: .4s ease;
        }
    }
    &__top {
        margin-bottom: 40px;
    }
    &__logo {
        transition: .4s ease;
        img {
            display: block;
            margin: 0 auto;
        }
    }
    &__description {
        text-align: center;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 0.02em;
        color: var(--color-grey);
        margin-top: 20px;
        transition: .4s ease;
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
    &__box {
        margin: 10px;
        flex: 1 1 1px;
    }
    &__item {
        flex: 1 1 1px;
        position: relative;
        height: 690px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            #{$root} {
                &__circles {
                    &-zoom {
                        transform: none;
                        opacity: 1;
                        #{$root} {
                            &__circle {
                                
                            }
                        }
                    }
                    &-wrapper {
                        #{$root} {
                            &__circle {
                                &:nth-child(1) {
                                    transform: translate3d(-50%, -50%, 0) scale(1.6)
                                }
                                &:nth-child(2) {
                                    opacity: 0;
                                }
                                &:nth-child(3) {
                                    opacity: 1;
                                }
                            }
                        }
                    }
                }
                &__content {
                    background: #fff;
                    color: #000;
                    transform: translate3d(-50%, -50%, 0) scale(1);
                    span {
                        opacity: 1;
                    }
                    #{$root} {
                        &__logo {
                            opacity: 0;
                        }
                        &__description {
                            opacity: 0;
                        }
                    }
                }
                &__circle {
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
        &-zoom {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: scale(.8);
            opacity: 0;
            transition: .4s ease;
            #{$root} {
                &__circle {
                    &:nth-child(1) {
                        animation: rotation 30s linear infinite;
                    }
                    &:nth-child(2) {
                        animation: rotation 100s linear infinite;
                    }
                }
            }
        }
        &-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            #{$root} {
                &__circle {
                    &:nth-child(2),
                    &:nth-child(3) {
                        animation: rotation 100s linear infinite;
                    }
                    &:nth-child(3) {
                        opacity: 0;
                    }
                }
            }
        }
    }
    &__circle {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        transform-origin: 50% 50%;
        transition: opacity .3s ease, transform .3s ease;
        img {
            display: block;
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