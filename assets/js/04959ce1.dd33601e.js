"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={slug:"conversational-recsys-overall-processes",title:"Conversational Recommender System Overall Processes",authors:"devslem",tags:["recsys","nlp","ai"]},i=void 0,o={permalink:"/blog/conversational-recsys-overall-processes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-09-24-conversational-recsys-overall-processes.md",source:"@site/blog/2023-09-24-conversational-recsys-overall-processes.md",title:"Conversational Recommender System Overall Processes",description:"\uc774 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 \ub300\ud654\ud615 \ucd94\ucc9c \uc2dc\uc2a4\ud15c (conversational recommender system)\uc744 \uad6c\ucd95\ud558\uae30 \uc704\ud55c \uc804\ubc18\uc801\uc778 \uacfc\uc815\uacfc \uc720\uc800\uc758 utterance\ub97c \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ud560 \uac83\uc778\uac00\uc5d0 \ub300\ud574 \uac04\ub7b5\ud788 \ub2e4\ub8f9\ub2c8\ub2e4.",date:"2023-09-24T00:00:00.000Z",formattedDate:"2023\ub144 9\uc6d4 24\uc77c",tags:[{label:"recsys",permalink:"/blog/tags/recsys"},{label:"nlp",permalink:"/blog/tags/nlp"},{label:"ai",permalink:"/blog/tags/ai"}],readingTime:7.815,hasTruncateMarker:!0,authors:[{name:"\ubc15\uc9c4\uc601",title:"AI Research Engineer",url:"https://github.com/DevSlem",imageURL:"https://avatars.githubusercontent.com/u/69196755?v=4",key:"devslem"}],frontMatter:{slug:"conversational-recsys-overall-processes",title:"Conversational Recommender System Overall Processes",authors:"devslem",tags:["recsys","nlp","ai"]},nextItem:{title:"Recommdenr System RL Introduction",permalink:"/blog/recsys-rl-intro"}},s={authorsImageUrls:[void 0]},p=[{value:"Contextual Understanding",id:"contextual-understanding",level:2},{value:"Named Entity Recognition",id:"named-entity-recognition",level:3},{value:"Keyword Extraction",id:"keyword-extraction",level:3},{value:"Our Case",id:"our-case",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc774 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 \ub300\ud654\ud615 \ucd94\ucc9c \uc2dc\uc2a4\ud15c (conversational recommender system)\uc744 \uad6c\ucd95\ud558\uae30 \uc704\ud55c \uc804\ubc18\uc801\uc778 \uacfc\uc815\uacfc \uc720\uc800\uc758 utterance\ub97c \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ud560 \uac83\uc778\uac00\uc5d0 \ub300\ud574 \uac04\ub7b5\ud788 \ub2e4\ub8f9\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc720\uc800\uc758 utterance\ub85c\ubd80\ud130 \ub300\ud654\ud615 \ucd94\ucc9c \uc2dc\uc2a4\ud15c \uad6c\ucd95\uc740 \uc790\uc5f0\uc5b4 \ucc98\ub9ac (natural language process), \ucd94\ucc9c \uc54c\uace0\ub9ac\uc998, \uc720\uc800 context\uc5d0 \ub300\ud55c \uc870\ud569\uc744 \uc694\uad6c\ud558\ub294 \ubcf5\uc7a1\ud55c \ud0dc\uc2a4\ud06c\uc785\ub2c8\ub2e4. \uc774\ub97c step-by-step\uc73c\ub85c \uc54c\uc544\ubd05\uc2dc\ub2e4:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Data Collection"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ub984, \uc704\uce58, \ud0c0\uc785 (e.g., bar, cafe, fine dining), \ubd84\uc704\uae30 (e.g., quiet, lively), \uc74c\uc2dd \uc885\ub958, \ud3c9\uc810, \ub9ac\ubdf0 \ub4f1\uc758 \ub514\ud14c\uc77c\ud55c \uc815\ubcf4\ub97c \ud3ec\ud568\ud558\ub294 \uc74c\uc2dd\uc810 \ub370\uc774\ud130\uc14b\uc744 \ubaa8\uc73c\ub294 \uac78\ub85c \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac00\ub2a5\ud55c, \uc720\uc800\uc758 \uc120\ud638\ub3c4\uc640 \ud589\ub3d9 \ub370\uc774\ud130 (e.g., \uc774\uc804\uc5d0 \ubc29\ubb38\ud55c \uc74c\uc2dd\uc810, \ud3c9\uc810)\ub97c \ubaa8\uc744 \uc218 \uc788\uc73c\uba74 \uc88b\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Text Preprocessing"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc720\uc800\uc758 utterance\uc744 \ucc98\ub9ac\ud558\uae30 \uc704\ud574 NLP \uae30\ubc95\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tokenization"),(0,r.kt)("li",{parentName:"ul"},"Lowercasing"),(0,r.kt)("li",{parentName:"ul"},"Removing stop words"),(0,r.kt)("li",{parentName:"ul"},"Lemmatization or stemming"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Intent and Entity Recognition"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'utterance\ub85c\ubd80\ud130 \uc720\uc800\uc758 \uc758\ub3c4 (e.g., "find", "recommend", "search")\ub97c \ucd94\ucd9c\ud569\ub2c8\ub2e4. \uc774\ub54c, intent recognition \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.'),(0,r.kt)("li",{parentName:"ul"},'entity\ub098 keyword (e.g., "quiet", "bar", "seafood")\ub97c entity recognition\uc774\ub098 keyward extraction \uae30\ubc95\uc744 \uc0ac\uc6a9\ud574 \ucd94\ucd9c\ud569\ub2c8\ub2e4.'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Contextual Understanding"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc774 stateful\ud558\ub2e4\uba74, \uc720\uc800 context\ub97c \uc774\ud574\ud558\uae30 \uc704\ud574 \uacfc\uac70 \uc0c1\ud638\uc791\uc6a9\ub4e4\uc744 \uae30\uc5b5\ud569\ub2c8\ub2e4. \uc774\ub294 \ucd94\ucc9c\uc744 \ub354 \uc798 \uc815\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uc720\uc800\uac00 \uc774\uc804\uc5d0 \ube44\uac74\uc774\ub77c\uace0 \uc5b8\uae09\ud588\ub2e4\uba74, \uace0\uae30\uc9d1\uc740 \uc801\uc808\uce58 \uc54a\uc740 \ucd94\ucc9c\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc9c0\uc5ed\uae30\ubc18 \uc11c\ube44\uc2a4\ub97c \uad6c\ucd95\ud569\ub2c8\ub2e4. \uc720\uc800\uac00 \ud2b9\ubcc4\ud788 \ub2e4\ub978 \uc7a5\uc18c\ub97c \uc5b8\uae09\ud558\uc9c0 \uc54a\uc558\ub2e4\uba74, \uc720\uc800 \uadfc\ucc98\uc758 \uc74c\uc2dd\uc810 \ucd94\ucc9c\ud569\ub2c8\ub2e4.  "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Candidate Generation"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"collaborative filtering\uc774\ub098 content-based filtering\uacfc \uac19\uc740 \uc804\ud1b5\uc801\uc778 \ucd94\ucc9c \uc54c\uace0\ub9ac\uc998\uc744 \uc0ac\uc6a9\ud574 candidate list\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},'\ucd94\ucd9c\ub41c entity\ub97c \ubc14\ud0d5\uc73c\ub85c \uc774 \ub9ac\uc2a4\ud2b8\ub97c \ud544\ud130\ub9c1\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, "quiet"\uc640 "bar"\uac00 entity\ub77c\uba74, "quiet"\ud55c attribute\ub97c \uac00\uc9c4 bar\ub9cc\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.'),(0,r.kt)("li",{parentName:"ul"},"\uc720\uc800\uc758 \ud589\ub3d9 \ub370\uc774\ud130\uac00 \uc788\ub2e4\uba74, \ucd94\ucc9c \ub9ac\uc2a4\ud2b8\ub97c re-rank\ud574 \uc6b0\uc120\uc21c\uc704\ub97c \uc870\uc815\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uc720\uc800\uac00 \uc774\ud0c8\ub9ac\uc548 \uc74c\uc2dd\uc810\uc744 \uc790\uc8fc \ubc29\ubb38\ud588\ub2e4\uba74, \uc774\ub7ec\ud55c \uc74c\uc2dd\uc810\uc744 \ub192\uc740 \uc6b0\uc120\uc21c\uc704\uc5d0 \ub458 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Hybrid Approach"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucd94\ucc9c \ud004\ub9ac\ud2f0\ub97c \ub192\uc774\uae30 \uc704\ud574 \uc5ec\ub7ec\uac1c\uc758 \ucd94\ucc9c \uc54c\uace0\ub9ac\uc998\uc744 \uacb0\ud569\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, collaborative\uc640 content-filtering\uc744 \uacb0\ud569\ud558\uac70\ub098 \ub525\ub7ec\ub2dd \uae30\ubc18 \ubaa8\ub378\uc744 \uacb0\ud569\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Feedback Loop"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc720\uc800\uac00 \ucd94\ucc9c\ub41c \uc544\uc774\ud15c\ub4e4\uc5d0 \ud53c\ub4dc\ubc31\uc744 \uc81c\uacf5\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4. explicit (e.g., ratings, likes)\ud558\uac70\ub098 implicit (e.g., click-through rates, time spent)\ud55c \ud53c\ub4dc\ubc31\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \ud53c\ub4dc\ubc31\uc744 \uc0ac\uc6a9\ud574 \uc9c0\uc18d\uc801\uc73c\ub85c \ucd94\ucc9c \ud504\ub85c\uc138\uc2a4\ub97c \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Post-Processing"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc720\uc800\uc5d0\uac8c \uc801\uc808\ud55c \uc218\uc758 \ucd94\ucc9c \uc544\uc774\ud15c\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4 (e.g., top 5 or top 10)."),(0,r.kt)("li",{parentName:"ul"},"\uad00\ub828\ub3c4, rating, \uc778\uae30\ub3c4\uc640 \uac19\uc740 \uc5b4\ub5a0\ud55c metric\uc744 \uc0ac\uc6a9\ud574 \ucd94\ucc9c\ub41c \uc544\uc774\ud15c\uc744 \uc815\ub82c\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"UI/UX Considerations"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'\ub300\ud654\ud615 \ubc29\uc2dd\uc744 \ud1b5\ud574 context\uc640 \ud568\uaed8 \ucd94\ucc9c \uc544\uc774\ud15c\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, "\uadfc\ucc98 \uc870\uc6a9\ud55c \uc220\uc9d1\uc744 \ucc3e\uc558\uc5b4\uc694:".'),(0,r.kt)("li",{parentName:"ul"},'\uc720\uc800\uac00 \ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc758 query\ub97c \uc870\uc815\ud558\uac70\ub098 \ucd94\uac00 \uc9c8\ubb38\uc744 \ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, "\uc774 \uc911 \uc2e4\uc678\uc11d\uc774 \uc788\ub294 \uacf3\uc774 \uc788\ub2c8?".'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Evaluation and Continuous Learning"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc8fc\uae30\uc801\uc73c\ub85c \ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc758 performance\ub97c \ud3c9\uac00\ud569\ub2c8\ub2e4. A/B testing\uacfc \uac19\uc740 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\uc640 \ud53c\ub4dc\ubc31\uc744 \ub354 \ub9ce\uc774 \uc218\uc9d1\ud558\uace0, \ucd94\ucc9c \ubaa8\ub378\uc744 \uac1c\uc120\ud569\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"\uc774 \uc911 ",(0,r.kt)("strong",{parentName:"p"},"contextual understanding"),"\uc5d0 \ub300\ud574 \uc9d1\uc911\uc801\uc73c\ub85c \ub2e4\ub904\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"contextual-understanding"},"Contextual Understanding"),(0,r.kt)("p",null,"contextual understanding\uc740 \ud06c\uac8c 2\uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4: named entity recognition, keyword extraction. \ub450 \ubc29\ubc95\uc740 \ube44\uc2b7\ud558\uba74\uc11c\ub3c4 \ub2e4\ub985\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"named-entity-recognition"},"Named Entity Recognition"),(0,r.kt)("p",null,"named entity recognition (NER)\uc740 \uc77c\uc885\uc758 tagging \uc791\uc5c5\uc785\ub2c8\ub2e4. \uc5b4\ub5a4 \ud14d\uc2a4\ud2b8\ub85c\ubd80\ud130 ",(0,r.kt)("strong",{parentName:"p"},"entity\ub97c \uc0ac\uc804\uc5d0 \uc815\uc758\ub41c \uce74\ud14c\uace0\ub9ac\ub85c \ubd84\ub958"),"\ud558\ub294 \uc815\ubcf4 \ucd94\ucd9c \uc791\uc5c5\uc785\ub2c8\ub2e4. \uce74\ud14c\uace0\ub9ac \uc608\uc2dc\ub85c \uc74c\uc2dd \ud0c0\uc785, \ubd84\uc704\uae30, \uc704\uce58 \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4. NER \ubaa8\ub378\uc740 labeled data\ub85c\ubd80\ud130 \ud559\uc2b5\ub429\ub2c8\ub2e4. \uac01 \ubb38\uc7a5 \ub0b4 \ub2e8\uc5b4\ub294 \uc0c1\uc751\ud558\ub294 entity \ud0c0\uc785\uc73c\ub85c \ud0dc\uadf8\ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4. entity\ub294 \uc720\uc2a4\ucf00\uc774\uc2a4\uc5d0 \ub530\ub77c \ub2e4\ub974\uac8c \uc815\uc758\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage in candidate generation:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\uc74c\uc2dd\uc810 \ucd94\ucc9c \uc2dc\uc2a4\ud15c \ub9e5\ub77d\uc5d0\uc11c, NER\uc740 \uc720\uc800 uterrance\ub85c\ubd80\ud130 \ud2b9\uc815 entity\ub97c \uc2dd\ubcc4\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, "\uc2dc\uce74\uace0 \ub0b4 \uc774\ud0c8\ub9ac\uc548 \uc74c\uc2dd\uc810\uc744 \uc6d0\ud574"\ub77c\ub294 \ubb38\uc7a5\uc5d0\uc11c, "\uc774\ud0c8\ub9ac\uc548"\uc740 \'\uc74c\uc2dd \ud0c0\uc785\', "\uc2dc\uce74\uace0"\ub294 \'\uc704\uce58\'\ub85c \uc778\uc2dd\ub429\ub2c8\ub2e4.'),(0,r.kt)("li",{parentName:"ul"},"candidate generation\uc740 \uc2dd\ubcc4\ub41c entity\uc5d0 \ub300\uc751\ud558\ub294 \uc74c\uc2dd\uc810\uc744 \ucc3e\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"keyword-extraction"},"Keyword Extraction"),(0,r.kt)("p",null,"keyward extraction\uc740 \uac70\ub300\ud55c \ud14d\uc2a4\ud2b8 \uc870\uac01\uc73c\ub85c\ubd80\ud130 \uad00\ub828\ub41c \uc6a9\uc5b4\ub97c \uc2dd\ubcc4 \ubc0f \ucd94\ucd9c\ud558\ub294 \uc791\uc5c5\uc785\ub2c8\ub2e4. \uc774\ub294 entity\uac00 \uc0ac\uc804\uc5d0 \uc815\uc758\ub418\uc5b4\uc788\ub294\uac00\uc5d0 \uad00\uacc4 \uc5c6\uc774 \uc218\ud589\ub418\uba70, \uc77c\uc885\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc694\uc57d"),"\uacfc \uc720\uc0ac\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage in candidate generation:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"quiet", "rooftop", "seafood"\uc640 \uac19\uc740 keyword\ub97c \uc720\uc800\uc758 utterance\ub85c\ubd80\ud130 \ucd94\ucd9c\ud569\ub2c8\ub2e4.'),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c keyword\ub4e4\uc740 \uc74c\uc2dd\uc810\uc758 attribute, \ud0dc\uadf8, \ub9ac\ubdf0 \ub4f1\uacfc \ub9e4\uce6d\ub429\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"our-case"},"Our Case"),(0,r.kt)("p",null,"\ucd94\ucc9c \uc2dc\uc2a4\ud15c \uad6c\ucd95\uc5d0\ub294 NER\uc774 \uc870\uae08 \ub354 \uc801\ud569\ud558\ub2e4\uace0 \ud310\ub2e8\ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098, NER\uc740 labeled data\ub85c\ubd80\ud130\uc758 \ud559\uc2b5\uc774 \ud544\uc694\ud558\uae30 \ub54c\ubb38\uc5d0, \ub370\uc774\ud130\uc14b\uc744 \ubcc4\ub3c4\ub85c \uad6c\ucd95\ud558\uace0 \ud559\uc2b5\uae4c\uc9c0 \ud574\uc57c\ud558\ub294 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"GPT\ub294 \uc790\uc5f0\uc5b4\uc5d0 \ub300\ud574 \ucda9\ubd84\ud788 \uc774\ud574\ud558\uace0 \ucd94\ub860\ud560 \uc218 \uc788\ub294 \ub2a5\ub825\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. GPT\ub97c \ud65c\uc6a9\ud55c\ub2e4\uba74 NER \uc791\uc5c5\uc744 \uc27d\uac8c \ud560 \uc218 \uc788\uc744 \uac70\ub77c \ud310\ub2e8\ub429\ub2c8\ub2e4:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uc74c\uc2dd\uc810\uc5d0 \ub300\ud55c entity\ub97c \uc0ac\uc804\uc5d0 \uc798 \uc815\uc758."),(0,r.kt)("li",{parentName:"ol"},"GPT\uc5d0\uac8c entity\ub97c \ucd94\ucd9c\ud574\ub2ec\ub77c\uace0 \ud504\ub86c\ud504\ud305."),(0,r.kt)("li",{parentName:"ol"},"\uc720\uc800 utterance \ub610\ub294 \uc544\uc774\ud15c description \uc785\ub825."),(0,r.kt)("li",{parentName:"ol"},"\ucd94\ucd9c\ub41c entity\ub97c \ucd94\ucc9c \ubaa8\ub378\uc5d0 \uc785\ub825.")),(0,r.kt)("p",null,"\uc2e4\uc81c, \uac04\uc774 \ud14c\uc2a4\ud2b8 \uacb0\uacfc GPT-3.5, GPT-4 \ubaa8\ub450 \ud6cc\ub96d\ud55c \uacb0\uacfc\ub97c \ub0b4\ub193\uc558\uc2b5\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);