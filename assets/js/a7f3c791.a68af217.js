"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23612:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(67294),i=n(86010),a=n(35281),r=n(95999);const s="admonition_LlT9",l="admonitionHeading_tbUL",c="admonitionIcon_kALy",d="admonitionContent_S0QG";const u={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},p={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:i}}(e.children);return{...e,title:e.title??t,children:n}}function h(e){const{children:t,type:n,title:r,icon:h}=m(e),f=function(e){const t=p[e]??e;return u[t]||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),u.info)}(n),v=r??f.label,{iconComponent:g}=f,y=h??o.createElement(g,null);return o.createElement("div",{className:(0,i.Z)(a.k.common.admonition,a.k.common.admonitionType(e.type),"alert",`alert--${f.infimaClassName}`,s)},o.createElement("div",{className:l},o.createElement("span",{className:c},y),v),o.createElement("div",{className:d},t))}},32136:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(67294),i=n(39960),a=n(23612);const r=()=>o.createElement(o.Fragment,null,o.createElement(a.Z,{type:"danger",title:"Multiple questions not supported"},o.createElement("p",null,o.createElement("strong",null,"This election type not support multiple questions"),": the current Vocdoni implementation restricts this kind of elections to a single question. To create an election with multiple questions check ",o.createElement(i.Z,null,"multi question election "))))},86355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(87462),i=(n(67294),n(3905)),a=n(32136);const r={sidebar_position:6,slug:"quadratic"},s="Quadratic voting",l={unversionedId:"get-started/Voting Types/quadratic",id:"get-started/Voting Types/quadratic",title:"Quadratic voting",description:"Quadratic voting is a voting mechanism that allows individuals to express their preferences on different issues with",source:"@site/docs/get-started/02-Voting Types/quadratic.mdx",sourceDirName:"get-started/02-Voting Types",slug:"/get-started/Voting Types/quadratic",permalink:"/get-started/Voting Types/quadratic",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"quadratic"},sidebar:"getStarted",previous:{title:"Weighted voting",permalink:"/get-started/Voting Types/weighted"},next:{title:"Quadratic voting",permalink:"/get-started/quadratic"}},c={},d=[{value:"Setting up the election",id:"setting-up-the-election",level:2},{value:"Voter credits",id:"voter-credits",level:3},{value:"Casting a vote",id:"casting-a-vote",level:2},{value:"Results interpretation",id:"results-interpretation",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quadratic-voting"},"Quadratic voting"),(0,i.kt)("p",null,"Quadratic voting is a voting mechanism that allows individuals to express their preferences on different issues with\nmore granularity and intensity. In quadratic voting, voters are allocated a fixed number of voting credits, and they can\ndistribute those credits across various options or issues in a quadratic manner. This means that voters can assign more\ncredits to options they care strongly about while still being able to express preferences on multiple issues."),(0,i.kt)("p",null,"The quadratic aspect of the system ensures that the cost of allocating additional credits increases quadratically, which\nhelps prevent a small number of voters from dominating the decision-making process. Quadratic voting aims to promote a\nmore accurate representation of individual preferences and allocate resources based on the collective intensity of\npreferences rather than just a simple majority rule."),(0,i.kt)("p",null,"See:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/typescript/src/quadratic.ts"},"Complete example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/protocol/ballot#quadratic-voting"},"Ballot protocol implementation"))),(0,i.kt)("h2",{id:"setting-up-the-election"},"Setting up the election"),(0,i.kt)("p",null,"Here we are going to describe how to configure an election to set up a quadratic voting. When the election object is\ncreated,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const election_opts: IVoteType = {\n  maxValue: 0, // Must be 0 for quadratic elections\n  maxCount: CHOICES_LENGTH, // Number of choices for the question\n  uniqueChoices: false,\n  costFromWeight: true, // This will set that the weight on a weighted census is actually the credits available\n  costExponent: 2, // In the context of quadratic voting, this value is usually set to 2\n};\n")),(0,i.kt)(a.Z,{mdxType:"MultiQuesNotSupportedAdmotion"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"costExponent")," define the exponent for quadratic voting calculation. In the context of quadratic voting, this value is\nusually set to 2. This exponent determines the cost of a vote. For example, if a voter assigns 2 credits to an option,\nthe cost of that vote would be ",(0,i.kt)("inlineCode",{parentName:"p"},"2^2 = 4"),". Look at SDK docs for more info.")),(0,i.kt)("h3",{id:"voter-credits"},"Voter credits"),(0,i.kt)("p",null,"To determine the number of credits each voter can use, the configuration must be defined in one of two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Adjusting the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxTotalCost"),", on the election options, and using a ",(0,i.kt)("inlineCode",{parentName:"p"},"PlainCensus")," allows for an equal number of credits to be\nallocated to each voter.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Alternatively, by enabling ",(0,i.kt)("inlineCode",{parentName:"p"},"costFromWeight")," and using a ",(0,i.kt)("inlineCode",{parentName:"p"},"WeightedCensus"),", the number of credits available will\ncorrespond to the voter's weight."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  const census = new WeightedCensus();\n  census.add(\n    participants.map((participant, index) => ({\n      key: participant.address,\n      weight: BigInt(20), // Give 20 credits to every voter\n    }))\n  );\n")),(0,i.kt)("p",null,"Using this method will enable the possibility to give different number of credits for every voter. "),(0,i.kt)("h2",{id:"casting-a-vote"},"Casting a vote"),(0,i.kt)("p",null,"As of now, the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.vocdoni.io/architecture/data-schemes/ballot-protocol.html#vocdoni-results-interpretation"},"protocol"),"\nfor quadratic elections only supports single question elections with discrete values. "),(0,i.kt)("p",null,"Therefore, to cast a vote, you can use the following method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"client.submitVote(new Vote([2, 3]));\n")),(0,i.kt)("p",null,"This approach calculates the cost of each vote based on the costExponent, for example, allocating 2 votes for option 0\nwill consume 4 credits (2^2 = 4 credits) and 3 votes for option 1 will consume 9 credits (3^2 = 9 credits), with a\ntotal of 13 (4 + 9) credits spent:"),(0,i.kt)("p",null,"The formula (in this case) is like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Votes | Credits\n1\xb2 = 1\n2\xb2 = 4\n3\xb2 = 9\n4\xb2 = 16\n")),(0,i.kt)("h2",{id:"results-interpretation"},"Results interpretation"),(0,i.kt)("p",null,"Let's imagine a scenario where we have 10 voters and each of them casts the same vote ",(0,i.kt)("inlineCode",{parentName:"p"},"[2, 3]"),"."),(0,i.kt)("p",null,"The election results are presented as a bi-dimensional array:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[ \n    [ '20' ], [ '30' ] \n]\n")),(0,i.kt)("p",null,"The first array position ",(0,i.kt)("inlineCode",{parentName:"p"},"[ '20' ]")," and the second ",(0,i.kt)("inlineCode",{parentName:"p"},"[ '30' ]")," represent the sum of votes cast for option one and option\ntwo, respectively. In this instance, each voter assigned two votes to option one and three votes to option two."),(0,i.kt)("p",null,"Given that there are 10 voters and each voted the same way, the sum of all the votes is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For option one ",(0,i.kt)("inlineCode",{parentName:"li"},"([ '20' ])"),": Each of the 10 voters gave two votes, leading to a total of 20 votes."),(0,i.kt)("li",{parentName:"ul"},"For option two ",(0,i.kt)("inlineCode",{parentName:"li"},"([ '30' ])"),": Each voter gave three votes, leading to a total of 30 votes.")),(0,i.kt)("p",null,"Remember, this interpretation assumes that all voters have used the same voting pattern. Moreover, under the\nquadratic voting system, while it is possible to cast more votes for a preferred option, it also becomes exponentially\nmore costly to do so, providing a self-balancing mechanism that aims to accurately reflect the strength of voters\npreferences."))}p.isMDXComponent=!0}}]);