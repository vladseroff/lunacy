<template lang="pug">
.app-page
    //- NuxtLoadingIndicator
    //- ClientOnly(
    //-     fallback-tag="span" fallback="Loading comments..."
    //- )
    NuxtPage
    .app-preloader#loading
        svg(
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
        )
            circle(
                fill="none"
                stroke-opacity="1"
                stroke="#B6B6B6"
                stroke-width=".5"
                cx="100"
                cy="100"
                r="0"
            )
                animate(attributeName="r" calcMode="spline" dur="2" values="1;80" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite")
                animate(attributeName="stroke-width" calcMode="spline" dur="2" values="0;25" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite")
                animate(attributeName="stroke-opacity" calcMode="spline" dur="2" values="1;0" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite")
        span Загрузка...
</template>

<script setup>

</script>

<style lang="scss" scoped>
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
    svg {
        width: 70px;
    }
    span {
        display: block;
        margin-top: 20px;
    }
    &.hidden {
        pointer-events: none;
        opacity: 0;
        transform: scale(2);
    }
}
</style>