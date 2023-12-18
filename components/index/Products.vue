<template lang="pug">
.index-products#index-products
    LayoutContainer
        .index-products__top
            a.index-products__button.loud(
                href="night"
            )
                span lunacy night
            a.index-products__button.night(
                href="loud"
            )
                span 
                    em lun
                    |acy loud
        .index-products__body
            .index-products__images
                .index-products__img.index-products__img11
                    NuxtImg(
                        v-mouse-parallax="{container: '.index-products', strength: 2.5}"
                        src="/images/index/img7.png"
                        width="600"
                        height="533"
                        format="webp"
                    )
                .index-products__img.index-products__img22
                    NuxtImg(
                        v-mouse-parallax="{container: '.index-products', strength: -2.5}"
                        src="/images/index/img8.png"
                        width="600"
                        height="602"
                        format="webp"
                    )
            .index-products__lines
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', duration: .6}"
                    ) стиль
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', duration: .6}"
                    ) стиль
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .1, duration: .6}"
                    ) дизайн
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .1, duration: .6}"
                    ) дизайн
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .2, duration: .6}"
                    ) качество
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .2, duration: .6}"
                    ) качество
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .3, duration: .6}"
                    ) экокожа
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .3, duration: .6}"
                    ) экокожа
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .4, duration: .6}"
                    ) громкость
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .4, duration: .6}"
                    ) громкость
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .5, duration: .6}"
                    ) микрофон
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .5, duration: .6}"
                    ) микрофон
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .6, duration: .6}"
                    ) удобство
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .6, duration: .6}"
                    ) удобство
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .7, duration: .6}"
                    ) гарантия
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .6, duration: .6}"
                    ) удобство
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .6, duration: .6}"
                    ) удобство
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .5, duration: .6}"
                    ) микрофон
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .5, duration: .6}"
                    ) микрофон
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .4, duration: .6}"
                    ) экокожа
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .4, duration: .6}"
                    ) экокожа
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .3, duration: .6}"
                    ) громкость
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .3, duration: .6}"
                    ) громкость
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .2, duration: .6}"
                    ) качество
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .2, duration: .6}"
                    ) качество
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .1, duration: .6}"
                    ) дизайн
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', startDelay: .1, duration: .6}"
                    ) дизайн
                .index-products__line
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', duration: .6}"
                    ) стиль
                    span(
                        v-word-to-span
                        v-text-char-anim="{trigger: '#index-products', duration: .6}"
                    ) стиль
</template>

<script setup>
const { $gsap } = useNuxtApp()

onMounted(() => {
    $gsap.timeline({
        scrollTrigger: {
            trigger: `#index-products`,
            start: "-=100%",
            end: "bottom 100%",
        },
    })
        .from('.index-products__img11', {
            opacity: 0,
            x: -500,
            ease: "ease"
        })
        .to('.index-products__img11', {
            opacity: 1,
            x: -252,
            duration: .8,
            delay: .8,
            ease: "ease"
        })
    $gsap.timeline({
        scrollTrigger: {
            trigger: `#index-products`,
            start: "-=100%",
            end: "bottom 100%",
        },
    })
        .from('.index-products__img22', {
            opacity: 0,
            x: 500,
            ease: "ease"
        })
        .to('.index-products__img22', {
            opacity: 1,
            x: 307,
            duration: .8,
            delay: .8,
            ease: "ease"
        })
    $gsap.timeline({
        scrollTrigger: {
            trigger: `#index-products`,
            start: "-=100%",
            end: "bottom 100%",
        },
    })
        .from('.index-products__button.loud', {
            opacity: 0,
            x: -20,
            rotate: 5,
            delay: 1.7,
            ease: "ease"
        })
        .to('.index-products__button.loud', {
            opacity: 1,
            x: 0,
            rotate: 0,
            duration: .8,
            ease: "ease"
        })
    $gsap.timeline({
        scrollTrigger: {
            trigger: `#index-products`,
            start: "-=100%",
            end: "bottom 100%",
        },
    })
        .from('.index-products__button.night', {
            opacity: 0,
            x: 20,
            rotate: -5,
            delay: 1.7,
            ease: "ease"
        })
        .to('.index-products__button.night', {
            opacity: 1,
            x: 0,
            rotate: 0,
            duration: .8,
            ease: "ease"
        })
})
</script>

<style lang="scss" scoped>
.index-products {
    overflow: hidden;
    .container {
        position: relative;
        &:before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: linear-gradient(90.01deg, #D9D9D9 42.42%, rgba(217, 217, 217, 0) 131.83%);
        }
    }
    &__body {
        position: relative;
        margin: 120px 0;
    }
    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 90px 0 -30px;
        position: relative;
        z-index: 10;
    }
    &__button {
        cursor: pointer;
        text-decoration: none;
        font-size: 22px;
        font-weight: 700;
        position: relative;
        display: flex;
        align-items: center;
        height: 60px;
        text-decoration: none;
        color: #B6B6B6;
        $button: &;
        &:before {
            content: '';
            display: block;
            width: 60px;
            height: 60px;
            background: #fff;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            z-index: 5;
            margin-top: -30px;
            mix-blend-mode: exclusion;
            transition: .3s ease;
        }
        span {
            position: relative;
            z-index: 2;
        }
        em {
            font-style: normal;
        }
        &.loud {
            &:hover {
                &:before {
                    transform: scale(1.2) translateX(-11px);
                }
            }
            &:before {
                right: -16px;
                // z-index: 1;
            }
            #{$button} {
                span {
                    color: #686868;
                }
            }
        }
        &.night {
            &:hover {
                &:before {
                    transform: scale(1.1) translateX(90px);
                }
            }
            em {
                // color: #000;
            }
            &:before {
                left: -26px;
            }
            #{$button} {
                span {
                    color: #686868;
                }
            }
        }
    }
    &__images {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
    &__img {
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        &:nth-child(1) {
            z-index: 2;
            transform: translateX(-500px) translateY(-110px);
            img {
                max-width: 600px;
            }
        }
        &:nth-child(2) {
            transform: translateX(500px) translateY(-128px);
            img {
                max-width: 600px;
            }
        }
        img {
            width: 100%;
            display: block;
            margin: auto;
        }
    }
    &__line {
        color: #3E3E3E;
        font-size: 34px;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        // margin: 3px 0;
        line-height: 34px;
        span {
            &:nth-child(2) {
                transform: scale(-1, 1);
            }
        }
        &:nth-child(2) {
            padding: 0 30px;
        }
        &:nth-child(3) {
            padding: 0 80px;
        }
        &:nth-child(4) {
            padding: 0 160px;
        }
        &:nth-child(5) {
            padding: 0 230px;
        }
        &:nth-child(6) {
            padding: 0 330px;
        }
        &:nth-child(7) {
            padding: 0 430px;
        }
        &:nth-child(8) {
            justify-content: center;
        }
        &:nth-child(9) {
            padding: 0 430px;
        }
        &:nth-child(10) {
            padding: 0 330px;
        }
        &:nth-child(11) {
            padding: 0 230px;
        }
        &:nth-child(12) {
            padding: 0 160px;
        }
        &:nth-child(13) {
            padding: 0 80px;
        }
        &:nth-child(14) {
            padding: 0 30px;
        }
    }
}
</style>