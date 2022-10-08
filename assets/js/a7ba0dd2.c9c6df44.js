"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9620],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5266:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return k}});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(a)for(var r of a(t))p.call(t,r)&&u(e,r,t[r]);return e};const d={},m="Prometheus",f={unversionedId:"administration/prometheus",id:"administration/prometheus",title:"Prometheus",description:"Woodpecker is compatible with Prometheus and exposes a /metrics endpoint. Please note that access to the metrics endpoint is restricted and requires an authorization token with administrative privileges.",source:"@site/docs/30-administration/90-prometheus.md",sourceDirName:"30-administration",slug:"/administration/prometheus",permalink:"/docs/next/administration/prometheus",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/90-prometheus.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/next/administration/kubernetes"},next:{title:"External Configuration API",permalink:"/docs/next/administration/external-configuration-api"}},b={},k=[{value:"Authorization",id:"authorization",level:2},{value:"Metric Reference",id:"metric-reference",level:2}],w={toc:k};function g(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=l(l({},w),u),i(t,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",l({},{id:"prometheus"}),"Prometheus"),(0,n.kt)("p",null,"Woodpecker is compatible with Prometheus and exposes a ",(0,n.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint. Please note that access to the metrics endpoint is restricted and requires an authorization token with administrative privileges."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"global:\n  scrape_interval: 60s\n\nscrape_configs:\n  - job_name: 'woodpecker'\n    bearer_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n\n    static_configs:\n       - targets: ['woodpecker.domain.com']\n")),(0,n.kt)("h2",l({},{id:"authorization"}),"Authorization"),(0,n.kt)("p",null,"An administrator will need to generate a user api token and configure in the prometheus configuration file as a bearer token. Please see the following example:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-diff"}),"global:\n  scrape_interval: 60s\n\nscrape_configs:\n  - job_name: 'woodpecker'\n+   bearer_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n\n    static_configs:\n       - targets: ['woodpecker.domain.com']\n")),(0,n.kt)("h2",l({},{id:"metric-reference"}),"Metric Reference"),(0,n.kt)("p",null,"List of prometheus metrics specific to Woodpecker:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'# HELP woodpecker_build_count Build count.\n# TYPE woodpecker_build_count counter\nwoodpecker_build_count{branch="master",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 3\nwoodpecker_build_count{branch="mkdocs",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 3\n# HELP woodpecker_build_time Build time.\n# TYPE woodpecker_build_time gauge\nwoodpecker_build_time{branch="master",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 116\nwoodpecker_build_time{branch="mkdocs",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 155\n# HELP woodpecker_build_total_count Total number of builds.\n# TYPE woodpecker_build_total_count gauge\nwoodpecker_build_total_count 1025\n# HELP woodpecker_pending_jobs Total number of pending build processes.\n# TYPE woodpecker_pending_jobs gauge\nwoodpecker_pending_jobs 0\n# HELP woodpecker_repo_count Total number of repos.\n# TYPE woodpecker_repo_count gauge\nwoodpecker_repo_count 9\n# HELP woodpecker_running_jobs Total number of running build processes.\n# TYPE woodpecker_running_jobs gauge\nwoodpecker_running_jobs 0\n# HELP woodpecker_user_count Total number of users.\n# TYPE woodpecker_user_count gauge\nwoodpecker_user_count 1\n# HELP woodpecker_waiting_jobs Total number of builds waiting on deps.\n# TYPE woodpecker_waiting_jobs gauge\nwoodpecker_waiting_jobs 0\n# HELP woodpecker_worker_count Total number of workers.\n# TYPE woodpecker_worker_count gauge\nwoodpecker_worker_count 4\n')))}g.isMDXComponent=!0}}]);