<template lang="pug">
.app
    BaseHeader
    .app__container
        HeadphonesWelcome(
            :desc="welcome.desc"
            :title="welcome.title"
            :text="welcome.text"
            :images="welcome.images"
        )
        HeadphonesAbout(
            :text="about.text"
            :desc="about.desc"
        )
        LoudPreview
        HeadphonesVideo(
            :text="video.text"
            :title="video.title"
            :image="video.image"
        )
        HeadphonesDescription(
            :text="description.text"
            :desc="description.desc"
        )
        HeadphonesProductSpec(
            :image="productSpec.image"
            :title="productSpec.title"
            :text="productSpec.text"
            :desc="productSpec.desc"
            :name="productSpec.name"
            :price="productSpec.price"
        )
        HeadphonesSoundInterface(
            :image="soundInterface.image"
            :title="soundInterface.title"
            :desc="soundInterface.desc"
            :specs="soundInterface.specs"
        )
        IndexPartners
    BaseFooter
</template>

<script setup>
setTimeout(() => {
    if (process.cleint) {
        window.scrollTo(0, 0)
    }
}, 1)

const welcome = ref({
    desc: 'Громче.',
    title: 'Еще громче.',
    text: '( lunacy loud)',
    images: [
        '/images/loud/img1.png',
        '/images/loud/img2.png',
        '/images/loud/img3.png',
    ]
})
const about = ref({
    text: [
        'беспроводная гарнитура премиум класса',
        'обладает высокой',
        'точностью звука в средних',
        'и высоких частотах',
    ],
    desc: [
        [
            'съёмным микрофоном с увеличенным',
            'звукоснимающим капсюлем '
        ],
        [
            'и расширенным частотным',
            'диапазоном.'
        ]
    ]
})
const video = ref({
    text: 'бренд Славы Бустера',
    title: '( Lunacy Loud )',
    image: '/images/loud/img5.jpg'
})
const description = ref({
    text: [
        'совместимы',
        'с большинством',
        'устройств на рынке,',
        'включая мобильные телефоны,',
        'игровые консоли и настольные ПК.'
    ],
    desc: [
        'бескомпромиссный дизайн',
        'съемный микрофон с увеличенным звукоснимающим капсюлем'
    ],
})
const productSpec = ref({
    title: 'чистый звук в играх',
    image: '/images/loud/img6.png',
    name: 'lunacy loud',
    price: '11 990 ₽',
    text: [
        [
            'диффузор из трех',
            'полимерных материалов'
        ],
        [
            'широкий динамик',
            'диаметром 50мм'
        ],
        [
            'сложная композитная',
            'мембрана'
        ]
    ],
    desc: [
        'динамика звуков в',
        'игре меняется каждую секунду.',
        'lunacy loud обеспечат тебе',
        'стопроцентную инфу.'
    ]
})
const soundInterface = ref({
    title: 'русифицированный звуковой интерфейс',
    desc: [
        'беспроводная гарнитура',
        'премиум класса, наслаждайся',
        'голосом Бустера, когда',
        'переключаешь режимы'
    ],
    image: '/images/loud/img7.png',
    specs: [{
        title: 'Кабель зарядки',
        desc: '[ USB 1.8 м ]'
    },{
        title: 'работает',
        desc: '[ до 30 часов ]'
    },{
        title: 'Аккумулятор',
        desc: '[ 750 мА*ч ]'
    },{
        title: 'Время зарядки',
        desc: '[ 3 часа ]'
    }]
})
</script>

<style lang="scss" scoped>
.app {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    min-width: 1230px;
    &__container {
        padding-top: 110px;
    }
}
</style>