<template lang="pug">
.index-welcome
    LayoutContainer
        .index-welcome__img
            img(
                src="/images/index/bg1.png"
            )
        .index-welcome__logo
            img(
                src="/images/index/lunacy.svg"
            )
        .index-welcome__text игровые девайсы
        UiButton купить
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.index-welcome {
    margin: 130px 0;
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__img {
        max-width: 460px;
        margin: 0 auto;
        width: 100%;
        img {
            display: block;
            width: 100%;
        }
    }
    &__logo {
        max-width: 1042px;
        width: 100%;
        margin-top: -325px;
        margin-bottom: -20px;
        img {
            display: block;
            width: 100%;
        }
    }
    &__text {
        font-size: 34px;
        text-align: center;
        margin-bottom: 20px;
    }
}
</style>