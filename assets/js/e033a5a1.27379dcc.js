"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[837],{88767:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=s(87462),o=(s(67294),s(3905)),i=s(26389),a=(s(94891),s(74933)),r=(s(47507),s(24310),s(63303),s(75035),s(85162));const c={id:"census-delete",title:"Delete census",description:"Delete unpublished census (not on the storage yet). See [publish census](census-publish)",sidebar_label:"Delete census",hide_title:!0,hide_table_of_contents:!0,api:{description:"Delete unpublished census (not on the storage yet). See [publish census](census-publish)\n- Requires Bearer token\n- Deletes a census from the server storage\n- Published census cannot be deleted",operationId:"censusDelete",security:[{bearerAuth:[]}],tags:["Censuses"],parameters:[{name:"censusId",in:"path",description:"Census id provided during census creation",required:!0,schema:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}}],responses:{200:{description:"Return status code 200"}},method:"delete",path:"/censuses/{censusId}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Delete census",description:{content:"Delete unpublished census (not on the storage yet). See [publish census](census-publish)\n- Requires Bearer token\n- Deletes a census from the server storage\n- Published census cannot be deleted",type:"text/plain"},url:{path:["censuses",":censusId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id provided during census creation",type:"text/plain"},type:"any",value:"",key:"censusId"}]},method:"DELETE",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"delete api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},l=void 0,u={unversionedId:"vocdoni-api/census-delete",id:"vocdoni-api/census-delete",title:"Delete census",description:"Delete unpublished census (not on the storage yet). See [publish census](census-publish)",source:"@site/docs/vocdoni-api/census-delete.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/census-delete",permalink:"/vocdoni-api/census-delete",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"census-delete",title:"Delete census",description:"Delete unpublished census (not on the storage yet). See [publish census](census-publish)",sidebar_label:"Delete census",hide_title:!0,hide_table_of_contents:!0,api:{description:"Delete unpublished census (not on the storage yet). See [publish census](census-publish)\n- Requires Bearer token\n- Deletes a census from the server storage\n- Published census cannot be deleted",operationId:"censusDelete",security:[{bearerAuth:[]}],tags:["Censuses"],parameters:[{name:"censusId",in:"path",description:"Census id provided during census creation",required:!0,schema:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}}],responses:{200:{description:"Return status code 200"}},method:"delete",path:"/censuses/{censusId}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Delete census",description:{content:"Delete unpublished census (not on the storage yet). See [publish census](census-publish)\n- Requires Bearer token\n- Deletes a census from the server storage\n- Published census cannot be deleted",type:"text/plain"},url:{path:["censuses",":censusId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id provided during census creation",type:"text/plain"},type:"any",value:"",key:"censusId"}]},method:"DELETE",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"delete api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Add participants to census",permalink:"/vocdoni-api/census-add-participants"},next:{title:"Votes",permalink:"/vocdoni-api/votes"}},d={},p=[{value:"Delete census",id:"delete-census",level:2}],h={toc:p};function m(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"delete-census"},"Delete census"),(0,o.kt)("p",null,"Delete unpublished census (not on the storage yet). See ",(0,o.kt)("a",{parentName:"p",href:"census-publish"},"publish census")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Requires Bearer token"),(0,o.kt)("li",{parentName:"ul"},"Deletes a census from the server storage"),(0,o.kt)("li",{parentName:"ul"},"Published census cannot be deleted")),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(a.Z,{className:"paramsItem",param:{name:"censusId",in:"path",description:"Census id provided during census creation",required:!0,schema:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(r.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Return status code 200")),(0,o.kt)("div",null)))))}m.isMDXComponent=!0}}]);