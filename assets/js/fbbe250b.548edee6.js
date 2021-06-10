(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2763],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return s}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(t),s=a,k=m["".concat(l,".").concat(s)]||m[s]||d[s]||o;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9079:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i={},p={unversionedId:"tutorial/configuration",id:"tutorial/configuration",isDocsHomePage:!1,title:"Configurations",description:"Kupboard\uc758 \uc124\uc815\ud30c\uc77c\uc740 yaml \ud3ec\ub9f7\uc73c\ub85c \uc791\uc131\ub418\uba70 \ud655\uc7a5\uc790\ub294 .yaml\uc774 \ub418\uc5b4\uc57c \ud55c\ub2e4. \uc124\uc815\ud30c\uc77c\uc5d0\ub294 \ubc84\uc804, \uba54\ud0c0\uc815\ubcf4, \uae00\ub85c\ubc8c \ubcc0\uc218\ub4e4 \uadf8\ub9ac\uace0 \uc804\uccb4 \ud074\ub7ec\uc2a4\ud130 \uad6c\uc131\uae4c\uc9c0 \ub2e4\uc591\ud55c \uc815\ubcf4\uac00 \uc815\uc758\ub41c\ub2e4. \uc124\uc815\ud30c\uc77c\uc758 \uae30\ubcf8 \uc774\ub984\uc740 kupboard.yaml\uc774\uba70, \ud504\ub85c\uc81d\ud2b8 \ub610\ub294 \uc11c\ube44\uc2a4 \ubcc4\ub85c \uc124\uc815\ud30c\uc77c\uc744 \uad6c\uc131\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",source:"@site/docs/tutorial/configuration.md",sourceDirName:"tutorial",slug:"/tutorial/configuration",permalink:"/docs/tutorial/configuration",editUrl:"https://github.com/kupboard/kupboard-docs/edit/main/docs/tutorial/configuration.md",version:"current",frontMatter:{}},l=[{value:"Version and Meta",id:"version-and-meta",children:[]},{value:"Global Variables",id:"global-variables",children:[]},{value:"Project Information",id:"project-information",children:[]},{value:"Secrets",id:"secrets",children:[]},{value:"Cluster",id:"cluster",children:[]}],c={toc:l};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kupboard\uc758 \uc124\uc815\ud30c\uc77c\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," \ud3ec\ub9f7\uc73c\ub85c \uc791\uc131\ub418\uba70 \ud655\uc7a5\uc790\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},".yaml"),"\uc774 \ub418\uc5b4\uc57c \ud55c\ub2e4. \uc124\uc815\ud30c\uc77c\uc5d0\ub294 \ubc84\uc804, \uba54\ud0c0\uc815\ubcf4, \uae00\ub85c\ubc8c \ubcc0\uc218\ub4e4 \uadf8\ub9ac\uace0 \uc804\uccb4 \ud074\ub7ec\uc2a4\ud130 \uad6c\uc131\uae4c\uc9c0 \ub2e4\uc591\ud55c \uc815\ubcf4\uac00 \uc815\uc758\ub41c\ub2e4. \uc124\uc815\ud30c\uc77c\uc758 \uae30\ubcf8 \uc774\ub984\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"kupboard.yaml"),"\uc774\uba70, \ud504\ub85c\uc81d\ud2b8 \ub610\ub294 \uc11c\ube44\uc2a4 \ubcc4\ub85c \uc124\uc815\ud30c\uc77c\uc744 \uad6c\uc131\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\ub9cc\uc57d ",(0,o.kt)("inlineCode",{parentName:"p"},"kupboard.yaml"),"\uc774 \uc544\ub2cc \ub2e4\ub978 \uc774\ub984\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0\uc5d0\ub294 kupboard \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud560 \ub54c ",(0,o.kt)("inlineCode",{parentName:"p"},"--config <config-name>"),"\uacfc \uac19\uc774 \uc124\uc815\ud30c\uc77c\uc758 \uc774\ub984(\ud655\uc7a5\uc790\uac00 \uc0dd\ub7b5\ub41c)\uc744 \uc9c0\uc815\ud574\uc57c \ud55c\ub2e4."))),(0,o.kt)("h2",{id:"version-and-meta"},"Version and Meta"),(0,o.kt)("p",null,"\ub2e4\uc74c 3\uac1c \ud56d\ubaa9\uc740 \ubc18\ub4dc\uc2dc \uc815\uc758\ub418\uc5b4\uc57c \ud558\uba70, \uc774 \ud56d\ubaa9\ub4e4\uc740 \uc0ac\uc6a9\uc790\uac00 \uc6d0\ud558\ub294 \uc815\ubcf4\ub85c \uc815\uc758\ub420 \uc218 \uc788\uc73c\uba70, kupboard \ub0b4\ubd80\uc5d0\uc11c\ub294 configuration\uc744 \uad6c\ubd84\ud558\uae30 \uc704\ud55c \ucd5c\uc18c \uc815\ubcf4\ub85c \uc0ac\uc6a9\ub41c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"version: v0.1\nmetadata:\n  name: hello kupboard\n  company: atopcloud\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"version")," \uc124\uc815\ud30c\uc77c\uc758 \ubc84\uc804"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"metadata.name")," \ud504\ub85c\uc81d\ud2b8\uba85 \ub610\ub294 \uc11c\ube44\uc2a4\uba85"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"metadata.company")," \ud68c\uc0ac\uba85")),(0,o.kt)("p",null,"\ub9cc\uc57d \uc0ac\uc6a9\uc790\uac00 \uc124\uc815\ud30c\uc77c\uc5d0 \ub354 \ub9ce\uc740 \uba54\ud0c0\uc815\ubcf4\ub97c \ucd94\uac00\ud558\uace0 \uc2f6\ub2e4\uba74 \uc544\ub798\uc640 \uac19\uc774 \ucd94\uac00\ud560 \uc218\ub3c4 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"version: v0.1\nmetadata:\n  name: hello kupboard\n  company: atopcloud\n  name1: value1\n  name2: value2\n")),(0,o.kt)("h2",{id:"global-variables"},"Global Variables"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vars"),"\uc740 \ub2e4\uc591\ud55c \ubcc0\uc218\uac00 \uc815\uc758\ub420 \uc218 \uc788\uc73c\uba70, \uc774\ub807\uac8c \uc815\uc758\ub41c \ubcc0\uc218\ub4e4\uc740 kupboard \ub0b4\ubd80\uc640 \ub514\ud3f4\ud2b8 Collection, \uadf8\ub9ac\uace0 \uc0ac\uc6a9\uc790\uac00 \uc0dd\uc131\ud558\uac70\ub098 \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc740 Collection\uc5d0\uc11c \ucc38\uc870\ub418\uc5b4 \uc0ac\uc6a9\ub420 \uc218 \uc788\ub2e4. "),(0,o.kt)("p",null,"\ud544\uc218\ub85c \uc815\uc758\ub418\uc5b4\uc57c \ud558\ub294 \uae00\ub85c\ubc8c\ubcc0\uc218\uc5d0\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"Project Information"),"\uacfc ",(0,o.kt)("inlineCode",{parentName:"p"},"Secrets")," \ud56d\ubaa9\uc774 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"## Global Variables\n##\nvars:\n  name1: value1\n  name2: value2\n")),(0,o.kt)("h2",{id:"project-information"},"Project Information"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Project Information"),"\uc740 \uae00\ub85c\ubc8c\ubcc0\uc218\uc758 \uc77c\ubd80\ub85c \uc815\uc758\ub418\uba70 Kupboard\uac00 \uc804\uccb4 \uc11c\ube44\uc2a4\ub97c \uc6b4\uc601\ud558\uae30 \uc704\ud574\uc11c \ud544\uc694\ud55c \uc815\ubcf4\uc774\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  ## Project Information\n  ##\n  kbd_service_domain: mycompany.com\n  kube_enable_rook: true\n  kube_namespace: myproject\n  kube_registry_username: kupboard\n  kube_registry_password: Kupboard1234\n  kube_registry_email: username@email.com\n  kube_registry_domain: harbor.mycompany.com\n  kube_registry_url: harbor.mycompany.com/myproject\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"kube_registry_password")," should be 8-20 characters long with at least 1 uppercase, 1 lowercase and 1 number."))),(0,o.kt)("h2",{id:"secrets"},"Secrets"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Secrets"),"\uc740 \uae00\ub85c\ubc8c\ubcc0\uc218\uc758 \uc77c\ubd80\ub85c \uc815\uc758\ub418\uba70 \ub514\ud3f4\ud2b8 Collection Package\ub85c \uc124\uce58\ub418\ub294 \uc624\ud508\uc18c\uc2a4\uc194\ub8e8\uc158\uc5d0 \uc811\uadfc\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub41c\ub2e4. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  ## Secrets\n  ##\n  grafana_admin_password: kupboard\n  harbor_admin_password: kupboard\n  argocd_admin_password: kupboard\n  mysql_root_password: kupboardroot\n  mysql_user_password: kupboard1234\n  mongodb_root_password: kupboardroot\n  redis_root_password: kupboardroot\n  influxdb_root_password: kupboardroot\n  minio_access_key: kupboard\n  minio_secret_key: kupboard1234\n  keycloak_admin_password: kupboard\n")),(0,o.kt)("h2",{id:"cluster"},"Cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"## Cluster Definition\n##\ncluster:\n  admin:\n    - public_ip: x.x.x.x\n      private_ip: x.x.x.x\n\n  gateway:\n    - public_ip: x.x.x.x\n      private_ip: x.x.x.x\n\n  service:\n    - public_ip: x.x.x.x\n      private_ip: x.x.x.x\n    - public_ip: x.x.x.x\n      private_ip: x.x.x.x\n    - public_ip: x.x.x.x\n      private_ip: x.x.x.x\n    - public_ip: x.x.x.x\n      private_ip: x.x.x.x\n")))}u.isMDXComponent=!0}}]);