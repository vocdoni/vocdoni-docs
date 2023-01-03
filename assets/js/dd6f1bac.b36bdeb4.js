"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6662],{31972:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>b,frontMatter:()=>u,metadata:()=>f,toc:()=>y});var i=o(83117),a=(o(67294),o(3905)),s=o(99565),n=o(80663),r=o(74903),c=o(11955),l=o(46794),p=o(8437),d=(o(32712),o(28802));const u={id:"census-verify-proof",title:"Verify merkle proof",description:"Verify that a previously obtained Merkle proof for a key, acquired via",sidebar_label:"Verify merkle proof",hide_title:!0,hide_table_of_contents:!0,api:{description:"Verify that a previously obtained Merkle proof for a key, acquired via \n[/censuses/{censusId}/proof/{publicKey}](http://localhost:3000/vocdoni-api/census-verify-key) is still correct.",operationId:"censusVerifyProof",tags:["Censuses"],parameters:[{name:"censusId",in:"path",description:"Census id provided during census creation",required:!0,schema:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}}],requestBody:{description:"Previously obtained Merkle proof object",required:!0,content:{"application/json":{schema:{type:"object",properties:{weight:{type:"number",format:"int32",example:2},proof:{description:"Merkle tree siblings",type:"string",example:"04000000"},value:{description:"Merkle tree leaf value",type:"string",example:"0200000000000000000000000000000000000000000000000000000000000000"}}}}}},responses:{200:{description:"Return valid true in case verification is Ok",content:{"application/json":{schema:{type:"object",properties:{valid:{type:"boolean",example:!0}}}}}}},method:"post",path:"/censuses/{censusId}/verify",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{weight:2,proof:"04000000",value:"0200000000000000000000000000000000000000000000000000000000000000"},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Verify merkle proof",description:{content:"Verify that a previously obtained Merkle proof for a key, acquired via \n[/censuses/{censusId}/proof/{publicKey}](http://localhost:3000/vocdoni-api/census-verify-key) is still correct.",type:"text/plain"},url:{path:["censuses",":censusId","verify"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id provided during census creation",type:"text/plain"},type:"any",value:"",key:"censusId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},m=void 0,f={unversionedId:"vocdoni-api/census-verify-proof",id:"vocdoni-api/census-verify-proof",title:"Verify merkle proof",description:"Verify that a previously obtained Merkle proof for a key, acquired via",source:"@site/docs/vocdoni-api/census-verify-proof.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/census-verify-proof",permalink:"/vocdoni-api/census-verify-proof",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"census-verify-proof",title:"Verify merkle proof",description:"Verify that a previously obtained Merkle proof for a key, acquired via",sidebar_label:"Verify merkle proof",hide_title:!0,hide_table_of_contents:!0,api:{description:"Verify that a previously obtained Merkle proof for a key, acquired via \n[/censuses/{censusId}/proof/{publicKey}](http://localhost:3000/vocdoni-api/census-verify-key) is still correct.",operationId:"censusVerifyProof",tags:["Censuses"],parameters:[{name:"censusId",in:"path",description:"Census id provided during census creation",required:!0,schema:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}}],requestBody:{description:"Previously obtained Merkle proof object",required:!0,content:{"application/json":{schema:{type:"object",properties:{weight:{type:"number",format:"int32",example:2},proof:{description:"Merkle tree siblings",type:"string",example:"04000000"},value:{description:"Merkle tree leaf value",type:"string",example:"0200000000000000000000000000000000000000000000000000000000000000"}}}}}},responses:{200:{description:"Return valid true in case verification is Ok",content:{"application/json":{schema:{type:"object",properties:{valid:{type:"boolean",example:!0}}}}}}},method:"post",path:"/censuses/{censusId}/verify",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{weight:2,proof:"04000000",value:"0200000000000000000000000000000000000000000000000000000000000000"},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Verify merkle proof",description:{content:"Verify that a previously obtained Merkle proof for a key, acquired via \n[/censuses/{censusId}/proof/{publicKey}](http://localhost:3000/vocdoni-api/census-verify-key) is still correct.",type:"text/plain"},url:{path:["censuses",":censusId","verify"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id provided during census creation",type:"text/plain"},type:"any",value:"",key:"censusId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Prove key to census",permalink:"/vocdoni-api/census-verify-key"},next:{title:"Add participants to census",permalink:"/vocdoni-api/census-add-participants"}},h={},y=[{value:"Verify merkle proof",id:"verify-merkle-proof",level:2}],v={toc:y};function b(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},v,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"verify-merkle-proof"},"Verify merkle proof"),(0,a.kt)("p",null,"Verify that a previously obtained Merkle proof for a key, acquired via\n",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/vocdoni-api/census-verify-key"},"/censuses/{censusId}/proof/{publicKey}")," is still correct."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(r.Z,{className:"paramsItem",param:{name:"censusId",in:"path",description:"Census id provided during census creation",required:!0,schema:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}},mdxType:"ParamsItem"})))),(0,a.kt)(n.Z,{mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,a.kt)("p",null,"Previously obtained Merkle proof object"))),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"weight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"proof",required:!1,deprecated:void 0,schemaDescription:"Merkle tree siblings",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:"Merkle tree leaf value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Return valid true in case verification is Ok")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(p.Z,{mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"valid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'{\n  "valid": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);