import{u as ae,a as se,r as v,c as $,p as le,o as V,b,d as c,e as p,f as n,g,w as m,F as W,h as G,i as C,n as J,j as re,k as ue,l as q,t as O,m as H,q as ce,s as ie,v as _e,x as de,y as ve,z as pe,A as ge,B as me}from"./vendor.2f5d3c73.js";const fe=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};fe();const _={DRAW_FACE:"draw-face",GUESS_COLOR:"guess-color"};const he={class:"main"},ye=C("\u73A9\u6CD5\u53C3\u8003"),Ce={key:0},Re=n("ul",null,[n("li",null,"\u6BCF\u7D44\u6703\u62FF\u5230\u5C0D\u61C9\u7D44\u5225\u7684\u8FF7\u56E0\u5716\u5EAB"),n("li",null,"\u6D3E\u51FA\u4E00\u540D\u4E0A\u53F0\uFF0C\u6A21\u4EFF\u62BD\u5230\u7684\u5716\u7247\uFF0C\u7B54\u6848\u70BA\u5716\u7247\u7684\u5E8F\u865F"),n("li",null,"\u6B64\u9801\u9762\u53EA\u80FD\u7D66\u4E0A\u53F0\u8005\u770B\u5230"),n("li",null,"\u7B54\u5C0D\u5F97\u5206\uFF0C\u6700\u591A 36 \u984C"),n("li",null,"\u53EF\u4EE5\u5012\u6578\u5169\u5206\u9418\uFF0C\u770B\u5927\u5BB6\u80FD\u731C\u5230\u591A\u5C11")],-1),we=[Re],be={key:1},Ae=n("ul",null,[n("li",null,"\u4E3B\u6301\u4EBA\u6295\u5F71\u6B64\u9801\u9762"),n("li",null,"\u6307\u6D3E\u4E00\u540D\u4E0A\u53F0"),n("li",null,"\u9032\u884C 90 \u79D2\u7684\u5012\u6578\u8A08\u6642\uFF0C\u5538\u51FA\u6587\u5B57\u771F\u6B63\u7684\u984F\u8272"),n("li",null,"\u7B54\u5C0D\uFF0C\u4E3B\u6301\u4EBA\u9EDE\u64CA\u5DE6\u908A\u6309\u9215\uFF0C\u7B54\u932F\u9EDE\u64CA\u53F3\u908A")],-1),Se=[Ae],Ee={setup(u){const s=ae();se();const o=v(_.DRAW_FACE),l={[_.DRAW_FACE]:{title:"\u731C\u81C9\u904A\u6232",subTitle:"\u5E73\u5E38\u611B\u7576\u6F14\u54E1\u7684\uFF0C\u73FE\u5728\u8A72\u4F60\u4E0A\u5834\u4E86\uFF01"},[_.GUESS_COLOR]:{title:"\u731C\u984F\u8272",subTitle:"\u597D\u597D\u8AAA\u8A71\uFF01"}};_.DRAW_FACE+"",_.GUESS_COLOR+"";const e=$(()=>o.value===_.DRAW_FACE?_.GUESS_COLOR:_.DRAW_FACE),t=()=>{s.push({name:e.value}),o.value=e.value};le("switchGame",{syncCurrentGame:(S=_.DRAW_FACE)=>{o.value=S}});const f=v(!1),N=()=>{f.value=!1},D=()=>{console.log("click"),f.value=!0};return V(()=>{s.push({name:o.value})}),(S,h)=>{const r=b("a-button"),R=b("a-page-header"),y=b("a-modal"),E=b("router-view");return c(),p(W,null,[n("div",he,[g(R,{style:{border:"1px solid rgb(235, 237, 240, 0.5)"},title:l[o.value].title,"sub-title":l[o.value].subTitle,onBack:t},{extra:m(()=>[g(r,{key:"3",onClick:D},{default:m(()=>[ye]),_:1})]),_:1},8,["title","sub-title"]),g(y,{visible:f.value,"onUpdate:visible":h[0]||(h[0]=w=>f.value=w),title:"Rules",onOk:N},{default:m(()=>[o.value===G(_).DRAW_FACE?(c(),p("div",Ce,we)):(c(),p("div",be,Se))]),_:1},8,["visible"])]),g(E)],64)}}};var U=(u,s)=>{const o=u.__vccOpts||u;for(const[l,e]of s)o[l]=e;return o};const ke={props:{imageNum:String|Number,group:String},setup(u){return(s,o)=>(c(),p("div",{class:J(["draw-result",`draw-result--${s.$props.group}`,{[`draw-result--${s.$props.group}--${s.$props.imageNum}`]:u.imageNum}])},null,2))}};var Ge=U(ke,[["__scopeId","data-v-4368fc70"]]);const Oe={class:"main"},$e=C(" Select a group "),Ne={class:"content"},De=C(" Back to Groups "),Ie=C(" Reset "),Fe={setup(u){const{syncCurrentGame:s}=re("switchGame"),o=()=>Array(36).fill(0).map((h,r)=>r+1),l=v(["A","B","C","D"]),e=v({A:o(),B:o(),C:o(),D:o()}),t=v("A"),i=v(""),f=$(()=>e.value[t.value].length===0);function N(){if(e.value[t.value].length===0)ie.warn("\u5DF2\u5168\u6578\u62BD\u5B8C",1);else{const r=Math.floor(Math.random()*e.value[t.value].length),R=e.value[t.value][r];i.value=R,e.value[t.value].splice(r,1),localStorage.setItem("drawFace",JSON.stringify(e.value)),localStorage.setItem("lastResult",JSON.stringify({group:t.value,num:R}))}}function D(){i.value=""}function S(){e.value[t.value]=o(),i.value=""}return ue(()=>{const h=JSON.parse(localStorage.getItem("drawFace")),r=JSON.parse(localStorage.getItem("lastResult"));h!==null&&(e.value=h),r!==null&&(t.value=r.group,i.value=r.num)}),V(()=>{s(_.DRAW_FACE)}),(h,r)=>{const R=b("a-typography-title"),y=b("a-radio-button"),E=b("a-radio-group"),w=b("a-button");return c(),p("div",Oe,[n("header",null,[g(R,{level:2},{default:m(()=>[$e]),_:1})]),g(E,{value:t.value,"onUpdate:value":r[0]||(r[0]=d=>t.value=d),onChange:D,style:{"margin-bottom":"16px"},size:"large"},{default:m(()=>[(c(!0),p(W,null,q(l.value,d=>(c(),H(y,{key:d,value:d},{default:m(()=>[C(O(d),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"]),n("div",Ne,"Current Group: "+O(t.value),1),g(Ge,{group:t.value,imageNum:i.value},null,8,["group","imageNum"]),g(w,{class:"button",onClick:N,disabled:G(f)},{default:m(()=>[C(O(G(f)?"End":"Draw"),1)]),_:1},8,["disabled"]),g(w,{class:"button",onClick:S},{default:m(()=>[De]),_:1}),G(f)?(c(),H(w,{key:0,style:{margin:"0 10px"},onClick:S},{default:m(()=>[Ie]),_:1})):ce("",!0),n("p",null,"Result: "+O(i.value),1)])}}};var xe=U(Fe,[["__scopeId","data-v-2c7e1fca"]]);function Le(){const u=v();function s(l,e){u.value=setInterval(l,e)}function o(){clearInterval(u.value),u.value=null}return[s,o]}const We="/drawFace/assets/colors",a=(u,s)=>Array(s).fill(0).map((o,l)=>`${We}/${u}${l+1}.png`);a("black",9);a("pink",9);a("purple",9);a("red",9);a("white",9);a("yellow",9);a("green",9);a("orange",9);a("blue",9);const Be=a("\u6C34\u85CD",7),Me=a("\u767D",7),Te=a("\u7C73\u9EC3",7),Ue=a("\u7D05\u5B57",7),Ye=a("\u7C89\u7D05",7),ze=a("\u8349\u7DA0",7),Pe=a("\u7D2B",7),je=a("\u9EC3",7),Ve=a("\u9ED1",7),Je=a("\u7DA0",7),qe=a("\u6A58\u5B57",7),He=a("\u85CD",7);var Ke={waterBlue:Be,whilte:Me,yellowWhite:Te,red:Ue,pink:Ye,grass:ze,purple:Pe,yellow:je,black:Ve,green:Je,orange:qe,blue:He};const Xe={class:"wrapper"},Qe={class:"colors"},Ze={class:"time"},et={class:"score1"},tt={key:0,class:"start-page"},ot={class:"event-page"},nt=["src"],at={class:"answer-group"},st=C(" \u{1F60E} "),lt=C(" \u{1F92E} "),rt={key:2,class:"gameover"},ut=C("CONFIRM"),ct={setup(u){_e(k=>({"3d4abebd":G(te),"38a72ade":G(oe)}));const{waterBlue:s,whilte:o,yellowWhite:l,red:e,pink:t,grass:i,purple:f,yellow:N,black:D,green:S,orange:h,blue:r}=Ke,R=[].concat([...s,...o,...l,...e,...t,...i,...f,...N,...D,...S,...h,...r]),y={READY:"ready",PLAYING:"playing",END:"end"},E={CORRECT:"correct",WRONG:"wrong"},w=90,d=v(w),x=v(0),B=v(y.READY),[K,Y]=Le(),X=$(()=>{const k=Math.floor(d.value/60),A=d.value%60;return`${String(k).padStart(2,"0")}:${String(A).padStart(2,"0")}`}),z=()=>Math.floor(Math.random()*I.value.length),I=v([...R]),L=v(z());function M(k){B.value=k}function P(k,A){I.value.length===1&&(I.value=Array.from(R)),A===E.CORRECT&&x.value++,I.value.splice(k,1),L.value=z()}function Q(){M(y.END),d.value=w,Y()}function Z(){M(y.PLAYING),K(()=>{d.value>0?d.value--:Q()},1e3)}function ee(){M(y.READY),x.value=0,d.value=w,Y()}const j=$(()=>"/drawFace/assets/colors"),te=$(()=>`url(${j.value}/steve-johnson-Xx_d26R37E4-unsplash.jpg)`),oe=$(()=>`url(${j.value}/new-start.png)`);return(k,A)=>{const T=b("a-button");return c(),p("div",Xe,[n("div",Qe,[n("div",Ze,[C(O(G(X))+" ",1),n("p",et,"SCORE: "+O(x.value),1)]),B.value===y.READY?(c(),p("div",tt,[n("div",{class:"button",onClick:Z},"Start")])):B.value===y.PLAYING?(c(),p(W,{key:1},[n("div",ot,[(c(!0),p(W,null,q(I.value,(F,ne)=>(c(),p("div",{key:F,class:J(["image",{"image--show":L.value===ne}]),style:de({"background-image":`url(${F})`})},[n("img",{id:"preload",src:F},null,8,nt)],6))),128))]),n("div",at,[g(T,{class:"answer-group__btn",onClick:A[0]||(A[0]=F=>P(L.value,E.CORRECT)),size:"large"},{default:m(()=>[st]),_:1}),g(T,{class:"answer-group__btn",onClick:A[1]||(A[1]=F=>P(L.value,E.WRONG)),size:"large"},{default:m(()=>[lt]),_:1})])],64)):(c(),p("div",rt,[n("span",null,"YOUR SCORE: "+O(x.value),1),g(T,{size:"large",onClick:ee},{default:m(()=>[ut]),_:1})]))])])}}};var it=U(ct,[["__scopeId","data-v-5d0cad74"]]);const _t=[{path:"/",component:xe,name:_.DRAW_FACE},{path:"/colors",component:it,name:_.GUESS_COLOR}],dt=ve({history:pe(),routes:_t});ge(Ee).use(dt).use(me).mount("#app");