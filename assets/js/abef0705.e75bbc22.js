"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8319],{17942:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(50959);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>g,default:()=>x,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var r=t(17942),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&l(e,t,n[t]);if(c)for(var t of c(n))p.call(n,t)&&l(e,t,n[t]);return e},d=(e,n)=>o(e,i(n)),f=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const m={},g="External Configuration API",h={unversionedId:"administration/external-configuration-api",id:"administration/external-configuration-api",title:"External Configuration API",description:"To provide additional management and preprocessing capabilities for pipeline configurations Woodpecker supports an HTTP API which can be enabled to call an external config service.",source:"@site/docs/30-administration/100-external-configuration-api.md",sourceDirName:"30-administration",slug:"/administration/external-configuration-api",permalink:"/docs/next/administration/external-configuration-api",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/30-administration/100-external-configuration-api.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prometheus",permalink:"/docs/next/administration/prometheus"},next:{title:"CLI",permalink:"/docs/next/cli"}},y={},b=[{value:"Config",id:"config",level:2},{value:"Example request made by Woodpecker",id:"example-request-made-by-woodpecker",level:3},{value:"Example response structure",id:"example-response-structure",level:3}],v={toc:b},k="wrapper";function x(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.kt)(k,d(u(u({},v),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"external-configuration-api"}),"External Configuration API"),(0,r.kt)("p",null,"To provide additional management and preprocessing capabilities for pipeline configurations Woodpecker supports an HTTP API which can be enabled to call an external config service.\nBefore the run or restart of any pipeline Woodpecker will make a POST request to an external HTTP API sending the current repository, build information and all current config files retrieved from the repository. The external API can then send back new pipeline configurations that will be used immediately or respond with ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP 204")," to tell the system to use the existing configuration."),(0,r.kt)("p",null,"Every request sent by Woodpecker is signed using a ",(0,r.kt)("a",u({parentName:"p"},{href:"https://datatracker.ietf.org/doc/html/draft-cavage-http-signatures"}),"http-signature")," by a private key (ed25519) generated on the first start of the Woodpecker server. You can get the public key for the verification of the http-signature from ",(0,r.kt)("inlineCode",{parentName:"p"},"http(s)://your-woodpecker-server/api/signature/public-key"),"."),(0,r.kt)("p",null,"A simplistic example configuration service can be found here: ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/woodpecker-ci/example-config-service"}),"https://github.com/woodpecker-ci/example-config-service")),(0,r.kt)("admonition",u({},{type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},"You need to trust the external config service as it is getting secret information about the repository and pipeline and has the ability to change pipeline configs that could run malicious tasks.")),(0,r.kt)("h2",u({},{id:"config"}),"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-shell"}),"# Server\n# ...\nWOODPECKER_CONFIG_SERVICE_ENDPOINT=https://example.com/ciconfig\n")),(0,r.kt)("h3",u({},{id:"example-request-made-by-woodpecker"}),"Example request made by Woodpecker"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "repo": {\n    "id": 100,\n    "uid": "",\n    "user_id": 0,\n    "namespace": "",\n    "name": "woodpecker-testpipe",\n    "slug": "",\n    "scm": "git",\n    "git_http_url": "",\n    "git_ssh_url": "",\n    "link": "",\n    "default_branch": "",\n    "private": true,\n    "visibility": "private",\n    "active": true,\n    "config": "",\n    "trusted": false,\n    "protected": false,\n    "ignore_forks": false,\n    "ignore_pulls": false,\n    "cancel_pulls": false,\n    "timeout": 60,\n    "counter": 0,\n    "synced": 0,\n    "created": 0,\n    "updated": 0,\n    "version": 0\n  },\n  "pipeline": {\n    "author": "myUser",\n    "author_avatar": "https://myforge.com/avatars/d6b3f7787a685fcdf2a44e2c685c7e03",\n    "author_email": "my@email.com",\n    "branch": "main",\n    "changed_files": [\n      "somefilename.txt"\n    ],\n    "commit": "2fff90f8d288a4640e90f05049fe30e61a14fd50",\n    "created_at": 0,\n    "deploy_to": "",\n    "enqueued_at": 0,\n    "error": "",\n    "event": "push",\n    "finished_at": 0,\n    "id": 0,\n    "link_url": "https://myforge.com/myUser/woodpecker-testpipe/commit/2fff90f8d288a4640e90f05049fe30e61a14fd50",\n    "message": "test old config\\n",\n    "number": 0,\n    "parent": 0,\n    "ref": "refs/heads/main",\n    "refspec": "",\n    "clone_url": "",\n    "reviewed_at": 0,\n    "reviewed_by": "",\n    "sender": "myUser",\n    "signed": false,\n    "started_at": 0,\n    "status": "",\n    "timestamp": 1645962783,\n    "title": "",\n    "updated_at": 0,\n    "verified": false\n  },\n  "configs": [\n    {\n      "name": ".woodpecker.yml",\n      "data": "steps:\\n  backend:\\n    image: alpine\\n    commands:\\n      - echo \\"Hello there from Repo (.woodpecker.yml)\\"\\n"\n    }\n  ]\n}\n')),(0,r.kt)("h3",u({},{id:"example-response-structure"}),"Example response structure"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "configs": [\n    {\n      "name": "central-override",\n      "data": "steps:\\n  backend:\\n    image: alpine\\n    commands:\\n      - echo \\"Hello there from ConfigAPI\\"\\n"\n    }\n  ]\n}\n')))}x.isMDXComponent=!0}}]);