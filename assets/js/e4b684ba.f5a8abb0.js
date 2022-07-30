"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1284],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4192:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),i=["components"],s={},l="Advanced YAML syntax",c={unversionedId:"usage/advanced-yaml-syntax",id:"usage/advanced-yaml-syntax",title:"Advanced YAML syntax",description:"Anchors & aliases",source:"@site/docs/20-usage/35-advanced-yaml-syntax.md",sourceDirName:"20-usage",slug:"/usage/advanced-yaml-syntax",permalink:"/docs/usage/advanced-yaml-syntax",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/35-advanced-yaml-syntax.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Matrix pipelines",permalink:"/docs/usage/matrix-pipelines"},next:{title:"Secrets",permalink:"/docs/usage/secrets"}},u={},p=[{value:"Anchors &amp; aliases",id:"anchors--aliases",level:2},{value:"Example of YAML override and extension",id:"example-of-yaml-override-and-extension",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-yaml-syntax"},"Advanced YAML syntax"),(0,o.kt)("h2",{id:"anchors--aliases"},"Anchors & aliases"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2.2/#3222-anchors-and-aliases"},"YAML anchors & aliases")," as variables in your pipeline config."),(0,o.kt)("p",null,"To convert this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"pipeline:\n  test:\n    image: golang:1.18\n    commands: go test ./...\n  build:\n    image: golang:1.18\n    commands: build\n")),(0,o.kt)("p",null,"Just add a new section called ",(0,o.kt)("strong",{parentName:"p"},"variables")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"+variables:\n+  - &golang_image 'golang:1.18'\n\n pipeline:\n   test:\n-    image: golang:1.18\n+    image: *golang_image\n     commands: go test ./...\n   build:\n-    image: golang:1.18\n+    image: *golang_image\n     commands: build\n")),(0,o.kt)("h2",{id:"example-of-yaml-override-and-extension"},"Example of YAML override and extension"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"variables: \n  &some-plugin-settings\n      settings:\n        target: dist\n        recursive: false\n        try: true\n\npipelines:\n  develop:\n    name: Build and test\n    image: some-plugin\n    settings: *some-plugin-settings\n    when:\n      branch: develop\n\n  main\n    name: Build and test\n    image: some-plugin\n    settings:\n      <<: *some-plugin-settings\n      try: false # replacing original value from `some-plugin-settings`\n      ongoing: false # adding a new value to `some-plugin-settings`\n    when:\n      branch: main\n")))}m.isMDXComponent=!0}}]);