<template lang="pug">
.index-products
    LayoutContainer
        .index-products__top
            .index-products__button.loud
                span lunacy night
            .index-products__button.night
                span 
                    em lun
                    |acy loud
        .index-products__body
            .index-products__images
                .index-products__img
                    img(
                        src="/images/index/img7.png"
                    )
                .index-products__img
                    img(
                        src="/images/index/img8.png"
                    )
            .index-products__lines
                .index-products__line
                    span стиль
                    span стиль
                .index-products__line
                    span дизайн
                    span дизайн
                .index-products__line
                    span качество
                    span качество
                .index-products__line
                    span экокожа
                    span экокожа
                .index-products__line
                    span громкость
                    span громкость
                .index-products__line
                    span микрофон
                    span микрофон
                .index-products__line
                    span удобство
                    span удобство
                .index-products__line
                    span гарантия
                .index-products__line
                    span удобство
                    span удобство
                .index-products__line
                    span микрофон
                    span микрофон
                .index-products__line
                    span экокожа
                    span экокожа
                .index-products__line
                    span громкость
                    span громкость
                .index-products__line
                    span качество
                    span качество
                .index-products__line
                    span дизайн
                    span дизайн
                .index-products__line
                    span стиль
                    span стиль
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.index-products {
    .container {
        position: relative;
        &:before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: linear-gradient(90.01deg, #D9D9D9 42.42%, rgba(217, 217, 217, 0) 131.83%);
        }
    }
    &__body {
        position: relative;
        margin: 120px 0;
    }
    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 90px 0 -30px;
        position: relative;
        z-index: 10;
    }
    &__button {
        cursor: pointer;
        text-decoration: none;
        font-size: 22px;
        font-weight: 700;
        position: relative;
        display: flex;
        align-items: center;
        height: 60px;
        $button: &;
        &:before {
            content: '';
            display: block;
            width: 60px;
            height: 60px;
            background: #fff;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            margin-top: -30px;
        }
        span {
            position: relative;
            z-index: 2;
        }
        em {
            font-style: normal;
        }
        &.loud {
            &:before {
                right: -16px;
            }
            #{$button} {
                span {
                    color: #686868;
                }
            }
        }
        &.night {
            em {
                color: #000;
            }
            &:before {
                left: -26px;
            }
            #{$button} {
                span {
                    color: #686868;
                }
            }
        }
    }
    &__images {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
    &__img {
        width: 100%;
        height: 100%;
        position: absolute;
        &:nth-child(1) {
            z-index: 2;
            transform: translateX(-252px) translateY(-110px);
            img {
                max-width: 600px;
            }
        }
        &:nth-child(2) {
            transform: translateX(307px) translateY(-128px);
            img {
                max-width: 600px;
            }
        }
        img {
            width: 100%;
            display: block;
            margin: auto;
        }
    }
    &__line {
        color: #3E3E3E;
        font-size: 34px;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        // margin: 3px 0;
        line-height: 34px;
        span {
            &:nth-child(2) {
                transform: scale(-1, 1);
            }
        }
        &:nth-child(2) {
            padding: 0 30px;
        }
        &:nth-child(3) {
            padding: 0 80px;
        }
        &:nth-child(4) {
            padding: 0 160px;
        }
        &:nth-child(5) {
            padding: 0 230px;
        }
        &:nth-child(6) {
            padding: 0 330px;
        }
        &:nth-child(7) {
            padding: 0 430px;
        }
        &:nth-child(8) {
            justify-content: center;
        }
        &:nth-child(9) {
            padding: 0 430px;
        }
        &:nth-child(10) {
            padding: 0 330px;
        }
        &:nth-child(11) {
            padding: 0 230px;
        }
        &:nth-child(12) {
            padding: 0 160px;
        }
        &:nth-child(13) {
            padding: 0 80px;
        }
        &:nth-child(14) {
            padding: 0 30px;
        }
    }
}
</style>