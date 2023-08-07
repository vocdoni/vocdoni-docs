(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4259],{40611:(e,t,i)=>{"use strict";i.d(t,{Z:()=>v});var a=i(87462),n=i(67294),o=i(86390),s=i(18694);const r={React:n,...n,Image:s.Ee,ElectionProvider:s.qT,ElectionHeader:s.UE,ElectionTitle:s.hi,ElectionSchedule:s.vE,ElectionResults:s.Hj,ElectionStatusBadge:s.QW,ElectionDescription:s.I3,ElectionQuestions:s.Vx,OrganizationProvider:s.f0,OrganizationAvatar:s.ld,OrganizationDescription:s.G9,OrganizationHeader:s.sC,OrganizationName:s.X5,Organization:s.cp};var c=i(170),l=i(39805),d=i(14902),p=i(23537);const u="f752b527e2aba395d1ba4c0de9c1471234567890",m="https://picsum.photos/seed/{seed}/1400/300",h={address:u,balance:0,nonce:123,electionIndex:13,account:new p.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:m.replace("{seed}",u),avatar:`https://picsum.photos/seed/${u}/300`,meta:[]})},g=`c5d2460186f7${u}020000000000`,y={electionCount:0,electionId:g,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:p.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:p.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:0,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:m.replace("{seed}",g)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},f=p.u_.build({census:new p.pT(y.census.censusRoot,y.census.censusURL,p.oN.censusTypeFromCensusOrigin(y.census.censusOrigin),4,BigInt("40")),creationTime:y.creationTime,electionCount:0,endDate:y.endDate,finalResults:y.finalResults,id:y.electionId,metadataURL:y.metadataURL,organizationId:y.organizationId,raw:y,results:y.result,status:y.status,title:y.metadata.title,description:y.metadata.description,voteCount:y.voteCount,header:y.metadata.media.header,questions:y.metadata.questions,startDate:y.startDate,voteType:y.voteMode,electionType:{autoStart:y.electionMode.autoStart,interruptible:y.electionMode.interruptible,dynamicCensus:y.electionMode.dynamicCensus,secretUntilTheEnd:y.voteMode.encryptedVotes,anonymous:y.voteMode.anonymous}}),v=(b=c.Z,function(e){return e.live?n.createElement(l.x,{theme:(0,d.B1)(s.rS),resetCSS:!1},n.createElement(s.de,{env:"stg"},n.createElement(s.f0,{organization:h},n.createElement(s.qT,{election:f},n.createElement(o.Z,(0,a.Z)({scope:r},e)))))):n.createElement(b,e)});var b},15980:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>v,frontMatter:()=>u,metadata:()=>h,toc:()=>y});var a=i(87462),n=(i(67294),i(3905)),o=i(26389),s=i(94891),r=i(75190),c=i(47507),l=i(24310),d=i(63303),p=(i(75035),i(85162));const u={id:"list-organization-elections",title:"List organization elections",description:"List the elections of an organization",sidebar_label:"List organization elections",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Specific organizationID",in:"path",name:"organizationID",required:!0,schema:{type:"string"}},{description:"Define de page number",in:"path",name:"page",required:!0,schema:{type:"number"}}],responses:{200:{content:{"application/json":{schema:{properties:{elections:{items:{properties:{electionId:{type:"string"},endDate:{type:"string"},finalResults:{type:"boolean"},manuallyEnded:{type:"boolean"},organizationId:{type:"string"},result:{items:{items:{type:"object"},type:"array"},type:"array"},startDate:{type:"string"},status:{type:"string"},voteCount:{type:"integer"}},type:"object"},type:"array"}},type:"object"}}},description:"OK"}},tags:["Accounts"],description:"List the elections of an organization",method:"get",path:"/accounts/{organizationID}/elections/page/{page}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"List organization elections",description:{content:"List the elections of an organization",type:"text/plain"},url:{path:["accounts",":organizationID","elections","page",":page"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Specific organizationID",type:"text/plain"},type:"any",value:"",key:"organizationID"},{disabled:!1,description:{content:"(Required) Define de page number",type:"text/plain"},type:"any",value:"",key:"page"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},m=void 0,h={unversionedId:"vocdoni-api/list-organization-elections",id:"vocdoni-api/list-organization-elections",title:"List organization elections",description:"List the elections of an organization",source:"@site/docs/vocdoni-api/list-organization-elections.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/list-organization-elections",permalink:"/vocdoni-api/list-organization-elections",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-organization-elections",title:"List organization elections",description:"List the elections of an organization",sidebar_label:"List organization elections",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Specific organizationID",in:"path",name:"organizationID",required:!0,schema:{type:"string"}},{description:"Define de page number",in:"path",name:"page",required:!0,schema:{type:"number"}}],responses:{200:{content:{"application/json":{schema:{properties:{elections:{items:{properties:{electionId:{type:"string"},endDate:{type:"string"},finalResults:{type:"boolean"},manuallyEnded:{type:"boolean"},organizationId:{type:"string"},result:{items:{items:{type:"object"},type:"array"},type:"array"},startDate:{type:"string"},status:{type:"string"},voteCount:{type:"integer"}},type:"object"},type:"array"}},type:"object"}}},description:"OK"}},tags:["Accounts"],description:"List the elections of an organization",method:"get",path:"/accounts/{organizationID}/elections/page/{page}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"List organization elections",description:{content:"List the elections of an organization",type:"text/plain"},url:{path:["accounts",":organizationID","elections","page",":page"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Specific organizationID",type:"text/plain"},type:"any",value:"",key:"organizationID"},{disabled:!1,description:{content:"(Required) Define de page number",type:"text/plain"},type:"any",value:"",key:"page"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Count organization elections",permalink:"/vocdoni-api/count-organization-elections"},next:{title:"List organization elections by status",permalink:"/vocdoni-api/list-organization-elections-by-status"}},g={},y=[{value:"List organization elections",id:"list-organization-elections",level:2}],f={toc:y};function v(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"list-organization-elections"},"List organization elections"),(0,n.kt)("p",null,"List the elections of an organization"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{description:"Specific organizationID",in:"path",name:"organizationID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{description:"Define de page number",in:"path",name:"page",required:!0,schema:{type:"number"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(o.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"elections"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"electionId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"endDate",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"finalResults",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"manuallyEnded",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"organizationId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"array[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"startDate",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"voteCount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "elections": [\n    {\n      "electionId": "string",\n      "endDate": "string",\n      "finalResults": true,\n      "manuallyEnded": true,\n      "organizationId": "string",\n      "result": [\n        [\n          {}\n        ]\n      ],\n      "startDate": "string",\n      "status": "string",\n      "voteCount": 0\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);