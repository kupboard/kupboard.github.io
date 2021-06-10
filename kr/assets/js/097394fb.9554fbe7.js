(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5755],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),k=i,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},941:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={},p={unversionedId:"getstarted/setup",id:"getstarted/setup",isDocsHomePage:!1,title:"Setup",description:"\uc774\uc804 \ub2e8\uacc4\uc5d0\uc11c \ud074\ub7ec\uc2a4\ud130\ub97c \uc815\uc758\ud588\ub2e4\uba74, \uc774\uc81c kupboard\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud074\ub7ec\uc2a4\ud130\ub97c \ucd08\uae30\ud654\ud574\uc57c \ud55c\ub2e4.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/getstarted/setup.md",sourceDirName:"getstarted",slug:"/getstarted/setup",permalink:"/kr/docs/getstarted/setup",editUrl:"https://github.com/kupboard/kupboard-docs/edit/main/i18n/kr/docusaurus-plugin-content-docs/current/getstarted/setup.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/kr/docs/getstarted/configuration"},next:{title:"Collection",permalink:"/kr/docs/getstarted/collection"}},s=[{value:"Generate SSH Keys",id:"generate-ssh-keys",children:[]},{value:"Initialize User",id:"initialize-user",children:[]},{value:"Initialize Cluster",id:"initialize-cluster",children:[]},{value:"Initialize Kubernetes",id:"initialize-kubernetes",children:[]},{value:"Finish Initialization",id:"finish-initialization",children:[]}],l={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc774\uc804 \ub2e8\uacc4\uc5d0\uc11c \ud074\ub7ec\uc2a4\ud130\ub97c \uc815\uc758\ud588\ub2e4\uba74, \uc774\uc81c kupboard\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud074\ub7ec\uc2a4\ud130\ub97c \ucd08\uae30\ud654\ud574\uc57c \ud55c\ub2e4."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\uc774 \uc139\uc158\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uba85\ub839\uc5b4 \uc608\uc81c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"kupboard")," script\ub97c \uc0ac\uc6a9\ud55c\ub2e4. bash script\ub97c \uc0ac\uc6a9\ud558\uc5ec kupboard\ub97c \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\uc740 ",(0,a.kt)("a",{parentName:"p",href:"/docs/getstarted/aws#bash-script-for-running-kupboard-recommended"},"Bash script for running kupboard"),"\ub97c \ucc38\uace0\ud55c\ub2e4. "))),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131\uc2dc \uc0ac\uc6a9\ub418\uc5c8\ub358 key pair\uc758 private key\uac00 \ubc18\ub4dc\uc2dc ",(0,a.kt)("inlineCode",{parentName:"p"},"data/certs")," \uc704\uce58\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh.pem"),"\uc73c\ub85c \uc800\uc7a5\ub418\uc5b4\uc57c \ud55c\ub2e4."))),(0,a.kt)("h2",{id:"generate-ssh-keys"},"Generate SSH Keys"),(0,a.kt)("p",null,"\uba3c\uc800 \ubaa8\ub4e0 \uc11c\ubc84\uc758 \ucee8\ud2b8\ub864\uc744 \uc704\ud574 \uc0ac\uc6a9\ub420 ssh \uc811\uc18d\uc744 \uc704\ud55c private key\uc640 public key\ub97c \uc0dd\uc131\ud574\uc57c \ud55c\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," \uba85\ub839\uc5b4\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"--keygen")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uba74 \uc0c8\ub85c\uc6b4 \ud0a4\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uace0 \uc774 \ud0a4\ub4e4\uc740 \ubaa8\ub4e0 \uc11c\ubc84\uc5d0 \uacf5\ud1b5\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. \uc774 \uc791\uc5c5\uc740 1\ud68c\ub9cc \uc218\ud589\ud558\uba74 \ub418\uace0, \ud544\uc694\uc2dc \ud0a4\ub97c \uc0c8\ub85c \uc0dd\uc131\ud558\uc5ec \ub2e4\uc2dc \ucd08\uae30\ud654\uac00 \uac00\ub2a5\ud558\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kupboard setup --keygen\n")),(0,a.kt)("p",null,"\uba85\ub839\uc5b4\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud588\ub2e4\uba74, \uc544\ub798 \uacb0\uacfc\uc640 \uac19\uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"data/certs")," \uacbd\ub85c\uc5d0 private key\uc640 public key\uac00 \uc0dd\uc131\ub418\ub294 \uac83\uc744 \ud655\uc778 \ud560 \uc218 \uc788\uc744 \uac83\uc774\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ls data/certs/\nssh-kupboard.pem  ssh-kupboard.pub\n")),(0,a.kt)("h2",{id:"initialize-user"},"Initialize User"),(0,a.kt)("p",null,"\uc704 \ub2e8\uacc4\uc5d0\uc11c ssh \uc811\uc18d\uc744 \uc704\ud55c priave key\uc640 public key\uac00 \uc0dd\uc131\ub418\uc5c8\ub2e4\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"setup --init-user")," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub4e0 \uc11c\ubc84\uc5d0 ssh \uc811\uc18d\uc744 \uc704\ud55c \uc0ac\uc6a9\uc790 \uc124\uc815\uc744 \uc218\ud589\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kupboard setup --init-user\n")),(0,a.kt)("p",null,"User \uc124\uc815\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc644\ub8cc\ub418\uc5c8\ub2e4\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"kupboard ssh admin-node1")," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud2b9\uc815 \uc11c\ubc84\uc5d0 ssh\uc811\uc18d\uc744 \ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h2",{id:"initialize-cluster"},"Initialize Cluster"),(0,a.kt)("p",null,"\uc774\ubc88 \ub2e8\uacc4\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"setup --init-cluster")," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub4e0 \uc11c\ubc84\ub97c \ucd08\uae30\ud654\ud558\ub294 \uacfc\uc815\uc744 \uc218\ud589\ud55c\ub2e4. (\ucd08\uae30\ud654 1\ub2e8\uacc4)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kupboard setup --init-cluster\n")),(0,a.kt)("h2",{id:"initialize-kubernetes"},"Initialize Kubernetes"),(0,a.kt)("p",null,"\uc774\ubc88 \ub2e8\uacc4\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"setup --init-k8s")," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec service \ud074\ub7ec\uc2a4\ud130\uc5d0 \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \uc124\uce58\ud558\ub294 \uacfc\uc815\uc744 \uc218\ud589\ud55c\ub2e4. (\ucd08\uae30\ud654 2\ub2e8\uacc4)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kupboard setup --init-k8s\n")),(0,a.kt)("h2",{id:"finish-initialization"},"Finish Initialization"),(0,a.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"setup --init-finish")," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub4e0 \ucd08\uae30\ud654 \uacfc\uc815\uc744 \ub9c8\ubb34\ub9ac\ud558\ub294 \uacfc\uc815\uc744 \uc218\ud589\ud55c\ub2e4. (\ucd08\uae30\ud654 3\ub2e8\uacc4)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kupboard setup --init-finish\n")))}u.isMDXComponent=!0}}]);