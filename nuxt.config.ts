// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    // devtools: {
    //     enabled: true
    // },
    app: {
        head: {
            title: 'Lunacy - игровые девайсы для геймеров',
            htmlAttrs: {
                lang: 'ru'
            },
            meta: [
                { charset: 'utf-8' },
                // { name: 'viewport', content: 'width=1920, user-scalable=1' },
                { name: 'viewport', content: 'width=1230, minimum-scale=1, maximum-scale=1' },
                { hid: 'description', name: 'description', content: 'Премиальные игровые девайсы Славы Бустера.' },
                { name: 'format-detection', content: 'telephone=no' },
                { hid: 'og-type', property: 'og:type', content: 'website' },
                { hid: 'og-title', property: 'og:title', content: 'Lunacy - игровые девайсы для геймеров' },
                { hid: 'og-desc', property: 'og:description', content: 'Премиальные игровые девайсы Славы Бустера.' },
                // { hid: 'og-url', property: 'og:url', content: 'https://domain.com/my-post' },
                { hid: 'og-image', property: 'og:image',
                    content: '/og-image.jpg'
                },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
            ]
        },
        baseURL: '/lunacy/',
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
        'nuxt-yandex-metrika',
    ],
    yandexMetrika: {
        id: '95646052',
        options: {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
        }
    },
    gsap: {
        extraPlugins: {
            scrollTrigger: true
        }
    }
})
