<template lang="pug">
.product
    .product__img(
        ref="img"
    )
        img(
            src="/images/bg2.png"
        )
    .product__triggers
        .product__trigger.product__trigger-zoom-in(
            ref="zoomInStartEl"
            v-intersect="{start: zoomInStart, stop: zoomInStop}"
        ) Zoom in
        .product__trigger.product__trigger-zoom-out(
        ) Zoom out
    .product__alert
        p Trigger: {{alert}}
        p ScrollTop: {{scrollTop}}
</template>

<script setup>
const alert = ref('')
const zooming = ref(false)
const scrollTop = ref(0)
const img = ref(null)
const zoomInStartEl = ref(null)

const getElPos = (el) => {
    var viewportOffset = el.getBoundingClientRect();
    return viewportOffset
}

const zoomInStart = () => {
    alert.value = 'Zoom start'
    zooming.value = true
}
const zoomInStop = () => {
    alert.value = 'Zoom stop'
    zooming.value = false
}

const anim = () => {
    if (zooming.value) {
        let numberScale = getElPos(zoomInStartEl.value).top / 2000
        if (numberScale > 0.2) {
            img.value.style.transform = `scale(${getElPos(zoomInStartEl.value).top / 1000})`
        }
    }
}

const tween = () => {
    
}

document.addEventListener('scroll', () => {
    scrollTop.value = window.scrollY
    anim()
})
</script>

<style lang="scss" scoped>
.product {
    height: 2000px;
    position: relative;
    &__img {
        position: sticky;
        top: 15px;
    }
    &__triggers {
        position: absolute;
        top: 0;
        width: 100%;
        left: 0;
    }
    &__trigger {
        background: rgba(red, .2);
        width: 100%;
        height: 1px;
        font-size: 10px;
        padding-top: 5px;
        font-weight: 300;
        pointer-events: none;
        &-zoom-in {
            height: 1000px;
        }
        &-zoom-out {
            height: 1000px;
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