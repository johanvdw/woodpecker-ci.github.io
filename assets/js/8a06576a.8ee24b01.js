"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9343],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>f,toc:()=>b});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={},m="Translations",f={unversionedId:"development/translations",id:"development/translations",title:"Translations",description:"Woodpecker uses Vue I18n as translation library, thus you can easily translate the web UI into your language. Therefore, copy the file web/src/assets/locales/en.json to the same path with your language's code and .json as name.",source:"@site/docs/92-development/07-translations.md",sourceDirName:"92-development",slug:"/development/translations",permalink:"/docs/next/development/translations",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/92-development/07-translations.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/next/development/guides"},next:{title:"Swagger, API Spec and Code Generation",permalink:"/docs/next/development/swagger"}},y={},b=[],g={toc:b};function h(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},g),c),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"translations"}),"Translations"),(0,r.kt)("p",null,"Woodpecker uses ",(0,r.kt)("a",u({parentName:"p"},{href:"https://vue-i18n.intlify.dev/"}),"Vue I18n")," as translation library, thus you can easily translate the web UI into your language. Therefore, copy the file ",(0,r.kt)("inlineCode",{parentName:"p"},"web/src/assets/locales/en.json")," to the same path with your language's code and ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," as name.\nThen, translate content of this file, but only the values:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "dont_translate": "Only translate this text"\n}\n')),(0,r.kt)("p",null,"To add support for time formatting, import the language into two files:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"web/src/compositions/useDate.ts"),": Just add a line like ",(0,r.kt)("inlineCode",{parentName:"li"},"import 'dayjs/locale/en';")," to the first block of ",(0,r.kt)("inlineCode",{parentName:"li"},"import")," statements and replace ",(0,r.kt)("inlineCode",{parentName:"li"},"en")," with your language's code."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"web/src/utils/timeAgo.ts"),": Add a line like ",(0,r.kt)("inlineCode",{parentName:"li"},"import en from 'javascript-time-ago/locale/en.json';")," to the other ",(0,r.kt)("inlineCode",{parentName:"li"},"import"),"-statements and replace both ",(0,r.kt)("inlineCode",{parentName:"li"},"en"),"s with your language's code. Then, add the line ",(0,r.kt)("inlineCode",{parentName:"li"},"TimeAgo.addDefaultLocale(en);")," to the other lines of them, and replace ",(0,r.kt)("inlineCode",{parentName:"li"},"en")," with your language's code.")),(0,r.kt)("p",null,"Then, the web UI should be available in your language. You should open a pull request to our repository to get your changes into the next release."))}h.isMDXComponent=!0}}]);