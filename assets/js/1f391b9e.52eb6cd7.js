"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3085],{92624:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var r=t(50959),a=t(5341),l=t(30801),o=t(74887),i=t(4540),c=t(86981),s=t(67507),m=t(14706);const u={mdxPageWrapper:"mdxPageWrapper_ME69"};function d(e){var n;const{content:t}=e,{metadata:{title:d,description:f,frontMatter:v,unlisted:p},assets:g}=t,{keywords:b,wrapperClassName:h,hide_table_of_contents:O}=v,E=null!=(n=g.image)?n:v.image;return r.createElement(l.FG,{className:(0,a.Z)(null!=h?h:o.k.wrapper.mdxPages,o.k.page.mdxPage)},r.createElement(i.Z,null,r.createElement(l.d,{title:d,description:f,keywords:b,image:E}),r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",u.mdxPageWrapper)},r.createElement("div",{className:(0,a.Z)("col",!O&&"col--8")},p&&r.createElement(m.Z,null),r.createElement("article",null,r.createElement(c.Z,null,r.createElement(t,null)))),!O&&t.toc.length>0&&r.createElement("div",{className:"col col--2"},r.createElement(s.Z,{toc:t.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level}))))))}},67507:(e,n,t)=>{t.d(n,{Z:()=>O});var r=t(50959),a=t(5341),l=t(61364);const o={tableOfContents:"tableOfContents_zLQo",docItemContainer:"docItemContainer_OG28"};var i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,v=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&f(e,t,n[t]);if(m)for(var t of m(n))d.call(n,t)&&f(e,t,n[t]);return e},p=(e,n)=>c(e,s(n)),g=(e,n)=>{var t={};for(var r in e)u.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&m)for(var r of m(e))n.indexOf(r)<0&&d.call(e,r)&&(t[r]=e[r]);return t};const b="table-of-contents__link toc-highlight",h="table-of-contents__link--active";function O(e){var n=e,{className:t}=n,i=g(n,["className"]);return r.createElement("div",{className:(0,a.Z)(o.tableOfContents,"thin-scrollbar",t)},r.createElement(l.Z,p(v({},i),{linkClassName:b,linkActiveClassName:h})))}},61364:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(50959),a=t(28687),l=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&u(e,t,n[t]);if(c)for(var t of c(n))m.call(n,t)&&u(e,t,n[t]);return e},f=(e,n)=>o(e,i(n)),v=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&m.call(e,r)&&(t[r]=e[r]);return t};function p(e){const n=e.map((e=>f(d({},e),{parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const t=e,{parentIndex:a}=t,l=v(t,["parentIndex"]);a>=0?n[a].children.push(l):r.push(l)})),r}function g({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return e.flatMap((e=>{const r=g({toc:e.children,minHeadingLevel:n,maxHeadingLevel:t});return function(e){return e.level>=n&&e.level<=t}(e)?[f(d({},e),{children:r})]:r}))}function b(e){const n=e.getBoundingClientRect();return n.top===n.bottom?b(e.parentNode):n}function h(e,{anchorTopOffset:n}){var t,r;const a=e.find((e=>b(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(b(a))?a:null!=(t=e[e.indexOf(a)-1])?t:null}return null!=(r=e[e.length-1])?r:null}function O(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function E(e){const n=(0,r.useRef)(void 0),t=O();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function({minHeadingLevel:e,maxHeadingLevel:n}){const t=[];for(let r=e;r<=n;r+=1)t.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=h(i,{anchorTopOffset:t.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}var y=t(83019);const L=r.memo((function e({toc:n,className:t,linkClassName:a,isChild:l}){return n.length?r.createElement("ul",{className:l?void 0:t},n.map((n=>r.createElement("li",{key:n.id},r.createElement(y.Z,{to:`#${n.id}`,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:n.value}}),r.createElement(e,{isChild:!0,toc:n.children,className:t,linkClassName:a}))))):null}));var x=Object.defineProperty,N=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,H=(e,n,t)=>n in e?x(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,w=(e,n)=>{for(var t in n||(n={}))C.call(n,t)&&H(e,t,n[t]);if(N)for(var t of N(n))k.call(n,t)&&H(e,t,n[t]);return e},_=(e,n)=>{var t={};for(var r in e)C.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&N)for(var r of N(e))n.indexOf(r)<0&&k.call(e,r)&&(t[r]=e[r]);return t};function j(e){var n=e,{toc:t,className:l="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:c,maxHeadingLevel:s}=n,m=_(n,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const u=(0,a.L)(),d=null!=c?c:u.tableOfContents.minHeadingLevel,f=null!=s?s:u.tableOfContents.maxHeadingLevel,v=function({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return(0,r.useMemo)((()=>g({toc:p(e),minHeadingLevel:n,maxHeadingLevel:t})),[e,n,t])}({toc:t,minHeadingLevel:d,maxHeadingLevel:f});return E((0,r.useMemo)((()=>{if(o&&i)return{linkClassName:o,linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:f}}),[o,i,d,f])),r.createElement(L,w({toc:v,className:l,linkClassName:o},m))}},14706:(e,n,t)=>{t.d(n,{Z:()=>O});var r=t(50959),a=t(5341),l=t(14411),o=t(61786);function i(){return r.createElement(l.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title"},"Unlisted page")}function c(){return r.createElement(l.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message"},"This page is unlisted. Search engines will not index it, and only users having a direct link can access it.")}function s(){return r.createElement(o.Z,null,r.createElement("meta",{name:"robots",content:"noindex, nofollow"}))}var m=t(74887),u=t(87226),d=Object.defineProperty,f=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))v.call(n,t)&&g(e,t,n[t]);if(f)for(var t of f(n))p.call(n,t)&&g(e,t,n[t]);return e};function h({className:e}){return r.createElement(u.Z,{type:"caution",title:r.createElement(i,null),className:(0,a.Z)(e,m.k.common.unlistedBanner)},r.createElement(c,null))}function O(e){return r.createElement(r.Fragment,null,r.createElement(s,null),r.createElement(h,b({},e)))}}}]);