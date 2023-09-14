"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),m=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(r),d=a,g=p["".concat(i,".").concat(d)]||p[d]||u[d]||s;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<s;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const s={slug:"recsys-rl-intro",title:"Recommdenr System RL Introduction",authors:"devslem",tags:["ai","rl","recsys"]},l=void 0,o={permalink:"/blog/recsys-rl-intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-09-14-recsys-rl-intro.md",source:"@site/blog/2023-09-14-recsys-rl-intro.md",title:"Recommdenr System RL Introduction",description:"\ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc5d0 \ub300\ud574 \ub354 \uc790\uc138\ud788 \uc774\ud574\ud558\uace0 \uc2f6\ub2e4\uba74 \uc544\ub798 \ud29c\ud1a0\ub9ac\uc5bc \ucf54\ub4dc\ub97c \ucc38\uace0\ud558\uae30 \ubc14\ub78d\ub2c8\ub2e4.",date:"2023-09-14T00:00:00.000Z",formattedDate:"2023\ub144 9\uc6d4 14\uc77c",tags:[{label:"ai",permalink:"/blog/tags/ai"},{label:"rl",permalink:"/blog/tags/rl"},{label:"recsys",permalink:"/blog/tags/recsys"}],readingTime:9.145,hasTruncateMarker:!1,authors:[{name:"DevSlem",title:"AI Research Engineer",url:"https://github.com/DevSlem",imageURL:"https://avatars.githubusercontent.com/u/69196755?v=4",key:"devslem"}],frontMatter:{slug:"recsys-rl-intro",title:"Recommdenr System RL Introduction",authors:"devslem",tags:["ai","rl","recsys"]},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},i={authorsImageUrls:[void 0]},m=[{value:"Recommdenr System Process",id:"recommdenr-system-process",level:2},{value:"Problem: Recommend Items based on Sweetness",id:"problem-recommend-items-based-on-sweetness",level:2},{value:"Reinforcement Learning",id:"reinforcement-learning",level:2},{value:"Baselines",id:"baselines",level:3},{value:"RL Performance",id:"rl-performance",level:3},{value:"References",id:"references",level:2}],c={toc:m},p="wrapper";function u(e){let{components:t,...s}=e;return(0,a.kt)(p,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc5d0 \ub300\ud574 \ub354 \uc790\uc138\ud788 \uc774\ud574\ud558\uace0 \uc2f6\ub2e4\uba74 \uc544\ub798 \ud29c\ud1a0\ub9ac\uc5bc \ucf54\ub4dc\ub97c \ucc38\uace0\ud558\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tutorial Code: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DevSlem/recommender-system-rl-tutorial"},"DevSlem/recommender-system-rl-tutorial (Github)"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ucd94\ucc9c \uc2dc\uc2a4\ud15c")," (recommender system)\uc740 \uc720\uc800\uc758 \uc120\ud638\ub3c4 (preference)\uc5d0 \ub9de\ub294 \uc544\uc774\ud15c\uc744 \uc81c\uacf5\ud558\ub294 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4. \uc774\ub294 \uc720\uc800-\uc544\uc774\ud15c \uc0c1\ud638\uc791\uc6a9 \ud788\uc2a4\ud1a0\ub9ac\ub97c \uace0\ub824\ud574 \uc774\ub8e8\uc5b4\uc9c0\ub294\ub370, \ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc774 \uc720\uc800\uc5d0\uac8c \uc544\uc774\ud15c\uc744 \uc81c\uacf5\ud558\uba74 \uc720\uc800\ub294 \uc774\uc5d0 \ub300\ud574 ",(0,a.kt)("strong",{parentName:"p"},"\ud53c\ub4dc\ubc31")," (\uc2a4\ud0b5, \ud074\ub9ad, \uad6c\ub9e4 \ub4f1)\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc720\ud29c\ube0c, \ub137\ud50c\ub9ad\uc2a4 \ub4f1 \uc218 \ub9ce\uc740 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc774\ub7ec\ud55c \ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc744 \ub3c4\uc785\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(8701).Z,width:"668",height:"374"})),(0,a.kt)("p",null,"\ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc740 \uba38\uc2e0 \ub7ec\ub2dd (machine learning)\uc744 \ud1b5\ud574 \uad6c\ucd95\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c0\ub3c4\ud559\uc2b5 (supervised learning)\uacfc \uac19\uc740 \uae30\uc874 \ubc29\ubc95\ub4e4\uc740 \ub300\uccb4\uc801\uc73c\ub85c ",(0,a.kt)("strong",{parentName:"p"},"\uc720\uc800\uc640 \ucd94\ucc9c \ubaa8\ub378 \uc0ac\uc774\uc758 \uc0c1\ud638\uc791\uc6a9\uc744 \ubb34\uc2dc"),"\ud574 \ubd88\ub9cc\uc871\uc2a4\ub7ec\uc6b4 \uacb0\uacfc\ub97c \ub0b4\ub193\uc2b5\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c, \ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc740 \uc778\ud130\ub809\ud2f0\ube0c\ud55c \ud504\ub85c\uc138\uc2a4\ub85c ",(0,a.kt)("strong",{parentName:"p"},"\uc5f0\uc18d\uc801\uc778 \uc758\uc0ac \uacb0\uc815 \ubb38\uc81c")," (sequential decision making problem)\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c ",(0,a.kt)("strong",{parentName:"p"},"\uac15\ud654\ud559\uc2b5")," (reinforcement learning)\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucd5c\uc801\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798 \uadf8\ub9bc\uc740 \uc9c0\ub3c4\ud559\uc2b5\uacfc \uac15\ud654\ud559\uc2b5 \uae30\ubc18 \ubc29\ubc95 \uc0ac\uc774\uc758 \uc131\ub2a5 \ube44\uad50 \ud14c\uc774\ube14\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5658).Z,width:"1572",height:"392"})),(0,a.kt)("p",null,"\uc774 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 \uac15\ud654\ud559\uc2b5\uc73c\ub85c \ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc744 \uad6c\ucd95\ud558\ub294 \uac83\uc5d0 \ub300\ud55c \uac04\ub2e8\ud55c \uc18c\uac1c\ub97c \ud558\ub824\uace0 \ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"recommdenr-system-process"},"Recommdenr System Process"),(0,a.kt)("p",null,"\ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc740 \ud06c\uac8c \ub450 \uacfc\uc815\uc73c\ub85c \ub098\ub269\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"candidate generation"),(0,a.kt)("li",{parentName:"ol"},"ranking and recommendation")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3907).Z,width:"844",height:"540"})),(0,a.kt)("p",null,"candidate generation\uc740 \uc218\ub9ce\uc740 \uc544\uc774\ud15c \uc911 \uc77c\ubd80\ubd84\uc744 \ucd94\ucd9c\ud558\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4. \ub108\ubb34 \ub9ce\uc740 \uc544\uc774\ud15c\uc744 \ubaa8\ub378\uc5d0 \uc785\ub825\ud558\ub294 \uac83\uc740 \ube44\ud6a8\uc728\uc801\uc774\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc804\uc5d0 \uac78\ub7ec\ub0b4\ub294 \uc791\uc5c5\uc785\ub2c8\ub2e4. \uc774 \ub54c \ud6c4\ubcf4 \uc544\uc774\ud15c set\uc744 ",(0,a.kt)("strong",{parentName:"p"},"document"),"\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4. ranking and recommendation\uc740 document \uc544\uc774\ud15c \uc911\uc5d0\uc11c \uc2e4\uc81c \uc720\uc800\uc5d0\uac8c \ucd94\ucc9c\ud560 \uc544\uc774\ud15c\uc744 \uc120\ud0dd\ud558\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 \uba38\uc2e0 \ub7ec\ub2dd\uacfc \uac19\uc740 \uae30\ubc95\uc774 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. document\ub85c\ubd80\ud130 \uc120\ud0dd\ub41c \uc544\uc774\ud15c set\uc744 ",(0,a.kt)("strong",{parentName:"p"},"slate"),"\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/google-research/recsim"},"Google RecSim"),"\uc740 \uc720\uc800\uc640\uc758 \uc5f0\uc18d\uc801\uc778 \uc0c1\ud638\uc791\uc6a9\uc744 \uc9c0\uc6d0\ud558\ub294 \ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc5d0 \ub300\ud55c \uc2dc\ubbac\ub808\uc774\uc158 environment\ub85c, youtube \ucd94\ucc9c \uc54c\uace0\ub9ac\uc998\uc744 \uc704\ud574 \uac1c\ubc1c\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc544\ub798\ub294 RecSim \uc544\ud0a4\ud14d\uccd0\ub97c \ub098\ud0c0\ub0b4\ub294 \uadf8\ub9bc\uc73c\ub85c \uc9c0\uae08\uae4c\uc9c0 \uc124\uba85\ud55c \ub0b4\uc6a9\uc744 \ud55c\ubc88\uc5d0 \ubcf4\uc5ec\uc8fc\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(8351).Z,width:"1032",height:"686"})),(0,a.kt)("p",null,"\uc790, \uc774\uc81c toy \ubb38\uc81c\ub97c \ubcf4\uace0 \uc65c \uac15\ud654\ud559\uc2b5\uc774 \uc720\uc6a9\ud55c\uc9c0 \uc54c\uc544\ubd05\uc2dc\ub2e4."),(0,a.kt)("h2",{id:"problem-recommend-items-based-on-sweetness"},"Problem: Recommend Items based on Sweetness"),(0,a.kt)("p",null,"\ucd08\ucf5c\ub9bf\uacfc \ucf00\uc77c (\ucc44\uc18c)\uc774 \uc5ec\ub7ec \uac1c \uc788\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \ucd08\ucf5c\ub9bf\uacfc \ucf00\uc77c \uc911 \uc5b4\ub5a4 \uac83\uc744 \ucd94\ucc9c\ud574\uc57c \uc720\uc800\uac00 \ub9cc\uc871\ud560\uae4c\ub97c \uace0\ubbfc\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ucd08\ucf5c\ub9bf\uc740 \ub2e8 \ub9db\uc774\uace0, \ucf00\uc77c\uc740 \uc4f4 \ub9db\uc774\uae30 \ub54c\ubb38\uc5d0 \ucd08\ucf5c\ub9bf\uacfc \ucf00\uc77c\uc744 \ub2ec\ucf64\ud568 (sweetness)\ub85c \ub098\ud0c0\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \ub2e8\uc21c\ud568\uc744 \uc704\ud574 \ub2ec\ucf64\ud568\ub9cc \uace0\ub824\ud569\uc2dc\ub2e4. \uc720\uc800\ub4e4\uc740 \ub300\uccb4\uc801\uc73c\ub85c \uc4f4 \uc74c\uc2dd\ubcf4\ub2e4\ub294 \ub2ec\ucf64\ud55c \uc74c\uc2dd\uc744 \uc120\ud638\ud560 \uac83\uc785\ub2c8\ub2e4. \uc6b0\ub9ac\uac00 \uc0dd\uac01\ud574\ubcfc \uc218 \uc788\ub294 \ubc29\ubc95\uc740 \ub2ec\ucf64\ud55c \uc74c\uc2dd\ub9cc \ucd94\ucc9c\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ub2ec\ucf64\ud55c \uc74c\uc2dd\ub9cc \ucd94\ucc9c\ud558\ub2e4\ubcf4\uba74 \uc720\uc800\ub4e4\uc740 \uc810\uc810 \ub9cc\uc871\uc2a4\ub7ec\uc6cc\ud558\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4. \uc65c\ub0d0\ud558\uba74 \uc790\uc2e0\uc758 \uac74\uac15 \uc5ed\uc2dc \uc0dd\uac01\ud558\uae30 \ub584\ubb38\uc774\uc8e0. \ub530\ub77c\uc11c \uc720\uc800\ub4e4\uc740 \ub2ec\ucf64\ud55c \uc74c\uc2dd\ubcf4\ub2e4\ub294 \uac74\uac15\uc5d0 \uc88b\uc740 \ub2ec\ucf64\ud558\uc9c0 \uc54a\uc740 \uc74c\uc2dd\uc744 \uc810\uc810 \ub354 \uc120\ud638\ud558\uac8c \ub420 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ub300\uccb4\uc801\uc73c\ub85c \ub2ec\ucf64\ud55c \uc74c\uc2dd\uc744 \uc120\ud638\ud558\ub294 \uc720\uc800\ub4e4\uc774 \uc9c0\uc18d\uc801\uc73c\ub85c \uc4f4 \uc74c\uc2dd\ub9cc \ucd94\ucc9c \ubc1b\ub294\ub2e4\uba74 \uc5ed\uc2dc \ubd88\ub9cc\uc871\uc2a4\ub7fd\uaca0\uc8e0. \uc774\ub7ec\ud55c \uc694\uc18c\ub4e4\uc744 \uc885\ud569\ud558\uba74 \uc6b0\ub9ac\uc758 \uac00\uc124\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4: ",(0,a.kt)("strong",{parentName:"p"},"\uc720\uc800\ub4e4\uc740 \ub300\uccb4\uc801\uc73c\ub85c \ub2ec\ucf64\ud55c \uc74c\uc2dd\uc744 \uc120\ud638\ud558\uc9c0\ub9cc, \uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc810\uc810 \ub2ec\ucf64\ud55c \uc74c\uc2dd\uc758 \uc120\ud638\ub3c4\uac00 \ub0b4\ub824\uac00\uae30 \ub54c\ubb38\uc5d0 \uc911\uac04 \uc911\uac04 \ub2ec\ucf65\ud558\uc9c0 \uc54a\uc740 \uc74c\uc2dd\ub3c4 \ucd94\ucc9c \ubc1b\uae38 \uc6d0\ud55c\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(183).Z,width:"1300",height:"686"})),(0,a.kt)("h2",{id:"reinforcement-learning"},"Reinforcement Learning"),(0,a.kt)("p",null,"\uc704 \ubb38\uc81c\ub97c \uac15\ud654\ud559\uc2b5\uc73c\ub85c \ud559\uc2b5\ud558\uae30 \uc704\ud574 \ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc758 \uc694\uc18c\ub4e4\uc744 \uc798 \uc815\uc758\ud574\uc57c\ud569\ub2c8\ub2e4. \ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc758 \uad81\uadf9\uc801\uc778 \ubaa9\uc801\uc740 \uc720\uc800\uc758 engagement\ub97c maximize\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"Objective: Maximize user's engagement."),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c engagment\ub780 \ub2e8\uc5b4\uac00 \ub2e4\uc18c \ubaa8\ud638\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. engagement\ub780 \ucd94\ucc9c\ub41c \uc544\uc774\ud15c\uc5d0 \ub300\ud55c \uc0c1\ud638\uc791\uc6a9\uc774\ub098 \uc720\uc800\uc758 \ud589\ub3d9\uc73c\ub85c, ",(0,a.kt)("strong",{parentName:"p"},"\uc720\uc800\uc758 \ud765\ubbf8\ub098 \uad00\uc2ec\uc744 \uc5bc\ub9c8\ub098 \ud6a8\uacfc\uc801\uc73c\ub85c \ub04c\uace0 \uc788\ub294\uc9c0\ub97c \ub098\ud0c0\ub0b4\ub294 \uce21\uc815\uac12"),"\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uba74, \ucd94\ucc9c\ub41c \ub3d9\uc601\uc0c1\uc744 \uc2dc\uccad\ud55c \uc2dc\uac04 \uc815\ub3c4 \uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\uc81c \ub2e4\uc74c\uc744 \uc815\uc758\ud574\ubd05\uc2dc\ub2e4:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Observation: sweetness of 20 items"),(0,a.kt)("li",{parentName:"ul"},"Action: recommends 1 item"),(0,a.kt)("li",{parentName:"ul"},"Reward: represents the engagement")),(0,a.kt)("p",null,"observation\uc740 \ucd94\ucc9c \ubaa8\ub378\uc774 \uad00\ucc30\ud558\ub294 \uc815\ubcf4\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \ub2e8\uc21c\ud568\uc744 \uc704\ud574 \uc720\uc800 feature\ub294 \uace0\ub824\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc720\uc800 feature\ub294 \uc2e4\uc81c\ub85c \ub9e4\uc6b0 \uc911\uc694\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc131\ubcc4\uc744 \uace0\ub824 \uc2dc, \uc0c1\ub300\uc801\uc73c\ub85c \uc5ec\uc131\uc774 \ub0a8\uc131\ubcf4\ub2e4 \ub2ec\ucf64\ud55c \uc74c\uc2dd\uc744 \uc120\ud638\ud558\ubbc0\ub85c \uc774\ub294 \ucd94\ucc9c \uc2dc \uc911\uc694\ud55c feature\uac00 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"baselines"},"Baselines"),(0,a.kt)("p",null,"\uba3c\uc800, baseline\uc73c\ub85c \uac00\uc7a5 \ub2ec\ucf64\ud55c \uc544\uc774\ud15c\ub9cc \ucd94\ucc9c\ud558\ub294 sweetest policy\uc640 \ub79c\ub364\ud558\uac8c \ucd94\ucc9c\ud558\ub294 random policy\ub97c \uc0ac\uc6a9\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uc544\ub798\ub294 \ub450 \ubca0\uc774\uc2a4\ub77c\uc778\uc758 \uc2dc\uac04\uc5d0 \ub530\ub978 reward \ubcc0\ud654\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1986).Z,width:"680",height:"524"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3169).Z,width:"680",height:"524"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sweetest policy cumulative reward: 56.93+/-1.44"),(0,a.kt)("li",{parentName:"ul"},"random policy cumulative reward: 98.41+/-24.32")),(0,a.kt)("p",null,"\uc720\uc800\ub4e4\uc740 \ub300\uccb4\uc801\uc73c\ub85c \ub2ec\ucf64\ud55c \uc74c\uc2dd\uc744 \uc120\ud638\ud558\uc9c0\ub9cc, \uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc810\uc810 \ub2ec\ucf64\ud55c \uc74c\uc2dd\uc758 \uc120\ud638\ub3c4\uac00 \ub0b4\ub824\uac10\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. cumulative reward\ub294 \ubaa8\ub4e0 time step\ub3d9\uc548 \ud68d\ub4dd\ud55c reward\uc758 \ucd1d\ud569\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"rl-performance"},"RL Performance"),(0,a.kt)("p",null,"multi-armed bandit (MAB)\ub294 \uae30\uc874\uc5d0 \ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc5d0 \ub9ce\uc774 \uc0ac\uc6a9\ub418\ub358 \ubc29\ubc95\uc785\ub2c8\ub2e4. short-term RL\uc740 \uc989\uac01\uc801\uc778 reward\ub9cc \uace0\ub824\ud558\ub294 \uac15\ud654\ud559\uc2b5 \ubc29\ubc95\uc73c\ub85c, MAB\uc640 \uc720\uc0ac\ud55c \uc18d\uc131\uc744 \uc9c0\ub2c8\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c short-term RL\uc744 \ud1b5\ud574 MAB\uc758 \ubb38\uc81c\uc810\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ubc18\ub300\ub85c long-term RL\uc740 future reward\ub3c4 \uace0\ub824\ud574 \ud559\uc2b5\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \uc5f0\uc18d\uc801\uc778 \uc758\uc0ac \uacb0\uc815 \ubb38\uc81c\uc5d0\uc11c future reward\uc5d0 \ub300\ud55c \uace0\ub824\ub294 \ub9e4\uc6b0 \uc911\uc694\ud569\ub2c8\ub2e4. \ud604\uc7ac \uc120\ud0dd\ud55c action\uc774 future reward\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(8987).Z,width:"760",height:"604"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"short-term RL: discount factor = 0"),(0,a.kt)("li",{parentName:"ul"},"long-term RL: discount factor = 0.99")),(0,a.kt)("p",null,"short-term RL\uc740 \ud559\uc2b5 \uacb0\uacfc sweetest policy\uc640 \uc720\uc0ac\ud574\uc9d1\ub2c8\ub2e4. \uc774\ub294 \ub108\ubb34 \ub2f9\uc5f0\ud55c\uac8c, \uc720\uc800\ub4e4\uc740 \ub300\uccb4\uc801\uc73c\ub85c \ub2ec\ucf64\ud55c \uc74c\uc2dd\uc744 \uc120\ud638\ud558\uae30 \ub54c\ubb38\uc5d0 \uc989\uac01\uc801\uc778 reward\uac00 \ub192\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. long-term RL\uc740 future reward\ub3c4 \uace0\ub824\ud558\uae30 \ub54c\ubb38\uc5d0 \uacb0\uacfc\uc801\uc73c\ub85c cumulative reward\uac00 \uac00\uc7a5 \ub192\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,"[1]",' Anyscale "',(0,a.kt)("a",{parentName:"p",href:"https://github.com/anyscale/academy/tree/main/ray-rllib/acm_recsys_tutorial_2022"},"ACM RecSys 2022 Tutorial"),'"   (Github).',(0,a.kt)("br",{parentName:"p"}),"\n","[2]",' Ie, Eugene, et al. "',(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1909.04847"},"Recsim: A configurable simulation platform for recommender systems."),'  " arXiv preprint arXiv:1909.04847 (2019).',(0,a.kt)("br",{parentName:"p"}),"\n","[3]",' Lin, Yuanguo, et al. "',(0,a.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/abstract/document/10144689?casa_token=bzipVczGG2wAAAAA:gkdWb-kk6v_bBlzY7Y3JLzwtsuWBrkw72iJE9Nm-r0uCB9ZDi_FCA-kwxbVTYlQjuOEi1BsW"},"A survey on reinforcement learning for recommender systems."),'" IEEE Transactions on Neural Networks and Learning Systems (2023).',(0,a.kt)("br",{parentName:"p"}),"\n","[4]"," Sutton, Richard S., and Andrew G. Barto. Reinforcement learning: An introduction. MIT press, 2018."))}u.isMDXComponent=!0},3169:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/random-policy-rewards-11dcf84163ae10b2a5af0be616e7fec3.png"},8351:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/recsim-5dfba8e67865e1ed9962ac6af1123598.png"},5658:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/recsys-performance-table-a04cf8567c3d7ca13e8da3c6403217af.png"},3907:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/recsys-process-3cdbcb35c9416067a3291e9592051b64.png"},8701:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/recsys-d473d6e4f27bdd6eda6df5bef2d65719.png"},8987:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rl-performance-454a8682cb3246560c5639444400f599.png"},1986:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sweetest-policy-rewards-9fc49136d81b6928377b8cae72f1dd95.png"},183:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/user-choice-model-0a4b9ee6900e861beb837f4e049db2ab.png"}}]);