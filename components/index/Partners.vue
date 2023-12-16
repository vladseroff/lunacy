<template lang="pug">
.index-partner#index-partner
    LayoutContainer
        .index-partner__top где купить
        .index-partner__body
            .index-partner__box.index-partner__box1(
                @click="clickOzon"
            )
                .index-partner__box-wrapper
                    .index-partner__img
                        img(
                            src="/images/index/ozon.svg"
                        )
                    .index-partner__text Официальный партнер
            .index-partner__box.index-partner__box2(
                @click="clickMvideo"
            )
                .index-partner__box-wrapper
                    .index-partner__img
                        img(
                            src="/images/index/mvideo.svg"
                        )
                    .index-partner__text Официальный партнер
</template>

<script setup>
const { reachGoal } = useYandexMetrika();

const { $gsap } = useNuxtApp()

onMounted(() => {
    $gsap.timeline({
        scrollTrigger: {
            trigger: `#index-partner`,
            start: "-=200%",
            end: "bottom 100%",
        },
    })
        .from('.index-partner__box1', {
            height: 0,
            ease: "ease"
        })
        .to('.index-partner__box1', {
            height: 300,
            duration: .5,
            ease: "ease"
        })
    $gsap.timeline({
        scrollTrigger: {
            trigger: `#index-partner`,
            start: "-=200%",
            end: "bottom 100%",
        },
    })
        .from('.index-partner__box2', {
            height: 0,
            ease: "ease"
        })
        .to('.index-partner__box2', {
            height: 300,
            duration: .5,
            ease: "ease"
        })
})

const clickMvideo = () => {
    reachGoal('click-mvideo')
    window.open('https://www.mvideo.ru/promo/novinka-lunacy', '_blank') 
}

const clickOzon = () => {
    reachGoal('click-ozon')
    window.open('https://www.ozon.ru/highlight/lunacy-1251855/', '_blank')
}
</script>

<style lang="scss" scoped>
.index-partner {
    margin: 180px 0;
    &__top {
        text-align: center;
        font-size: 34px;
        font-weight: 500;
        color: #B6B6B6;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &:before,
        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            background: url('/images/index/ic1.svg') center center no-repeat;
            width: 9px;
            height: 100%;
        }
        &:before {
            left: 0;
        }
        &:after {
            right: 0;
            transform: scale(-1, 1)
        }
    }
    &__body {
        display: flex;
        justify-content: center;
        margin-top: 40px;
        height: 300px;
    }
    &__box {
        max-width: 292px;
        height: 0px;
        flex: 1 1 1px;
        background: #2B2B2B;
        margin: 5px;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        overflow: hidden;
        &-wrapper {
            height: 300px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
    &__img {
        img {
            display: block;
            max-width: 100%;
        }
    }
    &__text {
        font-size: 14px;
        color: #fff;
        margin-top: 10px;
    }
}
</style>