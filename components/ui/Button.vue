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
    min-width: 180px;
    max-width: 200px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-weight: 600;
    font-style: italic;
    font-size: 16px;
    background: var(--color-white);
    cursor: pointer;
    text-decoration: none;
    border-radius: 12px;
    @media screen and (max-width: 1420px) {
        max-width: 320px;
    }
    &:hover {
        background: darken(#fff, 10%);
    }
    &.outlined {
        border: 1px solid var(--color-white);
        color: var(--color-white);
        background: transparent;
        &:hover {
            background: transparent;
            border-color: darken(#fff, 10%);
            color: darken(#fff, 10%);
        }
    }
}
</style>