<template lang="pug">
.banner
    LayoutContainer
        .banner__logo
            .banner__logo-letter
                img(
                    src="/images/l.svg"
                )
            .banner__logo-letter
                img(
                    src="/images/u.svg"
                )
            .banner__logo-letter
                img(
                    src="/images/n.svg"
                )
            .banner__logo-letter
                img(
                    src="/images/a.svg"
                )
            .banner__logo-letter
                img(
                    src="/images/logo-lg.svg"
                )
            .banner__logo-letter
                img(
                    src="/images/y.svg"
                )
        .banner__product
            img(
                src="/images/bg1.png"
            )
        .banner__buttons
            UiButton(

            ) КУПИТЬ
            UiButton.outlined(
                
            ) ПОДРОБНЕЕ
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.banner {
    &__logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 50px;
        &-letter {
            position: relative;
            margin: 0 50px;
            z-index: 4;
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3) {
                z-index: 10;
            }
            img {
                display: block;
            }
        }
    }
    &__product {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -170px;
        img {
            display: block;
            position: relative;
            z-index: 5;
        }
        &:before {
            content: '';
            display: block;
            position: absolute;
            z-index: 3;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%,-50%, 0);
            width: 800px;
            height: 600px;
            background: radial-gradient(41.44% 41.44% at 50% 58.56%, rgba(191, 197, 255, 0.16) 0%, rgba(170, 190, 231, 0.06) 100%);
            filter: blur(80px);
            border-radius: 500px;
        }
    }
    &__buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 6;
        margin-top: -100px;
        .button {
            margin: 0 10px;
        }
    }
}
</style>