(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4820],{40611:(e,t,s)=>{"use strict";s.d(t,{Z:()=>f});var n=s(87462),a=s(67294),i=s(86390),o=s(18694);const r={React:a,...a,Image:o.Ee,ElectionProvider:o.qT,ElectionHeader:o.UE,ElectionTitle:o.hi,ElectionSchedule:o.vE,ElectionResults:o.Hj,ElectionStatusBadge:o.QW,ElectionDescription:o.I3,ElectionQuestions:o.Vx,OrganizationProvider:o.f0,OrganizationAvatar:o.ld,OrganizationDescription:o.G9,OrganizationHeader:o.sC,OrganizationName:o.X5,Organization:o.cp};var c=s(170),d=s(39805),l=s(14902),u=s(23537);const p="f752b527e2aba395d1ba4c0de9c1471234567890",m="https://picsum.photos/seed/{seed}/1400/300",h={address:p,balance:0,nonce:123,electionIndex:13,account:new u.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:m.replace("{seed}",p),avatar:`https://picsum.photos/seed/${p}/300`,meta:[]})},g=`c5d2460186f7${p}020000000000`,v={electionCount:0,electionId:g,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:u.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:u.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:0,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:m.replace("{seed}",g)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},y=u.u_.build({census:new u.pT(v.census.censusRoot,v.census.censusURL,u.oN.censusTypeFromCensusOrigin(v.census.censusOrigin),4,BigInt("40")),creationTime:v.creationTime,electionCount:0,endDate:v.endDate,finalResults:v.finalResults,id:v.electionId,metadataURL:v.metadataURL,organizationId:v.organizationId,raw:v,results:v.result,status:v.status,title:v.metadata.title,description:v.metadata.description,voteCount:v.voteCount,header:v.metadata.media.header,questions:v.metadata.questions,startDate:v.startDate,voteType:v.voteMode,electionType:{autoStart:v.electionMode.autoStart,interruptible:v.electionMode.interruptible,dynamicCensus:v.electionMode.dynamicCensus,secretUntilTheEnd:v.voteMode.encryptedVotes,anonymous:v.voteMode.anonymous}}),f=(b=c.Z,function(e){return e.live?a.createElement(d.x,{theme:(0,l.B1)(o.rS),resetCSS:!1},a.createElement(o.de,{env:"stg"},a.createElement(o.f0,{organization:h},a.createElement(o.qT,{election:y},a.createElement(i.Z,(0,n.Z)({scope:r},e)))))):a.createElement(b,e)});var b},94369:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>f,frontMatter:()=>p,metadata:()=>h,toc:()=>v});var n=s(87462),a=(s(67294),s(3905)),i=s(26389),o=s(94891),r=s(75190),c=s(47507),d=s(24310),l=s(63303),u=(s(75035),s(85162));const p={id:"export-census",title:"Export census",description:"Export census to JSON format. Requires Bearer token",sidebar_label:"Export census",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Census id",in:"path",name:"censusID",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{censusID:{type:"string"},data:{items:{type:"integer"},type:"array"},maxLevels:{description:"MaxLevels is required to load the census with the original size because\nit could be different according to the election (and census) type.",type:"integer"},rootHash:{type:"string"},size:{type:"integer"},token:{type:"string"},type:{enum:[0,1,2,3,4,5,6],type:"integer","x-enum-varnames":["Census_UNKNOWN","Census_ARBO_BLAKE2B","Census_ARBO_POSEIDON","Census_ETHEREUMSTORAGE","Census_ETHEREUMACCOUNT","Census_CA","Census_FARCASTER_FRAME"]},uri:{type:"string"}},type:"object"}}},description:"OK"}},security:[{BasicAuth:[]}],tags:["Censuses"],description:"Export census to JSON format. Requires Bearer token",method:"get",path:"/censuses/{censusID}/export",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Export census",description:{content:"Export census to JSON format. Requires Bearer token",type:"text/plain"},url:{path:["censuses",":censusID","export"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id",type:"text/plain"},type:"any",value:"",key:"censusID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},m=void 0,h={unversionedId:"vocdoni-api/export-census",id:"vocdoni-api/export-census",title:"Export census",description:"Export census to JSON format. Requires Bearer token",source:"@site/docs/vocdoni-api/export-census.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/export-census",permalink:"/vocdoni-api/export-census",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"export-census",title:"Export census",description:"Export census to JSON format. Requires Bearer token",sidebar_label:"Export census",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Census id",in:"path",name:"censusID",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{censusID:{type:"string"},data:{items:{type:"integer"},type:"array"},maxLevels:{description:"MaxLevels is required to load the census with the original size because\nit could be different according to the election (and census) type.",type:"integer"},rootHash:{type:"string"},size:{type:"integer"},token:{type:"string"},type:{enum:[0,1,2,3,4,5,6],type:"integer","x-enum-varnames":["Census_UNKNOWN","Census_ARBO_BLAKE2B","Census_ARBO_POSEIDON","Census_ETHEREUMSTORAGE","Census_ETHEREUMACCOUNT","Census_CA","Census_FARCASTER_FRAME"]},uri:{type:"string"}},type:"object"}}},description:"OK"}},security:[{BasicAuth:[]}],tags:["Censuses"],description:"Export census to JSON format. Requires Bearer token",method:"get",path:"/censuses/{censusID}/export",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Export census",description:{content:"Export census to JSON format. Requires Bearer token",type:"text/plain"},url:{path:["censuses",":censusID","export"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id",type:"text/plain"},type:"any",value:"",key:"censusID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Delete census",permalink:"/vocdoni-api/delete-census"},next:{title:"Import census",permalink:"/vocdoni-api/import-census"}},g={},v=[{value:"Export census",id:"export-census",level:2}],y={toc:v};function f(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},y,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"export-census"},"Export census"),(0,a.kt)("p",null,"Export census to JSON format. Requires Bearer token"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(r.Z,{className:"paramsItem",param:{description:"Census id",in:"path",name:"censusID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"OK")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"SchemaTabs"},(0,a.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"censusID",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"data",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"maxLevels",required:!1,deprecated:void 0,schemaDescription:"MaxLevels is required to load the census with the original size because\nit could be different according to the election (and census) type.",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"rootHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"size",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"token",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:"**Possible values:** [`0`, `1`, `2`, `3`, `4`, `5`, `6`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"uri",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'{\n  "censusID": "string",\n  "data": [\n    0\n  ],\n  "maxLevels": 0,\n  "rootHash": "string",\n  "size": 0,\n  "token": "string",\n  "type": 0,\n  "uri": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);