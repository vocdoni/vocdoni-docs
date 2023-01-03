"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[509],{90352:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>b,frontMatter:()=>m,metadata:()=>u,toc:()=>g});var n=a(83117),i=(a(67294),a(3905)),o=a(99565),s=a(80663),r=a(74903),c=a(11955),l=a(46794),d=a(8437),p=(a(32712),a(28802));const m={id:"transactions-list-paginated",title:"Paginated transactions list",description:"Get paginated list of transactions. To get transaction information use",sidebar_label:"Paginated transactions list",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get paginated list of transactions. To get transaction information use \n[/chain/transaction/{blockHeight}/{txIndex}](transaction-by-block-index). Where transactionIndex is the index of\nthe transaction on the containing block.",operationId:"transactionsListPaginated",tags:["Chain"],parameters:[{name:"page",in:"path",description:"When returning a list it define de page number. If empty, default is 0",allowEmptyValue:!0,required:!0,schema:{type:"integer",example:1,default:0}}],responses:{200:{description:"It return a list of transaction reference",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{transactionNumber:{type:"integer",format:"int32",example:944},transactionHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},blockHeight:{type:"integer",format:"int32",example:64924},transactionIndex:{type:"integer",format:"int32",example:0},transactionType:{type:"string",enum:["voteEnvelope","newProcessTx","adminTx","setProcessTx","registerKeyTx","mintTokensTx","sendTokensTx","setTransactionCostsTx","setAccountTx","collectFaucetTx","setKeykeeperTx"]}}}}}}}},method:"get",path:"/chain/transactions/page/{page}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Paginated transactions list",description:{content:"Get paginated list of transactions. To get transaction information use \n[/chain/transaction/{blockHeight}/{txIndex}](transaction-by-block-index). Where transactionIndex is the index of\nthe transaction on the containing block.",type:"text/plain"},url:{path:["chain","transactions","page",":page"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) When returning a list it define de page number. If empty, default is 0",type:"text/plain"},type:"any",value:"",key:"page"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},h=void 0,u={unversionedId:"vocdoni-api/transactions-list-paginated",id:"vocdoni-api/transactions-list-paginated",title:"Paginated transactions list",description:"Get paginated list of transactions. To get transaction information use",source:"@site/docs/vocdoni-api/transactions-list-paginated.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/transactions-list-paginated",permalink:"/vocdoni-api/transactions-list-paginated",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"transactions-list-paginated",title:"Paginated transactions list",description:"Get paginated list of transactions. To get transaction information use",sidebar_label:"Paginated transactions list",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get paginated list of transactions. To get transaction information use \n[/chain/transaction/{blockHeight}/{txIndex}](transaction-by-block-index). Where transactionIndex is the index of\nthe transaction on the containing block.",operationId:"transactionsListPaginated",tags:["Chain"],parameters:[{name:"page",in:"path",description:"When returning a list it define de page number. If empty, default is 0",allowEmptyValue:!0,required:!0,schema:{type:"integer",example:1,default:0}}],responses:{200:{description:"It return a list of transaction reference",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{transactionNumber:{type:"integer",format:"int32",example:944},transactionHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},blockHeight:{type:"integer",format:"int32",example:64924},transactionIndex:{type:"integer",format:"int32",example:0},transactionType:{type:"string",enum:["voteEnvelope","newProcessTx","adminTx","setProcessTx","registerKeyTx","mintTokensTx","sendTokensTx","setTransactionCostsTx","setAccountTx","collectFaucetTx","setKeykeeperTx"]}}}}}}}},method:"get",path:"/chain/transactions/page/{page}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Paginated transactions list",description:{content:"Get paginated list of transactions. To get transaction information use \n[/chain/transaction/{blockHeight}/{txIndex}](transaction-by-block-index). Where transactionIndex is the index of\nthe transaction on the containing block.",type:"text/plain"},url:{path:["chain","transactions","page",":page"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) When returning a list it define de page number. If empty, default is 0",type:"text/plain"},type:"any",value:"",key:"page"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"List transactions",permalink:"/vocdoni-api/transactions-list"},next:{title:"Transaction by hash",permalink:"/vocdoni-api/transaction-by-reference"}},f={},g=[{value:"Paginated transactions list",id:"paginated-transactions-list",level:2}],y={toc:g};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"paginated-transactions-list"},"Paginated transactions list"),(0,i.kt)("p",null,"Get paginated list of transactions. To get transaction information use\n",(0,i.kt)("a",{parentName:"p",href:"transaction-by-block-index"},"/chain/transaction/{blockHeight}/{txIndex}"),". Where transactionIndex is the index of\nthe transaction on the containing block."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"page",in:"path",description:"When returning a list it define de page number. If empty, default is 0",allowEmptyValue:!0,required:!0,schema:{type:"integer",example:1,default:0}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"It return a list of transaction reference")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"transactionNumber",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"transactionHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"blockHeight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"transactionIndex",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"transactionType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`voteEnvelope`, `newProcessTx`, `adminTx`, `setProcessTx`, `registerKeyTx`, `mintTokensTx`, `sendTokensTx`, `setTransactionCostsTx`, `setAccountTx`, `collectFaucetTx`, `setKeykeeperTx`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'[\n  {\n    "transactionNumber": 944,\n    "transactionHash": "75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad",\n    "blockHeight": 64924,\n    "transactionIndex": 0,\n    "transactionType": "voteEnvelope"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);