import{d as c,o as s,c as m,w as u,h as n,b as l,t as p,k as h,f as _,F as y,g as v,l as $,D as k,a4 as A,ag as L,ah as Y,a2 as w,m as B,i as r,ae as C}from"./app-k9pF9odt.js";import{o as P}from"./index-nlSmcLJj.js";import{_ as V}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-vmhZyjeE.js";const F=["title"],D=["src","alt","on-error"],E=c({__name:"YunAlbum",props:{album:{}},setup(i){return(e,t)=>{const a=h;return s(),m(a,{class:"yun-album-list-item",to:e.album.url},{default:u(()=>[l("figure",{title:e.album.desc},[l("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":n(P)},null,40,D),l("figcaption",null," 「"+p(e.album.caption)+"」 ",1)],8,F)]),_:1},8,["to"])}}}),I={class:"yun-album-list"},N=c({__name:"YunAlbumList",props:{albums:{}},setup(i){return(e,t)=>{const a=E;return s(),_("div",I,[(s(!0),_(y,null,v(e.albums,o=>(s(),m(a,{key:o.url,album:o},null,8,["album"]))),128))])}}}),R={text:"center",class:"yun-text-light",p:"2"},T=c({__name:"albums",setup(i){const{t:e}=$(),t=k(),a=A(t);L([Y({"@type":"CollectionPage"})]);const o=w(()=>t.value.albums||[]);return(S,x)=>{const b=V,d=N,f=B("RouterView"),g=C;return s(),m(g,null,{"main-header":u(()=>[r(b,{title:n(a)||n(e)("title.album"),icon:n(t).icon||"i-ri-gallery-line",color:n(t).color},null,8,["title","icon","color"])]),"main-content":u(()=>[l("div",R,p(n(e)("counter.albums",o.value.length)),1),r(d,{albums:o.value},null,8,["albums"]),r(f)]),_:1})}}});export{T as default};
