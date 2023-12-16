<template lang="pug">
.devices
    LayoutContainer
        .devices__top другие девайсы
        .devices__wrapper
            a.devices__item(
                v-for="item of data"
                :href="item.route || '#'"
                :class="{disabled: !item.route}"
            )
                .devices__item-name
                    span(
                        v-for="span of item.name"
                    ) {{span}}
                .devices__item-box
                    .devices__item-img
                        img(
                            :src="item.image"
                        )
                    .devices__item-text {{item.route ? 'перейти' : 'скоро'}}
</template>

<script setup>
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="scss" scoped>
.devices {
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
        margin-bottom: 40px;
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
    &__wrapper {
        display: flex;
        margin: 0 -5px;
    }
    &__item {
        flex: 1 1 1px;
        margin: 0 5px;
        text-decoration: none;
        color: #fff;
        $item: &;
        &.disabled {
            pointer-events: none;
            #{$item} {
                &-img {
                    opacity: .4;
                }
            }
        }
        &-name {
            text-align: center;
            color: #fff;
            margin-bottom: 10px;
            font-size: 20px;
            letter-spacing: -0.04em;
            span {
                &:first-child {
                    color: #686868;
                    margin-right: 6px;
                }
            }
        }
        &-box {
            background: #686868;
            height: 600px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        &-img {
            img {
                display: block;
                max-width: 532px;
                max-height: 460px;
            }
        }
        &-text {
            position: absolute;
            inset: 0;
            font-size: 20px;
            text-align: center;
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>