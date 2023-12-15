<template lang="pug">
component.button(
    :is="href ? 'a' : 'div'"
    :href="href"
    :class="[color, `hover-${hoverColor}`]"
)
    span
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
    overflow: hidden;
    span {
        background: #fff;
        position: absolute;
        left: 50%;
        top: 2px;
        margin-left: -100px;
        margin-top: -10px;
        display: block;
        height: 100%;
        mix-blend-mode: exclusion;
        // border-radius: 50%;
        width: 200px;
        height: 50px;
        z-index: 2;
        transform: scale(0);
        transform-origin: 50% 50%;
        transition: .3s ease;
    }
    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        background: url('/images/index/ic1.svg') center center no-repeat;
        width: 9px;
        height: 100%;
        z-index: 1;
    }
    &:before {
        left: 2px;
    }
    &:after {
        right: 2px;
        transform: scale(-1, 1)
    }
    &:hover {
        span {
           transform: scale(1)
        }
    }
}
</style>