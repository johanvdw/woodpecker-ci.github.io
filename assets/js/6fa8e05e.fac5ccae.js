"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2927],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2742:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={},d="Guides",l={unversionedId:"development/guides",id:"version-0.15/development/guides",title:"Guides",description:"ORM",source:"@site/versioned_docs/version-0.15/92-development/06-guides.md",sourceDirName:"92-development",slug:"/development/guides",permalink:"/docs/development/guides",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/92-development/06-guides.md",tags:[],version:"0.15",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/development/architecture"}},p={},c=[{value:"ORM",id:"orm",level:2},{value:"Add a new migration",id:"add-a-new-migration",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"guides"},"Guides"),(0,a.kt)("h2",{id:"orm"},"ORM"),(0,a.kt)("p",null,"Woodpecker uses ",(0,a.kt)("a",{parentName:"p",href:"https://xorm.io/"},"Xorm")," as ORM for the database connection.\nYou can find its documentation at ",(0,a.kt)("a",{parentName:"p",href:"https://gobook.io/read/gitea.com/xorm/manual-en-US/"},"gobook.io/read/gitea.com/xorm"),"."),(0,a.kt)("h2",{id:"add-a-new-migration"},"Add a new migration"),(0,a.kt)("p",null,"Woodpecker uses migrations to change the database schema if a database model has been changed. If for example a developer removes a property ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter")," from the model ",(0,a.kt)("inlineCode",{parentName:"p"},"Repo")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"server/model/")," they would need to add a new migration task like the following  example to a file like ",(0,a.kt)("inlineCode",{parentName:"p"},"server/store/datastore/migration/004_repos_drop_repo_counter.go"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package migration\n\nimport (\n  "xorm.io/xorm"\n)\n\nvar alterTableReposDropCounter = task{\n  name: "alter-table-drop-counter",\n  fn: func(sess *xorm.Session) error {\n    return dropTableColumns(sess, "repos", "repo_counter")\n  },\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Adding new properties to models will be handled automatically by the underlying ",(0,a.kt)("a",{parentName:"p",href:"#orm"},"ORM")," based on the ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/10858787/what-are-the-uses-for-tags-in-go"},"struct field tags")," of the model. If you add a completely new model, you have to add it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"allBeans")," variable at ",(0,a.kt)("inlineCode",{parentName:"p"},"server/store/datastore/migration/migration.go")," to get a new table created.")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"You should not use ",(0,a.kt)("inlineCode",{parentName:"p"},"sess.Begin()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sess.Commit()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"sess.Close()")," inside a migration. Session / transaction handling will be done by the underlying migration manager.")),(0,a.kt)("p",null,"To automatically execute the migration after the start of the server, the new migration needs to be added to the end of ",(0,a.kt)("inlineCode",{parentName:"p"},"migrationTasks")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"server/store/datastore/migration/migration.go"),". After a successful execution of that transaction the server will automatically add the migration to a list, so it wont be executed again on the next start."))}m.isMDXComponent=!0}}]);