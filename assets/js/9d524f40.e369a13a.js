"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8146],{73653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>g,frontMatter:()=>p,metadata:()=>f,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),o=n(26389),s=n(94891),r=(n(75190),n(47507)),c=n(24310),l=n(63303),d=(n(75035),n(85162));const p={id:"transaction-submit",title:"Submit transaction",description:"It submit a transaction. Depending of transaction type will return different kinds of responses:",sidebar_label:"Submit transaction",hide_title:!0,hide_table_of_contents:!0,api:{description:"It submit a transaction. Depending of transaction type will return different kinds of responses:\n- For a NewElection transaction, `response` will be the `newElectionId`\n- For a Vote transaction, `response` will be the `voteID`\n\nOnce the transaction is mined on the Vochain you can use \n[`chain/transactions/reference/{hash}`](transaction-by-reference) to find the block height and its index on the \nblock to get the transaction index using [`chain/transactions/{blockHeight}/{txIndex}`](transaction-by-block-index).",operationId:"transactionSubmit",tags:["Chain"],requestBody:{description:"Base64 payload string containing transaction data and signature",required:!0,content:{"application/json":{schema:{type:"object",properties:{payload:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"}}}}}},responses:{200:{description:"Return blockchain response. `response` could differ depending of transaction type.",content:{"application/json":{schema:{type:"object",properties:{response:{oneOf:[{type:"string",example:"1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad"},{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"}]},code:{type:"integer",format:"int32",example:1},hash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"}}}}}}},method:"post",path:"/chain/transactions",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{payload:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Submit transaction",description:{content:"It submit a transaction. Depending of transaction type will return different kinds of responses:\n- For a NewElection transaction, `response` will be the `newElectionId`\n- For a Vote transaction, `response` will be the `voteID`\n\nOnce the transaction is mined on the Vochain you can use \n[`chain/transactions/reference/{hash}`](transaction-by-reference) to find the block height and its index on the \nblock to get the transaction index using [`chain/transactions/{blockHeight}/{txIndex}`](transaction-by-block-index).",type:"text/plain"},url:{path:["chain","transactions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},h=void 0,f={unversionedId:"vocdoni-api/transaction-submit",id:"vocdoni-api/transaction-submit",title:"Submit transaction",description:"It submit a transaction. Depending of transaction type will return different kinds of responses:",source:"@site/docs/vocdoni-api/transaction-submit.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/transaction-submit",permalink:"/vocdoni-api/transaction-submit",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"transaction-submit",title:"Submit transaction",description:"It submit a transaction. Depending of transaction type will return different kinds of responses:",sidebar_label:"Submit transaction",hide_title:!0,hide_table_of_contents:!0,api:{description:"It submit a transaction. Depending of transaction type will return different kinds of responses:\n- For a NewElection transaction, `response` will be the `newElectionId`\n- For a Vote transaction, `response` will be the `voteID`\n\nOnce the transaction is mined on the Vochain you can use \n[`chain/transactions/reference/{hash}`](transaction-by-reference) to find the block height and its index on the \nblock to get the transaction index using [`chain/transactions/{blockHeight}/{txIndex}`](transaction-by-block-index).",operationId:"transactionSubmit",tags:["Chain"],requestBody:{description:"Base64 payload string containing transaction data and signature",required:!0,content:{"application/json":{schema:{type:"object",properties:{payload:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"}}}}}},responses:{200:{description:"Return blockchain response. `response` could differ depending of transaction type.",content:{"application/json":{schema:{type:"object",properties:{response:{oneOf:[{type:"string",example:"1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad"},{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"}]},code:{type:"integer",format:"int32",example:1},hash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"}}}}}}},method:"post",path:"/chain/transactions",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{payload:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Submit transaction",description:{content:"It submit a transaction. Depending of transaction type will return different kinds of responses:\n- For a NewElection transaction, `response` will be the `newElectionId`\n- For a Vote transaction, `response` will be the `voteID`\n\nOnce the transaction is mined on the Vochain you can use \n[`chain/transactions/reference/{hash}`](transaction-by-reference) to find the block height and its index on the \nblock to get the transaction index using [`chain/transactions/{blockHeight}/{txIndex}`](transaction-by-block-index).",type:"text/plain"},url:{path:["chain","transactions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Transactions cost",permalink:"/vocdoni-api/transaction-cost"},next:{title:"List transactions",permalink:"/vocdoni-api/transactions-list"}},m={},u=[{value:"Submit transaction",id:"submit-transaction",level:2}],b={toc:u};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"submit-transaction"},"Submit transaction"),(0,i.kt)("p",null,"It submit a transaction. Depending of transaction type will return different kinds of responses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For a NewElection transaction, ",(0,i.kt)("inlineCode",{parentName:"li"},"response")," will be the ",(0,i.kt)("inlineCode",{parentName:"li"},"newElectionId")),(0,i.kt)("li",{parentName:"ul"},"For a Vote transaction, ",(0,i.kt)("inlineCode",{parentName:"li"},"response")," will be the ",(0,i.kt)("inlineCode",{parentName:"li"},"voteID"))),(0,i.kt)("p",null,"Once the transaction is mined on the Vochain you can use\n",(0,i.kt)("a",{parentName:"p",href:"transaction-by-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"chain/transactions/reference/{hash}"))," to find the block height and its index on the\nblock to get the transaction index using ",(0,i.kt)("a",{parentName:"p",href:"transaction-by-block-index"},(0,i.kt)("inlineCode",{parentName:"a"},"chain/transactions/{blockHeight}/{txIndex}")),"."),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"Base64 payload string containing transaction data and signature"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"payload",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Return blockchain response. ",(0,i.kt)("inlineCode",{parentName:"p"},"response")," could differ depending of transaction type.")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"response"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))),(0,i.kt)(d.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))))),(0,i.kt)(c.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "response": "1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad",\n  "code": 1,\n  "hash": "75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);