"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8315],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=i,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2135:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],c={},s="Gitea",l={unversionedId:"administration/vcs/gitea",id:"administration/vcs/gitea",title:"Gitea",description:"Woodpecker comes with built-in support for Gitea. To enable Gitea you should configure the Woodpecker container using the following environment variables:",source:"@site/docs/30-administration/20-vcs/30-gitea.md",sourceDirName:"30-administration/20-vcs",slug:"/administration/vcs/gitea",permalink:"/docs/administration/vcs/gitea",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/20-vcs/30-gitea.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/docs/administration/vcs/github"},next:{title:"GitLab",permalink:"/docs/administration/vcs/gitlab"}},u=[{value:"Registration",id:"registration",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2}],p={toc:u};function f(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gitea"},"Gitea"),(0,o.kt)("p",null,"Woodpecker comes with built-in support for Gitea. To enable Gitea you should configure the Woodpecker container using the following environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_GITEA=true\n+     - WOODPECKER_GITEA_URL=${WOODPECKER_GITEA_URL}\n+     - WOODPECKER_GITEA_CLIENT=${WOODPECKER_GITEA_CLIENT}\n+     - WOODPECKER_GITEA_SECRET=${WOODPECKER_GITEA_SECRET}\n\n  woodpecker-agent:\n    [...]\n")),(0,o.kt)("h2",{id:"registration"},"Registration"),(0,o.kt)("p",null,"Register your application with Gitea to create your client id and secret. You can find the OAuth applications settings of Gitea at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://gitea.<host>/user/settings/"),". It is very import the authorization callback URL matches your http(s) scheme and hostname exactly with ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<host>/authorize")," as the path."),(0,o.kt)("p",null,"If you run the Woodpecker CI server on the same host as the Gitea instance, you might also need to allow local connections in Gitea, since version ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.16"),". Otherwise webhooks will fail. Add the following lines to your Gitea configuration (usually at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/gitea/conf/app.ini"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"...\n[webhook]\nALLOWED_HOST_LIST=external,loopback\n")),(0,o.kt)("p",null,"For reference see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gitea.io/en-us/config-cheat-sheet/#webhook-webhook"},"Configuration Cheat Sheet"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gitea oauth setup",src:n(1903).Z,width:"1301",height:"875"})),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"WOODPECKER_GITEA=true # Set to true to enable the Gitea driver\n\nWOODPECKER_GITEA_URL=https://try.gitea.io # Gitea server address\n\nWOODPECKER_GITEA_CLIENT=... # Gitea oauth2 client id\n\nWOODPECKER_GITEA_SECRET=... # Gitea oauth2 client secret\n\nWOODPECKER_GITEA_SKIP_VERIFY=false # Set to true to disable SSL verification.\n")))}f.isMDXComponent=!0},1903:function(e,t,n){t.Z=n.p+"assets/images/gitea_oauth-7f5d2bc8bfd0c02a227a328fff349af3.gif"}}]);