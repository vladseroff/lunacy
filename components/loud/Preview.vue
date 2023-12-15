<template lang="pug">
.loud-preview
    LayoutContainer
        .loud-preview__wrapper
            .loud-preview__img
                img(
                    src="./images/loud/img4.png"
                )
            .loud-preview__title три режима подключения
            .loud-preview__specs
                .loud-preview__spec
                    .loud-preview__spec-number 001
                    .loud-preview__spec-common
                        .loud-preview__spec-title проводной
                        .loud-preview__spec-desc Type C-Jack 3.5 мм
                .loud-preview__spec
                    .loud-preview__spec-number 002
                    .loud-preview__spec-common
                        .loud-preview__spec-title bluetooth
                        .loud-preview__spec-desc Bluetooth 5.3
                .loud-preview__spec
                    .loud-preview__spec-number 003
                    .loud-preview__spec-common
                        .loud-preview__spec-title радиоканал
                        .loud-preview__spec-desc 2.4 ГГц
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.loud-preview {
    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__img {
        width: 330px;
        margin-left: 138px;
        img {
            display: block;
            width: 100%;
        }
    }
    &__title {
        font-style: normal;
        font-weight: 500;
        font-size: 34px;
        line-height: 100%;
        letter-spacing: -0.04em;
        color: #B6B6B6;
        padding-left: 55px;
        margin: 20px 0 30px;
    }
    &__specs {
        padding-left: 140px;
    }
    &__spec {
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        &-number {
            flex: none;
            width: 70px;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 100%;
            letter-spacing: -0.04em;
            text-transform: lowercase;
            color: #686868;
            padding-top: 30px;
        }
        &-title {
            font-weight: 400;
            font-size: 20px;
            line-height: 100%;
            letter-spacing: -0.04em;
            color: #686868;
        }
        &-desc {
            font-weight: 500;
            font-size: 45px;
            line-height: 90%;
            letter-spacing: -0.04em;
            color: #B6B6B6;
            margin-top: 5px;
        }
    }
}
</style>