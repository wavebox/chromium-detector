!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.chromiumDetector=t():e.chromiumDetector=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,r)=>{for(var s in r)e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>m,getBrowserInfo:()=>u});const r=e=>"function"==typeof e&&"function"==typeof e.toString&&e.toString().includes("[native code]"),s=e=>"object"==typeof e,a=e=>void 0!==document.createElement("div").style[e],o=(e,t)=>{const r=document.createElement("div");return r.style[e]=t,r.style[e]===t},n=e=>{try{return document.querySelector(e),!0}catch(e){return!1}},c={90:{releaseDate:"Pre-release",isPreRelease:!0,tests:[{url:"https://chromestatus.com/feature/5638444178997248",name:'Add support for CSS properties "overflow: clip" and "overflow-clip-margin"',test:()=>o("overflow","clip")},{url:"https://chromestatus.com/feature/5737185317748736",name:"Support specifying width/height on <source> elements for <picture>",test:()=>void 0!==document.createElement("source").width}]},89:{releaseDate:"2021-03-02",tests:[{url:"https://chromestatus.com/feature/5172464636133376",name:"WebHID support",optional:!0,test:()=>s(window.navigator.hid)},{url:"https://chromestatus.com/feature/6577673212002304",name:"Web Serial API",optional:!0,test:()=>s(window.navigator.serial)},{url:"https://chromestatus.com/feature/5685965186138112",name:"performance.measureUserAgentSpecificMemory()",test:()=>r(window.performance.measureUserAgentSpecificMemory)}]},88:{releaseDate:"2021-01-19",tests:[{url:"https://chromestatus.com/feature/5445716612743168",name:"CSS Selectors 4 Pseudo-Classes :is(), :where()",test:()=>n(":where(div)")},{url:"https://chromestatus.com/feature/5738050678161408",name:"CSS aspect-ratio property",test:()=>a("aspectRatio")}]},87:{releaseDate:"2020-11-17",tests:[{url:"https://chromestatus.com/feature/6243382101803008",name:"Atomics.waitAsync",test:()=>r(Atomics.waitAsync)},{url:"https://chromestatus.com/feature/5658847691669504",name:"Cookie Store API",test:()=>s(window.cookieStore)},{url:"https://chromestatus.com/features/5719830432841728",name:"Is-Input-Pending",test:()=>r(window.navigator.scheduling.isInputPending)},{url:"https://chromestatus.com/feature/5747636764147712",name:"text-decoration-thickness",test:()=>a("textDecorationThickness")}]},86:{releaseDate:"2020-10-06",tests:[{url:"https://chromestatus.com/feature/6710566854852608",name:"CSS ::marker pseudo-element",test:()=>n("::marker")},{url:"https://chromestatus.com/feature/5823526732824576",name:"CSS Selectors 4 Pseudo-Class :focus-visible",test:()=>n(":focus-visible")},{url:"https://chromestatus.com/feature/6284708426022912",name:"File System Access",optional:!0,test:()=>r(window.showOpenFilePicker)},{url:"https://chromestatus.com/feature/5742134990733312",name:"HTMLMediaElement.preservesPitch",test:()=>void 0!==document.createElement("video").preservesPitch},{url:"https://chromestatus.com/feature/6143552666992640",name:"ParentNode.replaceChildren() Method",test:()=>r(document.body.replaceChildren)}]},85:{releaseDate:"2020-08-25",tests:[{url:"https://chromestatus.com/feature/4613920211861504",name:"CSS content-visibility property",test:()=>a("contentVisibility")},{url:"https://chromestatus.com/feature/4688138070917120",name:"CSS counter-set",test:()=>a("counterSet")},{url:"https://chromestatus.com/feature/5574922384441344",name:"Promise.any and AggregateError",test:()=>r(Promise.any)},{url:"https://chromestatus.com/feature/6040389083463680",name:"String.prototype.replaceAll",test:()=>r("".replaceAll)}]},84:{releaseDate:"2020-07-14",tests:[{url:"https://chromestatus.com/feature/5892186633666560",name:"JavaScript weak references",test:()=>r(window.WeakRef)},{url:"https://chromestatus.com/feature/4636879949398016",name:"Screen Wake Lock API",test:()=>s(window.navigator.wakeLock)},{url:"https://chromestatus.com/feature/4715298156445696",name:"Unprefixed appearance CSS property",test:()=>a("appearance")},{url:"https://chromestatus.com/feature/6249925820022784",name:"Unprefixed ruby-position CSS property",test:()=>a("rubyPosition")},{url:"https://chromestatus.com/feature/5644990145363968",name:"revert keyword",test:()=>o("display","revert")}]},83:{releaseDate:"2020-05-19",tests:[{url:"https://chromestatus.com/feature/4757990523535360",name:"Barcode Detection API",optional:!0,test:()=>r(window.BarcodeDetector)},{url:"https://chromestatus.com/feature/5913213940006912",name:"auto keyword for -webkit-appearance CSS property CSS",test:()=>o("webkitAppearance","auto")},{url:"https://chromestatus.com/feature/5737051062272000",name:"CSS contain-intrinsic-size",test:()=>a("containIntrinsicSize")},{url:"https://chromestatus.com/feature/6335927192387584",name:"HTMLVideoElement.requestVideoFrameCallback()",test:()=>r(document.createElement("video").requestVideoFrameCallback)}]},81:{releaseDate:"2020-04-07",tests:[{url:"https://chromestatus.com/feature/4965112605573120",name:"Intl.DisplayNames",test:()=>r(window.Intl.DisplayNames)},{url:"https://chromestatus.com/feature/5440098147500032",name:"Streams API: WritableStream close()",test:()=>r((new window.WritableStream).close)},{url:"https://chromestatus.com/feature/6313474512650240",name:"Support for CSS image-orientation property",test:()=>a("imageOrientation")}]},80:{releaseDate:"2020-02-04",tests:[{url:"https://chromestatus.com/feature/5668660729348096",name:"line-break: anywhere",test:()=>o("lineBreak","anywhere")},{url:"https://chromestatus.com/feature/5687791428042752",name:"HTMLVideoElement.getVideoPlaybackQuality()",test:()=>r(document.createElement("video").getVideoPlaybackQuality)},{url:"https://chromestatus.com/feature/5126089347170304",name:"overflow-wrap: anywhere",test:()=>o("overflowWrap","anywhere")}]},79:{releaseDate:"2019-12-10",tests:[{url:"https://chromestatus.com/feature/5714277878988800",name:"CSS min(), max() and clamp()",test:()=>o("height","min(1px, 10px)")},{url:"https://chromestatus.com/feature/5685958032752640",name:"font-optical-sizing",test:()=>a("fontOpticalSizing")}]}},u=()=>{const e=Object.keys(c).sort(((e,t)=>parseInt(e)-parseInt(t))),t=e.reduce(((e,t)=>{const{tests:r,releaseDate:s,isPreRelease:a}=c[t];return e[t]={pass:0,result:!0,tests:[],releaseDate:s,isPreRelease:!0===a},r.forEach((({url:r,name:s,test:a,optional:o})=>{const n={url:r,name:s,optional:!0===o};try{n.test=a()}catch(e){n.test=!1}n.test?e[t].pass++:!0!==o&&(e[t].result=!1),e[t].tests.push(n)})),e}),{}),r=e.find(((r,s)=>{if(s===e.length-1)return!0;switch(t[e[s+1]].result){case!1:return!0;default:return!1}})),s=e.some((e=>0!==t[e].pass&&t[e].pass!==t[e].tests.length&&t[e].pass!==t[e].tests.length-1));return{version:r||"unknown",couldBeOlder:r===e[0],couldBeNewer:r===e[e.length-1],tests:t,isChromium:!s}},m={getBrowserInfo:u};return t})()}));