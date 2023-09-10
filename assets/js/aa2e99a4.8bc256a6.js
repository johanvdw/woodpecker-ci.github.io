"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6066],{17942:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(50959);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return r?o.createElement(f,a(a({ref:t},u),{},{components:r})):o.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var o=r(17942),n=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>s(e,a(t)),d=(e,t)=>{var r={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&l.call(e,o)&&(r[o]=e[o]);return r};const f={},v="Volumes",y={unversionedId:"usage/volumes",id:"version-1.0/usage/volumes",title:"Volumes",description:"Woodpecker gives the ability to define Docker volumes in the YAML. You can use this parameter to mount files or folders on the host machine into your containers.",source:"@site/versioned_docs/version-1.0/20-usage/70-volumes.md",sourceDirName:"20-usage",slug:"/usage/volumes",permalink:"/docs/usage/volumes",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/20-usage/70-volumes.md",tags:[],version:"1.0",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Services",permalink:"/docs/usage/services"},next:{title:"Project settings",permalink:"/docs/usage/project-settings"}},b={},g=[],h={toc:g},k="wrapper";function O(e){var t=e,{components:r}=t,n=d(t,["components"]);return(0,o.kt)(k,m(p(p({},h),n),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",p({},{id:"volumes"}),"Volumes"),(0,o.kt)("p",null,"Woodpecker gives the ability to define Docker volumes in the YAML. You can use this parameter to mount files or folders on the host machine into your containers."),(0,o.kt)("admonition",p({},{type:"note"}),(0,o.kt)("p",{parentName:"admonition"},"Volumes are only available to trusted repositories and for security reasons should only be used in private environments. See ",(0,o.kt)("a",p({parentName:"p"},{href:"/docs/usage/project-settings#trusted"}),"project settings")," to enable trusted mode.")),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"steps:\n  build:\n    image: docker\n    commands:\n      - docker build --rm -t octocat/hello-world .\n      - docker run --rm octocat/hello-world --test\n      - docker push octocat/hello-world\n      - docker rmi octocat/hello-world\n    volumes:\n+     - /var/run/docker.sock:/var/run/docker.sock\n")),(0,o.kt)("p",null,"Please note that Woodpecker mounts volumes on the host machine. This means you must use absolute paths when you configure volumes. Attempting to use relative paths will result in an error."),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"- volumes: [ ./certs:/etc/ssl/certs ]\n+ volumes: [ /etc/ssl/certs:/etc/ssl/certs ]\n")))}O.isMDXComponent=!0}}]);