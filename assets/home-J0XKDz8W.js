import{_ as H}from"./YunFooter.vue_vue_type_script_setup_true_lang-h9RWwl7x.js";import{d as k,o as n,f as a,b as l,r as S,s as C,v as m,M as N,t as y,a as h,_ as B,an as V,a2 as b,q as g,F as M,g as L,n as Y,h as _,c as $,i as w,ao as z,E as A,ap as E,u as F,m as R,af as j}from"./app-k9pF9odt.js";const D={class:"yun-notice m-auto"},P=["innerHTML"],q=k({__name:"YunNotice",props:{content:{}},setup(d){return(e,o)=>(n(),a("div",D,[l("span",{innerHTML:e.content},null,8,P),S(e.$slots,"default")]))}}),G={class:"say"},O={key:0,class:"say-content animate-fade-in animate-iteration-1"},W={key:1,class:"say-author"},I={key:2,class:"say-from"},J=k({__name:"YunSay",setup(d){const e=C(),o=m(""),r=m(""),u=m("");function v(){const s=e.value.say.hitokoto.enable?e.value.say.hitokoto.api:e.value.say.api;s&&fetch(s).then(t=>{if(t.ok)t.json().then(c=>{if(e.value.say.hitokoto.enable)o.value=c.hitokoto,r.value=c.from_who,u.value=c.from;else{const i=c[Math.floor(Math.random()*c.length)];i.content?(o.value=i.content,r.value=i.author,u.value=i.from):o.value=i}});else throw new Error(`${e.value.say.api}, HTTP error, status = ${t.status}`)}).catch(t=>{console.error(t.message)})}return N(()=>{v()}),(s,t)=>(n(),a("div",G,[o.value?(n(),a("span",O,y(o.value),1)):h("v-if",!0),r.value?(n(),a("span",W,y(r.value),1)):h("v-if",!0),u.value?(n(),a("span",I,y(u.value),1)):h("v-if",!0)]))}}),K={},Q={class:"go-down","aria-label":"go-down",href:"javascript:window.scrollTo(0, window.banner.clientHeight);"},U=l("div",{"i-ri-arrow-down-s-line":"","inline-flex":""},null,-1),X=[U];function Z(d,e){return n(),a("a",Q,X)}const ee=B(K,[["render",Z]]),ne={},te={class:"yun-cloud"},se=V('<svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="var(--yun-c-cloud)"></path></defs><g class="parallax"><use xlink:href="#gentle-wave" x="48" y="0"></use><use xlink:href="#gentle-wave" x="48" y="3"></use><use xlink:href="#gentle-wave" x="48" y="5"></use><use xlink:href="#gentle-wave" x="48" y="7"></use></g></svg>',1),ae=[se];function oe(d,e){return n(),a("div",te,ae)}const re=B(ne,[["render",oe]]),ce={class:"banner-line-container"},ie={class:"banner-char-container"},le={class:"char"},ue={class:"banner-line-container bottom"},_e=k({__name:"YunBanner",setup(d){const e=C(),o=b(()=>{const s=[];for(let t=0;t<e.value.banner.title.length;t++){const c=z(1.5,3.5);s.push(c)}return s}),r=b(()=>o.value.reduce((s,t)=>s+t,0)/2),u=b(()=>({"--banner-line-height":`calc(var(--banner-height, 100vh) / 2 - ${r.value}rem)`})),v=m(!0);return(s,t)=>{var f;const c=re,i=ee;return n(),a("div",{id:"yun-banner",style:Y(u.value)},[l("div",ce,[l("div",{class:g(["banner-line vertical-line-top",{active:v.value}])},null,2)]),l("div",ie,[(n(!0),a(M,null,L(_(e).banner.title,(x,p)=>(n(),a("div",{key:p,class:"char-box"},[l("span",{class:g([p%2!==0?"char-right":"char-left"]),style:Y({"--banner-char-size":`${o.value[p]}rem`})},[l("span",le,y(x),1)],6)]))),128))]),l("div",ue,[l("div",{class:g(["banner-line vertical-line-bottom",{active:v.value}])},null,2)]),(f=_(e).banner.cloud)!=null&&f.enable?(n(),$(c,{key:0})):h("v-if",!0),w(i)],4)}}}),de=k({__name:"home",setup(d){const e=A(),o=E("home"),r=C(),u=F(),v=b(()=>u.path.startsWith("/page"));return(s,t)=>{const c=j,i=_e,f=J,x=q,p=R("RouterView"),T=H;return n(),a("main",{class:g(["yun-main flex-center",_(o)&&!_(e).isSidebarOpen?"pl-0":"md:pl-$va-sidebar-width"]),flex:"~ col",w:"full"},[w(c,{"show-hamburger":!0}),v.value?h("v-if",!0):(n(),a(M,{key:0},[_(r).banner.enable?(n(),$(i,{key:0})):h("v-if",!0),_(r).say.enable?(n(),$(f,{key:1,w:"full"})):h("v-if",!0)],64)),_(r).notice.enable?(n(),$(x,{key:1,content:_(r).notice.content,mt:"4"},null,8,["content"])):h("v-if",!0),S(s.$slots,"board"),S(s.$slots,"default",{},()=>[w(p)]),w(T)],2)}}});export{de as default};
