"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={},r="Quadratic voting",s={unversionedId:"sdk/integration-details/voting-types/quadratic",id:"sdk/integration-details/voting-types/quadratic",title:"Quadratic voting",description:"Quadratic voting is a voting mechanism that allows individuals to express their preferences on different issues with",source:"@site/docs/sdk/integration-details/voting-types/quadratic.md",sourceDirName:"sdk/integration-details/voting-types",slug:"/sdk/integration-details/voting-types/quadratic",permalink:"/sdk/integration-details/voting-types/quadratic",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Weighted voting",permalink:"/sdk/integration-details/voting-types/weighted"},next:{title:"sdk-reference",permalink:"/sdk/reference/sdk-reference"}},l={},c=[{value:"Setting up the election",id:"setting-up-the-election",level:2},{value:"Voter credits",id:"voter-credits",level:3},{value:"Casting a vote",id:"casting-a-vote",level:2},{value:"Results interpretation",id:"results-interpretation",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quadratic-voting"},"Quadratic voting"),(0,a.kt)("p",null,"Quadratic voting is a voting mechanism that allows individuals to express their preferences on different issues with\nmore granularity and intensity. In quadratic voting, voters are allocated a fixed number of voting credits, and they can distribute those credits across various options or issues. This means that voters can assign more credits to options they care strongly about while still being able to express preferences on multiple issues."),(0,a.kt)("p",null,"The quadratic aspect of the system ensures that the cost of allocating additional credits increases quadratically, which helps prevent a small number of voters from dominating the decision-making process. Quadratic voting aims to promote a more accurate representation of individual preferences and allocate resources based on the collective intensity of preferences rather than just a simple majority rule."),(0,a.kt)("p",null,"See:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/typescript/src/quadratic.ts"},"Complete example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/protocol/ballot-protocol#quadratic-voting"},"Ballot protocol implementation"))),(0,a.kt)("h2",{id:"setting-up-the-election"},"Setting up the election"),(0,a.kt)("p",null,"Here we are going to describe how to configure an election to set up a quadratic voting. When the election object is\ncreated,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const election_opts: IVoteType = {\n  maxValue: 0, // Must be 0 for quadratic elections\n  maxCount: CHOICES_LENGTH, // Number of choices for the question\n  uniqueChoices: false,\n  costFromWeight: true, // This will set that the weight on a weighted census is actually the credits available\n  costExponent: 2, // In the context of quadratic voting, this value is usually set to 2\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The actual Vocdoni implementation only allow quadratic elections with only one question. For that, the ",(0,a.kt)("inlineCode",{parentName:"li"},"maxCount"),"\nrefers to the choices length for this unique question.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"costExponent")," define the exponent for quadratic voting calculation. In the context of quadratic voting, this value is\nusually set to 2. This exponent determines the cost of a vote. For example, if a voter assigns 2 credits to an option,\nthe cost of that vote would be 2^2 = 4. Look at SDK docs for more info.")),(0,a.kt)("h3",{id:"voter-credits"},"Voter credits"),(0,a.kt)("p",null,"To determine the number of credits each voter can use, the configuration must be defined in one of two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Adjusting the ",(0,a.kt)("inlineCode",{parentName:"p"},"maxTotalCost"),", on the election options, and using a ",(0,a.kt)("inlineCode",{parentName:"p"},"PlainCensus")," allows for an equal number of credits to be\nallocated to each voter.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Alternatively, by enabling ",(0,a.kt)("inlineCode",{parentName:"p"},"costFromWeight")," and using a ",(0,a.kt)("inlineCode",{parentName:"p"},"WeightedCensus"),", the number of credits available will\ncorrespond to the voter's weight."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  const census = new WeightedCensus();\n  census.add(\n    participants.map((participant, index) => ({\n      key: participant.address,\n      weight: BigInt(20), // Give 20 credits to every voter\n    }))\n  );\n")),(0,a.kt)("p",null,"Using this method will enable the possibility to give different number of credits for every voter. "),(0,a.kt)("h2",{id:"casting-a-vote"},"Casting a vote"),(0,a.kt)("p",null,"As of now, the ",(0,a.kt)("a",{parentName:"p",href:"/protocol/ballot-protocol#vocdoni-results-interpretation"},"protocol"),"\nfor quadratic elections only supports single question elections with discrete values. "),(0,a.kt)("p",null,"Therefore, to cast a vote, you can use the following method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"client.submitVote(new Vote([2, 3]));\n")),(0,a.kt)("p",null,"This approach calculates the cost of each vote based on the costExponent, for example, allocating 2 votes for option 0\nwill consume 4 credits (2^2 = 4 credits) and 3 votes for option 1 will consume 9 credits (3^2 = 9 credits), with a\ntotal of 13 (4 + 9) credits spent:"),(0,a.kt)("p",null,"The formula (in this case) is like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Votes | Credits\n1\xb2 = 1\n2\xb2 = 4\n3\xb2 = 9\n4\xb2 = 16\n")),(0,a.kt)("h2",{id:"results-interpretation"},"Results interpretation"),(0,a.kt)("p",null,"Let's imagine a scenario where we have 10 voters and each of them casts the same vote ",(0,a.kt)("inlineCode",{parentName:"p"},"[2, 3]"),"."),(0,a.kt)("p",null,"The election results are presented as a bi-dimensional array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[ \n    [ '20' ], [ '30' ] \n]\n")),(0,a.kt)("p",null,"The first array position ",(0,a.kt)("inlineCode",{parentName:"p"},"[ '20' ]")," and the second ",(0,a.kt)("inlineCode",{parentName:"p"},"[ '30' ]")," represent the sum of votes cast for option one and option\ntwo, respectively. In this instance, each voter assigned two votes to option one and three votes to option two."),(0,a.kt)("p",null,"Given that there are 10 voters and each voted the same way, the sum of all the votes is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For option one ",(0,a.kt)("inlineCode",{parentName:"li"},"([ '20' ])"),": Each of the 10 voters gave two votes, leading to a total of 20 votes."),(0,a.kt)("li",{parentName:"ul"},"For option two ",(0,a.kt)("inlineCode",{parentName:"li"},"([ '30' ])"),": Each voter gave three votes, leading to a total of 30 votes.")),(0,a.kt)("p",null,"Remember, this interpretation assumes that all voters have used the same voting pattern. Moreover, under the\nquadratic voting system, while it is possible to cast more votes for a preferred option, it also becomes exponentially\nmore costly to do so, providing a self-balancing mechanism that aims to accurately reflect the strength of voters\npreferences."))}u.isMDXComponent=!0}}]);