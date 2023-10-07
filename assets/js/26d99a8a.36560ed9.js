"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7034],{17942:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var r=o(50959);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(o),f=n,k=s["".concat(u,".").concat(f)]||s[f]||d[f]||i;return o?r.createElement(k,a(a({ref:t},p),{},{components:o})):r.createElement(k,a({ref:t},p))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},54296:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>O,frontMatter:()=>k,metadata:()=>b,toc:()=>E});var r=o(17942),n=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,s=(e,t)=>{for(var o in t||(t={}))u.call(t,o)&&p(e,o,t[o]);if(l)for(var o of l(t))c.call(t,o)&&p(e,o,t[o]);return e},d=(e,t)=>i(e,a(t)),f=(e,t)=>{var o={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(o[r]=e[r]);return o};const k={},h="GitHub",b={unversionedId:"administration/forges/github",id:"version-1.0/administration/forges/github",title:"GitHub",description:"Woodpecker comes with built-in support for GitHub and GitHub Enterprise. To enable GitHub you should configure the Woodpecker server using the following environment variables:",source:"@site/versioned_docs/version-1.0/30-administration/11-forges/20-github.md",sourceDirName:"30-administration/11-forges",slug:"/administration/forges/github",permalink:"/docs/administration/forges/github",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/30-administration/11-forges/20-github.md",tags:[],version:"1.0",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/administration/forges/overview"},next:{title:"Gitea / Forgejo",permalink:"/docs/administration/forges/gitea"}},m={},E=[{value:"Registration",id:"registration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_GITHUB</code>",id:"woodpecker_github",level:3},{value:"<code>WOODPECKER_GITHUB_URL</code>",id:"woodpecker_github_url",level:3},{value:"<code>WOODPECKER_GITHUB_CLIENT</code>",id:"woodpecker_github_client",level:3},{value:"<code>WOODPECKER_GITHUB_CLIENT_FILE</code>",id:"woodpecker_github_client_file",level:3},{value:"<code>WOODPECKER_GITHUB_SECRET</code>",id:"woodpecker_github_secret",level:3},{value:"<code>WOODPECKER_GITHUB_SECRET_FILE</code>",id:"woodpecker_github_secret_file",level:3},{value:"<code>WOODPECKER_GITHUB_MERGE_REF</code>",id:"woodpecker_github_merge_ref",level:3},{value:"<code>WOODPECKER_GITHUB_SKIP_VERIFY</code>",id:"woodpecker_github_skip_verify",level:3}],g={toc:E},_="wrapper";function O(e){var t=e,{components:n}=t,i=f(t,["components"]);return(0,r.kt)(_,d(s(s({},g),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"github"}),"GitHub"),(0,r.kt)("p",null,"Woodpecker comes with built-in support for GitHub and GitHub Enterprise. To enable GitHub you should configure the Woodpecker server using the following environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_GITHUB=true\n+     - WOODPECKER_GITHUB_CLIENT=${WOODPECKER_GITHUB_CLIENT}\n+     - WOODPECKER_GITHUB_SECRET=${WOODPECKER_GITHUB_SECRET}\n\n  woodpecker-agent:\n    [...]\n")),(0,r.kt)("h2",s({},{id:"registration"}),"Registration"),(0,r.kt)("p",null,"Register your application with GitHub to create your client id and secret. It is very important that the authorization callback URL matches your http(s) scheme and hostname exactly with ",(0,r.kt)("inlineCode",{parentName:"p"},"<scheme>://<host>/authorize")," as the path."),(0,r.kt)("p",null,"Please use this screenshot for reference:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"github oauth setup",src:o(28923).Z,width:"789",height:"787"})),(0,r.kt)("h2",s({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,r.kt)("h3",s({},{id:"woodpecker_github"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Enables the GitHub driver."),(0,r.kt)("h3",s({},{id:"woodpecker_github_url"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB_URL")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com"))),(0,r.kt)("p",null,"Configures the GitHub server address."),(0,r.kt)("h3",s({},{id:"woodpecker_github_client"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB_CLIENT")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Configures the GitHub OAuth client id. This is used to authorize access."),(0,r.kt)("h3",s({},{id:"woodpecker_github_client_file"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB_CLIENT_FILE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Read the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITHUB_CLIENT")," from the specified filepath"),(0,r.kt)("h3",s({},{id:"woodpecker_github_secret"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB_SECRET")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Configures the GitHub OAuth client secret. This is used to authorize access."),(0,r.kt)("h3",s({},{id:"woodpecker_github_secret_file"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB_SECRET_FILE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Read the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITHUB_SECRET")," from the specified filepath"),(0,r.kt)("h3",s({},{id:"woodpecker_github_merge_ref"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB_MERGE_REF")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"))),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h3",s({},{id:"woodpecker_github_skip_verify"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB_SKIP_VERIFY")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Configure if SSL verification should be skipped."))}O.isMDXComponent=!0},28923:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/github_oauth-c5a964d7dc0bf3ca699b2ebf1d00e797.png"}}]);