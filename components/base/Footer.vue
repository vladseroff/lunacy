<template lang="pug">
footer.footer
    LayoutContainer
        .footer__logo
            .footer__logo-letter.footer__logo-letter_1
                img(
                    src="/images/l.svg"
                )
            .footer__logo-letter.footer__logo-letter_2
                img(
                    src="/images/u.svg"
                )
            .footer__logo-letter.footer__logo-letter_3
                img(
                    src="/images/n.svg"
                )
            .footer__logo-letter.footer__logo-letter_4
                img(
                    src="/images/a.svg"
                )
            .footer__logo-letter.footer__logo-letter_5
                img(
                    src="/images/c.svg"
                )
            .footer__logo-letter.footer__logo-letter_6
                img(
                    src="/images/y.svg"
                )
        .footer__wrapper
            .footer__box
                .footer__social
                    a.footer__social-item(
                        href="#"
                    ) Вконтакте
                        img(
                            src="/images/ic1.svg"
                        )
                    a.footer__social-item(
                        href="#"
                    ) Телеграм
                        img(
                            src="/images/ic1.svg"
                        )
                .footer__email
                    .footer__email-text Подпишитесь на новостную рассылку, 
                        br 
                        |чтобы быть в курсе последних релизов
                    .footer__email-input
                        input(
                            placeholder="Почта"
                        )
                        .footer__email-btn
                            img(
                                src="/images/ic2.svg"
                            )
            .footer__box
                .footer__wrapper
                    .footer__box
                        .footer__nav
                            a.footer__nav-item(
                                href="#about"
                            ) О нас
                                //- img(
                                //-     src="/images/arrow.svg"
                                //- )
                            a.footer__nav-item(
                                href="#products"
                            ) Продукты
                            a.footer__nav-item(
                                href="#buy"
                            ) Где купить
                    .footer__box
                        .footer__arrow(
                            @click="scrollToTop"
                        )
                            img(
                                src="/images/ic3.svg"
                            )
                a.footer__mailer(
                    href="mailto:lunacyweb@gmail.com"
                ) Lunacyweb@gmail.com
        .footer__bottom
            .footer__wrapper.line
                .footer__box Все права защищены
                .footer__box
                    .footer__wrapper
                        .footer__box 
                            a(
                                href="#"
                            ) Публичная оферта
                        .footer__box
                            a(
                                href="#"
                            ) Политика конфиденциальности
</template>

<script setup>
const { $gsap } = useNuxtApp()

const scrollToTop = () => {
    window.scrollTo({top: 0});
}
</script>

<style lang="scss" scoped>
.footer {
    position: relative;
    z-index: 100;
    &:before {
        content: '';
        display: block;
        background: url('/images/line.svg') center center no-repeat;
        height: 1px;
        width: 100%;
        margin-bottom: 30px;
    }
    &__arrow {
        display: block;
        float: right;
        cursor: pointer;
        transition: .3s ease;
        &:hover {
            transform: scale(1.1)
        }
    }
    &__bottom {
        padding: 25px 0;
        font-weight: 400;
        font-size: 14px;
        color: var(--color-grey);
        position: relative;
        margin-top: 25px;
        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            display: block;
            background: url('/images/line.svg') center center no-repeat;
            height: 1px;
            width: 100%;
            margin-bottom: 30px;
        }
        .footer__box {
            display: flex;
            align-items: center;
        }
        a {
            color: var(--color-grey);
            text-decoration: none;
            font-size: 14px;
            flex: none;
            display: block;
            &:hover {
                text-decoration: underline;
                color: #fff;
            }
        }
    }
    &__social {
        margin-bottom: 50px;
        &-item {
            text-transform: uppercase;
            cursor: pointer;
            text-decoration: none;
            color: #fff;
            font-size: 16px;
            font-weight: 600;
            display: flex;
            align-items: center;
            &:hover {
                img {
                    transform: translateX(5px);
                }
            }
            &:not(:last-child) {
                margin-bottom: 15px;
            }
            img {
                display: block;
                margin-left: 8px;
                transition: .8s ease;
            }
        }
    }
    &__email {
        max-width: 350px;
        &-text {
            font-weight: 600;
            font-size: 16px;
            text-transform: uppercase;
            color: var(--color-grey);
            margin-bottom: 30px;
        }
        &-input {
            position: relative;
            input {
                width: 100%;
                border: none;
                background: none;
                border-bottom: 1px solid var(--color-grey);
                height: 30px;
                font-size: 14px;
                color: #fff;
                outline: none;
                transition: .3s ease;
                &:focus {
                    border-color: #fff;
                }
            }
        }
        &-btn {
            cursor: pointer;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -7.5px;
            img {
                display: block;
            }
        }
    }
    &__mailer {
        font-family: 'Cygre';
        font-weight: 300;
        text-decoration: none;
        font-size: 63px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        margin-top: 50px;
        display: block;
    }
    &__logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -70px;
        margin-bottom: -50px;
        pointer-events: none;
        &-letter {
            position: relative;
            margin: 0 -20px;
            z-index: 4;
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3) {
                z-index: 10;
            }
            img {
                display: block;
            }
        }
    }
    &__wrapper {
        display: flex;
        flex: 1 1 1px;
        position: relative;
        // padding-top: 25px;
        // margin-top: 35px;
    }
    &__box {
        flex: 1 1 1px;
        .footer__wrapper {
            margin: 0;
            padding: 0;
        }
    }
    &__nav {
        flex: none;
        &-item {
            &:hover {
                text-decoration: underline;
            }
            font-size: 14px;
            text-decoration: none;
            cursor: pointer;
            text-transform: uppercase;
            color: var(--color-white);
            padding: 7px 0;
            display: flex;
            align-items: center;
            &.disabled {
                pointer-events: none;
                opacity: .2;
            }
            img {
                display: block;
                margin-left: 5px;
            }
        }
    }
}
</style>