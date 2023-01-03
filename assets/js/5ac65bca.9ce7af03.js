"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8967],{99369:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>f});var a=o(83117),i=(o(67294),o(3905)),n=o(99565),s=o(80663),r=(o(74903),o(11955)),c=o(46794),l=o(8437),d=(o(32712),o(28802));const p={id:"vote-submit",title:"Submit vote",description:"Submit a vote using a protobuff signed transaction. The corresponding result are the vote id and transaction",sidebar_label:"Submit vote",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Votes"],description:"Submit a vote using a protobuff signed transaction. The corresponding result are the vote id and transaction \nhash where the vote is registered.",operationId:"voteSubmit",requestBody:{description:"Requires a protobuff signed transaction",required:!0,content:{"application/json":{schema:{type:"object",properties:{txPayload:{type:"string",example:"<Base64 string>"}}}}}},responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{vote:{type:"object",properties:{voteId:{type:"string",example:"1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad"},txHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"}}}}}}}}},method:"post",path:"/votes",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{txPayload:"<Base64 string>"},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Submit vote",description:{content:"Submit a vote using a protobuff signed transaction. The corresponding result are the vote id and transaction \nhash where the vote is registered.",type:"text/plain"},url:{path:["votes"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},u=void 0,m={unversionedId:"vocdoni-api/vote-submit",id:"vocdoni-api/vote-submit",title:"Submit vote",description:"Submit a vote using a protobuff signed transaction. The corresponding result are the vote id and transaction",source:"@site/docs/vocdoni-api/vote-submit.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/vote-submit",permalink:"/vocdoni-api/vote-submit",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"vote-submit",title:"Submit vote",description:"Submit a vote using a protobuff signed transaction. The corresponding result are the vote id and transaction",sidebar_label:"Submit vote",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Votes"],description:"Submit a vote using a protobuff signed transaction. The corresponding result are the vote id and transaction \nhash where the vote is registered.",operationId:"voteSubmit",requestBody:{description:"Requires a protobuff signed transaction",required:!0,content:{"application/json":{schema:{type:"object",properties:{txPayload:{type:"string",example:"<Base64 string>"}}}}}},responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{vote:{type:"object",properties:{voteId:{type:"string",example:"1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad"},txHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"}}}}}}}}},method:"post",path:"/votes",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{txPayload:"<Base64 string>"},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Submit vote",description:{content:"Submit a vote using a protobuff signed transaction. The corresponding result are the vote id and transaction \nhash where the vote is registered.",type:"text/plain"},url:{path:["votes"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Get vote",permalink:"/vocdoni-api/vote-get"},next:{title:"Verify vote",permalink:"/vocdoni-api/vote-verify"}},h={},f=[{value:"Submit vote",id:"submit-vote",level:2}],v={toc:f};function b(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},v,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"submit-vote"},"Submit vote"),(0,i.kt)("p",null,"Submit a vote using a protobuff signed transaction. The corresponding result are the vote id and transaction\nhash where the vote is registered."),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"Requires a protobuff signed transaction"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"txPayload",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful operation")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"vote"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"voteId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"txHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "vote": {\n    "voteId": "1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad",\n    "txHash": "75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);