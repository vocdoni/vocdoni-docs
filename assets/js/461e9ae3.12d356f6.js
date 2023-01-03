"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1928],{64106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>g});var n=a(83117),o=(a(67294),a(3905)),i=a(99565),s=a(80663),r=(a(74903),a(11955)),c=a(46794),d=a(8437),l=(a(32712),a(28802));const p={id:"account-submit",title:"Register an account",description:"It register an account to the blockchain including IPFS metadata upload.",sidebar_label:"Register an account",hide_title:!0,hide_table_of_contents:!0,api:{description:"It register an account to the blockchain including IPFS metadata upload. \n\n- Requires a signed protobuff transaction on the body to perform the operation.\n- Metadata is not required, but if no metadata is provided the account won't be listed on \n[/chain/organizations](organizations-list) endpoint. Check there to read about differences between an account and\na organization.",operationId:"accountSubmit",tags:["Accounts"],requestBody:{description:"Transaction payload and metadata object encoded using base64 ",required:!0,content:{"application/json":{schema:{type:"object",properties:{txPayload:{type:"string",example:"<Base64 string>"},metadata:{type:"string",example:"<Base64 string>"}}}}}},responses:{200:{description:"Returns registered transaction hash and the IPFS file url for account metadata ",content:{"application/json":{schema:{type:"object",properties:{txHash:{type:"string",example:"6cc88bda2da0edef96b8d4f75f0a8134953e9816918e665254ea06801af59a70"},metadataURL:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"}}}}}}},method:"post",path:"/accounts",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{txPayload:"<Base64 string>",metadata:"<Base64 string>"},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Register an account",description:{content:"It register an account to the blockchain including IPFS metadata upload. \n\n- Requires a signed protobuff transaction on the body to perform the operation.\n- Metadata is not required, but if no metadata is provided the account won't be listed on \n[/chain/organizations](organizations-list) endpoint. Check there to read about differences between an account and\na organization.",type:"text/plain"},url:{path:["accounts"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},u=void 0,m={unversionedId:"vocdoni-api/account-submit",id:"vocdoni-api/account-submit",title:"Register an account",description:"It register an account to the blockchain including IPFS metadata upload.",source:"@site/docs/vocdoni-api/account-submit.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/account-submit",permalink:"/vocdoni-api/account-submit",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"account-submit",title:"Register an account",description:"It register an account to the blockchain including IPFS metadata upload.",sidebar_label:"Register an account",hide_title:!0,hide_table_of_contents:!0,api:{description:"It register an account to the blockchain including IPFS metadata upload. \n\n- Requires a signed protobuff transaction on the body to perform the operation.\n- Metadata is not required, but if no metadata is provided the account won't be listed on \n[/chain/organizations](organizations-list) endpoint. Check there to read about differences between an account and\na organization.",operationId:"accountSubmit",tags:["Accounts"],requestBody:{description:"Transaction payload and metadata object encoded using base64 ",required:!0,content:{"application/json":{schema:{type:"object",properties:{txPayload:{type:"string",example:"<Base64 string>"},metadata:{type:"string",example:"<Base64 string>"}}}}}},responses:{200:{description:"Returns registered transaction hash and the IPFS file url for account metadata ",content:{"application/json":{schema:{type:"object",properties:{txHash:{type:"string",example:"6cc88bda2da0edef96b8d4f75f0a8134953e9816918e665254ea06801af59a70"},metadataURL:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"}}}}}}},method:"post",path:"/accounts",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{txPayload:"<Base64 string>",metadata:"<Base64 string>"},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Register an account",description:{content:"It register an account to the blockchain including IPFS metadata upload. \n\n- Requires a signed protobuff transaction on the body to perform the operation.\n- Metadata is not required, but if no metadata is provided the account won't be listed on \n[/chain/organizations](organizations-list) endpoint. Check there to read about differences between an account and\na organization.",type:"text/plain"},url:{path:["accounts"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Get account information",permalink:"/vocdoni-api/account-by-address"},next:{title:"List account elections by status",permalink:"/vocdoni-api/elections-by-organization-and-status-paginated"}},h={},g=[{value:"Register an account",id:"register-an-account",level:2}],f={toc:g};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"register-an-account"},"Register an account"),(0,o.kt)("p",null,"It register an account to the blockchain including IPFS metadata upload. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Requires a signed protobuff transaction on the body to perform the operation."),(0,o.kt)("li",{parentName:"ul"},"Metadata is not required, but if no metadata is provided the account won't be listed on\n",(0,o.kt)("a",{parentName:"li",href:"organizations-list"},"/chain/organizations")," endpoint. Check there to read about differences between an account and\na organization.")),(0,o.kt)(s.Z,{mdxType:"MimeTabs"},(0,o.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,o.kt)("p",null,"Transaction payload and metadata object encoded using base64 "))),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(c.Z,{collapsible:!1,name:"txPayload",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"metadata",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Returns registered transaction hash and the IPFS file url for account metadata ")),(0,o.kt)("div",null,(0,o.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(d.Z,{mdxType:"SchemaTabs"},(0,o.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(c.Z,{collapsible:!1,name:"txHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"metadataURL",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(r.Z,{responseExample:'{\n  "txHash": "6cc88bda2da0edef96b8d4f75f0a8134953e9816918e665254ea06801af59a70",\n  "metadataURL": "ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);