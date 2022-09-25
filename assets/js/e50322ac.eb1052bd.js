"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6307],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return _}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=d(o),_=r,k=s["".concat(c,".").concat(_)]||s[_]||u[_]||i;return o?n.createElement(k,l(l({ref:t},p),{},{components:o})):n.createElement(k,l({ref:t},p))}));function _(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var d=2;d<i;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},9522:function(e,t,o){o.r(t),o.d(t,{assets:function(){return f},contentTitle:function(){return _},default:function(){return E},frontMatter:function(){return s},metadata:function(){return k},toc:function(){return O}});var n=o(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))c.call(t,o)&&p(e,o,t[o]);if(a)for(var o of a(t))d.call(t,o)&&p(e,o,t[o]);return e};const s={},_="Coding",k={unversionedId:"administration/forges/coding",id:"administration/forges/coding",title:"Coding",description:"Configuration",source:"@site/docs/30-administration/11-forges/80-coding.md",sourceDirName:"30-administration/11-forges",slug:"/administration/forges/coding",permalink:"/docs/next/administration/forges/coding",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/11-forges/80-coding.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gogs",permalink:"/docs/next/administration/forges/gogs"},next:{title:"Agent configuration",permalink:"/docs/next/administration/agent-config"}},f={},O=[{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_CODING</code>",id:"woodpecker_coding",level:3},{value:"<code>WOODPECKER_CODING_URL</code>",id:"woodpecker_coding_url",level:3},{value:"<code>WOODPECKER_CODING_CLIENT</code>",id:"woodpecker_coding_client",level:3},{value:"<code>WOODPECKER_CODING_CLIENT_FILE</code>",id:"woodpecker_coding_client_file",level:3},{value:"<code>WOODPECKER_CODING_SECRET</code>",id:"woodpecker_coding_secret",level:3},{value:"<code>WOODPECKER_CODING_SECRET_FILE</code>",id:"woodpecker_coding_secret_file",level:3},{value:"<code>WOODPECKER_CODING_SCOPE</code>",id:"woodpecker_coding_scope",level:3},{value:"<code>WOODPECKER_CODING_GIT_MACHINE</code>",id:"woodpecker_coding_git_machine",level:3},{value:"<code>WOODPECKER_CODING_GIT_USERNAME</code>",id:"woodpecker_coding_git_username",level:3},{value:"<code>WOODPECKER_CODING_GIT_USERNAME_FILE</code>",id:"woodpecker_coding_git_username_file",level:3},{value:"<code>WOODPECKER_CODING_GIT_PASSWORD</code>",id:"woodpecker_coding_git_password",level:3},{value:"<code>WOODPECKER_CODING_GIT_PASSWORD_FILE</code>",id:"woodpecker_coding_git_password_file",level:3},{value:"<code>WOODPECKER_CODING_SKIP_VERIFY</code>",id:"woodpecker_coding_skip_verify",level:3}],C={toc:O};function E(e){var t,o=e,{components:r}=o,p=((e,t)=>{var o={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&d.call(e,n)&&(o[n]=e[n]);return o})(o,["components"]);return(0,n.kt)("wrapper",(t=u(u({},C),p),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"coding"}),"Coding"),(0,n.kt)("h2",u({},{id:"configuration"}),"Configuration"),(0,n.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,n.kt)("h3",u({},{id:"woodpecker_coding"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Enables the Coding driver."),(0,n.kt)("h3",u({},{id:"woodpecker_coding_url"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_URL")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://coding.net"))),(0,n.kt)("p",null,"Configures the Coding server address."),(0,n.kt)("h3",u({},{id:"woodpecker_coding_client"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_CLIENT")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures the Coding OAuth client id. This is used to authorize access."),(0,n.kt)("h3",u({},{id:"woodpecker_coding_client_file"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_CLIENT_FILE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Read the value for ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_CODING_CLIENT")," from the specified filepath"),(0,n.kt)("h3",u({},{id:"woodpecker_coding_secret"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_SECRET")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures the Coding OAuth client secret. This is used to authorize access."),(0,n.kt)("h3",u({},{id:"woodpecker_coding_secret_file"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_SECRET_FILE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Read the value for ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_CODING_SECRET")," from the specified filepath"),(0,n.kt)("h3",u({},{id:"woodpecker_coding_scope"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_SCOPE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"user, project, project:depot"))),(0,n.kt)("p",null,"Comma-separated list of OAuth scopes."),(0,n.kt)("h3",u({},{id:"woodpecker_coding_git_machine"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_MACHINE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"git.coding.net"))),(0,n.kt)("p",null,"TODO"),(0,n.kt)("h3",u({},{id:"woodpecker_coding_git_username"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_USERNAME")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"This username is used to authenticate and clone all private repositories."),(0,n.kt)("h3",u({},{id:"woodpecker_coding_git_username_file"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_USERNAME_FILE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Read the value for ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_CODING_GIT_USERNAME")," from the specified filepath"),(0,n.kt)("h3",u({},{id:"woodpecker_coding_git_password"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_PASSWORD")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"The password is used to authenticate and clone all private repositories."),(0,n.kt)("h3",u({},{id:"woodpecker_coding_git_password_file"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_PASSWORD_FILE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Read the value for ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_CODING_GIT_PASSWORD")," from the specified filepath"),(0,n.kt)("h3",u({},{id:"woodpecker_coding_skip_verify"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_SKIP_VERIFY")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Configure if SSL verification should be skipped."))}E.isMDXComponent=!0}}]);