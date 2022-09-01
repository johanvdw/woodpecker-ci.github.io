"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[5538],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(f,l(l({ref:n},s),{},{components:t})):a.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5784:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=t(3117),i=t(102),r=(t(7294),t(3905)),l=["components"],o={},p="Conditional Step Execution",c={unversionedId:"usage/conditional-execution",id:"version-0.15/usage/conditional-execution",title:"Conditional Step Execution",description:"Woodpecker supports defining conditions for pipeline step by a when block. If all conditions in the when block evaluate to true the step is executed, otherwise it is skipped.",source:"@site/versioned_docs/version-0.15/20-usage/22-conditional-execution.md",sourceDirName:"20-usage",slug:"/usage/conditional-execution",permalink:"/docs/usage/conditional-execution",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/20-usage/22-conditional-execution.md",tags:[],version:"0.15",sidebarPosition:22,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pipeline syntax",permalink:"/docs/usage/pipeline-syntax"},next:{title:"Multi pipelines",permalink:"/docs/usage/multi-pipeline"}},s={},u=[{value:"<code>repo</code>",id:"repo",level:2},{value:"<code>branch</code>",id:"branch",level:2},{value:"<code>event</code>",id:"event",level:2},{value:"<code>tag</code>",id:"tag",level:2},{value:"<code>status</code>",id:"status",level:2},{value:"<code>platform</code>",id:"platform",level:2},{value:"<code>environment</code>",id:"environment",level:2},{value:"<code>matrix</code>",id:"matrix",level:2},{value:"<code>instance</code>",id:"instance",level:2},{value:"<code>path</code>",id:"path",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"conditional-step-execution"},"Conditional Step Execution"),(0,r.kt)("p",null,"Woodpecker supports defining conditions for pipeline step by a ",(0,r.kt)("inlineCode",{parentName:"p"},"when")," block. If all conditions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"when")," block evaluate to true the step is executed, otherwise it is skipped."),(0,r.kt)("h2",{id:"repo"},(0,r.kt)("inlineCode",{parentName:"h2"},"repo")),(0,r.kt)("p",null,"Example conditional execution by repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"}," pipeline:\n   slack:\n     image: plugins/slack\n     settings:\n       channel: dev\n+    when:\n+      repo: test/test\n")),(0,r.kt)("h2",{id:"branch"},(0,r.kt)("inlineCode",{parentName:"h2"},"branch")),(0,r.kt)("p",null,"Example conditional execution by branch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  slack:\n    image: plugins/slack\n    settings:\n      channel: dev\n+   when:\n+     branch: master\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The step now triggers on master, but also if the target branch of a pull request is ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),". Add an event condition to limit it further to pushes on master only.")),(0,r.kt)("p",null,"Execute a step if the branch is ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"develop"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  branch: [master, develop]\n")),(0,r.kt)("p",null,"Execute a step if the branch starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix/*"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  branch: prefix/*\n")),(0,r.kt)("p",null,"Execute a step using custom include and exclude logic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  branch:\n    include: [ master, release/* ]\n    exclude: [ release/1.0.0, release/1.1.* ]\n")),(0,r.kt)("h2",{id:"event"},(0,r.kt)("inlineCode",{parentName:"h2"},"event")),(0,r.kt)("p",null,"Execute a step if the build event is a ",(0,r.kt)("inlineCode",{parentName:"p"},"tag"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  event: tag\n")),(0,r.kt)("p",null,"Execute a step if the build event is a ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," created from the specified branch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  event: tag\n+ branch: master\n")),(0,r.kt)("p",null,"Execute a step for all non-pull request events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  event: [push, tag, deployment]\n")),(0,r.kt)("p",null,"Execute a step for all build events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  event: [push, pull_request, tag, deployment]\n")),(0,r.kt)("h2",{id:"tag"},(0,r.kt)("inlineCode",{parentName:"h2"},"tag")),(0,r.kt)("p",null,"Execute a step if the tag name starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"release"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  tag: release*\n")),(0,r.kt)("h2",{id:"status"},(0,r.kt)("inlineCode",{parentName:"h2"},"status")),(0,r.kt)("p",null,"There are use cases for executing pipeline steps on failure, such as sending notifications for failed pipelines. Use the status constraint to execute steps even when the pipeline fails:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  slack:\n    image: plugins/slack\n    settings:\n      channel: dev\n+   when:\n+     status: [ success, failure ]\n")),(0,r.kt)("h2",{id:"platform"},(0,r.kt)("inlineCode",{parentName:"h2"},"platform")),(0,r.kt)("p",null,"Execute a step for a specific platform:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  platform: linux/amd64\n")),(0,r.kt)("p",null,"Execute a step for a specific platform using wildcards:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  platform:  [ linux/*, windows/amd64 ]\n")),(0,r.kt)("h2",{id:"environment"},(0,r.kt)("inlineCode",{parentName:"h2"},"environment")),(0,r.kt)("p",null,"Execute a step for deployment events matching the target deployment environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  environment: production\n  event: deployment\n")),(0,r.kt)("h2",{id:"matrix"},(0,r.kt)("inlineCode",{parentName:"h2"},"matrix")),(0,r.kt)("p",null,"Execute a step for a single matrix permutation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  matrix:\n    GO_VERSION: 1.5\n    REDIS_VERSION: 2.8\n")),(0,r.kt)("h2",{id:"instance"},(0,r.kt)("inlineCode",{parentName:"h2"},"instance")),(0,r.kt)("p",null,"Execute a step only on a certain Woodpecker instance matching the specified hostname:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  instance: stage.woodpecker.company.com\n")),(0,r.kt)("h2",{id:"path"},(0,r.kt)("inlineCode",{parentName:"h2"},"path")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This feature is currently only available for GitHub, GitLab and Gitea.\nPull requests aren't supported by gitea at the moment (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-gitea/gitea/pull/18228"},"go-gitea/gitea#18228"),").",(0,r.kt)("br",{parentName:"p"}),"\n","Path conditions are ignored for tag events.")),(0,r.kt)("p",null,"Execute a step only on a pipeline with certain files being changed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'when:\n  path: "src/*"\n')),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bmatcuk/doublestar#patterns"},"glob patterns")," to match the changed files and specify if the step should run if a file matching that pattern has been changed ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," or if some files have ",(0,r.kt)("strong",{parentName:"p"},"not")," been changed ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  path:\n    include: [ '.woodpecker/*.yml', '*.ini' ]\n    exclude: [ '*.md', 'docs/**' ]\n    ignore_message: \"[ALL]\"\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Hint: ")," Passing a defined ignore-message like ",(0,r.kt)("inlineCode",{parentName:"p"},"[ALL]")," inside the commit message will ignore all path conditions."))}m.isMDXComponent=!0}}]);