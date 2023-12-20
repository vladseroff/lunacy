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
import img1 from '~/assets/images/loud/img1.png'
import img2 from '~/assets/images/loud/img2.png'
import img3 from '~/assets/images/loud/img3.png'
import img4 from '~/assets/images/loud/img4.png'
import img5 from '~/assets/images/loud/img5.jpg'
import img6 from '~/assets/images/loud/img6.png'
import img7 from '~/assets/images/loud/img7.png'
import img8 from '~/assets/images/loud/img8.png'
import img9 from '~/assets/images/loud/img9.png'
import img10 from '~/assets/images/loud/img10.png'

// setTimeout(() => {
//     if (process.cleint) {
//         window.scrollTo(0, 0)
//     }
// }, 1)

const devices = ref({
    data: [{
        name: [
            'lunacy',
            'night'
        ],
        route: 'night',
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
        model: 'LLHP01',
    },{
        category: 'Динамик',
        specs: [{
            name: 'Диаметр',
            description: 'Ф50 мм',
        },{
            name: 'Мощность',
            description: '20 мВ',
        },{
            name: 'Чувствительность',
            description: '99 ± 3Дб на 1 кГц',
        },{
            name: 'Сопротивление',
            description: '64±15% Ом',
        },{
            name: 'Частотный диапазон',
            description: '20 Гц - 20.000 Гц',
        }]
    },{
        category: 'Микрофон',
        specs: [{
            name: 'Размеры микрофона',
            description: 'Ф6.0*2.7 мм',
        },{
            name: 'Чувствительность',
            description: '-42±3 Дб на 1 кГц',
        },{
            name: 'Сопротивление',
            description: '2.2 кОм',
        },{
            name: 'Частотный диапазон',
            description: '100 Гц - 10.000 Гц',
        }]
    },{
        category: 'Другое',
        specs: [{
            name: 'Тип подключения',
            description: 'Беспроводные',
        },{
            name: 'Вес',
            description: 'Около 300г (без кабеля)',
        },{
            name: 'Частотный диапазон',
            description: '20 Гц - 20.000 Гц',
        },{
            name: 'Питание',
            description: '20 Вт',
        },{
            name: 'Продолжительность работы',
            description: 'до 30 часов',
        },{
            name: 'Время зарядки',
            description: '3 часа',
        },{
            name: 'Кабель зарядки',
            description: 'USB 1.8 м',
        }]
    },{
        category: 'Совместимость',
        description: 'Только по проводу',
        special: [[
            'pc',
            'mac'
        ],[
            'xbox*',
        ],[
            'nintendo switch',
        ],[
            'ps 5*',
        ],[
            'ps 4*',
        ],[
            'планшеты',
            'телефоны',
        ]]
    }]
})

const welcome = ref({
    desc: 'Громче.',
    title: 'Еще громче.',
    text: '( lunacy loud)',
    images: [
        img1,
        img2,
        img3,
    ]
})
const about = ref({
    text: [
        'беспроводная гарнитура премиум класса',
        'обладает высокой',
        'точностью звука в средних',
        'и высоких частотах',
    ],
    desc: [
        [
            'съёмным микрофоном с увеличенным',
            'звукоснимающим капсюлем'
        ],
        [
            'и расширенным частотным',
            'диапазоном.'
        ]
    ]
})
const video = ref({
    text: 'бренд Славы Бустера',
    title: '( Lunacy Loud )',
    image: img5
})
const description = ref({
    text: [
        'совместимы',
        'с большинством',
        'устройств на рынке,',
        'включая мобильные телефоны,',
        'игровые консоли и настольные пк.'
    ],
    desc: [
        'бескомпромиссный дизайн',
        'съемный микрофон с увеличенным звукоснимающим капсюлем'
    ],
})
const productSpec = ref({
    title: 'чистый звук в играх',
    image: img6,
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
    image: img7,
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
const microphone = ref({
    text: [
        'качественный микрофон,',
        'который можно снять,',
        'чтобы не выглядеть',
        'странно',
    ],
    desc: [
        [
            'Мы поставили увеличенный микрофон',
            'с японским полевым транзистором,'
        ],
        [
            'так что каждый хруст твоих чипсов',
            'превратится в ASMR-контент для',
            'всех в дискорде.'
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