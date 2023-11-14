<template lang="pug">
.banner
    LayoutContainer
        .banner__logo
            .banner__logo-letter.banner__logo-letter_1
                img(
                    src="/images/l.svg"
                )
            .banner__logo-letter.banner__logo-letter_2
                img(
                    src="/images/u.svg"
                )
            .banner__logo-letter.banner__logo-letter_3
                img(
                    src="/images/n.svg"
                )
            .banner__logo-letter.banner__logo-letter_4
                img(
                    src="/images/a.svg"
                )
            .banner__logo-letter.banner__logo-letter_5
                img(
                    src="/images/logo-lg.svg"
                )
            .banner__logo-letter.banner__logo-letter_6
                img(
                    src="/images/y.svg"
                )
        .banner__product
            img(
                src="/images/bg1.png"
            )
        .banner__buttons
            UiButton.button1(

            ) КУПИТЬ
            UiButton.button2.outlined(
                
            ) ПОДРОБНЕЕ
</template>

<script setup>
const { $gsap } = useNuxtApp()

onMounted(() => {
    // $gsap.to('#app', {
    //     scrollTrigger: {
    //         trigger: '.banner',
    //         scrub: true,
    //         start: "center center",
    //         end: "+=100%",
    //     },
    //     backgroundColor: '#0E0E0E',
    //     transformOrigin: "center center", 
    //     ease: "none"
    // })
    $gsap.fromTo('.banner__logo-letter_1', {
        y: 100,
        opacity: 0,
        scale: 0.5,
        transformOrigin: "center center", 
        ease: "ease"
    },{
        y: 0,
        opacity: 1,
        duration: .8,
        scale: 1,
        transformOrigin: "center center", 
        ease: "ease"
    })
    $gsap.fromTo('.banner__logo-letter_2', {
        y: 100,
        opacity: 0,
        scale: 0.5,
        transformOrigin: "center center", 
        ease: "ease"
    },{
        y: 0,
        opacity: 1,
        duration: .8,
        scale: 1,
        delay: .4,
        transformOrigin: "center center", 
        ease: "ease"
    })
    $gsap.fromTo('.banner__logo-letter_3', {
        y: 100,
        opacity: 0,
        scale: 0.5,
        transformOrigin: "center center", 
        ease: "ease"
    },{
        y: 0,
        opacity: 1,
        duration: .8,
        scale: 1,
        delay: .8,
        transformOrigin: "center center", 
        ease: "ease"
    })
    $gsap.fromTo('.banner__logo-letter_4', {
        y: 100,
        opacity: 0,
        scale: 0.5,
        transformOrigin: "center center", 
        ease: "ease"
    },{
        y: 0,
        opacity: 1,
        duration: .8,
        scale: 1,
        delay: 1.2,
        transformOrigin: "center center", 
        ease: "ease"
    })
    $gsap.fromTo('.banner__logo-letter_5', {
        y: 100,
        opacity: 0,
        scale: 0.5,
        rotate: 30,
        transformOrigin: "center center", 
        ease: "ease"
    },{
        y: 0,
        opacity: 1,
        duration: .8,
        scale: 1,
        rotate: 0,
        delay: 1.6,
        transformOrigin: "center center", 
        ease: "ease"
    })
    $gsap.fromTo('.banner__logo-letter_6', {
        y: 100,
        opacity: 0,
        scale: 0.5,
        transformOrigin: "center center", 
        ease: "ease"
    },{
        y: 0,
        opacity: 1,
        duration: .8,
        scale: 1,
        delay: 2,
        transformOrigin: "center center", 
        ease: "ease"
    })
    $gsap.fromTo('.banner__product', {
        y: 200,
        scale: .8,
        opacity: 0,
        transformOrigin: "center center", 
        ease: "ease"
    },{
        y: 0,
        opacity: 1,
        duration: 1.2,
        scale: 1,
        delay: 2.4,
        transformOrigin: "center center", 
        ease: "ease"
    })
    $gsap.fromTo('.button1', {
        y: 100,
        opacity: 0,
        scale: 0.5,
        transformOrigin: "center center", 
        ease: "ease"
    },{
        y: 0,
        opacity: 1,
        duration: .8,
        scale: 1,
        delay: 3.4,
        transformOrigin: "center center", 
        ease: "ease"
    })
    $gsap.fromTo('.button2', {
        y: 100,
        opacity: 0,
        scale: 0.5,
        transformOrigin: "center center", 
        ease: "ease"
    },{
        y: 0,
        opacity: 1,
        duration: .8,
        scale: 1,
        delay: 3.8,
        transformOrigin: "center center", 
        ease: "ease"
    })
})
</script>

<style lang="scss" scoped>
.banner {
    &__logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 50px;
        &-letter {
            position: relative;
            margin: 0 50px;
            z-index: 4;
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3) {
                z-index: 10;
            }
            img {
                display: block;
            }
        }
    }
    &__product {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -170px;
        z-index: 5;
        img {
            display: block;
            position: relative;
            z-index: 5;
        }
        &:before {
            content: '';
            display: block;
            position: absolute;
            z-index: 3;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%,-50%, 0);
            width: 800px;
            height: 600px;
            background: radial-gradient(41.44% 41.44% at 50% 58.56%, rgba(191, 197, 255, 0.16) 0%, rgba(170, 190, 231, 0.06) 100%);
            filter: blur(80px);
            border-radius: 500px;
        }
    }
    &__buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 6;
        margin-top: -100px;
        .button {
            margin: 0 10px;
        }
    }
}
</style>