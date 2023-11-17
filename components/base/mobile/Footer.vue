<template lang="pug">
footer.mobile-footer
    LayoutContainer
        .mobile-footer__logo
            img(
                src="/images/mobile/logo.svg"
            )
        .mobile-footer__copyright Все права защищены
        .mobile-footer__section
            .mobile-footer__title Соц. сети
            .mobile-footer__social
                a.mobile-footer__social-item(
                    href="#"
                ) Вконтакте
                    img(
                        src="/images/ic1.svg"
                    )
                a.mobile-footer__social-item(
                    href="#"
                ) Телеграм
                    img(
                        src="/images/ic1.svg"
                    )
        .mobile-footer__section
            .mobile-footer__title Навигация
            .mobile-footer__nav
                a.mobile-footer__nav-item(
                    href="#about"
                ) О нас
                a.mobile-footer__nav-item(
                    href="#products"
                ) Продукты
                a.mobile-footer__nav-item(
                    href="#buy"
                ) Где купить
        .mobile-footer__section
            .mobile-footer__title По любым вопросам пишите на почту
            a.mobile-footer__mailer(
                href="mailto:lunacyweb@gmail.com"
            ) Lunacyweb@gmail.com
        .mobile-footer__bottom
            a(
                href="#"
            ) Публичная оферта
            a(
                href="#"
            ) Политика конфиденциальности
</template>

<style lang="scss" scoped>
.mobile-footer {
    display: none;
    @media screen and (max-width: 1420px) {
        display: block;
    }
    &__logo {
        img {
            display: block;
            width: 100%;
        }
    }
    &__copyright {
        font-size: 12px;
        color: #fff;
        opacity: .4;
        font-weight: 500;
    }
    &__section {
        margin: 40px 0;
    }
    &__title {
        font-size: 13px;
        color: #fff;
        opacity: .4;
        margin-bottom: 8px;
        font-weight: 500;
    }
    &__nav {
        display: flex;
        &-item {
            margin-right: 15px;
            text-decoration: none;
            color: #fff;
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 600;
        }
    }
    &__social {
        display: flex;
        &-item {
            text-transform: uppercase;
            cursor: pointer;
            text-decoration: none;
            color: #fff;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            align-items: center;
            margin-right: 15px;
            &:hover {
                img {
                    transform: translateX(5px);
                }
            }
            img {
                display: block;
                margin-left: 8px;
                transition: .8s ease;
            }
        }
    }
    &__mailer {
        font-size: 30px;
        font-weight: 300;
        color: #fff;
        text-decoration: none;
    }
    &__bottom {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-bottom: 25px;
        a {
            font-size: 12px;
            color: #fff;
            opacity: .4;
            font-weight: 500;
            text-decoration: none;
            display: block;
            &:last-child {
                margin-top: 15px;
            }
        }
    }
}
</style>