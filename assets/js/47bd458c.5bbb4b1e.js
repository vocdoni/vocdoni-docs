"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4678],{19634:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>b,frontMatter:()=>u,metadata:()=>h,toc:()=>v});var n=o(87462),i=(o(67294),o(3905)),a=o(26389),s=o(94891),c=o(74933),r=o(47507),l=o(24310),d=o(63303),p=(o(75035),o(85162));const u={id:"election-votes-count",title:"Count election votes",description:"Count of election emitted votes.",sidebar_label:"Count election votes",hide_title:!0,hide_table_of_contents:!0,api:{description:"Count of election emitted votes.",operationId:"electionVotesCount",tags:["Elections"],parameters:[{name:"electionId",in:"path",description:"Election Id on 0x format",required:!0,schema:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"}}],responses:{200:{description:"Count of votes",content:{"application/json":{schema:{type:"object",properties:{count:{type:"integer",format:"int32",example:"1"}}}}}}},method:"get",path:"/elections/{electionId}/votes/count",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Count election votes",description:{content:"Count of election emitted votes.",type:"text/plain"},url:{path:["elections",":electionId","votes","count"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Election Id on 0x format",type:"text/plain"},type:"any",value:"",key:"electionId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},m=void 0,h={unversionedId:"vocdoni-api/election-votes-count",id:"vocdoni-api/election-votes-count",title:"Count election votes",description:"Count of election emitted votes.",source:"@site/docs/vocdoni-api/election-votes-count.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/election-votes-count",permalink:"/vocdoni-api/election-votes-count",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"election-votes-count",title:"Count election votes",description:"Count of election emitted votes.",sidebar_label:"Count election votes",hide_title:!0,hide_table_of_contents:!0,api:{description:"Count of election emitted votes.",operationId:"electionVotesCount",tags:["Elections"],parameters:[{name:"electionId",in:"path",description:"Election Id on 0x format",required:!0,schema:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"}}],responses:{200:{description:"Count of votes",content:{"application/json":{schema:{type:"object",properties:{count:{type:"integer",format:"int32",example:"1"}}}}}}},method:"get",path:"/elections/{electionId}/votes/count",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Count election votes",description:{content:"Count of election emitted votes.",type:"text/plain"},url:{path:["elections",":electionId","votes","count"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Election Id on 0x format",type:"text/plain"},type:"any",value:"",key:"electionId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Paginated election votes list",permalink:"/vocdoni-api/election-votes-paginated"},next:{title:"Create an election",permalink:"/vocdoni-api/create-election"}},f={},v=[{value:"Count election votes",id:"count-election-votes",level:2}],g={toc:v};function b(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"count-election-votes"},"Count election votes"),(0,i.kt)("p",null,"Count of election emitted votes."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(c.Z,{className:"paramsItem",param:{name:"electionId",in:"path",description:"Election Id on 0x format",required:!0,schema:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Count of votes")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"count",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "count": "1"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);