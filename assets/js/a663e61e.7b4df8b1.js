"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6234],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(t),g=i,d=u["".concat(p,".").concat(g)]||u[g]||c[g]||r;return t?a.createElement(d,l(l({ref:n},s),{},{components:t})):a.createElement(d,l({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5195:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var a=t(3117),i=t(102),r=(t(7294),t(3905)),l=["components"],o={},p="Matrix pipelines",m={unversionedId:"usage/matrix-pipelines",id:"usage/matrix-pipelines",title:"Matrix pipelines",description:"Woodpecker has integrated support for matrix pipeline. Woodpecker executes a separate pipeline for each combination in the matrix, allowing you to build and test a single commit against multiple configurations.",source:"@site/docs/20-usage/30-matrix-pipelines.md",sourceDirName:"20-usage",slug:"/usage/matrix-pipelines",permalink:"/docs/usage/matrix-pipelines",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/30-matrix-pipelines.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multi pipelines",permalink:"/docs/usage/multi-pipeline"},next:{title:"Advanced YAML syntax",permalink:"/docs/usage/advanced-yaml-syntax"}},s={},c=[{value:"Interpolation",id:"interpolation",level:2},{value:"Examples",id:"examples",level:2},{value:"Example matrix pipeline based on Docker image tag",id:"example-matrix-pipeline-based-on-docker-image-tag",level:3},{value:"Example matrix pipeline based on container image",id:"example-matrix-pipeline-based-on-container-image",level:3},{value:"Example matrix pipeline using multiple platforms",id:"example-matrix-pipeline-using-multiple-platforms",level:3}],u={toc:c};function g(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"matrix-pipelines"},"Matrix pipelines"),(0,r.kt)("p",null,"Woodpecker has integrated support for matrix pipeline. Woodpecker executes a separate pipeline for each combination in the matrix, allowing you to build and test a single commit against multiple configurations."),(0,r.kt)("p",null,"Example matrix definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"matrix:\n  GO_VERSION:\n    - 1.4\n    - 1.3\n  REDIS_VERSION:\n    - 2.6\n    - 2.8\n    - 3.0\n")),(0,r.kt)("p",null,"Example matrix definition containing only specific combinations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"matrix:\n  include:\n    - GO_VERSION: 1.4\n      REDIS_VERSION: 2.8\n    - GO_VERSION: 1.5\n      REDIS_VERSION: 2.8\n    - GO_VERSION: 1.6\n      REDIS_VERSION: 3.0\n")),(0,r.kt)("h2",{id:"interpolation"},"Interpolation"),(0,r.kt)("p",null,"Matrix variables are interpolated in the yaml using the ",(0,r.kt)("inlineCode",{parentName:"p"},"${VARIABLE}")," syntax, before the yaml is parsed. This is an example yaml file before interpolating matrix parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"matrix:\n  GO_VERSION:\n    - 1.4\n    - 1.3\n  DATABASE:\n    - mysql:5.5\n    - mysql:6.5\n    - mariadb:10.1\n\npipeline:\n  build:\n    image: golang:${GO_VERSION}\n    commands:\n      - go get\n      - go build\n      - go test\n\nservices:\n  database:\n    image: ${DATABASE}\n")),(0,r.kt)("p",null,"Example YAML file after injecting the matrix parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  build:\n-   image: golang:${GO_VERSION}\n+   image: golang:1.4\n    commands:\n      - go get\n      - go build\n      - go test\n+   environment:\n+     - GO_VERSION=1.4\n+     - DATABASE=mysql:5.5\n\nservices:\n  database:\n-   image: ${DATABASE}\n+   image: mysql:5.5\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"example-matrix-pipeline-based-on-docker-image-tag"},"Example matrix pipeline based on Docker image tag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"matrix:\n  TAG:\n    - 1.7\n    - 1.8\n    - latest\n\npipeline:\n  build:\n    image: golang:${TAG}\n    commands:\n      - go build\n      - go test\n")),(0,r.kt)("h3",{id:"example-matrix-pipeline-based-on-container-image"},"Example matrix pipeline based on container image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"matrix:\n  IMAGE:\n    - golang:1.7\n    - golang:1.8\n    - golang:latest\n\npipeline:\n  build:\n    image: ${IMAGE}\n    commands:\n      - go build\n      - go test\n")),(0,r.kt)("h3",{id:"example-matrix-pipeline-using-multiple-platforms"},"Example matrix pipeline using multiple platforms"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'matrix:\n  platform:\n    - linux/amd64\n    - linux/arm64\n\nplatform: ${platform}\n\npipeline:\n  test:\n    image: alpine\n    commands:\n      - echo "I am running on ${platform}"\n\n  test-arm-only:\n    image: alpine\n    commands:\n      - echo "I am running on ${platform}"\n      - echo "Arm is cool!"\n    when:\n      platform: linux/arm*\n')))}g.isMDXComponent=!0}}]);