"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7920],{19199:(e,t,r)=>{r.d(t,{c:()=>u});var a=r(50959),n=r(72407);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),l=r.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(r,t,e)}}},69678:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var a=r(50959),n=r(72407),l=r(79237),s=r(84587),c=r(18374),o=r(47601),u=r(19199),m=r(45924),h=r(28903),i=r(67248);const p=function(){const e=(0,h.k6)(),t=(0,h.TH)(),{siteConfig:{baseUrl:r}}=(0,n.Z)(),a=i.default.canUseDOM?new URLSearchParams(t.search):null,l=(null==a?void 0:a.get("q"))||"",s=(null==a?void 0:a.get("ctx"))||"",c=(null==a?void 0:a.get("version"))||"",o=e=>{const r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const r=o(t);e.replace({search:r.toString()})},updateSearchContext:r=>{const a=new URLSearchParams(t.search);a.set("ctx",r),e.replace({search:a.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${r}search?${t.toString()}`}}};var d=r(72813),g=r(72516),f=r(50262),y=r(67979),E=r(49116),S=r(88100),C=r(51459),v=r(59492);const w={searchContextInput:"searchContextInput_Unje",searchQueryInput:"searchQueryInput_Qy0D",searchResultItem:"searchResultItem_T4Jd",searchResultItemPath:"searchResultItemPath_FwJJ",searchResultItemSummary:"searchResultItemSummary_BGyJ",searchQueryColumn:"searchQueryColumn_sfYw",searchContextColumn:"searchContextColumn_Q0Y_"};function I(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:r,searchContext:l,searchVersion:c,updateSearchPath:h,updateSearchContext:i}=p(),[f,y]=(0,a.useState)(r),[E,C]=(0,a.useState)(),[I,R]=(0,a.useState)(),P=`${e}${c}`,_=(0,a.useMemo)((()=>f?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:f}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[f]);(0,a.useEffect)((()=>{h(f),E&&(f?E(f,(e=>{R(e)})):R(void 0))}),[f,E]);const b=(0,a.useCallback)((e=>{y(e.target.value)}),[]);return(0,a.useEffect)((()=>{r&&r!==f&&y(r)}),[r]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,d.w)(P,l);C((()=>(0,g.v)(e,t,100)))}()}),[l,P]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,_)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,_),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",{[w.searchQueryColumn]:Array.isArray(v.Kc),"col--9":Array.isArray(v.Kc),"col--12":!Array.isArray(v.Kc)})},a.createElement("input",{type:"search",name:"q",className:w.searchQueryInput,"aria-label":"Search",onChange:b,value:f,autoComplete:"off",autoFocus:!0})),Array.isArray(v.Kc)?a.createElement("div",{className:(0,m.Z)("col","col--3","padding-left--none",w.searchContextColumn)},a.createElement("select",{name:"search-context",className:w.searchContextInput,id:"context-selector",value:l,onChange:e=>i(e.target.value)},a.createElement("option",{value:""},v.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),v.Kc.map((e=>a.createElement("option",{key:e,value:e},e))))):null),!E&&f&&a.createElement("div",null,a.createElement(S.Z,null)),I&&(I.length>0?a.createElement("p",null,t(I.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,I&&I.map((e=>a.createElement(x,{key:e.document.i,searchResult:e}))))))}function x({searchResult:{document:e,type:t,page:r,tokens:n,metadata:l}}){const s=0===t,o=2===t,u=(s?e.b:r.b).slice(),m=o?e.s:e.t;s||u.push(r.t);let h="";if(v.vc&&n.length>0){const e=new URLSearchParams;for(const t of n)e.append("_highlight",t);h=`?${e.toString()}`}return a.createElement("article",{className:w.searchResultItem},a.createElement("h2",null,a.createElement(c.Z,{to:e.u+h+(e.h||""),dangerouslySetInnerHTML:{__html:o?(0,f.C)(m,n):(0,y.o)(m,(0,E.m)(l,"t"),n,100)}})),u.length>0&&a.createElement("p",{className:w.searchResultItemPath},(0,C.e)(u)),o&&a.createElement("p",{className:w.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,y.o)(e.t,(0,E.m)(l,"t"),n,100)}}))}const R=function(){return a.createElement(l.Z,null,a.createElement(I,null))}}}]);