"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7158],{9613:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var n=o(9496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(o),u=r,_=s["".concat(p,".").concat(u)]||s[u]||k[u]||a;return o?n.createElement(_,i(i({ref:t},c),{},{components:o})):n.createElement(_,i({ref:t},c))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},1428:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>E,contentTitle:()=>u,default:()=>C,frontMatter:()=>s,metadata:()=>_,toc:()=>m});var n=o(9613),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,k=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&c(e,o,t[o]);if(l)for(var o of l(t))d.call(t,o)&&c(e,o,t[o]);return e};const s={},u="Server configuration",_={unversionedId:"administration/server-config",id:"administration/server-config",title:"Server configuration",description:"User registration",source:"@site/docs/30-administration/10-server-config.md",sourceDirName:"30-administration",slug:"/administration/server-config",permalink:"/docs/next/administration/server-config",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/10-server-config.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/next/administration/setup"},next:{title:"Overview",permalink:"/docs/next/administration/forges/overview"}},E={},m=[{value:"User registration",id:"user-registration",level:2},{value:"Administrators",id:"administrators",level:2},{value:"Filtering repositories",id:"filtering-repositories",level:2},{value:"Global registry setting",id:"global-registry-setting",level:2},{value:"Handling sensitive data in docker-compose and docker-swarm",id:"handling-sensitive-data-in-docker-compose-and-docker-swarm",level:2},{value:"All server configuration options",id:"all-server-configuration-options",level:2},{value:"<code>WOODPECKER_LOG_LEVEL</code>",id:"woodpecker_log_level",level:3},{value:"<code>WOODPECKER_DEBUG_PRETTY</code>",id:"woodpecker_debug_pretty",level:3},{value:"<code>WOODPECKER_DEBUG_NOCOLOR</code>",id:"woodpecker_debug_nocolor",level:3},{value:"<code>WOODPECKER_HOST</code>",id:"woodpecker_host",level:3},{value:"<code>WOODPECKER_SERVER_ADDR</code>",id:"woodpecker_server_addr",level:3},{value:"<code>WOODPECKER_SERVER_CERT</code>",id:"woodpecker_server_cert",level:3},{value:"<code>WOODPECKER_SERVER_KEY</code>",id:"woodpecker_server_key",level:3},{value:"<code>WOODPECKER_LETS_ENCRYPT</code>",id:"woodpecker_lets_encrypt",level:3},{value:"<code>WOODPECKER_GRPC_ADDR</code>",id:"woodpecker_grpc_addr",level:3},{value:"<code>WOODPECKER_METRICS_SERVER_ADDR</code>",id:"woodpecker_metrics_server_addr",level:3},{value:"<code>WOODPECKER_ADMIN</code>",id:"woodpecker_admin",level:3},{value:"<code>WOODPECKER_ORGS</code>",id:"woodpecker_orgs",level:3},{value:"<code>WOODPECKER_REPO_OWNERS</code>",id:"woodpecker_repo_owners",level:3},{value:"<code>WOODPECKER_OPEN</code>",id:"woodpecker_open",level:3},{value:"<code>WOODPECKER_DOCS</code>",id:"woodpecker_docs",level:3},{value:"<code>WOODPECKER_AUTHENTICATE_PUBLIC_REPOS</code>",id:"woodpecker_authenticate_public_repos",level:3},{value:"<code>WOODPECKER_DEFAULT_CANCEL_PREVIOUS_PIPELINE_EVENTS</code>",id:"woodpecker_default_cancel_previous_pipeline_events",level:3},{value:"<code>WOODPECKER_DEFAULT_CLONE_IMAGE</code>",id:"woodpecker_default_clone_image",level:3},{value:"<code>WOODPECKER_SESSION_EXPIRES</code>",id:"woodpecker_session_expires",level:3},{value:"<code>WOODPECKER_ESCALATE</code>",id:"woodpecker_escalate",level:3},{value:"<code>WOODPECKER_DOCKER_CONFIG</code>",id:"woodpecker_docker_config",level:3},{value:"<code>WOODPECKER_AGENT_SECRET</code>",id:"woodpecker_agent_secret",level:3},{value:"<code>WOODPECKER_AGENT_SECRET_FILE</code>",id:"woodpecker_agent_secret_file",level:3},{value:"<code>WOODPECKER_KEEPALIVE_MIN_TIME</code>",id:"woodpecker_keepalive_min_time",level:3},{value:"<code>WOODPECKER_DATABASE_DRIVER</code>",id:"woodpecker_database_driver",level:3},{value:"<code>WOODPECKER_DATABASE_DATASOURCE</code>",id:"woodpecker_database_datasource",level:3},{value:"<code>WOODPECKER_DATABASE_DATASOURCE_FILE</code>",id:"woodpecker_database_datasource_file",level:3},{value:"<code>WOODPECKER_ENCRYPTION_KEY</code>",id:"woodpecker_encryption_key",level:3},{value:"<code>WOODPECKER_ENCRYPTION_KEY_FILE</code>",id:"woodpecker_encryption_key_file",level:3},{value:"<code>WOODPECKER_ENCRYPTION_TINK_KEYSET_FILE</code>",id:"woodpecker_encryption_tink_keyset_file",level:3},{value:"<code>WOODPECKER_ENCRYPTION_DISABLE</code>",id:"woodpecker_encryption_disable",level:3},{value:"<code>WOODPECKER_PROMETHEUS_AUTH_TOKEN</code>",id:"woodpecker_prometheus_auth_token",level:3},{value:"<code>WOODPECKER_PROMETHEUS_AUTH_TOKEN_FILE</code>",id:"woodpecker_prometheus_auth_token_file",level:3},{value:"<code>WOODPECKER_STATUS_CONTEXT</code>",id:"woodpecker_status_context",level:3},{value:"<code>WOODPECKER_STATUS_CONTEXT_FORMAT</code>",id:"woodpecker_status_context_format",level:3},{value:"<code>WOODPECKER_LIMIT_MEM_SWAP</code>",id:"woodpecker_limit_mem_swap",level:3},{value:"<code>WOODPECKER_LIMIT_MEM</code>",id:"woodpecker_limit_mem",level:3},{value:"<code>WOODPECKER_LIMIT_SHM_SIZE</code>",id:"woodpecker_limit_shm_size",level:3},{value:"<code>WOODPECKER_LIMIT_CPU_QUOTA</code>",id:"woodpecker_limit_cpu_quota",level:3},{value:"<code>WOODPECKER_LIMIT_CPU_SHARES</code>",id:"woodpecker_limit_cpu_shares",level:3},{value:"<code>WOODPECKER_LIMIT_CPU_SET</code>",id:"woodpecker_limit_cpu_set",level:3},{value:"<code>WOODPECKER_CONFIG_SERVICE_ENDPOINT</code>",id:"woodpecker_config_service_endpoint",level:3},{value:"<code>WOODPECKER_FORGE_TIMEOUT</code>",id:"woodpecker_forge_timeout",level:3},{value:"<code>WOODPECKER_GITHUB_...</code>",id:"woodpecker_github_",level:3},{value:"<code>WOODPECKER_GOGS_...</code>",id:"woodpecker_gogs_",level:3},{value:"<code>WOODPECKER_GITEA_...</code>",id:"woodpecker_gitea_",level:3},{value:"<code>WOODPECKER_BITBUCKET_...</code>",id:"woodpecker_bitbucket_",level:3},{value:"<code>WOODPECKER_STASH_...</code>",id:"woodpecker_stash_",level:3},{value:"<code>WOODPECKER_GITLAB_...</code>",id:"woodpecker_gitlab_",level:3},{value:"<code>WOODPECKER_CODING_...</code>",id:"woodpecker_coding_",level:3}],O={toc:m};function C(e){var t,o=e,{components:r}=o,c=((e,t)=>{var o={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(o[n]=e[n]);return o})(o,["components"]);return(0,n.kt)("wrapper",(t=k(k({},O),c),a(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",k({},{id:"server-configuration"}),"Server configuration"),(0,n.kt)("h2",k({},{id:"user-registration"}),"User registration"),(0,n.kt)("p",null,"Registration is closed by default. While disabled an administrator needs to add new users manually (exp. ",(0,n.kt)("inlineCode",{parentName:"p"},"woodpecker-cli user add"),")."),(0,n.kt)("p",null,"If registration is open every user with an account at the configured ",(0,n.kt)("a",k({parentName:"p"},{href:"/docs/next/administration/forges/overview"}),"forges")," can login to Woodpecker.\nThis example enables open registration for users that are members of approved organizations:"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_OPEN=true\n+     - WOODPECKER_ORGS=dolores,dogpatch\n\n")),(0,n.kt)("h2",k({},{id:"administrators"}),"Administrators"),(0,n.kt)("p",null,"Administrators should also be enumerated in your configuration."),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_ADMIN=johnsmith,janedoe\n")),(0,n.kt)("h2",k({},{id:"filtering-repositories"}),"Filtering repositories"),(0,n.kt)("p",null,"Woodpecker operates with the user's OAuth permission. Due to the coarse permission handling of GitHub, you may end up syncing more repos into Woodpecker than preferred."),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_REPO_OWNERS")," variable to filter which GitHub user's repos should be synced only. You typically want to put here your company's GitHub name."),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_REPO_OWNERS=mycompany,mycompanyossgithubuser\n")),(0,n.kt)("h2",k({},{id:"global-registry-setting"}),"Global registry setting"),(0,n.kt)("p",null,"If you want to make available a specific private registry to all pipelines, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_DOCKER_CONFIG")," server configuration.\nPoint it to your server's docker config."),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_DOCKER_CONFIG=/home/user/.docker/config.json\n")),(0,n.kt)("h2",k({},{id:"handling-sensitive-data-in-docker-compose-and-docker-swarm"}),"Handling sensitive data in docker-compose and docker-swarm"),(0,n.kt)("p",null,"To handle sensitive data in docker-compose or docker-swarm configurations there are several options:"),(0,n.kt)("p",null,"For docker-compose you can use a .env file next to your compose configuration to store the secrets outside of the compose file. While this separates configuration from secrets it is still not very secure."),(0,n.kt)("p",null,"Alternatively use docker-secrets. As it may be difficult to use docker secrets for environment variables woodpecker allows to read sensible data from files by providing a ",(0,n.kt)("inlineCode",{parentName:"p"},"*_FILE")," option of all sensible configuration variables. Woodpecker will try to read the value directly from this file. Keep in mind that when the original environment variable gets specified at the same time it will override the value read from the file."),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_AGENT_SECRET_FILE=/run/secrets/woodpecker-agent-secret\n+   secrets:\n+     - woodpecker-agent-secret\n+\n+secrets:\n+  woodpecker-agent-secret:\n+    external: true\n")),(0,n.kt)("p",null,"Store a value to a docker secret like this:\n",(0,n.kt)("inlineCode",{parentName:"p"},'echo "my_agent_secret_key" | docker secret create woodpecker-agent-secret -')),(0,n.kt)("p",null,"or generate a random one like this:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"openssl rand -hex 32 | docker secret create woodpecker-agent-secret -")),(0,n.kt)("h2",k({},{id:"all-server-configuration-options"}),"All server configuration options"),(0,n.kt)("p",null,"The following list describes all available server configuration options."),(0,n.kt)("h3",k({},{id:"woodpecker_log_level"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_LOG_LEVEL")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures the logging level. Possible values are ",(0,n.kt)("inlineCode",{parentName:"p"},"trace"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fatal"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"panic"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"disabled")," and empty."),(0,n.kt)("h3",k({},{id:"woodpecker_debug_pretty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DEBUG_PRETTY")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Enable pretty-printed debug output."),(0,n.kt)("h3",k({},{id:"woodpecker_debug_nocolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DEBUG_NOCOLOR")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"true"))),(0,n.kt)("p",null,"Disable colored debug output."),(0,n.kt)("h3",k({},{id:"woodpecker_host"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_HOST")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Server fully qualified URL of the user-facing hostname."),(0,n.kt)("p",null,"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_HOST=http://woodpecker.example.org")),(0,n.kt)("h3",k({},{id:"woodpecker_server_addr"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_SERVER_ADDR")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},":8000"))),(0,n.kt)("p",null,"Configures the HTTP listener port."),(0,n.kt)("h3",k({},{id:"woodpecker_server_cert"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_SERVER_CERT")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Path to an SSL certificate used by the server to accept HTTPS requests."),(0,n.kt)("p",null,"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_SERVER_CERT=/path/to/cert.pem")),(0,n.kt)("h3",k({},{id:"woodpecker_server_key"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_SERVER_KEY")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Path to an SSL certificate key used by the server to accept HTTPS requests."),(0,n.kt)("p",null,"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_SERVER_KEY=/path/to/key.pem")),(0,n.kt)("h3",k({},{id:"woodpecker_lets_encrypt"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_LETS_ENCRYPT")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Automatically generates an SSL certificate using Let's Encrypt, and configures the server to accept HTTPS requests."),(0,n.kt)("h3",k({},{id:"woodpecker_grpc_addr"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GRPC_ADDR")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},":9000"))),(0,n.kt)("p",null,"Configures the gRPC listener port."),(0,n.kt)("h3",k({},{id:"woodpecker_metrics_server_addr"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_METRICS_SERVER_ADDR")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures an unprotected metrics endpoint. An empty value disables the metrics endpoint completely."),(0,n.kt)("p",null,"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},":9001")),(0,n.kt)("h3",k({},{id:"woodpecker_admin"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_ADMIN")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Comma-separated list of admin accounts."),(0,n.kt)("p",null,"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_ADMIN=user1,user2")),(0,n.kt)("h3",k({},{id:"woodpecker_orgs"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_ORGS")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Comma-separated list of approved organizations."),(0,n.kt)("p",null,"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"org1,org2")),(0,n.kt)("h3",k({},{id:"woodpecker_repo_owners"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_REPO_OWNERS")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Comma-separated list of syncable repo owners. ???"),(0,n.kt)("p",null,"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"user1,user2")),(0,n.kt)("h3",k({},{id:"woodpecker_open"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_OPEN")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Enable to allow user registration."),(0,n.kt)("h3",k({},{id:"woodpecker_docs"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DOCS")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://woodpecker-ci.org/"))),(0,n.kt)("p",null,"Link to documentation in the UI."),(0,n.kt)("h3",k({},{id:"woodpecker_authenticate_public_repos"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_AUTHENTICATE_PUBLIC_REPOS")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Always use authentication to clone repositories even if they are public. Needed if the forge requires to always authenticate as used by many companies."),(0,n.kt)("h3",k({},{id:"woodpecker_default_cancel_previous_pipeline_events"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DEFAULT_CANCEL_PREVIOUS_PIPELINE_EVENTS")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"pull_request, push"))),(0,n.kt)("p",null,"List of event names that will be canceled when a new pipeline for the same context (tag, branch) is created."),(0,n.kt)("h3",k({},{id:"woodpecker_default_clone_image"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DEFAULT_CLONE_IMAGE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default is defined in ",(0,n.kt)("a",k({parentName:"p"},{href:"https://github.com/woodpecker-ci/woodpecker/blob/master/shared/constant/constant.go"}),"shared/constant/constant.go"))),(0,n.kt)("p",null,"The default docker image to be used when cloning the repo"),(0,n.kt)("h3",k({},{id:"woodpecker_session_expires"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_SESSION_EXPIRES")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"72h"))),(0,n.kt)("p",null,"Configures the session expiration time."),(0,n.kt)("h3",k({},{id:"woodpecker_escalate"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_ESCALATE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Defaults are defined in ",(0,n.kt)("a",k({parentName:"p"},{href:"https://github.com/woodpecker-ci/woodpecker/blob/master/shared/constant/constant.go"}),"shared/constant/constant.go"))),(0,n.kt)("p",null,"Docker images to run in privileged mode. Only change if you are sure what you do!"),(0,n.kt)("h3",k({},{id:"woodpecker_docker_config"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DOCKER_CONFIG")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures a specific private registry config for all pipelines."),(0,n.kt)("p",null,"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_DOCKER_CONFIG=/home/user/.docker/config.json")),(0,n.kt)("h3",k({},{id:"woodpecker_agent_secret"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_AGENT_SECRET")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"A shared secret used by server and agents to authenticate communication. A secret can be generated by ",(0,n.kt)("inlineCode",{parentName:"p"},"openssl rand -hex 32"),"."),(0,n.kt)("h3",k({},{id:"woodpecker_agent_secret_file"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_AGENT_SECRET_FILE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Read the value for ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_AGENT_SECRET")," from the specified filepath"),(0,n.kt)("h3",k({},{id:"woodpecker_keepalive_min_time"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_KEEPALIVE_MIN_TIME")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Server-side enforcement policy on the minimum amount of time a client should wait before sending a keepalive ping."),(0,n.kt)("p",null,"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_KEEPALIVE_MIN_TIME=10s")),(0,n.kt)("h3",k({},{id:"woodpecker_database_driver"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DATABASE_DRIVER")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"sqlite3"))),(0,n.kt)("p",null,"The database driver name. Possible values are ",(0,n.kt)("inlineCode",{parentName:"p"},"sqlite3"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"mysql")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"postgres"),"."),(0,n.kt)("h3",k({},{id:"woodpecker_database_datasource"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DATABASE_DATASOURCE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"woodpecker.sqlite"))),(0,n.kt)("p",null,"The database connection string. The default value is the path of the embedded SQLite database file."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"# MySQL\n# https://github.com/go-sql-driver/mysql#dsn-data-source-name\nWOODPECKER_DATABASE_DATASOURCE=root:password@tcp(1.2.3.4:3306)/woodpecker?parseTime=true\n\n# PostgreSQL\n# https://www.postgresql.org/docs/current/static/libpq-connect.html#LIBPQ-CONNSTRING\nWOODPECKER_DATABASE_DATASOURCE=postgres://root:password@1.2.3.4:5432/woodpecker?sslmode=disable\n")),(0,n.kt)("h3",k({},{id:"woodpecker_database_datasource_file"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DATABASE_DATASOURCE_FILE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Read the value for ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_DATABASE_DATASOURCE")," from the specified filepath"),(0,n.kt)("h3",k({},{id:"woodpecker_encryption_key"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_ENCRYPTION_KEY")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Encryption key used to encrypt secrets in DB. See ",(0,n.kt)("a",k({parentName:"p"},{href:"/docs/next/administration/encryption"}),"secrets encryption")),(0,n.kt)("h3",k({},{id:"woodpecker_encryption_key_file"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_ENCRYPTION_KEY_FILE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Read the value for ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_ENCRYPTION_KEY")," from the specified filepath"),(0,n.kt)("h3",k({},{id:"woodpecker_encryption_tink_keyset_file"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_ENCRYPTION_TINK_KEYSET_FILE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Filepath to encryption keyset used to encrypt secrets in DB. See ",(0,n.kt)("a",k({parentName:"p"},{href:"/docs/next/administration/encryption"}),"secrets encryption")),(0,n.kt)("h3",k({},{id:"woodpecker_encryption_disable"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_ENCRYPTION_DISABLE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Boolean flag to decrypt secrets in DB and disable server encryption. See ",(0,n.kt)("a",k({parentName:"p"},{href:"/docs/next/administration/encryption"}),"secrets encryption")),(0,n.kt)("h3",k({},{id:"woodpecker_prometheus_auth_token"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_PROMETHEUS_AUTH_TOKEN")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Token to secure the Prometheus metrics endpoint.\nMust be set to enable the endpoint."),(0,n.kt)("h3",k({},{id:"woodpecker_prometheus_auth_token_file"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_PROMETHEUS_AUTH_TOKEN_FILE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Read the value for ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_PROMETHEUS_AUTH_TOKEN")," from the specified filepath"),(0,n.kt)("h3",k({},{id:"woodpecker_status_context"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STATUS_CONTEXT")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"ci/woodpecker"))),(0,n.kt)("p",null,"Context prefix Woodpecker will use to publish status messages to SCM. You probably will only need to change it if you run multiple Woodpecker instances for a single repository."),(0,n.kt)("h3",k({},{id:"woodpecker_status_context_format"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STATUS_CONTEXT_FORMAT")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"{{ .context }}/{{ .event }}/{{ .pipeline }}"))),(0,n.kt)("p",null,"Template for the status messages published to forges, uses ",(0,n.kt)("a",k({parentName:"p"},{href:"https://pkg.go.dev/text/template"}),"Go templates")," as template language.\nSupported variables:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"context"),": Woodpecker's context (see ",(0,n.kt)("inlineCode",{parentName:"li"},"WOODPECKER_STATUS_CONTEXT"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"event"),": the event which started the pipeline"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pipeline"),": the pipeline's name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"owner"),": the repo's owner"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"repo"),": the repo's name")),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"woodpecker_limit_mem_swap"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_LIMIT_MEM_SWAP")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"0"))),(0,n.kt)("p",null,"The maximum amount of memory a single pipeline container is allowed to swap to disk, configured in bytes. There is no limit if ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,n.kt)("h3",k({},{id:"woodpecker_limit_mem"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_LIMIT_MEM")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"0"))),(0,n.kt)("p",null,"The maximum amount of memory a single pipeline container can use, configured in bytes. There is no limit if ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,n.kt)("h3",k({},{id:"woodpecker_limit_shm_size"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_LIMIT_SHM_SIZE")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"0"))),(0,n.kt)("p",null,"The maximum amount of memory of ",(0,n.kt)("inlineCode",{parentName:"p"},"/dev/shm")," allowed in bytes. There is no limit if ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,n.kt)("h3",k({},{id:"woodpecker_limit_cpu_quota"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_LIMIT_CPU_QUOTA")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"0"))),(0,n.kt)("p",null,"The number of microseconds per CPU period that the container is limited to before throttled. There is no limit if ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,n.kt)("h3",k({},{id:"woodpecker_limit_cpu_shares"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_LIMIT_CPU_SHARES")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"0"))),(0,n.kt)("p",null,"The relative weight vs. other containers."),(0,n.kt)("h3",k({},{id:"woodpecker_limit_cpu_set"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_LIMIT_CPU_SET")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Comma-separated list to limit the specific CPUs or cores a pipeline container can use."),(0,n.kt)("p",null,"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_LIMIT_CPU_SET=1,2")),(0,n.kt)("h3",k({},{id:"woodpecker_config_service_endpoint"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CONFIG_SERVICE_ENDPOINT")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ``")),(0,n.kt)("p",null,"Specify a configuration service endpoint, see ",(0,n.kt)("a",k({parentName:"p"},{href:"/docs/next/administration/external-configuration-api"}),"Configuration Extension")),(0,n.kt)("h3",k({},{id:"woodpecker_forge_timeout"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_FORGE_TIMEOUT")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: 3sec")),(0,n.kt)("p",null,"Specify how many seconds before timeout when fetching the Woodpecker configuration from a Forge"),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"woodpecker_github_"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB_...")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",k({parentName:"p"},{href:"forges/github/#configuration"}),"GitHub configuration")),(0,n.kt)("h3",k({},{id:"woodpecker_gogs_"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_...")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",k({parentName:"p"},{href:"forges/gogs/#configuration"}),"Gogs configuration")),(0,n.kt)("h3",k({},{id:"woodpecker_gitea_"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITEA_...")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",k({parentName:"p"},{href:"forges/gitea/#configuration"}),"Gitea configuration")),(0,n.kt)("h3",k({},{id:"woodpecker_bitbucket_"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BITBUCKET_...")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",k({parentName:"p"},{href:"forges/bitbucket/#configuration"}),"Bitbucket configuration")),(0,n.kt)("h3",k({},{id:"woodpecker_stash_"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_...")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",k({parentName:"p"},{href:"forges/bitbucket_server/#configuration"}),"Bitbucket server configuration")),(0,n.kt)("h3",k({},{id:"woodpecker_gitlab_"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_...")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",k({parentName:"p"},{href:"forges/gitlab/#configuration"}),"Gitlab configuration")),(0,n.kt)("h3",k({},{id:"woodpecker_coding_"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CODING_...")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",k({parentName:"p"},{href:"forges/coding/#configuration"}),"Coding configuration")))}C.isMDXComponent=!0}}]);