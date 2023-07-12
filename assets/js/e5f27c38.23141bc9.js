"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7449],{49613:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>y});var r=o(59496);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),y=n,g=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return o?r.createElement(g,a(a({ref:t},c),{},{components:o})):r.createElement(g,a({ref:t},c))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},46900:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>g,toc:()=>f});var r=o(49613),n=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,o)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&c(e,o,t[o]);if(s)for(var o of s(t))p.call(t,o)&&c(e,o,t[o]);return e};const d={},y="Getting started",g={unversionedId:"usage/intro",id:"version-0.15/usage/intro",title:"Getting started",description:"Repository Activation",source:"@site/versioned_docs/version-0.15/20-usage/10-intro.md",sourceDirName:"20-usage",slug:"/usage/intro",permalink:"/docs/usage/intro",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/20-usage/10-intro.md",tags:[],version:"0.15",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to Woodpecker",permalink:"/docs/intro"},next:{title:"Pipeline syntax",permalink:"/docs/usage/pipeline-syntax"}},m={},f=[{value:"Repository Activation",id:"repository-activation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Execution",id:"execution",level:2}],k={toc:f};function h(e){var t,n=e,{components:c}=n,d=((e,t)=>{var o={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(o[r]=e[r]);return o})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},k),d),i(t,a({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"getting-started"}),"Getting started"),(0,r.kt)("h2",u({},{id:"repository-activation"}),"Repository Activation"),(0,r.kt)("p",null,"To activate your project navigate to your account settings. You will see a list of repositories which can be activated with a simple toggle. When you activate your repository, Woodpecker automatically adds webhooks to your version control system (e.g. GitHub)."),(0,r.kt)("p",null,"Webhooks are used to trigger pipeline executions. When you push code to your repository, open a pull request, or create a tag, your version control system will automatically send a webhook to Woodpecker which will in turn trigger pipeline execution."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"repository list",src:o(67753).Z,width:"1128",height:"745"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Required Permissions"),(0,r.kt)("p",{parentName:"blockquote"},"The user who enables a repo in Woodpecker must have ",(0,r.kt)("inlineCode",{parentName:"p"},"Admin")," rights on that repo, so that Woodpecker can add the webhook."),(0,r.kt)("p",{parentName:"blockquote"},"Note that manually creating webhooks yourself is not possible. This is because webhooks are signed using a per-repository secret key which is not exposed to end users.")),(0,r.kt)("h1",u({},{id:"webhooks"}),"Webhooks"),(0,r.kt)("p",null,"When you activate your repository Woodpecker automatically add webhooks to your version control system (e.g. GitHub). There is no manual configuration required."),(0,r.kt)("p",null,"Webhooks are used to trigger pipeline executions. When you push code to your repository, open a pull request, or create a tag, your version control system will automatically send a webhook to Woodpecker which will in turn trigger pipeline execution."),(0,r.kt)("h2",u({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"To configure your pipeline you should place a ",(0,r.kt)("inlineCode",{parentName:"p"},".woodpecker.yml")," file in the root of your repository. The .woodpecker.yml file is used to define your pipeline steps. It is a superset of the widely used docker-compose file format."),(0,r.kt)("admonition",u({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Currently, only YAML 1.1 syntax is supported for pipeline configuration files. YAML 1.2 support is ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/woodpecker-ci/woodpecker/issues/517"}),"planned for the future"),"!")),(0,r.kt)("p",null,"Example pipeline configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  build:\n    image: golang\n    commands:\n      - go get\n      - go build\n      - go test\n\nservices:\n  postgres:\n    image: postgres:9.4.5\n    environment:\n      - POSTGRES_USER=myapp\n")),(0,r.kt)("p",null,"Example pipeline configuration with multiple, serial steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  backend:\n    image: golang\n    commands:\n      - go get\n      - go build\n      - go test\n\n  frontend:\n    image: node:6\n    commands:\n      - npm install\n      - npm test\n\n  notify:\n    image: plugins/slack\n    channel: developers\n    username: woodpecker\n")),(0,r.kt)("h2",u({},{id:"execution"}),"Execution"),(0,r.kt)("p",null,"To trigger your first pipeline execution you can push code to your repository, open a pull request, or push a tag. Any of these events triggers a webhook from your version control system and execute your pipeline."))}h.isMDXComponent=!0},67753:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/repo-list-41c8340b0eb48a098ad2fbfcd820adc9.png"}}]);