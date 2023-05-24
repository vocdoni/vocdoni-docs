"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6425],{34680:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>m,metadata:()=>u,toc:()=>f});var n=i(87462),o=(i(67294),i(3905)),a=i(26389),s=i(94891),r=(i(75190),i(47507)),c=i(24310),l=i(63303),h=(i(75035),i(85162));const m={id:"info",title:"Vochain information",description:"Return basic Vocdoni Blockchain (Vochain) information like blockTime, chainId, current height...",sidebar_label:"Vochain information",hide_title:!0,hide_table_of_contents:!0,api:{description:"Return basic Vocdoni Blockchain (Vochain) information like blockTime, chainId, current height...\n\n`blockTime`: each array position return average time for 1 minute, 10 minutes, 1 hour, 6 hours and 24 hours.\n\n`MaxCensusSize`: is a new feature introduced in the blockchain that is used to limit the number of \n  votes that can be registered for an election. This feature helps to prevent any potential overflow of the \n  blockchain when the number of votes goes beyond the maximum limit. This is the maximum value \n  that an election creation can allow.\n\n  In order to create an election, the creator is required to set the `MaxCensusSize` parameter to a proper value. \n  Typically, this value should be equal to the size of the census. If the MaxCensusSize parameter is set to 0, an \n  error will occur and the election cannot be created.\n\n  The `MaxCensusSize` parameter determines the maximum number of votes that can be registered by the blockchain. \n  If the number of votes exceeds this limit, the vote transaction will fail (overwrite votes does not count).\n\n  See `MaxCensusSize` attribute on the VocdoniSDK  to add the maximum census size to a single election. Will \n  throw an error if is superior than the allowed on the Vochain: `Max census size for the election is greater \n  than allowed size`.\n\n`networkCapacity`  indicates how many votes per block is the blockchain supposed to achieve. As bigger the \n capacity as cheaper the elections.",operationId:"info",tags:["Chain"],responses:{200:{description:"Vochain info object",content:{"application/json":{schema:{type:"object",properties:{chainId:{type:"string",example:"azeno"},blockTime:{type:"array",items:{type:"integer",format:"int32"},example:["12000 // average 1 minute","11580 // 10 minutes","11000 // 1h","11100 // 6h","11100 // 24h"]},electionCount:{type:"integer",example:208},genesisTime:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"},height:{type:"integer",format:"int32",example:64924},syncing:{type:"boolean",example:!1},blockTimestamp:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"},transactionCount:{type:"integer",example:1800},organizationCount:{type:"integer",example:4},maxCensusSize:{type:"integer",example:2e3},validatorCount:{type:"integer",example:4},networkCapacity:{type:"number",format:"int64",example:2e3},voteCount:{type:"integer",example:843}}}}}}},method:"get",path:"/chain/info",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Vochain information",description:{content:"Return basic Vocdoni Blockchain (Vochain) information like blockTime, chainId, current height...\n\n`blockTime`: each array position return average time for 1 minute, 10 minutes, 1 hour, 6 hours and 24 hours.\n\n`MaxCensusSize`: is a new feature introduced in the blockchain that is used to limit the number of \n  votes that can be registered for an election. This feature helps to prevent any potential overflow of the \n  blockchain when the number of votes goes beyond the maximum limit. This is the maximum value \n  that an election creation can allow.\n\n  In order to create an election, the creator is required to set the `MaxCensusSize` parameter to a proper value. \n  Typically, this value should be equal to the size of the census. If the MaxCensusSize parameter is set to 0, an \n  error will occur and the election cannot be created.\n\n  The `MaxCensusSize` parameter determines the maximum number of votes that can be registered by the blockchain. \n  If the number of votes exceeds this limit, the vote transaction will fail (overwrite votes does not count).\n\n  See `MaxCensusSize` attribute on the VocdoniSDK  to add the maximum census size to a single election. Will \n  throw an error if is superior than the allowed on the Vochain: `Max census size for the election is greater \n  than allowed size`.\n\n`networkCapacity`  indicates how many votes per block is the blockchain supposed to achieve. As bigger the \n capacity as cheaper the elections.",type:"text/plain"},url:{path:["chain","info"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},d=void 0,u={unversionedId:"vocdoni-api/info",id:"vocdoni-api/info",title:"Vochain information",description:"Return basic Vocdoni Blockchain (Vochain) information like blockTime, chainId, current height...",source:"@site/docs/vocdoni-api/info.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/info",permalink:"/vocdoni-api/info",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"info",title:"Vochain information",description:"Return basic Vocdoni Blockchain (Vochain) information like blockTime, chainId, current height...",sidebar_label:"Vochain information",hide_title:!0,hide_table_of_contents:!0,api:{description:"Return basic Vocdoni Blockchain (Vochain) information like blockTime, chainId, current height...\n\n`blockTime`: each array position return average time for 1 minute, 10 minutes, 1 hour, 6 hours and 24 hours.\n\n`MaxCensusSize`: is a new feature introduced in the blockchain that is used to limit the number of \n  votes that can be registered for an election. This feature helps to prevent any potential overflow of the \n  blockchain when the number of votes goes beyond the maximum limit. This is the maximum value \n  that an election creation can allow.\n\n  In order to create an election, the creator is required to set the `MaxCensusSize` parameter to a proper value. \n  Typically, this value should be equal to the size of the census. If the MaxCensusSize parameter is set to 0, an \n  error will occur and the election cannot be created.\n\n  The `MaxCensusSize` parameter determines the maximum number of votes that can be registered by the blockchain. \n  If the number of votes exceeds this limit, the vote transaction will fail (overwrite votes does not count).\n\n  See `MaxCensusSize` attribute on the VocdoniSDK  to add the maximum census size to a single election. Will \n  throw an error if is superior than the allowed on the Vochain: `Max census size for the election is greater \n  than allowed size`.\n\n`networkCapacity`  indicates how many votes per block is the blockchain supposed to achieve. As bigger the \n capacity as cheaper the elections.",operationId:"info",tags:["Chain"],responses:{200:{description:"Vochain info object",content:{"application/json":{schema:{type:"object",properties:{chainId:{type:"string",example:"azeno"},blockTime:{type:"array",items:{type:"integer",format:"int32"},example:["12000 // average 1 minute","11580 // 10 minutes","11000 // 1h","11100 // 6h","11100 // 24h"]},electionCount:{type:"integer",example:208},genesisTime:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"},height:{type:"integer",format:"int32",example:64924},syncing:{type:"boolean",example:!1},blockTimestamp:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"},transactionCount:{type:"integer",example:1800},organizationCount:{type:"integer",example:4},maxCensusSize:{type:"integer",example:2e3},validatorCount:{type:"integer",example:4},networkCapacity:{type:"number",format:"int64",example:2e3},voteCount:{type:"integer",example:843}}}}}}},method:"get",path:"/chain/info",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Vochain information",description:{content:"Return basic Vocdoni Blockchain (Vochain) information like blockTime, chainId, current height...\n\n`blockTime`: each array position return average time for 1 minute, 10 minutes, 1 hour, 6 hours and 24 hours.\n\n`MaxCensusSize`: is a new feature introduced in the blockchain that is used to limit the number of \n  votes that can be registered for an election. This feature helps to prevent any potential overflow of the \n  blockchain when the number of votes goes beyond the maximum limit. This is the maximum value \n  that an election creation can allow.\n\n  In order to create an election, the creator is required to set the `MaxCensusSize` parameter to a proper value. \n  Typically, this value should be equal to the size of the census. If the MaxCensusSize parameter is set to 0, an \n  error will occur and the election cannot be created.\n\n  The `MaxCensusSize` parameter determines the maximum number of votes that can be registered by the blockchain. \n  If the number of votes exceeds this limit, the vote transaction will fail (overwrite votes does not count).\n\n  See `MaxCensusSize` attribute on the VocdoniSDK  to add the maximum census size to a single election. Will \n  throw an error if is superior than the allowed on the Vochain: `Max census size for the election is greater \n  than allowed size`.\n\n`networkCapacity`  indicates how many votes per block is the blockchain supposed to achieve. As bigger the \n capacity as cheaper the elections.",type:"text/plain"},url:{path:["chain","info"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Get Validators",permalink:"/vocdoni-api/validators"},next:{title:"Accounts",permalink:"/vocdoni-api/accounts"}},p={},f=[{value:"Vochain information",id:"vochain-information",level:2}],v={toc:f};function b(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vochain-information"},"Vochain information"),(0,o.kt)("p",null,"Return basic Vocdoni Blockchain (Vochain) information like blockTime, chainId, current height..."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"blockTime"),": each array position return average time for 1 minute, 10 minutes, 1 hour, 6 hours and 24 hours."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MaxCensusSize"),": is a new feature introduced in the blockchain that is used to limit the number of\nvotes that can be registered for an election. This feature helps to prevent any potential overflow of the\nblockchain when the number of votes goes beyond the maximum limit. This is the maximum value\nthat an election creation can allow."),(0,o.kt)("p",null,"  In order to create an election, the creator is required to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"MaxCensusSize")," parameter to a proper value.\nTypically, this value should be equal to the size of the census. If the MaxCensusSize parameter is set to 0, an\nerror will occur and the election cannot be created."),(0,o.kt)("p",null,"  The ",(0,o.kt)("inlineCode",{parentName:"p"},"MaxCensusSize")," parameter determines the maximum number of votes that can be registered by the blockchain.\nIf the number of votes exceeds this limit, the vote transaction will fail (overwrite votes does not count)."),(0,o.kt)("p",null,"  See ",(0,o.kt)("inlineCode",{parentName:"p"},"MaxCensusSize")," attribute on the VocdoniSDK  to add the maximum census size to a single election. Will\nthrow an error if is superior than the allowed on the Vochain: ",(0,o.kt)("inlineCode",{parentName:"p"},"Max census size for the election is greater \n  than allowed size"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"networkCapacity"),"  indicates how many votes per block is the blockchain supposed to achieve. As bigger the\ncapacity as cheaper the elections."),(0,o.kt)("div",null,(0,o.kt)(a.Z,{mdxType:"ApiTabs"},(0,o.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Vochain info object")),(0,o.kt)("div",null,(0,o.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"SchemaTabs"},(0,o.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(c.Z,{collapsible:!1,name:"chainId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"blockTime",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"electionCount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"genesisTime",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"height",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"syncing",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"blockTimestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"transactionCount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"organizationCount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"maxCensusSize",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"validatorCount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"networkCapacity",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"voteCount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(r.Z,{responseExample:'{\n  "chainId": "azeno",\n  "blockTime": [\n    "12000 // average 1 minute",\n    "11580 // 10 minutes",\n    "11000 // 1h",\n    "11100 // 6h",\n    "11100 // 24h"\n  ],\n  "electionCount": 208,\n  "genesisTime": "2022-11-17T18:00:57.379551614Z",\n  "height": 64924,\n  "syncing": false,\n  "blockTimestamp": "2022-11-17T18:00:57.379551614Z",\n  "transactionCount": 1800,\n  "organizationCount": 4,\n  "maxCensusSize": 2000,\n  "validatorCount": 4,\n  "networkCapacity": 2000,\n  "voteCount": 843\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);