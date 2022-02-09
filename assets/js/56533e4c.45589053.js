"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1296],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),k=s(n),d=o,m=k["".concat(l,".").concat(d)]||k[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6341:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return k}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],c={},l="Bitbucket Server",s={unversionedId:"administration/vcs/bitbucket_server",id:"administration/vcs/bitbucket_server",title:"Bitbucket Server",description:"Woodpecker comes with experimental support for Bitbucket Server, formerly known as Atlassian Stash. To enable Bitbucket Server you should configure the Woodpecker container using the following environment variables:",source:"@site/docs/30-administration/11-vcs/60-bitbucket_server.md",sourceDirName:"30-administration/11-vcs",slug:"/administration/vcs/bitbucket_server",permalink:"/docs/administration/vcs/bitbucket_server",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/11-vcs/60-bitbucket_server.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bitbucket",permalink:"/docs/administration/vcs/bitbucket"},next:{title:"Gogs",permalink:"/docs/administration/vcs/gogs"}},u=[{value:"Private Key File",id:"private-key-file",children:[],level:2},{value:"Service Account",id:"service-account",children:[],level:2},{value:"Registration",id:"registration",children:[],level:2},{value:"Configuration",id:"configuration",children:[{value:"<code>WOODPECKER_STASH</code>",id:"woodpecker_stash",children:[],level:3},{value:"<code>WOODPECKER_STASH_URL</code>",id:"woodpecker_stash_url",children:[],level:3},{value:"<code>WOODPECKER_STASH_CONSUMER_KEY</code>",id:"woodpecker_stash_consumer_key",children:[],level:3},{value:"<code>WOODPECKER_STASH_CONSUMER_RSA</code>",id:"woodpecker_stash_consumer_rsa",children:[],level:3},{value:"<code>WOODPECKER_STASH_CONSUMER_RSA_STRING</code>",id:"woodpecker_stash_consumer_rsa_string",children:[],level:3},{value:"<code>WOODPECKER_STASH_GIT_USERNAME</code>",id:"woodpecker_stash_git_username",children:[],level:3},{value:"<code>WOODPECKER_STASH_GIT_PASSWORD</code>",id:"woodpecker_stash_git_password",children:[],level:3},{value:"<code>WOODPECKER_STASH_SKIP_VERIFY</code>",id:"woodpecker_stash_skip_verify",children:[],level:3}],level:2}],p={toc:u};function k(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bitbucket-server"},"Bitbucket Server"),(0,i.kt)("p",null,"Woodpecker comes with experimental support for Bitbucket Server, formerly known as Atlassian Stash. To enable Bitbucket Server you should configure the Woodpecker container using the following environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_STASH=true\n+     - WOODPECKER_STASH_GIT_USERNAME=foo\n+     - WOODPECKER_STASH_GIT_PASSWORD=bar\n+     - WOODPECKER_STASH_CONSUMER_KEY=95c0282573633eb25e82\n+     - WOODPECKER_STASH_CONSUMER_RSA=/etc/bitbucket/key.pem\n+     - WOODPECKER_STASH_URL=http://stash.mycompany.com\n    volumes:\n+     - /path/to/key.pem:/path/to/key.pem\n\n  woodpecker-agent:\n    [...]\n")),(0,i.kt)("h2",{id:"private-key-file"},"Private Key File"),(0,i.kt)("p",null,"The OAuth process in Bitbucket server requires a private and a public RSA certificate. This is how you create the private RSA certificate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nohighlight"},"openssl genrsa -out /etc/bitbucket/key.pem 1024\n")),(0,i.kt)("p",null,"This stores the private RSA certificate in ",(0,i.kt)("inlineCode",{parentName:"p"},"key.pem"),". The next command generates the public RSA certificate and stores it in ",(0,i.kt)("inlineCode",{parentName:"p"},"key.pub"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nohighlight"},"openssl rsa -in /etc/bitbucket/key.pem -pubout >> /etc/bitbucket/key.pub\n")),(0,i.kt)("p",null,"Please note that the private key file can be mounted into your Woodpecker container at runtime or as an environment variable"),(0,i.kt)("p",null,"Private key file mounted into your Woodpecker container at runtime as a volume."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n      - WOODPECKER_STASH=true\n      - WOODPECKER_STASH_GIT_USERNAME=foo\n      - WOODPECKER_STASH_GIT_PASSWORD=bar\n      - WOODPECKER_STASH_CONSUMER_KEY=95c0282573633eb25e82\n+     - WOODPECKER_STASH_CONSUMER_RSA=/etc/bitbucket/key.pem\n      - WOODPECKER_STASH_URL=http://stash.mycompany.com\n+  volumes:\n+     - /etc/bitbucket/key.pem:/etc/bitbucket/key.pem\n\n  woodpecker-agent:\n    [...]\n")),(0,i.kt)("p",null,"Private key as environment variable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n      - WOODPECKER_STASH=true\n      - WOODPECKER_STASH_GIT_USERNAME=foo\n      - WOODPECKER_STASH_GIT_PASSWORD=bar\n      - WOODPECKER_STASH_CONSUMER_KEY=95c0282573633eb25e82\n+     - WOODPECKER_STASH_CONSUMER_RSA_STRING=contentOfPemKeyAsString\n      - WOODPECKER_STASH_URL=http://stash.mycompany.com\n\n  woodpecker-agent:\n    [...]\n")),(0,i.kt)("h2",{id:"service-account"},"Service Account"),(0,i.kt)("p",null,"Woodpecker uses ",(0,i.kt)("inlineCode",{parentName:"p"},"git+https")," to clone repositories, however, Bitbucket Server does not currently support cloning repositories with oauth token. To work around this limitation, you must create a service account and provide the username and password to Woodpecker. This service account will be used to authenticate and clone private repositories."),(0,i.kt)("h2",{id:"registration"},"Registration"),(0,i.kt)("p",null,"You must register your application with Bitbucket Server in order to generate a consumer key. Navigate to your account settings and choose Applications from the menu, and click Register new application. Now copy & paste the text value from ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/bitbucket/key.pub")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Public Key")," in the incoming link part of the application registration."),(0,i.kt)("p",null,"Please use ",(0,i.kt)("a",{parentName:"p",href:"http://woodpecker.mycompany.com/authorize"},"http://woodpecker.mycompany.com/authorize")," as the Authorization callback URL."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,i.kt)("h3",{id:"woodpecker_stash"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"))),(0,i.kt)("p",null,"Enables the Bitbucket Server driver."),(0,i.kt)("h3",{id:"woodpecker_stash_url"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_URL")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,i.kt)("p",null,"Configures the Bitbucket Server address."),(0,i.kt)("h3",{id:"woodpecker_stash_consumer_key"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_CONSUMER_KEY")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,i.kt)("p",null,"Configures your Bitbucket Server consumer key."),(0,i.kt)("h3",{id:"woodpecker_stash_consumer_rsa"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_CONSUMER_RSA")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,i.kt)("p",null,"Configures the path to your Bitbucket Server private key file."),(0,i.kt)("h3",{id:"woodpecker_stash_consumer_rsa_string"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_CONSUMER_RSA_STRING")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,i.kt)("p",null,"Configures your Bitbucket Server private key."),(0,i.kt)("h3",{id:"woodpecker_stash_git_username"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_GIT_USERNAME")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,i.kt)("p",null,"This username is used to authenticate and clone all private repositories."),(0,i.kt)("h3",{id:"woodpecker_stash_git_password"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_GIT_PASSWORD")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,i.kt)("p",null,"The password is used to authenticate and clone all private repositories."),(0,i.kt)("h3",{id:"woodpecker_stash_skip_verify"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_SKIP_VERIFY")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"))),(0,i.kt)("p",null,"Configure if SSL verification should be skipped."))}k.isMDXComponent=!0}}]);