"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[729],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5416:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var i=n(3117),o=n(102),r=(n(7294),n(3905)),a=["components"],s={},c="Project settings",l={unversionedId:"usage/project-settings",id:"usage/project-settings",title:"Project settings",description:"As the owner of a project in Woodpecker you can change project related settings via the web interface.",source:"@site/docs/20-usage/71-project-settings.md",sourceDirName:"20-usage",slug:"/usage/project-settings",permalink:"/docs/usage/project-settings",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/71-project-settings.md",tags:[],version:"current",sidebarPosition:71,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Volumes",permalink:"/docs/usage/volumes"},next:{title:"Status Badges",permalink:"/docs/usage/badges"}},p={},u=[{value:"Pipeline path",id:"pipeline-path",level:2},{value:"Repository hooks",id:"repository-hooks",level:2},{value:"Project settings",id:"project-settings-1",level:2},{value:"Protected",id:"protected",level:3},{value:"Trusted",id:"trusted",level:3},{value:"Project visibility",id:"project-visibility",level:2},{value:"Timeout",id:"timeout",level:2},{value:"Cancel previous pipelines",id:"cancel-previous-pipelines",level:2}],d={toc:u};function h(e){var t=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"project-settings"},"Project settings"),(0,r.kt)("p",null,"As the owner of a project in Woodpecker you can change project related settings via the web interface."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"project settings",src:n(7700).Z,width:"933",height:"759"})),(0,r.kt)("h2",{id:"pipeline-path"},"Pipeline path"),(0,r.kt)("p",null,"The path to the pipeline config file or folder. By default it is left empty which will use the following configuration resolution ",(0,r.kt)("inlineCode",{parentName:"p"},".woodpecker/*.yml")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},".woodpecker.yml")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},".drone.yml"),". If you set a custom path Woodpecker tries to load your configuration or fails if no configuration could be found at the specified location. To use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/usage/multi-pipeline"},"multi pipeline")," you have to change it to a folder path ending with a ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," like ",(0,r.kt)("inlineCode",{parentName:"p"},".woodpecker/"),"."),(0,r.kt)("h2",{id:"repository-hooks"},"Repository hooks"),(0,r.kt)("p",null,"Your Version-Control-System will notify Woodpecker about events via webhooks. If you want your pipeline to only run on specific webhooks, you can check them with this setting."),(0,r.kt)("h2",{id:"project-settings-1"},"Project settings"),(0,r.kt)("h3",{id:"protected"},"Protected"),(0,r.kt)("p",null,"Every build initiated by a user (not including the project owner) needs to be approved by the owner before being executed. This can be used if your repository is public to protect the pipeline configuration from running unauthorized changes on third-party pull requests."),(0,r.kt)("h3",{id:"trusted"},"Trusted"),(0,r.kt)("p",null,"If you set your project to trusted, a pipeline step and by this the underlying containers gets access to escalated capabilities like mounting volumes."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Only server admins can set this option. If you are not a server admin this option won't be shown in your project settings."))),(0,r.kt)("h2",{id:"project-visibility"},"Project visibility"),(0,r.kt)("p",null,"You can change the visibility of your project by this setting. If a user has access to a project he can see all builds and their logs and artifacts. Settings, Secrets and Registries can only be accessed by owners."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Public")," Every user can see your project without being logged in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Private")," Only authenticated users of the Woodpecker instance can see this project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Internal")," Only you and other owners of the repository can see this project.")),(0,r.kt)("h2",{id:"timeout"},"Timeout"),(0,r.kt)("p",null,"After this timeout a pipeline has to finish or will be treated as timed out."),(0,r.kt)("h2",{id:"cancel-previous-pipelines"},"Cancel previous pipelines"),(0,r.kt)("p",null,"By enabling this option for a pipeline event previous pipelines of the same event and context will be canceled before starting the newly triggered one."))}h.isMDXComponent=!0},7700:function(e,t,n){t.Z=n.p+"assets/images/project-settings-cac7b98f9da71f12d7b3f01389e4758c.png"}}]);