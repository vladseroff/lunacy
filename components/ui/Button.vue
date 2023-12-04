<template lang="pug">
component.button(
    :is="href ? 'a' : 'div'"
    :href="href"
    :class="[color, `hover-${hoverColor}`]"
)
    slot
</template>

<script setup>
defineProps({
    href: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: 'black'
    },
    hoverColor: {
        type: String,
        default: 'default'
    }
})
</script>

<style lang="scss" scoped>
.button {
    min-width: 130px;
    // max-width: 130px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500;
    font-size: 22px;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    padding: 0 30px;
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
    &:hover {
        
    }
}
</style>