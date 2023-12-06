import{o as i,c as p,m as b,_ as r,n as B,w as s,q as C,s as L,b as o,a as e,d as _,p as h,e as m,l as g,g as d}from"./entry.643da794.js";import{_ as D}from"./nuxt-link.9b5b2a86.js";const U={class:"container"};function T(t,a){return i(),p("div",U,[b(t.$slots,"default",{},void 0,!0)])}const A={},v=r(A,[["render",T],["__scopeId","data-v-93e0a71e"]]),R=""+globalThis.__publicAssetsURL("images/logo-sm.svg");const N={__name:"Button",props:{href:{type:String,default:""},color:{type:String,default:"black"},hoverColor:{type:String,default:"default"}},setup(t){return(a,l)=>(i(),B(L(t.href?"a":"div"),{class:C(["button",[t.color,`hover-${t.hoverColor}`]]),href:t.href},{default:s(()=>[b(a.$slots,"default",{},void 0,!0)]),_:3},8,["href","class"]))}},$=r(N,[["__scopeId","data-v-8179a4af"]]),y=""+globalThis.__publicAssetsURL("images/arrow.svg"),w=t=>(h("data-v-cd474998"),t=t(),m(),t),V={class:"header"},F=w(()=>e("div",{class:"header__wrapper"},[e("div",{class:"header__logo"},[e("img",{src:R})])],-1)),q=w(()=>e("div",{class:"header__nav"},[e("a",{class:"header__nav-item",href:"#"},[_("продукты"),e("img",{src:y})]),e("a",{class:"header__nav-item",href:"#"},"драйвера"),e("a",{class:"header__nav-item",href:"#"},"поддержка")],-1)),z={class:"header__wrapper"};function E(t,a){const l=$,u=v;return i(),p("header",V,[o(u,null,{default:s(()=>[F,q,e("div",z,[o(l,{href:"#buy"},{default:s(()=>[_("купить")]),_:1})])]),_:1})])}const H={},me=r(H,[["render",E],["__scopeId","data-v-cd474998"]]),P=""+globalThis.__publicAssetsURL("images/index/img1.png"),j=""+globalThis.__publicAssetsURL("images/index/img2.png"),G=""+globalThis.__publicAssetsURL("images/index/img3.png"),f=t=>(h("data-v-bea9dc83"),t=t(),m(),t),J={class:"index-product"},K={class:"index-product__container"},M={class:"index-product__wrapper"},O={class:"index-product__box"},Q={class:"index-product__text"},W={class:"index-product__text"},X={class:"index-product__text"},Y={class:"index-product__text"},Z={class:"index-product__text"},ee=f(()=>e("div",{class:"index-product__desc"},[_("совместимы с "),e("br"),_("большинством устройств на "),e("br"),_("рынке, включая мобильные "),e("br"),_("телефоны, игровые консоли и "),e("br"),_("настольные ПК.")],-1)),te=f(()=>e("div",{class:"index-product__images"},[e("div",{class:"index-product__title"},"( lunacy loud )"),e("div",{class:"index-product__images-wrapper"},[e("div",{class:"index-product__img"},[e("img",{src:P})]),e("div",{class:"index-product__img"},[e("img",{src:j})]),e("div",{class:"index-product__img"},[e("img",{src:G})])])],-1)),_e=f(()=>e("div",{class:"index-product__box"},null,-1)),se={class:"index-product__bottom"};function oe(t,a,l,u,le,ue){const I=$,S=D,k=v,c=g("word-to-span"),n=g("text-char-anim");return i(),p("div",J,[o(k,null,{default:s(()=>[e("div",K,[e("div",M,[e("div",O,[d(e("div",Q,null,512),[[c,"три режима"],[n,{}]]),d(e("div",W,null,512),[[c,"подключения:"],[n,{startDelay:.4}]]),d(e("div",X,null,512),[[c,"проводной,"],[n,{startDelay:.8}]]),d(e("div",Y,null,512),[[c,"радиоканал,"],[n,{startDelay:1}]]),d(e("div",Z,null,512),[[c,"bluetooth"],[n,{startDelay:1.3}]]),ee]),te,_e]),e("div",se,[o(I,null,{default:s(()=>[_("купить")]),_:1}),o(S,{to:"#"},{default:s(()=>[_("подробнее")]),_:1})])])]),_:1})])}const ae={},ve=r(ae,[["render",oe],["__scopeId","data-v-bea9dc83"]]);const x=t=>(h("data-v-2842f2ac"),t=t(),m(),t),ce={class:"footer"},ne=x(()=>e("div",{class:"footer__top"},[e("div",{class:"footer__email"},[e("div",{class:"footer__email-text"},[_("подпишитесь на новостную "),e("br"),_("рассылку, чтобы быть в "),e("br"),_("курсе последних релизов")]),e("div",{class:"footer__email-input"},[e("input",{placeholder:"почта"}),e("div",{class:"footer__email-btn"},"подписаться")])]),e("div",{class:"footer__box"},[e("div",{class:"footer__nav"},[e("a",{href:"https://t.me/lunacy_ru",target:"_blank"},"telegram"),e("a",{href:"https://vk.com/lunacy_ru",target:"_blank"},"вконтакте")]),e("div",{class:"footer__nav"},[e("a",{class:"footer__nav-item",href:"#"},[_("продукты"),e("img",{src:y})]),e("a",{class:"footer__nav-item",href:"#"},"драйвера"),e("a",{class:"footer__nav-item",href:"#"},"поддержка")])])],-1)),de=x(()=>e("div",{class:"footer__mail"},[e("a",{class:"footer__mailer",href:"mailto:help@lunacy.ru"},"help@lunacy.ru")],-1)),ie=x(()=>e("div",{class:"footer__bottom"},[e("div",{class:"footer__bottom-box"},[e("span",null,"Все права защищены")]),e("div",{class:"footer__bottom-box"},[e("a",{href:"#"},"Публичная оферта"),e("a",{href:"#"},"Политика конфиденциальности")])],-1)),re={__name:"Footer",setup(t){return(a,l)=>{const u=v;return i(),p("footer",ce,[o(u,null,{default:s(()=>[ne,de,ie]),_:1})])}}},fe=r(re,[["__scopeId","data-v-2842f2ac"]]);export{v as _,R as a,me as b,ve as c,fe as d,$ as e};
