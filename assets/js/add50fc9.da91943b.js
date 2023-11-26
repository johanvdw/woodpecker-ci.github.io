/*! For license information please see add50fc9.da91943b.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3328],{29959:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=i(11527),t=i(63883);const r={},s="Gitea / Forgejo",c={id:"administration/forges/gitea",title:"Gitea / Forgejo",description:'Woodpecker comes with built-in support for Gitea and the "soft" fork Forgejo. To enable Gitea you should configure the Woodpecker container using the following environment variables:',source:"@site/versioned_docs/version-2.0/30-administration/11-forges/30-gitea.md",sourceDirName:"30-administration/11-forges",slug:"/administration/forges/gitea",permalink:"/docs/administration/forges/gitea",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.0/30-administration/11-forges/30-gitea.md",tags:[],version:"2.0",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/docs/administration/forges/github"},next:{title:"GitLab",permalink:"/docs/administration/forges/gitlab"}},a={},d=[{value:"Gitea on the same host",id:"gitea-on-the-same-host",level:2},{value:"Registration",id:"registration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_GITEA</code>",id:"woodpecker_gitea",level:3},{value:"<code>WOODPECKER_GITEA_URL</code>",id:"woodpecker_gitea_url",level:3},{value:"<code>WOODPECKER_GITEA_CLIENT</code>",id:"woodpecker_gitea_client",level:3},{value:"<code>WOODPECKER_GITEA_CLIENT_FILE</code>",id:"woodpecker_gitea_client_file",level:3},{value:"<code>WOODPECKER_GITEA_SECRET</code>",id:"woodpecker_gitea_secret",level:3},{value:"<code>WOODPECKER_GITEA_SECRET_FILE</code>",id:"woodpecker_gitea_secret_file",level:3},{value:"<code>WOODPECKER_GITEA_SKIP_VERIFY</code>",id:"woodpecker_gitea_skip_verify",level:3}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"gitea--forgejo",children:"Gitea / Forgejo"}),"\n",(0,n.jsx)(o.p,{children:'Woodpecker comes with built-in support for Gitea and the "soft" fork Forgejo. To enable Gitea you should configure the Woodpecker container using the following environment variables:'}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_GITEA=true\n+     - WOODPECKER_GITEA_URL=${WOODPECKER_GITEA_URL}\n+     - WOODPECKER_GITEA_CLIENT=${WOODPECKER_GITEA_CLIENT}\n+     - WOODPECKER_GITEA_SECRET=${WOODPECKER_GITEA_SECRET}\n\n  woodpecker-agent:\n    [...]\n"})}),"\n",(0,n.jsx)(o.h2,{id:"gitea-on-the-same-host",children:"Gitea on the same host"}),"\n",(0,n.jsxs)(o.p,{children:["If you have Gitea also running on the same host within a container, make sure the agent does have access to it.\nThe agent tries to clone using the URL which Gitea reports through its API. For simplified connectivity, you should add the woodpecker agent to the same docker network as Gitea is in.\nOtherwise, the communication should go via the ",(0,n.jsx)(o.code,{children:"docker0"})," gateway (usually 172.17.0.1)."]}),"\n",(0,n.jsxs)(o.p,{children:["To configure the Docker network if the network's name is ",(0,n.jsx)(o.code,{children:"gitea"}),", configure it like this:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  [...]\n  woodpecker-agent:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_BACKEND_DOCKER_NETWORK=gitea\n"})}),"\n",(0,n.jsx)(o.h2,{id:"registration",children:"Registration"}),"\n",(0,n.jsxs)(o.p,{children:["Register your application with Gitea to create your client id and secret. You can find the OAuth applications settings of Gitea at ",(0,n.jsx)(o.code,{children:"https://gitea.<host>/user/settings/"}),". It is very import the authorization callback URL matches your http(s) scheme and hostname exactly with ",(0,n.jsx)(o.code,{children:"https://<host>/authorize"})," as the path."]}),"\n",(0,n.jsxs)(o.p,{children:["If you run the Woodpecker CI server on the same host as the Gitea instance, you might also need to allow local connections in Gitea, since version ",(0,n.jsx)(o.code,{children:"v1.16"}),". Otherwise webhooks will fail. Add the following lines to your Gitea configuration (usually at ",(0,n.jsx)(o.code,{children:"/etc/gitea/conf/app.ini"}),")."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-ini",children:"...\n[webhook]\nALLOWED_HOST_LIST=external,loopback\n"})}),"\n",(0,n.jsxs)(o.p,{children:["For reference see ",(0,n.jsx)(o.a,{href:"https://docs.gitea.io/en-us/config-cheat-sheet/#webhook-webhook",children:"Configuration Cheat Sheet"}),"."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"gitea oauth setup",src:i(85560).Z+"",width:"1301",height:"875"})}),"\n",(0,n.jsx)(o.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(o.p,{children:"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."}),"\n",(0,n.jsx)(o.h3,{id:"woodpecker_gitea",children:(0,n.jsx)(o.code,{children:"WOODPECKER_GITEA"})}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["Default: ",(0,n.jsx)(o.code,{children:"false"})]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Enables the Gitea driver."}),"\n",(0,n.jsx)(o.h3,{id:"woodpecker_gitea_url",children:(0,n.jsx)(o.code,{children:"WOODPECKER_GITEA_URL"})}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["Default: ",(0,n.jsx)(o.code,{children:"https://try.gitea.io"})]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Configures the Gitea server address."}),"\n",(0,n.jsx)(o.h3,{id:"woodpecker_gitea_client",children:(0,n.jsx)(o.code,{children:"WOODPECKER_GITEA_CLIENT"})}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Default: empty"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Configures the Gitea OAuth client id. This is used to authorize access."}),"\n",(0,n.jsx)(o.h3,{id:"woodpecker_gitea_client_file",children:(0,n.jsx)(o.code,{children:"WOODPECKER_GITEA_CLIENT_FILE"})}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Default: empty"}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Read the value for ",(0,n.jsx)(o.code,{children:"WOODPECKER_GITEA_CLIENT"})," from the specified filepath"]}),"\n",(0,n.jsx)(o.h3,{id:"woodpecker_gitea_secret",children:(0,n.jsx)(o.code,{children:"WOODPECKER_GITEA_SECRET"})}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Default: empty"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Configures the Gitea OAuth client secret. This is used to authorize access."}),"\n",(0,n.jsx)(o.h3,{id:"woodpecker_gitea_secret_file",children:(0,n.jsx)(o.code,{children:"WOODPECKER_GITEA_SECRET_FILE"})}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Default: empty"}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Read the value for ",(0,n.jsx)(o.code,{children:"WOODPECKER_GITEA_SECRET"})," from the specified filepath"]}),"\n",(0,n.jsx)(o.h3,{id:"woodpecker_gitea_skip_verify",children:(0,n.jsx)(o.code,{children:"WOODPECKER_GITEA_SKIP_VERIFY"})}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["Default: ",(0,n.jsx)(o.code,{children:"false"})]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Configure if SSL verification should be skipped."})]})}function h(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3354:(e,o,i)=>{var n=i(50959),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,o,i){var n,r={},d=null,l=null;for(n in void 0!==i&&(d=""+i),void 0!==o.key&&(d=""+o.key),void 0!==o.ref&&(l=o.ref),o)s.call(o,n)&&!a.hasOwnProperty(n)&&(r[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===r[n]&&(r[n]=o[n]);return{$$typeof:t,type:e,key:d,ref:l,props:r,_owner:c.current}}o.Fragment=r,o.jsx=d,o.jsxs=d},11527:(e,o,i)=>{e.exports=i(3354)},85560:(e,o,i)=>{i.d(o,{Z:()=>n});const n=i.p+"assets/images/gitea_oauth-7f5d2bc8bfd0c02a227a328fff349af3.gif"},63883:(e,o,i)=>{i.d(o,{Z:()=>c,a:()=>s});var n=i(50959);const t={},r=n.createContext(t);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);