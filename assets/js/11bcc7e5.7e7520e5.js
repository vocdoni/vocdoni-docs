"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[534],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),k=s(n),f=r,N=k["".concat(d,".").concat(f)]||k[f]||m[f]||i;return n?a.createElement(N,p(p({ref:t},o),{},{components:n})):a.createElement(N,p({ref:t},o))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},50514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},p=void 0,l={unversionedId:"sdk/reference/classes/CspAPI",id:"sdk/reference/classes/CspAPI",title:"CspAPI",description:"@vocdoni/sdk / CspAPI",source:"@site/docs/sdk/reference/classes/CspAPI.md",sourceDirName:"sdk/reference/classes",slug:"/sdk/reference/classes/CspAPI",permalink:"/sdk/reference/classes/CspAPI",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ChainService",permalink:"/sdk/reference/classes/ChainService"},next:{title:"CspCensus",permalink:"/sdk/reference/classes/CspCensus"}},d={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Methods",id:"methods-1",level:2},{value:"info",id:"info",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"sign",id:"sign",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"step",id:"step",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}],o={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk"},"@vocdoni/sdk")," / CspAPI"),(0,r.kt)("h1",{id:"class-cspapi"},"Class: CspAPI"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"API")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CspAPI"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"CspAPI#info"},"info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"CspAPI#sign"},"sign")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"CspAPI#step"},"step"))),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"info"},"info"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"info"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/ICspInfoResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"ICspInfoResponse")),">"),(0,r.kt)("p",null,"CSP info"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"CSP endpoint URL")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/ICspInfoResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"ICspInfoResponse")),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/csp.ts#L85"},"api/csp.ts:85")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sign"},"sign"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"sign"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"electionId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"signatureType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"payload"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/ICspSignResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"ICspSignResponse")),">"),(0,r.kt)("p",null,"CSP sign"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"CSP endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"electionId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The election identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signatureType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of the signature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The payload from the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"token")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The token from the last step")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/ICspSignResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"ICspSignResponse")),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/csp.ts#L132"},"api/csp.ts:132")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"step"},"step"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"step"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"electionId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"signatureType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"authType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"stepNr"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"authToken?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/ICspIntermediateStepResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"ICspIntermediateStepResponse"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"../interfaces/ICspFinalStepResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"ICspFinalStepResponse")),">"),(0,r.kt)("p",null,"CSP step"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"CSP endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"electionId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The election identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signatureType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of the signature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"authType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of the auth method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"stepNr")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The step number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The auth data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"authToken?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The auth token from the previous step")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/ICspIntermediateStepResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"ICspIntermediateStepResponse"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"../interfaces/ICspFinalStepResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"ICspFinalStepResponse")),">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/csp.ts#L104"},"api/csp.ts:104")))}m.isMDXComponent=!0}}]);