<template lang="pug">
.headphones-sound-interface#headphones-sound-interface
    LayoutContainer
        .headphones-sound-interface__wrapper
            .headphones-sound-interface__title(
                v-word-to-span="title"
                v-text-char-anim="{duration: .3}"
            )
            .headphones-sound-interface__desc
                .headphones-sound-interface__desc-line(
                    v-for="line, i of desc"
                    v-word-to-span="line"
                    v-text-char-anim="{startDelay: i * 0.5}"
                )
            .headphones-sound-interface__images
                .headphones-sound-interface__img(
                    v-for="i of 4"
                    :class="[`headphones-sound-interface__img_${i}`]"
                )
                    img(
                        :src="image"
                    )
        .headphones-sound-interface__specs#headphones-sound-interface__specs
            .headphones-sound-interface__spec(
                v-for="spec of specs"
            )
                .headphones-sound-interface__spec-common
                    .headphones-sound-interface__spec-title {{spec.title}}
                    .headphones-sound-interface__spec-desc {{spec.desc}}
        .headphones-sound-interface__lines
            .headphones-sound-interface__line(
                v-for="spec, i of specs"
            )
                .headphones-sound-interface__line-bar(
                    :class="[`headphones-sound-interface__line_${i}`]"
                )
                    .headphones-sound-interface__spec-common
                        .headphones-sound-interface__spec-title {{spec.title}}
                        .headphones-sound-interface__spec-desc {{spec.desc}}
</template>

<script setup>
const { $gsap } = useNuxtApp()

const props = defineProps({
    image: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '',
    },
    desc: {
        type: Array,
        default: () => [],
    },
    specs: {
        type: Array,
        default: () => [],
    }
})
onMounted(() => {
    nextTick(() => {
        $gsap.timeline({
            scrollTrigger: {
                trigger: `#headphones-sound-interface`,
                end: "+=120%",
                scrub: true,
                // markers: true
            }
        })
            .from('.headphones-sound-interface__line_0', {
                width: '0%',
                ease: "ease"
            })
            .to('.headphones-sound-interface__line_0', {
                width: '68%',
                ease: "ease"
            })
        $gsap.timeline({
            scrollTrigger: {
                trigger: `#headphones-sound-interface`,
                end: "+=140%",
                scrub: true,
            }
        })
            .from('.headphones-sound-interface__line_1', {
                width: '0%',
                ease: "ease"
            })
            .to('.headphones-sound-interface__line_1', {
                width: '68%',
                ease: "ease"
            })
        $gsap.timeline({
            scrollTrigger: {
                trigger: `#headphones-sound-interface`,
                end: "+=160%",
                scrub: true,
            }
        })
            .from('.headphones-sound-interface__line_2', {
                width: '0%',
                ease: "ease"
            })
            .to('.headphones-sound-interface__line_2', {
                width: '68%',
                ease: "ease"
            })
        $gsap.timeline({
            scrollTrigger: {
                trigger: `#headphones-sound-interface`,
                end: "+=180%",
                scrub: true,
            }
        })
            .from('.headphones-sound-interface__line_3', {
                width: '0%',
                ease: "ease"
            })
            .to('.headphones-sound-interface__line_3', {
                width: '68%',
                ease: "ease"
            })
        $gsap.fromTo(`.headphones-sound-interface__img_2`, {
            scrollTrigger: {
                trigger: `.headphones-sound-interface`,
                start: "-=30%",
                end: "+=80%",
            },
            left: '0px',
            ease: "ease"
        },{
            scrollTrigger: {
                trigger: `.headphones-sound-interface`,
                start: "-=30%",
                end: "+=80%",
            }, 
            left: '110px',
            ease: "ease"
        })
        $gsap.fromTo(`.headphones-sound-interface__img_3`, {
            scrollTrigger: {
                trigger: `.headphones-sound-interface`,
                start: "-=30%",
                end: "+=80%",
            },
            left: '0px',
            ease: "ease"
        },{
            scrollTrigger: {
                trigger: `.headphones-sound-interface`,
                start: "-=30%",
                end: "+=80%",
            }, 
            left: '198px',
            ease: "ease"
        })
        $gsap.fromTo(`.headphones-sound-interface__img_4`, {
            scrollTrigger: {
                trigger: `.headphones-sound-interface`,
                start: "-=30%",
                end: "+=80%",
            },
            left: '0px',
            ease: "ease"
        },{
            scrollTrigger: {
                trigger: `.headphones-sound-interface`,
                start: "-=30%",
                end: "+=80%",
            }, 
            left: '257px',
            ease: "ease"
        })
    })
})
</script>

<style lang="scss" scoped>
.headphones-sound-interface {
    margin: 180px 0;
    $root: &;
    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__images {
        width: 137px;
        position: relative;
        margin: 10px 0 30px -247px;
        #{$root} {
            &__img {
                &:nth-child(2),
                &:nth-child(3),
                &:nth-child(4) {
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                &:nth-child(2) {
                    // left: 110px;
                    transform: scale(.85);
                    z-index: 5;
                    &:before {
                        opacity: .2;
                    }
                }
                &:nth-child(3) {
                    // left: 198px;
                    transform: scale(.65);
                    z-index: 4;
                    &:before {
                        opacity: .4;
                    }
                }
                &:nth-child(4) {
                    // left: 257px;
                    transform: scale(.45);
                    z-index: 3;
                    &:before {
                        opacity: .6;
                    }
                }
            }
        }
    }
    &__img {
        width: 137px;
        flex: none;
        z-index: 6;
        position: relative;
        mix-blend-mode: exclusion;
        &:nth-child(1) {
            mix-blend-mode: normal;
        }
        &:before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #000;
            opacity: 0;
        }
        img {
            display: block;
            width: 100%;
        }
    }
    &__title {
        font-weight: 500;
        font-size: 34px;
        line-height: 90%;
        letter-spacing: -0.04em;
        color: #B6B6B6;
        margin-bottom: 40px;
        margin-left: -278px;
    }
    &__desc {
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: -0.04em;
        color: #686868;
        margin-bottom: 20px;
        margin-left: -98px;
        &-line {
            &:nth-child(1) {
                margin-left: 60px;
            }
        }
    }
    &__specs {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    &__spec {
        height: 112px;
        position: relative;
        width: 795px;
        &-title {
            font-weight: 400;
            font-size: 20px;
            line-height: 100%;
            letter-spacing: -0.04em;
            text-transform: lowercase;
            color: #686868;
            margin-bottom: 5px;
        }
        &-desc {
            font-weight: 500;
            font-size: 45px;
            line-height: 100%;
            letter-spacing: -0.04em;
            text-transform: lowercase;
            color: #B6B6B6;
        }
        &-common {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 112px;
        }
    }
    &__lines {
        position: relative;
        margin-top: -448px;
    }
    &__line {
        position: relative;
        top: 0;
        left: 0;
        z-index: 2;
        height: 112px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        #{$root} {
            &__spec {
                &-title,
                &-desc {
                    color: #000000;
                }
                &-common {
                    width: 795px;
                    float: right;
                }
            }
        }
        &-bar {
            height: 100%;
            background: #979B9E;
            right: 0;
            top: 0;
            width: 0;
            overflow: hidden;
        }
    }
}
</style>