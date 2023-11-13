<template lang="pug">
header.header
    LayoutContainer
        .header__wrapper
            .header__logo
                img(
                    src="/images/logo-sm.svg"
                )
        .header__nav
            .header__nav-item Продукты
                img(
                    src="/images/arrow.svg"
                )
            .header__nav-item Драйвера
            .header__nav-item Поддержка
        .header__wrapper
            .header__lang
                .header__lang-item.active Ru
                .header__lang-item En
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
    padding: 30px 0;
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__wrapper {
        flex: 1 1 1px;
        display: flex;
        align-items: center;
        &:last-child {
            justify-content: flex-end;
        }
    }
    &__nav {
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
        &-item {
            font-size: 14px;
            text-decoration: none;
            cursor: pointer;
            text-transform: uppercase;
            color: var(--color-white);
            margin: 0 30px;
            padding: 15px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                display: block;
                margin-left: 5px;
            }
        }
    }
    &__lang {
        display: flex;
        align-items: center;
        &-item {
            margin: 0 5px;
            padding: 15px 0;
            cursor: pointer;
            font-size: 14px;
            &.active {
                color: var(--color-grey);
                cursor: default;
                pointer-events: none;
            }
        }
    }
}
</style>