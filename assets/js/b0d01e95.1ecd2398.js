"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=c(n),k=a,u=f["".concat(d,".").concat(k)]||f[k]||p[k]||l;return n?i.createElement(u,r(r({ref:t},s),{},{components:n})):i.createElement(u,r({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const l={},r=void 0,o={unversionedId:"sdk/reference/interfaces/IElectionInfoResponse",id:"sdk/reference/interfaces/IElectionInfoResponse",title:"IElectionInfoResponse",description:"@vocdoni/sdk / Exports / IElectionInfoResponse",source:"@site/docs/sdk/reference/interfaces/IElectionInfoResponse.md",sourceDirName:"sdk/reference/interfaces",slug:"/sdk/reference/interfaces/IElectionInfoResponse",permalink:"/sdk/reference/interfaces/IElectionInfoResponse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"IElectionCreateResponse",permalink:"/sdk/reference/interfaces/IElectionCreateResponse"},next:{title:"IElectionKeysResponse",permalink:"/sdk/reference/interfaces/IElectionKeysResponse"}},d={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"census",id:"census",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"chainId",id:"chainid",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"creationTime",id:"creationtime",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"electionId",id:"electionid",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"electionMode",id:"electionmode",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"endDate",id:"enddate",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"finalResults",id:"finalresults",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"fromArchive",id:"fromarchive",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"manuallyEnded",id:"manuallyended",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"metadata",id:"metadata",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"metadataURL",id:"metadataurl",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"organizationId",id:"organizationid",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"result",id:"result",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"startDate",id:"startdate",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"status",id:"status",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"tallyMode",id:"tallymode",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"voteCount",id:"votecount",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"voteMode",id:"votemode",level:3},{value:"Defined in",id:"defined-in-17",level:4}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk"},"@vocdoni/sdk")," / ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/modules"},"Exports")," / IElectionInfoResponse"),(0,a.kt)("h1",{id:"interface-ielectioninforesponse"},"Interface: IElectionInfoResponse"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#census"},"census")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#chainid"},"chainId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#creationtime"},"creationTime")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#electionid"},"electionId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#electionmode"},"electionMode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#enddate"},"endDate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#finalresults"},"finalResults")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#fromarchive"},"fromArchive")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#manuallyended"},"manuallyEnded")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#metadata"},"metadata")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#metadataurl"},"metadataURL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#organizationid"},"organizationId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#result"},"result")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#startdate"},"startDate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#status"},"status")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#tallymode"},"tallyMode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#votecount"},"voteCount")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sdk/reference/interfaces/IElectionInfoResponse#votemode"},"voteMode"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"census"},"census"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"census"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/ICensus"},(0,a.kt)("inlineCode",{parentName:"a"},"ICensus"))),(0,a.kt)("p",null,"The census of the election"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L220"},"api/election.ts:220")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"chainid"},"chainId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"chainId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The chain identifier of the election"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L215"},"api/election.ts:215")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"creationtime"},"creationTime"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"creationTime"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The date of creation of the election"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L230"},"api/election.ts:230")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"electionid"},"electionId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"electionId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The id of the election"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L165"},"api/election.ts:165")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"electionmode"},"electionMode"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"electionMode"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/IElectionMode"},(0,a.kt)("inlineCode",{parentName:"a"},"IElectionMode"))),(0,a.kt)("p",null,"The election mode of the election"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L240"},"api/election.ts:240")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"enddate"},"endDate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"endDate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The end date of the election"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L185"},"api/election.ts:185")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"finalresults"},"finalResults"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"finalResults"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If the election has the final results"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L195"},"api/election.ts:195")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fromarchive"},"fromArchive"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"fromArchive"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If the election comes from the archive"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L210"},"api/election.ts:210")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"manuallyended"},"manuallyEnded"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"manuallyEnded"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If the election has been ended manually"),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L205"},"api/election.ts:205")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"metadata"},"metadata"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"metadata"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/ElectionMetadata"},(0,a.kt)("inlineCode",{parentName:"a"},"ElectionMetadata"))),(0,a.kt)("p",null,"The metadata of the election"),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L250"},"api/election.ts:250")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"metadataurl"},"metadataURL"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"metadataURL"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The URL of the metadata"),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L225"},"api/election.ts:225")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"organizationid"},"organizationId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"organizationId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The id of the organization that created the election"),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L170"},"api/election.ts:170")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"result"},"result"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"result"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[][]"),(0,a.kt)("p",null,"The result of the election"),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L200"},"api/election.ts:200")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"startdate"},"startDate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"startDate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The start date of the election"),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L180"},"api/election.ts:180")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"status"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/enums/ElectionStatus#process_unknown"},(0,a.kt)("inlineCode",{parentName:"a"},"PROCESS_UNKNOWN"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/enums/ElectionStatus#ended"},(0,a.kt)("inlineCode",{parentName:"a"},"ENDED"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/enums/ElectionStatus#canceled"},(0,a.kt)("inlineCode",{parentName:"a"},"CANCELED"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/enums/ElectionStatus#paused"},(0,a.kt)("inlineCode",{parentName:"a"},"PAUSED"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/enums/ElectionStatus#results"},(0,a.kt)("inlineCode",{parentName:"a"},"RESULTS"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/enums/ElectionStatusReady#ready"},(0,a.kt)("inlineCode",{parentName:"a"},"READY"))),(0,a.kt)("p",null,"The status of the election"),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L175"},"api/election.ts:175")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tallymode"},"tallyMode"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"tallyMode"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/ITallyMode"},(0,a.kt)("inlineCode",{parentName:"a"},"ITallyMode"))),(0,a.kt)("p",null,"The tally mode of the vote"),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L245"},"api/election.ts:245")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"votecount"},"voteCount"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"voteCount"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The number of votes of the election"),(0,a.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L190"},"api/election.ts:190")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"votemode"},"voteMode"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"voteMode"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/IVoteMode"},(0,a.kt)("inlineCode",{parentName:"a"},"IVoteMode"))),(0,a.kt)("p",null,"The voting mode of the election"),(0,a.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L235"},"api/election.ts:235")))}p.isMDXComponent=!0}}]);