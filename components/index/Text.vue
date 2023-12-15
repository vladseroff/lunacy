<template lang="pug">
.index-text
    LayoutContainer
        .index-text__wrapper
            .index-text__text кто станет носить 
            .index-text__text геймерские наушники 
            .index-text__text на улице? 
            .index-text__text тот, кто выбирает 
            .index-text__text Lunacy.
        .index-text__desc они дополняют тебя, а не 
            br 
            |ограничивают. Сочетание дорогой 
            br 
            |экокожи, ткани и терморегулирующего 
            br 
            |силикагеля позволят тебе наслаждаться 
            br 
            |комфортом даже в самых потных катках.
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
        font-size: 18px;
        // max-width: 600px;
        // width: 100%;
        text-indent: 60px;
        margin-top: 20px;
    }
}
</style>