"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[200],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),k=c,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function k(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),c=(r(67294),r(3905));const o={},a="RocketMQ Streams \u6982\u89c8",i={unversionedId:"\u6d41\u8ba1\u7b97/30RocketMQ Streams Overview",id:"\u6d41\u8ba1\u7b97/30RocketMQ Streams Overview",title:"RocketMQ Streams \u6982\u89c8",description:"RocketMQ Streams\u662f\u57fa\u4e8eRocketMQ\u7684\u8f7b\u91cf\u7ea7\u6d41\u8ba1\u7b97\u5f15\u64ce\u3002\u80fd\u4ee5SDK\u65b9\u5f0f\u88ab\u5e94\u7528\u4f9d\u8d56\uff0c\u65e0\u987b\u90e8\u7f72\u590d\u6742\u7684\u6d41\u8ba1\u7b97\u670d\u52a1\u7aef\u5373\u53ef\u83b7\u5f97\u6d41\u8ba1\u7b97\u80fd\u529b\u3002",source:"@site/docs/08-\u6d41\u8ba1\u7b97/30RocketMQ Streams Overview.md",sourceDirName:"08-\u6d41\u8ba1\u7b97",slug:"/\u6d41\u8ba1\u7b97/30RocketMQ Streams Overview",permalink:"/zh/docs/4.x/\u6d41\u8ba1\u7b97/30RocketMQ Streams Overview",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/08-\u6d41\u8ba1\u7b97/30RocketMQ Streams Overview.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Connect\u5b9e\u62182",permalink:"/zh/docs/4.x/\u6570\u636e\u96c6\u6210/29RocketMQ Connect In Action2"},next:{title:"RocketMQ Streams \u6838\u5fc3\u6982\u5ff5",permalink:"/zh/docs/4.x/\u6d41\u8ba1\u7b97/31RocketMQ Streams Concept"}},s={},l=[{value:"\u6574\u4f53\u67b6\u6784",id:"\u6574\u4f53\u67b6\u6784",level:2},{value:"\u6d88\u8d39\u6a21\u578b",id:"\u6d88\u8d39\u6a21\u578b",level:2},{value:"\u72b6\u6001",id:"\u72b6\u6001",level:2},{value:"\u6269\u7f29\u5bb9",id:"\u6269\u7f29\u5bb9",level:2}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,c.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"rocketmq-streams-\u6982\u89c8"},"RocketMQ Streams \u6982\u89c8"),(0,c.kt)("p",null,"RocketMQ Streams\u662f\u57fa\u4e8eRocketMQ\u7684\u8f7b\u91cf\u7ea7\u6d41\u8ba1\u7b97\u5f15\u64ce\u3002\u80fd\u4ee5SDK\u65b9\u5f0f\u88ab\u5e94\u7528\u4f9d\u8d56\uff0c\u65e0\u987b\u90e8\u7f72\u590d\u6742\u7684\u6d41\u8ba1\u7b97\u670d\u52a1\u7aef\u5373\u53ef\u83b7\u5f97\u6d41\u8ba1\u7b97\u80fd\u529b\u3002\n\u56e0\u6b64\u5177\u6709\u8d44\u6e90\u6d88\u8017\u5c11\u3001\u6269\u5c55\u6027\u597d\u3001\u652f\u6301\u6d41\u8ba1\u7b97\u7b97\u5b50\u4e30\u5bcc\u7684\u7279\u70b9\u3002"),(0,c.kt)("h2",{id:"\u6574\u4f53\u67b6\u6784"},"\u6574\u4f53\u67b6\u6784"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"\u603b\u4f53\u67b6\u6784",src:r(7653).Z,width:"900",height:"306"})),(0,c.kt)("p",null,"\u6570\u636e\u4eceRocketMQ\u4e2d\u88abRocketMQ-streams\u6d88\u8d39\uff0c\u7ecf\u8fc7\u5904\u7406\u6700\u7ec8\u88ab\u5199\u56de\u5230RocketMQ\u3002\n\u5982\u679c\u6d41\u5904\u7406\u4efb\u52a1\u4e2d\u542b\u6709\u7b97\u5b50groupBy\uff0c\u5219\u9700\u8981\u5c06\u6570\u636e\u6309\u7167Key\u8fdb\u884c\u5206\u7ec4\uff0c\u5c06\u5206\u7ec4\u6570\u636e\u5199\u5165shuffle topic\u3002\u540e\u7eed\u7b97\u5b50\u4ece\nshuffle topic\u6d88\u8d39\u3002\u5982\u679c\u8fd8\u6d89\u53cacount\u4e4b\u7c7b\u6709\u72b6\u6001\u7b97\u5b50\uff0c\u90a3\u4e48\u8ba1\u7b97\u65f6\u9700\u8981\u8bfb\u5199\u72b6\u6001\uff0c\u5728\u7a97\u53e3\u89e6\u53d1\u4e4b\u540e\u5c06\u8ba1\u7b97\u7ed3\u679c\u5199\u51fa\u3002"),(0,c.kt)("h2",{id:"\u6d88\u8d39\u6a21\u578b"},"\u6d88\u8d39\u6a21\u578b"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"img_2.png",src:r(95577).Z,width:"1781",height:"1008"})),(0,c.kt)("p",null,"\u8ba1\u7b97\u5b9e\u4f8b\u5b9e\u8d28\u4e0a\u662f\u4f9d\u8d56\u4e86Rocket-streams SDK\u7684client\uff0c\u56e0\u6b64\uff0c\u8ba1\u7b97\u5b9e\u4f8b\u6d88\u8d39\u7684MQ\u4f9d\u8d56RocketMQ rebalance\u5206\u914d\uff0c\n\u8ba1\u7b97\u5b9e\u4f8b\u603b\u4e2a\u6570\u4e5f\u4e0d\u80fd\u5927\u4e8e\u6d88\u8d39\u603bMQ\u4e2a\u6570\uff0c\u5426\u5219\u5c06\u6709\u90e8\u5206\u8ba1\u7b97\u5b9e\u4f8b\u5904\u4e8e\u7b49\u5f85\u72b6\u6001\uff0c\u6d88\u8d39\u4e0d\u5230\u6570\u636e\u3002"),(0,c.kt)("p",null,"\u4e00\u4e2a\u8ba1\u7b97\u5b9e\u4f8b\u53ef\u4ee5\u6d88\u8d39\u591a\u4e2aMQ\uff0c\u4e00\u4e2a\u5b9e\u4f8b\u5185\u4e5f\u53ea\u6709\u4e00\u5f20\u8ba1\u7b97\u62d3\u6251\u56fe\u3002"),(0,c.kt)("h2",{id:"\u72b6\u6001"},"\u72b6\u6001"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"img_3.png",src:r(36279).Z,width:"949",height:"1068"})),(0,c.kt)("p",null,"\u5bf9\u4e8e\u6709\u72b6\u6001\u7b97\u5b50\uff0c\u6bd4\u5982count\uff0c\u9700\u8981\u5148\u5bf9count\u7b97\u5b50\u8fdb\u884c\u5206\u7ec4\uff0c\u7136\u540e\u624d\u80fd\u6c42\u548c\u3002\u5206\u7ec4\u7b97\u5b50groupBy\u4f1a\u5c06\u6570\u636e\u6309\u7167\u5206\u7ec4\u7684key\u91cd\u65b0\u5199\u56deRocketMQ\uff0c\u5e76\u4e14\u4f7f\u76f8\u540ckey\u5199\u5165\u540c\u4e00\u5206\u533a\uff08\u8fd9\u4e00\u8fc7\u7a0b\u79f0\u4f5cshuffle\uff09\uff0c\n\u4fdd\u8bc1\u8fd9\u4e2a\u542b\u6709\u76f8\u540ckey\u7684\u6570\u636e\u88ab\u540c\u4e00\u4e2a\u6d88\u8d39\u8005\u6d88\u8d39\u3002 \u72b6\u6001\u672c\u5730\u4f9d\u8d56RocksDB\u52a0\u901f\u8bfb\u53d6\uff0c\u8fdc\u7a0b\u4f9d\u8d56RocketMQ\u505a\u6301\u4e45\u5316\uff0c\u5728\u505acheckpoint\u65f6\u5c06\u672c\u5730RocksDB\u4e2d\u72b6\u6001\u5199\u5165\u5230RocketMQ\u4e2d\u3002\n\u5141\u8bb8\u6d41\u8ba1\u7b97\u4efb\u52a1\u8fd0\u884c\u65f6\uff0c\u53ef\u4ee5\u53ea\u4f9d\u8d56\u672c\u5730\u5b58\u50a8RocksDB, \u53ea\u9700\u8981\u5c06setLocalStorageOnly\u8bbe\u7f6e\u6210true\u5373\u53ef\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u80fd\u5b58\u5728\u72b6\u6001\u4e22\u5931\uff0c\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4f7f\u7528\u3002"),(0,c.kt)("h2",{id:"\u6269\u7f29\u5bb9"},"\u6269\u7f29\u5bb9"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"img.png",src:r(68465).Z,width:"1952",height:"1025"})),(0,c.kt)("p",null,"\u5f53\u8ba1\u7b97\u5b9e\u4f8b\u4ece3\u4e2a\u7f29\u5bb9\u52302\u4e2a\uff0c\u501f\u52a9\u4e8eRocketMQ\u96c6\u7fa4\u6d88\u8d39\u6a21\u5f0f\u4e0b\u7684rebalance\u529f\u80fd\uff0c\u88ab\u6d88\u8d39\u7684\u5206\u7247MQ\u4f1a\u5728\u8ba1\u7b97\u5b9e\u4f8b\u4e4b\u95f4\u91cd\u65b0\u5206\u914d\u3002Instance1\u4e0a\u6d88\u8d39\u7684MQ2\u548cMQ3\u88ab\u5206\u914d\u5230Instance2\u548cInstance3\u4e0a\uff0c\n\u8fd9\u4e24\u4e2aMQ\u7684\u72b6\u6001\u6570\u636e\u4e5f\u9700\u8981\u8fc1\u79fb\u5230Instance2\u548cInstance3\u4e0a\uff0c\u8fd9\u4e5f\u6697\u793a\uff0c\u72b6\u6001\u6570\u636e\u662f\u6839\u636e\u6e90\u6570\u636e\u5206\u7247MQ\u4fdd\u5b58\u7684\uff1b\u6269\u5bb9\u5219\u662f\u521a\u597d\u76f8\u53cd\u7684\u8fc7\u7a0b\u3002"))}u.isMDXComponent=!0},68465:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/RocketMQ-streams\u6269\u7f29\u5bb9-16d030c0e4e01cc7494dec595702e671.png"},7653:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/\u603b\u4f53\u67b6\u6784\u56fe-9b4dc0552a1ca2fed3787e80f0e7a7fc.png"},95577:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/\u6d88\u8d39\u6a21\u578b-d98dfe7e30b9762714b160f2e473cd74.png"},36279:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/\u72b6\u6001\u5b58\u50a8-8eb648534e8a51717e00112058b44007.png"}}]);