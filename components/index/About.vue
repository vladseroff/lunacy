<template lang="pug">
.index-about
    LayoutContainer
        .index-about__text
            .index-about__text-center у истоков LUNACY
            .index-about__text-center стоит Слава Бустер
            .index-about__text-left геймер, который знает какими 
                br 
                |должны быть дейвайсы,
            .index-about__text-center через него прошли десятки мышек,
            .index-about__text-center клавиатур и наушников
            .index-about__text-center именитых брендов
        .index-about__desc в поисках идеала он пришел 
            br 
            |к идее своего бренда девайсов, 
            br 
            |которые разработаны не 
            br 
            |маркетологами в пиджаках, а 
            br 
            |настоящими фанатами игр: lunacy
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.index-about {
    margin: 180px 0;
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__text {
        font-size: 44px;
        white-space: nowrap;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 500;
        &-center {
            max-width: 380px;
            width: 100%;
        }
        &-left {
            width: 100%;
        }
    }
    &__desc {
        color: #686868;
        font-size: 20px;
        max-width: 380px;
        width: 100%;
        padding-left: 70px;
        white-space: nowrap;
        margin-top: 20px;
    }
}
</style>