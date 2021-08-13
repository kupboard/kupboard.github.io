(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[548],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2468:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={},l={unversionedId:"kollection/packages/istio",id:"kollection/packages/istio",isDocsHomePage:!1,title:"Istio",description:"Istio is an open source service mesh that layers transparently onto existing distributed applications. Istio\u2019s powerful features provide a uniform and more efficient way to secure, connect, and monitor services. Istio is the path to load balancing, service-to-service authentication, and monitoring \u2013 with few or no service code changes. Its powerful control plane brings vital features, including:",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/kollection/packages/istio.md",sourceDirName:"kollection/packages",slug:"/kollection/packages/istio",permalink:"/kr/docs/kollection/packages/istio",editUrl:"https://github.com/kupboard/kupboard-docs/edit/main/i18n/kr/docusaurus-plugin-content-docs/current/kollection/packages/istio.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Influxdb",permalink:"/kr/docs/kollection/packages/influxdb"},next:{title:"Kafka",permalink:"/kr/docs/kollection/packages/kafka"}},c=[{value:"Package Deployment",id:"package-deployment",children:[]}],s={toc:c};function u(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Istio is an open source service mesh that layers transparently onto existing distributed applications. Istio\u2019s powerful features provide a uniform and more efficient way to secure, connect, and monitor services. Istio is the path to load balancing, service-to-service authentication, and monitoring \u2013 with few or no service code changes. Its powerful control plane brings vital features, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Secure service-to-service communication in a cluster with TLS encryption, strong identity-based authentication and authorization"),(0,i.kt)("li",{parentName:"ul"},"Automatic load balancing for HTTP, gRPC, WebSocket, and TCP traffic"),(0,i.kt)("li",{parentName:"ul"},"Fine-grained control of traffic behavior with rich routing rules, retries, failovers, and fault injection"),(0,i.kt)("li",{parentName:"ul"},"A pluggable policy layer and configuration API supporting access controls, rate limits and quotas"),(0,i.kt)("li",{parentName:"ul"},"Automatic metrics, logs, and traces for all traffic within a cluster, including cluster ingress and egress")),(0,i.kt)("p",null,"\ucc38\uc870: ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/"},"https://istio.io/")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"pkg-istio",src:n(199).Z})),(0,i.kt)("h2",{id:"package-deployment"},"Package Deployment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kupboard kollection package -n istio -a <action>\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Pakcage Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Cluster"),(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"istio"),(0,i.kt)("td",{parentName:"tr",align:null},"service"),(0,i.kt)("td",{parentName:"tr",align:null},"deploy"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"delete"),(0,i.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0},199:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pkg-istio-609aa147db2609960150f75fb05ab088.svg"}}]);