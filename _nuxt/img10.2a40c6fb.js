import{_ as $,d as L}from"./Footer.a5361db2.js";import{_ as x,v as s,x as t,A as f,B as g,y as e,z as o,M as a,N as d,L as v,G as u,C as p,D as b,E as A,o as T,O as C,P as S,q as k,Q as w}from"./entry.0c94e1b8.js";const D={class:"loud-welcome"},N={class:"loud-welcome__wrapper"},V={class:"loud-welcome__desc"},B={class:"loud-welcome__title"},M={class:"loud-welcome__text"},P={class:"loud-welcome__images"},U={class:"loud-welcome__img"},z=["src"],E={__name:"Welcome",props:{desc:{type:String,default:""},title:{type:String,default:""},text:{type:String,default:""},images:{type:Array,default:()=>[]}},setup(n){return(h,y)=>{const l=$;return s(),t("div",D,[f(l,null,{default:g(()=>[e("div",N,[e("div",V,o(n.desc),1),e("div",B,o(n.title),1),e("div",M,o(n.text),1),e("div",P,[(s(!0),t(a,null,d(n.images,c=>(s(),t("div",U,[e("img",{src:c},null,8,z)]))),256))])])]),_:1})])}}},zs=x(E,[["__scopeId","data-v-87c74a84"]]);const R={class:"headphones-about"},W={class:"headphones-about__wrapper"},q={class:"headphones-about__text"},F={class:"headphones-about__text-line"},G={class:"headphones-about__desc"},O={class:"headphones-about__desc-wrapper"},Q={class:"headphones-about__desc-line"},j={__name:"About",props:{text:{type:Array,default:()=>[]},desc:{type:Array,default:()=>[]}},setup(n){return(h,y)=>{const l=$,c=v("word-to-span"),r=v("text-char-anim");return s(),t("div",R,[f(l,null,{default:g(()=>[e("div",W,[e("div",q,[(s(!0),t(a,null,d(n.text,_=>u((s(),t("div",F,[p(o(_),1)])),[[c],[r,{duration:.6}]])),256))]),e("div",G,[(s(!0),t(a,null,d(n.desc,_=>(s(),t("div",O,[(s(!0),t(a,null,d(_,i=>u((s(),t("div",Q,[p(o(i),1)])),[[c],[r,{duration:.3}]])),256))]))),256))])])]),_:1})])}}},Es=x(j,[["__scopeId","data-v-2bfe6af9"]]),H=""+new URL("play.7dc9e515.svg",import.meta.url).href;const J=n=>(b("data-v-aaface2d"),n=n(),A(),n),K={class:"headphones-video"},X={class:"headphones-video__wrapper"},Y={class:"headphones-video__text"},Z={class:"headphones-video__title"},ee={class:"headphones-video__box"},se={class:"headphones-video__preview"},te={class:"headphones-video__preview-img"},ne=["src"],_e=J(()=>e("div",{class:"headphones-video__preview-play"},[e("img",{src:H})],-1)),oe={__name:"Video",props:{text:{type:String,default:""},title:{type:String,default:""},image:{type:String,default:""}},setup(n){return(h,y)=>{const l=$;return s(),t("div",K,[f(l,null,{default:g(()=>[e("div",X,[e("div",Y,o(n.text),1),e("div",Z,o(n.title),1),e("div",ee,[e("div",se,[e("div",te,[e("img",{src:n.image},null,8,ne)]),_e])])])]),_:1})])}}},Rs=x(oe,[["__scopeId","data-v-aaface2d"]]);const ae={class:"headphones-description"},de={class:"headphones-description__wrapper"},ce={class:"headphones-description__text"},ie={class:"headphones-description__text-line"},re={class:"headphones-description__desc"},le={class:"headphones-description__desc-line"},he={class:"headphones-description__desc-line-num"},pe={class:"headphones-description__desc-line-text"},ue={__name:"Description",props:{text:{type:Array,default:()=>[]},desc:{type:Array,default:()=>[]}},setup(n){return(h,y)=>{const l=$,c=v("word-to-span"),r=v("text-char-anim");return s(),t("div",ae,[f(l,null,{default:g(()=>[e("div",de,[e("div",ce,[(s(!0),t(a,null,d(n.text,_=>u((s(),t("div",ie,[p(o(_),1)])),[[c],[r,{duration:.3}]])),256))]),e("div",re,[(s(!0),t(a,null,d(n.desc,(_,i)=>(s(),t("div",le,[e("div",he,"( "+o(i+1)+" )",1),u((s(),t("div",pe,[p(o(_),1)])),[[c],[r,{duration:.3}]])]))),256))])])]),_:1})])}}},Ws=x(ue,[["__scopeId","data-v-22ddd63e"]]);const ve={class:"headphones-spec"},me={class:"headphones-spec__wrapper"},fe={class:"headphones-spec__img"},ge=["src"],$e={class:"headphones-spec__common"},xe={class:"headphones-spec__title"},ye={class:"headphones-spec__text"},we={class:"headphones-spec__text-block"},Se={class:"headphones-spec__text-line"},be={class:"headphones-spec__desc"},Ae={class:"headphones-spec__desc-line"},Ie={class:"headphones-spec__price"},Le={class:"headphones-spec__name"},Te={class:"headphones-spec__price-num"},Ce={class:"headphones-spec__button"},ke={__name:"ProductSpec",props:{image:{type:String,default:""},title:{type:String,default:""},name:{type:String,default:""},price:{type:String,default:""},text:{type:Array,default:()=>[]},desc:{type:Array,default:()=>[]}},setup(n){return(h,y)=>{const l=L,c=$,r=v("word-to-span"),_=v("text-char-anim");return s(),t("div",ve,[f(c,null,{default:g(()=>[e("div",me,[e("div",fe,[e("img",{src:n.image},null,8,ge)]),e("div",$e,[e("div",xe,o(n.title),1),e("div",ye,[(s(!0),t(a,null,d(n.text,i=>(s(),t("div",we,[(s(!0),t(a,null,d(i,m=>u((s(),t("div",Se,[p(o(m),1)])),[[r],[_,{duration:.3}]])),256))]))),256))]),e("div",be,[(s(!0),t(a,null,d(n.desc,i=>u((s(),t("div",Ae,[p(o(i),1)])),[[r],[_,{duration:.3}]])),256))]),e("div",Ie,[u((s(),t("div",Le,[p(o(n.name),1)])),[[r],[_,{duration:.3}]]),u((s(),t("div",Te,[p(o(n.price),1)])),[[r],[_,{duration:.3}]])]),e("div",Ce,[f(l,null,{default:g(()=>[p("купить")]),_:1})])])])]),_:1})])}}},qs=x(ke,[["__scopeId","data-v-2f5e04e6"]]);const De={class:"headphones-sound-interface",id:"headphones-sound-interface"},Ne={class:"headphones-sound-interface__wrapper"},Ve={class:"headphones-sound-interface__title"},Be={class:"headphones-sound-interface__desc"},Me={class:"headphones-sound-interface__desc-line"},Pe={class:"headphones-sound-interface__images"},Ue=["src"],ze={class:"headphones-sound-interface__specs",id:"headphones-sound-interface__specs"},Ee={class:"headphones-sound-interface__spec"},Re={class:"headphones-sound-interface__spec-common"},We={class:"headphones-sound-interface__spec-title"},qe={class:"headphones-sound-interface__spec-desc"},Fe={class:"headphones-sound-interface__lines"},Ge={class:"headphones-sound-interface__line"},Oe={class:"headphones-sound-interface__spec-common"},Qe={class:"headphones-sound-interface__spec-title"},je={class:"headphones-sound-interface__spec-desc"},He={__name:"SoundInterface",props:{image:{type:String,default:""},title:{type:String,default:""},desc:{type:Array,default:()=>[]},specs:{type:Array,default:()=>[]}},setup(n){const{$gsap:h}=k();return T(()=>{C(()=>{h.timeline({scrollTrigger:{trigger:"#headphones-sound-interface",end:"+=120%",scrub:!0}}).from(".headphones-sound-interface__line_0",{width:"0%",ease:"ease"}).to(".headphones-sound-interface__line_0",{width:"68%",ease:"ease"}),h.timeline({scrollTrigger:{trigger:"#headphones-sound-interface",end:"+=140%",scrub:!0}}).from(".headphones-sound-interface__line_1",{width:"0%",ease:"ease"}).to(".headphones-sound-interface__line_1",{width:"68%",ease:"ease"}),h.timeline({scrollTrigger:{trigger:"#headphones-sound-interface",end:"+=160%",scrub:!0}}).from(".headphones-sound-interface__line_2",{width:"0%",ease:"ease"}).to(".headphones-sound-interface__line_2",{width:"68%",ease:"ease"}),h.timeline({scrollTrigger:{trigger:"#headphones-sound-interface",end:"+=180%",scrub:!0}}).from(".headphones-sound-interface__line_3",{width:"0%",ease:"ease"}).to(".headphones-sound-interface__line_3",{width:"68%",ease:"ease"}),h.fromTo(".headphones-sound-interface__img_2",{scrollTrigger:{trigger:".headphones-sound-interface",start:"-=30%",end:"+=80%"},left:"0px",ease:"ease"},{scrollTrigger:{trigger:".headphones-sound-interface",start:"-=30%",end:"+=80%"},left:"110px",ease:"ease"}),h.fromTo(".headphones-sound-interface__img_3",{scrollTrigger:{trigger:".headphones-sound-interface",start:"-=30%",end:"+=80%"},left:"0px",ease:"ease"},{scrollTrigger:{trigger:".headphones-sound-interface",start:"-=30%",end:"+=80%"},left:"198px",ease:"ease"}),h.fromTo(".headphones-sound-interface__img_4",{scrollTrigger:{trigger:".headphones-sound-interface",start:"-=30%",end:"+=80%"},left:"0px",ease:"ease"},{scrollTrigger:{trigger:".headphones-sound-interface",start:"-=30%",end:"+=80%"},left:"257px",ease:"ease"})})}),(y,l)=>{const c=$,r=v("word-to-span"),_=v("text-char-anim");return s(),t("div",De,[f(c,null,{default:g(()=>[e("div",Ne,[u(e("div",Ve,null,512),[[r,n.title],[_,{duration:.3}]]),e("div",Be,[(s(!0),t(a,null,d(n.desc,(i,m)=>u((s(),t("div",Me,null,512)),[[r,i],[_,{startDelay:m*.5}]])),256))]),e("div",Pe,[(s(),t(a,null,d(4,i=>e("div",{class:S(["headphones-sound-interface__img",[`headphones-sound-interface__img_${i}`]])},[e("img",{src:n.image},null,8,Ue)],2)),64))])]),e("div",ze,[(s(!0),t(a,null,d(n.specs,i=>(s(),t("div",Ee,[e("div",Re,[e("div",We,o(i.title),1),e("div",qe,o(i.desc),1)])]))),256))]),e("div",Fe,[(s(!0),t(a,null,d(n.specs,(i,m)=>(s(),t("div",Ge,[e("div",{class:S(["headphones-sound-interface__line-bar",[`headphones-sound-interface__line_${m}`]])},[e("div",Oe,[e("div",Qe,o(i.title),1),e("div",je,o(i.desc),1)])],2)]))),256))])]),_:1})])}}},Fs=x(He,[["__scopeId","data-v-dfa72857"]]);const Je={class:"headphones-microphone"},Ke={class:"headphones-microphone__wrapper"},Xe={class:"headphones-microphone__text"},Ye={class:"headphones-microphone__text-line"},Ze={class:"headphones-microphone__desc"},es={class:"headphones-microphone__desc-wrapper"},ss={class:"headphones-microphone__desc-line"},ts={class:"headphones-microphone__img"},ns=["src"],_s={__name:"Microphone",props:{text:{type:Array,default:()=>[]},desc:{type:Array,default:()=>[]},image:{type:String,default:""}},setup(n){return(h,y)=>{const l=$,c=v("word-to-span"),r=v("text-char-anim");return s(),t("div",Je,[f(l,null,{default:g(()=>[e("div",Ke,[e("div",Xe,[(s(!0),t(a,null,d(n.text,_=>u((s(),t("div",Ye,[p(o(_),1)])),[[c],[r,{duration:.6}]])),256))]),e("div",Ze,[(s(!0),t(a,null,d(n.desc,_=>(s(),t("div",es,[(s(!0),t(a,null,d(_,i=>u((s(),t("div",ss,[p(o(i),1)])),[[c],[r,{duration:.3}]])),256))]))),256))]),e("div",ts,[e("img",{src:n.image},null,8,ns)])])]),_:1})])}}},Gs=x(_s,[["__scopeId","data-v-04515b59"]]);const os=n=>(b("data-v-04d71de3"),n=n(),A(),n),as={class:"headphones-specs"},ds={class:"headphones-specs__title"},cs={class:"headphones-specs__title-line"},is={class:"headphones-specs__data"},rs={class:"headphones-specs__data-row"},ls={class:"headphones-specs__data-wrapper"},hs={class:"headphones-specs__data-num"},ps={class:"headphones-specs__data-category"},us={key:0},vs=os(()=>e("em",null,"* ",-1)),ms={class:"headphones-specs__data-wrapper"},fs={key:0,class:"headphones-specs__data-model"},gs={key:1,class:"headphones-specs__data-items"},$s={class:"headphones-specs__data-item"},xs={key:2,class:"headphones-specs__data-special"},ys={class:"headphones-specs__data-special-row"},ws={key:3,class:"headphones-specs__data-special"},Ss={class:"headphones-specs__data-special-text"},bs={__name:"Specs",props:{title:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]}},setup(n){return(h,y)=>{const l=$,c=v("word-to-span"),r=v("text-char-anim");return s(),t("div",as,[f(l,null,{default:g(()=>[e("div",ds,[(s(!0),t(a,null,d(n.title,_=>u((s(),t("div",cs,[p(o(_),1)])),[[c],[r,{duration:.3}]])),256))]),e("div",is,[(s(!0),t(a,null,d(n.data,(_,i)=>(s(),t("div",rs,[e("div",ls,[e("div",hs,"0"+o(i+1),1),e("div",ps,[e("span",null,o(_.category),1),_.description?(s(),t("span",us,[vs,p(o(_.description),1)])):w("",!0)])]),e("div",ms,[_.model?(s(),t("div",fs,o(_.model),1)):w("",!0),_.specs?(s(),t("div",gs,[(s(!0),t(a,null,d(_.specs,m=>(s(),t("div",$s,[e("span",null,o(m.name),1),e("span",null,o(m.description),1)]))),256))])):w("",!0),_.special?(s(),t("div",xs,[(s(!0),t(a,null,d(_.special,m=>(s(),t("div",ys,[(s(!0),t(a,null,d(m,I=>(s(),t("span",null,o(I),1))),256))]))),256))])):w("",!0),_.specialLonely?(s(),t("div",ws,[e("div",Ss,o(_.specialLonely),1)])):w("",!0)])]))),256))])]),_:1})])}}},Os=x(bs,[["__scopeId","data-v-04d71de3"]]);const As=n=>(b("data-v-49d05738"),n=n(),A(),n),Is={class:"devices"},Ls=As(()=>e("div",{class:"devices__top"},"другие девайсы",-1)),Ts={class:"devices__wrapper"},Cs=["href"],ks={class:"devices__item-name"},Ds={class:"devices__item-box"},Ns={class:"devices__item-img"},Vs=["src"],Bs={class:"devices__item-text"},Ms={__name:"Devices",props:{data:{type:Array,default:()=>[]}},setup(n){return(h,y)=>{const l=$;return s(),t("div",Is,[f(l,null,{default:g(()=>[Ls,e("div",Ts,[(s(!0),t(a,null,d(n.data,c=>(s(),t("a",{class:S(["devices__item",{disabled:!c.route}]),href:c.route||"#"},[e("div",ks,[(s(!0),t(a,null,d(c.name,r=>(s(),t("span",null,o(r),1))),256))]),e("div",Ds,[e("div",Ns,[e("img",{src:c.image},null,8,Vs)]),e("div",Bs,o(c.route?"перейти":"скоро"),1)])],10,Cs))),256))])]),_:1})])}}},Qs=x(Ms,[["__scopeId","data-v-49d05738"]]),js=""+new URL("img10.7cf37ed6.png",import.meta.url).href;export{zs as _,Es as a,Rs as b,Ws as c,qs as d,Fs as e,Gs as f,Os as g,Qs as h,js as i};