(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1097:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={},c={unversionedId:"openapi",id:"openapi",isDocsHomePage:!1,title:"OpenAPI",description:"REST API\ub294 \uc778\ud130\ub137 \ud658\uacbd\uc5d0\uc11c \uac00\uc7a5 \ubcf4\ud3b8\uc801\uc774\uace0 \ud6a8\uacfc\uc801\uc778 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ubc29\ubc95\uc774\uba70, \uac70\uae30\uc5d0 SSL, JWT\ub4f1\uc740 \ubcf4\uc548\uc744 \uac15\ud654\ud574\uc8fc\ub294 \ub2e4\uc591\ud55c \ubc29\ubc95\ub3c4 \uc788\ub2e4.",source:"@site/docs/openapi.md",sourceDirName:".",slug:"/openapi",permalink:"/docs/openapi",editUrl:"https://github.com/kupboard/kupboard-docs/edit/main/docs/openapi.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Collection",permalink:"/docs/collection"},next:{title:"Dashboard",permalink:"/docs/dashboard"}},p=[{value:"What is OpenAPI?",id:"what-is-openapi",children:[]},{value:"OpenAPI with Kupboard",id:"openapi-with-kupboard",children:[]}],u={toc:p};function s(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"REST API\ub294 \uc778\ud130\ub137 \ud658\uacbd\uc5d0\uc11c \uac00\uc7a5 \ubcf4\ud3b8\uc801\uc774\uace0 \ud6a8\uacfc\uc801\uc778 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ubc29\ubc95\uc774\uba70, \uac70\uae30\uc5d0 SSL, JWT\ub4f1\uc740 \ubcf4\uc548\uc744 \uac15\ud654\ud574\uc8fc\ub294 \ub2e4\uc591\ud55c \ubc29\ubc95\ub3c4 \uc788\ub2e4.\n\uadf8\ub798\uc11c \ub300\ubd80\ubd84\uc758 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc740 API \uae30\ubc18\uc73c\ub85c \uc124\uacc4\ub418\uace0 \uc6b4\uc601\ub418\uace0 \uc788\ub2e4.\nOpenAPI\ub294 \uc774\ub7f0 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uc744 \ud45c\uc900\ud654\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\uba70, \uc774\ub7f0 \ud45c\uc900\ud654\ub41c API \uc2a4\ud399\uc744 \uc0ac\uc6a9\ud568\uc73c\ub85c \uc27d\uace0 \ube60\ub974\uac8c \uc11c\ube44\uc2a4\ub97c \uac1c\ubc1c\ud558\ub294\uac8c \uac00\ub2a5\ud574\uc9c4\ub2e4. "),(0,i.kt)("h2",{id:"what-is-openapi"},"What is OpenAPI?"),(0,i.kt)("p",null,"The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and interact with the remote service with a minimal amount of implementation logic."),(0,i.kt)("p",null,"An OpenAPI definition can then be used by documentation generation tools to display the API, code generation tools to generate servers and clients in various programming languages, testing tools, and many other use cases."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md"},"Open API 3.0 Specification")),(0,i.kt)("h2",{id:"openapi-with-kupboard"},"OpenAPI with Kupboard"),(0,i.kt)("p",null,"kupboar\ub294 openapi \ud3ec\ub9f7\uc5d0 \ub9de\uac8c \uc791\uc131\ub41c spec\uc774 \uc788\ub2e4\uba74 \ubcc4\ub3c4\uc758 \uac1c\ubc1c\uacfc\uc815 \uc5c6\uc774 \uc11c\ubc84 \ucee8\ud14c\uc774\ub108\ub97c \ube4c\ub4dc\ud558\uace0 \ubc30\ud3ec\uae4c\uc9c0 \uac00\ub2a5\ud558\ub2e4.\n\uc2ec\uc9c0\uc5b4 \uc784\uc758\uc758 \ub370\uc774\ud130\ub97c \uc0dd\uc131\ud574\uc11c \ub9ac\ud134\ud574\uc8fc\ub294 \ud14c\uc2a4\ud2b8\uc11c\ubc84\ub3c4 \ubc30\ud3ec\uac00 \uac00\ub2a5\ud558\ub2e4."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"openapi",src:n(6512).Z})),(0,i.kt)("br",null))}s.isMDXComponent=!0},6512:function(e,t,n){"use strict";t.Z=n.p+"assets/images/openapi-1-1d61ece16a726bc4b74cde9f58f3d595.png"}}]);