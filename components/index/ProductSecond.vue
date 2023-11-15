<template lang="pug">
.product
    .trigger-dark-bg
    .trigger-color(
        :class="[`trigger-color-${index}`]"
    )
    .product__wrapper
        .product__img(
            :class="[`img-${index}`]"
        )
            IndexProductCanvas(
                :index="index"
                folder="sequence/night/"
            )
        //- .product__img(
        //-     :class="[`img-${index}`]"
        //- )
        //-     img(
        //-         src="/images/bg4.png"
        //-     )
        .product__preview-text
            .product__preview-text-box
                .product__preview-text-title(
                    :class="[`preview-text-title-${index}`]"
                ) night
                .product__preview-text-desc(
                    :class="[`preview-text-desc-${index}`]"
                ) 
                    span(
                        :class="[`preview-text-word-1-${index}`]"
                    ) Очень легкие. 
                    span(
                        style="margin-left: 15px"
                        :class="[`preview-text-word-2-${index}`]"
                    ).underline Легчайшие
            .product__preview-text-box
                .product__preview-text-text(
                    :class="[`preview-text-text-${index}`]"
                ) Никаких лишних шумов, только 
                    br 
                    |чистый звук динамиков 
                    br 
                    |и микрофона. Кстати, микрофон 
                    br 
                    |задвигается и автоматически 
                    br 
                    |выключается.
        .product__box(
            :class="[`box-${index}`]"
        )
            img(
                src="/images/circle-3-b.svg"
            )
            img(
                src="/images/circle-4-b.svg"
            )
            img(
                src="/images/circle-5-b.svg"
            )
            img(
                src="/images/circle-6-b.svg"
            )
            img(
                src="/images/circle-1-b.svg"
            )
            img(
                src="/images/circle-2.svg"
            )
        .product__text#text1(
            :class="[`text-${index}-1`]"
        )
            .product__text-container
                .product__text-title night
                .product__text-pretitle Никаких 
                    br 
                    |компромиссов
                .product__text-desc
                    p В гонке за весом мы не бросили 
                        br 
                        |гонку за качеством, надежностью 
                        br 
                        |и технологичностью
                UiButton ПРЕДЗАКАЗ
        .product__text#text2(
            :class="[`text-${index}-2`]"
        )
            .product__text-container
                .product__text-title night
                .product__text-pretitle Так звучит ночь
                .product__text-desc
                    p Никаких лишних шумов, только 
                        br 
                        |чистый звук динамиков и микрофона. 
                        br 
                        |Кстати, микрофон задвигается 
                        br 
                        |и автоматически выключается.
                UiButton ПРЕДЗАКАЗ
    .product__triggers
        .product__trigger.product__trigger-img-zoom(
            :class="[`img-zoom-${index}`]"
        )
        .product__trigger.product__trigger-preview-text(
            :class="[`preview-text-${index}`]"
        )
        .product__trigger.product__trigger-preview-text-hide(
            :class="[`preview-text-hide-${index}`]"
        )
        .product__trigger.product__trigger-box-zoom(
            :class="[`box-zoom-${index}`]"
        )
        .product__trigger.product__trigger-text-1(
            :class="[`trigger-text-${index}`]"
        )
        //- .product__trigger.product__trigger-text-2(
        //-     :class="[`trigger-text-second-${index}`]"
        //- )
</template>

<script setup>
const { $gsap } = useNuxtApp()

const props = defineProps({
    index: {
        type: String,
        required: true
    },
    dark: {
        type: Boolean,
        default: false,
    }
})

onMounted(() => {
    
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.img-zoom-${props.index}`,
            scrub: true,
            start: "top 20%",
            end: "bottom 20%",
            
        },
    })
        .from(`.img-${props.index}`, {
            x: 340,
            y: 1000,
            scale: 1.5,
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.img-${props.index}`, {
            x: 340,
            y: 0,
            scale: 1,
            transformOrigin: "center center", 
            ease: "none"
        })
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.preview-text-${props.index}`,
            scrub: true,
            start: "80% center",
            end: "=+100%",
            // markers: true,
        },
    })
        .from(`.preview-text-title-${props.index}`, {
            opacity: 0,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none",
            duration: 10,
        })
        .to(`.preview-text-title-${props.index}`, {
            opacity: 1,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .from(`.preview-text-word-1-${props.index}`, {
            filter: 'blur(15px)',
            scale: 1.1,
            opacity: 0,
            transformOrigin: "center center", 
            ease: "none",
            duration: 10,
        })
        .to(`.preview-text-word-1-${props.index}`, {
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            transformOrigin: "center center", 
            ease: "none"
        })
        .from(`.preview-text-word-2-${props.index}`, {
            filter: 'blur(15px)',
            scale: 1.1,
            opacity: 0,
            transformOrigin: "center center", 
            ease: "none",
            duration: 10,
        })
        .to(`.preview-text-word-2-${props.index}`, {
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            transformOrigin: "center center", 
            ease: "none",
        })
        .from(`.preview-text-text-${props.index}`, {
            opacity: 0,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none",
            duration: 10,
        })
        .to(`.preview-text-text-${props.index}`, {
            opacity: 1,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none"
        })
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.box-zoom-${props.index}`,
            scrub: true,
            start: "center 80%",
            end: "+=100%",
        },
    })
        .to(`.preview-text-text-${props.index}`, {
            opacity: 0,
            x: -100,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        }, 0)
        .to(`.preview-text-title-${props.index}`, {
            opacity: 0,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        }, 0)
        .to(`.preview-text-word-1-${props.index}`, {
            filter: 'blur(15px)',
            scale: 10,
            opacity: 0,
            transformOrigin: "center center", 
            ease: "none"
        }, 0)
        .to(`.preview-text-word-2-${props.index}`, {
            filter: 'blur(15px)',
            scale: 10,
            opacity: 0,
            transformOrigin: "center center", 
            ease: "none"
        }, 0)
    $gsap.fromTo(`.img-${props.index}`, {
        scrollTrigger: {
            trigger: `.box-zoom-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
        },
        scale: 1,
        x: 340,
        transformOrigin: "center center", 
        ease: "none"
    },{
        scrollTrigger: {
            trigger: `.box-zoom-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
        },
        scale: .5,
        x: 0,
        transformOrigin: "center center", 
        ease: "none"
    })
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.box-zoom-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
        },
    })
        .from(`.box-${props.index}`, {
            x: 0,
            scale: 0.5, 
            opacity: 0,
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.box-${props.index}`, {
            x: 0,
            scale: 1, 
            opacity: 1,
            transformOrigin: "center center", 
            ease: "none"
        })
        .from(`.text-${props.index}-1`, {
            opacity: 0,
            x: 200,
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.text-${props.index}-1`, {
            opacity: 1,
            x: 0,
            transformOrigin: "center center", 
            ease: "none"
        })
    $gsap.fromTo(`.box-${props.index}`, {
        scrollTrigger: {
            trigger: `.trigger-text-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
        },
        x: 0,
        transformOrigin: "center center", 
        ease: "none"
    },{
        scrollTrigger: {
            trigger: `.trigger-text-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
        },
        x: 706,
        transformOrigin: "center center", 
        ease: "none"
    })
    $gsap.fromTo(`.text-${props.index}-1`, {
        scrollTrigger: {
            trigger: `.trigger-text-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
        },
        x: 0,
        // opacity: 1,
        scale: 1,
        transformOrigin: "center center", 
        ease: "none"
    },{
        scrollTrigger: {
            trigger: `.trigger-text-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
        }, 
        x: 706,
        opacity: 0,
        scale: 0.5,
        transformOrigin: "center center", 
        ease: "none"
    })
    $gsap.fromTo(`.img-${props.index}`, {
        scrollTrigger: {
            trigger: `.trigger-text-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
        },
        x: 0,
        transformOrigin: "center center", 
        ease: "none"
    },{
        scrollTrigger: {
            trigger: `.trigger-text-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
        },
        x: 706,
        transformOrigin: "center center", 
        ease: "none"
    })
    $gsap.fromTo(`.text-${props.index}-2`, {
        scrollTrigger: {
            trigger: `.trigger-text-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
        },
        opacity: 0,
        x: -706,
        scale: 0.5,
        transformOrigin: "center center", 
        ease: "none"
    }, {
        scrollTrigger: {
            trigger: `.trigger-text-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
        },
        opacity: 1,
        x: 0,
        scale: 1,
        transformOrigin: "center center", 
        ease: "none"
    })
    // $gsap.fromTo(`.box-${props.index}`, {
    //     scrollTrigger: {
    //         trigger: `.trigger-text-second-${props.index}`,
    //         scrub: true,
    //         start: "center center",
    //         end: "+=100%",
    //     },
    //     x: 706,
    //     transformOrigin: "center center", 
    //     ease: "none"
    // },{
    //     scrollTrigger: {
    //         trigger: `.trigger-text-second-${props.index}`,
    //         scrub: true,
    //         start: "center center",
    //         end: "+=100%",
    //     },
    //     x: 0,
    //     transformOrigin: "center center", 
    //     ease: "none"
    // })
    // $gsap.fromTo(`.img-${props.index}`, {
    //     scrollTrigger: {
    //         trigger: `.trigger-text-second-${props.index}`,
    //         scrub: true,
    //         start: "center center",
    //         end: "+=100%",
    //     },
    //     x: 706,
    //     transformOrigin: "center center", 
    //     ease: "none"
    // },{
    //     scrollTrigger: {
    //         trigger: `.trigger-text-second-${props.index}`,
    //         scrub: true,
    //         start: "center center",
    //         end: "+=100%",
    //     },
    //     x: 0,
    //     transformOrigin: "center center", 
    //     ease: "none"
    // })
    // $gsap.fromTo(`.text-${props.index}-3`, {
    //     scrollTrigger: {
    //         trigger: `.trigger-text-second-${props.index}`,
    //         scrub: true,
    //         start: "center center",
    //         end: "+=100%",
    //     },
    //     x: 706,
    //     opacity: 0,
    //     scale: 0.5,
    //     transformOrigin: "center center", 
    //     ease: "none"
    // },{
    //     scrollTrigger: {
    //         trigger: `.trigger-text-second-${props.index}`,
    //         scrub: true,
    //         start: "center center",
    //         end: "+=100%",
    //     }, 
    //     x: 0,
    //     opacity: 1,
    //     scale: 1,
    //     transformOrigin: "center center", 
    //     ease: "none"
    // })
    // $gsap.fromTo(`.text-${props.index}-2`, {
    //     scrollTrigger: {
    //         trigger: `.trigger-text-second-${props.index}`,
    //         scrub: true,
    //         start: "center center",
    //         end: "+=100%",
    //     },
    //     // opacity: 1,
    //     // x: 0,
    //     transformOrigin: "center center", 
    //     ease: "none"
    // },{
    //     scrollTrigger: {
    //         trigger: `.trigger-text-second-${props.index}`,
    //         scrub: true,
    //         start: "center center",
    //         end: "+=100%",
    //     },
    //     opacity: 0,
    //     x: -706,
    //     scale: 0.5,
    //     transformOrigin: "center center", 
    //     ease: "none"
    // })

})
</script>

<style lang="scss" scoped>
.product {
    // height: 2000px;
    position: relative;
    margin-top: 200px;
    .trigger-dark-bg {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: none;
    }
    .trigger-color {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: none;
    }
    &__wrapper {
        position: relative;
        height: 9000px;
    }
    &__preview-text {
        position: sticky;
        top: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 600px;
        &-text {
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;
            color: #FFFFFF;
            text-align: left;
        }
        &-box {
            width: 400px;
            text-align: left;
        }
        &-title {
            font-family: 'Cygre';
            font-style: normal;
            font-size: 100px;
            text-transform: uppercase;
            background: linear-gradient(159.68deg, #6F543D -1.53%, #A68457 36%, #C39D64 58.67%, #BB9661 66.86%, #A68457 79.27%, #846747 94.31%, #6F543D 102.34%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
        &-desc {
            font-weight: 600;
            font-size: 24px;
            text-transform: uppercase;
            margin-top: 10px;
            em {
                margin-left: 10px;
            }
            span {
                display: inline-block;
                &.underline {
                    position: relative;
                    &:before {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: -3px;
                        right: 0;
                        width: 80%;
                        background: #fff;
                        height: 1px;
                    }
                }
            }
        }
    }
    &__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: sticky;
        top: 90px;
        text-align: left;
        height: 698px;
        z-index: 3;
        &.right {
            text-align: right;
        }
        img {
            display: block;
            width: 600px;
        }
        &#text1,
        &#text3 {
            display: flex;
        }
        &#text1 {
            align-items: flex-end;
        }
        &#text2 {
            // text-align: right;
            // .button {
            //     float: right;
            // }
        }
        &#text3 {
            align-items: flex-end;
        }
        &-container {
            width: 620px;
        }
        &-title {
            font-family: 'Cygre';
            font-weight: 400;
            font-size: 30px;
            text-transform: uppercase;
            background: linear-gradient(to bottom right, #8C6D4B 0%, #B18E5D 40%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
        &-pretitle {
            font-family: 'Cygre';
            font-style: normal;
            font-size: 56px;
            text-transform: uppercase;
            color: #FFFFFF;
            margin: 30px 0 20px;
        }
        &-desc {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            margin-bottom: 80px;
        }
    }
    @keyframes rotation {
        0% {
            transform: translate3d(-50%, -50%, 0) rotate(0);
        }
        100% {
            transform: translate3d(-50%, -50%, 0) rotate(360deg);
        }
    }
    &__box {
        position: sticky;
        top: 90px;
        width: 698px;
        height: 698px;
        transform: scale(.5);
        opacity: 0;
        img {
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%, -50%, 0);
            &:nth-child(6) {
                animation: rotation 40s linear infinite;
            }
            &:nth-child(5) {
                animation: rotation 130s linear infinite;
            }
            &:nth-child(1) {
                animation: rotation 80s linear reverse infinite;
            }
            &:nth-child(2) {
                animation: rotation 100s linear infinite;
            }
            &:nth-child(3) {
                animation: rotation 50s linear reverse infinite;
            }
        }
    }
    &__img {
        position: sticky;
        top: 90px;
        width: 698px;
        height: 698px;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(0);
        canvas {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    &__triggers {
        position: absolute;
        top: 0;
        width: 100%;
        left: 0;
    }
    &__trigger {
        width: 100%;
        height: 1px;
        font-size: 10px;
        padding-top: 5px;
        font-weight: 300;
        pointer-events: none;
        position: absolute;
        left: 0;
        &-img-zoom {
            height: 1000px;
            top: -1500px;
        }
        &-preview-text {
            height: 1000px;
            top: 0px;
        }
        &-preview-text-hide {
            height: 1000px;
            top: 2000px;
        }
        &-box-zoom {
            height: 2000px;
            top: 2000px;
        }
        &-text-1 {
            height: 3000px;
            top: 4000px;
        }
    }
    &__alert {
        position: fixed;
        left: 50px;
        bottom: 50px;
        z-index: 1000;
        pointer-events: none;
        font-size: 10px;
        color: #fff;
    }
}
</style>