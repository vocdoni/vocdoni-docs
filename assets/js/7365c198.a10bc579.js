(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2079],{40611:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var a=n(87462),i=n(67294),o=n(86390),s=n(18694);const r={React:i,...i,Image:s.Ee,ElectionProvider:s.qT,ElectionHeader:s.UE,ElectionTitle:s.hi,ElectionSchedule:s.vE,ElectionResults:s.Hj,ElectionStatusBadge:s.QW,ElectionDescription:s.I3,ElectionQuestions:s.Vx,OrganizationProvider:s.f0,OrganizationAvatar:s.ld,OrganizationDescription:s.G9,OrganizationHeader:s.sC,OrganizationName:s.X5,Organization:s.cp};var c=n(170),d=n(39805),l=n(14902),u=n(23537);const h="f752b527e2aba395d1ba4c0de9c1471234567890",p="https://picsum.photos/seed/{seed}/1400/300",m={address:h,balance:0,nonce:123,electionIndex:13,account:new u.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:p.replace("{seed}",h),avatar:`https://picsum.photos/seed/${h}/300`,meta:[]})},b=`c5d2460186f7${h}020000000000`,f={electionCount:0,electionId:b,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:u.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:u.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:0,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:p.replace("{seed}",b)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},y=u.u_.build({census:new u.pT(f.census.censusRoot,f.census.censusURL,u.oN.censusTypeFromCensusOrigin(f.census.censusOrigin),4,BigInt("40")),creationTime:f.creationTime,electionCount:0,endDate:f.endDate,finalResults:f.finalResults,id:f.electionId,metadataURL:f.metadataURL,organizationId:f.organizationId,raw:f,results:f.result,status:f.status,title:f.metadata.title,description:f.metadata.description,voteCount:f.voteCount,header:f.metadata.media.header,questions:f.metadata.questions,startDate:f.startDate,voteType:f.voteMode,electionType:{autoStart:f.electionMode.autoStart,interruptible:f.electionMode.interruptible,dynamicCensus:f.electionMode.dynamicCensus,secretUntilTheEnd:f.voteMode.encryptedVotes,anonymous:f.voteMode.anonymous}}),g=(v=c.Z,function(e){return e.live?i.createElement(d.x,{theme:(0,l.B1)(s.rS),resetCSS:!1},i.createElement(s.de,{env:"stg"},i.createElement(s.f0,{organization:m},i.createElement(s.qT,{election:y},i.createElement(o.Z,(0,a.Z)({scope:r},e)))))):i.createElement(v,e)});var v},10797:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>g,frontMatter:()=>h,metadata:()=>m,toc:()=>f});var a=n(87462),i=(n(67294),n(3905)),o=n(26389),s=n(94891),r=n(75190),c=n(47507),d=n(24310),l=n(63303),u=(n(75035),n(85162));const h={id:"transaction-by-index",title:"Transaction by index",description:"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block  index. The transaction index is an incremental counter for each transaction.  You could use the transaction `block` and `index` to retrieve full info using [transaction by block and index](transaction-by-block-index).",sidebar_label:"Transaction by index",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Index of the transaction",in:"path",name:"index",required:!0,schema:{type:"integer"}}],responses:{200:{content:{"application/json":{schema:{properties:{blockHeight:{example:64924,format:"int32",type:"integer"},transactionHash:{example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad",type:"string"},transactionIndex:{example:0,format:"int32",type:"integer"},transactionNumber:{example:944,format:"int64",type:"integer"},transactionType:{enum:["vote","newProcess","admin","setProcess","registerKey","mintTokens","sendTokens","setTransactionCosts","setAccount","collectFaucet","setKeykeeper"],example:"Vote",type:"string"}},type:"object"}}},description:"OK"},204:{description:"See [errors](vocdoni-api#errors) section"}},tags:["Chain"],description:"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block  index. The transaction index is an incremental counter for each transaction.  You could use the transaction `block` and `index` to retrieve full info using [transaction by block and index](transaction-by-block-index).",method:"get",path:"/chain/transactions/reference/index/{index}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Transaction by index",description:{content:"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block  index. The transaction index is an incremental counter for each transaction.  You could use the transaction `block` and `index` to retrieve full info using [transaction by block and index](transaction-by-block-index).",type:"text/plain"},url:{path:["chain","transactions","reference","index",":index"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Index of the transaction",type:"text/plain"},type:"any",value:"",key:"index"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},p=void 0,m={unversionedId:"vocdoni-api/transaction-by-index",id:"vocdoni-api/transaction-by-index",title:"Transaction by index",description:"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block  index. The transaction index is an incremental counter for each transaction.  You could use the transaction `block` and `index` to retrieve full info using [transaction by block and index](transaction-by-block-index).",source:"@site/docs/vocdoni-api/transaction-by-index.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/transaction-by-index",permalink:"/vocdoni-api/transaction-by-index",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"transaction-by-index",title:"Transaction by index",description:"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block  index. The transaction index is an incremental counter for each transaction.  You could use the transaction `block` and `index` to retrieve full info using [transaction by block and index](transaction-by-block-index).",sidebar_label:"Transaction by index",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Index of the transaction",in:"path",name:"index",required:!0,schema:{type:"integer"}}],responses:{200:{content:{"application/json":{schema:{properties:{blockHeight:{example:64924,format:"int32",type:"integer"},transactionHash:{example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad",type:"string"},transactionIndex:{example:0,format:"int32",type:"integer"},transactionNumber:{example:944,format:"int64",type:"integer"},transactionType:{enum:["vote","newProcess","admin","setProcess","registerKey","mintTokens","sendTokens","setTransactionCosts","setAccount","collectFaucet","setKeykeeper"],example:"Vote",type:"string"}},type:"object"}}},description:"OK"},204:{description:"See [errors](vocdoni-api#errors) section"}},tags:["Chain"],description:"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block  index. The transaction index is an incremental counter for each transaction.  You could use the transaction `block` and `index` to retrieve full info using [transaction by block and index](transaction-by-block-index).",method:"get",path:"/chain/transactions/reference/index/{index}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Transaction by index",description:{content:"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block  index. The transaction index is an incremental counter for each transaction.  You could use the transaction `block` and `index` to retrieve full info using [transaction by block and index](transaction-by-block-index).",type:"text/plain"},url:{path:["chain","transactions","reference","index",":index"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Index of the transaction",type:"text/plain"},type:"any",value:"",key:"index"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"List Transactions",permalink:"/vocdoni-api/list-transactions"},next:{title:"Transaction by hash",permalink:"/vocdoni-api/transaction-by-hash"}},b={},f=[{value:"Transaction by index",id:"transaction-by-index",level:2}],y={toc:f};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"transaction-by-index"},"Transaction by index"),(0,i.kt)("p",null,"Get transaction by its index. This is not transaction reference (hash), and neither the block height and block  index. The transaction index is an incremental counter for each transaction.  You could use the transaction ",(0,i.kt)("inlineCode",{parentName:"p"},"block")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," to retrieve full info using ",(0,i.kt)("a",{parentName:"p",href:"transaction-by-block-index"},"transaction by block and index"),"."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{description:"Index of the transaction",in:"path",name:"index",required:!0,schema:{type:"integer"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"blockHeight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"transactionHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"transactionIndex",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"transactionNumber",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"transactionType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`vote`, `newProcess`, `admin`, `setProcess`, `registerKey`, `mintTokens`, `sendTokens`, `setTransactionCosts`, `setAccount`, `collectFaucet`, `setKeykeeper`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "blockHeight": 64924,\n  "transactionHash": "75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad",\n  "transactionIndex": 0,\n  "transactionNumber": 944,\n  "transactionType": "Vote"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(u.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"vocdoni-api#errors"},"errors")," section")),(0,i.kt)("div",null)))))}g.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);