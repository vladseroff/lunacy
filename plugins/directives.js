import _ from 'lodash'
// const { $gsap } = useNuxtApp()
import gsap from 'gsap'

export default defineNuxtPlugin(nuxtApp => {
    let hasParallaxDirective = false
    nuxtApp.vueApp.directive('parallax', {
        mounted: (el, binding) => {
            // let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            // if (!isSafari) {
                let intersect = false
                const options = {
                    rootMargin: "700px",
                    threshold: 0.20
                }
            
                const callback = (entries, observer) => {
                    const isIntersecting = entries[0].isIntersecting
                    if  (isIntersecting) {
                        intersect = true
                    } else {
                        intersect = false
                    }
                }
                let observer = new IntersectionObserver(callback, options);
                observer.observe(el);
    
                el.parallaxVar = () => {
                    document.body.style.cssText = `--scrollTop: ${window.scrollY}px`
                }
                if (!hasParallaxDirective) {
                    window.addEventListener('scroll', el.parallaxVar)
                    setTimeout(() => {
                        el.parallaxVar()
                    }, 1)
                }
                el.animate = () => {
                    if (intersect) {
                        el.style.cssText = `transform: ${binding.value.transform ? binding.value.transform : ''} translate3d(0, ${el.getBoundingClientRect().top / binding.value.speed}px, 0)`
                    }
                }
                window.addEventListener('scroll', el.animate)
                setTimeout(() => {
                    el.animate()
                }, 1)
                hasParallaxDirective = true
            // }
        },
        unmounted: (el) => {
            window.removeEventListener('scroll', el.animate)
            window.removeEventListener('scroll', el.parallaxVar)
        },
    })
    nuxtApp.vueApp.directive('intersect', {
        mounted: (el, bind) => {
            const options = {
                rootMargin: "0px",
                threshold: .5
            }
        
            const callback = (entries, observer) => {
                const isIntersecting = entries[0].isIntersecting
                if  (isIntersecting) {
                    bind.value.start.call()
                    // el.classList.add(...bind.value.true)
                } else {
                    bind.value.stop.call()
                    // if (bind.value.false !== false) {
                    //     el.classList.remove(...bind.value.true)
                    // }
                }
            }
            let observer = new IntersectionObserver(callback, options);
            observer.observe(el);
        },
    })
    const getCharsFromWord = (word) => {
        let string = ''
        for (let index = 0; index < word.length; index++) {
            const char = word[index];
            string += `<span class="char">${char}</span>`
        }
        return string
    }
    const setSpans = (el, bind) => {
        let string = ''
        _.words(bind.value || el.innerHTML, /([^\s]+)/g).forEach(word => {
            if (word === 'br') {
                string += `<br> `
            } else {
                string += `<span class="word">${getCharsFromWord(word)}</span> `
            }
        })
        el.innerHTML = string
    }
    nuxtApp.vueApp.directive('word-to-span', {
        updated: (el, bind) => {
            setSpans(el, bind)
        },
        mounted: (el, bind) => {
            setSpans(el, bind)
        }
    })
    const gsapAnimate = (element, trigger, bind, delay, duration, y = 25) => {
        const options = {
            scrollTrigger: {
                trigger: bind.value.trigger || trigger,
                start: "top 70%",
                // scrub: true,
                end: "+=200%",
                // toggleActions: "play reset play reset",
            },
            transformOrigin: "center center", 
            ease: 'ease',
            delay: delay,
            duration: duration || bind.value.duration || 0.4,
        }
        gsap.fromTo(element, {
            ...options,
            y: y,
            opacity: 0,
        },{
            ...options,
            y: 0,
            opacity: 1,
        })
    }
    nuxtApp.vueApp.directive('text-char-anim', {
        mounted: (el, bind) => {
            const charsHTMLCollection = _.flattenDeep(Array.prototype.slice.call(el.children).map(elem => Array.prototype.slice.call(elem.children).map(child => child)))
            charsHTMLCollection.forEach((char, index) => {
                let delay = bind.value.delay || 0.04;
                let duration = bind.value.duration || 0.1
                let y = bind.value.y
                if (bind.value.startDelay) {
                    delay = (bind.value.startDelay + delay * index)
                } else {
                    delay = delay * index
                }
                gsapAnimate(char, el, bind, delay, duration, y)
            })
            // [].forEach.call(charsHTMLCollection, (char, index) => {
            //     let delay = bind.value.delay || 0.04;
            //     let duration = bind.value.duration || 0.22
            //     if (bind.value.startDelay) {
            //         // delay = delay * (index + 1) + bind.value.startDelay * ((i + 1) * (bind.value.duration || .22))
            //         delay = (bind.value.startDelay + delay * index)
            //     } else {
            //         delay = (index + 1) * delay * duration
            //     }
            //     console.log(delay, char.innerHTML);
            //     gsapAnimate(char, el, bind, delay, duration)
            // })
        }
    })
    nuxtApp.vueApp.directive('text-span-anim', {
        mounted: (el, bind) => {
            [].forEach.call(el.children, (span, index) => {
                let delay = bind.value.delay || 0.01;
                let duration = bind.value.duration || 0.1
                let y = bind.value.y
                if (bind.value.startDelay) {
                    delay = delay * (index + 1) + bind.value.startDelay
                } else {
                    delay = (index + 1) * delay
                }
                gsapAnimate(span, el, bind, delay, duration, y)
            })
        }
    })
    nuxtApp.hook('page:finish', () => {
        const loadingElement = document.querySelector('#loading')
        const nuxtPage = document.querySelector('#NuxtPage')
        const header = document.querySelector('.header')
        setTimeout(() => {
            document.getElementsByTagName( 'html' )[0].classList.add('scroll')
            nuxtPage.classList.remove('loading')
            header.classList.remove('hidden')
            if (loadingElement) {
                loadingElement.classList.add('hidden')
            }
        }, 1)
    })
    nuxtApp.vueApp.directive('click-outside', {
        mounted: (el, binding) => {
            el.clickOutsideEvent = event => {
                if (!(el == event.target || el.contains(event.target))) {
                    binding.value()
                }
            };
            document.body.addEventListener('click', el.clickOutsideEvent)
        },
        unmounted: (el) => {
            document.body.removeEventListener('click', el.clickOutsideEvent)
        },
    })
})