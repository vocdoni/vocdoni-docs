"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1004],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=s(r),m=a,u=k["".concat(c,".").concat(m)]||k[m]||d[m]||l;return r?n.createElement(u,o(o({ref:t},p),{},{components:r})):n.createElement(u,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},22447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={custom_edit_url:null},o=void 0,i={unversionedId:"sdk/ZkAPI",id:"sdk/ZkAPI",title:"ZkAPI",description:"Methods",source:"@site/docs/sdk/ZkAPI.mdx",sourceDirName:"sdk",slug:"/sdk/ZkAPI",permalink:"/sdk/ZkAPI",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"sdk",previous:{title:"WalletAPI",permalink:"/sdk/WalletAPI"},next:{title:"VocdoniCensus3Client",permalink:"/sdk/VocdoniCensus3Client"}},c={},s=[{value:"constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"proof",id:"proof",level:3},{value:"sik",id:"sik",level:3}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class ZkAPI\n")),(0,a.kt)("div",null),(0,a.kt)("div",{className:"container"},(0,a.kt)("div",{className:"row mb-2"},(0,a.kt)("div",{className:"col col--12"},(0,a.kt)("strong",null,"Methods"))),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col col--12"},(0,a.kt)("a",{href:"#proof"},"proof"),(0,a.kt)("span",{className:"badge badge--info margin-left--sm"},"static"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#sik"},"sik"),(0,a.kt)("span",{className:"badge badge--info margin-left--sm"},"static")))),(0,a.kt)("h2",{id:"constructor"},"constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new ZkAPI()\n")),(0,a.kt)("div",null),(0,a.kt)("p",null,"Cannot be constructed."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"proof"},"proof"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--info"},"static")),(0,a.kt)("p",null,"Returns the ZK proof on given address"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","IZkProofResponse",">"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ZK proof")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"url"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"API endpoint URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"key"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"The address to be checked")))),(0,a.kt)("h3",{id:"sik"},"sik"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--info"},"static")),(0,a.kt)("p",null,"Returns the SIK on given address"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","IZkSIKResponse",">"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ZK proof")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"url"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"API endpoint URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"key"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"The address to be checked")))))}d.isMDXComponent=!0}}]);