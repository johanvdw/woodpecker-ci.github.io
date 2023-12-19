/*! For license information please see 0d3518dd.8ac4ecbb.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6531],{34933:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(11527),r=t(46224);const a={},s="Guides",i={id:"development/guides",title:"Guides",description:"ORM",source:"@site/docs/92-development/06-guides.md",sourceDirName:"92-development",slug:"/development/guides",permalink:"/docs/next/development/guides",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/92-development/06-guides.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/next/development/architecture"},next:{title:"Translations",permalink:"/docs/next/development/translations"}},d={},c=[{value:"ORM",id:"orm",level:2},{value:"Add a new migration",id:"add-a-new-migration",level:2},{value:"Constants of official images",id:"constants-of-official-images",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"guides",children:"Guides"}),"\n",(0,n.jsx)(o.h2,{id:"orm",children:"ORM"}),"\n",(0,n.jsxs)(o.p,{children:["Woodpecker uses ",(0,n.jsx)(o.a,{href:"https://xorm.io/",children:"Xorm"})," as ORM for the database connection.\nYou can find its documentation at ",(0,n.jsx)(o.a,{href:"https://gobook.io/read/gitea.com/xorm/manual-en-US/",children:"gobook.io/read/gitea.com/xorm"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"add-a-new-migration",children:"Add a new migration"}),"\n",(0,n.jsxs)(o.p,{children:["Woodpecker uses migrations to change the database schema if a database model has been changed. If for example a developer removes a property ",(0,n.jsx)(o.code,{children:"Counter"})," from the model ",(0,n.jsx)(o.code,{children:"Repo"})," in ",(0,n.jsx)(o.code,{children:"server/model/"})," they would need to add a new migration task like the following example to a file like ",(0,n.jsx)(o.code,{children:"server/store/datastore/migration/004_repos_drop_repo_counter.go"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-go",children:'package migration\n\nimport (\n  "xorm.io/xorm"\n)\n\nvar alterTableReposDropCounter = task{\n  name: "alter-table-drop-counter",\n  fn: func(sess *xorm.Session) error {\n    return dropTableColumns(sess, "repos", "repo_counter")\n  },\n}\n'})}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["Adding new properties to models will be handled automatically by the underlying ",(0,n.jsx)(o.a,{href:"#orm",children:"ORM"})," based on the ",(0,n.jsx)(o.a,{href:"https://stackoverflow.com/questions/10858787/what-are-the-uses-for-tags-in-go",children:"struct field tags"})," of the model. If you add a completely new model, you have to add it to the ",(0,n.jsx)(o.code,{children:"allBeans"})," variable at ",(0,n.jsx)(o.code,{children:"server/store/datastore/migration/migration.go"})," to get a new table created."]})}),"\n",(0,n.jsx)(o.admonition,{type:"warning",children:(0,n.jsxs)(o.p,{children:["You should not use ",(0,n.jsx)(o.code,{children:"sess.Begin()"}),", ",(0,n.jsx)(o.code,{children:"sess.Commit()"})," or ",(0,n.jsx)(o.code,{children:"sess.Close()"})," inside a migration. Session / transaction handling will be done by the underlying migration manager."]})}),"\n",(0,n.jsxs)(o.p,{children:["To automatically execute the migration after the start of the server, the new migration needs to be added to the end of ",(0,n.jsx)(o.code,{children:"migrationTasks"})," in ",(0,n.jsx)(o.code,{children:"server/store/datastore/migration/migration.go"}),". After a successful execution of that transaction the server will automatically add the migration to a list, so it won't be executed again on the next start."]}),"\n",(0,n.jsx)(o.h2,{id:"constants-of-official-images",children:"Constants of official images"}),"\n",(0,n.jsxs)(o.p,{children:["All official default images, are saved in ",(0,n.jsx)(o.a,{href:"https://github.com/woodpecker-ci/woodpecker/blob/main/shared/constant/constant.go",children:"shared/constant/constant.go"})," and must be pinned by an exact tag."]})]})}function m(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3354:(e,o,t)=>{var n=t(50959),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,t){var n,a={},c=null,l=null;for(n in void 0!==t&&(c=""+t),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)s.call(o,n)&&!d.hasOwnProperty(n)&&(a[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===a[n]&&(a[n]=o[n]);return{$$typeof:r,type:e,key:c,ref:l,props:a,_owner:i.current}}o.Fragment=a,o.jsx=c,o.jsxs=c},11527:(e,o,t)=>{e.exports=t(3354)},46224:(e,o,t)=>{t.d(o,{Z:()=>i,a:()=>s});var n=t(50959);const r={},a=n.createContext(r);function s(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);