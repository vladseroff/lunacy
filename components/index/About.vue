<template lang="pug">
.about
    LayoutContainer
        .about__title-box
            .about__title
                .about__title-line.about__title-line-one
                    span(
                        style="margin-left: 190px"
                    ) У ИСТОКОВ
                    span БРЕНДА
                .about__title-line.about__title-line-two
                    span СТОИТ
                    span.gold СЛАВА БУСТЕР
        .about__content
            .about__texts
                .about__text.about__text-1
                    span.about__text-1-1 В поисках идеала он пришел к идее
                    span.about__text-1-2 своего бренда девайсов, которые разработаны 
                    span.about__text-1-3 не маркетологами в пиджаках, а настоящими
                    span.about__text-1-4 фанатами игр: LUNACY.
                .about__text.about__text-2
                    span.about__text-2-1 Через него прошли 
                    span.about__text-2-2 десятки мышек, клавиатур 
                    span.about__text-2-3 и наушников именитых 
                    span.about__text-2-4 брендов.
                .about__text.about__text-3
                    span.about__text-3-1 геймер, который знает, 
                    span.about__text-3-2 какими должны быть 
                    span.about__text-3-3 девайсы. 
            .about__content-general-img
                img(
                    src="/images/bg7.png"
                )
            .about__content-second-img
                img(
                    src="/images/bg8.png"
                )
    .about__anchor#about
    .about__trigger.about__trigger-full
    .about__trigger.about__trigger-one
    .about__trigger.about__trigger-two
    .about__trigger.about__trigger-img
    .about__trigger.about__trigger-three
</template>

<script setup>
const { $gsap } = useNuxtApp()

onMounted(() => {
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.about__trigger-one`,
            scrub: true,
            start: "top 0%",
            end: "bottom 0%",
        },
    })
        .from(`.about__title`, {
            scale: 1.2,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.about__title`, {
            scale: 1,
            filter: 'blur(0)',
            transformOrigin: "center center", 
            ease: "none"
        })
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.about__trigger-full`,
            scrub: true,
            start: "top 0%",
            end: "bottom 0%",
        },
    })
        .to(`.about__title-line-one`, {
            x: -100,
            transformOrigin: "center center", 
            ease: "none"
        }, 0)
        .to(`.about__title-line-two`, {
            x: 100,
            transformOrigin: "center center", 
            ease: "none"
        }, 0)
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.about__trigger-img`,
            scrub: true,
            start: "top 0%",
            end: "center 50%",
        },
    })
        .from(`.about__content-general-img`, {
            opacity: 0,
            y: 100,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.about__content-general-img`, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none",
        })
    $gsap.timeline({
        scrollTrigger: {
            trigger: `.about__trigger-two`,
            scrub: true,
            start: "top 0%",
            end: "bottom 0%",
        },
    })
        .to(`.about__title`, {
            opacity: 0.03,
            duration: 1.4,
            transformOrigin: "center center", 
            ease: "none"
        })
        .from(`.about__text-1-1`, {
            opacity: 0,
            x: -20,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.about__text-1-1`, {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .from(`.about__text-1-2`, {
            opacity: 0,
            x: -20,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.about__text-1-2`, {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .from(`.about__text-1-3`, {
            opacity: 0,
            x: -20,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.about__text-1-3`, {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .from(`.about__text-1-4`, {
            opacity: 0,
            x: -20,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.about__text-1-4`, {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .from(`.about__text-3-1`, {
            opacity: 0,
            x: -20,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.about__text-3-1`, {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .from(`.about__text-3-2`, {
            opacity: 0,
            x: -20,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.about__text-3-2`, {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .from(`.about__text-3-3`, {
            opacity: 0,
            x: -20,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.about__text-3-3`, {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .from(`.about__content-second-img`, {
            opacity: 0,
            y: 100,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none",
            duration: 2,
        })
        .to(`.about__content-second-img`, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none",
        })
        .from(`.about__text-2-1`, {
            opacity: 0,
            x: -20,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.about__text-2-1`, {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .from(`.about__text-2-2`, {
            opacity: 0,
            x: -20,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.about__text-2-2`, {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .from(`.about__text-2-3`, {
            opacity: 0,
            x: -20,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.about__text-2-3`, {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .from(`.about__text-2-4`, {
            opacity: 0,
            x: -20,
            filter: 'blur(15px)',
            transformOrigin: "center center", 
            ease: "none"
        })
        .to(`.about__text-2-4`, {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transformOrigin: "center center", 
            ease: "none"
        })
})
</script>

<style lang="scss" scoped>
.about {
    position: relative;
    &__anchor {
        position: absolute;
        top: 2000px;
    }
    .container {
        padding: 300px 0;
        height: 4000px;
        position: relative;
    }
    &__trigger {
        position: absolute;
        left: 0;
        &-full {
            top: 0px;
            height: 3000px;
        }
        &-one {
            top: 0px;
            height: 1000px;
        }
        &-two {
            top: 1000px;
            height: 2000px;
        }
        &-img {
            top: 1000px;
            height: 2000px;
        }
    }
    &__texts {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
    }
    &__text {
        font-weight: 600;
        font-size: 18px;
        text-transform: uppercase;
        color: #FFFFFF;
        line-height: 1.5em;
        position: absolute;
        &:nth-child(1) {
            top: 39%;
            left: 1%;
            span {
                &:nth-child(1) {
                    text-align: right;
                    margin-left: -18px;
                }
            }
        }
        &:nth-child(2) {
            bottom: 8%;
            left: 10%;
        }
        &:nth-child(3) {
            right: 6%;
            top: 24%;
        }
        span {
            display: block;
        }
    }
    &__content {
        position: sticky;
        top: 0px;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        &-second {
            &-img {
                position: absolute;
                right: 0px;
                bottom: 50px;
                img {
                    display: block;
                }
            }
        }
        &-general {
            &-img {
                padding-top: 100px;
                img {
                    display: block;
                }
            }
        }
    }
    &__title-box {
        position: sticky;
        top: 0px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    &__title {
        right: 34px;
        position: relative;
        span {
            font-family: 'Cygre';
            font-weight: 500;
            font-size: 120px;
            text-transform: uppercase;
            color: #FFFFFF;
            margin: 0 30px;
            white-space: nowrap;
            @media screen and (max-width: 1600px) {
                font-size: 80px;
            }
            &.gold {
                font-style: italic;
                background: linear-gradient(to bottom right, #8C6D4B 0%, #B18E5D 40%);
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                padding-right: 13px;
            }
        }
        &-line {

        }
    }
}
</style>