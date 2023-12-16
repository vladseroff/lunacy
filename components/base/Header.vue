<template lang="pug">
header.header.hidden
    LayoutContainer
        .header__wrapper
            a.header__logo(
                href="/lunacy"
            )
                img(
                    src="/images/logo-sm.svg"
                )
        .header__nav
            a.header__nav-item(
                href="#"
            ) продукты
                img(
                    src="/images/arrow.svg"
                )
            a.header__nav-item(
                href="#"
            ) драйвера
            a.header__nav-item(
                href="#"
            ) поддержка
        .header__wrapper
            UiButton(
                href="#buy"
            ) купить
            //- .header__lang
            //-     .header__lang-item.disabled Ru
            //-     .header__lang-item En
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
    padding: 13px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 101;
    transform: none;
    transition: 1.5s ease;
    // display: none;
    // @media screen and (min-width: 1420px) {
    //     display: block;
    // }
    &.hidden {
        transform: translateY(-100%);
    }
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
        .button {
            // height: 40px;
            // width: 120px;
            // min-width: 100px;
            // font-size: 12px;
            // text-transform: uppercase;
        }
    }
    &__logo {
        width: 40px;
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
            color: var(--color-white);
            margin: 0 30px;
            padding: 15px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                text-decoration: underline;
            }
            &.disabled {
                pointer-events: none;
                opacity: .2;
            }
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
            &.disabled {
                pointer-events: none;
                opacity: .2;
            }
            &.active {
                color: var(--color-grey);
                cursor: default;
                pointer-events: none;
            }
        }
    }
}
</style>