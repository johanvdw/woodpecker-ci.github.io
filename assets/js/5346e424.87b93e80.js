"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3685],{49613:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var n=o(59496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(o),k=r,O=s["".concat(l,".").concat(k)]||s[k]||u[k]||i;return o?n.createElement(O,a(a({ref:t},p),{},{components:o})):n.createElement(O,a({ref:t},p))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},14141:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>g,frontMatter:()=>s,metadata:()=>O,toc:()=>m});var n=o(49613),r=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&p(e,o,t[o]);if(c)for(var o of c(t))d.call(t,o)&&p(e,o,t[o]);return e};const s={},k="Coding",O={unversionedId:"administration/vcs/coding",id:"version-0.15/administration/vcs/coding",title:"Coding",description:"Configuration",source:"@site/versioned_docs/version-0.15/30-administration/11-vcs/80-coding.md",sourceDirName:"30-administration/11-vcs",slug:"/administration/vcs/coding",permalink:"/docs/administration/vcs/coding",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/30-administration/11-vcs/80-coding.md",tags:[],version:"0.15",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gogs",permalink:"/docs/administration/vcs/gogs"},next:{title:"Agent configuration",permalink:"/docs/administration/agent-config"}},f={},m=[{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_CODING</code>",id:"woodpecker_coding",level:3},{value:"<code>WOODPECKER_CODING_URL</code>",id:"woodpecker_coding_url",level:3},{value:"<code>WOODPECKER_CODING_CLIENT</code>",id:"woodpecker_coding_client",level:3},{value:"<code>WOODPECKER_CODING_SECRET</code>",id:"woodpecker_coding_secret",level:3},{value:"<code>WOODPECKER_CODING_SCOPE</code>",id:"woodpecker_coding_scope",level:3},{value:"<code>WOODPECKER_CODING_GIT_MACHINE</code>",id:"woodpecker_coding_git_machine",level:3},{value:"<code>WOODPECKER_CODING_GIT_USERNAME</code>",id:"woodpecker_coding_git_username",level:3},{value:"<code>WOODPECKER_CODING_GIT_PASSWORD</code>",id:"woodpecker_coding_git_password",level:3},{value:"<code>WOODPECKER_CODING_SKIP_VERIFY</code>",id:"woodpecker_coding_skip_verify",level:3}],_={toc:m};function g(e){var t,o=e,{components:r}=o,p=((e,t)=>{var o={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(o[n]=e[n]);return o})(o,["components"]);return(0,n.kt)("wrapper",(t=u(u({},_),p),i(t,a({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"coding"}),"Coding"),(0,n.kt)("h2",u({},{id:"configuration"}),"Configuration"),(0,n.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,n.kt)("h3",u({},{id:"woodpecker_coding"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Enables the Coding driver."),(0,n.kt)("h3",u({},{id:"woodpecker_coding_url"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_URL")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://coding.net"))),(0,n.kt)("p",null,"Configures the Coding server address."),(0,n.kt)("h3",u({},{id:"woodpecker_coding_client"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_CLIENT")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures the Coding OAuth client id. This is used to authorize access."),(0,n.kt)("h3",u({},{id:"woodpecker_coding_secret"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_SECRET")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures the Coding OAuth client secret. This is used to authorize access."),(0,n.kt)("h3",u({},{id:"woodpecker_coding_scope"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_SCOPE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"user, project, project:depot"))),(0,n.kt)("p",null,"Comma-separated list of OAuth scopes."),(0,n.kt)("h3",u({},{id:"woodpecker_coding_git_machine"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_MACHINE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"git.coding.net"))),(0,n.kt)("p",null,"TODO"),(0,n.kt)("h3",u({},{id:"woodpecker_coding_git_username"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_USERNAME")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"This username is used to authenticate and clone all private repositories."),(0,n.kt)("h3",u({},{id:"woodpecker_coding_git_password"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_PASSWORD")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"The password is used to authenticate and clone all private repositories."),(0,n.kt)("h3",u({},{id:"woodpecker_coding_skip_verify"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_SKIP_VERIFY")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Configure if SSL verification should be skipped."))}g.isMDXComponent=!0}}]);