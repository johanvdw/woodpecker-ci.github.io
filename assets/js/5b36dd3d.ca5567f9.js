"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[248],{17942:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(50959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>w,frontMatter:()=>g,metadata:()=>k,toc:()=>y});var n=r(17942),a=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>s(e,o(t)),m=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const g={},f="Secrets",k={unversionedId:"usage/secrets",id:"usage/secrets",title:"Secrets",description:"Woodpecker provides the ability to store named parameters external to the YAML configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime.",source:"@site/docs/20-usage/40-secrets.md",sourceDirName:"20-usage",slug:"/usage/secrets",permalink:"/docs/next/usage/secrets",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/20-usage/40-secrets.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced YAML syntax",permalink:"/docs/next/usage/advanced-yaml-syntax"},next:{title:"Registries",permalink:"/docs/next/usage/registries"}},h={},y=[{value:"Usage",id:"usage",level:2},{value:"Adding Secrets",id:"adding-secrets",level:2},{value:"Alternate Names",id:"alternate-names",level:2},{value:"Pull Requests",id:"pull-requests",level:2},{value:"Image filter",id:"image-filter",level:2},{value:"CLI Examples",id:"cli-examples",level:2}],v={toc:y},b="wrapper";function w(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(b,u(d(d({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"secrets"}),"Secrets"),(0,n.kt)("p",null,"Woodpecker provides the ability to store named parameters external to the YAML configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime."),(0,n.kt)("p",null,"Secrets are exposed to your pipeline steps and plugins as uppercase environment variables and can therefore be referenced in the commands section of your pipeline."),(0,n.kt)("p",null,"Woodpecker provides three different levels to add secrets to your pipeline. The following list shows the priority of the different levels. If a secret is defined in multiple levels, will be used following this priorities: Repository secrets > Organization secrets > Global secrets."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Repository secrets"),": They are available to all pipelines of an repository."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Organization secrets"),": They are available to all pipelines of an organization."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Global secrets"),": Can be configured by an instance admin.\nThey are available to all pipelines of the ",(0,n.kt)("strong",{parentName:"li"},"whole")," Woodpecker instance and should therefore ",(0,n.kt)("strong",{parentName:"li"},"only")," be used for secrets that are allowed to be read by ",(0,n.kt)("strong",{parentName:"li"},"all")," users.")),(0,n.kt)("h2",d({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"steps:\n  docker:\n    image: docker\n    commands:\n+     - echo $DOCKER_USERNAME\n+     - echo $DOCKER_PASSWORD\n+   secrets: [ docker_username, docker_password ]\n")),(0,n.kt)("p",null,"Alternatively, you can get a ",(0,n.kt)("inlineCode",{parentName:"p"},"setting")," from secrets using the ",(0,n.kt)("inlineCode",{parentName:"p"},"from_secret")," syntax.\nIn this example, the secret named ",(0,n.kt)("inlineCode",{parentName:"p"},"secret_token")," would be passed to the pipeline as ",(0,n.kt)("inlineCode",{parentName:"p"},"PLUGIN_TOKEN"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:")," the ",(0,n.kt)("inlineCode",{parentName:"p"},"from_secret")," syntax only works with the newer ",(0,n.kt)("inlineCode",{parentName:"p"},"settings")," block."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"steps:\n  docker:\n    image: my-plugin\n    settings:\n+     token:\n+       from_secret: secret_token\n")),(0,n.kt)("p",null,"Please note parameter expressions are subject to pre-processing. When using secrets in parameter expressions they should be escaped."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"steps:\n  docker:\n    image: docker\n    commands:\n-     - echo ${DOCKER_USERNAME}\n-     - echo ${DOCKER_PASSWORD}\n+     - echo $${DOCKER_USERNAME}\n+     - echo $${DOCKER_PASSWORD}\n    secrets: [ docker_username, docker_password ]\n")),(0,n.kt)("h2",d({},{id:"adding-secrets"}),"Adding Secrets"),(0,n.kt)("p",null,"Secrets are added to the Woodpecker in the UI or with the CLI."),(0,n.kt)("h2",d({},{id:"alternate-names"}),"Alternate Names"),(0,n.kt)("p",null,"There may be scenarios where you are required to store secrets using alternate names. You can map the alternate secret name to the expected name using the below syntax:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"steps:\n  docker:\n    image: plugins/docker\n    repo: octocat/hello-world\n    tags: latest\n+   secrets:\n+     - source: docker_prod_password\n+       target: docker_password\n")),(0,n.kt)("h2",d({},{id:"pull-requests"}),"Pull Requests"),(0,n.kt)("p",null,"Secrets are not exposed to pull requests by default. You can override this behavior by creating the secret and enabling the ",(0,n.kt)("inlineCode",{parentName:"p"},"pull_request")," event type."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -image plugins/docker \\\n+ -event pull_request \\\n+ -event push \\\n+ -event tag \\\n  -name docker_username \\\n  -value <value>\n")),(0,n.kt)("p",null,"Please be careful when exposing secrets to pull requests. If your repository is open source and accepts pull requests your secrets are not safe. A bad actor can submit a malicious pull request that exposes your secrets."),(0,n.kt)("h2",d({},{id:"image-filter"}),"Image filter"),(0,n.kt)("p",null,"To prevent abusing your secrets with malicious pull requests, you can limit a secret to a list of images. They are not available to any other container. In addition, you can make the secret available only for plugins (steps without user-defined commands)."),(0,n.kt)("admonition",d({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},'If you enable the option "Only available for plugins", always set an image filter too. Otherwise, the secret can be accessed by a very simple self-developed plugin and is thus ',(0,n.kt)("em",{parentName:"p"},"not")," safe.\nIf you only set an image filter, you could still access the secret using the same image and by specifying a command that prints it.")),(0,n.kt)("h2",d({},{id:"cli-examples"}),"CLI Examples"),(0,n.kt)("p",null,"Create the secret using default settings. The secret will be available to all images in your pipeline, and will be available to all push, tag, and deployment events (not pull request events)."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -name aws_access_key_id \\\n  -value <value>\n")),(0,n.kt)("p",null,"Create the secret and limit to a single image:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n+ -image plugins/s3 \\\n  -name aws_access_key_id \\\n  -value <value>\n")),(0,n.kt)("p",null,"Create the secrets and limit to a set of images:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n+ -image plugins/s3 \\\n+ -image peloton/woodpecker-ecs \\\n  -name aws_access_key_id \\\n  -value <value>\n")),(0,n.kt)("p",null,"Create the secret and enable for multiple hook events:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -image plugins/s3 \\\n+ -event pull_request \\\n+ -event push \\\n+ -event tag \\\n  -name aws_access_key_id \\\n  -value <value>\n")),(0,n.kt)("p",null,"Loading secrets from file using curl ",(0,n.kt)("inlineCode",{parentName:"p"},"@")," syntax. This is the recommended approach for loading secrets from file to preserve newlines:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -name ssh_key \\\n+ -value @/root/ssh/id_rsa\n")))}w.isMDXComponent=!0}}]);