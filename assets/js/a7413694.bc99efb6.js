"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3682],{49613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},60784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>d,default:()=>O,frontMatter:()=>u,metadata:()=>g,toc:()=>f});var r=t(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&c(e,t,n[t]);return e};const u={},d="Matrix builds",g={unversionedId:"usage/matrix-builds",id:"version-0.15/usage/matrix-builds",title:"Matrix builds",description:"Woodpecker has integrated support for matrix builds. Woodpecker executes a separate build task for each combination in the matrix, allowing you to build and test a single commit against multiple configurations.",source:"@site/versioned_docs/version-0.15/20-usage/30-matrix-builds.md",sourceDirName:"20-usage",slug:"/usage/matrix-builds",permalink:"/docs/usage/matrix-builds",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/20-usage/30-matrix-builds.md",tags:[],version:"0.15",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multi pipelines",permalink:"/docs/usage/multi-pipeline"},next:{title:"Secrets",permalink:"/docs/usage/secrets"}},b={},f=[{value:"Interpolation",id:"interpolation",level:2},{value:"Examples",id:"examples",level:2}],y={toc:f};function O(e){var n,t=e,{components:a}=t,c=((e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=m(m({},y),c),i(n,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"matrix-builds"}),"Matrix builds"),(0,r.kt)("p",null,"Woodpecker has integrated support for matrix builds. Woodpecker executes a separate build task for each combination in the matrix, allowing you to build and test a single commit against multiple configurations."),(0,r.kt)("p",null,"Example matrix definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"matrix:\n  GO_VERSION:\n    - 1.4\n    - 1.3\n  REDIS_VERSION:\n    - 2.6\n    - 2.8\n    - 3.0\n")),(0,r.kt)("p",null,"Example matrix definition containing only specific combinations:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"matrix:\n  include:\n    - GO_VERSION: 1.4\n      REDIS_VERSION: 2.8\n    - GO_VERSION: 1.5\n      REDIS_VERSION: 2.8\n    - GO_VERSION: 1.6\n      REDIS_VERSION: 3.0\n")),(0,r.kt)("h2",m({},{id:"interpolation"}),"Interpolation"),(0,r.kt)("p",null,"Matrix variables are interpolated in the yaml using the ",(0,r.kt)("inlineCode",{parentName:"p"},"${VARIABLE}")," syntax, before the yaml is parsed. This is an example yaml file before interpolating matrix parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  build:\n    image: golang:${GO_VERSION}\n    commands:\n      - go get\n      - go build\n      - go test\n\nservices:\n  database:\n    image: ${DATABASE}\n\nmatrix:\n  GO_VERSION:\n    - 1.4\n    - 1.3\n  DATABASE:\n    - mysql:5.5\n    - mysql:6.5\n    - mariadb:10.1\n")),(0,r.kt)("p",null,"Example Yaml file after injecting the matrix parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  build:\n-   image: golang:${GO_VERSION}\n+   image: golang:1.4\n    commands:\n      - go get\n      - go build\n      - go test\n+   environment:\n+     - GO_VERSION=1.4\n+     - DATABASE=mysql:5.5\n\nservices:\n  database:\n-   image: ${DATABASE}\n+   image: mysql:5.5\n")),(0,r.kt)("h2",m({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Example matrix build based on Docker image tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  build:\n    image: golang:${TAG}\n    commands:\n      - go build\n      - go test\n\nmatrix:\n  TAG:\n    - 1.7\n    - 1.8\n    - latest\n")),(0,r.kt)("p",null,"Example matrix build based on Docker image:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  build:\n    image: ${IMAGE}\n    commands:\n      - go build\n      - go test\n\nmatrix:\n  IMAGE:\n    - golang:1.7\n    - golang:1.8\n    - golang:latest\n")))}O.isMDXComponent=!0}}]);