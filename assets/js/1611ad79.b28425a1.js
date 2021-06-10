(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2589],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9849:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i={},c={unversionedId:"collection/intro",id:"collection/intro",isDocsHomePage:!1,title:"Introduction",description:"collection of kupboard is a bundle of software packages and applications to install on the platform. For example, you can include open sources such as Nginx or Prometheus, and you can include applications in a container format that you want to deploy.",source:"@site/docs/collection/intro.md",sourceDirName:"collection",slug:"/collection/intro",permalink:"/docs/collection/intro",editUrl:"https://github.com/kupboard/kupboard-docs/edit/main/docs/collection/intro.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Mugset",permalink:"/docs/collection/mugset"}},l=[{value:"Structure",id:"structure",children:[]}],s={toc:l};function p(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"collection")," of kupboard is a bundle of software packages and applications to install on the platform. For example, you can include open sources such as Nginx or Prometheus, and you can include applications in a container format that you want to deploy."),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"400",src:"/img/guide/collection-1.png",alt:"collection-1"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Collection consists of package, application, and mugset.yaml, and Kupboard contains the default collection. You can install any package on a given cluster using cli commands. Basic collection information is available in ",(0,r.kt)("a",{parentName:"p",href:"#default-packages"},"Deault Package"),"."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"collection-2",src:n(5151).Z})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Users can create their own collections and deploy them through the kupboard. This is very useful if you need to manage the platform separately by project or service. The packages included in the collection can be commonly used open source solutions and can also be user-written software. All you need to do is to create a simple Ansible Playbook for installing the package so that Kupboard can read it. For applications, you only need to provide the information you need to build a docker container, regardless of whether the source file is included or not."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"collection-3",src:n(4948).Z})),(0,r.kt)("br",null),(0,r.kt)("p",null,"A collection has only one ",(0,r.kt)("inlineCode",{parentName:"p"},"mugset.yaml"),"which defines the information of packages and applications in the collection. The user can define many actions to manage packages and applications, as well as the parameters required when each action is performed. ",(0,r.kt)("inlineCode",{parentName:"p"},"mugset")," are automatically loaded by the kupboard, and users can deploy the packages and applications they want using the actions defined in the mugeset. Collections must be in ",(0,r.kt)("inlineCode",{parentName:"p"},"data/collections")," with non-duplicate names."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The collection type can be an archive like ",(0,r.kt)("inlineCode",{parentName:"p"},"colleciton-name.tar.gz"),"."))),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mycollection\n\u251c\u2500\u2500 apps\n\u2502\xa0\xa0 \u251c\u2500\u2500 app1\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Dockerfile\n\u2502\xa0\xa0 \u2514\u2500\u2500 app2\n\u2502       \u251c\u2500\u2500 src\n\u2502\xa0\xa0     \u2514\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 mugset.yaml\n\u2514\u2500\u2500 packages\n    \u251c\u2500\u2500 package1\n    \u2502\xa0\xa0 \u2514\u2500\u2500 playbook.yaml\n    \u2514\u2500\u2500 package2\n        \u251c\u2500\u2500 data    \n        \u2514\u2500\u2500 playbook.yaml\n")))}p.isMDXComponent=!0},5151:function(e,t,n){"use strict";t.Z=n.p+"assets/images/collection-2-def5ec33fc7b50f269e72d2260e354f3.png"},4948:function(e,t,n){"use strict";t.Z=n.p+"assets/images/collection-3-50d436a67a1a5293ee00ab0485e4309b.png"}}]);