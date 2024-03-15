"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8913],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,h=m["".concat(i,".").concat(u)]||m[u]||d[u]||n;return a?o.createElement(h,c(c({ref:t},p),{},{components:a})):o.createElement(h,c({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<n;l++)c[l]=a[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},28068:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=a(87462),r=(a(67294),a(3905));const n={},c="Data Schemes",s={unversionedId:"protocol/data-schemes/data-schemes",id:"protocol/data-schemes/data-schemes",title:"Data Schemes",description:"When it comes to voting processes, there are two main types of data storage at the protocol-level: protocol-level data stored on the Vochain and readable metadata like election descriptions stored on IPFS.",source:"@site/docs/protocol/data-schemes/data-schemes.md",sourceDirName:"protocol/data-schemes",slug:"/protocol/data-schemes/",permalink:"/protocol/data-schemes/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"On-Chain Census",permalink:"/protocol/census/on-chain"},next:{title:"Election Metadata",permalink:"/protocol/data-schemes/election"}},i={},l=[{value:"Protocol Data",id:"protocol-data",level:2},{value:"Metadata",id:"metadata",level:2}],p={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-schemes"},"Data Schemes"),(0,r.kt)("p",null,"When it comes to voting processes, there are two main types of data storage at the protocol-level: protocol-level data stored ",(0,r.kt)("strong",{parentName:"p"},"on the ",(0,r.kt)("a",{parentName:"strong",href:"/protocol#11-the-blockchain"},"Vochain"))," and readable metadata like election descriptions stored on ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/protocol#13-distributed-storage"},"IPFS")),". "),(0,r.kt)("h2",{id:"protocol-data"},"Protocol Data"),(0,r.kt)("p",null,"Protocol data is data that is published directly to the blockchain and determines how election, votes, and organizations behave. Much of the protocol data is defined by Protobuf-encoded packages sent in blockchain transactions. "),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"Metadata is typically human-readable data that is important but does not ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"define"))," how an election behaves at a protocol level. Metadata is represented as a JSON file that conforms to a specific schema. This data is typically retrieved using a P2P storage system like IPFS, with an immutable URI and hash of that data stored on the blockchain to ensure it cannot be tampered with."))}d.isMDXComponent=!0}}]);