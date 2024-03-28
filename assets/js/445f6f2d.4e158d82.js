"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,k=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,c={unversionedId:"sdk/reference/interfaces/SetAccountTx",id:"sdk/reference/interfaces/SetAccountTx",title:"SetAccountTx",description:"@vocdoni/sdk / SetAccountTx",source:"@site/docs/sdk/reference/interfaces/SetAccountTx.md",sourceDirName:"sdk/reference/interfaces",slug:"/sdk/reference/interfaces/SetAccountTx",permalink:"/sdk/reference/interfaces/SetAccountTx",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ServiceProperties",permalink:"/sdk/reference/interfaces/ServiceProperties"},next:{title:"SetProcessTx",permalink:"/sdk/reference/interfaces/SetProcessTx"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"account",id:"account",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"delegates",id:"delegates",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"faucetPackage",id:"faucetpackage",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"infoURI",id:"infouri",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"nonce",id:"nonce",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"txtype",id:"txtype",level:3},{value:"Defined in",id:"defined-in-5",level:4}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk"},"@vocdoni/sdk")," / SetAccountTx"),(0,r.kt)("h1",{id:"interface-setaccounttx"},"Interface: SetAccountTx"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"SetAccountTx#account"},"account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"SetAccountTx#delegates"},"delegates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"SetAccountTx#faucetpackage"},"faucetPackage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"SetAccountTx#infouri"},"infoURI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"SetAccountTx#nonce"},"nonce")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"SetAccountTx#txtype"},"txtype"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"account"},"account"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"account"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/chain/transactions.ts#L151"},"api/chain/transactions.ts:151")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"delegates"},"delegates"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"delegates"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"[]"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/chain/transactions.ts#L153"},"api/chain/transactions.ts:153")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"faucetpackage"},"faucetPackage"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"faucetPackage"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"FaucetPackage")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/chain/transactions.ts#L152"},"api/chain/transactions.ts:152")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"infouri"},"infoURI"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"infoURI"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/chain/transactions.ts#L150"},"api/chain/transactions.ts:150")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nonce"},"nonce"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"nonce"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/chain/transactions.ts#L149"},"api/chain/transactions.ts:149")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"txtype"},"txtype"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"txtype"),": ",(0,r.kt)("a",{parentName:"p",href:"../enums/TxType"},(0,r.kt)("inlineCode",{parentName:"a"},"TxType"))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/chain/transactions.ts#L148"},"api/chain/transactions.ts:148")))}d.isMDXComponent=!0}}]);