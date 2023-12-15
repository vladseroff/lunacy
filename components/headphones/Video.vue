<template lang="pug">
.headphones-video
    LayoutContainer
        .headphones-video__wrapper
            .headphones-video__text {{text}}
            .headphones-video__title {{title}}
            .headphones-video__box
                .headphones-video__preview
                    .headphones-video__preview-img
                        img(
                            :src="image"
                        )
                    .headphones-video__preview-play
                        img(
                            src="/images/loud/play.svg"
                        )
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.headphones-video {
    margin: 180px 0;
    &__text {
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: -0.04em;
        color: #B6B6B6;
        text-align: center;
        padding-right: 40px;
        margin-bottom: -25px;
    }
    &__title {
        font-weight: 700;
        font-size: 157px;
        line-height: 100%;
        text-align: center;
        letter-spacing: -0.02em;
        color: #CACACA;
    }
    &__box {
        max-width: 948px;
        width: 100%;
        margin: 0 auto;
    }
    &__preview {
        position: relative;
        cursor: pointer;
        margin-top: -44px;
        &-img {
            img {
                display: block;
                width: 100%;
            }
        }
        &-play {
            position: absolute;
            width: 50px;
            height: 50px;
            background: #fff;
            border-radius: 50%;
            left: 50%;
            top: 50%;
            margin-left: -25px;
            margin-top: -25px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>