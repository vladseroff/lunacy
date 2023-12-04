<template lang="pug">
.index-partner
    LayoutContainer
        .index-partner__top где купить
        .index-partner__body
            .index-partner__box
                .index-partner__img
                    img(
                        src="/images/index/ozon.svg"
                    )
                .index-partner__text Официальный партнер
            .index-partner__box
                .index-partner__img
                    img(
                        src="/images/index/mvideo.svg"
                    )
                .index-partner__text Официальный партнер
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.index-partner {
    margin: 180px 0;
    &__top {
        text-align: center;
        font-size: 34px;
        font-weight: 500;
        color: #B6B6B6;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &:before,
        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            background: url('/images/index/ic1.svg') center center no-repeat;
            width: 9px;
            height: 100%;
        }
        &:before {
            left: 0;
        }
        &:after {
            right: 0;
            transform: scale(-1, 1)
        }
    }
    &__body {
        display: flex;
        justify-content: center;
        margin-top: 40px;
    }
    &__box {
        max-width: 292px;
        height: 300px;
        flex: 1 1 1px;
        background: #2B2B2B;
        margin: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
    }
    &__img {
        img {
            display: block;
            max-width: 100%;
        }
    }
    &__text {
        font-size: 14px;
        color: #fff;
        margin-top: 10px;
    }
}
</style>