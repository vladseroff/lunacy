<template lang="pug">
.product
    .product__img(
        :class="[`img-${index}`]"
    )
        img(
            src="/images/bg4.png"
        )
    .product__wrapper
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
            img(
                src="/images/bg6.png"
            )
        .product__text#text2(
            :class="[`text-${index}-2`]"
        )
            img(
                src="/images/bg6.png"
            )
        .product__text#text3(
            :class="[`text-${index}-3`]"
        )
            img(
                src="/images/bg6.png"
            )
    .product__triggers
        .product__trigger.product__trigger-img-zoom(
            :class="[`img-zoom-${index}`]"
        )
        .product__trigger.product__trigger-box-zoom(
            :class="[`box-zoom-${index}`]"
        )
        .product__trigger.product__trigger-text-1(
            :class="[`trigger-text-${index}`]"
        )
        .product__trigger.product__trigger-text-2(
            :class="[`trigger-text-second-${index}`]"
        )
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
    if (props.dark) {
        $gsap.fromTo('#app', {
            scrollTrigger: {
                trigger: `.img-zoom-${props.index}`,
                scrub: true,
                start: "center center",
                end: "+=100%",
                markers: false,
            },
            backgroundColor: '#071D49',
            transformOrigin: "center center", 
            ease: "none"
        },{
            scrollTrigger: {
                trigger: `.img-zoom-${props.index}`,
                scrub: true,
                start: "center center",
                end: "+=100%",
                markers: false,
            },
            backgroundColor: '#0E0E0E',
            transformOrigin: "center center", 
            ease: "none"
        })
    }
    $gsap.fromTo(`.img-${props.index}`, {
        scrollTrigger: {
            trigger: `.img-zoom-${props.index}`,
            scrub: true,
            start: "top top",
            end: "+=100%",
            markers: false,
        },
        x: 0,
        y: 1000,
        transformOrigin: "center center", 
        ease: "none"
    },{
        scrollTrigger: {
            trigger: `.img-zoom-${props.index}`,
            scrub: true,
            start: "top top",
            end: "+=100%",
            markers: false,
        },
        x: 0,
        y: 0,
        transformOrigin: "center center", 
        ease: "none"
    })
    $gsap.fromTo(`.box-${props.index}`, {
        scrollTrigger: {
            trigger: `.box-zoom-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
        },
        x: 0,
        scale: 0.5, 
        opacity: 0,
        transformOrigin: "center center", 
        ease: "none"
    },{
        scrollTrigger: {
            trigger: `.box-zoom-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
        },
        x: 0,
        scale: 1, 
        opacity: 1,
        transformOrigin: "center center", 
        ease: "none"
    })
    $gsap.fromTo(`.img-${props.index}`, {
        scrollTrigger: {
            trigger: `.box-zoom-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
        },
        scale: 1, 
        transformOrigin: "center center", 
        ease: "none"
    },{
        scrollTrigger: {
            trigger: `.box-zoom-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
        },
        scale: .5, 
        transformOrigin: "center center", 
        ease: "none"
    })
    $gsap.fromTo(`.text-${props.index}-1`, {
        scrollTrigger: {
            trigger: `.box-zoom-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
        },
        opacity: 0,
        scale: .5,
        transformOrigin: "center center", 
        ease: "none"
    },{
        scrollTrigger: {
            trigger: `.box-zoom-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
        }, 
        opacity: 1,
        scale: 1,
        transformOrigin: "center center", 
        ease: "none"
    })
    $gsap.fromTo(`.box-${props.index}`, {
        scrollTrigger: {
            trigger: `.trigger-text-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
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
            markers: false,
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
            markers: false,
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
            markers: false,
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
            markers: false,
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
            markers: false,
        },
        x: 706,
        transformOrigin: "center center", 
        ease: "none"
    })
    $gsap.fromTo(`.box-${props.index}`, {
        scrollTrigger: {
            trigger: `.trigger-text-second-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
        },
        x: 706,
        transformOrigin: "center center", 
        ease: "none"
    },{
        scrollTrigger: {
            trigger: `.trigger-text-second-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
        },
        x: 0,
        transformOrigin: "center center", 
        ease: "none"
    })
    $gsap.fromTo(`.img-${props.index}`, {
        scrollTrigger: {
            trigger: `.trigger-text-second-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
        },
        x: 706,
        transformOrigin: "center center", 
        ease: "none"
    },{
        scrollTrigger: {
            trigger: `.trigger-text-second-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
        },
        x: 0,
        transformOrigin: "center center", 
        ease: "none"
    })
    $gsap.fromTo(`.text-${props.index}-3`, {
        scrollTrigger: {
            trigger: `.trigger-text-second-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
        },
        x: 706,
        opacity: 0,
        scale: 0.5,
        transformOrigin: "center center", 
        ease: "none"
    },{
        scrollTrigger: {
            trigger: `.trigger-text-second-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
        }, 
        x: 0,
        opacity: 1,
        scale: 1,
        transformOrigin: "center center", 
        ease: "none"
    })
    $gsap.fromTo(`.text-${props.index}-2`, {
        scrollTrigger: {
            trigger: `.trigger-text-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
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
            markers: false,
        },
        opacity: 1,
        x: 0,
        scale: 1,
        transformOrigin: "center center", 
        ease: "none"
    })
    $gsap.fromTo(`.text-${props.index}-2`, {
        scrollTrigger: {
            trigger: `.trigger-text-second-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
        },
        // opacity: 1,
        // x: 0,
        transformOrigin: "center center", 
        ease: "none"
    },{
        scrollTrigger: {
            trigger: `.trigger-text-second-${props.index}`,
            scrub: true,
            start: "center center",
            end: "+=100%",
            markers: false,
        },
        opacity: 0,
        x: -706,
        scale: 0.5,
        transformOrigin: "center center", 
        ease: "none"
    })
})
</script>

<style lang="scss" scoped>
.product {
    // height: 2000px;
    position: relative;
    margin-top: 100px;
    &__wrapper {
        position: relative;
        height: 7597px;
    }
    &__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: sticky;
        top: 60px;
        padding-top: 60px;
        img {
            display: block;
            width: 600px;
        }
        &#text1,
        &#text3 {
            display: flex;
        }
        &#text1 {
            opacity: 0;
            align-items: flex-end;
        }
        &#text2 {
            opacity: 0;
        }
        &#text3 {
            opacity: 0;
            align-items: flex-end;
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
        top: 60px;
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
        top: 60px;
        width: 698px;
        height: 698px;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(0)
    }
    &__triggers {
        position: absolute;
        top: 0;
        width: 100%;
        left: 0;
    }
    &__trigger {
        // background: rgba(red, .2);
        width: 100%;
        height: 1px;
        font-size: 10px;
        padding-top: 5px;
        font-weight: 300;
        pointer-events: none;
        &-img-zoom {
            height: 2000px;
        }
        &-box-zoom {
            height: 1300px;
        }
        &-text-1 {
            height: 2000px;
        }
        &-text-2 {
            height: 3000px;
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