(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4482],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6410:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={},c={unversionedId:"collection/packages/prometheus",id:"collection/packages/prometheus",isDocsHomePage:!1,title:"Prometheus",description:"Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud. Since its inception in 2012, many companies and organizations have adopted Prometheus, and the project has a very active developer and user community. It is now a standalone open source project and maintained independently of any company. To emphasize this, and to clarify the project's governance structure, Prometheus joined the Cloud Native Computing Foundation in 2016 as the second hosted project, after Kubernetes.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/collection/packages/prometheus.md",sourceDirName:"collection/packages",slug:"/collection/packages/prometheus",permalink:"/kr/docs/collection/packages/prometheus",editUrl:"https://github.com/kupboard/kupboard-docs/edit/main/i18n/kr/docusaurus-plugin-content-docs/current/collection/packages/prometheus.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nginx",permalink:"/kr/docs/collection/packages/nginx"},next:{title:"Redis",permalink:"/kr/docs/collection/packages/redis"}},l=[{value:"Package Deployment",id:"package-deployment",children:[]}],p={toc:l};function u(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud. Since its inception in 2012, many companies and organizations have adopted Prometheus, and the project has a very active developer and user community. It is now a standalone open source project and maintained independently of any company. To emphasize this, and to clarify the project's governance structure, Prometheus joined the Cloud Native Computing Foundation in 2016 as the second hosted project, after Kubernetes."),(0,o.kt)("p",null,"\ucc38\uc870: ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"https://prometheus.io/")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"pkg-prometheus",src:n(1997).Z})),(0,o.kt)("h2",{id:"package-deployment"},"Package Deployment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kupboard collection package -n prometheus -a <action>\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Pakcage Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Cluster"),(0,o.kt)("th",{parentName:"tr",align:null},"Action"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"prometheus"),(0,o.kt)("td",{parentName:"tr",align:null},"service"),(0,o.kt)("td",{parentName:"tr",align:null},"deploy"),(0,o.kt)("td",{parentName:"tr",align:null},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"delete"),(0,o.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0},1997:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pkg-prometheus-573eb9edf2f37984e264cc3c2d4bd3a6.png"}}]);