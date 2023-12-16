<template lang="pug">
.headphones-description
    LayoutContainer
        .headphones-description__wrapper
            .headphones-description__text
                .headphones-description__text-line(
                    v-for="line of text"
                    v-word-to-span
                    v-text-char-anim="{duration: .3}"
                ) {{line}}
            .headphones-description__desc
                .headphones-description__desc-line(
                    v-for="line, i of desc"
                )
                    .headphones-description__desc-line-num ( {{i + 1}} )
                    .headphones-description__desc-line-text(
                        v-word-to-span
                        v-text-char-anim="{duration: .3}"
                    ) {{line}}
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
.headphones-description {
    margin: 180px 0;
    &__text {
        max-width: 948px;
        width: 100%;
        margin: 0 auto;
        &-line {
            font-style: normal;
            font-weight: 500;
            font-size: 44px;
            line-height: 90%;
            letter-spacing: -0.04em;
            color: #B6B6B6;
            &:nth-child(2),
            &:nth-child(4),
            &:nth-child(5) {
                padding-left: 220px;
            }
        }
    }
    &__desc {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        &-line {
            max-width: 400px;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            &-num {
                font-weight: 600;
                font-size: 20px;
                line-height: 100%;
                letter-spacing: -0.04em;
                text-transform: lowercase;
                color: #686868;
                width: 40px;
                flex: none;
                margin-right: 25px;
            }
            &-text {
                font-weight: 400;
                font-size: 18px;
                line-height: 100%;
                letter-spacing: -0.04em;
                text-transform: lowercase;
                color: #B6B6B6;
            }
        }
    }
}
</style>