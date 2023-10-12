"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||g[d]||l;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={slug:"nextjs-init",title:"Next13 + cloudflare + PWA\ub97c \uc774\uc6a9\ud55c \ucd08\uae30\uc138\ud305",authors:"halang",tags:["frontend","nextjs","pwa","cloudflare"]},s=void 0,o={permalink:"/blog/nextjs-init",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-09-27-nextjs-init/2023-09-27-nextjs-init.md",source:"@site/blog/2023-09-27-nextjs-init/2023-09-27-nextjs-init.md",title:"Next13 + cloudflare + PWA\ub97c \uc774\uc6a9\ud55c \ucd08\uae30\uc138\ud305",description:"\uad50\ub0b4\uc5d0\uc11c \uc5f4\ub9b0 \ub300\ud68c\uc5d0 \ucc38\uc5ec\ud558\uc5ec AI\ub97c \uc774\uc6a9\ud55c \uc11c\ube44\uc2a4\ub97c \uae30\ud68d/\uac1c\ubc1c\uc911\uc5d0 \uc788\ub2e4. \uc774\ubc88 \ud3ec\uc2a4\ud305\uc5d0\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8 \ucd08\uae30 \uc138\ud305(+PWA)\uacfc \ub354\ubd88\uc5b4 cloudflare\ub97c \uc774\uc6a9\ud574 \ubc30\ud3ec\ud558\uae30\uae4c\uc9c0\uc758 \uacfc\uc815\uc744 \uae30\ub85d\ud560 \uc608\uc815\uc774\ub2e4.",date:"2023-09-27T00:00:00.000Z",formattedDate:"2023\ub144 9\uc6d4 27\uc77c",tags:[{label:"frontend",permalink:"/blog/tags/frontend"},{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"pwa",permalink:"/blog/tags/pwa"},{label:"cloudflare",permalink:"/blog/tags/cloudflare"}],readingTime:3.715,hasTruncateMarker:!0,authors:[{name:"\uc774\ud558\ub839",title:"Frontend Engineer",url:"https://github.com/haryung-lee",imageURL:"https://avatars.githubusercontent.com/u/64428916?v=4",key:"halang"}],frontMatter:{slug:"nextjs-init",title:"Next13 + cloudflare + PWA\ub97c \uc774\uc6a9\ud55c \ucd08\uae30\uc138\ud305",authors:"halang",tags:["frontend","nextjs","pwa","cloudflare"]},prevItem:{title:"Conversational Recommender System - Dialogue Management",permalink:"/blog/conversational-recsys-dialogue-management"},nextItem:{title:"Conversational Recommender System Overall Processes",permalink:"/blog/conversational-recsys-overall-processes"}},i={authorsImageUrls:[void 0]},p=[{value:"\uc6b0\uc120 Next \ubd80\ud130 \uc124\uce58",id:"\uc6b0\uc120-next-\ubd80\ud130-\uc124\uce58",level:3},{value:"cloudflare\uc5d0 \ubc30\ud3ec",id:"cloudflare\uc5d0-\ubc30\ud3ec",level:3},{value:"PWA \uc801\uc6a9",id:"pwa-\uc801\uc6a9",level:3},{value:"\ucc38\uace0\uc790\ub8cc",id:"\ucc38\uace0\uc790\ub8cc",level:3}],c={toc:p},u="wrapper";function g(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uad50\ub0b4\uc5d0\uc11c \uc5f4\ub9b0 \ub300\ud68c\uc5d0 \ucc38\uc5ec\ud558\uc5ec AI\ub97c \uc774\uc6a9\ud55c \uc11c\ube44\uc2a4\ub97c \uae30\ud68d/\uac1c\ubc1c\uc911\uc5d0 \uc788\ub2e4. \uc774\ubc88 \ud3ec\uc2a4\ud305\uc5d0\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8 \ucd08\uae30 \uc138\ud305(+",(0,r.kt)("inlineCode",{parentName:"p"},"PWA"),")\uacfc \ub354\ubd88\uc5b4 cloudflare\ub97c \uc774\uc6a9\ud574 \ubc30\ud3ec\ud558\uae30\uae4c\uc9c0\uc758 \uacfc\uc815\uc744 \uae30\ub85d\ud560 \uc608\uc815\uc774\ub2e4."),(0,r.kt)("h3",{id:"\uc6b0\uc120-next-\ubd80\ud130-\uc124\uce58"},"\uc6b0\uc120 Next \ubd80\ud130 \uc124\uce58"),(0,r.kt)("p",null,"\uc0ac\uc2e4 Next \uacf5\uc2dd\ubb38\uc11c\uc5d0 \ub108\ubb34 \uc798 \ub098\uc640\uc788\uc5b4\uc11c \uad73~\uc774 \uae00\ub85c \uc4f8 \ud544\uc694\ub294 \uc5c6\uc744\uac83 \uac19\ub2e4. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/getting-started/installation"},"Getting Started: Installation")),(0,r.kt)("p",null,"\uae30\ubcf8 \uc138\ud305\uc5d0\uc11c\ub294 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),"\uc73c\ub85c \ub418\uc5b4 \uc788\ub294\ub370 \ub098\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"package-lock.json"),"\uc744 \uc9c0\uc6b0\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),"\uc73c\ub85c \uc124\uce58\ud574\uc92c\ub2e4. \ubb3c\ub860 \uba87\uba85\uc774\uc11c \ud558\ub294 \ud504\ub85c\uc81d\ud2b8\uc774\ub2e4 \ubcf4\ub2c8 \ud06c\uae30\uac00 \uc791\uc544 \uc2a4\ud399\ud0c0\ud074\ud55c \ud6a8\ub2a5(?)\uc744 \ubabb\ub290\ub07c\uaca0\uc9c0\ub9cc \uadf8\ub798\ub3c4 2~3\ucd08 \uc815\ub3c4 \ube60\ub974\ub2e4\ub294 \uc810\uc5d0\uc11c \uad73\uc774 \uc548\ubc14\uafc0 \uc774\uc720\ub294 \uc5c6\uc5c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),"\uc740 \uc5c5\ub370\uc774\ud2b8\uac00 \uc548\ub418\uace0 \uc788\ub2e4\uace0 \ud574\uc11c \uc548\uc4f0\ub824\uace0 \ud558\ub294 \uc911\uc774\ub2e4."),(0,r.kt)("h3",{id:"cloudflare\uc5d0-\ubc30\ud3ec"},"cloudflare\uc5d0 \ubc30\ud3ec"),(0,r.kt)("p",null,"\ub098\ub294 \uc6b0\uc120 \ubc30\ud3ec\ubd80\ud130 \ud558\uace0 \ubcf4\ub294 \uc2a4\ud0c0\uc77c\uc774\uc5ec\uc11c \uc774\uac78 \ub450\ubc88\uc9f8 \ub2e8\uacc4\ub85c \ub123\uc5c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. ",(0,r.kt)("inlineCode",{parentName:"strong"},"next.config.js"),"\uc5d0 \uc788\ub294 output \ucd94\uac00 (static site\ub85c \ubc30\ud3ec\ud560 \uacbd\uc6b0)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const nextConfig = {\n  output: 'export'\n}\n")),(0,r.kt)("p",null,"\uc704\ucc98\ub7fc \ucf54\ub4dc\ub97c \uc218\uc815\ud55c \ud6c4 pnpm build\ub97c \ud558\uba74 \uc544\ub798 \uc0ac\uc9c4\ucc98\ub7fc out \ud3f4\ub354\uc5d0 \uc815\uc801 html\uc774 \uc0dd\uc131\ub428\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1",src:n(6996).Z,width:"438",height:"228"})),(0,r.kt)("admonition",{title:"\uc6d0\ub798 \uc608\uc804\uc5d0\ub294 package.json\uc5d0\uc11c script\ub3c4 \ubcc0\uacbd\ud574\uc92c\uc5b4\uc57c \ud588\ub294\ub370(next build && next export) Next13\uc5d0\uc11c\ub294 \ubcc0\uacbd\ub41c\ub4ef \ud558\ub2e4.",type:"tip"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2",src:n(3211).Z,width:"1326",height:"452"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. cloudflare \ud398\uc774\uc9c0\ub85c \uc774\ub3d9")),(0,r.kt)("p",null,"\ud68c\uc6d0\uac00\uc785 & \ub85c\uadf8\uc778 \ud6c4, Workers & Pages \ud0ed\uc744 \ud074\ub9ad"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3",src:n(8036).Z,width:"520",height:"380"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"4",src:n(5883).Z,width:"2642",height:"898"})),(0,r.kt)("p",null,"\uc5ec\uae30\uc5d0 \uc788\ub294 Pages \ud0ed\uc5d0\uc11c Connect to Git\uc744 \ud074\ub9ad"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"5",src:n(2859).Z,width:"2100",height:"1382"})),(0,r.kt)("p",null,"github \uc5f0\uacb0 \ud574\uc8fc\uace0 \uc6d0\ud558\ub294 \ub808\ud3ec\ub97c \uc120\ud0dd\ud55c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"6",src:n(6897).Z,width:"946",height:"622"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"7",src:n(4129).Z,width:"1286",height:"820"})),(0,r.kt)("p",null,"\uc704\uc640 \uac19\uc774 \uc815\ubcf4\ub97c \uc785\ub824\ud574\uc8fc\uba74 \ub05d! \uc544\ub798\uc640 \uac19\uc774 \ubc30\ud3ec\uac00 \uc131\uacf5\uc801\uc73c\ub85c \ub410\uc74c\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"8",src:n(7584).Z,width:"1291",height:"688"})),(0,r.kt)("h3",{id:"pwa-\uc801\uc6a9"},"PWA \uc801\uc6a9"),(0,r.kt)("p",null,"\uc6b0\ub9ac \uc11c\ube44\uc2a4\ub294 \uc0ac\uc6a9\uc790\uc758 \uc704\uce58\ub97c \uc54c\uace0\uc788\uc5b4\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 PWA \uae30\uc220\uc744 \uc0ac\uc6a9\ud574\uc57c\ud55c\ub2e4.  \uc6b0\uc120 ",(0,r.kt)("inlineCode",{parentName:"p"},"next-pwa"),"\ub97c \uc124\uce58\ud574\uc900\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm i next-pwa\n")),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 next.config.js\ub97c \uc544\ub798\uc640 \uac19\uc774 \uc218\uc815\ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const withPWA = require('next-pwa')\n\nconst nextConfig = withPWA({\n  dest: 'public',\n})\n\nmodule.exports = nextConfig\n")),(0,r.kt)("p",null,"\ud544\uc694\ud55c favicon, icon\uc740 src/app \ud558\uc704\uc5d0 \ub123\uc5b4\uc8fc\uc5c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"9",src:n(9229).Z,width:"158",height:"179"})),(0,r.kt)("p",null,"manifest.ts\ub97c \uc544\ub798\uc640 \uac19\uc774 \uc791\uc131\ud574\uc900\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { MetadataRoute } from 'next'\n\nexport default function manifest(): MetadataRoute.Manifest {\n  return {\n    name: 'ppingpong',\n    short_name: 'ppingpong',\n    description: 'ppingpong',\n    start_url: '/',\n    display: 'standalone',\n    background_color: '#fff',\n    theme_color: '#FD8D32',\n    icons: [\n      {\n        src: '/icon.png',\n        sizes: '512x512',\n        type: 'image/png',\n        purpose: \"maskable\"\n      },\n      {\n        src: '/apple-icon.png',\n        sizes: '512x512',\n        type: 'image/png',\n      }\n    ],\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gitignore"),"\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \ucf54\ub4dc\ub97c \ucd94\uac00\ud574\uc8fc\uc5c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"public/sw*\npublic/workbox-*\n")),(0,r.kt)("p",null,"PWA\uac00 \uc81c\ub300\ub85c \uc124\uce58\ub418\uc5c8\ub2e4\uba74 lighthouse \uac80\uc0ac\ub97c \ud1b5\ud574 \uc544\ub798\uc640 \uac19\uc774 PWA\uc5d0 \ucd08\ub85d\uc0c9\uc774 \ub744\ub294\uac78 \ud655\uc778\ud560 \uc218 \uc788\ub2e4!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"10",src:n(1376).Z,width:"785",height:"175"})),(0,r.kt)("p",null,"\ub610\ud55c \uc571\uc744 \uc124\uce58\ud558\uba74 \uc704 \uc0ac\uc9c4\ucc98\ub7fc \ud06c\ub86c\uc571\uc5d0\uc11c\ub3c4 \ud655\uc778\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"11",src:n(571).Z,width:"335",height:"297"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\uc571\uc73c\ub85c \uc5f4\uc5c8\uc744 \ub54c \ubaa8\uc2b5",src:n(3821).Z,width:"2032",height:"1167"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\uc571\uc73c\ub85c \uc5f4\uc5c8\uc744 \ub54c \ubaa8\uc2b5")),(0,r.kt)("h3",{id:"\ucc38\uace0\uc790\ub8cc"},"\ucc38\uace0\uc790\ub8cc"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata"},"Next.js \uacf5\uc2dd\ubb38\uc11c")))}g.isMDXComponent=!0},6996:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-fabe9c2798d9c6f364cbb357a69e0aad.png"},1376:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/10-7a6eb612e2e1725a2c72d50fdd16718e.png"},571:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/11-735b26fa2bf8c35bafdb540c6d92d0b8.png"},3821:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/12-429951222e132815536f663f28656aa2.png"},3211:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-c1fa7da96b519e2aa7e10bd673729140.png"},8036:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-f2b7ca12a187627c053dd00be3f75194.png"},5883:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-b0be70e36eec3b75a27d9c19561a5c6c.png"},2859:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/5-20f4cd35638a08afd85d6531e02d53ff.png"},6897:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/6-ea5283201b7e85a2959d61169e30466a.png"},4129:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/7-b807b5ad3bc6a6e576bfb559c7402a89.png"},7584:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/8-e3d048e691d5d65e3663de003307931e.png"},9229:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/9-70bc3bc2ee23697ce950db83c75a18c2.png"}}]);