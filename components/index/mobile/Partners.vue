<template lang="pug">
.mobile-partners#buyMobile
    LayoutContainer
        .mobile-partners__title 
            .mobile-partners__title-text где купить
                span (2)
        .mobile-partners__items
            a.mobile-partners__item(
                href="#"
            )
                img(
                    src="/images/mobile/p1.svg"
                )
                .mobile-partners__name купить в мвидео
            a.mobile-partners__item(
                href="#"
            )
                img(
                    src="/images/mobile/p1.svg"
                )
                .mobile-partners__name купить в озоне
</template>

<style lang="scss" scoped>
.mobile-partners {
    &__item {
        margin-bottom: 15px;
        text-decoration: none;
        color: #fff;
        position: relative;
        display: block;
        img {
            display: block;
            width: 100%;
        }
    }
    &__name {
        font-style: italic;
        font-weight: 600;
        text-transform: uppercase;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__title {
        text-align: center;
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
        &-text {
            position: relative;
            font-size: 30px;
            text-transform: uppercase;
            font-weight: 600;
            span {
                position: absolute;
                opacity: .4;
                font-size: 12px;
                right: -20px;
                top: 0;
            }
        }
    }
}
</style>