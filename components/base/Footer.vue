<template lang="pug">
footer.footer
    LayoutContainer
        .footer__top
            //- .footer__email
            //-     .footer__email-text подпишитесь на новостную 
            //-         br 
            //-         |рассылку, чтобы быть в 
            //-         br 
            //-         |курсе последних релизов
            //-     .footer__email-input
            //-         input(
            //-             placeholder="почта"
            //-         )
            //-         .footer__email-btn подписаться
            .footer__box
                .footer__nav
                    a(href="https://t.me/lunacy_ru" target="_blank") telegram
                    a(href="https://vk.com/lunacy_ru" target="_blank") вконтакте
                .footer__nav
                    //- a.footer__nav-item(
                    //-     href="#"
                    //- ) продукты
                    //-     img(
                    //-         src="/images/arrow.svg"
                    //-     )
                    a.footer__nav-item(
                        href="#"
                    ) драйвера
                    a.footer__nav-item(
                        href="#"
                    ) поддержка
        .footer__mail
            a.footer__mailer(
                href="mailto:help@lunacy.ru"
            ) help@lunacy.ru
        .footer__bottom
            .footer__bottom-box
                span Все права защищены
            .footer__bottom-box
                a(href="#") Публичная оферта
                a(href="#") Политика конфиденциальности
</template>

<script setup>
const scrollToTop = () => {
    window.scrollTo({top: 0});
}
</script>

<style lang="scss" scoped>
.footer {
    position: relative;
    z-index: 100;
    &__top {
        display: flex;
        justify-content: flex-end;
    }
    &__box {    
        display: flex;
        justify-content: space-between;
        max-width: 400px;
        width: 100%;
    }
    &__mail {
        margin: 10px 0 60px;
    }
    &__bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 0;
        letter-spacing: -0.02em;
        a {
            color: #686868;
            text-decoration: none;
            margin-left: 50px;
            &:hover {
                color: #fff;
                text-decoration: underline;
            }
        }
    }
    &__mailer {
        color: #B6B6B6;
        text-decoration: none;
        font-size: 174px;
        font-weight: 500;
        white-space: nowrap;
        letter-spacing: -0.04em;
    }
    &__email {
        &-text {
            font-size: 34px;
            color: #B6B6B6;
            font-weight: 500;
            margin-bottom: 40px;
        }
        &-input {
            position: relative;
            border-bottom: 1px solid #686868;
            display: flex;
            align-items: center;
            input {
                appearance: none;
                outline: none;
                border: none;
                width: 100%;
                display: block;
                background: none;
                height: 40px;
                color: #fff;
                font-size: 16px;
                font-weight: 300;
            }
        }
        &-btn {
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            color: #fff;
        }
    }
    &__nav {
        &:first-child {
            margin-bottom: 70px;
        }
        &-item,
        a {
            font-size: 14px;
            text-decoration: none;
            cursor: pointer;
            color: var(--color-white);
            display: flex;
            align-items: center;
            margin: 5px 0;
            letter-spacing: -0.02em;
            &:hover {
                text-decoration: underline;
            }
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