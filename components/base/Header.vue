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
            .header__nav-item(
                @click.stop="toggleDropdown"
                :class="{active: openedDropdown}"
            ) продукты
                img(
                    :class="{rotated: openedDropdown}"
                    src="/images/arrow.svg"
                )
            a.header__nav-item(
                href="#"
            ) драйвера
        .header__wrapper
            a.header__nav-item(
                style="margin-right: 0px"
                href="#"
            ) поддержка
            //- UiButton(
            //-     @click="scrollTo('index-partner')"
            //- ) купить
            //- .header__lang
            //-     .header__lang-item.disabled Ru
            //-     .header__lang-item En
        .header__dropdown(
            :class="{opened: openedDropdown}"
        )
            .header__dropdown-wrapper(
                v-click-outside="hideDropdown"
            )
                .header__dropdown-item
                    .header__dropdown-item-wrapper
                        .header__dropdown-item-title lunacy loud
                        .header__dropdown-item-img
                            img(
                                src="~/assets/images/header/img1.png"
                            )
                        UiButton(
                            @click="clickBuy"
                        ) купить
                        a.header__dropdown-item-link(
                            href="loud"
                        ) подробнее
                .header__dropdown-item
                    .header__dropdown-item-wrapper
                        .header__dropdown-item-title lunacy night
                        .header__dropdown-item-img
                            img(
                                src="~/assets/images/header/img2.png"
                            )
                        UiButton(
                            @click="clickBuy"
                        ) купить
                        a.header__dropdown-item-link(
                            href="night"
                        ) подробнее
                .header__dropdown-item.header__dropdown-item_soon
                    .header__dropdown-item-wrapper
                        .header__dropdown-item-title lunacy in space
                        .header__dropdown-item-img
                            img(
                                src="~/assets/images/header/img3.png"
                            )
                        .header__dropdown-item-soon скоро
</template>

<script setup>
const openedDropdown = ref(false)

const toggleDropdown = () => {
    openedDropdown.value = !openedDropdown.value
}

const showDropdown = () => {
    openedDropdown.value = true
}

const hideDropdown = () => {
    openedDropdown.value = false
}

const clickBuy = () => {
    hideDropdown()
    scrollTo('index-partner')
}
</script>

<style lang="scss" scoped>
.header {
    background: linear-gradient(to bottom, #0E0E0E, transparent);
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
    @keyframes showItem {
        0% {
            height: 0px;
        }
        100% {
            height: 348px;
        }
    }
    &__dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        overflow: hidden;
        opacity: 0;
        pointer-events: none;
        transition: .4s ease;
        $dropdown: &;
        &.opened {
            opacity: 1;
            #{$dropdown} {
                &-wrapper {
                    pointer-events: all;
                }
                &-item {
                    animation: showItem .8s ease forwards;
                    &:nth-child(2) {
                        animation-delay: .3s;
                        #{$dropdown} {
                            &-item-img,
                            &-item-title {
                                transition-delay: .3s;
                            }
                        }
                    }
                    &:nth-child(3) {
                        animation-delay: .6s;
                        #{$dropdown} {
                            &-item-img,
                            &-item-title {
                                transition-delay: .6s;
                            }
                        }
                    }
                    &-title {
                        opacity: 1;
                        transform: none;
                    }
                    &_soon {
                        #{$dropdown} {
                            &-item-title {
                                opacity: .3 !important;
                            }
                        }
                    }
                    &-img {
                        transform: none;
                    }
                }
            }
        }
        &-wrapper {
            display: flex;
            margin: 0 auto;
            max-width: 692px;
            background: #161616;
            padding: 8px;
            overflow: hidden;
            height: 364px;
        }
        &-item {
            flex: 1 1 1px;
            background: #1F1F1F;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            overflow: hidden;
            height: 0px;
            $item: &;
            &:not(:last-child) {
                margin-right: 8px;
            }
            &_soon {
                position: relative;
                #{$item} {
                    &-img,
                    &-title {
                        z-index: 2;
                        position: relative;
                        opacity: .3;
                    }
                }
                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    inset: 0;
                    background: #161616;
                    opacity: .7;
                }
            }
            &-wrapper {
                height: 348px;
                padding: 30px 15px 20px;
            }
            &-soon {
                position: relative;
                z-index: 2;
                margin-top: 35px;
            }
            &-title {
                font-size: 20px;
                color: #fff;
                margin-bottom: 30px;
                flex: none;
                opacity: 0;
                transform: translate3d(0, -15px, 0);
                transition: .6s ease;
            }
            &-img {
                width: 100%;
                height: 170px;
                flex: 1 1 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 15px;
                transform: scale(.4);
                transition: .6s ease;
                img {
                    display: block;
                    max-width: 100%;
                    margin: 0 auto;
                }
            }
            &-link {
                display: block;
                margin-top: 10px;
                flex: none;
                font-size: 16px;
                line-height: 120%;
                text-align: center;
                letter-spacing: -0.02em;
                color: #FFFFFF;
                opacity: 0.5;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
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
            letter-spacing: -0.02em;
            justify-content: center;
            transition: .3s ease;
            &:hover {
                // text-decoration: underline;
                opacity: .4;
            }
            &.active {
                opacity: .4;
            }
            &.disabled {
                pointer-events: none;
                opacity: .2;
            }
            img {
                display: block;
                margin-left: 5px;
                &.rotated {
                    transform: rotate(180deg)
                }
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