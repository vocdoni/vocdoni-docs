"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),u=i,k=f["".concat(l,".").concat(u)]||f[u]||d[u]||a;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},o=void 0,s={unversionedId:"sdk/reference/interfaces/RegisterKeyTx",id:"sdk/reference/interfaces/RegisterKeyTx",title:"RegisterKeyTx",description:"@vocdoni/sdk / RegisterKeyTx",source:"@site/docs/sdk/reference/interfaces/RegisterKeyTx.md",sourceDirName:"sdk/reference/interfaces",slug:"/sdk/reference/interfaces/RegisterKeyTx",permalink:"/sdk/reference/interfaces/RegisterKeyTx",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Proof",permalink:"/sdk/reference/interfaces/Proof"},next:{title:"SendTokensTx",permalink:"/sdk/reference/interfaces/SendTokensTx"}},l={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"newKey",id:"newkey",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"nonce",id:"nonce",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"processId",id:"processid",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"proof",id:"proof",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"weight",id:"weight",level:3},{value:"Defined in",id:"defined-in-4",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README.md"},"@vocdoni/sdk")," / RegisterKeyTx"),(0,i.kt)("h1",{id:"interface-registerkeytx"},"Interface: RegisterKeyTx"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/RegisterKeyTx#newkey"},"newKey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/RegisterKeyTx#nonce"},"nonce")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/RegisterKeyTx#processid"},"processId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/RegisterKeyTx#proof"},"proof")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/RegisterKeyTx#weight"},"weight"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"newkey"},"newKey"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"newKey"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,i.kt)("p",null,"New key to register"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L121"},"api/chain/transactions.ts:121")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nonce"},"nonce"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nonce"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Unique number per vote attempt, so that replay attacks can't reuse this payload"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L115"},"api/chain/transactions.ts:115")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"processid"},"processId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"processId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,i.kt)("p",null,"The process for which the vote is casted"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L117"},"api/chain/transactions.ts:117")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"proof"},"proof"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"proof"),": ",(0,i.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/Proof"},(0,i.kt)("inlineCode",{parentName:"a"},"Proof"))),(0,i.kt)("p",null,"Franchise proof"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L119"},"api/chain/transactions.ts:119")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"weight"},"weight"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"weight"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Weight to delegate to newKey"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L123"},"api/chain/transactions.ts:123")))}d.isMDXComponent=!0}}]);