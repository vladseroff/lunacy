<template lang="pug">
.loud-welcome
    LayoutContainer
        .loud-welcome__wrapper
            .loud-welcome__desc {{desc}}
            .loud-welcome__title {{title}}
            .loud-welcome__text {{text}}
            .loud-welcome__images
                .loud-welcome__img(
                    v-for="image of images"
                )
                    img(
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
        img {
            display: block;
            width: 100%;
        }
        &:nth-child(2) {
            max-width: 360px;
            width: 100%;
        }
    }
}
</style>