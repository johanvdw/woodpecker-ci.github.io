"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1246],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(n),N=r,s=k["".concat(o,".").concat(N)]||k[N]||u[N]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7246:function(t,e,n){n.r(e),n.d(e,{assets:function(){return g},contentTitle:function(){return N},default:function(){return C},frontMatter:function(){return k},metadata:function(){return s},toc:function(){return b}});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&m(t,n,e[n]);if(p)for(var n of p(e))d.call(e,n)&&m(t,n,e[n]);return t};const k={},N="Environment variables",s={unversionedId:"usage/environment",id:"version-0.15/usage/environment",title:"Environment variables",description:"Woodpecker provides the ability to pass environment variables to individual pipeline steps. Example pipeline step with custom environment variables:",source:"@site/versioned_docs/version-0.15/20-usage/50-environment.md",sourceDirName:"20-usage",slug:"/usage/environment",permalink:"/docs/usage/environment",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/20-usage/50-environment.md",tags:[],version:"0.15",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Registries",permalink:"/docs/usage/registries"},next:{title:"Plugins",permalink:"/docs/usage/plugins/plugins"}},g={},b=[{value:"Built-in environment variables",id:"built-in-environment-variables",level:2},{value:"Global environment variables",id:"global-environment-variables",level:2},{value:"String Substitution",id:"string-substitution",level:2},{value:"String Operations",id:"string-operations",level:2}],c={toc:b};function C(t){var e,n=t,{components:r}=n,m=((t,e)=>{var n={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&d.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=u(u({},c),m),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"environment-variables"}),"Environment variables"),(0,a.kt)("p",null,"Woodpecker provides the ability to pass environment variables to individual pipeline steps. Example pipeline step with custom environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  build:\n    image: golang\n+   environment:\n+     - CGO=0\n+     - GOOS=linux\n+     - GOARCH=amd64\n    commands:\n      - go build\n      - go test\n")),(0,a.kt)("p",null,"Please note that the environment section is not able to expand environment variables. If you need to expand variables they should be exported in the commands section."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  build:\n    image: golang\n-   environment:\n-     - PATH=$PATH:/go\n    commands:\n+     - export PATH=$PATH:/go\n      - go build\n      - go test\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please be warned that ",(0,a.kt)("inlineCode",{parentName:"p"},"${variable}")," expressions are subject to pre-processing. If you do not want the pre-processor to evaluate your expression it must be escaped:")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  build:\n    image: golang\n    commands:\n-     - export PATH=${PATH}:/go\n+     - export PATH=$${PATH}:/go\n      - go build\n      - go test\n")),(0,a.kt)("h2",u({},{id:"built-in-environment-variables"}),"Built-in environment variables"),(0,a.kt)("p",null,"This is the reference list of all environment variables available to your pipeline containers. These are injected into your pipeline step and plugins containers, at runtime."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"NAME"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI=woodpecker")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"environment is woodpecker")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Repository"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository full name ",(0,a.kt)("inlineCode",{parentName:"td"},"<owner>/<name>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_OWNER")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository owner")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_NAME")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_SCM")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository scm (git)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_LINK")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository link")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_REMOTE")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository clone url")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_DEFAULT_BRANCH")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository default branch (master)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_PRIVATE")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository is private")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_TRUSTED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository is trusted")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Current Commit"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_SHA")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit sha")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_REF")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit ref")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_REFSPEC")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit ref spec")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_BRANCH")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit branch (equals target branch for pull requests)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_SOURCE_BRANCH")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit source branch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_TARGET_BRANCH")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit target branch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_TAG")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit tag name (empty if event is not ",(0,a.kt)("inlineCode",{parentName:"td"},"tag"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_PULL_REQUEST")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit pull request number (empty if event is not ",(0,a.kt)("inlineCode",{parentName:"td"},"pull_request"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_LINK")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit link in remote")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_MESSAGE")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_AUTHOR")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit author username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_AUTHOR_EMAIL")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit author email address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_AUTHOR_AVATAR")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit author avatar")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Current build"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_BUILD_NUMBER")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"build number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_BUILD_PARENT")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"build number of parent build")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_BUILD_EVENT")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"build event (push, pull_request, tag, deployment)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_BUILD_LINK")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"build link in ci")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_BUILD_DEPLOY_TARGET")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"build deploy target for ",(0,a.kt)("inlineCode",{parentName:"td"},"deployment")," events (ie production)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_BUILD_STATUS")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"build status (success, failure)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_BUILD_CREATED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"build created unix timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_BUILD_STARTED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"build started unix timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_BUILD_FINISHED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"build finished unix timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Current job"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_JOB_NUMBER")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"job number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_JOB_STATUS")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"job status (success, failure)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_JOB_STARTED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"job started unix timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_JOB_FINISHED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"job finished unix timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Previous commit"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_SHA")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit sha")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_REF")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit ref")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_REFSPEC")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit ref spec")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_BRANCH")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit branch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_SOURCE_BRANCH")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit source branch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_TARGET_BRANCH")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit target branch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_LINK")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit link in remote")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_MESSAGE")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_AUTHOR")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit author username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_AUTHOR_EMAIL")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit author email address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_AUTHOR_AVATAR")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit author avatar")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Previous build"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_BUILD_NUMBER")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous build number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_BUILD_PARENT")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous build number of parent build")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_BUILD_EVENT")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous build event (push, pull_request, tag, deployment)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_BUILD_LINK")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous build link in ci")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_BUILD_DEPLOY_TARGET")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous build deploy target for ",(0,a.kt)("inlineCode",{parentName:"td"},"deployment")," events (ie production)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_BUILD_STATUS")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous build status (success, failure)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_BUILD_CREATED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous build created unix timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_BUILD_STARTED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous build started unix timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_BUILD_FINISHED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous build finished unix timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2003")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_WORKSPACE")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Path of the workspace where source code gets cloned to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"System"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_SYSTEM_NAME")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"name of the ci system: ",(0,a.kt)("inlineCode",{parentName:"td"},"woodpecker"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_SYSTEM_LINK")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"link to ci system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_SYSTEM_HOST")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"hostname of ci server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_SYSTEM_VERSION")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"version of the server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Internal")," - Please don't use!")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_SCRIPT")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Internal script path. Used to call pipeline step commands.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_NETRC_USERNAME")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Credentials for private repos to be able to clone data. (Only available for specific images)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_NETRC_PASSWORD")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Credentials for private repos to be able to clone data. (Only available for specific images)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_NETRC_MACHINE")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Credentials for private repos to be able to clone data. (Only available for specific images)")))),(0,a.kt)("h2",u({},{id:"global-environment-variables"}),"Global environment variables"),(0,a.kt)("p",null,"If you want specific environment variables to be available in all of your builds use the ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_ENVIRONMENT")," setting on the Woodpecker server."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-.diff"}),"services:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_ENVIRONMENT=first_var:value1,second_var:value2\n")),(0,a.kt)("h2",u({},{id:"string-substitution"}),"String Substitution"),(0,a.kt)("p",null,"Woodpecker provides the ability to substitute environment variables at runtime. This gives us the ability to use dynamic build or commit details in our pipeline configuration."),(0,a.kt)("p",null,"Example commit substitution:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  docker:\n    image: plugins/docker\n    settings:\n+     tags: ${CI_COMMIT_SHA}\n")),(0,a.kt)("p",null,"Example tag substitution:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  docker:\n    image: plugins/docker\n    settings:\n+     tags: ${CI_COMMIT_TAG}\n")),(0,a.kt)("h2",u({},{id:"string-operations"}),"String Operations"),(0,a.kt)("p",null,"Woodpecker also emulates bash string operations. This gives us the ability to manipulate the strings prior to substitution. Example use cases might include substring and stripping prefix or suffix values."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"OPERATION"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"DESC"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param,}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with lowercase first char")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param,,}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with lowercase")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param^}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with uppercase first char")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param^^}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with uppercase")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param:pos}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with substring")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param:pos:len}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with substring and length")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param=default}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with default")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param##prefix}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with prefix removal")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param%%suffix}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with suffix removal")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param/old/new}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with find and replace")))),(0,a.kt)("p",null,"Example variable substitution with substring:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  docker:\n    image: plugins/docker\n    settings:\n+     tags: ${CI_COMMIT_SHA:0:8}\n")),(0,a.kt)("p",null,"Example variable substitution strips ",(0,a.kt)("inlineCode",{parentName:"p"},"v")," prefix from ",(0,a.kt)("inlineCode",{parentName:"p"},"v.1.0.0"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  docker:\n    image: plugins/docker\n    settings:\n+     tags: ${CI_COMMIT_TAG##v}\n")))}C.isMDXComponent=!0}}]);