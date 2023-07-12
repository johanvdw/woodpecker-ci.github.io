"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1236],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),f=a,b=l["".concat(c,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},66324:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>h,frontMatter:()=>l,metadata:()=>b,toc:()=>m});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e};const l={},f="Status Badges",b={unversionedId:"usage/badges",id:"usage/badges",title:"Status Badges",description:"Woodpecker has integrated support for repository status badges. These badges can be added to your website or project readme file to display the status of your code.",source:"@site/docs/20-usage/80-badges.md",sourceDirName:"20-usage",slug:"/usage/badges",permalink:"/docs/next/usage/badges",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/80-badges.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Project settings",permalink:"/docs/next/usage/project-settings"},next:{title:"Setup",permalink:"/docs/next/administration/setup"}},g={},m=[{value:"Badge endpoint",id:"badge-endpoint",level:2}],y={toc:m};function h(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},y),u),o(t,s({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"status-badges"}),"Status Badges"),(0,n.kt)("p",null,"Woodpecker has integrated support for repository status badges. These badges can be added to your website or project readme file to display the status of your code."),(0,n.kt)("h2",d({},{id:"badge-endpoint"}),"Badge endpoint"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-text"}),"<scheme>://<hostname>/api/badges/<repo-id>/status.svg\n")),(0,n.kt)("p",null,"The status badge displays the status for the latest build to your default branch (e.g. master). You can customize the branch by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"branch")," query parameter."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"-<scheme>://<hostname>/api/badges/<repo-id>/status.svg\n+<scheme>://<hostname>/api/badges/<repo-id>/status.svg?branch=<branch>\n")),(0,n.kt)("p",null,"Please note status badges do not include pull request results, since the status of a pull request does not provide an accurate representation of your repository state."))}h.isMDXComponent=!0}}]);