"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9416],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),u=a,f=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8903:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>v,frontMatter:()=>s,metadata:()=>f,toc:()=>k});var n=r(9613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&d(e,r,t[r]);return e};const s={},u="Overview",f={unversionedId:"administration/forges/overview",id:"administration/forges/overview",title:"Overview",description:"Supported features",source:"@site/docs/30-administration/11-forges/10-overview.md",sourceDirName:"30-administration/11-forges",slug:"/administration/forges/overview",permalink:"/docs/next/administration/forges/overview",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/11-forges/10-overview.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Server configuration",permalink:"/docs/next/administration/server-config"},next:{title:"GitHub",permalink:"/docs/next/administration/forges/github"}},g={},k=[{value:"Supported features",id:"supported-features",level:2}],b={toc:k};function v(e){var t,r=e,{components:a}=r,d=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},b),d),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"overview"}),"Overview"),(0,n.kt)("h2",m({},{id:"supported-features"}),"Supported features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Feature"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"th"},{href:"github/"}),"GitHub")),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"th"},{href:"gitea/"}),"Gitea / Forgejo")),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"th"},{href:"gitlab/"}),"Gitlab")),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"th"},{href:"bitbucket/"}),"Bitbucket")),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"th"},{href:"bitbucket_server/"}),"Bitbucket Server")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Event: Push"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Event: Tag"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Event: Pull-Request"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Event: Deploy"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"/docs/next/usage/workflows"}),"Multiple workflows")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"/docs/next/usage/pipeline-syntax#path"}),"when.path filter")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705\xb9"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c")))),(0,n.kt)("p",null,"\xb9 for pull requests at least Gitea version 1.17 is required"))}v.isMDXComponent=!0}}]);