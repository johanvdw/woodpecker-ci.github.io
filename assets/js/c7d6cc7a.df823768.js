"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3237],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6840:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],u={},c="GitHub",s={unversionedId:"administration/vcs/github",id:"administration/vcs/github",title:"GitHub",description:"Woodpecker comes with built-in support for GitHub and GitHub Enterprise. To enable GitHub you should configure the Woodpecker server using the following environment variables:",source:"@site/docs/30-administration/20-vcs/20-github.md",sourceDirName:"30-administration/20-vcs",slug:"/administration/vcs/github",permalink:"/docs/administration/vcs/github",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/20-vcs/20-github.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/administration/vcs/overview"},next:{title:"Gitea",permalink:"/docs/administration/vcs/gitea"}},l=[{value:"Registration",id:"registration",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2}],p={toc:l};function d(e){var t=e.components,u=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"github"},"GitHub"),(0,o.kt)("p",null,"Woodpecker comes with built-in support for GitHub and GitHub Enterprise. To enable GitHub you should configure the Woodpecker server using the following environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_GITHUB=true\n+     - WOODPECKER_GITHUB_CLIENT=${WOODPECKER_GITHUB_CLIENT}\n+     - WOODPECKER_GITHUB_SECRET=${WOODPECKER_GITHUB_SECRET}\n\n  woodpecker-agent:\n    [...]\n")),(0,o.kt)("h2",{id:"registration"},"Registration"),(0,o.kt)("p",null,"Register your application with GitHub to create your client id and secret. It is very import the authorization callback URL matches your http(s) scheme and hostname exactly with ",(0,o.kt)("inlineCode",{parentName:"p"},"<scheme>://<host>/authorize")," as the path."),(0,o.kt)("p",null,"Please use this screenshot for reference:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"github oauth setup",src:n(9342).Z,width:"789",height:"787"})),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"WOODPECKER_GITHUB=true # Set to true to enable the GitHub driver\n\nWOODPECKER_GITHUB_URL=https://github.com # GitHub server address\n\nWOODPECKER_GITHUB_CLIENT=... # GitHub oauth2 client id\n\nWOODPECKER_GITHUB_SECRET=... # GitHub oauth2 client secret.\n\nWOODPECKER_GITHUB_MERGE_REF=true # Set to true to use the `refs/pulls/%d/merge` vs `refs/pulls/%d/head`\n\nWOODPECKER_GITHUB_SKIP_VERIFY=false # Set to true to disable SSL verification\n")))}d.isMDXComponent=!0},9342:function(e,t,n){t.Z=n.p+"assets/images/github_oauth-c5a964d7dc0bf3ca699b2ebf1d00e797.png"}}]);