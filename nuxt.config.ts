// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    // devtools: {
    //     enabled: true
    // },
    app: {
        head: {
            title: 'Lunacy',
            htmlAttrs: {
                lang: 'ru'
            },
            meta: [
                { charset: 'utf-8' },
                // { name: 'viewport', content: 'width=1920, user-scalable=1' },
                { name: 'viewport', content: 'width=device-width, user-scalable=no' },
                { hid: 'description', name: 'description', content: 'Kettari' },
                { name: 'format-detection', content: 'telephone=no' },
                { hid: 'og-type', property: 'og:type', content: 'website' },
                { hid: 'og-title', property: 'og:title', content: 'Lunacy' },
                // { hid: 'og-desc', property: 'og:description', content: 'This is a sweet post' },
                // { hid: 'og-url', property: 'og:url', content: 'https://domain.com/my-post' },
                { hid: 'og-image', property: 'og:image',
                    content: '/og-image.jpg'
                },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
            ]
        },
        // baseURL: '/lunacy/',
    },
    css: [
        '@/assets/styles/common.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/_normalize.scss";@import "@/assets/styles/_colors.scss";'
                }
            }
        }
    },
    modules: [
        '@hypernym/nuxt-gsap',
        [
            'yandex-metrika-module-nuxt3',
            {
                id: '95646052',
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            }
        ]
    ],
    gsap: {
        extraPlugins: {
            scrollTrigger: true
        }
    }
})
