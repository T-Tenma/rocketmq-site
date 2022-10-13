"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||k[d]||c;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>k,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const c={},a="Concept",i={unversionedId:"\u6570\u636e\u96c6\u6210/26RocketMQ Connect Concept",id:"\u6570\u636e\u96c6\u6210/26RocketMQ Connect Concept",title:"Concept",description:"Connector",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07-\u6570\u636e\u96c6\u6210/26RocketMQ Connect Concept.md",sourceDirName:"07-\u6570\u636e\u96c6\u6210",slug:"/\u6570\u636e\u96c6\u6210/26RocketMQ Connect Concept",permalink:"/docs/4.x/\u6570\u636e\u96c6\u6210/26RocketMQ Connect Concept",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/07-\u6570\u636e\u96c6\u6210/26RocketMQ Connect Concept.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Connect Overview",permalink:"/docs/4.x/\u6570\u636e\u96c6\u6210/25RocketMQ Connect Overview"},next:{title:"Quick Start",permalink:"/docs/4.x/\u6570\u636e\u96c6\u6210/27RocketMQ Connect Quick Start"}},s={},l=[{value:"Connector",id:"connector",level:2},{value:"Task",id:"task",level:2},{value:"Worker",id:"worker",level:2}],p={toc:l};function k(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concept"},"Concept"),(0,o.kt)("h2",{id:"connector"},"Connector"),(0,o.kt)("p",null,"\u8fde\u63a5\u5668\uff0c\u5b9a\u4e49\u6570\u636e\u4ece\u54ea\u590d\u5236\u5230\u54ea\uff0c\u662f\u4ece\u6e90\u6570\u636e\u7cfb\u7edf\u8bfb\u53d6\u6570\u636e\u5199\u5165RocketMQ\uff0c\u8fd9\u79cd\u662fSourceConnector\n\uff0c\u6216\u4eceRocketMQ\u8bfb\u6570\u636e\u5199\u5165\u5230\u76ee\u6807\u7cfb\u7edf,\u8fd9\u79cd\u662fSinkConnector\u3002Connector\u51b3\u5b9a\u9700\u8981\u521b\u5efa\u4efb\u52a1\u7684\u6570\u91cf\uff0c\u4eceWorker\u63a5\u6536\u914d\u7f6e\u4f20\u9012\u7ed9\u4efb\u52a1\u3002"),(0,o.kt)("h2",{id:"task"},"Task"),(0,o.kt)("p",null,"\u662fConnector\u4efb\u52a1\u5206\u7247\u7684\u6700\u5c0f\u5206\u914d\u5355\u4f4d\uff0c\u662f\u5b9e\u9645\u5c06\u6e90\u6570\u636e\u6e90\u6570\u636e\u590d\u5236\u6570\u636e\u5230RocketMQ\uff08SourceTask\uff09\uff0c\u6216\u8005\u5c06\u6570\u636e\u4eceRocketMQ\u8bfb\u53d6\u6570\u636e\u5199\u5165\u5230\u76ee\u6807\u7cfb\u7edf\uff08SinkTask\uff09\u771f\u6b63\u7684\u6267\u884c\u8005\uff0cTask\u662f\u65e0\u72b6\u6001\u7684\u53ef\u4ee5\u52a8\u6001\u7684\u542f\u505c\u4efb\u52a1\uff0c\u591a\u4e2aTask\u662f\u53ef\u4ee5\u5e76\u884c\u6267\u884c\u7684\uff0cConnector\u590d\u5236\u6570\u636e\u7684\u5e76\u884c\u5ea6\u4e3b\u8981\u4f53\u73b0\u5728Task\u6570\u91cf\u4e0a\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RocketMQ Connect",src:n(59680).Z,width:"1091",height:"321"})),(0,o.kt)("p",null,"\u901a\u8fc7Connect\u7684Api\u4e5f\u53ef\u4ee5\u770b\u5230Connector\u548cTask\u5404\u81ea\u7684\u804c\u8d23\uff0cConnector\u5b9e\u73b0\u65f6\u5c31\u5df2\u7ecf\u786e\u5b9a\u6570\u636e\u590d\u5236\u7684\u6d41\u5411\uff0cConnector\u63a5\u6536\u6570\u636e\u6e90\u76f8\u5173\u7684\u914d\u7f6e\uff0ctaskClass\u83b7\u53d6\u9700\u8981\u521b\u5efa\u7684\u4efb\u52a1\u7c7b\u578b\uff0c\u901a\u8fc7taskConfigs\u6307\u5b9a\u6700\u5927\u4efb\u52a1\u6570\u91cf\uff0c\u5e76\u4e14\u4e3atask\u5206\u914d\u597d\u914d\u7f6e\u3002task\u62ff\u5230\u914d\u7f6e\u4ee5\u540e\u4ece\u6570\u636e\u6e90\u53d6\u6570\u636e\u5199\u5165\u5230\u76ee\u6807\u5b58\u50a8\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0b\u9762\u7684\u4e24\u5f20\u56fe\u53ef\u4ee5\u6e05\u695a\u7684\u770b\u5230\uff0cConnecotr\u548cTask\u5904\u7406\u57fa\u672c\u6d41\u7a0b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RocketMQ Connect",src:n(30424).Z,width:"926",height:"388"})),(0,o.kt)("h2",{id:"worker"},"Worker"),(0,o.kt)("p",null,"worker \u8fdb\u7a0b\u662fConnector\u548cTask\u8fd0\u884c\u73af\u5883\uff0c\u5b83\u63d0\u4f9bRESTFull\u80fd\u529b\uff0c\u63a5\u53d7HTTP\u8bf7\u6c42\uff0c\u5c06\u83b7\u53d6\u5230\u7684\u914d\u7f6e\u4f20\u9012\u7ed9Connector\u548cTask\u3002\n\u9664\u6b64\u4e4b\u5916\u5b83\u8fd8\u8d1f\u8d23\u542f\u52a8Connector\u548cTask\uff0c\u4fdd\u5b58Connector\u914d\u7f6e\u4fe1\u606f\uff0c\u4fdd\u5b58Task\u540c\u6b65\u6570\u636e\u7684\u4f4d\u70b9\u4fe1\u606f\uff0c\u8d1f\u8f7d\u5747\u8861\u80fd\u529b\uff0cConnect\u96c6\u7fa4\u9ad8\u53ef\u7528\uff0c\u6269\u7f29\u5bb9\uff0c\u6545\u969c\u5904\u7406\u4e3b\u8981\u4f9d\u8d56Worker\u7684\u8d1f\u8d23\u5747\u8861\u80fd\u529b\u5b9e\u73b0\u7684\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RocketMQ Connect",src:n(81206).Z,width:"551",height:"471"})),(0,o.kt)("p",null,"\u4ece\u4e0a\u9762\u9762\u8fd9\u5f20\u56fe\uff0c\u770b\u5230Worker\u901a\u8fc7\u63d0\u4f9b\u7684REST Api\u63a5\u6536http\u8bf7\u6c42\uff0c\u5c06\u63a5\u6536\u5230\u7684\u914d\u7f6e\u4fe1\u606f\u4f20\u9012\u7ed9\u914d\u7f6e\u7ba1\u7406\u670d\u52a1\uff0c\u914d\u7f6e\u7ba1\u7406\u670d\u52a1\u5c06\u914d\u7f6e\u4fdd\u5b58\u5230\u672c\u5730\u5e76\u540c\u6b65\u7ed9\u5176\u5b83worker\u8282\u70b9\uff0c\u540c\u65f6\u89e6\u53d1\u8d1f\u8f7d\u5747\u8861\u3002"))}k.isMDXComponent=!0},59680:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Connector-Task-Concept-2b559eafc66fb942242d970224426270.png"},30424:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Connector-Task-process-deec60b757a7689d932d86e7cfcadfaa.png"},81206:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/worker-d578aa53e7f0d91e6448ddc0fa1478e3.png"}}]);