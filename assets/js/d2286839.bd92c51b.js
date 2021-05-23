(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[526],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5175:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i={},l={unversionedId:"getstarted",id:"getstarted",isDocsHomePage:!1,title:"Get Started",description:"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 Kupboard\ub97c \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\uacfc Configuration\uc5d0 \ub300\ud574\uc11c \uac04\ub7b5\ud788 \uc0b4\ud3b4\ubcf8\ub2e4.",source:"@site/docs/getstarted.md",sourceDirName:".",slug:"/getstarted",permalink:"/docs/getstarted",editUrl:"https://github.com/kupboard/kupboard-docs/edit/main/docs/getstarted.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Configurations",permalink:"/docs/configuration"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Data",id:"data",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={toc:p};function c(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 Kupboard\ub97c \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\uacfc Configuration\uc5d0 \ub300\ud574\uc11c \uac04\ub7b5\ud788 \uc0b4\ud3b4\ubcf8\ub2e4."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Kupboard\ub294 \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \ud615\ud0dc\ub85c \uc81c\uacf5\ub418\uba70 \uc544\ub798\uc640 \uac19\uc774 \uac04\ub2e8\ud55c \uba85\ub839\uc5b4\ub85c \uc2e4\ud589\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run kupboard.io/kupboard\n")),(0,o.kt)("p",null,"\uc544\ub798\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"-h")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," \uc635\uc158\uc744 \uc785\ub825\ud55c \uacb0\uacfc\uc774\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ docker run kupboard.io/kupboard --help\n\nkupboard is a root command for managements of the Kupboard platform.\n\nUsage:\n  kupboard [flags]\n  kupboard [command]\n\nAvailable Commands:\n  build       Build application containers\n  collection  Deploy applications and install packages\n  deploy      Deploy services on target clusters\n  help        Help about any command\n  setup       Initialize target clusters\n  ssh         ssh connection to a target host\n\nFlags:\n      --config string      config file (default "kupboard.yaml")\n      --debug              enable debug\n  -e, --envvar string      ansible envvars\n  -h, --help               help for kupboard\n      --hide-log           diable logging\n      --hide-logo          hide kupboard logo\n\nUse "kupboard [command] --help" for more information about a command.\n')),(0,o.kt)("h2",{id:"data"},"Data"),(0,o.kt)("p",null,"Kupboard\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc11c\ube44\uc2a4\ud658\uacbd\uc744 \uad6c\ucd95\ud558\uae30 \uc704\ud574\uc11c\ub294 \ucee8\ud14c\uc774\ub108 \uc2e4\ud589\uc2dc data \ud3f4\ub354\ub97c \ub9c8\uc6b4\ud2b8\uc2dc\ucf1c\uc57c \ud55c\ub2e4. data \ud3f4\ub354\uc758 \uad6c\uc870\ub294 \uc544\ub798\uc640 \uac19\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"data\n\u251c\u2500\u2500 api\n\u251c\u2500\u2500 certs\n\u251c\u2500\u2500 collections\n\u251c\u2500\u2500 log\n\u251c\u2500\u2500 manifests\n\u2514\u2500\u2500 kupboard.yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run -v $(pwd)/data:/kupboard/data kupboard.io/kupboard \n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"\uc124\uc815\ud30c\uc77c\uc744 \uc9c0\uc815\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"data/kupboard.yaml")," \ud30c\uc77c\uc774 \uc801\uc6a9\ub41c\ub2e4. \ud558\ub098 \uc774\uc0c1\uc758 \uc124\uc815\ud30c\uc77c\uc744 \uc0ac\uc6a9\ud558\ub2e4\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"--config")," \uc635\uc158\uc73c\ub85c \ud30c\uc77c\uc744 \uc9c0\uc815\ud558\uba74 \ud574\ub2f9 \uc124\uc815\uc774 \uc801\uc6a9\ub41c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"data\n\u251c\u2500\u2500 kupboard.yaml\n\u2514\u2500\u2500 myconfig.yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run -v $(pwd)/data:/kupboard/data kupboard.io/kupboard --config data/myconfig.yaml\n")))}c.isMDXComponent=!0}}]);