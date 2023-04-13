"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2079],{10797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>f});var a=n(87462),i=(n(67294),n(3905)),o=n(26389),s=n(94891),r=n(75190),c=n(47507),d=n(24310),l=n(63303),h=(n(75035),n(85162));const p={id:"transaction-by-index",title:"Transaction by index",description:"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block",sidebar_label:"Transaction by index",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block \nindex. The transaction index is an incremental counter for each transaction. \nYou could use the transaction `block` and `index` to retrieve full info using \n[transaction by block and index](transaction-by-block-index).",operationId:"transactionByIndex",tags:["Chain"],parameters:[{name:"index",in:"path",description:"Transaction index",required:!0,schema:{type:"integer",format:"int32",example:100}}],responses:{200:{description:"It return corresponding blockHeight and transactionIndex",content:{"application/json":{schema:{type:"object",properties:{transactionNumber:{type:"integer",format:"int32",example:944},transactionHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},blockHeight:{type:"integer",format:"int32",example:64924},transactionIndex:{type:"integer",format:"int32",example:0},transactionType:{type:"string",enum:["vote","newProcess","admin","setProcess","registerKey","mintTokens","sendTokens","setTransactionCosts","setAccount","collectFaucet","setKeykeeper"]}}}}}},204:{description:"This message will be returned only if the asset being queried cannot be found but no other errors have occurred. \nThis response is commonly used to prevent Javascript errors that may arise when a client is waiting for a \ntransaction to be published. During this waiting period, the client can repeatedly query the endpoint until a \nsuccessful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the \ntransaction not being published yet."}},method:"get",path:"/chain/transactions/reference/index/{index}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Transaction by index",description:{content:"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block \nindex. The transaction index is an incremental counter for each transaction. \nYou could use the transaction `block` and `index` to retrieve full info using \n[transaction by block and index](transaction-by-block-index).",type:"text/plain"},url:{path:["chain","transactions","reference","index",":index"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Transaction index",type:"text/plain"},type:"any",value:"",key:"index"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},u=void 0,m={unversionedId:"vocdoni-api/transaction-by-index",id:"vocdoni-api/transaction-by-index",title:"Transaction by index",description:"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block",source:"@site/docs/vocdoni-api/transaction-by-index.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/transaction-by-index",permalink:"/vocdoni-api/transaction-by-index",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"transaction-by-index",title:"Transaction by index",description:"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block",sidebar_label:"Transaction by index",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block \nindex. The transaction index is an incremental counter for each transaction. \nYou could use the transaction `block` and `index` to retrieve full info using \n[transaction by block and index](transaction-by-block-index).",operationId:"transactionByIndex",tags:["Chain"],parameters:[{name:"index",in:"path",description:"Transaction index",required:!0,schema:{type:"integer",format:"int32",example:100}}],responses:{200:{description:"It return corresponding blockHeight and transactionIndex",content:{"application/json":{schema:{type:"object",properties:{transactionNumber:{type:"integer",format:"int32",example:944},transactionHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},blockHeight:{type:"integer",format:"int32",example:64924},transactionIndex:{type:"integer",format:"int32",example:0},transactionType:{type:"string",enum:["vote","newProcess","admin","setProcess","registerKey","mintTokens","sendTokens","setTransactionCosts","setAccount","collectFaucet","setKeykeeper"]}}}}}},204:{description:"This message will be returned only if the asset being queried cannot be found but no other errors have occurred. \nThis response is commonly used to prevent Javascript errors that may arise when a client is waiting for a \ntransaction to be published. During this waiting period, the client can repeatedly query the endpoint until a \nsuccessful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the \ntransaction not being published yet."}},method:"get",path:"/chain/transactions/reference/index/{index}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Transaction by index",description:{content:"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block \nindex. The transaction index is an incremental counter for each transaction. \nYou could use the transaction `block` and `index` to retrieve full info using \n[transaction by block and index](transaction-by-block-index).",type:"text/plain"},url:{path:["chain","transactions","reference","index",":index"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Transaction index",type:"text/plain"},type:"any",value:"",key:"index"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Transaction by hash",permalink:"/vocdoni-api/transaction-by-reference"},next:{title:"Transaction by block height and index",permalink:"/vocdoni-api/transaction-by-block-index"}},b={},f=[{value:"Transaction by index",id:"transaction-by-index",level:2}],y={toc:f};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"transaction-by-index"},"Transaction by index"),(0,i.kt)("p",null,"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block\nindex. The transaction index is an incremental counter for each transaction.\nYou could use the transaction ",(0,i.kt)("inlineCode",{parentName:"p"},"block")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," to retrieve full info using\n",(0,i.kt)("a",{parentName:"p",href:"transaction-by-block-index"},"transaction by block and index"),"."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"index",in:"path",description:"Transaction index",required:!0,schema:{type:"integer",format:"int32",example:100}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"It return corresponding blockHeight and transactionIndex")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"transactionNumber",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"transactionHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"blockHeight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"transactionIndex",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"transactionType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`vote`, `newProcess`, `admin`, `setProcess`, `registerKey`, `mintTokens`, `sendTokens`, `setTransactionCosts`, `setAccount`, `collectFaucet`, `setKeykeeper`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "transactionNumber": 944,\n  "transactionHash": "75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad",\n  "blockHeight": 64924,\n  "transactionIndex": 0,\n  "transactionType": "vote"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(h.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This message will be returned only if the asset being queried cannot be found but no other errors have occurred.\nThis response is commonly used to prevent Javascript errors that may arise when a client is waiting for a\ntransaction to be published. During this waiting period, the client can repeatedly query the endpoint until a\nsuccessful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the\ntransaction not being published yet.")),(0,i.kt)("div",null)))))}g.isMDXComponent=!0}}]);