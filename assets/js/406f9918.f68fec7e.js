"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={},a="Blind Signatures",s={unversionedId:"protocol/Anonymous/blind-signatures",id:"protocol/Anonymous/blind-signatures",title:"Blind Signatures",description:"The current approach by Vocdoni regarding determining the eligibility of a potential voter is to use a Census Merkle Tree. All voter public keys must be known in advance and aggregated together into a hash tree to compute a Merkle root. Then each voter needs to fetch their own Merkle proof to demonstrate their eligibility on a public ledger. The Merkle proof can be anonymized using a zk-SNARK so that the public ledger will verify the SNARK proof instead.",source:"@site/docs/protocol/02-Anonymous/03-blind-signatures.md",sourceDirName:"protocol/02-Anonymous",slug:"/protocol/Anonymous/blind-signatures",permalink:"/protocol/Anonymous/blind-signatures",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"protocol",previous:{title:"ZK Census Proof",permalink:"/protocol/Anonymous/zk-census-proof"},next:{title:"The Census",permalink:"/protocol/Census/census-overview"}},l={},c=[{value:"Salted CSP keys",id:"salted-csp-keys",level:2},{value:"Flow diagram",id:"flow-diagram",level:2},{value:"Known Problems",id:"known-problems",level:2},{value:"Links",id:"links",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"blind-signatures"},"Blind Signatures"),(0,o.kt)("p",null,"The current approach by Vocdoni regarding determining the eligibility of a potential voter is to use a Census Merkle Tree. All voter public keys must be known in advance and aggregated together into a hash tree to compute a Merkle root. Then each voter needs to fetch their own Merkle proof to demonstrate their eligibility on a public ledger. The Merkle proof can be anonymized using a zk-SNARK so that the public ledger will verify the SNARK proof instead."),(0,o.kt)("p",null,"This approach is nice since the same census Merkle Tree can be reused repeatedly and by anyone (not only the owner). It adds resiliency to the process since any third party can obtain the tree (there is no private information involved; thus, it can be published into IPFS) to help the potential voters fetch their proofs. Finally, it is reproducible since anyone with the same list of keys could build the same root hash and verify the Tree generation was correctly executed."),(0,o.kt)("p",null,"However, this approach lacks flexibility since it is a static way to create a voter list (adding or deleting a public key requires rebuilding and publishing the census again). The current Vocdoni protocol implements an ",(0,o.kt)("inlineCode",{parentName:"p"},"updateCensus")," mechanism, but this is not very convenient for use cases that require constant census modifications (each update requires an Ethereum transaction)."),(0,o.kt)("p",null,"In order to support such scenarios and bring more flexibility to the Vocdoni stack, a new approach is proposed based on Credential Service Providers (CSP). A voter will need to show a proof provided by the election CSP for proving its eligibility which is made up of the CSP's signature to the voter's public key."),(0,o.kt)("p",null,"For preserving the anonymity of the voter, the CSP server will perform a blind signature. Blind signatures were first suggested by David Chaum: a cryptographic scheme that allows for signatures over disguised (blinded) messages. The blinder (voter in our scenario) can then un-blind the signature and use it as a normal/standard one. This protocol was designed for RSA, but we will use it over EC secp256k1 (Ethereum and Vocdoni standard)."),(0,o.kt)("h2",{id:"salted-csp-keys"},"Salted CSP keys"),(0,o.kt)("p",null,"For making the CSP voter approval valid only for a specific election process (processId) and attached to a specific weight while preserving the privacy, a deterministic key derivation is used. So the CSP is only required to publish a single root public key. The specific per-election keys will be computed independently by all parties (CSP will derive its election private key and the election organizers will derive the election public key). To this end we use the following simple approach (G is the EC generator point):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"PubKeyRoot = PrivKeyRoot * G\nPrivKey2   = PrivkeyRoot +  ProcessId + Weight\nPubKey2    = PubKeyRoot  + (ProcessId + Weight)*G\n")),(0,o.kt)("p",null,"So if PubKey2 becomes the election CSP public key, there is no way the CSP can share signature proofs before the processId is known and there is no way to reuse a CSP signature for a different election process."),(0,o.kt)("h2",{id:"flow-diagram"},"Flow diagram"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://kroki.io/mermaid/svg/eNp9U01PwzAMvfMrfAOEGAJuE0zi44KQJgQSF8TBS9w2aklGkm7avyd2OzWs23pp6z6_vPfsBvptySp6Nlh6_DmBdC3RR6PMEm2ETxfJj6pPH2-j2mPjVK0qNFY-SePlbDaUp1BShKV3ikJ40UdR6QDwziV4u2iMgpo2__ByZ6glj5HA0hpWLhpbjqCJagrYxops0orROAuF8ztCEmqLVRWpeqdDMPPECN6UVQRXgGBZpyZlNAW4W_irGaQuqI3VDNnD0Z3Ty4-uJvsOmNBrYt59HhetaTSbI1BhmV6tbiglr2osadDVUCGy-q4vVtZhv0XY9UQ4_JzWD1r75FzKN5MhCCncTo5padjZQA1t4Mg7H-PUBU76sgezzwyaRb4ib4rNNg8TYIWNGQ0mYJNtxnbOe6aStuGVNnAvQH66GEym58xfzm5Ku6t4bWLVs42nx3JI95lwN8bWE4vouvcF2NpduFwH_wWFIcpKyfzPurg5gp6IcioMbNMV54dykVQxOh_6JWfmbm2ZszeUWUlzydZa9uc0AHb7k-_tH9ykZ4Y=",alt:"flow_diagram_csp"})),(0,o.kt)("h2",{id:"known-problems"},"Known Problems"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time correlation, the CSP might know which voter is actually casting a vote.\n",(0,o.kt)("em",{parentName:"li"},"Could be solved using a delay mixnet (such as Nymtech)"))),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"H. Mala, N. Nezhadansari, ",(0,o.kt)("em",{parentName:"li"},'"New Blind Signature Schemes Based on the (Elliptic Curve) Discrete Logarithm Problem"')," ",(0,o.kt)("a",{parentName:"li",href:"https://sci-hub.st/10.1109/iccke.2013.6682844"},"https://sci-hub.st/10.1109/iccke.2013.6682844")," Implementation: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/arnaucube/go-blindsecp256k1"},"https://github.com/arnaucube/go-blindsecp256k1")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"EC deterministic derivation key schema PoC implementation"),(0,o.kt)("a",{parentName:"li",href:"https://github.com/p4u/go-eckey-derivation/blob/master/main.go"},"https://github.com/p4u/go-eckey-derivation")),(0,o.kt)("li",{parentName:"ol"},"CSP server implementation ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/vocdoni/blind-csp"},"https://github.com/vocdoni/blind-csp"))))}u.isMDXComponent=!0}}]);