"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9588],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>v,frontMatter:()=>u,metadata:()=>g,toc:()=>f});var o=n(9613),a=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&c(e,n,t[n]);return e};const u={},m="Getting started",g={unversionedId:"development/getting-started",id:"version-0.15/development/getting-started",title:"Getting started",description:"Preparation",source:"@site/versioned_docs/version-0.15/92-development/01-getting-started.md",sourceDirName:"92-development",slug:"/development/getting-started",permalink:"/docs/development/getting-started",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/92-development/01-getting-started.md",tags:[],version:"0.15",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Awesome Woodpecker",permalink:"/docs/awesome"},next:{title:"UI Development",permalink:"/docs/development/ui"}},h={},f=[{value:"Preparation",id:"preparation",level:2},{value:"Install Go",id:"install-go",level:3},{value:"Install make",id:"install-make",level:3},{value:"Install Node.js &amp; Yarn",id:"install-nodejs--yarn",level:3},{value:"Create a <code>.env</code> file with your development configuration",id:"create-a-env-file-with-your-development-configuration",level:3},{value:"Setup O-Auth",id:"setup-o-auth",level:3},{value:"Developing with VS-Code",id:"developing-with-vs-code",level:2},{value:"Debugging Woodpecker",id:"debugging-woodpecker",level:3},{value:"Testing &amp; linting code",id:"testing--linting-code",level:2},{value:"Run applications from terminal",id:"run-applications-from-terminal",level:2}],k={toc:f};function v(e){var t,a=e,{components:c}=a,u=((e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&d.call(e,o)&&(n[o]=e[o]);return n})(a,["components"]);return(0,o.kt)("wrapper",(t=p(p({},k),u),r(t,i({components:c,mdxType:"MDXLayout"}))),(0,o.kt)("h1",p({},{id:"getting-started"}),"Getting started"),(0,o.kt)("h2",p({},{id:"preparation"}),"Preparation"),(0,o.kt)("h3",p({},{id:"install-go"}),"Install Go"),(0,o.kt)("p",null,"Install Golang (>=1.16) as described by ",(0,o.kt)("a",p({parentName:"p"},{href:"https://go.dev/doc/install"}),"this guide"),"."),(0,o.kt)("h3",p({},{id:"install-make"}),"Install make"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"GNU Make is a tool which controls the generation of executables and other non-source files of a program from the program's source files. (",(0,o.kt)("a",p({parentName:"p"},{href:"https://www.gnu.org/software/make/"}),"https://www.gnu.org/software/make/"),")")),(0,o.kt)("p",null,"Install make on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ubuntu: ",(0,o.kt)("inlineCode",{parentName:"li"},"apt install make")," - ",(0,o.kt)("a",p({parentName:"li"},{href:"https://wiki.ubuntuusers.de/Makefile/"}),"Docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",p({parentName:"li"},{href:"https://stackoverflow.com/a/32127632/8461267"}),"Windows")),(0,o.kt)("li",{parentName:"ul"},"Mac OS: ",(0,o.kt)("inlineCode",{parentName:"li"},"brew install make"))),(0,o.kt)("h3",p({},{id:"install-nodejs--yarn"}),"Install Node.js & Yarn"),(0,o.kt)("p",null,"Install ",(0,o.kt)("a",p({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"Node.js (>=14)")," if you want to build Woodpeckers UI or documentation."),(0,o.kt)("p",null,"For dependencies installation (node_modules) for the UI and documentation of Woodpecker the package-manager Yarn is used. The installation of Yarn is described by ",(0,o.kt)("a",p({parentName:"p"},{href:"https://yarnpkg.com/getting-started/install"}),"this guide"),"."),(0,o.kt)("h3",p({},{id:"create-a-env-file-with-your-development-configuration"}),"Create a ",(0,o.kt)("inlineCode",{parentName:"h3"},".env")," file with your development configuration"),(0,o.kt)("p",null,"Similar to the environment variables you can set for your production setup of Woodpecker, you can create a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," in the root of the Woodpecker project and add any need config to it."),(0,o.kt)("p",null,"A common config for debugging would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-ini"}),"WOODPECKER_OPEN=true\nWOODPECKER_ADMIN=your-username\n\n# if you want to test webhooks with an online SCM like GitHub this address needs to be accessible from public server\nWOODPECKER_HOST=http://your-dev-address.com/\n\n# github (sample for a SCM config - see /docs/administration/vcs/overview for other SCMs)\nWOODPECKER_GITHUB=true\nWOODPECKER_GITHUB_CLIENT=<redacted>\nWOODPECKER_GITHUB_SECRET=<redacted>\n\n# agent\nWOODPECKER_SERVER=localhost:9000\nWOODPECKER_SECRET=a-long-and-secure-password-used-for-the-local-development-system\nWOODPECKER_MAX_PROCS=1\n\n# enable if you want to develop the UI\n# WOODPECKER_DEV_WWW_PROXY=http://localhost:8010\n\n# used so you can login without using a public address\nWOODPECKER_DEV_OAUTH_HOST=http://localhost:8000\n\n# disable health-checks while debugging (normally not needed while developing)\nWOODPECKER_HEALTHCHECK=false\n\n# WOODPECKER_LOG_LEVEL=debug\n# WOODPECKER_LOG_LEVEL=trace\n")),(0,o.kt)("h3",p({},{id:"setup-o-auth"}),"Setup O-Auth"),(0,o.kt)("p",null,"Create an O-Auth app for your SCM as describe in the ",(0,o.kt)("a",p({parentName:"p"},{href:"/docs/administration/vcs/overview"}),"SCM documentation"),". If you set ",(0,o.kt)("inlineCode",{parentName:"p"},"WOODPECKER_DEV_OAUTH_HOST=http://localhost:8000")," you can use that address with the path as explained for the specific SCM to login without the need for a public address. For example for GitHub you would use ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/authorize")," as authorization callback URL."),(0,o.kt)("h2",p({},{id:"developing-with-vs-code"}),"Developing with VS-Code"),(0,o.kt)("p",null,"You can use different methods for debugging the Woodpecker applications. One of the currently recommend ways to debug and test the Woodpecker application is using ",(0,o.kt)("a",p({parentName:"p"},{href:"https://code.visualstudio.com/"}),"VS-Code")," or ",(0,o.kt)("a",p({parentName:"p"},{href:"https://vscodium.com/"}),"VS-Codium")," (Open-Source binaries of VS-Code) as most maintainers are using it and Woodpecker already includes the needed debug configurations for it."),(0,o.kt)("p",null,"As a starting guide for programming Go with VS-Code you can use this video guide:\n",(0,o.kt)("a",p({parentName:"p"},{href:"https://www.youtube.com/watch?v=1MXIGYrMk80"}),(0,o.kt)("img",p({parentName:"a"},{src:"https://img.youtube.com/vi/1MXIGYrMk80/0.jpg",alt:"Getting started with Go in VS-Code"})))),(0,o.kt)("h3",p({},{id:"debugging-woodpecker"}),"Debugging Woodpecker"),(0,o.kt)("p",null,"The Woodpecker source code already includes launch configurations for the Woodpecker server and agent. To start debugging you can click on the debug icon in the navigation bar of VS-Code (ctrl-shift-d). On that page you will see the existing launch jobs at the top. Simply select the agent or server and click on the play button. You can set breakpoints in the source files to stop at specific points."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Woodpecker debugging with VS-Code",src:n(6143).Z,width:"471",height:"465"})),(0,o.kt)("h2",p({},{id:"testing--linting-code"}),"Testing & linting code"),(0,o.kt)("p",null,"To test or lint parts of Woodpecker you can run one of the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# test server code\nmake test-server\n\n# test agent code\nmake test-agent\n\n# test cli code\nmake test-cli\n\n# test datastore / database related code like migrations of the server\nmake test-server-datastore\n\n# lint go code\nmake lint\n\n# lint UI code\nmake lint-frontend\n\n# test UI code\nmake test-frontend\n")),(0,o.kt)("p",null,"If you want to test a specific go file you can also use:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"go test -race -timeout 30s github.com/woodpecker-ci/woodpecker/<path-to-the-package-or-file-to-test>\n")),(0,o.kt)("p",null,"Or you can open the test-file inside ",(0,o.kt)("a",p({parentName:"p"},{href:"#developing-with-vs-code"}),"VS-Code")," and run or debug the test by clicking on the inline commands:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Run test via VS-Code",src:n(2279).Z,width:"606",height:"300"})),(0,o.kt)("h2",p({},{id:"run-applications-from-terminal"}),"Run applications from terminal"),(0,o.kt)("p",null,"If you want to run a Woodpecker applications from your terminal you can use one of the following commands from the base of the Woodpecker project. They will execute Woodpecker in a similar way as described in ",(0,o.kt)("a",p({parentName:"p"},{href:"#debugging-woodpecker"}),"debugging Woodpecker")," without the ability to really debug it in your editor."),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# start server\n$ go run ./cmd/server\n\n# start agent\n$ go run ./cmd/agent\n\n# execute cli command\n$ go run ./cmd/cli [command]\n")))}v.isMDXComponent=!0},6143:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-debug-3c793753073a5c21fea0495f17941337.png"},2279:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-run-test-88492a530ddeb515dea1b334e1103aca.png"}}]);