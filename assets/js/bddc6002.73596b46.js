(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[47],{40611:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(87462),i=a(67294),o=a(86390),s=a(18694);const r={React:i,...i,Image:s.Ee,ElectionProvider:s.qT,ElectionHeader:s.UE,ElectionTitle:s.hi,ElectionSchedule:s.vE,ElectionResults:s.Hj,ElectionStatusBadge:s.QW,ElectionDescription:s.I3,ElectionQuestions:s.Vx,OrganizationProvider:s.f0,OrganizationAvatar:s.ld,OrganizationDescription:s.G9,OrganizationHeader:s.sC,OrganizationName:s.X5,Organization:s.cp};var c=a(170),l=a(39805),d=a(14902),p=a(23537);const u="f752b527e2aba395d1ba4c0de9c1471234567890",h="https://picsum.photos/seed/{seed}/1400/300",m={address:u,balance:0,nonce:123,electionIndex:13,account:new p.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:h.replace("{seed}",u),avatar:`https://picsum.photos/seed/${u}/300`,meta:[]})},g=`c5d2460186f7${u}020000000000`,b={electionCount:0,electionId:g,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:p.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:p.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:0,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:h.replace("{seed}",g)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},y=p.u_.build({census:new p.pT(b.census.censusRoot,b.census.censusURL,p.oN.censusTypeFromCensusOrigin(b.census.censusOrigin),4,BigInt("40")),creationTime:b.creationTime,electionCount:0,endDate:b.endDate,finalResults:b.finalResults,id:b.electionId,metadataURL:b.metadataURL,organizationId:b.organizationId,raw:b,results:b.result,status:b.status,title:b.metadata.title,description:b.metadata.description,voteCount:b.voteCount,header:b.metadata.media.header,questions:b.metadata.questions,startDate:b.startDate,voteType:b.voteMode,electionType:{autoStart:b.electionMode.autoStart,interruptible:b.electionMode.interruptible,dynamicCensus:b.electionMode.dynamicCensus,secretUntilTheEnd:b.voteMode.encryptedVotes,anonymous:b.voteMode.anonymous}}),v=(f=c.Z,function(e){return e.live?i.createElement(l.x,{theme:(0,d.B1)(s.rS),resetCSS:!1},i.createElement(s.de,{env:"stg"},i.createElement(s.f0,{organization:m},i.createElement(s.qT,{election:y},i.createElement(o.Z,(0,n.Z)({scope:r},e)))))):i.createElement(f,e)});var f},53982:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>v,frontMatter:()=>u,metadata:()=>m,toc:()=>b});var n=a(87462),i=(a(67294),a(3905)),o=a(26389),s=a(94891),r=a(75190),c=a(47507),l=a(24310),d=a(63303),p=(a(75035),a(85162));const u={id:"transactions-in-a-block",title:"Transactions in a block",description:"Given a block returns the list of transactions for that block",sidebar_label:"Transactions in a block",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Block height",in:"path",name:"height",required:!0,schema:{type:"number"}},{description:"Page to paginate",in:"path",name:"page",required:!0,schema:{type:"number"}}],responses:{200:{content:{"application/json":{schema:{items:{properties:{transactionHash:{type:"string"},transactionIndex:{type:"integer"},transactionNumber:{type:"integer"},transactionType:{type:"string"}},type:"object"},type:"array"}}},description:"OK"}},tags:["Chain"],description:"Given a block returns the list of transactions for that block",method:"get",path:"/chain/blocks/{height}/transactions/page/{page}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Transactions in a block",description:{content:"Given a block returns the list of transactions for that block",type:"text/plain"},url:{path:["chain","blocks",":height","transactions","page",":page"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Block height",type:"text/plain"},type:"any",value:"",key:"height"},{disabled:!1,description:{content:"(Required) Page to paginate",type:"text/plain"},type:"any",value:"",key:"page"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},h=void 0,m={unversionedId:"vocdoni-api/transactions-in-a-block",id:"vocdoni-api/transactions-in-a-block",title:"Transactions in a block",description:"Given a block returns the list of transactions for that block",source:"@site/docs/vocdoni-api/transactions-in-a-block.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/transactions-in-a-block",permalink:"/vocdoni-api/transactions-in-a-block",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"transactions-in-a-block",title:"Transactions in a block",description:"Given a block returns the list of transactions for that block",sidebar_label:"Transactions in a block",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Block height",in:"path",name:"height",required:!0,schema:{type:"number"}},{description:"Page to paginate",in:"path",name:"page",required:!0,schema:{type:"number"}}],responses:{200:{content:{"application/json":{schema:{items:{properties:{transactionHash:{type:"string"},transactionIndex:{type:"integer"},transactionNumber:{type:"integer"},transactionType:{type:"string"}},type:"object"},type:"array"}}},description:"OK"}},tags:["Chain"],description:"Given a block returns the list of transactions for that block",method:"get",path:"/chain/blocks/{height}/transactions/page/{page}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Transactions in a block",description:{content:"Given a block returns the list of transactions for that block",type:"text/plain"},url:{path:["chain","blocks",":height","transactions","page",":page"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Block height",type:"text/plain"},type:"any",value:"",key:"height"},{disabled:!1,description:{content:"(Required) Page to paginate",type:"text/plain"},type:"any",value:"",key:"page"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Get block (by height)",permalink:"/vocdoni-api/get-block-by-height"},next:{title:"Estimate date to block",permalink:"/vocdoni-api/estimate-date-to-block"}},g={},b=[{value:"Transactions in a block",id:"transactions-in-a-block",level:2}],y={toc:b};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"transactions-in-a-block"},"Transactions in a block"),(0,i.kt)("p",null,"Given a block returns the list of transactions for that block"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{description:"Block height",in:"path",name:"height",required:!0,schema:{type:"number"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{description:"Page to paginate",in:"path",name:"page",required:!0,schema:{type:"number"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"transactionHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"transactionIndex",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"transactionNumber",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"transactionType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'[\n  {\n    "transactionHash": "string",\n    "transactionIndex": 0,\n    "transactionNumber": 0,\n    "transactionType": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);