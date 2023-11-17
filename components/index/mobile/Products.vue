<template lang="pug">
.mobile-product#productsMobile
    LayoutContainer
        .mobile-product__title 
            .mobile-product__title-text Наши продукты 
                span (2)
        .mobile-product__item
            .mobile-product__preview
                .mobile-product__preview-img
                    img(
                        src="/images/mobile/bg4.png"
                    )
                .mobile-product__preview-text
                    .mobile-product__preview-name LOUD
                    .mobile-product__preview-desc 
                        span Громче. 
                        span(
                            style="margin-left: 15px"
                        ) Еще 
                            span.underline громче
            .mobile-product__section
                .mobile-product__text Сочетание дорогой экокожи, ткани и терморегулирующего геля позволят тебе наслаждаться комфортом даже в самых потных катках.
                .mobile-product__ttl Универсальность
                .mobile-product__text Три режима подключения: проводной, радиоканал, bluetooth 
                    br 
                    br 
                    |Совместимы с большинством устройств на рынке, включая мобильные телефоны, игровые консоли и настольные ПК.
                .mobile-product__img
                    img(
                        src="/images/mobile/bg5.png"
                    )
            .mobile-product__section
                .mobile-product__ttl Внешний вид
                .mobile-product__text Сочетание дорогой экокожи, ткани и терморегулирующего геля позволят тебе наслаждаться комфортом даже в самых потных катках.
                .mobile-product__img
                    img(
                        src="/images/mobile/bg6.png"
                    )
                UiButton ПРЕДЗАКАЗ
        .mobile-product__item
            .mobile-product__preview
                .mobile-product__preview-img
                    img(
                        src="/images/mobile/bg7.png"
                    )
                .mobile-product__preview-text(
                    style="top: 25%"
                )
                    .mobile-product__preview-name night
                    .mobile-product__preview-desc 
                        span Очень легкие.
                        span(
                            style="margin-left: 15px"
                        ).underline Легчайшие 
            .mobile-product__section
                .mobile-product__text LUNACY Night весят всего 211 грамм. 
                    br 
                    |Игры еще никогда не были 
                    br 
                    |такими легкими.
                .mobile-product__ttl Никаких 
                    br 
                    |компромиссов
                .mobile-product__text В гонке за весом мы не бросили 
                    br 
                    |гонку за качеством, надежностью 
                    br 
                    |и технологичностью
                .mobile-product__img
                    img(
                        src="/images/mobile/bg8.png"
                    )
            .mobile-product__section
                .mobile-product__ttl Так звучит ночь
                .mobile-product__text Никаких лишних шумов, только 
                    br 
                    |чистый звук динамиков и микрофона. 
                    br 
                    |Кстати, микрофон задвигается 
                    br 
                    |и автоматически выключается.
                .mobile-product__img
                    img(
                        src="/images/mobile/bg9.png"
                    )
                UiButton ПРЕДЗАКАЗ
</template>

<style lang="scss" scoped>
.mobile-product {
    &__section {
        .button {
            max-width: 100%;
            margin: 0 auto;
        }
    }
    &__item {
        margin-bottom: 50px;
    }
    &__img {
        margin-bottom: 50px;
        img {
            display: block;
            width: 100%;
        }
    }
    &__ttl {
        text-transform: uppercase;
        font-size: 22px;
        margin-bottom: 15px;
        font-weight: 600;
    }
    &__text {
        margin-bottom: 40px;
        font-size: 13px;
        line-height: 1.4em;
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
    &__preview {
        text-align: center;
        position: relative;
        margin-bottom: 50px;
        &-img {
            img {
                width: 100%;
                display: block;
            }
        }
        &-text {
            position: absolute;
            top: 20%;
            left: 0;
            width: 100%;
        }
        &-name {
            font-family: 'Cygre';
            font-style: normal;
            font-size: 22px;
            text-transform: uppercase;
            background: linear-gradient(159.68deg, #6F543D -1.53%, #A68457 36%, #C39D64 58.67%, #BB9661 66.86%, #A68457 79.27%, #846747 94.31%, #6F543D 102.34%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
        &-desc {
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            margin-top: 10px;
            em {
                margin-left: 5px;
            }
            span {
                display: inline-block;
                &:nth-child(2) {
                    font-style: italic;
                }
                &.underline {
                    position: relative;
                    &:before {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: -3px;
                        right: 0;
                        width: 80%;
                        background: #fff;
                        height: 1px;
                    }
                }
            }
        }
    }
}
</style>