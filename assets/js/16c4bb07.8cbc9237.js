"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7533],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=s,y=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},21852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const a={},o=void 0,i={unversionedId:"sdk/reference/interfaces/ICensus3StrategyHoldersResponse",id:"sdk/reference/interfaces/ICensus3StrategyHoldersResponse",title:"ICensus3StrategyHoldersResponse",description:"@vocdoni/sdk / ICensus3StrategyHoldersResponse",source:"@site/docs/sdk/reference/interfaces/ICensus3StrategyHoldersResponse.md",sourceDirName:"sdk/reference/interfaces",slug:"/sdk/reference/interfaces/ICensus3StrategyHoldersResponse",permalink:"/sdk/reference/interfaces/ICensus3StrategyHoldersResponse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ICensus3StrategyEstimationQueueResponse",permalink:"/sdk/reference/interfaces/ICensus3StrategyEstimationQueueResponse"},next:{title:"ICensus3StrategyHoldersResponsePaginated",permalink:"/sdk/reference/interfaces/ICensus3StrategyHoldersResponsePaginated"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"holders",id:"holders",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../README.md"},"@vocdoni/sdk")," / ICensus3StrategyHoldersResponse"),(0,s.kt)("h1",{id:"interface-icensus3strategyholdersresponse"},"Interface: ICensus3StrategyHoldersResponse"),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"ICensus3StrategyHoldersResponse"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/ICensus3StrategyHoldersResponsePaginated"},(0,s.kt)("inlineCode",{parentName:"a"},"ICensus3StrategyHoldersResponsePaginated"))))),(0,s.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,s.kt)("h3",{id:"properties"},"Properties"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/ICensus3StrategyHoldersResponse#holders"},"holders"))),(0,s.kt)("h2",{id:"properties-1"},"Properties"),(0,s.kt)("h3",{id:"holders"},"holders"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"holders"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Object")),(0,s.kt)("p",null,"The list of the strategy holders"),(0,s.kt)("h4",{id:"index-signature"},"Index signature"),(0,s.kt)("p",null,"\u25aa ","[key: ",(0,s.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/census3/strategy.ts#L36"},"api/census3/strategy.ts:36")))}d.isMDXComponent=!0}}]);