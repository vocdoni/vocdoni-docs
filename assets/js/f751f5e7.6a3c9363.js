(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3537],{40611:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(87462),o=a(67294),s=a(86390),i=a(18694);const r={React:o,...o,Image:i.Ee,ElectionProvider:i.qT,ElectionHeader:i.UE,ElectionTitle:i.hi,ElectionSchedule:i.vE,ElectionResults:i.Hj,ElectionStatusBadge:i.QW,ElectionDescription:i.I3,ElectionQuestions:i.Vx,OrganizationProvider:i.f0,OrganizationAvatar:i.ld,OrganizationDescription:i.G9,OrganizationHeader:i.sC,OrganizationName:i.X5,Organization:i.cp};var c=a(170),d=a(39805),l=a(14902),u=a(23537);const p="f752b527e2aba395d1ba4c0de9c1471234567890",m="https://picsum.photos/seed/{seed}/1400/300",h={address:p,balance:0,nonce:123,electionIndex:13,account:new u.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:m.replace("{seed}",p),avatar:`https://picsum.photos/seed/${p}/300`,meta:[]})},f=`c5d2460186f7${p}020000000000`,g={electionCount:0,electionId:f,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:u.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:u.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:0,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:m.replace("{seed}",f)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},y=u.u_.build({census:new u.pT(g.census.censusRoot,g.census.censusURL,u.oN.censusTypeFromCensusOrigin(g.census.censusOrigin),4,BigInt("40")),creationTime:g.creationTime,electionCount:0,endDate:g.endDate,finalResults:g.finalResults,id:g.electionId,metadataURL:g.metadataURL,organizationId:g.organizationId,raw:g,results:g.result,status:g.status,title:g.metadata.title,description:g.metadata.description,voteCount:g.voteCount,header:g.metadata.media.header,questions:g.metadata.questions,startDate:g.startDate,voteType:g.voteMode,electionType:{autoStart:g.electionMode.autoStart,interruptible:g.electionMode.interruptible,dynamicCensus:g.electionMode.dynamicCensus,secretUntilTheEnd:g.voteMode.encryptedVotes,anonymous:g.voteMode.anonymous}}),v=(b=c.Z,function(e){return e.live?o.createElement(d.x,{theme:(0,l.B1)(i.rS),resetCSS:!1},o.createElement(i.de,{env:"stg"},o.createElement(i.f0,{organization:h},o.createElement(i.qT,{election:y},o.createElement(s.Z,(0,n.Z)({scope:r},e)))))):o.createElement(b,e)});var b},8146:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>v,frontMatter:()=>p,metadata:()=>h,toc:()=>g});var n=a(87462),o=(a(67294),a(3905)),s=a(26389),i=a(94891),r=a(75190),c=a(47507),d=a(24310),l=a(63303),u=(a(75035),a(85162));const p={id:"list-account-transfers",title:"List account transfers",description:"Returns the token transfers for an account. A transfer is a token transference from one account to other (excepting the burn address).",sidebar_label:"List account transfers",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Specific accountID",in:"path",name:"accountID",required:!0,schema:{type:"string"}},{description:"Paginator page",in:"path",name:"page",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{transfers:{items:{properties:{amount:{type:"integer"},from:{items:{type:"integer"},type:"array"},height:{type:"integer"},timestamp:{type:"string"},to:{items:{type:"integer"},type:"array"},txHash:{items:{type:"integer"},type:"array"}},type:"object"},type:"array"}},type:"object"}}},description:"OK"}},tags:["Accounts"],description:"Returns the token transfers for an account. A transfer is a token transference from one account to other (excepting the burn address).",method:"get",path:"/accounts/{accountID}/transfers/page/{page}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"List account transfers",description:{content:"Returns the token transfers for an account. A transfer is a token transference from one account to other (excepting the burn address).",type:"text/plain"},url:{path:["accounts",":accountID","transfers","page",":page"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Specific accountID",type:"text/plain"},type:"any",value:"",key:"accountID"},{disabled:!1,description:{content:"(Required) Paginator page",type:"text/plain"},type:"any",value:"",key:"page"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},m=void 0,h={unversionedId:"vocdoni-api/list-account-transfers",id:"vocdoni-api/list-account-transfers",title:"List account transfers",description:"Returns the token transfers for an account. A transfer is a token transference from one account to other (excepting the burn address).",source:"@site/docs/vocdoni-api/list-account-transfers.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/list-account-transfers",permalink:"/vocdoni-api/list-account-transfers",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-account-transfers",title:"List account transfers",description:"Returns the token transfers for an account. A transfer is a token transference from one account to other (excepting the burn address).",sidebar_label:"List account transfers",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Specific accountID",in:"path",name:"accountID",required:!0,schema:{type:"string"}},{description:"Paginator page",in:"path",name:"page",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{transfers:{items:{properties:{amount:{type:"integer"},from:{items:{type:"integer"},type:"array"},height:{type:"integer"},timestamp:{type:"string"},to:{items:{type:"integer"},type:"array"},txHash:{items:{type:"integer"},type:"array"}},type:"object"},type:"array"}},type:"object"}}},description:"OK"}},tags:["Accounts"],description:"Returns the token transfers for an account. A transfer is a token transference from one account to other (excepting the burn address).",method:"get",path:"/accounts/{accountID}/transfers/page/{page}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"List account transfers",description:{content:"Returns the token transfers for an account. A transfer is a token transference from one account to other (excepting the burn address).",type:"text/plain"},url:{path:["accounts",":accountID","transfers","page",":page"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Specific accountID",type:"text/plain"},type:"any",value:"",key:"accountID"},{disabled:!1,description:{content:"(Required) Paginator page",type:"text/plain"},type:"any",value:"",key:"page"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Get treasurer address",permalink:"/vocdoni-api/get-treasurer-address"},next:{title:"Get account",permalink:"/vocdoni-api/get-account"}},f={},g=[{value:"List account transfers",id:"list-account-transfers",level:2}],y={toc:g};function v(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"list-account-transfers"},"List account transfers"),(0,o.kt)("p",null,"Returns the token transfers for an account. A transfer is a token transference from one account to other (excepting the burn address)."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{description:"Specific accountID",in:"path",name:"accountID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,o.kt)(r.Z,{className:"paramsItem",param:{description:"Paginator page",in:"path",name:"page",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"ApiTabs"},(0,o.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"OK")),(0,o.kt)("div",null,(0,o.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"SchemaTabs"},(0,o.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"transfers"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"amount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"from",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"height",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"to",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"txHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,o.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(c.Z,{responseExample:'{\n  "transfers": [\n    {\n      "amount": 0,\n      "from": [\n        0\n      ],\n      "height": 0,\n      "timestamp": "string",\n      "to": [\n        0\n      ],\n      "txHash": [\n        0\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);