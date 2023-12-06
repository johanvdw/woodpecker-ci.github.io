/*! For license information please see b4c09b42.adf95d4d.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4233],{25752:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=o(11527),r=o(46224);const a={title:"It's time for some changes - Woodpecker 2.0.0",description:"Introducing Woodpecker 2.0.0 with more than 350 changes",slug:"release-v200",authors:[{name:"Anbraten",title:"Maintainer of Woodpecker",url:"https://github.com/anbraten",image_url:"https://github.com/anbraten.png"},{name:"qwerty287",title:"Maintainer of Woodpecker",url:"https://github.com/qwerty287",image_url:"https://github.com/qwerty287.png"}],tags:["release","major"],hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/release-v200",source:"@site/blog/2023-11-09-release-v2.0.0/index.md",title:"It's time for some changes - Woodpecker 2.0.0",description:"Introducing Woodpecker 2.0.0 with more than 350 changes",date:"2023-11-09T00:00:00.000Z",formattedDate:"November 9, 2023",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"major",permalink:"/blog/tags/major"}],readingTime:3.53,hasTruncateMarker:!0,authors:[{name:"Anbraten",title:"Maintainer of Woodpecker",url:"https://github.com/anbraten",image_url:"https://github.com/anbraten.png",imageURL:"https://github.com/anbraten.png"},{name:"qwerty287",title:"Maintainer of Woodpecker",url:"https://github.com/qwerty287",image_url:"https://github.com/qwerty287.png",imageURL:"https://github.com/qwerty287.png"}],frontMatter:{title:"It's time for some changes - Woodpecker 2.0.0",description:"Introducing Woodpecker 2.0.0 with more than 350 changes",slug:"release-v200",authors:[{name:"Anbraten",title:"Maintainer of Woodpecker",url:"https://github.com/anbraten",image_url:"https://github.com/anbraten.png",imageURL:"https://github.com/anbraten.png"},{name:"qwerty287",title:"Maintainer of Woodpecker",url:"https://github.com/qwerty287",image_url:"https://github.com/qwerty287.png",imageURL:"https://github.com/qwerty287.png"}],tags:["release","major"],hide_table_of_contents:!1},unlisted:!1,nextItem:{title:"Presenting Woodpecker 1.0.0",permalink:"/blog/release-v100"}},l={authorsImageUrls:[void 0,void 0]},d=[{value:"How we plan to handle releases in the future",id:"how-we-plan-to-handle-releases-in-the-future",level:2},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"Renamed some api routes",id:"renamed-some-api-routes",level:3},{value:"Dropped deprecated environment variables and CLI commands",id:"dropped-deprecated-environment-variables-and-cli-commands",level:3},{value:"Removed SSH backend",id:"removed-ssh-backend",level:3},{value:"Deprecated <code>platform</code> filter",id:"deprecated-platform-filter",level:3},{value:"Update Docker to v24",id:"update-docker-to-v24",level:3},{value:"Removed plugin-only option from secrets",id:"removed-plugin-only-option-from-secrets",level:3},{value:"Migration notes",id:"migration-notes",level:2},{value:"New features",id:"new-features",level:2},{value:"Config warnings and errors in the UI",id:"config-warnings-and-errors-in-the-ui",level:3},{value:"Repository and organization overview for admins",id:"repository-and-organization-overview-for-admins",level:3},{value:"Support for user secrets",id:"support-for-user-secrets",level:3},{value:"Bitbucket cloud support for multi-workflows",id:"bitbucket-cloud-support-for-multi-workflows",level:3},{value:"Full support for Kubernetes backend",id:"full-support-for-kubernetes-backend",level:3},{value:"Auto theme",id:"auto-theme",level:3},{value:"Update notification",id:"update-notification",level:3},{value:"Changelog",id:"changelog",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We are proud to present you Woodpecker v2.0.0 with more than 350 changes from our fabulous community. This release includes a lot of new features, improvements and some breaking changes which most of you probably already tested using the ",(0,n.jsx)(t.code,{children:"next"})," tag or the RC version."]}),"\n",(0,n.jsx)(t.h2,{id:"how-we-plan-to-handle-releases-in-the-future",children:"How we plan to handle releases in the future"}),"\n",(0,n.jsxs)(t.p,{children:["In the future, there won't be backports anymore as they require quite an amount of maintenance. Instead, we'll release our current state of the ",(0,n.jsx)(t.code,{children:"main"})," branch with the correct version (according to semver) every few weeks. Of course, critical bug and security fixes are released as soon as possible. To not release new major version too often, we'll try to hold back breaking changes pull-request for a longer time and release them all together in a new major version."]}),"\n",(0,n.jsx)(t.h2,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,n.jsx)(t.h3,{id:"renamed-some-api-routes",children:"Renamed some api routes"}),"\n",(0,n.jsxs)(t.p,{children:["We renamed some API routes to be more consistent. So we suggest admins to update all repository webhooks by clicking on the newly added ",(0,n.jsx)(t.code,{children:"Repair all repositories"})," button in the admin settings."]}),"\n",(0,n.jsx)(t.h3,{id:"dropped-deprecated-environment-variables-and-cli-commands",children:"Dropped deprecated environment variables and CLI commands"}),"\n",(0,n.jsxs)(t.p,{children:["For v1.0.0, we deprecated a bunch of old environment variables like ",(0,n.jsx)(t.code,{children:"CI_BUILD_*"}),". These variables were removed in this version, you therefore have to use the new ones.\nAlso, the deprecated ",(0,n.jsx)(t.code,{children:"build"})," command of the CLI was removed. Use ",(0,n.jsx)(t.code,{children:"pipeline"})," instead."]}),"\n",(0,n.jsx)(t.h3,{id:"removed-ssh-backend",children:"Removed SSH backend"}),"\n",(0,n.jsxs)(t.p,{children:["Due to various issues with the SSH backend we decided to remove it.\nAs an alternative, you can install an agent running the local backend directly on the remote machine or you can simply execute ",(0,n.jsx)(t.code,{children:"ssh"})," commands connecting to the remote server in your pipeline."]}),"\n",(0,n.jsxs)(t.h3,{id:"deprecated-platform-filter",children:["Deprecated ",(0,n.jsx)(t.code,{children:"platform"})," filter"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"platform"})," filter has been removed. Use the more advanced labels instead (",(0,n.jsx)(t.a,{href:"./docs/usage/workflow-syntax#filter-by-platform",children:"read more"}),")."]}),"\n",(0,n.jsx)(t.h3,{id:"update-docker-to-v24",children:"Update Docker to v24"}),"\n",(0,n.jsx)(t.p,{children:"We updated Docker to v24 as of some security patches. If you use an older version of Docker, you might need to upgrade it."}),"\n",(0,n.jsx)(t.h3,{id:"removed-plugin-only-option-from-secrets",children:"Removed plugin-only option from secrets"}),"\n",(0,n.jsx)(t.p,{children:"Security is pretty important to us and we want to make sure that no one can steal your secrets. Therefore, we decided to remove the plugin-only option from secrets and instead, if you define an image filter, it will be automatically only available to plugins using the defined image names."}),"\n",(0,n.jsx)(t.h2,{id:"migration-notes",children:"Migration notes"}),"\n",(0,n.jsxs)(t.p,{children:["There have been a few more breaking changes. ",(0,n.jsx)(t.a,{href:"../docs/migrations#200",children:"Read more about what you need to do when upgrading!"})]}),"\n",(0,n.jsx)(t.h2,{id:"new-features",children:"New features"}),"\n",(0,n.jsx)(t.p,{children:"But that's enough about breaking changes. Let's talk about the new features!"}),"\n",(0,n.jsx)(t.h3,{id:"config-warnings-and-errors-in-the-ui",children:"Config warnings and errors in the UI"}),"\n",(0,n.jsx)(t.p,{children:"You ever wondered why a secret was not working and after hours of debugging you found out that you misspelled the secret name? Or you used a wrong key in your YAML config? Woodpecker now shows errors and linter warnings directly in it's UI, notifying you about missing secrets, incorrect configuration or deprecated settings!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Image of warnings and errors in the UI",src:o(40868).Z+"",width:"2256",height:"587"})}),"\n",(0,n.jsx)(t.h3,{id:"repository-and-organization-overview-for-admins",children:"Repository and organization overview for admins"}),"\n",(0,n.jsx)(t.p,{children:"Admins now get an overview over all repositories and organizations registered on the server, allowing them to perform common actions like deleting directly from the admin dashboard."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Image of repos overview",src:o(82690).Z+"",width:"1029",height:"526"})}),"\n",(0,n.jsx)(t.h3,{id:"support-for-user-secrets",children:"Support for user secrets"}),"\n",(0,n.jsx)(t.p,{children:"It is now possible to add secrets for all repos owned by yourself, similar to organization and global secrets."}),"\n",(0,n.jsx)(t.h3,{id:"bitbucket-cloud-support-for-multi-workflows",children:"Bitbucket cloud support for multi-workflows"}),"\n",(0,n.jsx)(t.p,{children:"We enhanced support for Bitbucket, allowing you to use multiple workflows just as you probably know from all other forges already."}),"\n",(0,n.jsx)(t.h3,{id:"full-support-for-kubernetes-backend",children:"Full support for Kubernetes backend"}),"\n",(0,n.jsx)(t.p,{children:"Many of you already used it extensively in the past, but now we can finally call the Kubernetes backend ready for production use. Supporting all major features and even quite some Kubernetes specific options."}),"\n",(0,n.jsx)(t.h3,{id:"auto-theme",children:"Auto theme"}),"\n",(0,n.jsx)(t.p,{children:"The UI now supports automatically adapting the theme to your browser config, so no more light mode in the middle of the night!"}),"\n",(0,n.jsx)(t.h3,{id:"update-notification",children:"Update notification"}),"\n",(0,n.jsx)(t.p,{children:"Updates are awesome as they bring new features and bug fixes most of the time, but sometimes there are also important security fixes which should be installed as soon as possible. To not miss any of them, we added a notification to the UI for admins if there's a new update available."}),"\n",(0,n.jsx)(t.h2,{id:"changelog",children:"Changelog"}),"\n",(0,n.jsxs)(t.p,{children:["The full changelog can be viewed in our project source folder at ",(0,n.jsx)(t.a,{href:"https://github.com/woodpecker-ci/woodpecker/blob/v2.0.0/CHANGELOG.md",children:"CHANGELOG.md"})]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},3354:(e,t,o)=>{var n=o(50959),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var n,a={},d=null,c=null;for(n in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:r,type:e,key:d,ref:c,props:a,_owner:s.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},11527:(e,t,o)=>{e.exports=o(3354)},82690:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/admin_repos-b8c7217eecff756015577c24b9f4acad.png"},40868:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/linter_warnings_errors-d67e4737392ab8575a3f5b2e0a398a8b.png"},46224:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>i});var n=o(50959);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);