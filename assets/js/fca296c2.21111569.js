"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4231],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?o.createElement(k,a(a({ref:t},s),{},{components:r})):o.createElement(k,a({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6847:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=r(3117),n=r(102),i=(r(7294),r(3905)),a=["components"],l={},c="Awesome Woodpecker",p={unversionedId:"awesome",id:"awesome",title:"Awesome Woodpecker",description:"A curated list of awesome things related to Woodpecker-CI.",source:"@site/docs/92-awesome.md",sourceDirName:".",slug:"/awesome",permalink:"/docs/awesome",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/92-awesome.md",tags:[],version:"current",sidebarPosition:92,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Migrations",permalink:"/docs/migrations"},next:{title:"Getting started",permalink:"/docs/development/getting-started"}},s={},u=[{value:"Official Resources",id:"official-resources",level:2},{value:"Projects using Woodpecker",id:"projects-using-woodpecker",level:2},{value:"Tools",id:"tools",level:2},{value:"Templates",id:"templates",level:2},{value:"Blogs, guides, videos",id:"blogs-guides-videos",level:2},{value:"Plugins",id:"plugins",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"awesome-woodpecker"},"Awesome Woodpecker"),(0,i.kt)("p",null,"A curated list of awesome things related to Woodpecker-CI."),(0,i.kt)("p",null,"If you have some missing resources, please feel free to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/92-awesome.md"},"open a pull-request")," and add them."),(0,i.kt)("h2",{id:"official-resources"},"Official Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/woodpecker-ci/woodpecker/tree/master/.woodpecker"},"Woodpecker CI pipeline configs")," - Complex setup containing different kind of pipelines",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/woodpecker-ci/woodpecker/blob/master/.woodpecker/test.yml"},"Golang tests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/woodpecker-ci/woodpecker/blob/master/.woodpecker/web.yml"},"Typescript, eslint & Vue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/woodpecker-ci/woodpecker/blob/master/.woodpecker/docs.yml"},"Docusaurus & publishing to Github Pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/woodpecker-ci/woodpecker/blob/master/.woodpecker/docker.yml"},"Docker container building")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/woodpecker-ci/woodpecker/blob/master/.woodpecker/helm.yml"},"Helm chart linting & releasing"))))),(0,i.kt)("h2",{id:"projects-using-woodpecker"},"Projects using Woodpecker"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/woodpecker-ci/woodpecker/tree/master/.woodpecker"},"Woodpecker-CI")," itself"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/woodpecker-ci?q=plugin&type=all"},"All official plugins"))),(0,i.kt)("h2",{id:"tools"},"Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://codeberg.org/lafriks/woodpecker-pipeline-transform"},"Convert Drone CI pipelines to Woodpecker CI"))),(0,i.kt)("h2",{id:"templates"},"Templates"),(0,i.kt)("h2",{id:"blogs-guides-videos"},"Blogs, guides, videos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://containers.fan/posts/setup-gitea-with-woodpecker-ci/"},"Tutorial about setup of Woodpecker-CI and Gitea"))),(0,i.kt)("h2",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"We have a separate ",(0,i.kt)("a",{parentName:"p",href:"/plugins"},"index")," for plugins."))}m.isMDXComponent=!0}}]);