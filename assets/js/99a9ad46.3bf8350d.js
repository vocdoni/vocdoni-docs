(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1290],{40611:(e,t,o)=>{"use strict";o.d(t,{Z:()=>g});var s=o(87462),i=o(67294),n=o(86390),a=o(18694);const r={React:i,...i,Image:a.Ee,ElectionProvider:a.qT,ElectionHeader:a.UE,ElectionTitle:a.hi,ElectionSchedule:a.vE,ElectionResults:a.Hj,ElectionStatusBadge:a.QW,ElectionDescription:a.I3,ElectionQuestions:a.Vx,OrganizationProvider:a.f0,OrganizationAvatar:a.ld,OrganizationDescription:a.G9,OrganizationHeader:a.sC,OrganizationName:a.X5,Organization:a.cp};var c=o(170),l=o(39805),d=o(14902),u=o(23537);const p="f752b527e2aba395d1ba4c0de9c1471234567890",h="https://picsum.photos/seed/{seed}/1400/300",m={address:p,balance:0,nonce:123,electionIndex:13,account:new u.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:h.replace("{seed}",p),avatar:`https://picsum.photos/seed/${p}/300`,meta:[]})},f=`c5d2460186f7${p}020000000000`,y={electionCount:0,electionId:f,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:u.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:u.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:0,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:h.replace("{seed}",f)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},v=u.u_.build({census:new u.pT(y.census.censusRoot,y.census.censusURL,u.oN.censusTypeFromCensusOrigin(y.census.censusOrigin),4,BigInt("40")),creationTime:y.creationTime,electionCount:0,endDate:y.endDate,finalResults:y.finalResults,id:y.electionId,metadataURL:y.metadataURL,organizationId:y.organizationId,raw:y,results:y.result,status:y.status,title:y.metadata.title,description:y.metadata.description,voteCount:y.voteCount,header:y.metadata.media.header,questions:y.metadata.questions,startDate:y.startDate,voteType:y.voteMode,electionType:{autoStart:y.electionMode.autoStart,interruptible:y.electionMode.interruptible,dynamicCensus:y.electionMode.dynamicCensus,secretUntilTheEnd:y.voteMode.encryptedVotes,anonymous:y.voteMode.anonymous}}),g=(b=c.Z,function(e){return e.live?i.createElement(l.x,{theme:(0,d.B1)(a.rS),resetCSS:!1},i.createElement(a.de,{env:"stg"},i.createElement(a.f0,{organization:m},i.createElement(a.qT,{election:v},i.createElement(n.Z,(0,s.Z)({scope:r},e)))))):i.createElement(b,e)});var b},3762:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>y});var s=o(87462),i=(o(67294),o(3905)),n=o(26389),a=o(94891),r=o(75190),c=o(47507),l=o(24310),d=o(63303),u=(o(75035),o(85162));const p={id:"verify-merkle-proof",title:"Verify merkle proof",description:"Verify that a previously obtained Merkle proof for a key, acquired via [/censuses/{censusId}/proof/{publicKey}](prove-key-to-census) is still correct.",sidebar_label:"Verify merkle proof",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Census id",in:"path",name:"censusID",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{valid:{type:"boolean"}},type:"object"}}},description:"OK"}},tags:["Censuses"],description:"Verify that a previously obtained Merkle proof for a key, acquired via [/censuses/{censusId}/proof/{publicKey}](prove-key-to-census) is still correct.",method:"post",path:"/censuses/{censusID}/verify",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Verify merkle proof",description:{content:"Verify that a previously obtained Merkle proof for a key, acquired via [/censuses/{censusId}/proof/{publicKey}](prove-key-to-census) is still correct.",type:"text/plain"},url:{path:["censuses",":censusID","verify"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id",type:"text/plain"},type:"any",value:"",key:"censusID"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},h=void 0,m={unversionedId:"vocdoni-api/verify-merkle-proof",id:"vocdoni-api/verify-merkle-proof",title:"Verify merkle proof",description:"Verify that a previously obtained Merkle proof for a key, acquired via [/censuses/{censusId}/proof/{publicKey}](prove-key-to-census) is still correct.",source:"@site/docs/vocdoni-api/verify-merkle-proof.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/verify-merkle-proof",permalink:"/vocdoni-api/verify-merkle-proof",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"verify-merkle-proof",title:"Verify merkle proof",description:"Verify that a previously obtained Merkle proof for a key, acquired via [/censuses/{censusId}/proof/{publicKey}](prove-key-to-census) is still correct.",sidebar_label:"Verify merkle proof",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Census id",in:"path",name:"censusID",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{valid:{type:"boolean"}},type:"object"}}},description:"OK"}},tags:["Censuses"],description:"Verify that a previously obtained Merkle proof for a key, acquired via [/censuses/{censusId}/proof/{publicKey}](prove-key-to-census) is still correct.",method:"post",path:"/censuses/{censusID}/verify",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Verify merkle proof",description:{content:"Verify that a previously obtained Merkle proof for a key, acquired via [/censuses/{censusId}/proof/{publicKey}](prove-key-to-census) is still correct.",type:"text/plain"},url:{path:["censuses",":censusID","verify"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id",type:"text/plain"},type:"any",value:"",key:"censusID"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Get type of census",permalink:"/vocdoni-api/get-type-of-census"},next:{title:"Census total weight",permalink:"/vocdoni-api/census-total-weight"}},f={},y=[{value:"Verify merkle proof",id:"verify-merkle-proof",level:2}],v={toc:y};function g(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,s.Z)({},v,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"verify-merkle-proof"},"Verify merkle proof"),(0,i.kt)("p",null,"Verify that a previously obtained Merkle proof for a key, acquired via ",(0,i.kt)("a",{parentName:"p",href:"prove-key-to-census"},"/censuses/{censusId}/proof/{publicKey}")," is still correct."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{description:"Census id",in:"path",name:"censusID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"valid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "valid": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);