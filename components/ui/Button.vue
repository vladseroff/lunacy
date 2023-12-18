<template lang="pug">
component.button(
    ref="btnRef"
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

const btnRef = ref(null)
onMounted(() => {
    console.log(btnRef);
    btnRef.value.innerHTML = '<div><span>' + btnRef.value.textContent.trim().split('').join('</span><span>') + '</span></div>'
})
</script>

<style lang="scss">

.button {
    // -webkit-font-smoothing: antialiased;
    --text: #fff;
    --font-size: 22px;
    --duration: .2s;
    --move-hover: -4px;
    --shadow: 0 2px 8px -1px #{rgba(#275efe, .32)};
    --shadow-hover: 0 4px 20px -2px #{rgba(#275efe, .5)};
    --font-shadow: var(--font-size);
    // line-height: var(--font-size);
    // display: block;
    // outline: none;
    // appearance: none;
    // border: none;
    // text-decoration: none;
    // letter-spacing: .5px;
    // color: var(--text);
    font-size: var(--font-size);
    // transform: translateY(var(--y)) translateZ(0);
    transition: transform var(--duration) ease, box-shadow var(--duration) ease;
    min-width: 130px;
    height: 30px;
    display: flex;
    line-height: 30px;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    padding: 0 30px;
    overflow: hidden;
    div {
        display: flex;
        align-items: center;
        overflow: hidden;
        text-shadow: 0 30px 0 var(--text);
        span {
            display: block;
            backface-visibility: hidden;
            font-style: normal;
            transition: transform var(--duration) ease;
            transform: translateY(var(--m)) translateZ(0);
            &:nth-child(1) {
                transition-delay: 0s;
            }
            &:nth-child(2) {
                transition-delay: 0.05s;
            }
            &:nth-child(3) {
                transition-delay: 0.1s;
            }
            &:nth-child(4) {
                transition-delay: 0.15s;
            }
            &:nth-child(5) {
                transition-delay: 0.2s;
            }
            &:nth-child(6) {
                transition-delay: 0.25s;
            }
        }
    }

    &:hover {
        // --y: var(--move-hover);
        // --shadow: var(--shadow-hover);
        span {
            --m: -30px;
        }
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
}
</style>