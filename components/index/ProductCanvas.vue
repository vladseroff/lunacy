<template lang="pug">
.product-img
    canvas(
        :class="[`index-product-canvas-${index}`]"
    )
</template>

<script setup>
const { $gsap } = useNuxtApp()

const props = defineProps({
    index: {
        type: String,
        required: true
    },
    folder: {
        type: String,
        required: true
    }
})

onMounted(() => {
    let canvas = document.querySelector(`.index-product-canvas-${props.index}`);
    if (canvas) {
        initCanvas(canvas)
    
        function initCanvas(canvas) {
        
            let context = canvas.getContext("2d");
            canvas.width = 698;
            canvas.height = 698;  
            
            let frameCount = 100;
            const currentFrame = index => (
                // `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`
                `${props.folder}${(index + 1).toString().padStart(4, '0')}.png`
            );
    
            let images = []
            let productImages = {
                frame: 0
            };
            
            for (let i = 0; i < frameCount; i++) {
                let img = new Image();
                img.src = currentFrame(i);
                images.push(img);
            }

            $gsap.timeline({
                onUpdate: render,
                scrollTrigger: {
                    trigger: `.preview-text-${props.index}`,
                    pin: true,
                    scrub: true,
                    end: "+=100%",
                    start: "center center",
                }
            })
            .to(productImages, {
                frame: 15 - 1,
                snap: "frame",
                ease: "none",
            }, 0);
    
            $gsap.timeline({
                onUpdate: render,
                scrollTrigger: {
                    trigger: `.preview-text-hide-${props.index}`,
                    pin: true,
                    scrub: true,
                    end: "+=100%",
                    start: "center center",
                }
            })
            .to(productImages, {
                frame: 25 - 1,
                snap: "frame",
                ease: "none",
            }, 0);
    
            $gsap.timeline({
                onUpdate: render,
                scrollTrigger: {
                    trigger: `.trigger-text-${props.index}`,
                    pin: true,
                    scrub: true,
                    markers: true,
                    start: "center center",
                    end: "+=100%",
                }
            })
            .to(productImages, {
                frame: 88 - 1,
                snap: "frame",
                ease: "none",
            }, 0);
            
            images[0].onload = render;
    
            function render() {
                var hRatio = canvas.width / images[productImages.frame].width
                var vRatio = canvas.height / images[productImages.frame].height
                var ratio  = Math.min ( hRatio, vRatio )
                context.clearRect(0, 0, canvas.width, canvas.height)
                context.drawImage(images[productImages.frame], 0, 0, images[productImages.frame].width, images[productImages.frame].height, 0,0, images[productImages.frame].width*ratio, images[productImages.frame].height*ratio);
            }
        }
    }
})
</script>

<style lang="scss" scoped>
.product-img {
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
</style>