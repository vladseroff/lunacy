<template lang="pug">
.index-product
    LayoutContainer
        .index-product__container
            .index-product__wrapper
                .index-product__box
                    
                .index-product__images
                    .index-product__title ( lunacy night )
                    .index-product__images-wrapper
                        .index-product__img
                            img(
                                src="/images/index/img4.png"
                            )
                        .index-product__img
                            img(
                                src="/images/index/img5.png"
                            )
                        .index-product__img
                            img(
                                src="/images/index/img6.png"
                            )
                .index-product__box
                    .index-product__text никаких лишних
                    .index-product__text шумов, 
                    .index-product__text только чистый звук
                    .index-product__text динамиков и
                    .index-product__text микрофона
                    .index-product__desc в гонке за весом мы не 
                        br 
                        |бросили гонку за качеством, 
                        br 
                        |надежностью и 
                        br 
                        |технологичностью.
            .index-product__bottom
                UiButton купить
                nuxt-link(
                    to="#"
                ) подробнее
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.index-product {
    .container {
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        &:before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: linear-gradient(90.01deg, #D9D9D9 42.42%, rgba(217, 217, 217, 0) 131.83%);
        }
    }
    &__container {
        padding: 55px 0;
        width: 100%;
    }
    &__bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        a {
            color: #686868;
            font-size: 18px;
            text-decoration: none;
            cursor: pointer;
            display: block;
            margin-top: 10px;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    &__wrapper {
        display: flex;
        justify-content: center;
    }
    &__text {
        font-size: 30px;
        font-weight: 500;
        white-space: nowrap;
        line-height: 90%;
        &:nth-child(3) {
            text-indent: 50px;
        }
        &:nth-child(4) {
            text-indent: 25px;
        }
        &:nth-child(5) {
            text-indent: 80px;
        }
    }
    &__desc {
        color: #686868;
        font-size: 20px;
        font-weight: 500;
        text-indent: 56px;
        padding-left: 25px;
        margin-top: 20px;
    }
    &__images {
        max-width: 459px;
        width: 100%;
        flex: none;
        padding: 30px 36px;
        position: relative;
        height: 646px;
        margin: 0 15px;
        &-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
    }
    &__img {
        position: absolute;
        background: #686868;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding: 100px 36px 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 4;
        transform-origin: top center;
        &:before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: #000;
            z-index: 11;
            opacity: 0;
        }
        &:nth-child(2) {
            z-index: 3;
            left: -250px;
            transform: scale(.6);
            background: #494949;
            padding: 30px 20px 30px;
            &:before {
                opacity: .2;
            }
        }
        &:nth-child(3) {
            z-index: 2;
            left: -430px;
            transform: scale(.4);
            background: #343434;
            padding: 30px 20px 30px;
            &:before {
                opacity: .3;
            }
        }
        img {
            width: 100%;
            display: block;
            z-index: 10;
            position: relative;
        }
    }
    &__title {
        text-align: center;
        color: #B6B6B6;
        font-size: 50px;
        font-weight: 500;
        position: absolute;
        top: 30px;
        left: 0;
        width: 100%;
        z-index: 5;
    }
    &__box {
        flex: 1 1 1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>