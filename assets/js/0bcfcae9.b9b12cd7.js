"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),o=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=o(n),u=a,m=k["".concat(d,".").concat(u)]||k[u]||c[u]||r;return n?i.createElement(m,l(l({ref:t},p),{},{components:n})):i.createElement(m,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=k;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<r;o++)l[o]=n[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},36502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var i=n(87462),a=(n(67294),n(3905));const r={},l=void 0,s={unversionedId:"sdk/reference/classes/Election",id:"sdk/reference/classes/Election",title:"Election",description:"@vocdoni/sdk / Election",source:"@site/docs/sdk/reference/classes/Election.md",sourceDirName:"sdk/reference/classes",slug:"/sdk/reference/classes/Election",permalink:"/sdk/reference/classes/Election",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"CspVote",permalink:"/sdk/reference/classes/CspVote"},next:{title:"ElectionAPI",permalink:"/sdk/reference/classes/ElectionAPI"}},d={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Accessors",id:"accessors",level:3},{value:"Methods",id:"methods",level:3},{value:"Accessors",id:"accessors-1",level:2},{value:"addSDKVersion",id:"addsdkversion",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"census",id:"census",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"description",id:"description",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"electionType",id:"electiontype",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"endDate",id:"enddate",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"header",id:"header",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"maxCensusSize",id:"maxcensussize",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"meta",id:"meta",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"questions",id:"questions",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"startDate",id:"startdate",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"streamUri",id:"streamuri",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"temporarySecretIdentity",id:"temporarysecretidentity",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"title",id:"title",level:3},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"voteType",id:"votetype",level:3},{value:"Returns",id:"returns-13",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"Methods",id:"methods-1",level:2},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-14",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"from",id:"from",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-15",level:4},{value:"Defined in",id:"defined-in-15",level:4}],p={toc:o};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../README.md"},"@vocdoni/sdk")," / Election"),(0,a.kt)("h1",{id:"class-election"},"Class: Election"),(0,a.kt)("p",null,"Represents an election"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Election"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/UnpublishedElection"},(0,a.kt)("inlineCode",{parentName:"a"},"UnpublishedElection"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/PublishedElection"},(0,a.kt)("inlineCode",{parentName:"a"},"PublishedElection"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"accessors"},"Accessors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#addsdkversion"},"addSDKVersion")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#census"},"census")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#description"},"description")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#electiontype"},"electionType")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#enddate"},"endDate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#header"},"header")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#maxcensussize"},"maxCensusSize")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#meta"},"meta")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#questions"},"questions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#startdate"},"startDate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#streamuri"},"streamUri")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#temporarysecretidentity"},"temporarySecretIdentity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#title"},"title")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#votetype"},"voteType"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#get"},"get")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/classes/Election#from"},"from"))),(0,a.kt)("h2",{id:"accessors-1"},"Accessors"),(0,a.kt)("h3",{id:"addsdkversion"},"addSDKVersion"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"addSDKVersion"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L262"},"types/election/election.ts:262")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"census"},"census"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"census"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/Census"},(0,a.kt)("inlineCode",{parentName:"a"},"Census"))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/Census"},(0,a.kt)("inlineCode",{parentName:"a"},"Census"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L250"},"types/election/election.ts:250")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"description"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"MultiLanguage"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MultiLanguage"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L214"},"types/election/election.ts:214")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"electiontype"},"electionType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"electionType"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/IElectionType"},(0,a.kt)("inlineCode",{parentName:"a"},"IElectionType"))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/IElectionType"},(0,a.kt)("inlineCode",{parentName:"a"},"IElectionType"))),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L238"},"types/election/election.ts:238")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"enddate"},"endDate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"endDate"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L234"},"types/election/election.ts:234")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"header"},"header"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"header"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L218"},"types/election/election.ts:218")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxcensussize"},"maxCensusSize"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"maxCensusSize"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L254"},"types/election/election.ts:254")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"meta"},"meta"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"meta"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L226"},"types/election/election.ts:226")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"questions"},"questions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"questions"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/IQuestion"},(0,a.kt)("inlineCode",{parentName:"a"},"IQuestion")),"[]"),(0,a.kt)("h4",{id:"returns-8"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/IQuestion"},(0,a.kt)("inlineCode",{parentName:"a"},"IQuestion")),"[]"),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L246"},"types/election/election.ts:246")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"startdate"},"startDate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"startDate"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("h4",{id:"returns-9"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L230"},"types/election/election.ts:230")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"streamuri"},"streamUri"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"streamUri"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"returns-10"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L222"},"types/election/election.ts:222")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"temporarysecretidentity"},"temporarySecretIdentity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"temporarySecretIdentity"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-11"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L258"},"types/election/election.ts:258")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"title"},"title"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"title"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"MultiLanguage"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("h4",{id:"returns-12"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MultiLanguage"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L210"},"types/election/election.ts:210")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"votetype"},"voteType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"voteType"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/IVoteType"},(0,a.kt)("inlineCode",{parentName:"a"},"IVoteType"))),(0,a.kt)("h4",{id:"returns-13"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/IVoteType"},(0,a.kt)("inlineCode",{parentName:"a"},"IVoteType"))),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L242"},"types/election/election.ts:242")),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"get"},"get"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"get"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"dot"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"dot")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns-14"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L266"},"types/election/election.ts:266")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"from"},"from"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"from"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/UnpublishedElection"},(0,a.kt)("inlineCode",{parentName:"a"},"UnpublishedElection"))),(0,a.kt)("p",null,"Returns an unpublished election object"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"params")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/sdk/reference/interfaces/IElectionParameters"},(0,a.kt)("inlineCode",{parentName:"a"},"IElectionParameters"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unpublished Election parameters")))),(0,a.kt)("h4",{id:"returns-15"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/UnpublishedElection"},(0,a.kt)("inlineCode",{parentName:"a"},"UnpublishedElection"))),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/types/election/election.ts#L206"},"types/election/election.ts:206")))}c.isMDXComponent=!0}}]);