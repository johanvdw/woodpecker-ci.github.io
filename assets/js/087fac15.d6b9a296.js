"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2375],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return k}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=l(r),k=a,s=u["".concat(c,".").concat(k)]||u[k]||m[k]||i;return r?n.createElement(s,o(o({ref:e},d),{},{components:r})):n.createElement(s,o({ref:e},d))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1319:function(t,e,r){r.r(e),r.d(e,{assets:function(){return g},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return f}});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))c.call(e,r)&&d(t,r,e[r]);if(p)for(var r of p(e))l.call(e,r)&&d(t,r,e[r]);return t};const u={},k="Overview",s={unversionedId:"administration/vcs/overview",id:"version-0.15/administration/vcs/overview",title:"Overview",description:"Supported features",source:"@site/versioned_docs/version-0.15/30-administration/11-vcs/10-overview.md",sourceDirName:"30-administration/11-vcs",slug:"/administration/vcs/overview",permalink:"/docs/administration/vcs/overview",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/30-administration/11-vcs/10-overview.md",tags:[],version:"0.15",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Server configuration",permalink:"/docs/administration/server-config"},next:{title:"GitHub",permalink:"/docs/administration/vcs/github"}},g={},f=[{value:"Supported features",id:"supported-features",level:2}],N={toc:f};function v(t){var e,r=t,{components:a}=r,d=((t,e)=>{var r={};for(var n in t)c.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&l.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=m(m({},N),d),i(e,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"overview"}),"Overview"),(0,n.kt)("h2",m({},{id:"supported-features"}),"Supported features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Feature"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"th"},{href:"github/"}),"GitHub")),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"th"},{href:"gitea/"}),"Gitea")),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"th"},{href:"gitlab/"}),"Gitlab")),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"th"},{href:"bitbucket/"}),"Bitbucket")),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"th"},{href:"bitbucket_server/"}),"Bitbucket Server")),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"th"},{href:"gogs/"}),"Gogs")),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"th"},{href:"coding/"}),"Coding")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Event: Push"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Event: Tag"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Event: Pull-Request"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Event: Deploy"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"OAuth"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"/docs/usage/multi-pipeline"}),"Multi pipeline")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"/docs/usage/conditional-execution#path"}),"when.path filter")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705\xb9"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u274c")))),(0,n.kt)("p",null,"\xb9) ",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/woodpecker-ci/woodpecker/issues/754"}),"except for pull requests")))}v.isMDXComponent=!0}}]);