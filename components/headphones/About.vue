<template lang="pug">
.headphones-about
    LayoutContainer
        .headphones-about__wrapper
            .headphones-about__text
                .headphones-about__text-line(
                    v-for="line of text"
                    v-word-to-span="line"
                    v-text-char-anim="{duration: .6}"
                )
            .headphones-about__desc
                .headphones-about__desc-wrapper(
                    v-for="descBlock of desc"
                )
                    .headphones-about__desc-line(
                        v-for="line of descBlock"
                        v-word-to-span="line"
                        v-text-char-anim="{duration: .3}"
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
    }
})
</script>

<style lang="scss" scoped>
.headphones-about {
    margin: 180px 0 120px;
    &__text {
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
        &-line {
            font-style: normal;
            font-weight: 500;
            font-size: 45px;
            line-height: 90%;
            letter-spacing: -0.04em;
            color: #B6B6B6;
            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4),
            &:nth-child(5) {
                padding-left: 220px;
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
        max-width: 457px;
        width: 100%;
        margin: 20px auto 0;
        &-wrapper {
            &:nth-child(2) {
                padding-left: 130px;
            }
        }
    }
}
</style>