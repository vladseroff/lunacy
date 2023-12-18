<template lang="pug">
.index-about
    LayoutContainer
        .index-about__text#aboutText
            .index-about__text-center.index-about__text-center_first(
                v-word-to-span="'у истоков LUNACY'"
                v-text-char-anim="{y: 0, }"
            )
            .index-about__text-center(
                v-word-to-span="'стоит'"
                v-text-char-anim="{y: 0, }"
            )
            .index-about__text-center(
                v-word-to-span="'Слава Бустер'"
                v-text-char-anim="{y: 0, }"
            )
            .index-about__text-left(
                v-word-to-span="'геймер, который знает какими br должны быть дейвайсы,'"
                v-text-char-anim="{y: 0, }"
            )
            .index-about__text-center(
                v-word-to-span="'через него прошли десятки мышек,'"
                v-text-char-anim="{y: 0, }"
            ) 
            .index-about__text-center(
                v-word-to-span="'клавиатур и наушников'"
                v-text-char-anim="{y: 0, }"
            )
            .index-about__text-center(
                v-word-to-span="'именитых брендов'"
                v-text-char-anim="{y: 0, }"
            )
        .index-about__desc#aboutDesc
            .index-about__desc-text(
                v-word-to-span="'в поисках идеала он пришел'"
                v-text-char-anim="{}"
            )
            .index-about__desc-text(
                v-word-to-span="'к идее своего бренда девайсов,'"
                v-text-char-anim="{startDelay: .3, trigger: '#aboutDesc'}"
            )
            .index-about__desc-text(
                v-word-to-span="'которые разработаны не'"
                v-text-char-anim="{startDelay: .5, trigger: '#aboutDesc'}"
            )
            .index-about__desc-text(
                v-word-to-span="'маркетологами в пиджаках, а'"
                v-text-char-anim="{startDelay: .8, trigger: '#aboutDesc'}"
            )
            .index-about__desc-text(
                v-word-to-span="'настоящими фанатами игр: lunacy'"
                v-text-char-anim="{startDelay: 1, trigger: '#aboutDesc'}"
            )
</template>

<script setup>
import _ from 'lodash'
const { $gsap } = useNuxtApp()

const str1 = ref('у истоков LUNACY')

// onMounted(() => {
//     [].forEach.call(text1.value.children, (element, index) => {
//         const options = {
//             scrollTrigger: {
//                 trigger: `.index-about__text`,
//                 start: "top 70%",
//                 // scrub: true,
//                 end: "+=100%",
//             },
//             transformOrigin: "center center", 
//             delay: index * .1,
//             duration: .3,
//         }
//         $gsap.fromTo(element, {
//             ...options,
//             y: 50,
//             opacity: 0,
//         },{
//             ...options,
//             y: 0,
//             opacity: 1,
//         })
//     })
// })

</script>

<style lang="scss">
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
        line-height: 90%;
        &-center {
            // overflow: hidden;
            max-width: 380px;
            width: 100%;
            &:nth-child(2) {
                padding-left: 230px;
            }
            &:nth-child(3) {
                padding-left: 40px;
                color: #E9E9E9
            }
            &_first {
                .word {
                    &:last-child {
                        color: #E9E9E9;
                    }
                }
            }
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
        margin-top: 30px;
        line-height: .93em;
        &-text {
            &:first-child {
                padding-left: 70px;
            }
        }
    }
}
</style>