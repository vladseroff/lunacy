<template lang="pug">
.headphones-microphone
    LayoutContainer
        .headphones-microphone__wrapper
            .headphones-microphone__text
                .headphones-microphone__text-line(
                    v-for="line, i of text"
                    v-word-to-span
                    v-text-char-anim="{y: 0, startDelay: 0.4 * i, trigger: '.headphones-microphone'}"
                ) {{line}}
            .headphones-microphone__desc
                .headphones-microphone__desc-wrapper(
                    v-for="descBlock of desc"
                )
                    .headphones-microphone__desc-line(
                        v-for="line of descBlock"
                        v-word-to-span
                        v-text-char-anim="{}"
                    ) {{line}}
            .headphones-microphone__img
                img(
                    :src="image"
                )
</template>

<script setup>
const props = defineProps({
    text: {
        type: Array,
        default: () => []
    },
    desc: {
        type: Array,
        default: () => []
    },
    image: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.headphones-microphone {
    margin: 180px 0;
    &__text {
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
        &-line {
            white-space: nowrap;
            font-style: normal;
            font-weight: 500;
            font-size: 45px;
            line-height: 95%;
            letter-spacing: -0.04em;
            color: #B6B6B6;
            &:nth-child(2),
            &:nth-child(3) {
                padding-left: 220px;
            }
            &:nth-child(4) {
                padding-left: 350px;
            }
        }
    }
    &__desc {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: -0.04em;
        color: #686868;
        max-width: 500px;
        width: 100%;
        margin: 30px auto 0;
        transform: translateX(150px);
        text-transform: lowercase;
        &-wrapper {
            &:nth-child(2) {
                padding-left: 100px;
            }
        }
    }
    &__img {
        width: 460px;
        margin: 30px auto 0;
        transform: translateX(60px);
        img {
            width: 100%;
            display: block;
        }
    }
}
</style>