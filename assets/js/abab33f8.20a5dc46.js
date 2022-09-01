"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4948],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(o),f=r,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return o?n.createElement(g,a(a({ref:t},u),{},{components:o})):n.createElement(g,a({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2176:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=o(3117),r=o(102),i=(o(7294),o(3905)),a=["components"],l={},c="Gogs",s={unversionedId:"administration/forges/gogs",id:"administration/forges/gogs",title:"Gogs",description:"Configuration",source:"@site/docs/30-administration/11-forges/70-gogs.md",sourceDirName:"30-administration/11-forges",slug:"/administration/forges/gogs",permalink:"/docs/next/administration/forges/gogs",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/11-forges/70-gogs.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bitbucket Server",permalink:"/docs/next/administration/forges/bitbucket_server"},next:{title:"Coding",permalink:"/docs/next/administration/forges/coding"}},u={},p=[{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_GOGS</code>",id:"woodpecker_gogs",level:3},{value:"<code>WOODPECKER_GOGS_URL</code>",id:"woodpecker_gogs_url",level:3},{value:"<code>WOODPECKER_GOGS_GIT_USERNAME</code>",id:"woodpecker_gogs_git_username",level:3},{value:"<code>WOODPECKER_GOGS_GIT_USERNAME_FILE</code>",id:"woodpecker_gogs_git_username_file",level:3},{value:"<code>WOODPECKER_GOGS_GIT_PASSWORD</code>",id:"woodpecker_gogs_git_password",level:3},{value:"<code>WOODPECKER_GOGS_GIT_PASSWORD_FILE</code>",id:"woodpecker_gogs_git_password_file",level:3},{value:"<code>WOODPECKER_GOGS_PRIVATE_MODE</code>",id:"woodpecker_gogs_private_mode",level:3},{value:"<code>WOODPECKER_GOGS_SKIP_VERIFY</code>",id:"woodpecker_gogs_skip_verify",level:3}],d={toc:p};function f(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gogs"},"Gogs"),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,i.kt)("h3",{id:"woodpecker_gogs"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"))),(0,i.kt)("p",null,"Enables the Gogs driver."),(0,i.kt)("h3",{id:"woodpecker_gogs_url"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_URL")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://try.gogs.io"))),(0,i.kt)("p",null,"Configures the Gogs server address."),(0,i.kt)("h3",{id:"woodpecker_gogs_git_username"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_GIT_USERNAME")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,i.kt)("p",null,"This username is used to authenticate and clone all private repositories."),(0,i.kt)("h3",{id:"woodpecker_gogs_git_username_file"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_GIT_USERNAME_FILE")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,i.kt)("p",null,"Read the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GOGS_GIT_USERNAME")," from the specified filepath"),(0,i.kt)("h3",{id:"woodpecker_gogs_git_password"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_GIT_PASSWORD")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,i.kt)("p",null,"The password is used to authenticate and clone all private repositories."),(0,i.kt)("h3",{id:"woodpecker_gogs_git_password_file"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_GIT_PASSWORD_FILE")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,i.kt)("p",null,"Read the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GOGS_GIT_PASSWORD")," from the specified filepath"),(0,i.kt)("h3",{id:"woodpecker_gogs_private_mode"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_PRIVATE_MODE")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"))),(0,i.kt)("p",null,"TODO"),(0,i.kt)("h3",{id:"woodpecker_gogs_skip_verify"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_SKIP_VERIFY")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"))),(0,i.kt)("p",null,"Configure if SSL verification should be skipped."))}f.isMDXComponent=!0}}]);