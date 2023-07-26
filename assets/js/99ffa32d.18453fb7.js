(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5698],{40611:(e,t,o)=>{"use strict";o.d(t,{Z:()=>g});var i=o(87462),n=o(67294),a=o(86390),s=o(18694);const r={React:n,...n,Image:s.Ee,ElectionProvider:s.qT,ElectionHeader:s.UE,ElectionTitle:s.hi,ElectionSchedule:s.vE,ElectionResults:s.Hj,ElectionStatusBadge:s.QW,ElectionDescription:s.I3,ElectionQuestions:s.Vx,OrganizationProvider:s.f0,OrganizationAvatar:s.ld,OrganizationDescription:s.G9,OrganizationHeader:s.sC,OrganizationName:s.X5,Organization:s.cp};var c=o(170),l=o(39805),d=o(14902),u=o(23537);const p="f752b527e2aba395d1ba4c0de9c1471234567890",h="https://picsum.photos/seed/{seed}/1400/300",m={address:p,balance:0,nonce:123,electionIndex:13,account:new u.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:h.replace("{seed}",p),avatar:`https://picsum.photos/seed/${p}/300`,meta:[]})},v=`c5d2460186f7${p}020000000000`,f={electionCount:0,electionId:v,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:u.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:u.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:0,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:h.replace("{seed}",v)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},y=u.u_.build({census:new u.pT(f.census.censusRoot,f.census.censusURL,u.oN.censusTypeFromCensusOrigin(f.census.censusOrigin),4,BigInt("40")),creationTime:f.creationTime,electionCount:0,endDate:f.endDate,finalResults:f.finalResults,id:f.electionId,metadataURL:f.metadataURL,organizationId:f.organizationId,raw:f,results:f.result,status:f.status,title:f.metadata.title,description:f.metadata.description,voteCount:f.voteCount,header:f.metadata.media.header,questions:f.metadata.questions,startDate:f.startDate,voteType:f.voteMode,electionType:{autoStart:f.electionMode.autoStart,interruptible:f.electionMode.interruptible,dynamicCensus:f.electionMode.dynamicCensus,secretUntilTheEnd:f.voteMode.encryptedVotes,anonymous:f.voteMode.anonymous}}),g=(b=c.Z,function(e){return e.live?n.createElement(l.x,{theme:(0,d.B1)(s.rS),resetCSS:!1},n.createElement(s.de,{env:"stg"},n.createElement(s.f0,{organization:m},n.createElement(s.qT,{election:y},n.createElement(a.Z,(0,i.Z)({scope:r},e)))))):n.createElement(b,e)});var b},69667:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>f});var i=o(87462),n=(o(67294),o(3905)),a=o(26389),s=o(94891),r=o(75190),c=o(47507),l=o(24310),d=o(63303),u=(o(75035),o(85162));const p={id:"verify-vote",title:"Verify vote",description:"Check if vote is registered on the blockchain on specific election. Just return Ok status code",sidebar_label:"Verify vote",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Election id",in:"path",name:"electionID",required:!0,schema:{type:"string"}},{description:"Nullifier of the vote",in:"path",name:"voteID",required:!0,schema:{type:"string"}}],responses:{200:{description:"(empty body)"},404:{content:{"application/json":{schema:{properties:{code:{type:"integer"},err:{},httpstatus:{type:"integer"}},type:"object"}}},description:"Not Found"}},tags:["Votes"],description:"Check if vote is registered on the blockchain on specific election. Just return Ok status code",method:"get",path:"/votes/verify/{electionID}/{voteID}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Verify vote",description:{content:"Check if vote is registered on the blockchain on specific election. Just return Ok status code",type:"text/plain"},url:{path:["votes","verify",":electionID",":voteID"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Election id",type:"text/plain"},type:"any",value:"",key:"electionID"},{disabled:!1,description:{content:"(Required) Nullifier of the vote",type:"text/plain"},type:"any",value:"",key:"voteID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},h=void 0,m={unversionedId:"vocdoni-api/verify-vote",id:"vocdoni-api/verify-vote",title:"Verify vote",description:"Check if vote is registered on the blockchain on specific election. Just return Ok status code",source:"@site/docs/vocdoni-api/verify-vote.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/verify-vote",permalink:"/vocdoni-api/verify-vote",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"verify-vote",title:"Verify vote",description:"Check if vote is registered on the blockchain on specific election. Just return Ok status code",sidebar_label:"Verify vote",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Election id",in:"path",name:"electionID",required:!0,schema:{type:"string"}},{description:"Nullifier of the vote",in:"path",name:"voteID",required:!0,schema:{type:"string"}}],responses:{200:{description:"(empty body)"},404:{content:{"application/json":{schema:{properties:{code:{type:"integer"},err:{},httpstatus:{type:"integer"}},type:"object"}}},description:"Not Found"}},tags:["Votes"],description:"Check if vote is registered on the blockchain on specific election. Just return Ok status code",method:"get",path:"/votes/verify/{electionID}/{voteID}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Verify vote",description:{content:"Check if vote is registered on the blockchain on specific election. Just return Ok status code",type:"text/plain"},url:{path:["votes","verify",":electionID",":voteID"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Election id",type:"text/plain"},type:"any",value:"",key:"electionID"},{disabled:!1,description:{content:"(Required) Nullifier of the vote",type:"text/plain"},type:"any",value:"",key:"voteID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Submit a vote",permalink:"/vocdoni-api/submit-a-vote"},next:{title:"Get vote",permalink:"/vocdoni-api/get-vote"}},v={},f=[{value:"Verify vote",id:"verify-vote",level:2}],y={toc:f};function g(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"verify-vote"},"Verify vote"),(0,n.kt)("p",null,"Check if vote is registered on the blockchain on specific election. Just return Ok status code"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{description:"Election id",in:"path",name:"electionID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{description:"Nullifier of the vote",in:"path",name:"voteID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"(empty body)")),(0,n.kt)("div",null)),(0,n.kt)(u.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Not Found")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"err",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"httpstatus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "code": 0,\n  "err": {},\n  "httpstatus": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);