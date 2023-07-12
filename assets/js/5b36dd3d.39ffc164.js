"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[248],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>f,toc:()=>k});var r=n(49613),a=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={},m="Secrets",f={unversionedId:"usage/secrets",id:"usage/secrets",title:"Secrets",description:"Woodpecker provides the ability to store named parameters external to the YAML configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime.",source:"@site/docs/20-usage/40-secrets.md",sourceDirName:"20-usage",slug:"/usage/secrets",permalink:"/docs/next/usage/secrets",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/40-secrets.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced YAML syntax",permalink:"/docs/next/usage/advanced-yaml-syntax"},next:{title:"Registries",permalink:"/docs/next/usage/registries"}},g={},k=[{value:"Adding Secrets",id:"adding-secrets",level:2},{value:"Alternate Names",id:"alternate-names",level:2},{value:"Pull Requests",id:"pull-requests",level:2},{value:"Image filter",id:"image-filter",level:2},{value:"Examples",id:"examples",level:2}],y={toc:k};function h(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),p),s(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"secrets"}),"Secrets"),(0,r.kt)("p",null,"Woodpecker provides the ability to store named parameters external to the YAML configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime."),(0,r.kt)("p",null,"Secrets are exposed to your pipeline steps and plugins as uppercase environment variables and can therefore be referenced in the commands section of your pipeline."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"steps:\n  docker:\n    image: docker\n    commands:\n+     - echo $DOCKER_USERNAME\n+     - echo $DOCKER_PASSWORD\n+   secrets: [ docker_username, docker_password ]\n")),(0,r.kt)("p",null,"Alternatively, you can get a ",(0,r.kt)("inlineCode",{parentName:"p"},"setting")," from secrets using the ",(0,r.kt)("inlineCode",{parentName:"p"},"from_secret")," syntax.\nIn this example, the secret named ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_token")," would be passed to the pipeline as ",(0,r.kt)("inlineCode",{parentName:"p"},"PLUGIN_TOKEN"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"from_secret")," syntax only works with the newer ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," block."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"steps:\n  docker:\n    image: my-plugin\n    settings:\n+     token:\n+       from_secret: secret_token\n")),(0,r.kt)("p",null,"Please note parameter expressions are subject to pre-processing. When using secrets in parameter expressions they should be escaped."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"steps:\n  docker:\n    image: docker\n    commands:\n-     - echo ${DOCKER_USERNAME}\n-     - echo ${DOCKER_PASSWORD}\n+     - echo $${DOCKER_USERNAME}\n+     - echo $${DOCKER_PASSWORD}\n    secrets: [ docker_username, docker_password ]\n")),(0,r.kt)("h2",u({},{id:"adding-secrets"}),"Adding Secrets"),(0,r.kt)("p",null,"Secrets are added to the Woodpecker secret store on the UI or with the CLI."),(0,r.kt)("h2",u({},{id:"alternate-names"}),"Alternate Names"),(0,r.kt)("p",null,"There may be scenarios where you are required to store secrets using alternate names. You can map the alternate secret name to the expected name using the below syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"steps:\n  docker:\n    image: plugins/docker\n    repo: octocat/hello-world\n    tags: latest\n+   secrets:\n+     - source: docker_prod_password\n+       target: docker_password\n")),(0,r.kt)("h2",u({},{id:"pull-requests"}),"Pull Requests"),(0,r.kt)("p",null,"Secrets are not exposed to pull requests by default. You can override this behavior by creating the secret and enabling the ",(0,r.kt)("inlineCode",{parentName:"p"},"pull_request")," event type."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -image plugins/docker \\\n+ -event pull_request \\\n+ -event push \\\n+ -event tag \\\n  -name docker_username \\\n  -value <value>\n")),(0,r.kt)("p",null,"Please be careful when exposing secrets to pull requests. If your repository is open source and accepts pull requests your secrets are not safe. A bad actor can submit a malicious pull request that exposes your secrets."),(0,r.kt)("h2",u({},{id:"image-filter"}),"Image filter"),(0,r.kt)("p",null,"To prevent abusing your secrets with malicious pull requests, you can limit a secret to a list of images. They are not available to any other container. In addition, you can make the secret available only for plugins (steps without user-defined commands)."),(0,r.kt)("admonition",u({},{type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},'If you enable the option "Only available for plugins", always set an image filter too. Otherwise, the secret can be accessed by a very simple self-developed plugin and is thus ',(0,r.kt)("em",{parentName:"p"},"not")," safe.\nIf you only set an image filter, you could still access the secret using the same image and by specifying a command that prints it.")),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Create the secret using default settings. The secret will be available to all images in your pipeline, and will be available to all push, tag, and deployment events (not pull request events)."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -name aws_access_key_id \\\n  -value <value>\n")),(0,r.kt)("p",null,"Create the secret and limit to a single image:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n+ -image plugins/s3 \\\n  -name aws_access_key_id \\\n  -value <value>\n")),(0,r.kt)("p",null,"Create the secrets and limit to a set of images:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n+ -image plugins/s3 \\\n+ -image peloton/woodpecker-ecs \\\n  -name aws_access_key_id \\\n  -value <value>\n")),(0,r.kt)("p",null,"Create the secret and enable for multiple hook events:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -image plugins/s3 \\\n+ -event pull_request \\\n+ -event push \\\n+ -event tag \\\n  -name aws_access_key_id \\\n  -value <value>\n")),(0,r.kt)("p",null,"Loading secrets from file using curl ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," syntax. This is the recommended approach for loading secrets from file to preserve newlines:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -name ssh_key \\\n+ -value @/root/ssh/id_rsa\n")))}h.isMDXComponent=!0}}]);