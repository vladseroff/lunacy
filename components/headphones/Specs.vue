<template lang="pug">
.headphones-specs
    LayoutContainer
        .headphones-specs__title
            .headphones-specs__title-line(
                v-for="line of title"
                v-word-to-span
                v-text-char-anim="{duration: .3}"
            ) {{line}}
        .headphones-specs__data
            .headphones-specs__data-row(
                v-for="row, i of data"
            )
                .headphones-specs__data-wrapper
                    .headphones-specs__data-num 0{{i + 1}}
                    .headphones-specs__data-category 
                        span {{row.category}}
                        span(
                            v-if="row.description"
                        ) 
                            em * 
                            |{{row.description}}
                .headphones-specs__data-wrapper
                    .headphones-specs__data-model(
                        v-if="row.model"
                    ) {{row.model}}
                    .headphones-specs__data-items(
                        v-if="row.specs"
                    )
                        .headphones-specs__data-item(
                            v-for="spec of row.specs"
                        )
                            span {{spec.name}}
                            span {{spec.description}}
                    .headphones-specs__data-special(
                        v-if="row.special"
                    )
                        .headphones-specs__data-special-row(
                            v-for="specialRow of row.special"
                        )
                            span(
                                v-for="specialItem of specialRow"
                            ) {{specialItem}}
                    .headphones-specs__data-special(
                        v-if="row.specialLonely"
                    )
                        .headphones-specs__data-special-text {{row.specialLonely}}
</template>

<script setup>
const props = defineProps({
    title: {
        type: Array,
        default: () => []
    },
    data: {
        type: Array,
        default: () => []
    }
})
</script>


<style lang="scss" scoped>
.headphones-specs {
    margin: 180px 0;
    &__title {
        padding-left: 150px;
        margin-bottom: 30px;
        &-line {
            font-weight: 500;
            font-size: 45px;
            line-height: 90%;
            letter-spacing: -0.04em;
            color: #B6B6B6;
            &:nth-child(3) {
                margin-left: 215px;
            }
        }
    }
    &__data {
        &-row {
            border-bottom: 1px solid #686868;
            padding: 30px 0;
            display: flex;
        }
        &-wrapper {
            display: flex;
            justify-content: space-between;
            flex: 1 1 1px;
        }
        &-num {
            font-weight: 600;
            font-size: 20px;
            line-height: 100%;
            letter-spacing: -0.04em;
            color: #686868;
        }
        &-category {
            font-weight: 400;
            font-size: 20px;
            line-height: 100%;
            letter-spacing: -0.04em;
            text-transform: lowercase;
            color: #FFF;
            min-width: 235px;
            span {
                display: block;
                &:nth-child(2) {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 100%;
                    letter-spacing: -0.04em;
                    text-transform: lowercase;
                    color: #686868;
                    margin-top: 10px;
                    em {
                        color: #FFF;
                        font-style: normal;
                    }
                }
            }
        }
        &-model {
            font-weight: 400;
            font-size: 20px;
            line-height: 100%;
            letter-spacing: -0.04em;
            text-transform: lowercase;
            color: #FFF;
        }
        &-items {
            flex: 1 1 auto;
        }
        &-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &:not(:last-child) {
                margin-bottom: 10px;
            }
            span {
                &:first-child {
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 100%;
                    letter-spacing: -0.04em;
                    text-transform: lowercase;
                    color: #686868;
                }
                &:nth-child(2) {
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 100%;
                    letter-spacing: -0.04em;
                    text-transform: lowercase;
                    color: #FFFFFF;
                }
            }
        }
        &-special {
            border: 1px dashed #686868;
            flex: 1 1 auto;
            padding: 20px;
            &-text {
                font-weight: 400;
                font-size: 20px;
                line-height: 100%;
                letter-spacing: -0.04em;
                text-transform: lowercase;
                color: #FFFFFF;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 250px;
            }
            &-row {
                display: flex;
                &:not(:last-child) {
                    margin-bottom: 20px;
                }
                &:first-child,
                &:last-child {
                    justify-content: space-between;
                }
                &:nth-child(2) {
                    justify-content: flex-end;
                    padding-right: 65px;
                }
                &:nth-child(3) {
                    justify-content: flex-end;
                    padding-right: 145px;
                }
                &:nth-child(4) {
                    padding-left: 200px;
                }
                &:nth-child(5) {
                    padding-left: 123px;
                }
                span {
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 100%;
                    letter-spacing: -0.04em;
                    text-transform: lowercase;
                    color: #FFFFFF;
                }
            }
        }
    }
}
</style>