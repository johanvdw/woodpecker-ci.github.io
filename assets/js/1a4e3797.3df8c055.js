"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7920],{31934:(e,t,a)=>{a.d(t,{c:()=>u});var r=a(59496),n=a(92453);const l=["zero","one","two","few","many","other"];function c(e){return l.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function u(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}},23851:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var r=a(59496),n=a(92453),l=a(63040),c=a(78998),s=a(49685),o=a(38665),u=a(31934),m=a(45924),h=a(83442),i=a(37715);const p=function(){const e=(0,h.k6)(),t=(0,h.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),r=i.default.canUseDOM?new URLSearchParams(t.search):null,l=(null==r?void 0:r.get("q"))||"",c=(null==r?void 0:r.get("ctx"))||"",s=(null==r?void 0:r.get("version"))||"",o=e=>{const a=new URLSearchParams(t.search);return e?a.set("q",e):a.delete("q"),a};return{searchValue:l,searchContext:c,searchVersion:s,updateSearchPath:t=>{const a=o(t);e.replace({search:a.toString()})},updateSearchContext:a=>{const r=new URLSearchParams(t.search);r.set("ctx",a),e.replace({search:r.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${a}search?${t.toString()}`}}};var d=a(74816),g=a(35207),f=a(66309),y=a(28496),E=a(89715),S=a(92571),v=a(92048),w=a(87365);const x="searchContextInput_LcYs",C="searchQueryInput_DXC2",I="searchResultItem_ybJS",P="searchResultItemPath_EIMi",b="searchResultItemSummary_WTLc",R="searchQueryColumn_txfM",_="searchContextColumn_Ln5g";function k(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:a,searchContext:l,searchVersion:s,updateSearchPath:h,updateSearchContext:i}=p(),[f,y]=(0,r.useState)(a),[E,v]=(0,r.useState)(),[I,P]=(0,r.useState)(),b=`${e}${s}`,k=(0,r.useMemo)((()=>f?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:f}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[f]);(0,r.useEffect)((()=>{h(f),E&&(f?E(f,(e=>{P(e)})):P(void 0))}),[f,E]);const F=(0,r.useCallback)((e=>{y(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==f&&y(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,d.w)(b,l);v((()=>(0,g.v)(e,t,100)))}()}),[l,b]),r.createElement(r.Fragment,null,r.createElement(c.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,k)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,k),r.createElement("div",{className:"row"},r.createElement("div",{className:(0,m.Z)("col",{[R]:Array.isArray(w.Kc),"col--9":Array.isArray(w.Kc),"col--12":!Array.isArray(w.Kc)})},r.createElement("input",{type:"search",name:"q",className:C,"aria-label":"Search",onChange:F,value:f,autoComplete:"off",autoFocus:!0})),Array.isArray(w.Kc)?r.createElement("div",{className:(0,m.Z)("col","col--3","padding-left--none",_)},r.createElement("select",{name:"search-context",className:x,id:"context-selector",value:l,onChange:e=>i(e.target.value)},r.createElement("option",{value:""},w.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),w.Kc.map((e=>r.createElement("option",{key:e,value:e},e))))):null),!E&&f&&r.createElement("div",null,r.createElement(S.Z,null)),I&&(I.length>0?r.createElement("p",null,t(I.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,I&&I.map((e=>r.createElement($,{key:e.document.i,searchResult:e}))))))}function $({searchResult:{document:e,type:t,page:a,tokens:n,metadata:l}}){const c=0===t,o=2===t,u=(c?e.b:a.b).slice(),m=o?e.s:e.t;c||u.push(a.t);let h="";if(w.vc&&n.length>0){const e=new URLSearchParams;for(const t of n)e.append("_highlight",t);h=`?${e.toString()}`}return r.createElement("article",{className:I},r.createElement("h2",null,r.createElement(s.Z,{to:e.u+h+(e.h||""),dangerouslySetInnerHTML:{__html:o?(0,f.C)(m,n):(0,y.o)(m,(0,E.m)(l,"t"),n,100)}})),u.length>0&&r.createElement("p",{className:P},(0,v.e)(u)),o&&r.createElement("p",{className:b,dangerouslySetInnerHTML:{__html:(0,y.o)(e.t,(0,E.m)(l,"t"),n,100)}}))}const F=function(){return r.createElement(l.Z,null,r.createElement(k,null))}}}]);