"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2161],{7070:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>b});var i=o(87462),a=(o(67294),o(3905)),n=o(26389),s=o(94891),r=o(75190),c=o(47507),l=o(24310),d=o(63303),h=(o(75035),o(85162));const p={id:"date-from-block",title:"Estimate date by block height",description:"Estimates date by a given block height.",sidebar_label:"Estimate date by block height",hide_title:!0,hide_table_of_contents:!0,api:{description:"Estimates date by a given block height.",operationId:"dateFromBlock",tags:["Chain"],parameters:[{name:"height",in:"path",description:"Block height",required:!0,schema:{type:"integer",format:"int32",example:64924}}],responses:{200:{description:"It return estimated date",content:{"application/json":{schema:{type:"object",properties:{height:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"}}}}}}},method:"get",path:"/chain/blockToDate/{height}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Estimate date by block height",description:{content:"Estimates date by a given block height.",type:"text/plain"},url:{path:["chain","blockToDate",":height"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Block height",type:"text/plain"},type:"any",value:"",key:"height"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},m=void 0,u={unversionedId:"vocdoni-api/date-from-block",id:"vocdoni-api/date-from-block",title:"Estimate date by block height",description:"Estimates date by a given block height.",source:"@site/docs/vocdoni-api/date-from-block.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/date-from-block",permalink:"/vocdoni-api/date-from-block",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"date-from-block",title:"Estimate date by block height",description:"Estimates date by a given block height.",sidebar_label:"Estimate date by block height",hide_title:!0,hide_table_of_contents:!0,api:{description:"Estimates date by a given block height.",operationId:"dateFromBlock",tags:["Chain"],parameters:[{name:"height",in:"path",description:"Block height",required:!0,schema:{type:"integer",format:"int32",example:64924}}],responses:{200:{description:"It return estimated date",content:{"application/json":{schema:{type:"object",properties:{height:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"}}}}}}},method:"get",path:"/chain/blockToDate/{height}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Estimate date by block height",description:{content:"Estimates date by a given block height.",type:"text/plain"},url:{path:["chain","blockToDate",":height"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Block height",type:"text/plain"},type:"any",value:"",key:"height"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Estimate block height",permalink:"/vocdoni-api/block-from-date"},next:{title:"Get Validators",permalink:"/vocdoni-api/validators"}},g={},b=[{value:"Estimate date by block height",id:"estimate-date-by-block-height",level:2}],f={toc:b};function k(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"estimate-date-by-block-height"},"Estimate date by block height"),(0,a.kt)("p",null,"Estimates date by a given block height."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(r.Z,{className:"paramsItem",param:{name:"height",in:"path",description:"Block height",required:!0,schema:{type:"integer",format:"int32",example:64924}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"It return estimated date")),(0,a.kt)("div",null,(0,a.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"height",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'{\n  "height": "2022-11-17T18:00:57.379551614Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);