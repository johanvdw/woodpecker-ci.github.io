"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1622],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?o.createElement(y,a(a({ref:t},p),{},{components:r})):o.createElement(y,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>b,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var o=r(49613),n=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&p(e,r,t[r]);return e};const d={},f="Project settings",y={unversionedId:"usage/project-settings",id:"version-0.15/usage/project-settings",title:"Project settings",description:"As the owner of a project in Woodpecker you can change project related settings via the web interface.",source:"@site/versioned_docs/version-0.15/20-usage/71-project-settings.md",sourceDirName:"20-usage",slug:"/usage/project-settings",permalink:"/docs/0.15/usage/project-settings",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/20-usage/71-project-settings.md",tags:[],version:"0.15",sidebarPosition:71,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Volumes",permalink:"/docs/0.15/usage/volumes"},next:{title:"Status Badges",permalink:"/docs/0.15/usage/badges"}},g={},h=[{value:"Pipeline path",id:"pipeline-path",level:2},{value:"Repository hooks",id:"repository-hooks",level:2},{value:"Project settings",id:"project-settings-1",level:2},{value:"Protected",id:"protected",level:3},{value:"Trusted",id:"trusted",level:3},{value:"Project visibility",id:"project-visibility",level:2},{value:"Timeout",id:"timeout",level:2}],m={toc:h};function b(e){var t,n=e,{components:p}=n,d=((e,t)=>{var r={};for(var o in e)l.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&c.call(e,o)&&(r[o]=e[o]);return r})(n,["components"]);return(0,o.kt)("wrapper",(t=u(u({},m),d),i(t,a({components:p,mdxType:"MDXLayout"}))),(0,o.kt)("h1",u({},{id:"project-settings"}),"Project settings"),(0,o.kt)("p",null,"As the owner of a project in Woodpecker you can change project related settings via the web interface."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"project settings",src:r(40960).Z,width:"933",height:"759"})),(0,o.kt)("h2",u({},{id:"pipeline-path"}),"Pipeline path"),(0,o.kt)("p",null,"The path to the pipeline config file or folder. By default it is left empty which will use the following configuration resolution ",(0,o.kt)("inlineCode",{parentName:"p"},".woodpecker/*.yml")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},".woodpecker.yml")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},".drone.yml"),". If you set a custom path Woodpecker tries to load your configuration or fails if no configuration could be found at the specified location. To use a ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/0.15/usage/multi-pipeline"}),"multi pipeline")," you have to change it to a folder path ending with a ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," like ",(0,o.kt)("inlineCode",{parentName:"p"},".woodpecker/"),"."),(0,o.kt)("h2",u({},{id:"repository-hooks"}),"Repository hooks"),(0,o.kt)("p",null,"Your Version-Control-System will notify Woodpecker about events via webhooks. If you want your pipeline to only run on specific webhooks, you can check them with this setting."),(0,o.kt)("h2",u({},{id:"project-settings-1"}),"Project settings"),(0,o.kt)("h3",u({},{id:"protected"}),"Protected"),(0,o.kt)("p",null,"Every build initiated by a user (not including the project owner) needs to be approved by the owner before being executed. This can be used if your repository is public to protect the pipeline configuration from running unauthorized changes on third-party pull requests."),(0,o.kt)("h3",u({},{id:"trusted"}),"Trusted"),(0,o.kt)("p",null,"If you set your project to trusted, a pipeline step and by this the underlying containers gets access to escalated capabilities like mounting volumes."),(0,o.kt)("h2",u({},{id:"project-visibility"}),"Project visibility"),(0,o.kt)("p",null,"You can change the visibility of your project by this setting. If a user has access to a project he can see all builds and their logs and artifacts. Settings, Secrets and Registries can only be accessed by owners."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Public")," Every user can see your project without being logged in."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Private")," Only authenticated users of the Woodpecker instance can see this project."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Internal")," Only you and other owners of the repository can see this project.")),(0,o.kt)("h2",u({},{id:"timeout"}),"Timeout"),(0,o.kt)("p",null,"After this timeout a pipeline has to finish or will be treated as timed out."))}b.isMDXComponent=!0},40960:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/project-settings-cac7b98f9da71f12d7b3f01389e4758c.png"}}]);