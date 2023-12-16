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
        NightPreview
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
        HeadphonesMicrophone(
            :text="microphone.text"
            :desc="microphone.desc"
            :image="microphone.image"
        )
        IndexPartners
        HeadphonesSpecs(
            :title="specs.title"
            :data="specs.data"
        )
        BaseDevices(
            :data="devices.data"
        )
    BaseFooter
</template>

<script setup>
import img1 from '~/assets/images/night/img1.png'
import img2 from '~/assets/images/night/img2.png'
import img3 from '~/assets/images/night/img3.png'
import img4 from '~/assets/images/night/img4.png'
import img5 from '~/assets/images/night/img5.jpg'
import img6 from '~/assets/images/night/img6.png'
import img7 from '~/assets/images/night/img7.png'
import img8 from '~/assets/images/night/img8.png'
import img9 from '~/assets/images/night/img9.png'
import img10 from '~/assets/images/loud/img10.png'

setTimeout(() => {
    if (process.cleint) {
        window.scrollTo(0, 0)
    }
}, 1)

const devices = ref({
    data: [{
        name: [
            'lunacy',
            'loud'
        ],
        route: 'loud',
        image: img9,
    },{
        name: [
            'lunacy',
            'in space'
        ],
        image: img10,
    }]
})

const specs = ref({
    title: [
        'полные',
        'технические характеристики',
        'для самых душных'
    ],
    data: [{
        category: 'Модель',
        model: 'DP-HS-1005a',
    },{
        category: 'Звук',
        specs: [{
            name: 'Чувствительность',
            description: '95 Дб',
        },{
            name: 'Сопротивление',
            description: '32 Ом',
        },{
            name: 'Частотный диапазон',
            description: '20 Гц - 20,000 Гц',
        },{
            name: 'Мощность',
            description: '10 мВ',
        }]
    },{
        category: 'Микрофон',
        specs: [{
            name: 'Звукоснимающий капсюль',
            description: '4х1.5 мм',
        },{
            name: 'Чувствительность',
            description: '9 дБ',
        },{
            name: 'Частотный диапазон',
            description: '100 Гц - 10.000 Гц',
        }]
    },{
        category: 'Совместимость',
        specialLonely: 'Подключение по проводу'
    }]
})

const welcome = ref({
    desc: 'почувствуй',
    title: 'комфорт',
    text: '( lunacy night)',
    images: [
        img1,
        img2,
        img3,
    ]
})
const about = ref({
    text: [
        'проводное подключение',
        'гарантирует полную совместимость',
        'микрофона с любыми устройствами,',
        'включая пк, смартфоны и',
        'современные консоли.',
    ],
    desc: [
        [
            'складной микрофон с увеличенным',
            'звукоснимающим капсюлем'
        ],
        [
            'и расширенным частотным',
            'диапазоном.'
        ]
    ]
})
const video = ref({
    text: 'бренд Славы Бустера',
    title: '( lunacy night )',
    image: img5
})
const description = ref({
    text: [
        'никаких лишних шумов',
        'только чистый звук динамиков',
        'и микрофона. кстати,',
        'микрофон задвигается и ',
        'автоматически выключается.'
    ],
    desc: [
        'весят 311 грамм',
        'диаметр динамиков 50-мм',
        'амбушюры с Эффектом памяти',
    ],
})
const productSpec = ref({
    title: 'так звучит ночь',
    image: img6,
    name: 'lunacy night',
    price: '6 990 ₽',
    text: [
        [
            'Сверхпрочная',
            'алюминиевая рамка'
        ],
        [
            'Амбушюры из',
            'экокожи и ткани'
        ],
        [
            'Неодимовый магнит',
            'динамика'
        ]
    ],
    desc: [
        'в погоне за идеальным',
        'дизайном мы не забыли о',
        'качестве, надежности и',
        'технологичности.'
    ]
})
const soundInterface = ref({
    title: 'русифицированный звуковой интерфейс',
    desc: [
        'наслаждайся голосом',
        'Бустера, когда переключаешь',
        'режимы',
    ],
    image: img7,
    specs: [{
        title: 'частотный диапазон динамиков',
        desc: '[ 20 Гц – 20 кГц ]'
    },{
        title: 'чувствительность динамиков',
        desc: '[ 95 дБ ]'
    },{
        title: 'частотный диапазон микрофона',
        desc: '[ 170 Гц – 10 кГц ]'
    },{
        title: 'чувствительность микрофона',
        desc: '[ 42 дб ]'
    }]
})
const microphone = ref({
    text: [
        'Дарк проджект х Lunacy Night',
        'оснащена качественным',
        'складным микрофоном',
        'с поддержкой flip-to-mute.',
    ],
    desc: [
        [
            'Одним движением руки ',
            'микрофон складывается'
        ],
        [
            'и выключается, гарантируя',
            'вашу приватность.'
        ]
    ],
    image: img8
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