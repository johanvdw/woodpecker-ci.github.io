"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3685],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(n),k=i,f=s["".concat(l,".").concat(k)]||s[k]||p[k]||r;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4262:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var o=n(3117),i=n(102),r=(n(7294),n(3905)),a=["components"],c={},l="Coding",d={unversionedId:"administration/vcs/coding",id:"version-0.15/administration/vcs/coding",title:"Coding",description:"Configuration",source:"@site/versioned_docs/version-0.15/30-administration/11-vcs/80-coding.md",sourceDirName:"30-administration/11-vcs",slug:"/administration/vcs/coding",permalink:"/docs/administration/vcs/coding",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/30-administration/11-vcs/80-coding.md",tags:[],version:"0.15",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gogs",permalink:"/docs/administration/vcs/gogs"},next:{title:"Agent configuration",permalink:"/docs/administration/agent-config"}},u={},p=[{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_CODING</code>",id:"woodpecker_coding",level:3},{value:"<code>WOODPECKER_CODING_URL</code>",id:"woodpecker_coding_url",level:3},{value:"<code>WOODPECKER_CODING_CLIENT</code>",id:"woodpecker_coding_client",level:3},{value:"<code>WOODPECKER_CODING_SECRET</code>",id:"woodpecker_coding_secret",level:3},{value:"<code>WOODPECKER_CODING_SCOPE</code>",id:"woodpecker_coding_scope",level:3},{value:"<code>WOODPECKER_CODING_GIT_MACHINE</code>",id:"woodpecker_coding_git_machine",level:3},{value:"<code>WOODPECKER_CODING_GIT_USERNAME</code>",id:"woodpecker_coding_git_username",level:3},{value:"<code>WOODPECKER_CODING_GIT_PASSWORD</code>",id:"woodpecker_coding_git_password",level:3},{value:"<code>WOODPECKER_CODING_SKIP_VERIFY</code>",id:"woodpecker_coding_skip_verify",level:3}],s={toc:p};function k(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"coding"},"Coding"),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,r.kt)("h3",{id:"woodpecker_coding"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Enables the Coding driver."),(0,r.kt)("h3",{id:"woodpecker_coding_url"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_URL")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://coding.net"))),(0,r.kt)("p",null,"Configures the Coding server address."),(0,r.kt)("h3",{id:"woodpecker_coding_client"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_CLIENT")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Configures the Coding OAuth client id. This is used to authorize access."),(0,r.kt)("h3",{id:"woodpecker_coding_secret"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_SECRET")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Configures the Coding OAuth client secret. This is used to authorize access."),(0,r.kt)("h3",{id:"woodpecker_coding_scope"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_SCOPE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"user, project, project:depot"))),(0,r.kt)("p",null,"Comma-separated list of OAuth scopes."),(0,r.kt)("h3",{id:"woodpecker_coding_git_machine"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_MACHINE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"git.coding.net"))),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h3",{id:"woodpecker_coding_git_username"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_USERNAME")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"This username is used to authenticate and clone all private repositories."),(0,r.kt)("h3",{id:"woodpecker_coding_git_password"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_PASSWORD")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"The password is used to authenticate and clone all private repositories."),(0,r.kt)("h3",{id:"woodpecker_coding_skip_verify"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_SKIP_VERIFY")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Configure if SSL verification should be skipped."))}k.isMDXComponent=!0}}]);