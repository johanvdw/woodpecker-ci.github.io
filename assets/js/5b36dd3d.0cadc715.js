"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[248],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9661:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var r=n(3117),a=n(102),s=(n(7294),n(3905)),o=["components"],l={},c="Secrets",i={unversionedId:"usage/secrets",id:"usage/secrets",title:"Secrets",description:"Woodpecker provides the ability to store named parameters external to the YAML configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime.",source:"@site/docs/20-usage/40-secrets.md",sourceDirName:"20-usage",slug:"/usage/secrets",permalink:"/docs/usage/secrets",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/40-secrets.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced YAML syntax",permalink:"/docs/usage/advanced-yaml-syntax"},next:{title:"Registries",permalink:"/docs/usage/registries"}},p={},u=[{value:"Adding Secrets",id:"adding-secrets",level:2},{value:"Alternate Names",id:"alternate-names",level:2},{value:"Pull Requests",id:"pull-requests",level:2},{value:"Examples",id:"examples",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"secrets"},"Secrets"),(0,s.kt)("p",null,"Woodpecker provides the ability to store named parameters external to the YAML configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime."),(0,s.kt)("p",null,"Secrets are exposed to your pipeline steps and plugins as uppercase environment variables and can therefore be referenced in the commands section of your pipeline."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  docker:\n    image: docker\n    commands:\n+     - echo $DOCKER_USERNAME\n+     - echo $DOCKER_PASSWORD\n+   secrets: [ docker_username, docker_password ]\n")),(0,s.kt)("p",null,"Alternatively, you can get a ",(0,s.kt)("inlineCode",{parentName:"p"},"setting")," from secrets using the ",(0,s.kt)("inlineCode",{parentName:"p"},"from_secret")," syntax.",(0,s.kt)("br",{parentName:"p"}),"\n","In this example, the secret named ",(0,s.kt)("inlineCode",{parentName:"p"},"secret_token")," would be passed to the pipeline as ",(0,s.kt)("inlineCode",{parentName:"p"},"PLUGIN_TOKEN"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"NOTE:")," the ",(0,s.kt)("inlineCode",{parentName:"p"},"from_secret")," syntax only works with the newer ",(0,s.kt)("inlineCode",{parentName:"p"},"settings")," block."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  docker:\n    image: my-plugin\n    settings:\n+     token:\n+       from_secret: secret_token\n")),(0,s.kt)("p",null,"Please note parameter expressions are subject to pre-processing. When using secrets in parameter expressions they should be escaped."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  docker:\n    image: docker\n    commands:\n-     - echo ${DOCKER_USERNAME}\n-     - echo ${DOCKER_PASSWORD}\n+     - echo $${DOCKER_USERNAME}\n+     - echo $${DOCKER_PASSWORD}\n    secrets: [ docker_username, docker_password ]\n")),(0,s.kt)("h2",{id:"adding-secrets"},"Adding Secrets"),(0,s.kt)("p",null,"Secrets are added to the Woodpecker secret store on the UI or with the CLI."),(0,s.kt)("h2",{id:"alternate-names"},"Alternate Names"),(0,s.kt)("p",null,"There may be scenarios where you are required to store secrets using alternate names. You can map the alternate secret name to the expected name using the below syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  docker:\n    image: plugins/docker\n    repo: octocat/hello-world\n    tags: latest\n+   secrets:\n+     - source: docker_prod_password\n+       target: docker_password\n")),(0,s.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,s.kt)("p",null,"Secrets are not exposed to pull requests by default. You can override this behavior by creating the secret and enabling the ",(0,s.kt)("inlineCode",{parentName:"p"},"pull_request")," event type."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -image plugins/docker \\\n+ -event pull_request \\\n+ -event push \\\n+ -event tag \\\n  -name docker_username \\\n  -value <value>\n")),(0,s.kt)("p",null,"Please be careful when exposing secrets to pull requests. If your repository is open source and accepts pull requests your secrets are not safe. A bad actor can submit a malicious pull request that exposes your secrets."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Create the secret using default settings. The secret will be available to all images in your pipeline, and will be available to all push, tag, and deployment events (not pull request events)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -name aws_access_key_id \\\n  -value <value>\n")),(0,s.kt)("p",null,"Create the secret and limit to a single image:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n+ -image plugins/s3 \\\n  -name aws_access_key_id \\\n  -value <value>\n")),(0,s.kt)("p",null,"Create the secrets and limit to a set of images:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n+ -image plugins/s3 \\\n+ -image peloton/woodpecker-ecs \\\n  -name aws_access_key_id \\\n  -value <value>\n")),(0,s.kt)("p",null,"Create the secret and enable for multiple hook events:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -image plugins/s3 \\\n+ -event pull_request \\\n+ -event push \\\n+ -event tag \\\n  -name aws_access_key_id \\\n  -value <value>\n")),(0,s.kt)("p",null,"Loading secrets from file using curl ",(0,s.kt)("inlineCode",{parentName:"p"},"@")," syntax. This is the recommended approach for loading secrets from file to preserve newlines:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -name ssh_key \\\n+ -value @/root/ssh/id_rsa\n")))}m.isMDXComponent=!0}}]);