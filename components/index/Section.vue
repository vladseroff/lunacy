<template lang="pug">
.section
    LayoutContainer
        .section__top
            .section__top-name {{desc}}
            .section__top-count ({{count}})
        .section__title(
            :class="[`section-title-${index}`]"
        ) {{title}}
        .section__body
            slot
            .section__trigger(
                :class="[`section-trigger-${index}`]"
            )
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        default: ''
    },
    count: {
        type: String,
        default: ''
    },
    index: {
        type: String,
        required: true
    },
})

const { $gsap } = useNuxtApp()

onMounted(() => {
    // $gsap.timeline({
    //     scrollTrigger: {
    //         trigger: `.section-trigger-${props.index}`,
    //         scrub: true,
    //         start: "top top",
    //         end: "+=50%",
    //     },
    // }).from(`.section-title-${props.index}`, {
    //     opacity: 0,
    //     scale: 1.2,
    //     y: 200,
    //     transformOrigin: "center center", 
    //     ease: "none"
    // }).to(`.section-title-${props.index}`, {
    //     opacity: 1,
    //     scale: 1,
    //     y: 0,
    //     transformOrigin: "center center", 
    //     ease: "none"
    // })
    // $gsap.fromTo('.section__title', {
    //     scrollTrigger: {
    //         trigger: '.banner__logo',
    //         scrub: true,
    //         start: "top top",
    //         end: "+=100%",
    //     },
    //     opacity: 0,
    //     scale: 200,
    //     transformOrigin: "center center", 
    //     ease: "none"
    // },{
    //     scrollTrigger: {
    //         trigger: '.banner__logo',
    //         scrub: true,
    //         start: "top top",
    //         end: "+=100%",
    //     },
    //     opacity: 1,
    //     scale: 1,
    //     transformOrigin: "center center", 
    //     ease: "none"
    // })
})
</script>

<style lang="scss" scoped>
.section {
    padding-top: 150px;
    padding-bottom: 5px;
    position: relative;
    // &:before {
    //     content: '';
    //     display: block;
    //     background: url('/images/line.svg') center center no-repeat;
    //     height: 1px;
    //     width: 100%;
    //     margin-bottom: 30px;
    // }
    &__trigger {
        position: absolute;
        top: 0;
        width: 100%;
        left: 0;
        width: 100%;
        height: 1px;
        font-size: 10px;
        padding-top: 5px;
        font-weight: 300;
        pointer-events: none;
        height: 1000px;
    }
    &__title {
        text-align: center;
        font-family: 'Cygre';
        font-weight: 300;
        font-size: 110px;
        text-transform: uppercase;
        color: #fff;
        margin-top: -37px;
        // background: linear-gradient(180deg, #F9F9F9 0%, #8F8F8F 100%);
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
        // background-clip: text;
        // text-fill-color: transparent;
        // margin-top: -43px;
    }
    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-name {
            font-size: 16px;
            color: var(--color-grey);
            font-weight: 500;
            text-transform: uppercase;
        }
        &-count {
            font-family: 'Cygre';
            font-weight: 400;
            font-size: 20px;
            text-transform: uppercase;
            color: var(--color-grey);
            // background: linear-gradient(180deg, #F9F9F9 0%, #8F8F8F 100%);
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
            // background-clip: text;
            // text-fill-color: transparent;
        }
    }
}
</style>