"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2775],{32870:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(50959),l=a(45924),n=a(34582),o=a(46859),i=a(52727),s=a(59456);const c={sidebar:"sidebar_te2O",sidebarItemTitle:"sidebarItemTitle_ByF8",sidebarItemList:"sidebarItemList_p1UK",sidebarItem:"sidebarItem_kCsy",sidebarItemLink:"sidebarItemLink_C4ZC",sidebarItemLinkActive:"sidebarItemLinkActive_aG1v"};function m({sidebar:e}){return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c.sidebarItemTitle,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,l.Z)(c.sidebarItemList,"clean-list")},e.items.map((e=>r.createElement("li",{key:e.permalink,className:c.sidebarItem},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var u=a(2836);function d({sidebar:e}){return r.createElement("ul",{className:"menu__list"},e.items.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return r.createElement(u.Zo,{component:d,props:e})}function p({sidebar:e}){const t=(0,o.i)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(g,{sidebar:e}):r.createElement(m,{sidebar:e}):null}var b=Object.defineProperty,f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,E=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,P=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&E(e,a,t[a]);if(f)for(var a of f(t))v.call(t,a)&&E(e,a,t[a]);return e},y=(e,t)=>{var a={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&v.call(e,r)&&(a[r]=e[r]);return a};function N(e){const t=e,{sidebar:a,toc:o,children:i}=t,s=y(t,["sidebar","toc","children"]),c=a&&a.items.length>0;return r.createElement(n.Z,P({},s),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(p,{sidebar:a}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),o&&r.createElement("div",{className:"col col--2"},o))))}},29982:(e,t,a)=>{a.d(t,{Z:()=>ee});var r=a(50959),l=a(45924),n=a(34516),o=a(41415);function i({children:e,className:t}){var a;const{frontMatter:l,assets:i}=(0,n.C)(),{withBaseUrl:s}=(0,o.C)(),c=null!=(a=i.image)?a:l.image;return r.createElement("article",{className:t,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&r.createElement("meta",{itemProp:"image",content:s(c,{absolute:!0})}),e)}var s=a(52727);const c={title:"title_B_lV"};function m({className:e}){const{metadata:t,isBlogPostPage:a}=(0,n.C)(),{permalink:o,title:i}=t,m=a?"h1":"h2";return r.createElement(m,{className:(0,l.Z)(c.title,e),itemProp:"headline"},a?i:r.createElement(s.Z,{itemProp:"url",to:o},i))}var u=a(59456),d=a(92494);const g={container:"container_K_jd"};function p({readingTime:e}){const t=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return r.createElement(r.Fragment,null,t(e))}function b({date:e,formattedDate:t}){return r.createElement("time",{dateTime:e,itemProp:"datePublished"},t)}function f(){return r.createElement(r.Fragment,null," \xb7 ")}function h({className:e}){const{metadata:t}=(0,n.C)(),{date:a,formattedDate:o,readingTime:i}=t;return r.createElement("div",{className:(0,l.Z)(g.container,"margin-vert--md",e)},r.createElement(b,{date:a,formattedDate:o}),void 0!==i&&r.createElement(r.Fragment,null,r.createElement(f,null),r.createElement(p,{readingTime:i})))}var v=Object.defineProperty,E=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,N=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,_=(e,t)=>{for(var a in t||(t={}))P.call(t,a)&&N(e,a,t[a]);if(E)for(var a of E(t))y.call(t,a)&&N(e,a,t[a]);return e};function O(e){return e.href?r.createElement(s.Z,_({},e)):r.createElement(r.Fragment,null,e.children)}function k({author:e,className:t}){const{name:a,title:n,url:o,imageURL:i,email:s}=e,c=o||s&&`mailto:${s}`||void 0;return r.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",t)},i&&r.createElement(O,{href:c,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(O,{href:c,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}const Z={authorCol:"authorCol_Jg0K",imageOnlyAuthorRow:"imageOnlyAuthorRow_pmM8",imageOnlyAuthorCol:"imageOnlyAuthorCol_sq5G"};var w=Object.defineProperty,C=Object.defineProperties,I=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,L=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,x=(e,t)=>{for(var a in t||(t={}))j.call(t,a)&&L(e,a,t[a]);if(T)for(var a of T(t))F.call(t,a)&&L(e,a,t[a]);return e},B=(e,t)=>C(e,I(t));function R({className:e}){const{metadata:{authors:t},assets:a}=(0,n.C)();if(0===t.length)return null;const o=t.every((({name:e})=>!e));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",o?Z.imageOnlyAuthorRow:"row",e)},t.map(((e,t)=>{var n;return r.createElement("div",{className:(0,l.Z)(!o&&"col col--6",o?Z.imageOnlyAuthorCol:Z.authorCol),key:t},r.createElement(k,{author:B(x({},e),{imageURL:null!=(n=a.authorsImageUrls[t])?n:e.imageURL})}))})))}function A(){return r.createElement("header",null,r.createElement(m,null),r.createElement(h,null),r.createElement(R,null))}var M=a(75026),D=a(81942);function U({children:e,className:t}){const{isBlogPostPage:a}=(0,n.C)();return r.createElement("div",{id:a?M.blogPostContainerID:void 0,className:(0,l.Z)("markdown",t),itemProp:"articleBody"},r.createElement(D.Z,null,e))}var S=a(53372),$=a(7056),z=Object.defineProperty,G=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,W=(e,t,a)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,J=(e,t)=>{for(var a in t||(t={}))q.call(t,a)&&W(e,a,t[a]);if(G)for(var a of G(t))K.call(t,a)&&W(e,a,t[a]);return e},V=(e,t)=>{var a={};for(var r in e)q.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&G)for(var r of G(e))t.indexOf(r)<0&&K.call(e,r)&&(a[r]=e[r]);return a};function H(){return r.createElement("b",null,r.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function X(e){const t=e,{blogPostTitle:a}=t,l=V(t,["blogPostTitle"]);return r.createElement(s.Z,J({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:a})},l),r.createElement(H,null))}const Q={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_g_Dy"};function Y(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:a,title:o,editUrl:i,hasTruncateMarker:s}=e,c=!t&&s,m=a.length>0;return m||c||i?r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&Q.blogPostFooterDetailsFull)},m&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},r.createElement($.Z,{tags:a})),t&&i&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(S.Z,{editUrl:i})),c&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},r.createElement(X,{blogPostTitle:o,to:e.permalink}))):null}function ee({children:e,className:t}){const a=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--xl"}();return r.createElement(i,{className:(0,l.Z)(a,t)},r.createElement(A,null),r.createElement(U,null,e),r.createElement(Y,null))}},53372:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(50959),l=a(59456),n=a(33379),o=a(45924);const i={iconEdit:"iconEdit_maoa"};var s=Object.defineProperty,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&d(e,a,t[a]);if(c)for(var a of c(t))u.call(t,a)&&d(e,a,t[a]);return e},p=(e,t)=>{var a={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a};function b(e){var t=e,{className:a}=t,l=p(t,["className"]);return r.createElement("svg",g({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(i.iconEdit,a),"aria-hidden":"true"},l),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function f({editUrl:e}){return r.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:n.k.common.editThisPage},r.createElement(b,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},19951:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(50959),l=a(45924),n=a(52727);function o(e){const{permalink:t,title:a,subLabel:o,isNext:i}=e;return r.createElement(n.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&r.createElement("div",{className:"pagination-nav__sublabel"},o),r.createElement("div",{className:"pagination-nav__label"},a))}},58036:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(50959),l=a(45924),n=a(52727);const o={tag:"tag_GiHe",tagRegular:"tagRegular_nECV",tagWithCount:"tagWithCount_JPO0"};function i({permalink:e,label:t,count:a}){return r.createElement(n.Z,{href:e,className:(0,l.Z)(o.tag,a?o.tagWithCount:o.tagRegular)},t,a&&r.createElement("span",null,a))}},7056:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(50959),l=a(45924),n=a(59456),o=a(58036);const i={tags:"tags_XFGs",tag:"tag_jcCv"};function s({tags:e}){return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(i.tags,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>r.createElement("li",{key:t,className:i.tag},r.createElement(o.Z,{label:e,permalink:t}))))))}},34516:(e,t,a)=>{a.d(t,{C:()=>i,n:()=>o});var r=a(50959),l=a(89574);const n=r.createContext(null);function o({children:e,content:t,isBlogPostPage:a=!1}){const l=function({content:e,isBlogPostPage:t}){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:a});return r.createElement(n.Provider,{value:l},e)}function i(){const e=(0,r.useContext)(n);if(null===e)throw new l.i6("BlogPostProvider");return e}},92494:(e,t,a)=>{a.d(t,{c:()=>c});var r=a(50959),l=a(15144);const n=["zero","one","two","few","many","other"];function o(e){return n.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}}]);