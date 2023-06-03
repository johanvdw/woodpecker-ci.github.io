"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[667],{9613:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var r=o(9496);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(o),g=n,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||i;return o?r.createElement(m,a(a({ref:t},c),{},{components:o})):r.createElement(m,a({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5104:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var r=o(9613),n=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,o)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&c(e,o,t[o]);if(l)for(var o of l(t))s.call(t,o)&&c(e,o,t[o]);return e};const d={},g="Getting started",m={unversionedId:"usage/intro",id:"usage/intro",title:"Getting started",description:"Repository Activation",source:"@site/docs/20-usage/10-intro.md",sourceDirName:"20-usage",slug:"/usage/intro",permalink:"/docs/next/usage/intro",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/10-intro.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to Woodpecker",permalink:"/docs/next/intro"},next:{title:"Terminology",permalink:"/docs/next/usage/terminology"}},y={},f=[{value:"Repository Activation",id:"repository-activation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Execution",id:"execution",level:2}],b={toc:f};function h(e){var t,n=e,{components:c}=n,d=((e,t)=>{var o={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(o[r]=e[r]);return o})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},b),d),i(t,a({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"getting-started"}),"Getting started"),(0,r.kt)("h2",u({},{id:"repository-activation"}),"Repository Activation"),(0,r.kt)("p",null,"To activate your project navigate to your account settings. You will see a list of repositories which can be activated with a simple toggle. When you activate your repository, Woodpecker automatically adds webhooks to your forge (e.g. GitHub)."),(0,r.kt)("p",null,"Webhooks are used to trigger pipeline executions. When you push code to your repository, open a pull request, or create a tag, your forge will automatically send a webhook to Woodpecker which will in turn trigger pipeline execution."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"repository list",src:o(9145).Z,width:"1128",height:"745"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Required Permissions"),(0,r.kt)("p",{parentName:"blockquote"},"The user who enables a repo in Woodpecker must have ",(0,r.kt)("inlineCode",{parentName:"p"},"Admin")," rights on that repo, so that Woodpecker can add the webhook."),(0,r.kt)("p",{parentName:"blockquote"},"Note that manually creating webhooks yourself is not possible. This is because webhooks are signed using a per-repository secret key which is not exposed to end users.")),(0,r.kt)("h1",u({},{id:"webhooks"}),"Webhooks"),(0,r.kt)("p",null,"When you activate your repository Woodpecker automatically add webhooks to your forge (e.g. GitHub). There is no manual configuration required."),(0,r.kt)("p",null,"Webhooks are used to trigger pipeline executions. When you push code to your repository, open a pull request, or create a tag, your forge will automatically send a webhook to Woodpecker which will in turn trigger pipeline execution."),(0,r.kt)("h2",u({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"To configure your pipeline you should place a ",(0,r.kt)("inlineCode",{parentName:"p"},".woodpecker.yml")," file in the root of your repository. The .woodpecker.yml file is used to define your pipeline steps. It is a superset of the widely used docker-compose file format."),(0,r.kt)("admonition",u({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"We support most of YAML 1.2, but preserve some behavior from 1.1 for backward compatibility.\nRead more at: ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/go-yaml/yaml/tree/v3"}),"https://github.com/go-yaml/yaml"))),(0,r.kt)("p",null,"Example pipeline configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  build:\n    image: golang\n    commands:\n      - go get\n      - go build\n      - go test\n\nservices:\n  postgres:\n    image: postgres:9.4.5\n    environment:\n      - POSTGRES_USER=myapp\n")),(0,r.kt)("p",null,"Example pipeline configuration with multiple, serial steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  backend:\n    image: golang\n    commands:\n      - go get\n      - go build\n      - go test\n\n  frontend:\n    image: node:6\n    commands:\n      - npm install\n      - npm test\n\n  notify:\n    image: plugins/slack\n    channel: developers\n    username: woodpecker\n")),(0,r.kt)("h2",u({},{id:"execution"}),"Execution"),(0,r.kt)("p",null,"To trigger your first pipeline execution you can push code to your repository, open a pull request, or push a tag. Any of these events triggers a webhook from your forge and execute your pipeline."))}h.isMDXComponent=!0},9145:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/repo-list-41c8340b0eb48a098ad2fbfcd820adc9.png"}}]);