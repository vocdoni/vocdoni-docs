"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,f=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},35508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},a="Voting Types",l={unversionedId:"sdk/voting-types/voting-types",id:"sdk/voting-types/voting-types",title:"Voting Types",description:"In this section, we will provide a brief overview of the different types of voting supported by the Vocdoni protocol and",source:"@site/docs/sdk/voting-types/voting-types.md",sourceDirName:"sdk/voting-types",slug:"/sdk/voting-types/",permalink:"/sdk/voting-types/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"SDK Tutorial",permalink:"/sdk/tutorial"},next:{title:"Single Choice Voting",permalink:"/sdk/voting-types/single-choice"}},s={},p=[{value:"Election types",id:"election-types",level:2},{value:"Results interpretation",id:"results-interpretation",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"voting-types"},"Voting Types"),(0,o.kt)("p",null,"In this section, we will provide a brief overview of the different types of voting supported by the Vocdoni protocol and\nhow it operates."),(0,o.kt)("h2",{id:"election-types"},"Election types"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/protocol/ballot-protocol"},"Vocdoni Ballot protocol")," in its current implementation accommodates multiple ",(0,o.kt)("strong",{parentName:"p"},"elections types"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"voting-types/single-choice"},"Single choice"),", each voter is typically allowed to cast only one vote for their preferred option. This\nvoting system is the only one that ",(0,o.kt)("strong",{parentName:"li"},"supports multiple questions"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"voting-types/ranked"},"Ranked voting"),", also known as preferential voting, is an electoral system where voters rank candidates in order of preference"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"voting-types/approval"},"Approval voting"),", or multiple choice, here the voters are allowed to indicate their support for multiple\ncandidates or options."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"voting-types/weighted"},"Weighted voting"),", each voter is assigned a specific weight or value that reflects their relative influence or\nimportance in the decision-making process."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"voting-types/quadratic"},"Quadratic voting"),", voters can cast multiple votes for issues they prioritize, but the cost of casting\nadditional votes on the same issue rises exponentially.")),(0,o.kt)("p",null,"The configuration of these election types happens at the time of election creation using the SDK. Refer to the respective\ndocumentation for the parameter requirements for each election type."),(0,o.kt)("p",null,"A comprehensive explanation of the parameters used in the ballot protocol can be found ",(0,o.kt)("a",{parentName:"p",href:"/protocol/ballot-protocol"},"here"),"."),(0,o.kt)("h2",{id:"results-interpretation"},"Results interpretation"),(0,o.kt)("p",null,"The results are stored on the Vochain as a bi-dimensional array. Essentially, the ballot protocol is a system that\ntransforms a unidimensional array (a vote, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"[1,4]"),") into a bi-dimensional array of results (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"[[2,5]]"),")."),(0,o.kt)("p",null,"The interpretation of results is done on the user side, which receives the results from the SDK. The SDK provides\nmetadata about the election to facilitate understanding of the results. More details on interpreting results can be found,\n",(0,o.kt)("a",{parentName:"p",href:"/protocol/ballot#vocdoni-results-interpretation"},"here"),"."),(0,o.kt)("p",null,"Here's a simple example to demonstrate how the result array can be interpreted in different ways, depending on the\nelection type:"),(0,o.kt)("p",null,"Consider a question where 2 candidates are ranked by preference, which is an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"ranked voting"),".  The results\narray might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[ \n    [0, 0, 10], \n    [0, 10, 0], \n    [10, 0, 0] \n]\n")),(0,o.kt)("p",null,"In this scenario:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"10 voters select the first candidate as third option"),(0,o.kt)("li",{parentName:"ul"},"10 voters select the second candidate as second option"),(0,o.kt)("li",{parentName:"ul"},"10 voters select the third candidate as first option")),(0,o.kt)("p",null,'Now, let\'s examine another election type that can produce the same results array. For a question like "choose your 3\nfavorite colors out of 2", which is an example of ',(0,o.kt)("inlineCode",{parentName:"p"},"approval voting"),", the results array may look like that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[ \n    [10, 0], \n    [0, 10], \n    [0, 10] \n]\n")),(0,o.kt)("p",null,"On this case, the results interpretation may vary:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"10 users give 0 points to first option"),(0,o.kt)("li",{parentName:"ul"},"10 users give 1 point to second and third options")),(0,o.kt)("p",null,"The examples above represent two methods for interpreting the results array. Additional examples are available for\ndifferent voting type result interpretations."),(0,o.kt)("admonition",{title:"Weighted results are calculated on the indexer",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In a weighted election, the Vochain stores the envelope without calculating the weight of each voter. However, when\nretrieving the results using the SDK, you will see the weights applied. The application of these weights is performed\nby the vocdoni-node indexer, which calculates the weights for you."),(0,o.kt)("p",{parentName:"admonition"},"The weights of each vote are stored in the envelope, which is saved on the Vochain.")))}u.isMDXComponent=!0}}]);