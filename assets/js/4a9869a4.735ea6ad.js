"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[669],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),k=o,m=u["".concat(c,".").concat(k)]||u[k]||p[k]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3330:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return f}});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&d(e,n,t[n]);return e};const u={},k="SSH backend",m={unversionedId:"administration/backends/ssh",id:"administration/backends/ssh",title:"SSH backend",description:"The SSH backend will execute the pipelines using SSH on a remote system without any isolation of any kind.",source:"@site/docs/30-administration/22-backends/30-ssh.md",sourceDirName:"30-administration/22-backends",slug:"/administration/backends/ssh",permalink:"/docs/next/administration/backends/ssh",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/22-backends/30-ssh.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Local backend",permalink:"/docs/next/administration/backends/local"},next:{title:"Databases",permalink:"/docs/next/administration/database"}},b={},f=[{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_BACKEND_SSH_ADDRESS</code>",id:"woodpecker_backend_ssh_address",level:3},{value:"<code>WOODPECKER_BACKEND_SSH_USER</code>",id:"woodpecker_backend_ssh_user",level:3},{value:"<code>WOODPECKER_BACKEND_SSH_KEY</code>",id:"woodpecker_backend_ssh_key",level:3},{value:"<code>WOODPECKER_BACKEND_SSH_KEY_PASSWORD</code>",id:"woodpecker_backend_ssh_key_password",level:3},{value:"<code>WOODPECKER_BACKEND_SSH_PASSWORD</code>",id:"woodpecker_backend_ssh_password",level:3}],h={toc:f};function y(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},h),d),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"ssh-backend"}),"SSH backend"),(0,r.kt)("admonition",p({},{type:"danger"}),(0,r.kt)("p",{parentName:"admonition"},"The SSH backend will execute the pipelines using SSH on a remote system without any isolation of any kind.")),(0,r.kt)("admonition",p({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"This backend is still pretty new and can not be treated as stable. Its implementation and configuration can change at any time.")),(0,r.kt)("p",null,"Since the code run directly on the SSH machine, a malicious pipeline could access and edit files the SSH user has access to and execute every command the remote user is allowed to use. Always restrict the user as far as possible!"),(0,r.kt)("p",null,"It is recommended to use this backend only for private setups where the code and pipelines can be trusted. You shouldn't use it for a public facing CI where anyone can submit code or add new repositories."),(0,r.kt)("p",null,"The backend will use a random directory in $TMPDIR to store the clone code and execute commands."),(0,r.kt)("h2",p({},{id:"configuration"}),"Configuration"),(0,r.kt)("h3",p({},{id:"woodpecker_backend_ssh_address"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_SSH_ADDRESS")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"The SSH host to run steps with ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," backend."),(0,r.kt)("h3",p({},{id:"woodpecker_backend_ssh_user"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_SSH_USER")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"The SSH user to run steps with ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," backend."),(0,r.kt)("h3",p({},{id:"woodpecker_backend_ssh_key"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_SSH_KEY")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Path to the private SSH key to run steps with ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," backend."),(0,r.kt)("h3",p({},{id:"woodpecker_backend_ssh_key_password"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_SSH_KEY_PASSWORD")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"The password for the private key to run steps with ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," backend."),(0,r.kt)("h3",p({},{id:"woodpecker_backend_ssh_password"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_SSH_PASSWORD")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default empty")),(0,r.kt)("p",null,"The SSH password to run steps with ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," backend."))}y.isMDXComponent=!0}}]);