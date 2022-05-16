"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7545],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=p(n),s=a,m=k["".concat(c,".").concat(s)]||k[s]||u[s]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9147:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=n(3117),a=n(102),r=(n(7294),n(3905)),i=["components"],l={},c="Agent configuration",p={unversionedId:"administration/agent-config",id:"administration/agent-config",title:"Agent configuration",description:"Agents are configured by the command line or environment variables. At the minimum you need the following information:",source:"@site/docs/30-administration/15-agent-config.md",sourceDirName:"30-administration",slug:"/administration/agent-config",permalink:"/docs/administration/agent-config",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/15-agent-config.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Coding",permalink:"/docs/administration/forges/coding"},next:{title:"Docker backend",permalink:"/docs/administration/backends/docker"}},d={},u=[{value:"Processes per agent",id:"processes-per-agent",level:2},{value:"Filtering agents",id:"filtering-agents",level:2},{value:"Filter on Platform",id:"filter-on-platform",level:3},{value:"All agent configuration options",id:"all-agent-configuration-options",level:2},{value:"<code>WOODPECKER_SERVER</code>",id:"woodpecker_server",level:3},{value:"<code>WOODPECKER_USERNAME</code>",id:"woodpecker_username",level:3},{value:"<code>WOODPECKER_AGENT_SECRET</code>",id:"woodpecker_agent_secret",level:3},{value:"<code>WOODPECKER_AGENT_SECRET_FILE</code>",id:"woodpecker_agent_secret_file",level:3},{value:"<code>WOODPECKER_LOG_LEVEL</code>",id:"woodpecker_log_level",level:3},{value:"<code>WOODPECKER_DEBUG_PRETTY</code>",id:"woodpecker_debug_pretty",level:3},{value:"<code>WOODPECKER_DEBUG_NOCOLOR</code>",id:"woodpecker_debug_nocolor",level:3},{value:"<code>WOODPECKER_HOSTNAME</code>",id:"woodpecker_hostname",level:3},{value:"<code>WOODPECKER_MAX_PROCS</code>",id:"woodpecker_max_procs",level:3},{value:"<code>WOODPECKER_HEALTHCHECK</code>",id:"woodpecker_healthcheck",level:3},{value:"<code>WOODPECKER_KEEPALIVE_TIME</code>",id:"woodpecker_keepalive_time",level:3},{value:"<code>WOODPECKER_KEEPALIVE_TIMEOUT</code>",id:"woodpecker_keepalive_timeout",level:3},{value:"<code>WOODPECKER_GRPC_SECURE</code>",id:"woodpecker_grpc_secure",level:3},{value:"<code>WOODPECKER_GRPC_VERIFY</code>",id:"woodpecker_grpc_verify",level:3},{value:"<code>WOODPECKER_BACKEND</code>",id:"woodpecker_backend",level:3},{value:"<code>WOODPECKER_BACKEND_DOCKER_*</code>",id:"woodpecker_backend_docker_",level:3},{value:"<code>WOODPECKER_BACKEND_SSH_*</code>",id:"woodpecker_backend_ssh_",level:3}],k={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"agent-configuration"},"Agent configuration"),(0,r.kt)("p",null,"Agents are configured by the command line or environment variables. At the minimum you need the following information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-agent:\n  [...]\n  environment:\n+   - WOODPECKER_SERVER=localhost:9000\n+   - WOODPECKER_AGENT_SECRET=\"your-shared-secret-goes-here\"\n\n")),(0,r.kt)("p",null,"The following are automatically set and can be overridden:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WOODPECKER_HOSTNAME if not set, becomes the OS' hostname"),(0,r.kt)("li",{parentName:"ul"},"WOODPECKER_MAX_PROCS if not set, defaults to 1")),(0,r.kt)("h2",{id:"processes-per-agent"},"Processes per agent"),(0,r.kt)("p",null,"By default the maximum processes that are run per agent is 1. If required you can add ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_MAX_PROCS")," to increase your parellel processing on a per-agent basis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-agent:\n  [...]\n  environment:\n    - WOODPECKER_SERVER=localhost:9000\n    - WOODPECKER_AGENT_SECRET=\"your-shared-secret-goes-here\"\n+    - WOODPECKER_MAX_PROCS=4\n")),(0,r.kt)("h2",{id:"filtering-agents"},"Filtering agents"),(0,r.kt)("p",null,"When building your pipelines as long as you have set the platform or filter, builds can be made to only run code on certain agents."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- WOODPECKER_HOSTNAME=mycompany-ci-01.example.com\n- WOODPECKER_FILTER=\n")),(0,r.kt)("h3",{id:"filter-on-platform"},"Filter on Platform"),(0,r.kt)("p",null,"Only want certain pipelines or steps to run on certain agents with specific platforms? Such as arm vs amd64?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# .woodpecker.yml\npipeline:\n  build:\n   image: golang\n   commands:\n     - go build\n     - go test\n  when:\n    platform: linux/amd64\n\n\n  testing:\n   image: golang\n   commands:\n     - go build\n     - go test\n  when:\n    platform: linux/arm*\n\n\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/usage/pipeline-syntax#step-when---conditional-execution"},"Conditionals Pipeline")," syntax for more"),(0,r.kt)("h2",{id:"all-agent-configuration-options"},"All agent configuration options"),(0,r.kt)("p",null,"Here is the full list of configuration options and their default variables."),(0,r.kt)("h3",{id:"woodpecker_server"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_SERVER")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:9000"))),(0,r.kt)("p",null,"Configures gRPC address of the server."),(0,r.kt)("h3",{id:"woodpecker_username"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_USERNAME")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"x-oauth-basic"))),(0,r.kt)("p",null,"The gRPC username."),(0,r.kt)("h3",{id:"woodpecker_agent_secret"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_AGENT_SECRET")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"A shared secret used by server and agents to authenticate communication. A secret can be generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"openssl rand -hex 32"),"."),(0,r.kt)("h3",{id:"woodpecker_agent_secret_file"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_AGENT_SECRET_FILE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Read the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_AGENT_SECRET")," from the specified filepath"),(0,r.kt)("h3",{id:"woodpecker_log_level"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_LOG_LEVEL")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Configures the logging level. Possible values are ",(0,r.kt)("inlineCode",{parentName:"p"},"trace"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fatal"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"panic"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," and empty."),(0,r.kt)("h3",{id:"woodpecker_debug_pretty"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DEBUG_PRETTY")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Enable pretty-printed debug output."),(0,r.kt)("h3",{id:"woodpecker_debug_nocolor"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DEBUG_NOCOLOR")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"))),(0,r.kt)("p",null,"Disable colored debug output."),(0,r.kt)("h3",{id:"woodpecker_hostname"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_HOSTNAME")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Configures the agent hostname."),(0,r.kt)("h3",{id:"woodpecker_max_procs"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_MAX_PROCS")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"1"))),(0,r.kt)("p",null,"Configures the number of parallel builds."),(0,r.kt)("h3",{id:"woodpecker_healthcheck"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_HEALTHCHECK")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"))),(0,r.kt)("p",null,"Enable healthcheck endpoint."),(0,r.kt)("h3",{id:"woodpecker_keepalive_time"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_KEEPALIVE_TIME")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"After a duration of this time of no activity, the agent pings the server to check if the transport is still alive."),(0,r.kt)("h3",{id:"woodpecker_keepalive_timeout"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_KEEPALIVE_TIMEOUT")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"20s"))),(0,r.kt)("p",null,"After pinging for a keepalive check, the agent waits for a duration of this time before closing the connection if no activity."),(0,r.kt)("h3",{id:"woodpecker_grpc_secure"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GRPC_SECURE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Configures if the connection to ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_SERVER")," should be made using a secure transport."),(0,r.kt)("h3",{id:"woodpecker_grpc_verify"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GRPC_VERIFY")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"))),(0,r.kt)("p",null,"Configures if the gRPC server certificate should be verified, only valid when ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GRPC_SECURE")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"woodpecker_backend"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"auto-detect"))),(0,r.kt)("p",null,"Configures the backend engine to run pipelines on. Possible values are ",(0,r.kt)("inlineCode",{parentName:"p"},"auto-detect"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh"),"."),(0,r.kt)("h3",{id:"woodpecker_backend_docker_"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_DOCKER_*")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"backends/docker/#configuration"},"Docker backend configuration")),(0,r.kt)("h3",{id:"woodpecker_backend_ssh_"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_SSH_*")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"backends/ssh/#configuration"},"SSH backend configuration")))}s.isMDXComponent=!0}}]);