"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8981],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(r),f=c,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:c,i[1]=a;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3559:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s}});var n=r(3117),c=r(102),o=(r(7294),r(3905)),i=["components"],a={},u="Architecture",p={unversionedId:"development/architecture",id:"version-0.15/development/architecture",title:"Architecture",description:"Package architecture",source:"@site/versioned_docs/version-0.15/92-development/05-architecture.md",sourceDirName:"92-development",slug:"/development/architecture",permalink:"/docs/development/architecture",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/92-development/05-architecture.md",tags:[],version:"0.15",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/docs/development/docs"},next:{title:"Guides",permalink:"/docs/development/guides"}},l={},s=[{value:"Package architecture",id:"package-architecture",level:2},{value:"System architecture",id:"system-architecture",level:2}],d={toc:s};function f(e){var t=e.components,a=(0,c.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("h2",{id:"package-architecture"},"Package architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Woodpecker architecture",src:r(823).Z,width:"1530",height:"1110"})),(0,o.kt)("h2",{id:"system-architecture"},"System architecture"),(0,o.kt)("p",null,"TODO"))}f.isMDXComponent=!0},823:function(e,t,r){t.Z=r.p+"assets/images/woodpecker-architecture-3929270c89a1fbf3a72f17aff8bd23e5.png"}}]);