"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[5829],{17942:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>k});var n=o(50959);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(o),f=r,k=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return o?n.createElement(k,a(a({ref:t},s),{},{components:o})):n.createElement(k,a({ref:t},s))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},3937:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>_,frontMatter:()=>k,metadata:()=>m,toc:()=>h});var n=o(17942),r=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))c.call(t,o)&&s(e,o,t[o]);if(l)for(var o of l(t))p.call(t,o)&&s(e,o,t[o]);return e},d=(e,t)=>i(e,a(t)),f=(e,t)=>{var o={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(o[n]=e[n]);return o};const k={},b="GitLab",m={unversionedId:"administration/forges/gitlab",id:"version-1.0/administration/forges/gitlab",title:"GitLab",description:"Woodpecker comes with built-in support for the GitLab version 8.2 and higher. To enable GitLab you should configure the Woodpecker container using the following environment variables:",source:"@site/versioned_docs/version-1.0/30-administration/11-forges/40-gitlab.md",sourceDirName:"30-administration/11-forges",slug:"/administration/forges/gitlab",permalink:"/docs/administration/forges/gitlab",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/30-administration/11-forges/40-gitlab.md",tags:[],version:"1.0",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gitea / Forgejo",permalink:"/docs/administration/forges/gitea"},next:{title:"Bitbucket",permalink:"/docs/administration/forges/bitbucket"}},g={},h=[{value:"Registration",id:"registration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_GITLAB</code>",id:"woodpecker_gitlab",level:3},{value:"<code>WOODPECKER_GITLAB_URL</code>",id:"woodpecker_gitlab_url",level:3},{value:"<code>WOODPECKER_GITLAB_CLIENT</code>",id:"woodpecker_gitlab_client",level:3},{value:"<code>WOODPECKER_GITLAB_CLIENT_FILE</code>",id:"woodpecker_gitlab_client_file",level:3},{value:"<code>WOODPECKER_GITLAB_SECRET</code>",id:"woodpecker_gitlab_secret",level:3},{value:"<code>WOODPECKER_GITLAB_SECRET_FILE</code>",id:"woodpecker_gitlab_secret_file",level:3},{value:"<code>WOODPECKER_GITLAB_SKIP_VERIFY</code>",id:"woodpecker_gitlab_skip_verify",level:3}],O={toc:h},v="wrapper";function _(e){var t=e,{components:o}=t,r=f(t,["components"]);return(0,n.kt)(v,d(u(u({},O),r),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"gitlab"}),"GitLab"),(0,n.kt)("p",null,"Woodpecker comes with built-in support for the GitLab version 8.2 and higher. To enable GitLab you should configure the Woodpecker container using the following environment variables:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n+     - WOODPECKER_GITLAB=true\n+     - WOODPECKER_GITLAB_URL=http://gitlab.mycompany.com\n+     - WOODPECKER_GITLAB_CLIENT=95c0282573633eb25e82\n+     - WOODPECKER_GITLAB_SECRET=30f5064039e6b359e075\n\n  woodpecker-agent:\n    [...]\n")),(0,n.kt)("h2",u({},{id:"registration"}),"Registration"),(0,n.kt)("p",null,"You must register your application with GitLab in order to generate a Client and Secret. Navigate to your account settings and choose Applications from the menu, and click New Application."),(0,n.kt)("p",null,"Please use ",(0,n.kt)("inlineCode",{parentName:"p"},"http://woodpecker.mycompany.com/authorize")," as the Authorization callback URL. Grant ",(0,n.kt)("inlineCode",{parentName:"p"},"api")," scope to the application."),(0,n.kt)("p",null,"If you run the Woodpecker CI server on the same host as the GitLab instance, you might also need to allow local connections in GitLab, otherwise API requests will fail. In GitLab, navigate to the Admin dashboard, then go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Settings > Network > Outbound requests")," and enable ",(0,n.kt)("inlineCode",{parentName:"p"},"Allow requests to the local network from web hooks and services"),"."),(0,n.kt)("h2",u({},{id:"configuration"}),"Configuration"),(0,n.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,n.kt)("h3",u({},{id:"woodpecker_gitlab"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Enables the GitLab driver."),(0,n.kt)("h3",u({},{id:"woodpecker_gitlab_url"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_URL")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://gitlab.com"))),(0,n.kt)("p",null,"Configures the GitLab server address."),(0,n.kt)("h3",u({},{id:"woodpecker_gitlab_client"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_CLIENT")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures the GitLab OAuth client id. This is used to authorize access."),(0,n.kt)("h3",u({},{id:"woodpecker_gitlab_client_file"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_CLIENT_FILE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Read the value for ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITLAB_CLIENT")," from the specified filepath"),(0,n.kt)("h3",u({},{id:"woodpecker_gitlab_secret"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_SECRET")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures the GitLab OAuth client secret. This is used to authorize access."),(0,n.kt)("h3",u({},{id:"woodpecker_gitlab_secret_file"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_SECRET_FILE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Read the value for ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITLAB_SECRET")," from the specified filepath"),(0,n.kt)("h3",u({},{id:"woodpecker_gitlab_skip_verify"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_SKIP_VERIFY")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Configure if SSL verification should be skipped."))}_.isMDXComponent=!0}}]);