<template lang="pug">
.headphones-spec
    LayoutContainer
        .headphones-spec__wrapper
            .headphones-spec__img
                img(
                    :src="image"
                )
            .headphones-spec__common
                .headphones-spec__title {{title}}
                .headphones-spec__text
                    .headphones-spec__text-block(
                        v-for="block of text"
                    )
                        .headphones-spec__text-line(
                            v-for="line of block"
                            v-word-to-span="line"
                            v-text-char-anim="{duration: .3}"
                        )
                .headphones-spec__desc
                    .headphones-spec__desc-line(
                        v-for="line of desc"
                        v-word-to-span="line"
                        v-text-char-anim="{duration: .3}"
                    )
                .headphones-spec__price
                    .headphones-spec__name(
                        v-word-to-span="name"
                        v-text-char-anim="{duration: .3}"
                    )
                    .headphones-spec__price-num(
                        v-word-to-span="price"
                        v-text-char-anim="{duration: .3}"
                    )
                .headphones-spec__button
                    UiButton купить
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '',
    },
    name: {
        type: String,
        default: '',
    },
    price: {
        type: String,
        default: '',
    },
    text: {
        type: Array,
        default: () => [],
    },
    desc: {
        type: Array,
        default: () => [],
    }
})
</script>

<style lang="scss" scoped>
.headphones-spec {
    border-top: 1px solid #686868;
    border-bottom: 1px solid #686868;
    padding: 30px 0;
    &__wrapper {
        max-width: 920px;
        width: 100%;
        margin: 0 auto;
        display: flex;
    }
    &__img {
        max-width: 350px;
        width: 100%;
        flex: none;
        margin-right: 100px;
        img {
            display: block;
            width: 100%;
        }
    }
    &__common {
        flex: 1 1 auto;
    }
    &__title {
        font-weight: 500;
        font-size: 45px;
        line-height: 90%;
        letter-spacing: -0.04em;
        color: #B6B6B6;
        margin-bottom: 40px;
    }
    &__text {
        font-weight: 500;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: -0.04em;
        color: #B6B6B6;
        &-block {
            margin: 10px 0;
            &:nth-child(2) {
                margin-left: 110px;
            }
            &:nth-child(3) {
                margin-left: 190px;
            }
        }
    }
    &__desc {
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: -0.04em;
        color: #686868;
        margin-bottom: 20px;
        &-line {
            &:nth-child(1) {
                margin-left: 110px;
            }
        }
    }
    &__price {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 18px;
        line-height: 100%;
        letter-spacing: -0.04em;
        text-transform: lowercase;
        color: #B6B6B6;
        margin-bottom: 50px;
    }
    &__name {
        margin-right: 30px;
    }
    &__button {
        display: flex;
        justify-content: flex-start;
    }
}
</style>