(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[182],{40611:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var i=n(87462),o=n(67294),s=n(86390),a=n(18694);const r={React:o,...o,Image:a.Ee,ElectionProvider:a.qT,ElectionHeader:a.UE,ElectionTitle:a.hi,ElectionSchedule:a.vE,ElectionResults:a.Hj,ElectionStatusBadge:a.QW,ElectionDescription:a.I3,ElectionQuestions:a.Vx,OrganizationProvider:a.f0,OrganizationAvatar:a.ld,OrganizationDescription:a.G9,OrganizationHeader:a.sC,OrganizationName:a.X5,Organization:a.cp};var c=n(170),l=n(39805),d=n(14902),p=n(23537);const u="f752b527e2aba395d1ba4c0de9c1471234567890",h="https://picsum.photos/seed/{seed}/1400/300",m={address:u,balance:0,nonce:123,electionIndex:13,account:new p.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:h.replace("{seed}",u),avatar:`https://picsum.photos/seed/${u}/300`,meta:[]})},y=`c5d2460186f7${u}020000000000`,g={electionCount:0,electionId:y,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:p.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:p.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:0,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:h.replace("{seed}",y)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},v=p.u_.build({census:new p.pT(g.census.censusRoot,g.census.censusURL,p.oN.censusTypeFromCensusOrigin(g.census.censusOrigin),4,BigInt("40")),creationTime:g.creationTime,electionCount:0,endDate:g.endDate,finalResults:g.finalResults,id:g.electionId,metadataURL:g.metadataURL,organizationId:g.organizationId,raw:g,results:g.result,status:g.status,title:g.metadata.title,description:g.metadata.description,voteCount:g.voteCount,header:g.metadata.media.header,questions:g.metadata.questions,startDate:g.startDate,voteType:g.voteMode,electionType:{autoStart:g.electionMode.autoStart,interruptible:g.electionMode.interruptible,dynamicCensus:g.electionMode.dynamicCensus,secretUntilTheEnd:g.voteMode.encryptedVotes,anonymous:g.voteMode.anonymous}}),f=(b=c.Z,function(e){return e.live?o.createElement(l.x,{theme:(0,d.B1)(a.rS),resetCSS:!1},o.createElement(a.de,{env:"stg"},o.createElement(a.f0,{organization:m},o.createElement(a.qT,{election:v},o.createElement(s.Z,(0,i.Z)({scope:r},e)))))):o.createElement(b,e)});var b},46275:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>g});var i=n(87462),o=(n(67294),n(3905)),s=n(26389),a=n(94891),r=n(75190),c=n(47507),l=n(24310),d=n(63303),p=(n(75035),n(85162));const u={id:"list-encryption-keys",title:"List encryption keys",description:"Returns the list of public/private encryption keys",sidebar_label:"List encryption keys",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Election id",in:"path",name:"electionID",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{privateKeys:{type:"string"},publicKeys:{type:"string"}},type:"object"}}},description:"OK"}},tags:["Elections"],description:"Returns the list of public/private encryption keys",method:"get",path:"/elections/{electionID}/keys",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"List encryption keys",description:{content:"Returns the list of public/private encryption keys",type:"text/plain"},url:{path:["elections",":electionID","keys"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Election id",type:"text/plain"},type:"any",value:"",key:"electionID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},h=void 0,m={unversionedId:"vocdoni-api/list-encryption-keys",id:"vocdoni-api/list-encryption-keys",title:"List encryption keys",description:"Returns the list of public/private encryption keys",source:"@site/docs/vocdoni-api/list-encryption-keys.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/list-encryption-keys",permalink:"/vocdoni-api/list-encryption-keys",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-encryption-keys",title:"List encryption keys",description:"Returns the list of public/private encryption keys",sidebar_label:"List encryption keys",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Election id",in:"path",name:"electionID",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{privateKeys:{type:"string"},publicKeys:{type:"string"}},type:"object"}}},description:"OK"}},tags:["Elections"],description:"Returns the list of public/private encryption keys",method:"get",path:"/elections/{electionID}/keys",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"List encryption keys",description:{content:"Returns the list of public/private encryption keys",type:"text/plain"},url:{path:["elections",":electionID","keys"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Election id",type:"text/plain"},type:"any",value:"",key:"electionID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Election information",permalink:"/vocdoni-api/election-information"},next:{title:"Election results",permalink:"/vocdoni-api/election-results"}},y={},g=[{value:"List encryption keys",id:"list-encryption-keys",level:2}],v={toc:g};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"list-encryption-keys"},"List encryption keys"),(0,o.kt)("p",null,"Returns the list of public/private encryption keys"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{description:"Election id",in:"path",name:"electionID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"ApiTabs"},(0,o.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"OK")),(0,o.kt)("div",null,(0,o.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(d.Z,{mdxType:"SchemaTabs"},(0,o.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"privateKeys",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"publicKeys",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(c.Z,{responseExample:'{\n  "privateKeys": "string",\n  "publicKeys": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);