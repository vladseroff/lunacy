<template lang="pug">
.index-welcome
    LayoutContainer
        .index-welcome__img
            img.welcome-img-index(
                src="/images/index/bg1.png"
            )
            img.welcome-img-index2(
                src="/images/index/bg2.png"
            )
        .index-welcome__logo(
            v-word-to-span="'lunacy'"
            v-text-char-anim="{trigger: '.index-welcome', startDelay: .5, duration: 1.5}"
        )
            //- img(
            //-     src="/images/index/lunacy.svg"
            //- )
        .index-welcome__text(
            v-word-to-span="'игровые девайсы'"
            v-text-char-anim="{trigger: '.index-welcome', startDelay: .5, duration: .5}"
        ) 
        UiButton.index-welcome__btn(
            @click="scrollTo('index-partner')"
        ) купить
</template>

<script setup>
const { $gsap } = useNuxtApp()

onMounted(() => {
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.index-welcome`,
            start: "-=100%",
            end: "bottom 100%",
        },
    })
        .from(`.welcome-img-index`, {
            height: 0,
            ease: "ease"
        })
        .to(`.welcome-img-index`, {
            height: 620,
            ease: "ease"
        })
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.index-welcome`,
            start: "-=100%",
            end: "bottom 100%",
        },
    })
        .from(`.index-welcome__btn`, {
            opacity: 0,
            ease: "ease"
        })
        .to(`.index-welcome__btn`, {
            opacity: 1,
            delay: 1,
            ease: "ease"
        })
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.index-welcome`,
            start: "-=0%",
            end: "+=450%",
            scrub: 2
        },
    })
        .from(`.index-welcome__img`, {
            scale: 0.8,
            ease: "ease"
        })
        .to(`.index-welcome__img`, {
            scale: 1,
            ease: "ease"
        })
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.index-welcome`,
            scrub: 2,
            start: "-=60%",
            end: "bottom 100%",
        },
    })
        .from(`.welcome-img-index2`, {
            height: 0,
            ease: "ease"
        })
        .to(`.welcome-img-index2`, {
            height: 620,
            ease: "ease"
        })
})
</script>

<style lang="scss" scoped>
.index-welcome {
    margin: 130px 0;
    height: 2500px;
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: sticky;
        top: 130px;
    }
    &__img {
        max-width: 460px;
        margin: 0 auto;
        width: 100%;
        height: 620px;
        display: flex;
        justify-content: center;
        position: relative;
        overflow: hidden;
        // z-index: 6;
        // mix-blend-mode: exclusion;
        img {
            width: 460px;
            display: block;
            object-fit: cover;
            height: 0px;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    &__btn {
        opacity: 0;
    }
    &__logo {
        width: 100%;
        margin-top: -415px;
        margin-bottom: -20px;
        margin-left: -40px;
        position: relative;
        z-index: 2;
        // opacity: 0;
        font-size: 410px;
        text-align: center;
        color: #B6B6B6;
        font-weight: 500;
        letter-spacing: -0.1em;
        img {
            display: block;
            width: 100%;
        }
    }
    &__text {
        font-size: 34px;
        text-align: center;
        margin-bottom: 20px;
        position: relative;
        z-index: 2;
    }
}
</style>