<template lang="pug">
.section
    LayoutContainer
        .section__top
            .section__top-name {{desc}}
            .section__top-count ({{count}})
        .section__title {{title}}
        .section__body
            slot
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        default: ''
    },
    count: {
        type: String,
        default: ''
    },
})
</script>

<style lang="scss" scoped>
.section {
    padding-top: 150px;
    padding-bottom: 5px;
    &:before {
        content: '';
        display: block;
        background: url('/images/line.svg') center center no-repeat;
        height: 1px;
        width: 100%;
        margin-bottom: 30px;
    }
    &__title {
        text-align: center;
        font-family: 'Geologica';
        font-weight: 300;
        font-size: 110px;
        text-transform: uppercase;
        background: linear-gradient(180deg, #F9F9F9 0%, #8F8F8F 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        margin-top: -43px;
    }
    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-name {
            font-size: 16px;
            color: var(--color-grey);
            font-weight: 500;
            text-transform: uppercase;
        }
        &-count {
            font-family: 'Geologica';
            font-weight: 400;
            font-size: 20px;
            text-transform: uppercase;
            background: linear-gradient(180deg, #F9F9F9 0%, #8F8F8F 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    }
}
</style>