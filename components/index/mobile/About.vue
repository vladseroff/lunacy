<template lang="pug">
.about-mobile#aboutMobile
    LayoutContainer
        .about-mobile__title
            .about-mobile__title-line.about-mobile__title-line-one
                span(
                    style="text-indent: 6%;"
                ) У ИСТОКОВ &nbsp;&nbsp;&nbsp; БРЕНДА
            .about-mobile__title-line.about-mobile__title-line-two
                span СТОИТ
                span.gold СЛАВА БУСТЕР
        .about-mobile__text(
            style="text-indent: 0;"
        ) геймер, который знает, какими 
            br 
            |должны быть девайсы. 
        .about-mobile__img
            img(
                src="/images/mobile/bg2.png"
            )
        .about-mobile__text В поисках идеала он пришел 
            br 
            |к идее своего бренда девайсов, которые 
            br 
            |разработаны не маркетологами 
            br 
            |в пиджаках, а настоящими 
            br 
            |фанатами игр: LUNACY.
        .about-mobile__img
            img(
                src="/images/mobile/bg3.png"
            )
        .about-mobile__text Через него прошли десятки 
            br 
            |мышек, клавиатур и наушников 
            br 
            |именитых брендов.
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.about-mobile {
    padding: 60px 0;
    &__title {
        text-align: left;
        white-space: nowrap;
        max-width: 300px;
        margin: 0 auto 35px;
        width: 100%;
        span {
            font-family: 'Cygre';
            font-weight: 500;
            font-size: 22px;
            text-transform: uppercase;
            color: #FFFFFF;
            // margin: 0 30px;
            white-space: nowrap;
            display: inline-block;
            &:nth-child(2) {
                margin-left: 15px;
            }
            &.gold {
                margin-left: 5px;
                font-style: italic;
                background: linear-gradient(to bottom right, #8C6D4B 0%, #B18E5D 40%);
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                padding-right: 13px;
            }
        }
        &-line {
            &:first-child {
                text-align: right;
            }
        }
    }
    &__text {
        text-indent: 26%;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 1.4em;
        margin: 25px 0;
    }
    &__img {
        img {
            display: block;
            width: 100%;
        }
    }
}
</style>