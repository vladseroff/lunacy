<template lang="pug">
.index-text
    LayoutContainer
        .index-text__text кто станет носить геймерские 
            br 
            |наушники на улице? Тот, кто 
            br 
            |выбирает Lunacy.
        .index-text__desc Они дополняют тебя, а не 
            br 
            |ограничивают. Сочетание дорогой 
            br 
            |экокожи, ткани и терморегулирующего 
            br 
            |силикагеля позволят тебе наслаждаться 
            br 
            |комфортом даже в самых потных 
            br 
            |катках.
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
        max-width: 600px;
        width: 100%;
    }
    &__desc {
        color: #686868;
        font-size: 18px;
        max-width: 600px;
        width: 100%;
        text-indent: 60px;
        margin-top: 20px;
    }
}
</style>