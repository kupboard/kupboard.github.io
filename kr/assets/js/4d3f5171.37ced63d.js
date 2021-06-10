(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1132],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=p(a),d=r,m=s["".concat(c,".").concat(d)]||s[d]||k[d]||l;return a?n.createElement(m,o(o({ref:e},u),{},{components:a})):n.createElement(m,o({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},4074:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o={},i={unversionedId:"collection/packages/kafka",id:"collection/packages/kafka",isDocsHomePage:!1,title:"Kafka",description:"Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/collection/packages/kafka.md",sourceDirName:"collection/packages",slug:"/collection/packages/kafka",permalink:"/kr/docs/collection/packages/kafka",editUrl:"https://github.com/kupboard/kupboard-docs/edit/main/i18n/kr/docusaurus-plugin-content-docs/current/collection/packages/kafka.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Istio",permalink:"/kr/docs/collection/packages/istio"},next:{title:"Keycloak",permalink:"/kr/docs/collection/packages/keycloak"}},c=[{value:"AKHQ (Kafka GUI)",id:"akhq-kafka-gui",children:[]},{value:"Package Deployment",id:"package-deployment",children:[{value:"Kafka",id:"kafka",children:[]},{value:"AKHQ",id:"akhq",children:[]}]}],p={toc:c};function u(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications."),(0,l.kt)("p",null,"\ucc38\uc870: ",(0,l.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"https://kafka.apache.org/")),(0,l.kt)("h2",{id:"akhq-kafka-gui"},"AKHQ (Kafka GUI)"),(0,l.kt)("p",null,"Kafka GUI for Apache Kafka to manage topics, topics data, consumers group, schema registry, connect and more..."),(0,l.kt)("p",null,"\ucc38\uc870: ",(0,l.kt)("a",{parentName:"p",href:"https://akhq.io/"},"https://akhq.io/")),(0,l.kt)("h2",{id:"package-deployment"},"Package Deployment"),(0,l.kt)("h3",{id:"kafka"},"Kafka"),(0,l.kt)("p",null,"6.1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ kupboard collection package -n kafka -a <action>\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Pakcage Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Cluster"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka"),(0,l.kt)("td",{parentName:"tr",align:null},"service"),(0,l.kt)("td",{parentName:"tr",align:null},"deploy"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"delete"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"akhq"},"AKHQ"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ kupboard collection package -n kafka-akhq -a <action>\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Pakcage Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Cluster"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka-akhq"),(0,l.kt)("td",{parentName:"tr",align:null},"service"),(0,l.kt)("td",{parentName:"tr",align:null},"deploy"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"delete"),(0,l.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);