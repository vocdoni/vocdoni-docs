"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return n?i.createElement(g,a(a({ref:t},h),{},{components:n})):i.createElement(g,a({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const r={sidebar_position:5,slug:"weighted"},a="Weighted voting",s={unversionedId:"get-started/Voting Types/weighted",id:"get-started/Voting Types/weighted",title:"Weighted voting",description:"Weighted voting is a voting system where each voter is assigned a specific weight or value that reflects their relative",source:"@site/docs/get-started/02-Voting Types/weighted.mdx",sourceDirName:"get-started/02-Voting Types",slug:"/get-started/Voting Types/weighted",permalink:"/get-started/Voting Types/weighted",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"weighted"},sidebar:"getStarted",previous:{title:"Approval Voting (Multiple Choice)",permalink:"/get-started/Voting Types/approval"},next:{title:"Quadratic voting",permalink:"/get-started/Voting Types/quadratic"}},l={},p=[{value:"Setting up the election",id:"setting-up-the-election",level:2},{value:"Creating a <code>WeightedCensus</code>",id:"creating-a-weightedcensus",level:3},{value:"Casting a vote",id:"casting-a-vote",level:2},{value:"Results interpretation",id:"results-interpretation",level:2}],h={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"weighted-voting"},"Weighted voting"),(0,o.kt)("p",null,"Weighted voting is a voting system where each voter is assigned a specific weight or value that reflects their relative\ninfluence or importance in the decision-making process."),(0,o.kt)("p",null,"When votes are cast, the value of each individual\u2019s vote is multiplied by their assigned weight, resulting in a weighted\nscore. The sum of all the weighted scores determines the outcome of the vote. This system allows for a more nuanced\nrepresentation of voting power and can reflect the hierarchical structure or distribution of authority within the\norganization."),(0,o.kt)("p",null,"See:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/typescript/src/weighted.ts"},"Complete example"))),(0,o.kt)("h2",{id:"setting-up-the-election"},"Setting up the election"),(0,o.kt)("p",null,"The process creation anb use of the ballot protocol is the same as on any other Election, the key difference is the\nuse of a ",(0,o.kt)("inlineCode",{parentName:"p"},"WeightedCensus")," instead of a ",(0,o.kt)("inlineCode",{parentName:"p"},"PlainCensus"),"."),(0,o.kt)("admonition",{title:"Where can I use a WeightedCensus?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Essentially, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"WeightedCensus")," for any vote type except quadratic voting."),(0,o.kt)("p",{parentName:"admonition"},"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"quadratic voting")," already uses a ",(0,o.kt)("inlineCode",{parentName:"p"},"WeightedCensus")," but for other purposes. On a ",(0,o.kt)("inlineCode",{parentName:"p"},"quadratic election")," the\nweighted census are used to set the available credits for every voter when the option ",(0,o.kt)("inlineCode",{parentName:"p"},"costFromWeight")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,o.kt)("p",null,"The votes are stored on the blockchain with its weight like any other voting process. When the results are retrieved\nfrom the API, the indexer applies the weight to every vote, and this reflects in the results matrix."),(0,o.kt)("h3",{id:"creating-a-weightedcensus"},"Creating a ",(0,o.kt)("inlineCode",{parentName:"h3"},"WeightedCensus")),(0,o.kt)("p",null,"Following de above example, we are going to create a census where the weight is related to the position of the voter on\nthe participants array."),(0,o.kt)("p",null,"The process of generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"WeightedCensus")," is similar to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"PlainCensus")," with the difference that you have to\nadd the vote weight to every participant. As shown below, we are giving to each voter a weight associated to its\nposition on an array. For 4 voters, the first one will have a weight of 1, and the last will have 4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"  const census = new WeightedCensus();\n  census.add(\n    participants.map((participant, index) => ({\n      key: participant.address,\n      weight: BigInt(index + 1), // Give the weight to each participant\n    }))\n  );\n")),(0,o.kt)("h2",{id:"casting-a-vote"},"Casting a vote"),(0,o.kt)("p",null,'For instance, consider that 4 voters have to vote on the question: "Do you like chocolate?" with possible answers "yes" and "no".\nThe weight distribution and votes are as follows:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Voter 1: Weight = 1, Votes for option 0 (no), hence adds 1 vote."),(0,o.kt)("li",{parentName:"ul"},"Voter 2: Weight = 2, Votes for option 1 (yes), hence adds 2 votes."),(0,o.kt)("li",{parentName:"ul"},"Voter 3: Weight = 3, Votes for option 0 (no), hence adds 3 votes."),(0,o.kt)("li",{parentName:"ul"},"Voter 4: Weight = 4, Votes for option 1 (yes), hence adds 4 votes.")),(0,o.kt)("p",null,"The total census weight is ",(0,o.kt)("inlineCode",{parentName:"p"},"1 + 2 + 3 + 4 = 10")," and will be distributed among the choices."),(0,o.kt)("p",null,"The related code could be something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"client.submitVote(new Vote([participantIndex % 2]));\n")),(0,o.kt)("h2",{id:"results-interpretation"},"Results interpretation"),(0,o.kt)("p",null,"The results from a weighted voting process are returned by the API as an array, which encapsulates the sum of the\nweighted votes cast for each choice. In the given example, the API will return the following array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[ [ '4', '6' ] ]\n")),(0,o.kt)("p",null,"In this type of election, where there's only one question with two possible choices, the array represents the summed\nweights of votes for each option. Here, each index in the array corresponds to an option from the voting question."),(0,o.kt)("p",null,"The value at each index is the total of weighted votes that the corresponding option received. For the first option (no),\nthe total weighted votes are ",(0,o.kt)("inlineCode",{parentName:"p"},"1 (from voter 1) + 3 (from voter 3) = 4"),", hence '4' at the first index of the array."),(0,o.kt)("p",null,"For the second option (yes), the total weighted votes are ",(0,o.kt)("inlineCode",{parentName:"p"},"2 (from voter 2) + 4 (from voter 4) = 6"),", thus '6' at the\nsecond index."),(0,o.kt)("p",null,"The array ",(0,o.kt)("inlineCode",{parentName:"p"},"[ [ '4', '6' ] ]")," encapsulates this result, which can be interpreted as \"4 weighted votes for 'no' and 6\nweighted votes for 'yes'\"."))}c.isMDXComponent=!0}}]);