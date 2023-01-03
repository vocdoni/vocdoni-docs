"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8821],{71854:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>f,metadata:()=>m,toc:()=>v});var o=i(83117),n=(i(67294),i(3905)),a=i(99565),s=i(80663),l=i(74903),c=i(11955),r=i(46794),d=i(8437),p=(i(32712),i(28802));const f={id:"election-votes",title:"List election votes",description:"Get a list of votes `nullifiers` for a election. The `nullifier` is a unique identifier for an election",sidebar_label:"List election votes",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get a list of votes `nullifiers` for a election. The `nullifier` is a unique identifier for an election\nDefault page is 0 if no page specified\nIf election is not ended, it show the votes only if the envelope type is not encrypted.",operationId:"electionVotes",tags:["Elections"],parameters:[{name:"electionId",in:"path",description:"Election Id on 0x format",required:!0,schema:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"}}],responses:{200:{description:"Return list of nullifiers. `voterId` could be null if is anonymous vote",content:{"application/json":{schema:{type:"object",properties:{voteId:{type:"string",example:"1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad"},voterId:{type:"string",example:"0090782b695bbe528331540ed14e4b92b9101673fb4a6bfe6d904e9ab784bce1"},txHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},blockHeight:{type:"integer",format:"int32",example:64924},transactionIndex:{type:"integer",format:"int32",example:0}}}}}}},method:"get",path:"/elections/{electionId}/votes",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"List election votes",description:{content:"Get a list of votes `nullifiers` for a election. The `nullifier` is a unique identifier for an election\nDefault page is 0 if no page specified\nIf election is not ended, it show the votes only if the envelope type is not encrypted.",type:"text/plain"},url:{path:["elections",":electionId","votes"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Election Id on 0x format",type:"text/plain"},type:"any",value:"",key:"electionId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},u=void 0,m={unversionedId:"vocdoni-api/election-votes",id:"vocdoni-api/election-votes",title:"List election votes",description:"Get a list of votes `nullifiers` for a election. The `nullifier` is a unique identifier for an election",source:"@site/docs/vocdoni-api/election-votes.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/election-votes",permalink:"/vocdoni-api/election-votes",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"election-votes",title:"List election votes",description:"Get a list of votes `nullifiers` for a election. The `nullifier` is a unique identifier for an election",sidebar_label:"List election votes",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get a list of votes `nullifiers` for a election. The `nullifier` is a unique identifier for an election\nDefault page is 0 if no page specified\nIf election is not ended, it show the votes only if the envelope type is not encrypted.",operationId:"electionVotes",tags:["Elections"],parameters:[{name:"electionId",in:"path",description:"Election Id on 0x format",required:!0,schema:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"}}],responses:{200:{description:"Return list of nullifiers. `voterId` could be null if is anonymous vote",content:{"application/json":{schema:{type:"object",properties:{voteId:{type:"string",example:"1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad"},voterId:{type:"string",example:"0090782b695bbe528331540ed14e4b92b9101673fb4a6bfe6d904e9ab784bce1"},txHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},blockHeight:{type:"integer",format:"int32",example:64924},transactionIndex:{type:"integer",format:"int32",example:0}}}}}}},method:"get",path:"/elections/{electionId}/votes",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"List election votes",description:{content:"Get a list of votes `nullifiers` for a election. The `nullifier` is a unique identifier for an election\nDefault page is 0 if no page specified\nIf election is not ended, it show the votes only if the envelope type is not encrypted.",type:"text/plain"},url:{path:["elections",":electionId","votes"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Election Id on 0x format",type:"text/plain"},type:"any",value:"",key:"electionId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Election keys",permalink:"/vocdoni-api/election-get-keys"},next:{title:"Paginated election votes list",permalink:"/vocdoni-api/election-votes-paginated"}},h={},v=[{value:"List election votes",id:"list-election-votes",level:2}],b={toc:v};function g(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"list-election-votes"},"List election votes"),(0,n.kt)("p",null,"Get a list of votes ",(0,n.kt)("inlineCode",{parentName:"p"},"nullifiers")," for a election. The ",(0,n.kt)("inlineCode",{parentName:"p"},"nullifier")," is a unique identifier for an election\nDefault page is 0 if no page specified\nIf election is not ended, it show the votes only if the envelope type is not encrypted."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"electionId",in:"path",description:"Election Id on 0x format",required:!0,schema:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Return list of nullifiers. ",(0,n.kt)("inlineCode",{parentName:"p"},"voterId")," could be null if is anonymous vote")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"voteId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"voterId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"txHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"blockHeight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"transactionIndex",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "voteId": "1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad",\n  "voterId": "0090782b695bbe528331540ed14e4b92b9101673fb4a6bfe6d904e9ab784bce1",\n  "txHash": "75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad",\n  "blockHeight": 64924,\n  "transactionIndex": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);