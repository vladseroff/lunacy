<template lang="pug">
.night-preview
    LayoutContainer
        .night-preview__wrapper
            .night-preview__img
                img(
                    src="~/assets/images/night/img4.png"
                )
            .night-preview__desc
                .night-preview__desc-line(
                    v-word-to-span="'Многослойные амбушюры выполнены'"
                    v-text-char-anim="{duration: .3}"
                ) 
                .night-preview__desc-line(
                    v-word-to-span="'из трех слоев. В их основе лежит'"
                    v-text-char-anim="{duration: .3, startDelay: .3}"
                )
                .night-preview__desc-line(
                    v-word-to-span="'высококачественная пена с эффектом'"
                    v-text-char-anim="{duration: .3, startDelay: .6}"
                )
                .night-preview__desc-line(
                    v-word-to-span="'памяти, повторяющая форму ушей'"
                    v-text-char-anim="{duration: .3, startDelay: .9}"
                )
                .night-preview__desc-line(
                    v-word-to-span="'пользователя для максимально'"
                    v-text-char-anim="{duration: .3, startDelay: 1.2}"
                )
                .night-preview__desc-line(
                    v-word-to-span="'комфортной посадки.'"
                    v-text-char-anim="{duration: .3, startDelay: 1.5}"
                )
            
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.night-preview {
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
    &__desc {
        padding-left: 230px;
        margin-top: 20px;
        &-line {
            font-weight: 400;
            font-size: 20px;
            line-height: 100%;
            letter-spacing: -0.04em;
            color: #686868;
            &:nth-child(4),
            &:nth-child(5),
            &:nth-child(6) {
                padding-left: 100px;
            }
        }
    }
}
</style>