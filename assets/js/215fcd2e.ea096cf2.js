"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7277],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(b,a(a({ref:t},u),{},{components:n})):o.createElement(b,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1675:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return m}});var o=n(3905),r=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e};const d={},f="GitLab",b={unversionedId:"administration/vcs/gitlab",id:"version-0.15/administration/vcs/gitlab",title:"GitLab",description:"Woodpecker comes with built-in support for the GitLab version 8.2 and higher. To enable GitLab you should configure the Woodpecker container using the following environment variables:",source:"@site/versioned_docs/version-0.15/30-administration/11-vcs/40-gitlab.md",sourceDirName:"30-administration/11-vcs",slug:"/administration/vcs/gitlab",permalink:"/docs/administration/vcs/gitlab",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/30-administration/11-vcs/40-gitlab.md",tags:[],version:"0.15",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gitea",permalink:"/docs/administration/vcs/gitea"},next:{title:"Bitbucket",permalink:"/docs/administration/vcs/bitbucket"}},k={},m=[{value:"Registration",id:"registration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_GITLAB</code>",id:"woodpecker_gitlab",level:3},{value:"<code>WOODPECKER_GITLAB_URL</code>",id:"woodpecker_gitlab_url",level:3},{value:"<code>WOODPECKER_GITLAB_CLIENT</code>",id:"woodpecker_gitlab_client",level:3},{value:"<code>WOODPECKER_GITLAB_SECRET</code>",id:"woodpecker_gitlab_secret",level:3},{value:"<code>WOODPECKER_GITLAB_SKIP_VERIFY</code>",id:"woodpecker_gitlab_skip_verify",level:3}],h={toc:m};function v(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&s.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=p(p({},h),u),i(t,a({components:r,mdxType:"MDXLayout"}))),(0,o.kt)("h1",p({},{id:"gitlab"}),"GitLab"),(0,o.kt)("p",null,"Woodpecker comes with built-in support for the GitLab version 8.2 and higher. To enable GitLab you should configure the Woodpecker container using the following environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n+     - WOODPECKER_GITLAB=true\n+     - WOODPECKER_GITLAB_URL=http://gitlab.mycompany.com\n+     - WOODPECKER_GITLAB_CLIENT=95c0282573633eb25e82\n+     - WOODPECKER_GITLAB_SECRET=30f5064039e6b359e075\n\n  woodpecker-agent:\n    [...]\n")),(0,o.kt)("h2",p({},{id:"registration"}),"Registration"),(0,o.kt)("p",null,"You must register your application with GitLab in order to generate a Client and Secret. Navigate to your account settings and choose Applications from the menu, and click New Application."),(0,o.kt)("p",null,"Please use ",(0,o.kt)("inlineCode",{parentName:"p"},"http://woodpecker.mycompany.com/authorize")," as the Authorization callback URL. Grant ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," scope to the application."),(0,o.kt)("p",null,"If you run the Woodpecker CI server on the same host as the GitLab instance, you might also need to allow local connections in GitLab, otherwise API requests will fail. In GitLab, navigate to the Admin dashboard, then go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings > Network > Outbound requests")," and enable ",(0,o.kt)("inlineCode",{parentName:"p"},"Allow requests to the local network from web hooks and services"),"."),(0,o.kt)("h2",p({},{id:"configuration"}),"Configuration"),(0,o.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,o.kt)("h3",p({},{id:"woodpecker_gitlab"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"))),(0,o.kt)("p",null,"Enables the GitLab driver."),(0,o.kt)("h3",p({},{id:"woodpecker_gitlab_url"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_URL")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://gitlab.com"))),(0,o.kt)("p",null,"Configures the GitLab server address."),(0,o.kt)("h3",p({},{id:"woodpecker_gitlab_client"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_CLIENT")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"Configures the GitLab OAuth client id. This is used to authorize access."),(0,o.kt)("h3",p({},{id:"woodpecker_gitlab_secret"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_SECRET")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"Configures the GitLab OAuth client secret. This is used to authorize access."),(0,o.kt)("h3",p({},{id:"woodpecker_gitlab_skip_verify"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_SKIP_VERIFY")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"))),(0,o.kt)("p",null,"Configure if SSL verification should be skipped."))}v.isMDXComponent=!0}}]);