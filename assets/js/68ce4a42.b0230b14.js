"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={},r="SDK Tutorial",s={unversionedId:"sdk/tutorial",id:"sdk/tutorial",title:"SDK Tutorial",description:"This tutorial will show you how to get your environment set up, start using the SDK, and create and vote in an election. We will be using typescript.",source:"@site/docs/sdk/tutorial.md",sourceDirName:"sdk",slug:"/sdk/tutorial",permalink:"/sdk/tutorial",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"modules",permalink:"/sdk/reference/modules"},next:{title:"Voting Types",permalink:"/sdk/voting-types/"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Overview",id:"overview",level:2},{value:"Client",id:"client",level:2},{value:"Census",id:"census",level:2},{value:"Election",id:"election",level:2},{value:"Voting",id:"voting",level:2},{value:"Results",id:"results",level:2},{value:"Running the code",id:"running-the-code",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sdk-tutorial"},"SDK Tutorial"),(0,a.kt)("p",null,"This tutorial will show you how to get your environment set up, start using the SDK, and create and vote in an election. We will be using typescript."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You'll need a working ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org"},"nodejs")," environment, but other than that, you're\nfree to use any package manager (either npm, yarn, pnpm...). Let's start by creating a project and adding the SDK:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# with yarn\nyarn add @vocdoni/sdk\n# with npm\nnpm i @vocdoni/sdk\n# with pnpm\npnpm add @vocdoni/sdk\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This project has been bundled into many formats in order for you to\nimport it based on the environment you're using it. When importing it via\n",(0,a.kt)("inlineCode",{parentName:"p"},"@vocdoni/sdk")," it will choose a version based on your current environment\n(commonjs or esm). There's also another UMD version which can be accessed via\n",(0,a.kt)("inlineCode",{parentName:"p"},"@vocdoni/sdk/umd")," in case you need it.")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The following are the main steps we need to implement:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connecting a client to the Vocdoni network"),(0,a.kt)("li",{parentName:"ul"},"Creating a census with some random members"),(0,a.kt)("li",{parentName:"ul"},"Creating an election"),(0,a.kt)("li",{parentName:"ul"},"Sending votes"),(0,a.kt)("li",{parentName:"ul"},"Checking the election results")),(0,a.kt)("h2",{id:"client"},"Client"),(0,a.kt)("p",null,"The first step will be connecting to a Vocdoni ",(0,a.kt)("a",{parentName:"p",href:"/protocol#12-gateways"},"Gateway")," Node. We can do this easily with the ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/VocdoniSDKClient"},"VocdoniSDKClient"),". The client allows us to access all of the Vocdoni API calls."),(0,a.kt)("p",null,"In order to create a client, we need a ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet"),", an envelope that holds a cryptographic key and enables our client to sign transactions for the blockchain. We'll be generating a random wallet with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethers-io/ethers.js"},"ethers")," signer."),(0,a.kt)("p",null,"We also need to define which Vocdoni ",(0,a.kt)("a",{parentName:"p",href:"/sdk/integration-details#environment"},"environment")," we will connect to. Staging is the ",(0,a.kt)("strong",{parentName:"p"},"recommended")," environment for most testing use cases, since the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," environment is more subject to blockchain resets and downtimes than the ",(0,a.kt)("inlineCode",{parentName:"p"},"stg")," one."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/client.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const getDefaultClient = () => {\n  const wallet = Wallet.createRandom();\n  const client = new VocdoniSDKClient({\n    env: EnvOptions.STG,\n    wallet: wallet,\n  });\n\n  return { wallet, client };\n};\n")),(0,a.kt)("p",null,"Now that we have a client connected to the ",(0,a.kt)("inlineCode",{parentName:"p"},"STG")," environment, we need to register its wallet to the blockchain with ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/VocdoniSDKClient#createaccount"},"createAccount()"),". Parameters here are optional, but let's define a name and description."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"An ",(0,a.kt)("inlineCode",{parentName:"p"},"Account")," can represent an organization hosting a voting process. There are many ",(0,a.kt)("a",{parentName:"p",href:"/protocol/data-schemes/organization"},"parameters")," we can optionally add, like ",(0,a.kt)("inlineCode",{parentName:"p"},"logo")," or even arbitrary ",(0,a.kt)("inlineCode",{parentName:"p"},"meta"),". This can all be displayed on a custom frontend implementation. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"createAccount()")," on an account that already exists will fetch the account info from the blockchain.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/account.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const createAccount = (client: VocdoniSDKClient) => {\n  return client\n    .createAccount({\n      account: new Account({\n        languages: ['en'],\n        name: {\n          default: 'Account name',\n        },\n        description: 'Description of the account',\n        logo: 'https://logo.io',\n      }),\n    })\n    .then(() => client.fetchAccountInfo().then(info => console.log(info)));\n};\n")),(0,a.kt)("h2",{id:"census"},"Census"),(0,a.kt)("p",null,"With our client created and registered to the Vochain, the next step is to create a ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/census"},"census")," of voters. The protocol enables many ",(0,a.kt)("a",{parentName:"p",href:"/protocol/census"},"types of census"),". For our purposes it's easiest to use a ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/plaincensus"},"plain census"),", the simplest form of ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/offchaincensus"},"offchain census"),"."),(0,a.kt)("p",null,"We can create a random wallet to represent each voter just like we did for the client, and then we can register each voter's address to the census. The voter wallets have to be saved in order to sign their individual votes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/census.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export async function createCensus () {\n  const census = new PlainCensus()\n\n  // Create a list of random voters, register them to the census\n  let voters: Wallet[] = []\n  for (let i = 0; i < 5; i++) {\n    voters.push(Wallet.createRandom())\n    census.add(await voters[i].getAddress())\n  }\n\n  return { census, voters }\n}\n")),(0,a.kt)("h2",{id:"election"},"Election"),(0,a.kt)("p",null,"Creating a basic election is easy with ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/Election#from"},"Election.from()"),". We just need to specify the title and description, a header photo, an end date, and the census we created earlier. We can specify some ",(0,a.kt)("inlineCode",{parentName:"p"},"electionType")," options, but this is not necessary as our election is using the default options. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/election.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const createElection = (census: PlainCensus): UnpublishedElection => {\n  const election: UnpublishedElection = Election.from({\n    title: 'Election title',\n    description: 'Election description',\n    header: 'https://source.unsplash.com/random',\n    endDate: new Date().getTime() + 100000,\n    census,\n  });\n  ...\n")),(0,a.kt)("p",null," Questions can be added to an election with ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/UnpublishedElection#addquestion"},"addQuestion"),". This is a single-choice (binary) election with only one question. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/election.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"...\n  election.addQuestion('This is a title', 'This is a description', [\n    {\n      title: 'Option 1',\n      value: 0\n    },\n    {\n      title: 'Option 2',\n      value: 1\n    }\n  ])\n\n  return election\n}\n")),(0,a.kt)("p",null,"Once our election is defined, it has to be officially created on the blockchain with ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/VocdoniSDKClient#createelection"},(0,a.kt)("inlineCode",{parentName:"a"},"client.CreateElection()")),". This will also provide us with a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"electionID"),". We want to use ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/VocdoniSDKClient#setelectionid"},(0,a.kt)("inlineCode",{parentName:"a"},"client.SetElectionID()"))," so that the client knows which voting process to submit votes to. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Now that we have the ",(0,a.kt)("inlineCode",{parentName:"p"},"electionId"),", we can also print out a link to view our voting process on the Vocdoni blockchain ",(0,a.kt)("a",{parentName:"p",href:"https://stg.explorer.vote"},"explorer"),"! The explorer unlocks the universal verifiability of Vocdoni's protocol- even for this small example, the results of this election are verifiable by any observer and cannot be altered. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/election.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const waitForElectionReady = (client: VocdoniSDKClient, electionId: string): Promise<string> => {\n  return new Promise(f => setTimeout(f, 5000))\n    .then(() => client.fetchElection(electionId))\n    .then(election => {\n      if (election.status !== ElectionStatus.ONGOING) {\n        return waitForElectionReady(client, electionId);\n      }\n      return Promise.resolve(electionId);\n    });\n};\n")),(0,a.kt)("p",null,"Publishing an election registers a transaction to the blockchain. This means we have to wait for the next block to process in order to ensure the transaction was successful. Here we use ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/VocdoniSDKClient#fetchelection"},"client.fetchElection()")," to fetch the election info from the blockchain, given our ",(0,a.kt)("inlineCode",{parentName:"p"},"electionId"),". This allows us to wait until the election status is ",(0,a.kt)("inlineCode",{parentName:"p"},"ONGOING"),", which means the election has been successfully published and has begun."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/election.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const publishElection = (client: VocdoniSDKClient, election: UnpublishedElection): Promise<string> => {\n  return client.createElection(election).then(electionId => {\n    client.setElectionId(electionId);\n    console.log('Election created!', electionId);\n    console.log('View this election at ' + client.explorerUrl + '/processes/show/#/' + electionId);\n    console.log('Waiting for election to be published...');\n    return waitForElectionReady(client, electionId);\n  });\n};\n")),(0,a.kt)("h2",{id:"voting"},"Voting"),(0,a.kt)("p",null,"With the election published, it's time to vote. We can use each of the wallets that we saved earlier to cast a unique vote for that imaginary voter. We do this by first setting ",(0,a.kt)("inlineCode",{parentName:"p"},"client.wallet = voter"),", telling the client which wallet to use for bundling and submitting this vote. "),(0,a.kt)("p",null,"The we create the vote itself. A ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/vote"},"Vote")," is simply a list of values whose form depends on the type and number of questions in the election."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For more info on vote types, see our section on the ",(0,a.kt)("a",{parentName:"p",href:"/protocol/ballot-protocol"},"Ballot Protocol"))),(0,a.kt)("p",null,"Then we can simply call ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/VocdoniSDKClient#submitvote"},(0,a.kt)("inlineCode",{parentName:"a"},"client.submitVote()")),", and the SDK handles the creation, signing, and submission of the vote package. It returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"voteId")," which can be used to ensure the vote was correctly counted. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/vote.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const castVotes = (electionId: string, voters: Wallet[]) => {\n  var votePromises = [];\n  for (const voter of voters) {\n    const client = new VocdoniSDKClient({ env: EnvOptions.STG, wallet: voter, electionId: electionId });\n    // Create a vote for option 0 or 1\n    const vote = new Vote([Math.round(Math.random())]);\n    votePromises.push(\n      client.submitVote(vote).then(voteId => {\n        console.log('Vote sent! Vote id: ', voteId);\n        console.log('Verify vote at ' + client.explorerUrl + '/verify/#/' + voteId);\n      })\n    );\n  }\n  return Promise.all(votePromises);\n};\n")),(0,a.kt)("h2",{id:"results"},"Results"),(0,a.kt)("p",null,"All that's left is checking the results of this election! ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/classes/VocdoniSDKClient#fetchelection"},(0,a.kt)("inlineCode",{parentName:"a"},"client.fetchElection()"))," returns an object with a simple array of results values- it's up to you to decide how to display them. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Note that the results are available immediately because this election was configured with ",(0,a.kt)("inlineCode",{parentName:"p"},"secretUntilTheEnd=false"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/vote.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const countVotes = (client: VocdoniSDKClient) => {\n  return client.fetchElection().then(election => {\n    console.log('Election results: ');\n    election.questions.forEach(question => {\n      question.choices.forEach(choice => {\n        console.log(choice.title.default + ': ' + choice.results);\n      });\n    });\n  });\n};\n")),(0,a.kt)("h2",{id:"running-the-code"},"Running the code"),(0,a.kt)("p",null,"Here's a program that combines all the above functions into a working prototype:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/index.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function main () {\n  console.log('Initializing client...');\n  const { client } = getDefaultClient();\n\n  console.log('Creating account...');\n  await createAccount(client);\n\n  console.log('Creating census with some random wallets...');\n  const { census, voters } = await createCensus();\n\n  console.log('Creating election...');\n  const election = createElection(census);\n  const electionId = await publishElection(client, election);\n\n  console.log('Voting...');\n  await castVotes(electionId, voters);\n\n  console.log('Getting results...');\n  await countVotes(client);\n}\nmain();\n")),(0,a.kt)("p",null,"All we have to do is run "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tutorial $ yarn start\nyarn run v1.22.17\n$ ts-node src/index.ts\nInitializing client...\nCreating account...\n{\n  account: Account {\n    _languages: [ 'en' ],\n    _name: { default: 'Account name' },\n    _description: { default: 'Description of the account' },\n    _feed: { default: '' },\n    _header: '',\n    _avatar: '',\n    _logo: 'https://logo.io',\n    _meta: []\n  },\n  address: '73b3e1ff1602c6ece34f9b75aa86f5f90b41a209',\n  nonce: 0,\n  balance: 50,\n  electionIndex: 0,\n  infoURL: 'ipfs://bafybeif5mbhhwuju2pyd54bxhn3tdsj6m5cukx6f5xvchqfh2wvzkpbjpy',\n  metadata: {\n    version: '1.0',\n    languages: [ 'en' ],\n    name: { default: 'Account name' },\n    description: { default: 'Description of the account' },\n    newsFeed: { default: '' },\n    media: { logo: 'https://logo.io' },\n    meta: {}\n  },\n  sik: 'c5321163e98108424f5c25e55980a1ea4811029c1ff72cae95f113dfc95fac22'\n}\nCreating census with some random wallets...\nCreating election...\nElection created! 4ae20a8eb4ca73b3e1ff1602c6ece34f9b75aa86f5f90b41a209020000000000\nView this election at https://stg.explorer.vote/processes/show/#/4ae20a8eb4ca73b3e1ff1602c6ece34f9b75aa86f5f90b41a209020000000000\nWaiting for election to be published...\nVoting...\nVote sent! Vote id:  2fae8af3b02ec78af5a3bf06ec4aff1b7c000a1356a0aff1c07163da23f3d771\nVerify vote at https://stg.explorer.vote/verify/#/2fae8af3b02ec78af5a3bf06ec4aff1b7c000a1356a0aff1c07163da23f3d771\nVote sent! Vote id:  8af200d25a159c9d862e84064a4d977df2b10ea23ffb32ddc2de18b9142df0b6\nVerify vote at https://stg.explorer.vote/verify/#/8af200d25a159c9d862e84064a4d977df2b10ea23ffb32ddc2de18b9142df0b6\nVote sent! Vote id:  3cae37ec5c49ce338bcbc40b5102cf33bf9304c19c3f5e650c7c469b72664fc8\nVerify vote at https://stg.explorer.vote/verify/#/3cae37ec5c49ce338bcbc40b5102cf33bf9304c19c3f5e650c7c469b72664fc8\nVote sent! Vote id:  937911458a52393b75f1428ec1613d3a481112491c51bfcc033e2f0009341022\nVerify vote at https://stg.explorer.vote/verify/#/937911458a52393b75f1428ec1613d3a481112491c51bfcc033e2f0009341022\nVote sent! Vote id:  a6e4f4fe0f0e56d41fc21c62473718c9fbbe4c451a6fd9c19dbfca1fef0dac8c\nVerify vote at https://stg.explorer.vote/verify/#/a6e4f4fe0f0e56d41fc21c62473718c9fbbe4c451a6fd9c19dbfca1fef0dac8c\nGetting results...\nElection results:\nOption 1: 2\nOption 2: 3\n\u2728  Done in 45.08s.\n")),(0,a.kt)("p",null,"You can even check out the ",(0,a.kt)("a",{parentName:"p",href:"https://stg.explorer.vote/processes/show/#/4ae20a8eb4ca73b3e1ff1602c6ece34f9b75aa86f5f90b41a209020000000000"},"election I created")," on the blockchain explorer. "),(0,a.kt)("p",null,"Now that you've created a basic example with the SDK, you can integrate this functionality into your own applications. For more details, check out the ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/modules"},"reference documentation")," and the more extensive ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples"},"examples")))}d.isMDXComponent=!0}}]);