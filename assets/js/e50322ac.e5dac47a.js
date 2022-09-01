"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6307],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return _}});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=d(o),_=i,k=s["".concat(c,".").concat(_)]||s[_]||u[_]||r;return o?n.createElement(k,l(l({ref:t},p),{},{components:o})):n.createElement(k,l({ref:t},p))}));function _(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,l=new Array(r);l[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var d=2;d<r;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},7514:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return _},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return u}});var n=o(3117),i=o(102),r=(o(7294),o(3905)),l=["components"],a={},c="Coding",d={unversionedId:"administration/forges/coding",id:"administration/forges/coding",title:"Coding",description:"Configuration",source:"@site/docs/30-administration/11-forges/80-coding.md",sourceDirName:"30-administration/11-forges",slug:"/administration/forges/coding",permalink:"/docs/next/administration/forges/coding",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/11-forges/80-coding.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gogs",permalink:"/docs/next/administration/forges/gogs"},next:{title:"Agent configuration",permalink:"/docs/next/administration/agent-config"}},p={},u=[{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_CODING</code>",id:"woodpecker_coding",level:3},{value:"<code>WOODPECKER_CODING_URL</code>",id:"woodpecker_coding_url",level:3},{value:"<code>WOODPECKER_CODING_CLIENT</code>",id:"woodpecker_coding_client",level:3},{value:"<code>WOODPECKER_CODING_CLIENT_FILE</code>",id:"woodpecker_coding_client_file",level:3},{value:"<code>WOODPECKER_CODING_SECRET</code>",id:"woodpecker_coding_secret",level:3},{value:"<code>WOODPECKER_CODING_SECRET_FILE</code>",id:"woodpecker_coding_secret_file",level:3},{value:"<code>WOODPECKER_CODING_SCOPE</code>",id:"woodpecker_coding_scope",level:3},{value:"<code>WOODPECKER_CODING_GIT_MACHINE</code>",id:"woodpecker_coding_git_machine",level:3},{value:"<code>WOODPECKER_CODING_GIT_USERNAME</code>",id:"woodpecker_coding_git_username",level:3},{value:"<code>WOODPECKER_CODING_GIT_USERNAME_FILE</code>",id:"woodpecker_coding_git_username_file",level:3},{value:"<code>WOODPECKER_CODING_GIT_PASSWORD</code>",id:"woodpecker_coding_git_password",level:3},{value:"<code>WOODPECKER_CODING_GIT_PASSWORD_FILE</code>",id:"woodpecker_coding_git_password_file",level:3},{value:"<code>WOODPECKER_CODING_SKIP_VERIFY</code>",id:"woodpecker_coding_skip_verify",level:3}],s={toc:u};function _(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"coding"},"Coding"),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,r.kt)("h3",{id:"woodpecker_coding"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Enables the Coding driver."),(0,r.kt)("h3",{id:"woodpecker_coding_url"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_URL")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://coding.net"))),(0,r.kt)("p",null,"Configures the Coding server address."),(0,r.kt)("h3",{id:"woodpecker_coding_client"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_CLIENT")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Configures the Coding OAuth client id. This is used to authorize access."),(0,r.kt)("h3",{id:"woodpecker_coding_client_file"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_CLIENT_FILE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Read the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_CODING_CLIENT")," from the specified filepath"),(0,r.kt)("h3",{id:"woodpecker_coding_secret"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_SECRET")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Configures the Coding OAuth client secret. This is used to authorize access."),(0,r.kt)("h3",{id:"woodpecker_coding_secret_file"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_SECRET_FILE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Read the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_CODING_SECRET")," from the specified filepath"),(0,r.kt)("h3",{id:"woodpecker_coding_scope"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_SCOPE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"user, project, project:depot"))),(0,r.kt)("p",null,"Comma-separated list of OAuth scopes."),(0,r.kt)("h3",{id:"woodpecker_coding_git_machine"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_MACHINE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"git.coding.net"))),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h3",{id:"woodpecker_coding_git_username"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_USERNAME")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"This username is used to authenticate and clone all private repositories."),(0,r.kt)("h3",{id:"woodpecker_coding_git_username_file"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_USERNAME_FILE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Read the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_CODING_GIT_USERNAME")," from the specified filepath"),(0,r.kt)("h3",{id:"woodpecker_coding_git_password"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_PASSWORD")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"The password is used to authenticate and clone all private repositories."),(0,r.kt)("h3",{id:"woodpecker_coding_git_password_file"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_GIT_PASSWORD_FILE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Read the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_CODING_GIT_PASSWORD")," from the specified filepath"),(0,r.kt)("h3",{id:"woodpecker_coding_skip_verify"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_SKIP_VERIFY")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Configure if SSL verification should be skipped."))}_.isMDXComponent=!0}}]);