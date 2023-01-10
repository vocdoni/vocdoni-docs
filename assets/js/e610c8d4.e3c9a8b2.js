"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2962],{13711:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>h,toc:()=>f});var i=s(87462),n=(s(67294),s(3905)),a=s(26389),o=s(94891),r=s(75190),c=(s(47507),s(24310)),d=(s(63303),s(75035),s(85162));const l={id:"census-add-participants",title:"Add participants to census",description:"Add list of public key/address with its weight to an unpublished census and returns the resulting",sidebar_label:"Add participants to census",hide_title:!0,hide_table_of_contents:!0,api:{description:'Add list of public key/address with its weight to an unpublished census and returns the resulting \n[Merkle Root](https://en.wikipedia.org/wiki/Merkle_tree).  \n\nEach addition will modify the census merkle root creating a new "snapshot" of the census at this moment. This \nroot  identifies the census at this point and can be used to publish the census at this specific state.\n\nFor example, supposing a census with id `0x1234` (random hex string generated during census creation), add 10 \nkeys will generate specific root for this state, ex `0xabcd`. \n\nIf we add 5 keys more, the resulting root changes, the keys are added and the new census have the first 10 keys\nplus the last 5, with a resulting root of `0xffff`. \n\nSo, at [publishing moment](census-publish), you could specify no root to publish census on the last \nstate (`0xffff`), which will publish the first 10 plus the last 5. Or either specify the snapshot point which \nyou want to publish the census, for example `0x1234`, which will publish just the first 10th.\n       \n- Requires Bearer token \n- Adds a list of wallet public key or wallet address to a census with a specific weight\n- If the weight parameter is missing, weight=1 is considered',operationId:"censusAddParticipants",security:[{bearerAuth:[]}],tags:["Censuses"],parameters:[{name:"censusId",in:"path",description:"Census id provided during census creation",required:!0,schema:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}}],requestBody:{description:"PublicKey - weight array ",required:!0,content:{"application/json":{schema:{type:"object",properties:{participants:{type:"array",items:{type:"object",properties:{key:{type:"string",example:"1f7fecf4cf4564c88a92af55046c5c4bf0a76b9b5536f7d30962192552f92237",required:!0},weight:{description:"Vote weight for this key",type:"integer",example:1,default:1}},required:["key"]}}}}}}},responses:{200:{description:"Return 200 if keys added properly"}},method:"post",path:"/censuses/{censusId}/participants",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{participants:[{key:"1f7fecf4cf4564c88a92af55046c5c4bf0a76b9b5536f7d30962192552f92237",weight:1}]},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Add participants to census",description:{content:'Add list of public key/address with its weight to an unpublished census and returns the resulting \n[Merkle Root](https://en.wikipedia.org/wiki/Merkle_tree).  \n\nEach addition will modify the census merkle root creating a new "snapshot" of the census at this moment. This \nroot  identifies the census at this point and can be used to publish the census at this specific state.\n\nFor example, supposing a census with id `0x1234` (random hex string generated during census creation), add 10 \nkeys will generate specific root for this state, ex `0xabcd`. \n\nIf we add 5 keys more, the resulting root changes, the keys are added and the new census have the first 10 keys\nplus the last 5, with a resulting root of `0xffff`. \n\nSo, at [publishing moment](census-publish), you could specify no root to publish census on the last \nstate (`0xffff`), which will publish the first 10 plus the last 5. Or either specify the snapshot point which \nyou want to publish the census, for example `0x1234`, which will publish just the first 10th.\n       \n- Requires Bearer token \n- Adds a list of wallet public key or wallet address to a census with a specific weight\n- If the weight parameter is missing, weight=1 is considered',type:"text/plain"},url:{path:["censuses",":censusId","participants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id provided during census creation",type:"text/plain"},type:"any",value:"",key:"censusId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},p=void 0,h={unversionedId:"vocdoni-api/census-add-participants",id:"vocdoni-api/census-add-participants",title:"Add participants to census",description:"Add list of public key/address with its weight to an unpublished census and returns the resulting",source:"@site/docs/vocdoni-api/census-add-participants.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/census-add-participants",permalink:"/vocdoni-api/census-add-participants",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"census-add-participants",title:"Add participants to census",description:"Add list of public key/address with its weight to an unpublished census and returns the resulting",sidebar_label:"Add participants to census",hide_title:!0,hide_table_of_contents:!0,api:{description:'Add list of public key/address with its weight to an unpublished census and returns the resulting \n[Merkle Root](https://en.wikipedia.org/wiki/Merkle_tree).  \n\nEach addition will modify the census merkle root creating a new "snapshot" of the census at this moment. This \nroot  identifies the census at this point and can be used to publish the census at this specific state.\n\nFor example, supposing a census with id `0x1234` (random hex string generated during census creation), add 10 \nkeys will generate specific root for this state, ex `0xabcd`. \n\nIf we add 5 keys more, the resulting root changes, the keys are added and the new census have the first 10 keys\nplus the last 5, with a resulting root of `0xffff`. \n\nSo, at [publishing moment](census-publish), you could specify no root to publish census on the last \nstate (`0xffff`), which will publish the first 10 plus the last 5. Or either specify the snapshot point which \nyou want to publish the census, for example `0x1234`, which will publish just the first 10th.\n       \n- Requires Bearer token \n- Adds a list of wallet public key or wallet address to a census with a specific weight\n- If the weight parameter is missing, weight=1 is considered',operationId:"censusAddParticipants",security:[{bearerAuth:[]}],tags:["Censuses"],parameters:[{name:"censusId",in:"path",description:"Census id provided during census creation",required:!0,schema:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}}],requestBody:{description:"PublicKey - weight array ",required:!0,content:{"application/json":{schema:{type:"object",properties:{participants:{type:"array",items:{type:"object",properties:{key:{type:"string",example:"1f7fecf4cf4564c88a92af55046c5c4bf0a76b9b5536f7d30962192552f92237",required:!0},weight:{description:"Vote weight for this key",type:"integer",example:1,default:1}},required:["key"]}}}}}}},responses:{200:{description:"Return 200 if keys added properly"}},method:"post",path:"/censuses/{censusId}/participants",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{participants:[{key:"1f7fecf4cf4564c88a92af55046c5c4bf0a76b9b5536f7d30962192552f92237",weight:1}]},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Add participants to census",description:{content:'Add list of public key/address with its weight to an unpublished census and returns the resulting \n[Merkle Root](https://en.wikipedia.org/wiki/Merkle_tree).  \n\nEach addition will modify the census merkle root creating a new "snapshot" of the census at this moment. This \nroot  identifies the census at this point and can be used to publish the census at this specific state.\n\nFor example, supposing a census with id `0x1234` (random hex string generated during census creation), add 10 \nkeys will generate specific root for this state, ex `0xabcd`. \n\nIf we add 5 keys more, the resulting root changes, the keys are added and the new census have the first 10 keys\nplus the last 5, with a resulting root of `0xffff`. \n\nSo, at [publishing moment](census-publish), you could specify no root to publish census on the last \nstate (`0xffff`), which will publish the first 10 plus the last 5. Or either specify the snapshot point which \nyou want to publish the census, for example `0x1234`, which will publish just the first 10th.\n       \n- Requires Bearer token \n- Adds a list of wallet public key or wallet address to a census with a specific weight\n- If the weight parameter is missing, weight=1 is considered',type:"text/plain"},url:{path:["censuses",":censusId","participants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id provided during census creation",type:"text/plain"},type:"any",value:"",key:"censusId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Verify merkle proof",permalink:"/vocdoni-api/census-verify-proof"},next:{title:"Delete census",permalink:"/vocdoni-api/census-delete"}},u={},f=[{value:"Add participants to census",id:"add-participants-to-census",level:2}],m={toc:f};function g(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"add-participants-to-census"},"Add participants to census"),(0,n.kt)("p",null,"Add list of public key/address with its weight to an unpublished census and returns the resulting\n",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Merkle_tree"},"Merkle Root"),".  "),(0,n.kt)("p",null,'Each addition will modify the census merkle root creating a new "snapshot" of the census at this moment. This\nroot  identifies the census at this point and can be used to publish the census at this specific state.'),(0,n.kt)("p",null,"For example, supposing a census with id ",(0,n.kt)("inlineCode",{parentName:"p"},"0x1234")," (random hex string generated during census creation), add 10\nkeys will generate specific root for this state, ex ",(0,n.kt)("inlineCode",{parentName:"p"},"0xabcd"),". "),(0,n.kt)("p",null,"If we add 5 keys more, the resulting root changes, the keys are added and the new census have the first 10 keys\nplus the last 5, with a resulting root of ",(0,n.kt)("inlineCode",{parentName:"p"},"0xffff"),". "),(0,n.kt)("p",null,"So, at ",(0,n.kt)("a",{parentName:"p",href:"census-publish"},"publishing moment"),", you could specify no root to publish census on the last\nstate (",(0,n.kt)("inlineCode",{parentName:"p"},"0xffff"),"), which will publish the first 10 plus the last 5. Or either specify the snapshot point which\nyou want to publish the census, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"0x1234"),", which will publish just the first 10th."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Requires Bearer token "),(0,n.kt)("li",{parentName:"ul"},"Adds a list of wallet public key or wallet address to a census with a specific weight"),(0,n.kt)("li",{parentName:"ul"},"If the weight parameter is missing, weight=1 is considered")),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"censusId",in:"path",description:"Census id provided during census creation",required:!0,schema:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}},mdxType:"ParamsItem"})))),(0,n.kt)(o.Z,{mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"PublicKey - weight array "))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"participants"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"key",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"weight",required:!1,deprecated:void 0,schemaDescription:"Vote weight for this key",schemaName:"integer",qualifierMessage:void 0,defaultValue:1,mdxType:"SchemaItem"})))))))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Return 200 if keys added properly")),(0,n.kt)("div",null)))))}g.isMDXComponent=!0}}]);