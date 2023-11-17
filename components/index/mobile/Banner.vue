<template lang="pug">
.banner
    LayoutContainer
        .banner__logo
            img(
                src="images/mobile/logo.svg"
            )
        .banner__content
            .banner__text
                .banner__text-item Создано 
                    span игроками 
                .banner__text-item Для 
                    span игроков
            .banner__img
                img(
                    src="images/mobile/bg1.png"
                )
            UiButton ПРЕДЗАКАЗ
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.banner {
    .button {
        max-width: 100%;
        margin: 0 auto;
    }
    &__logo {
        margin-bottom: 25px;
        img {
            display: block;
            margin: 0 auto;
            width: 100%;
            max-width: 500px;
        }
    }
    &__content {
        max-width: 500px;
        width: 100%;
        margin: 0 auto;
    }
    &__img {
        position: relative;
        top: -60px;
        img {
            width: 100%;
            display: block;
        }
    }
    &__text {
        &-item {
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            margin-bottom: 12px;
            span {
                font-style: italic;
                display: inline-block;
                position: relative;
                margin-left: 8px;
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
</style>