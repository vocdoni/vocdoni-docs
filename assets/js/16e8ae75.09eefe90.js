"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,k=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?i.createElement(k,l(l({ref:t},c),{},{components:n})):i.createElement(k,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={},l=void 0,o={unversionedId:"sdk/reference/interfaces/IElectionListFilter",id:"sdk/reference/interfaces/IElectionListFilter",title:"IElectionListFilter",description:"@vocdoni/sdk / IElectionListFilter",source:"@site/docs/sdk/reference/interfaces/IElectionListFilter.md",sourceDirName:"sdk/reference/interfaces",slug:"/sdk/reference/interfaces/IElectionListFilter",permalink:"/sdk/reference/interfaces/IElectionListFilter",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"IElectionKeysResponse",permalink:"/sdk/reference/interfaces/IElectionKeysResponse"},next:{title:"IElectionListResponse",permalink:"/sdk/reference/interfaces/IElectionListResponse"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"electionId",id:"electionid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"organizationId",id:"organizationid",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"status",id:"status",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"withResults",id:"withresults",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk"},"@vocdoni/sdk")," / IElectionListFilter"),(0,r.kt)("h1",{id:"interface-ielectionlistfilter"},"Interface: IElectionListFilter"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"IElectionListFilter#electionid"},"electionId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"IElectionListFilter#organizationid"},"organizationId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"IElectionListFilter#status"},"status")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"IElectionListFilter#withresults"},"withResults"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"electionid"},"electionId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"electionId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/election.ts#L364"},"api/election.ts:364")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"organizationid"},"organizationId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"organizationId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/election.ts#L363"},"api/election.ts:363")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"status"},"status"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"status"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk/reference/enums/ElectionStatus#process_unknown"},(0,r.kt)("inlineCode",{parentName:"a"},"PROCESS_UNKNOWN"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/sdk/reference/enums/ElectionStatus#ended"},(0,r.kt)("inlineCode",{parentName:"a"},"ENDED"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/sdk/reference/enums/ElectionStatus#canceled"},(0,r.kt)("inlineCode",{parentName:"a"},"CANCELED"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/sdk/reference/enums/ElectionStatus#paused"},(0,r.kt)("inlineCode",{parentName:"a"},"PAUSED"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/sdk/reference/enums/ElectionStatus#results"},(0,r.kt)("inlineCode",{parentName:"a"},"RESULTS"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"../enums/ElectionStatusReady#ready"},(0,r.kt)("inlineCode",{parentName:"a"},"READY"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/election.ts#L366"},"api/election.ts:366")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"withresults"},"withResults"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"withResults"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/election.ts#L365"},"api/election.ts:365")))}d.isMDXComponent=!0}}]);