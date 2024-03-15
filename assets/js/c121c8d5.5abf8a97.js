"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3195],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(t),c=a,f=s["".concat(l,".").concat(c)]||s[c]||k[c]||i;return t?r.createElement(f,p(p({ref:n},m),{},{components:t})):r.createElement(f,p({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=s;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var d=2;d<i;d++)p[d]=t[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},73535:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(87462),a=(t(67294),t(3905));const i={},p=void 0,o={unversionedId:"sdk/reference/interfaces/Proof",id:"sdk/reference/interfaces/Proof",title:"Proof",description:"@vocdoni/sdk / Exports / Proof",source:"@site/docs/sdk/reference/interfaces/Proof.md",sourceDirName:"sdk/reference/interfaces",slug:"/sdk/reference/interfaces/Proof",permalink:"/sdk/reference/interfaces/Proof",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Process",permalink:"/sdk/reference/interfaces/Process"},next:{title:"RegisterKeyTx",permalink:"/sdk/reference/interfaces/RegisterKeyTx"}},l={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"payload",id:"payload",level:3},{value:"Defined in",id:"defined-in",level:4}],m={toc:d};function k(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk"},"@vocdoni/sdk")," / ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/modules"},"Exports")," / Proof"),(0,a.kt)("h1",{id:"interface-proof"},"Interface: Proof"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/Proof#payload"},"payload"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"payload"},"payload"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"payload"),": ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"graviton"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"graviton"),": ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"siblings"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"  }  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"iden3"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"iden3"),": ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"siblings"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"  }  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"ethereumStorage"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"ethereumStorage"),": ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"siblings"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"  }  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"ethereumAccount"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"ethereumAccount"),": ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"balance"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"codeHash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"nonce"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"siblings"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"storageHash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"  }  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"ca"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"ca"),": ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle"),": ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"address"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"processId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"  } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"signature"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ProofCA_Type"),"  }  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"arbo"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"arbo"),": ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"keyType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ProofArbo_KeyType")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"siblings"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ProofArbo_Type")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"  }  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"zkSnark"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"zkSnark"),": ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"c"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"circuitParametersIndex"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"publicInputs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]  }  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"minimeStorage"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"minimeStorage"),": ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"proofNextBlock?"),": ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"siblings"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"  } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"proofPrevBlock"),": ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"siblings"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"  }  }  }"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain/transactions.ts#L341"},"api/chain/transactions.ts:341")))}k.isMDXComponent=!0}}]);