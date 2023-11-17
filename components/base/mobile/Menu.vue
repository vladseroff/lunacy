<template lang="pug">
.mobile-menu
    .mobile-menu__body
        LayoutContainer
            .mobile-menu__cross(
                @click="emits('toggleMenu')"
            )
                img(
                    src="/images/mobile/cross.svg"
                )
            .mobile-menu__logo
                img(
                    src="/images/mobile/logo.svg"
                )
            .mobile-menu__nav
                a.mobile-menu__nav-item(
                    href="#aboutMobile"
                    @click.prevent="scrollTo('#aboutMobile')"
                ) О нас
                a.mobile-menu__nav-item(
                    href="#productsMobile"
                    @click.prevent="scrollTo('#productsMobile')"
                ) 
                    .mobile-menu__nav-item-text Продукты
                        span (2)
                a.mobile-menu__nav-item(
                    href="#buyMobile"
                    @click.prevent="scrollTo('#buyMobile')"
                ) 
                    .mobile-menu__nav-item-text Где купить
                        span (2)
            .mobile-menu__bottom
                .mobile-menu__title Соц. сети
                .mobile-menu__social
                    a.mobile-menu__social-item(
                        href="#"
                    ) Вконтакте
                        img(
                            src="/images/ic1.svg"
                        )
                    a.mobile-menu__social-item(
                        href="#"
                    ) Телеграм
                        img(
                            src="/images/ic1.svg"
                        )
    .mobile-menu__blur
</template>

<script setup>
const emits = defineEmits([
    'toggleMenu'
])

const scrollTo = (anchor) => {
    emits('toggleMenu')
    location.hash = anchor;
}
</script>

<style lang="scss" scoped>
.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    &__cross {
        position: absolute;
        right: -5px;
        top: 0;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        img {
            display: block;
        }
    }
    &__logo {
        flex: none;
        img {
            display: block;
            margin: 0 auto;
            width: 100%;
        }
    }
    &__nav {
        flex: 1 1 auto;
        margin: 60px 0;
        &-item {
            display: block;
            color: #fff;
            text-transform: uppercase;
            text-align: center;
            font-size: 40px;
            text-decoration: none;
            display: flex;
            justify-content: center;
            &:not(:last-child) {
                margin-bottom: 32px;
            }
            &-text {
                position: relative;
            }
            span {
                position: absolute;
                color: #fff;
                opacity: .4;
                position: absolute;
                right: -18px;
                top: 0;
                font-size: 12px;
            }
        }
    }
    &__bottom {
        flex: none;
    }
    &__title {
        font-size: 13px;
        color: #fff;
        opacity: .4;
        font-weight: 500;
        text-align: center;
        margin-bottom: 10px;
    }
    &__social {
        display: flex;
        justify-content: center;
        &-item {
            text-transform: uppercase;
            cursor: pointer;
            text-decoration: none;
            color: #fff;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            align-items: center;
            margin-right: 15px;
            &:hover {
                img {
                    transform: translateX(5px);
                }
            }
            img {
                display: block;
                margin-left: 8px;
                transition: .8s ease;
            }
        }
    }
    &__body {
        border-radius: 0 0 12px 12px;
        background: #000 url('/images/noise.png') repeat left top;
        height: 80%;
        z-index: 1000;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 530px;
        display: flex;
        flex-direction: column;
        padding: 70px 0 40px;
    }
    &__blur {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(50, 50, 50, 0.3);
        backdrop-filter: blur(4px);
    }
}
</style>