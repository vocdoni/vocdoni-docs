(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1597],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},85162:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o(67294),a=o(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:o,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:o},t)}},51910:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>T,contentTitle:()=>k,default:()=>A,frontMatter:()=>y,metadata:()=>w,toc:()=>E});var n=o(87462),a=o(67294),r=o(3905);var i=o(86010),s=o(72389),l=o(67392),c=o(7094),u=o(12466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){const{lazy:t,block:o,defaultValue:r,values:s,groupId:m,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=s??h.map((e=>{let{props:{value:t,label:o,attributes:n}}=e;return{value:t,label:o,attributes:n}})),b=(0,l.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===r?r:r??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,c.U)(),[w,T]=(0,a.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=m){const e=y[m];null!=e&&e!==w&&v.some((t=>t.value===e))&&T(e)}const A=e=>{const t=e.currentTarget,o=E.indexOf(t),n=v[o].value;n!==w&&(x(t),T(n),null!=m&&k(m,String(n)))},O=e=>{let t=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const o=E.indexOf(e.currentTarget)+1;t=E[o]??E[0];break}case"ArrowLeft":{const o=E.indexOf(e.currentTarget)-1;t=E[o]??E[E.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},f)},v.map((e=>{let{value:t,label:o,attributes:r}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:O,onClick:A},r,{className:(0,i.Z)("tabs__item",d,r?.className,{"tabs__item--active":w===t})}),o??t)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function f(e){const t=(0,s.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}var h=o(85162),v=o(93162),b=o.n(v);const g=function(e){let{url:t,proxy:o}=e;return a.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},a.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),a.createElement("ul",{className:"export-dropdown dropdown__menu"},a.createElement("li",null,a.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),b().saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))},y={id:"vocdoni-api",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},k=void 0,w={unversionedId:"vocdoni-api/vocdoni-api",id:"vocdoni-api/vocdoni-api",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions.",source:"@site/docs/vocdoni-api/vocdoni-api.info.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/vocdoni-api",permalink:"/vocdoni-api/vocdoni-api",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"vocdoni-api",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Vocdoni",permalink:"/category/vocdoni-api"},next:{title:"Chain",permalink:"/vocdoni-api/chain"}},T={},E=[],x={toc:E};function A(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},x,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 2.0.0"),(0,r.kt)(g,{url:"https://raw.githubusercontent.com/vocdoni/developer-portal/main/swaggers/vocdoni-api.yaml",proxy:void 0,mdxType:"Export"}),(0,r.kt)("h1",{id:"vocdoni-api"},"Vocdoni API"),(0,r.kt)("p",null,"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions.\nYou can review the API endpoints documentation in this section, the main entities are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"chain"},(0,r.kt)("strong",{parentName:"a"},"Chain")),": The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"accounts"},(0,r.kt)("strong",{parentName:"a"},"Accounts")),": Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"elections"},(0,r.kt)("strong",{parentName:"a"},"Elections")),": Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go ",(0,r.kt)("a",{parentName:"li",href:"../get-started/intro#23-elections"},"here"),".  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"censuses"},(0,r.kt)("strong",{parentName:"a"},"Censuses")),": The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check ",(0,r.kt)("a",{parentName:"li",href:"../get-started/intro#21-the-census"},"here"),". Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"votes"},(0,r.kt)("strong",{parentName:"a"},"Votes")),": All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.")),(0,r.kt)("p",null,"Backend error messages list are defined here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},"https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go")),(0,r.kt)("div",{style:{marginBottom:"2rem"}},(0,r.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,r.kt)(f,{mdxType:"Tabs"},(0,r.kt)(h.Z,{label:"Bearer Auth",value:"bearerAuth",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Security Scheme Type:"),(0,r.kt)("td",null,"http")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"HTTP Authorization Scheme:"),(0,r.kt)("td",null,"bearer")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Bearer format:"),(0,r.kt)("td",null)))))))))}A.isMDXComponent=!0},93162:function(e,t,o){var n,a,r;a=[],n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){l(n.response,t,o)},n.onerror=function(){console.error("could not download file")},n.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,s=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,o){var s=i.URL||i.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?r(l):a(l.href)?n(e,t,o):r(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,i){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),o);else if(a(e))n(e,o,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,t,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var r="application/octet-stream"===e.type,l=/constructor/i.test(i.HTMLElement)||i.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||r&&l||s)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},u.readAsDataURL(e)}else{var p=i.URL||i.webkitURL,d=p.createObjectURL(e);a?a.location=d:location.href=d,a=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});i.saveAs=l.saveAs=l,e.exports=l},void 0===(r="function"==typeof n?n.apply(t,a):n)||(e.exports=r)}}]);