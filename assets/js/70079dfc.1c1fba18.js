"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4519],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=o,f=d["".concat(u,".").concat(b)]||d[b]||p[b]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6161:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return v},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return m}});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&s(e,n,t[n]);return e};const d={},b="Bitbucket",f={unversionedId:"administration/vcs/bitbucket",id:"version-0.15/administration/vcs/bitbucket",title:"Bitbucket",description:"Woodpecker comes with built-in support for Bitbucket Cloud. To enable Bitbucket Cloud you should configure the Woodpecker container using the following environment variables:",source:"@site/versioned_docs/version-0.15/30-administration/11-vcs/50-bitbucket.md",sourceDirName:"30-administration/11-vcs",slug:"/administration/vcs/bitbucket",permalink:"/docs/administration/vcs/bitbucket",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/30-administration/11-vcs/50-bitbucket.md",tags:[],version:"0.15",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitLab",permalink:"/docs/administration/vcs/gitlab"},next:{title:"Bitbucket Server",permalink:"/docs/administration/vcs/bitbucket_server"}},k={},m=[{value:"Registration",id:"registration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_BITBUCKET</code>",id:"woodpecker_bitbucket",level:3},{value:"<code>WOODPECKER_BITBUCKET_CLIENT</code>",id:"woodpecker_bitbucket_client",level:3},{value:"<code>WOODPECKER_BITBUCKET_SECRET</code>",id:"woodpecker_bitbucket_secret",level:3},{value:"Missing Features",id:"missing-features",level:2}],h={toc:m};function v(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},h),s),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"bitbucket"}),"Bitbucket"),(0,r.kt)("p",null,"Woodpecker comes with built-in support for Bitbucket Cloud. To enable Bitbucket Cloud you should configure the Woodpecker container using the following environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_BITBUCKET=true\n+     - WOODPECKER_BITBUCKET_CLIENT=95c0282573633eb25e82\n+     - WOODPECKER_BITBUCKET_SECRET=30f5064039e6b359e075\n\n  woodpecker-agent:\n    [...]\n")),(0,r.kt)("h2",p({},{id:"registration"}),"Registration"),(0,r.kt)("p",null,"You must register your application with Bitbucket in order to generate a client and secret. Navigate to your account settings and choose OAuth from the menu, and click Add Consumer."),(0,r.kt)("p",null,"Please use the Authorization callback URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-nohighlight"}),"http://woodpecker.mycompany.com/authorize\n")),(0,r.kt)("p",null,"Please also be sure to check the following permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-nohighlight"}),"Account:Email\nAccount:Read\nTeam Membership:Read\nRepositories:Read\nWebhooks:Read and Write\n")),(0,r.kt)("h2",p({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,r.kt)("h3",p({},{id:"woodpecker_bitbucket"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BITBUCKET")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Enables the Bitbucket driver."),(0,r.kt)("h3",p({},{id:"woodpecker_bitbucket_client"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BITBUCKET_CLIENT")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Configures the Bitbucket OAuth client id. This is used to authorize access."),(0,r.kt)("h3",p({},{id:"woodpecker_bitbucket_secret"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BITBUCKET_SECRET")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Configures the Bitbucket OAuth client secret. This is used to authorize access."),(0,r.kt)("h2",p({},{id:"missing-features"}),"Missing Features"),(0,r.kt)("p",null,"Merge requests are not currently supported. We are interested in patches to include this functionality.\nIf you are interested in contributing to Woodpecker and submitting a patch please ",(0,r.kt)("strong",{parentName:"p"},"contact us")," via ",(0,r.kt)("a",p({parentName:"p"},{href:"https://discord.gg/fcMQqSMXJy"}),"Discord")," or ",(0,r.kt)("a",p({parentName:"p"},{href:"https://matrix.to/#/#WoodpeckerCI-Develop:obermui.de"}),"Matrix"),"."))}v.isMDXComponent=!0}}]);