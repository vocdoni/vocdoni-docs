"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8882],{50172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>b,frontMatter:()=>h,metadata:()=>u,toc:()=>v});var i=n(87462),o=(n(67294),n(3905)),a=n(26389),s=n(94891),r=n(75190),c=n(47507),l=n(24310),d=n(63303),p=(n(75035),n(85162));const h={id:"vote-get",title:"Get vote",description:"Get the content of an existing Vote. If is an encrypted election it return the `encryptionKeys` indexes and the  package will be codified.",sidebar_label:"Get vote",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Votes"],description:"Get the content of an existing Vote. If is an encrypted election it return the `encryptionKeys` indexes and the  package will be codified.\n\nThe Vote is identified by its `voteId`, also called `nullifier`. The `nullifier` is deterministic and its hash  could be computed as following (using `Keccak256`):\n* For signature based elections, is the hash of the `voterAddress` + `processId`\n* For anonymous elections, the `privateKey` + `processId`\n\nAs well, on the response, the `voterId` won't be returned for anonymous elections, and the `encryptionKeyIndexes` only for finished encrypted elections.\n\nHeight and txIndex refer to the block height and the index of the transaction where vote is registered.\n\nThe `overwriteCount` refers to the number of vote overwrites already executed by the user. At election creation  time, you can specify the `maxVoteOverwrites` parameter, which defines how many times a voter can submit a vote. Only last vote will be taken into election final results.",operationId:"voteGet",parameters:[{name:"voteId",in:"path",description:"Nullifier of the vote",required:!0,schema:{type:"string",example:"1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{envelope:{type:"object",properties:{encryptionKeys:{type:"array",items:{type:"integer"},nullable:!0,example:[1,2],description:"Sent only for encrypted elections (no results until the end)"},txHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},package:{type:"string",example:'{"nonce":"a34ac6a34cfd9de2","votes":[38]}',description:"For encrypted elections this will be codified"},voteId:{type:"string",example:"1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad"},voterId:{type:"string",example:"0090782b695bbe528331540ed14e4b92b9101673fb4a6bfe6d904e9ab784bce1"},weight:{type:"string",example:"1"},electionID:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},blockHeight:{type:"integer",format:"int32",example:64924},transactionIndex:{type:"integer",format:"int32",example:0},overwriteCount:{type:"number",format:"int32",example:0},date:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z",description:"Date when the vote was emitted"}}}}}}}},400:{description:"Invalid nullifier supplied"},404:{description:"The specified resource was not found"},500:{description:"Internal server error"}},method:"get",path:"/votes/{voteId}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Get vote",description:{content:"Get the content of an existing Vote. If is an encrypted election it return the `encryptionKeys` indexes and the  package will be codified.\n\nThe Vote is identified by its `voteId`, also called `nullifier`. The `nullifier` is deterministic and its hash  could be computed as following (using `Keccak256`):\n* For signature based elections, is the hash of the `voterAddress` + `processId`\n* For anonymous elections, the `privateKey` + `processId`\n\nAs well, on the response, the `voterId` won't be returned for anonymous elections, and the `encryptionKeyIndexes` only for finished encrypted elections.\n\nHeight and txIndex refer to the block height and the index of the transaction where vote is registered.\n\nThe `overwriteCount` refers to the number of vote overwrites already executed by the user. At election creation  time, you can specify the `maxVoteOverwrites` parameter, which defines how many times a voter can submit a vote. Only last vote will be taken into election final results.",type:"text/plain"},url:{path:["votes",":voteId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Nullifier of the vote",type:"text/plain"},type:"any",value:"",key:"voteId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},m=void 0,u={unversionedId:"vocdoni-api/vote-get",id:"vocdoni-api/vote-get",title:"Get vote",description:"Get the content of an existing Vote. If is an encrypted election it return the `encryptionKeys` indexes and the  package will be codified.",source:"@site/docs/vocdoni-api/vote-get.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/vote-get",permalink:"/vocdoni-api/vote-get",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"vote-get",title:"Get vote",description:"Get the content of an existing Vote. If is an encrypted election it return the `encryptionKeys` indexes and the  package will be codified.",sidebar_label:"Get vote",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Votes"],description:"Get the content of an existing Vote. If is an encrypted election it return the `encryptionKeys` indexes and the  package will be codified.\n\nThe Vote is identified by its `voteId`, also called `nullifier`. The `nullifier` is deterministic and its hash  could be computed as following (using `Keccak256`):\n* For signature based elections, is the hash of the `voterAddress` + `processId`\n* For anonymous elections, the `privateKey` + `processId`\n\nAs well, on the response, the `voterId` won't be returned for anonymous elections, and the `encryptionKeyIndexes` only for finished encrypted elections.\n\nHeight and txIndex refer to the block height and the index of the transaction where vote is registered.\n\nThe `overwriteCount` refers to the number of vote overwrites already executed by the user. At election creation  time, you can specify the `maxVoteOverwrites` parameter, which defines how many times a voter can submit a vote. Only last vote will be taken into election final results.",operationId:"voteGet",parameters:[{name:"voteId",in:"path",description:"Nullifier of the vote",required:!0,schema:{type:"string",example:"1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{envelope:{type:"object",properties:{encryptionKeys:{type:"array",items:{type:"integer"},nullable:!0,example:[1,2],description:"Sent only for encrypted elections (no results until the end)"},txHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},package:{type:"string",example:'{"nonce":"a34ac6a34cfd9de2","votes":[38]}',description:"For encrypted elections this will be codified"},voteId:{type:"string",example:"1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad"},voterId:{type:"string",example:"0090782b695bbe528331540ed14e4b92b9101673fb4a6bfe6d904e9ab784bce1"},weight:{type:"string",example:"1"},electionID:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},blockHeight:{type:"integer",format:"int32",example:64924},transactionIndex:{type:"integer",format:"int32",example:0},overwriteCount:{type:"number",format:"int32",example:0},date:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z",description:"Date when the vote was emitted"}}}}}}}},400:{description:"Invalid nullifier supplied"},404:{description:"The specified resource was not found"},500:{description:"Internal server error"}},method:"get",path:"/votes/{voteId}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Get vote",description:{content:"Get the content of an existing Vote. If is an encrypted election it return the `encryptionKeys` indexes and the  package will be codified.\n\nThe Vote is identified by its `voteId`, also called `nullifier`. The `nullifier` is deterministic and its hash  could be computed as following (using `Keccak256`):\n* For signature based elections, is the hash of the `voterAddress` + `processId`\n* For anonymous elections, the `privateKey` + `processId`\n\nAs well, on the response, the `voterId` won't be returned for anonymous elections, and the `encryptionKeyIndexes` only for finished encrypted elections.\n\nHeight and txIndex refer to the block height and the index of the transaction where vote is registered.\n\nThe `overwriteCount` refers to the number of vote overwrites already executed by the user. At election creation  time, you can specify the `maxVoteOverwrites` parameter, which defines how many times a voter can submit a vote. Only last vote will be taken into election final results.",type:"text/plain"},url:{path:["votes",":voteId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Nullifier of the vote",type:"text/plain"},type:"any",value:"",key:"voteId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Votes",permalink:"/vocdoni-api/votes"},next:{title:"Submit vote",permalink:"/vocdoni-api/vote-submit"}},f={},v=[{value:"Get vote",id:"get-vote",level:2}],y={toc:v};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-vote"},"Get vote"),(0,o.kt)("p",null,"Get the content of an existing Vote. If is an encrypted election it return the ",(0,o.kt)("inlineCode",{parentName:"p"},"encryptionKeys")," indexes and the  package will be codified."),(0,o.kt)("p",null,"The Vote is identified by its ",(0,o.kt)("inlineCode",{parentName:"p"},"voteId"),", also called ",(0,o.kt)("inlineCode",{parentName:"p"},"nullifier"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"nullifier")," is deterministic and its hash  could be computed as following (using ",(0,o.kt)("inlineCode",{parentName:"p"},"Keccak256"),"):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For signature based elections, is the hash of the ",(0,o.kt)("inlineCode",{parentName:"li"},"voterAddress")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"processId")),(0,o.kt)("li",{parentName:"ul"},"For anonymous elections, the ",(0,o.kt)("inlineCode",{parentName:"li"},"privateKey")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"processId"))),(0,o.kt)("p",null,"As well, on the response, the ",(0,o.kt)("inlineCode",{parentName:"p"},"voterId")," won't be returned for anonymous elections, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"encryptionKeyIndexes")," only for finished encrypted elections."),(0,o.kt)("p",null,"Height and txIndex refer to the block height and the index of the transaction where vote is registered."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"overwriteCount")," refers to the number of vote overwrites already executed by the user. At election creation  time, you can specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxVoteOverwrites")," parameter, which defines how many times a voter can submit a vote. Only last vote will be taken into election final results."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{name:"voteId",in:"path",description:"Nullifier of the vote",required:!0,schema:{type:"string",example:"1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(a.Z,{mdxType:"ApiTabs"},(0,o.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Successful operation")),(0,o.kt)("div",null,(0,o.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(d.Z,{mdxType:"SchemaTabs"},(0,o.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"envelope"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"encryptionKeys",required:!1,deprecated:void 0,schemaDescription:"Sent only for encrypted elections (no results until the end)",schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"txHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"package",required:!1,deprecated:void 0,schemaDescription:"For encrypted elections this will be codified",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"voteId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"voterId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"weight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"electionID",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"blockHeight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"transactionIndex",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"overwriteCount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"date",required:!1,deprecated:void 0,schemaDescription:"Date when the vote was emitted",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,o.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(c.Z,{responseExample:'{\n  "envelope": {\n    "encryptionKeys": [\n      1,\n      2\n    ],\n    "txHash": "75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad",\n    "package": "{\\"nonce\\":\\"a34ac6a34cfd9de2\\",\\"votes\\":[38]}",\n    "voteId": "1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad",\n    "voterId": "0090782b695bbe528331540ed14e4b92b9101673fb4a6bfe6d904e9ab784bce1",\n    "weight": "1",\n    "electionID": "0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845",\n    "blockHeight": 64924,\n    "transactionIndex": 0,\n    "overwriteCount": 0,\n    "date": "2022-11-17T18:00:57.379551614Z"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Invalid nullifier supplied")),(0,o.kt)("div",null)),(0,o.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"The specified resource was not found")),(0,o.kt)("div",null)),(0,o.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Internal server error")),(0,o.kt)("div",null)))))}b.isMDXComponent=!0}}]);