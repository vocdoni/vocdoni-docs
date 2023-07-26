(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2116],{40611:(e,t,o)=>{"use strict";o.d(t,{Z:()=>f});var n=o(87462),i=o(67294),a=o(86390),s=o(18694);const r={React:i,...i,Image:s.Ee,ElectionProvider:s.qT,ElectionHeader:s.UE,ElectionTitle:s.hi,ElectionSchedule:s.vE,ElectionResults:s.Hj,ElectionStatusBadge:s.QW,ElectionDescription:s.I3,ElectionQuestions:s.Vx,OrganizationProvider:s.f0,OrganizationAvatar:s.ld,OrganizationDescription:s.G9,OrganizationHeader:s.sC,OrganizationName:s.X5,Organization:s.cp};var c=o(170),d=o(39805),l=o(14902),u=o(23537);const p="f752b527e2aba395d1ba4c0de9c1471234567890",h="https://picsum.photos/seed/{seed}/1400/300",m={address:p,balance:0,nonce:123,electionIndex:13,account:new u.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:h.replace("{seed}",p),avatar:`https://picsum.photos/seed/${p}/300`,meta:[]})},v=`c5d2460186f7${p}020000000000`,g={electionCount:0,electionId:v,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:u.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:u.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:0,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:h.replace("{seed}",v)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},b=u.u_.build({census:new u.pT(g.census.censusRoot,g.census.censusURL,u.oN.censusTypeFromCensusOrigin(g.census.censusOrigin),4,BigInt("40")),creationTime:g.creationTime,electionCount:0,endDate:g.endDate,finalResults:g.finalResults,id:g.electionId,metadataURL:g.metadataURL,organizationId:g.organizationId,raw:g,results:g.result,status:g.status,title:g.metadata.title,description:g.metadata.description,voteCount:g.voteCount,header:g.metadata.media.header,questions:g.metadata.questions,startDate:g.startDate,voteType:g.voteMode,electionType:{autoStart:g.electionMode.autoStart,interruptible:g.electionMode.interruptible,dynamicCensus:g.electionMode.dynamicCensus,secretUntilTheEnd:g.voteMode.encryptedVotes,anonymous:g.voteMode.anonymous}}),f=(y=c.Z,function(e){return e.live?i.createElement(d.x,{theme:(0,l.B1)(s.rS),resetCSS:!1},i.createElement(s.de,{env:"stg"},i.createElement(s.f0,{organization:m},i.createElement(s.qT,{election:b},i.createElement(a.Z,(0,n.Z)({scope:r},e)))))):i.createElement(y,e)});var y},20249:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>h,toc:()=>v});var n=o(87462),i=(o(67294),o(3905)),a=o(26389),s=o(94891),r=(o(75190),o(47507)),c=o(24310),d=o(63303),l=(o(75035),o(85162));const u={id:"submit-a-vote",title:"Submit a vote",description:"Submit a vote using a protobuf signed transaction. The corresponding result are the vote id and transaction hash where the vote is registered.",sidebar_label:"Submit a vote",hide_title:!0,hide_table_of_contents:!0,api:{responses:{200:{content:{"application/json":{schema:{properties:{" voteID":{type:"string"},txHash:{type:"string"}},type:"object"}}},description:"OK"}},tags:["Votes"],description:"Submit a vote using a protobuf signed transaction. The corresponding result are the vote id and transaction hash where the vote is registered.",requestBody:{content:{"application/json":{schema:{properties:{txPayload:{type:"string"}},type:"object"}}},description:"Requires a protobuf signed transaction",required:!0},method:"post",path:"/votes",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},jsonRequestBodyExample:{txPayload:"string"},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Submit a vote",description:{content:"Submit a vote using a protobuf signed transaction. The corresponding result are the vote id and transaction hash where the vote is registered.",type:"text/plain"},url:{path:["votes"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},p=void 0,h={unversionedId:"vocdoni-api/submit-a-vote",id:"vocdoni-api/submit-a-vote",title:"Submit a vote",description:"Submit a vote using a protobuf signed transaction. The corresponding result are the vote id and transaction hash where the vote is registered.",source:"@site/docs/vocdoni-api/submit-a-vote.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/submit-a-vote",permalink:"/vocdoni-api/submit-a-vote",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"submit-a-vote",title:"Submit a vote",description:"Submit a vote using a protobuf signed transaction. The corresponding result are the vote id and transaction hash where the vote is registered.",sidebar_label:"Submit a vote",hide_title:!0,hide_table_of_contents:!0,api:{responses:{200:{content:{"application/json":{schema:{properties:{" voteID":{type:"string"},txHash:{type:"string"}},type:"object"}}},description:"OK"}},tags:["Votes"],description:"Submit a vote using a protobuf signed transaction. The corresponding result are the vote id and transaction hash where the vote is registered.",requestBody:{content:{"application/json":{schema:{properties:{txPayload:{type:"string"}},type:"object"}}},description:"Requires a protobuf signed transaction",required:!0},method:"post",path:"/votes",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},jsonRequestBodyExample:{txPayload:"string"},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Submit a vote",description:{content:"Submit a vote using a protobuf signed transaction. The corresponding result are the vote id and transaction hash where the vote is registered.",type:"text/plain"},url:{path:["votes"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Votes",permalink:"/vocdoni-api/votes"},next:{title:"Verify vote",permalink:"/vocdoni-api/verify-vote"}},m={},v=[{value:"Submit a vote",id:"submit-a-vote",level:2}],g={toc:v};function b(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"submit-a-vote"},"Submit a vote"),(0,i.kt)("p",null,"Submit a vote using a protobuf signed transaction. The corresponding result are the vote id and transaction hash where the vote is registered."),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"Requires a protobuf signed transaction"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"txPayload",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:" voteID",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"txHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  " voteID": "string",\n  "txHash": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);