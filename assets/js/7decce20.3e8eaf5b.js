"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2108],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),f=n,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return a?r.createElement(m,i(i({ref:t},l),{},{components:a})):r.createElement(m,i({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7108:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),i=["components"],s={},c="Databases",d={unversionedId:"administration/database",id:"version-0.15/administration/database",title:"Databases",description:"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL or Postgres database.",source:"@site/versioned_docs/version-0.15/30-administration/30-database.md",sourceDirName:"30-administration",slug:"/administration/database",permalink:"/docs/administration/database",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/30-administration/30-database.md",tags:[],version:"0.15",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Agent configuration",permalink:"/docs/administration/agent-config"},next:{title:"SSL",permalink:"/docs/administration/ssl"}},l={},u=[{value:"Configure sqlite",id:"configure-sqlite",level:2},{value:"Configure MySQL",id:"configure-mysql",level:2},{value:"Configure Postgres",id:"configure-postgres",level:2},{value:"Database Creation",id:"database-creation",level:2},{value:"Database Migration",id:"database-migration",level:2},{value:"Database Backups",id:"database-backups",level:2},{value:"Database Archiving",id:"database-archiving",level:2}],p={toc:u};function f(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"databases"},"Databases"),(0,o.kt)("p",null,"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL or Postgres database."),(0,o.kt)("h2",{id:"configure-sqlite"},"Configure sqlite"),(0,o.kt)("p",null,"By default Woodpecker uses a sqlite database stored under ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/woodpecker/"),". You can mount a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/#create-and-manage-volumes"},"data volume")," to persist the sqlite database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n+   volumes:\n+     - woodpecker-server-data:/var/lib/woodpecker/\n")),(0,o.kt)("h2",{id:"configure-mysql"},"Configure MySQL"),(0,o.kt)("p",null,"The below example demonstrates mysql database configuration. See the official driver ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name"},"documentation")," for configuration options and examples."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n+     WOODPECKER_DATABASE_DRIVER: mysql\n+     WOODPECKER_DATABASE_DATASOURCE: root:password@tcp(1.2.3.4:3306)/woodpecker?parseTime=true\n")),(0,o.kt)("h2",{id:"configure-postgres"},"Configure Postgres"),(0,o.kt)("p",null,"The below example demonstrates postgres database configuration. See the official driver ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/static/libpq-connect.html#LIBPQ-CONNSTRING"},"documentation")," for configuration options and examples.\nPlease use postgres versions equal or higher than ",(0,o.kt)("strong",{parentName:"p"},"11"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n+     WOODPECKER_DATABASE_DRIVER: postgres\n+     WOODPECKER_DATABASE_DATASOURCE: postgres://root:password@1.2.3.4:5432/postgres?sslmode=disable\n")),(0,o.kt)("h2",{id:"database-creation"},"Database Creation"),(0,o.kt)("p",null,"Woodpecker does not create your database automatically. If you are using the mysql or postgres driver you will need to manually create your database using ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE")),(0,o.kt)("h2",{id:"database-migration"},"Database Migration"),(0,o.kt)("p",null,"Woodpecker automatically handles database migration, including the initial creation of tables and indexes. New versions of Woodpecker will automatically upgrade the database unless otherwise specified in the release notes."),(0,o.kt)("h2",{id:"database-backups"},"Database Backups"),(0,o.kt)("p",null,"Woodpecker does not perform database backups. This should be handled by separate third party tools provided by your database vendor of choice."),(0,o.kt)("h2",{id:"database-archiving"},"Database Archiving"),(0,o.kt)("p",null,"Woodpecker does not perform data archival; it considered out-of-scope for the project. Woodpecker is rather conservative with the amount of data it stores, however, you should expect the database logs to grow the size of your database considerably."))}f.isMDXComponent=!0}}]);