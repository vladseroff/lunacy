<template lang="pug">
.app-page
    //- NuxtLoadingIndicator
    //- ClientOnly(
    //-     fallback-tag="span" fallback="Loading comments..."
    //- )
    NuxtPage#NuxtPage.loading
    .app-preloader#loading
        .app-preloader__logo lunacy
        svg(
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
        )
            circle(
                fill="none"
                stroke-opacity="1"
                stroke="#B6B6B6"
                stroke-width="10"
                cx="100"
                cy="100"
                r="50"
            )
                //- animate(attributeName="r" calcMode="spline" dur="2" values="1;80" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite")
                //- animate(attributeName="stroke-width" calcMode="spline" dur="2" values="0;25" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite")
                //- animate(attributeName="stroke-opacity" calcMode="spline" dur="2" values="1;0" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite")
        span загрузка...
</template>

<script setup>

</script>

<style lang="scss" scoped>
@keyframes loading {
    0% {
        transform: scale(.5);
        opacity: 1;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
}
#NuxtPage {
    &.loading {
        display: none;
    }
}
.app-preloader {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    background: #0e0e0e;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #B6B6B6;
    font-size: 14px;
    z-index: 99999;
    transition: .6s ease;
    $preloader: &;
    svg {
        width: 70px;
        transition: .6s ease;
        animation: loading 2s ease infinite;
    }
    span {
        display: block;
        margin-top: 20px;
        transition: .6s ease;
    }
    &__logo {
        width: 100%;
        position: relative;
        z-index: 2;
        font-size: 180px;
        text-align: center;
        color: #B6B6B6;
        font-weight: 500;
        letter-spacing: -0.1em;
        margin-bottom: 50px;
        transition: 20s ease;
    }
    &.hidden {
        pointer-events: none;
        opacity: 0;
        #{$preloader} {
            &__logo {
                transform: scale(200);
            }
        }
    }
}
</style>