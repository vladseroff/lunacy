<template lang="pug">
header.mobile-header
    LayoutContainer
        .mobile-header__wrapper
            .mobile-header__logo
                img(
                    src="/images/logo-sm.svg"
                )
        .mobile-header__wrapper
            .mobile-header__burger(
                @click="toggleMenu"
            )
                img(
                    src="/images/mobile/burger.svg"
                )
    BaseMobileMenu(
        v-show="openedMenu"
        @toggleMenu="toggleMenu"
    )
</template>

<script setup>
const openedMenu = ref(false)

const toggleMenu = () => {
    openedMenu.value = !openedMenu.value
}
</script>

<style lang="scss" scoped>
.mobile-header {
    display: none;
    margin-bottom: 10px;
    overflow: hidden;
    @media screen and (max-width: 1420px) {
        display: block;
    }
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
    }
    &__wrapper {
        display: flex;
        align-items: center;
    }
    &__logo,
    &__burger {
        img {
            display: block;
        }
    }
    &__logo {
        margin-left: -20px;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 22px;
        }
    }
    &__burger {
        margin-right: -20px;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>