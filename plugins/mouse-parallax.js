export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('mouse-parallax', {
        mounted: (el, binding) => {
            const container = document.querySelector(binding.value.container)
            const strength = binding.value.strength || 1
            el.style.transition = 'transform 0.3s ease-out'
            const onMouseMove = (event) => {
                const x = event.pageX - event.currentTarget.offsetLeft; 
                const y = event.pageY - event.currentTarget.offsetTop;
                const containerWidth = container.offsetWidth
                const containerHeight = container.offsetHeight
                let xParallax = (containerWidth / 2 - x) / 50 * strength
                let yParallax = (containerHeight / 2 - y) / 50 * strength
                el.style.transform = `translate3d(${xParallax}px, ${yParallax}px, 0)`
            }
            container.addEventListener('mousemove', onMouseMove)
            container.addEventListener('mouseleave', () => {
                el.style.transform = `translate3d(0, 0, 0)`
            })
        }
    })
})