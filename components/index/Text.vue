<template lang="pug">
.index-text
    LayoutContainer
        .index-text__wrapper
            .index-text__text(
                v-word-to-span
                v-text-char-anim="{y: 0, }"
            ) кто станет носить 
            .index-text__text(
                v-word-to-span
                v-text-char-anim="{y: 0, }"
            ) геймерские наушники 
            .index-text__text(
                v-word-to-span
                v-text-char-anim="{y: 0, }"
            ) на улице? 
            .index-text__text(
                v-word-to-span
                v-text-char-anim="{y: 0, }"
            ) тот, кто выбирает 
            .index-text__text(
                v-word-to-span
                v-text-char-anim="{y: 0, }"
            ) Lunacy.
        .index-text__desc
            .index-text__desc-line(
                v-word-to-span
                v-text-char-anim="{}"
            ) они дополняют тебя, а не 
            .index-text__desc-line(
                v-word-to-span
                v-text-char-anim="{}"
            ) ограничивают. Сочетание дорогой 
            .index-text__desc-line(
                v-word-to-span
                v-text-char-anim="{}"
            ) экокожи, ткани и терморегулирующего 
            .index-text__desc-line(
                v-word-to-span
                v-text-char-anim="{}"
            ) геля позволят тебе наслаждаться 
            .index-text__desc-line(
                v-word-to-span
                v-text-char-anim="{}"
            ) комфортом даже в самых потных катках.
</template>

<style lang="scss" scoped>
.index-text {
    margin: 200px 0;
    .container {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    &__text {
        color: #B6B6B6;
        font-weight: 500;
        font-size: 34px;
        max-width: 400px;
        width: 100%;
        line-height: .96em;
        letter-spacing: -0.04em;
        &:nth-child(1) {
            transform: translateX(-80px);
        }
        &:nth-child(2) {
            transform: translateX(60px);
        }
        &:nth-child(3) {
            transform: translateX(60px);
        }
        &:nth-child(4) {
            transform: translateX(-80px);
        }
        &:nth-child(5) {
            transform: translateX(60px);
        }
    }
    &__desc {
        color: #686868;
        font-size: 20px;
        margin-top: 20px;
        line-height: .93em;
        &-line {
            &:first-child {
                padding-left: 82px;
            }
        }
    }
}
</style>