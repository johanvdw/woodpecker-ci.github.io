"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7920],{82961:(e,t,a)=>{a.d(t,{c:()=>u});var r=a(50959),n=a(88975);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}},90067:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});var r=a(50959),n=a(88975),l=a(84297),s=a(59394),c=a(59167),o=a(62901),u=a(82961),m=a(45924),h=a(28903),i=a(8369);const p=function(){const e=(0,h.k6)(),t=(0,h.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),r=i.default.canUseDOM?new URLSearchParams(t.search):null,l=(null==r?void 0:r.get("q"))||"",s=(null==r?void 0:r.get("ctx"))||"",c=(null==r?void 0:r.get("version"))||"",o=e=>{const a=new URLSearchParams(t.search);return e?a.set("q",e):a.delete("q"),a};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const a=o(t);e.replace({search:a.toString()})},updateSearchContext:a=>{const r=new URLSearchParams(t.search);r.set("ctx",a),e.replace({search:r.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${a}search?${t.toString()}`}}};var d=a(64097),g=a(21202),f=a(41037),y=a(15147),E=a(11176),S=a(44943),C=a(88634),I=a(27536);const v={searchContextInput:"searchContextInput_gsFa",searchQueryInput:"searchQueryInput_DITe",searchResultItem:"searchResultItem_R8lS",searchResultItemPath:"searchResultItemPath_KTXc",searchResultItemSummary:"searchResultItemSummary_dTty",searchQueryColumn:"searchQueryColumn__yiX",searchContextColumn:"searchContextColumn_t0Q3"};function w(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:a,searchContext:l,searchVersion:c,updateSearchPath:h,updateSearchContext:i}=p(),[f,y]=(0,r.useState)(a),[E,C]=(0,r.useState)(),[w,R]=(0,r.useState)(),P=`${e}${c}`,_=(0,r.useMemo)((()=>f?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:f}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[f]);(0,r.useEffect)((()=>{h(f),E&&(f?E(f,(e=>{R(e)})):R(void 0))}),[f,E]);const b=(0,r.useCallback)((e=>{y(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==f&&y(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,d.w)(P,l);C((()=>(0,g.v)(e,t,100)))}()}),[l,P]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,_)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,_),r.createElement("div",{className:"row"},r.createElement("div",{className:(0,m.Z)("col",{[v.searchQueryColumn]:Array.isArray(I.Kc),"col--9":Array.isArray(I.Kc),"col--12":!Array.isArray(I.Kc)})},r.createElement("input",{type:"search",name:"q",className:v.searchQueryInput,"aria-label":"Search",onChange:b,value:f,autoComplete:"off",autoFocus:!0})),Array.isArray(I.Kc)?r.createElement("div",{className:(0,m.Z)("col","col--3","padding-left--none",v.searchContextColumn)},r.createElement("select",{name:"search-context",className:v.searchContextInput,id:"context-selector",value:l,onChange:e=>i(e.target.value)},r.createElement("option",{value:""},I.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),I.Kc.map((e=>r.createElement("option",{key:e,value:e},e))))):null),!E&&f&&r.createElement("div",null,r.createElement(S.Z,null)),w&&(w.length>0?r.createElement("p",null,t(w.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:w.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,w&&w.map((e=>r.createElement(x,{key:e.document.i,searchResult:e}))))))}function x({searchResult:{document:e,type:t,page:a,tokens:n,metadata:l}}){const s=0===t,o=2===t,u=(s?e.b:a.b).slice(),m=o?e.s:e.t;s||u.push(a.t);let h="";if(I.vc&&n.length>0){const e=new URLSearchParams;for(const t of n)e.append("_highlight",t);h=`?${e.toString()}`}return r.createElement("article",{className:v.searchResultItem},r.createElement("h2",null,r.createElement(c.Z,{to:e.u+h+(e.h||""),dangerouslySetInnerHTML:{__html:o?(0,f.C)(m,n):(0,y.o)(m,(0,E.m)(l,"t"),n,100)}})),u.length>0&&r.createElement("p",{className:v.searchResultItemPath},(0,C.e)(u)),o&&r.createElement("p",{className:v.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,y.o)(e.t,(0,E.m)(l,"t"),n,100)}}))}const R=function(){return r.createElement(l.Z,null,r.createElement(w,null))}}}]);