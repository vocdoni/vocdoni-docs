"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8033],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),o=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=o(t),u=i,_=k["".concat(d,".").concat(u)]||k[u]||c[u]||r;return t?a.createElement(_,l(l({ref:n},p),{},{components:t})):a.createElement(_,l({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=k;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<r;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},89541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=t(87462),i=(t(67294),t(3905));const r={},l=void 0,s={unversionedId:"sdk/reference/enums/TxType",id:"sdk/reference/enums/TxType",title:"TxType",description:"@vocdoni/sdk / TxType",source:"@site/docs/sdk/reference/enums/TxType.md",sourceDirName:"sdk/reference/enums",slug:"/sdk/reference/enums/TxType",permalink:"/sdk/reference/enums/TxType",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"TransactionType",permalink:"/sdk/reference/enums/TransactionType"},next:{title:"VoteSteps",permalink:"/sdk/reference/enums/VoteSteps"}},d={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Enumeration Members",id:"enumeration-members",level:3},{value:"Enumeration Members",id:"enumeration-members-1",level:2},{value:"ADD_DELEGATE_FOR_ACCOUNT",id:"add_delegate_for_account",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"ADD_KEYKEEPER",id:"add_keykeeper",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ADD_ORACLE",id:"add_oracle",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"ADD_PROCESS_KEYS",id:"add_process_keys",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"ADD_VALIDATOR",id:"add_validator",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"COLLECT_FAUCET",id:"collect_faucet",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"CREATE_ACCOUNT",id:"create_account",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"DELETE_KEYKEEPER",id:"delete_keykeeper",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"DEL_DELEGATE_FOR_ACCOUNT",id:"del_delegate_for_account",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"MINT_TOKENS",id:"mint_tokens",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"NEW_PROCESS",id:"new_process",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"REGISTER_VOTER_KEY",id:"register_voter_key",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"REMOVE_ORACLE",id:"remove_oracle",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"REMOVE_VALIDATOR",id:"remove_validator",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"REVEAL_PROCESS_KEYS",id:"reveal_process_keys",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"SEND_TOKENS",id:"send_tokens",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"SET_ACCOUNT_INFO_URI",id:"set_account_info_uri",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"SET_PROCESS_CENSUS",id:"set_process_census",level:3},{value:"Defined in",id:"defined-in-17",level:4},{value:"SET_PROCESS_QUESTION_INDEX",id:"set_process_question_index",level:3},{value:"Defined in",id:"defined-in-18",level:4},{value:"SET_PROCESS_RESULTS",id:"set_process_results",level:3},{value:"Defined in",id:"defined-in-19",level:4},{value:"SET_PROCESS_STATUS",id:"set_process_status",level:3},{value:"Defined in",id:"defined-in-20",level:4},{value:"SET_TRANSACTION_COSTS",id:"set_transaction_costs",level:3},{value:"Defined in",id:"defined-in-21",level:4},{value:"TX_UNKNOWN",id:"tx_unknown",level:3},{value:"Defined in",id:"defined-in-22",level:4},{value:"UNRECOGNIZED",id:"unrecognized",level:3},{value:"Defined in",id:"defined-in-23",level:4},{value:"VOTE",id:"vote",level:3},{value:"Defined in",id:"defined-in-24",level:4}],p={toc:o};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README.md"},"@vocdoni/sdk")," / TxType"),(0,i.kt)("h1",{id:"enumeration-txtype"},"Enumeration: TxType"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#add_delegate_for_account"},"ADD","_","DELEGATE","_","FOR","_","ACCOUNT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#add_keykeeper"},"ADD","_","KEYKEEPER")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#add_oracle"},"ADD","_","ORACLE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#add_process_keys"},"ADD","_","PROCESS","_","KEYS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#add_validator"},"ADD","_","VALIDATOR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#collect_faucet"},"COLLECT","_","FAUCET")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#create_account"},"CREATE","_","ACCOUNT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#delete_keykeeper"},"DELETE","_","KEYKEEPER")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#del_delegate_for_account"},"DEL","_","DELEGATE","_","FOR","_","ACCOUNT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#mint_tokens"},"MINT","_","TOKENS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#new_process"},"NEW","_","PROCESS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#register_voter_key"},"REGISTER","_","VOTER","_","KEY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#remove_oracle"},"REMOVE","_","ORACLE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#remove_validator"},"REMOVE","_","VALIDATOR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#reveal_process_keys"},"REVEAL","_","PROCESS","_","KEYS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#send_tokens"},"SEND","_","TOKENS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#set_account_info_uri"},"SET","_","ACCOUNT","_","INFO","_","URI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#set_process_census"},"SET","_","PROCESS","_","CENSUS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#set_process_question_index"},"SET","_","PROCESS","_","QUESTION","_","INDEX")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#set_process_results"},"SET","_","PROCESS","_","RESULTS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#set_process_status"},"SET","_","PROCESS","_","STATUS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#set_transaction_costs"},"SET","_","TRANSACTION","_","COSTS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#tx_unknown"},"TX","_","UNKNOWN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#unrecognized"},"UNRECOGNIZED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/reference/enums/TxType#vote"},"VOTE"))),(0,i.kt)("h2",{id:"enumeration-members-1"},"Enumeration Members"),(0,i.kt)("h3",{id:"add_delegate_for_account"},"ADD","_","DELEGATE","_","FOR","_","ACCOUNT"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ADD","_","DELEGATE","_","FOR","_","ACCOUNT")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"18")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L331"},"api/chain/transactions.ts:331")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"add_keykeeper"},"ADD","_","KEYKEEPER"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ADD","_","KEYKEEPER")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"21")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L334"},"api/chain/transactions.ts:334")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"add_oracle"},"ADD","_","ORACLE"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ADD","_","ORACLE")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"7")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L320"},"api/chain/transactions.ts:320")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"add_process_keys"},"ADD","_","PROCESS","_","KEYS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ADD","_","PROCESS","_","KEYS")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"5")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L318"},"api/chain/transactions.ts:318")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"add_validator"},"ADD","_","VALIDATOR"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ADD","_","VALIDATOR")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"9")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L322"},"api/chain/transactions.ts:322")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"collect_faucet"},"COLLECT","_","FAUCET"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"COLLECT","_","FAUCET")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"20")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L333"},"api/chain/transactions.ts:333")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"create_account"},"CREATE","_","ACCOUNT"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"CREATE","_","ACCOUNT")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"23")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L336"},"api/chain/transactions.ts:336")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"delete_keykeeper"},"DELETE","_","KEYKEEPER"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"DELETE","_","KEYKEEPER")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"22")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L335"},"api/chain/transactions.ts:335")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"del_delegate_for_account"},"DEL","_","DELEGATE","_","FOR","_","ACCOUNT"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"DEL","_","DELEGATE","_","FOR","_","ACCOUNT")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"19")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L332"},"api/chain/transactions.ts:332")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mint_tokens"},"MINT","_","TOKENS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"MINT","_","TOKENS")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"14")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L327"},"api/chain/transactions.ts:327")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"new_process"},"NEW","_","PROCESS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"NEW","_","PROCESS")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L314"},"api/chain/transactions.ts:314")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"register_voter_key"},"REGISTER","_","VOTER","_","KEY"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"REGISTER","_","VOTER","_","KEY")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"13")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L326"},"api/chain/transactions.ts:326")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"remove_oracle"},"REMOVE","_","ORACLE"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"REMOVE","_","ORACLE")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"8")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L321"},"api/chain/transactions.ts:321")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"remove_validator"},"REMOVE","_","VALIDATOR"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"REMOVE","_","VALIDATOR")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"10")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L323"},"api/chain/transactions.ts:323")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reveal_process_keys"},"REVEAL","_","PROCESS","_","KEYS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"REVEAL","_","PROCESS","_","KEYS")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"6")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L319"},"api/chain/transactions.ts:319")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"send_tokens"},"SEND","_","TOKENS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SEND","_","TOKENS")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"15")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L328"},"api/chain/transactions.ts:328")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"set_account_info_uri"},"SET","_","ACCOUNT","_","INFO","_","URI"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SET","_","ACCOUNT","_","INFO","_","URI")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"17")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L330"},"api/chain/transactions.ts:330")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"set_process_census"},"SET","_","PROCESS","_","CENSUS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SET","_","PROCESS","_","CENSUS")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"3")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L316"},"api/chain/transactions.ts:316")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"set_process_question_index"},"SET","_","PROCESS","_","QUESTION","_","INDEX"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SET","_","PROCESS","_","QUESTION","_","INDEX")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"4")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L317"},"api/chain/transactions.ts:317")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"set_process_results"},"SET","_","PROCESS","_","RESULTS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SET","_","PROCESS","_","RESULTS")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"12")),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L325"},"api/chain/transactions.ts:325")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"set_process_status"},"SET","_","PROCESS","_","STATUS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SET","_","PROCESS","_","STATUS")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"2")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L315"},"api/chain/transactions.ts:315")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"set_transaction_costs"},"SET","_","TRANSACTION","_","COSTS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SET","_","TRANSACTION","_","COSTS")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"16")),(0,i.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L329"},"api/chain/transactions.ts:329")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tx_unknown"},"TX","_","UNKNOWN"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"TX","_","UNKNOWN")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L313"},"api/chain/transactions.ts:313")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unrecognized"},"UNRECOGNIZED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"UNRECOGNIZED")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"-1")),(0,i.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L337"},"api/chain/transactions.ts:337")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"vote"},"VOTE"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"VOTE")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"11")),(0,i.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/541aa37/src/api/chain/transactions.ts#L324"},"api/chain/transactions.ts:324")))}c.isMDXComponent=!0}}]);