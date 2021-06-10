(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8650],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,m=d["".concat(i,".").concat(g)]||d[g]||s[g]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6041:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return i},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),c={},l={unversionedId:"collection/packages/argocd",id:"collection/packages/argocd",isDocsHomePage:!1,title:"ArgoCD",description:"ArgoCD\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0 \ubc30\ud3ec\ub418\ub294 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\ub4e4\uc744 \uc704\ud55c GitOps CD(Continuous Delivery) \ud234\uc774\ub2e4. Github \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0 \uc800\uc7a5\ub41c Manifest \ub610\ub294 Helm Chart\ub97c \uae30\ubc18\uc73c\ub85c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubc30\ud3ec \ubc0f \uad00\ub9ac\ub97c \uc704\ud55c \uae30\ub2a5\uc744 \uc81c\uacf5\ud55c\ub2e4.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/collection/packages/argocd.md",sourceDirName:"collection/packages",slug:"/collection/packages/argocd",permalink:"/kr/docs/collection/packages/argocd",editUrl:"https://github.com/kupboard/kupboard-docs/edit/main/i18n/kr/docusaurus-plugin-content-docs/current/collection/packages/argocd.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Package",permalink:"/kr/docs/collection/package"},next:{title:"Dashboard (k8s)",permalink:"/kr/docs/collection/packages/dashboard"}},i=[{value:"Package Deployment",id:"package-deployment",children:[]}],p={toc:i};function u(e){var t=e.components,c=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ArgoCD\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0 \ubc30\ud3ec\ub418\ub294 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\ub4e4\uc744 \uc704\ud55c GitOps CD(Continuous Delivery) \ud234\uc774\ub2e4. Github \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0 \uc800\uc7a5\ub41c Manifest \ub610\ub294 Helm Chart\ub97c \uae30\ubc18\uc73c\ub85c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubc30\ud3ec \ubc0f \uad00\ub9ac\ub97c \uc704\ud55c \uae30\ub2a5\uc744 \uc81c\uacf5\ud55c\ub2e4."),(0,o.kt)("p",null,"\ucc38\uc870: ",(0,o.kt)("a",{parentName:"p",href:"https://argoproj.github.io/argo-cd"},"https://argoproj.github.io/argo-cd")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"pkg-argocd",src:r(3715).Z})),(0,o.kt)("h2",{id:"package-deployment"},"Package Deployment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kupboard collection package -n argocd -a <action>\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Pakcage Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Cluster"),(0,o.kt)("th",{parentName:"tr",align:null},"Action"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"argocd"),(0,o.kt)("td",{parentName:"tr",align:null},"service"),(0,o.kt)("td",{parentName:"tr",align:null},"deploy"),(0,o.kt)("td",{parentName:"tr",align:null},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"delete"),(0,o.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0},3715:function(e,t,r){"use strict";t.Z=r.p+"assets/images/pkg-argocd-d925dce8aef83281260e4ff34688cb21.gif"}}]);