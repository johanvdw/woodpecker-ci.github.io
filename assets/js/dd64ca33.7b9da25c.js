"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3391],{49613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,a(a({ref:t},l),{},{components:n})):r.createElement(k,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>_,frontMatter:()=>d,metadata:()=>k,toc:()=>w});var r=n(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&l(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&l(e,n,t[n]);return e};const d={},m="Prometheus",k={unversionedId:"administration/prometheus",id:"version-1.0/administration/prometheus",title:"Prometheus",description:"Woodpecker is compatible with Prometheus and exposes a /metrics endpoint. Please note that access to the metrics endpoint is restricted and requires an authorization token with administrative privileges.",source:"@site/versioned_docs/version-1.0/30-administration/90-prometheus.md",sourceDirName:"30-administration",slug:"/administration/prometheus",permalink:"/docs/1.0/administration/prometheus",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-1.0/30-administration/90-prometheus.md",tags:[],version:"1.0",sidebarPosition:90,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/1.0/administration/kubernetes"},next:{title:"External Configuration API",permalink:"/docs/1.0/administration/external-configuration-api"}},f={},w=[{value:"Authorization",id:"authorization",level:2},{value:"Unauthenticated Access",id:"unauthenticated-access",level:2},{value:"Metric Reference",id:"metric-reference",level:2}],g={toc:w};function _(e){var t,n=e,{components:o}=n,l=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},g),l),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"prometheus"}),"Prometheus"),(0,r.kt)("p",null,"Woodpecker is compatible with Prometheus and exposes a ",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint. Please note that access to the metrics endpoint is restricted and requires an authorization token with administrative privileges."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"global:\n  scrape_interval: 60s\n\nscrape_configs:\n  - job_name: 'woodpecker'\n    bearer_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n\n    static_configs:\n       - targets: ['woodpecker.domain.com']\n")),(0,r.kt)("h2",u({},{id:"authorization"}),"Authorization"),(0,r.kt)("p",null,"An administrator will need to generate a user API token and configure in the Prometheus configuration file as a bearer token. Please see the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"global:\n  scrape_interval: 60s\n\nscrape_configs:\n  - job_name: 'woodpecker'\n+   bearer_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n\n    static_configs:\n       - targets: ['woodpecker.domain.com']\n")),(0,r.kt)("h2",u({},{id:"unauthenticated-access"}),"Unauthenticated Access"),(0,r.kt)("p",null,"Alternatively, the unprotected ",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint might be exposed on the internal port. (Port is configurable via the ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_METRICS_SERVER_ADDR")," environment variable, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},":9001"),".)"),(0,r.kt)("h2",u({},{id:"metric-reference"}),"Metric Reference"),(0,r.kt)("p",null,"List of Prometheus metrics specific to Woodpecker:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'# HELP woodpecker_pipeline_count Pipeline count.\n# TYPE woodpecker_pipeline_count counter\nwoodpecker_build_count{branch="master",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 3\nwoodpecker_build_count{branch="mkdocs",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 3\n# HELP woodpecker_pipeline_time Build time.\n# TYPE woodpecker_pipeline_time gauge\nwoodpecker_build_time{branch="master",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 116\nwoodpecker_build_time{branch="mkdocs",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 155\n# HELP woodpecker_pipeline_total_count Total number of builds.\n# TYPE woodpecker_pipeline_total_count gauge\nwoodpecker_build_total_count 1025\n# HELP woodpecker_pending_steps Total number of pending pipeline steps.\n# TYPE woodpecker_pending_steps gauge\nwoodpecker_pending_steps 0\n# HELP woodpecker_repo_count Total number of repos.\n# TYPE woodpecker_repo_count gauge\nwoodpecker_repo_count 9\n# HELP woodpecker_running_steps Total number of running pipeline steps.\n# TYPE woodpecker_running_steps gauge\nwoodpecker_running_steps 0\n# HELP woodpecker_user_count Total number of users.\n# TYPE woodpecker_user_count gauge\nwoodpecker_user_count 1\n# HELP woodpecker_waiting_steps Total number of pipeline waiting on deps.\n# TYPE woodpecker_waiting_steps gauge\nwoodpecker_waiting_steps 0\n# HELP woodpecker_worker_count Total number of workers.\n# TYPE woodpecker_worker_count gauge\nwoodpecker_worker_count 4\n')))}_.isMDXComponent=!0}}]);