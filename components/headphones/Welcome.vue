<template lang="pug">
.loud-welcome
    LayoutContainer
        .loud-welcome__wrapper
            .loud-welcome__desc(
                v-word-to-span
                v-text-char-anim="{trigger: '.loud-welcome', duration: .8}"
            ) {{desc}}
            .loud-welcome__title(
                v-word-to-span
                v-text-char-anim="{trigger: '.loud-welcome', startDelay: .5, duration: .7}"
            ) {{title}}
            .loud-welcome__text(
                v-word-to-span
                v-text-char-anim="{trigger: '.loud-welcome', startDelay: 1, duration: .7}"
            ) {{text}}
            .loud-welcome__images
                .loud-welcome__img(
                    v-for="image, i of images"
                )
                    img(
                        :id="`loud-welcome-${i}`"
                        :src="image"
                    )
</template>

<script setup>
const props = defineProps({
    desc: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        images: {
            type: Array,
            default: () => []
        }
})

const { $gsap } = useNuxtApp()

onMounted(() => {
    props.images.forEach((el, i) => {
        const element = document.getElementById(`loud-welcome-${i}`)
        let height = 308
        let delay = 1.1
        if (i === 1) {
            height = 388
            delay = 1
        }
        $gsap.timeline({
            scrollTrigger: {
                trigger: `.loud-welcome`,
                start: "-=100%",
                end: "bottom 100%",
            },
        })
            .from(element, {
                height: 0,
                ease: "ease"
            })
            .to(element, {
                height: height,
                delay: delay,
                ease: "ease"
            })
    })
    
})
</script>

<style lang="scss" scoped>
.loud-welcome {
    text-align: center;
    &__desc {
        font-family: 'Inter';
        font-weight: 700;
        font-size: 80px;
        line-height: 100%;
        text-align: center;
        letter-spacing: -0.08em;
        text-transform: uppercase;
        color: #B6B6B6;
    }
    &__title {
        font-family: 'Inter';
        font-weight: 700;
        font-size: 186px;
        line-height: 100%;
        text-align: center;
        letter-spacing: -0.08em;
        text-transform: uppercase;
        color: #B6B6B6;
        margin: -20px 0;
    }
    &__text {
        font-style: normal;
        font-weight: 500;
        font-size: 80px;
        line-height: 100%;
        text-align: center;
        letter-spacing: -0.08em;
        text-transform: uppercase;
        color: #B6B6B6;
    }
    &__images {
        max-width: 900px;
        width: 100%;
        margin: 30px auto 0;
        display: flex;
    }
    &__img {
        max-width: 260px;
        width: 100%;
        flex: 1 1 260px;
        margin: 0 5px;
        height: 389px;
        img {
            display: block;
            width: 100%;
            height: 0px;
            object-fit: cover;
        }
        &:nth-child(2) {
            max-width: 360px;
            width: 100%;
        }
    }
}
</style>