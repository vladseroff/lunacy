<template lang="pug">
.index-product.index-product-second
    LayoutContainer
        .index-product__container
            .index-product__wrapper
                .index-product__box
                    
                .index-product__images
                    .index-product__title ( lunacy night )
                    .index-product__images-wrapper
                        .index-product__img
                            NuxtImg(
                                src="/images/index/img4.png"
                                width="387"
                                height="487"
                                format="webp"
                            )
                        .index-product__img.index-product__img22
                            NuxtImg(
                                src="/images/index/img5.png"
                                format="webp"
                            )
                        .index-product__img.index-product__img33
                            NuxtImg(
                                src="/images/index/img6.png"
                                format="webp"
                            )
                .index-product__box
                    .index-product__text(
                        v-word-to-span="'никаких лишних'"
                        v-text-char-anim="{}"
                    )
                    .index-product__text(
                        v-word-to-span="'шумов, '"
                        v-text-char-anim="{startDelay: .4}"
                    )
                    .index-product__text(
                        v-word-to-span="'только чистый звук'"
                        v-text-char-anim="{startDelay: .8}"
                    )
                    .index-product__text(
                        v-word-to-span="'динамиков и'"
                        v-text-char-anim="{startDelay: 1}"
                    )
                    .index-product__text(
                        v-word-to-span="'микрофона'"
                        v-text-char-anim="{startDelay: 1.3}"
                    )
                    .index-product__desc
                        .index-product__desc-line(
                            v-word-to-span="'В погоне за идеальным'"
                            v-text-char-anim="{startDelay: .4}"
                        )
                        .index-product__desc-line(
                            v-word-to-span="'дизайном мы не забыли о'"
                            v-text-char-anim="{startDelay: .4}"
                        )
                        .index-product__desc-line(
                            v-word-to-span="'качестве, надежности и'"
                            v-text-char-anim="{startDelay: .4}"
                        )
                        .index-product__desc-line(
                            v-word-to-span="'технологичности.'"
                            v-text-char-anim="{startDelay: .4}"
                        )
            .index-product__bottom
                UiButton(
                    @click="scrollTo('index-partner')"
                ) купить
                a(
                    href="night"
                ) подробнее
</template>

<script setup>
const { $gsap } = useNuxtApp()

onMounted(() => {
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.index-product-second`,
            scrub: 0.5,
            start: "-=100%",
            end: "+=80%",
        },
    })
        .from(`.index-product__img22`, {
            x: 0,
            ease: "ease"
        })
        .to(`.index-product__img22`, {
            x: -250,
            ease: "ease"
        })
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.index-product-second`,
            scrub: 0.5,
            start: "-=100%",
            end: "+=80%",
        },
    })
        .from(`.index-product__img33`, {
            x: 0,
            ease: "ease"
        })
        .to(`.index-product__img33`, {
            x: -430,
            ease: "ease"
        })
})
</script>

<style lang="scss" scoped>
.index-product {
    .container {
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        &:before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: linear-gradient(90.01deg, #D9D9D9 42.42%, rgba(217, 217, 217, 0) 131.83%);
        }
    }
    &__container {
        padding: 55px 0;
        width: 100%;
    }
    &__bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        a {
            color: #686868;
            font-size: 18px;
            text-decoration: none;
            cursor: pointer;
            display: block;
            margin-top: 10px;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    &__wrapper {
        display: flex;
        justify-content: center;
    }
    &__text {
        font-size: 30px;
        font-weight: 500;
        white-space: nowrap;
        line-height: 90%;
        &:nth-child(3) {
            padding-left: 50px;
        }
        &:nth-child(4) {
            padding-left: 25px;
        }
        &:nth-child(5) {
            padding-left: 80px;
        }
    }
    &__desc {
        color: #686868;
        font-size: 20px;
        font-weight: 500;
        padding-left: 25px;
        margin-top: 20px;
        &-line {
            &:nth-child(1) {
                padding-left: 56px;
            }
        }
    }
    &__images {
        max-width: 459px;
        width: 100%;
        flex: none;
        padding: 30px 36px;
        position: relative;
        height: 646px;
        margin: 0 15px;
        &-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
    }
    &__img {
        position: absolute;
        background: #686868;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding: 100px 36px 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 4;
        transform-origin: top center;
        &:before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: #000;
            z-index: 11;
            opacity: 0;
        }
        &:nth-child(2) {
            z-index: 3;
            left: 0;
            transform: scale(.6);
            background: #494949;
            padding: 30px 20px 30px;
            &:before {
                opacity: .2;
            }
        }
        &:nth-child(3) {
            z-index: 2;
            left: 0;
            transform: scale(.4);
            background: #343434;
            padding: 30px 20px 30px;
            &:before {
                opacity: .3;
            }
        }
        img {
            width: 100%;
            display: block;
            z-index: 10;
            position: relative;
        }
    }
    &__title {
        text-align: center;
        color: #B6B6B6;
        font-size: 50px;
        font-weight: 500;
        position: absolute;
        top: 30px;
        left: 0;
        width: 100%;
        z-index: 5;
        letter-spacing: -0.06em;
    }
    &__box {
        flex: 1 1 1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>