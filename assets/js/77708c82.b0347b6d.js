(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3090],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,h=m["".concat(d,".").concat(u)]||m[u]||l[u]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1097:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r={},p={unversionedId:"openapi",id:"openapi",isDocsHomePage:!1,title:"OpenAPI",description:"Rest APIs are the most common and effective method of communication in an Internet environment. In addition, there are various ways to enhance security, such as SSL and JWT. Therefore, most applications are designed and operated on an API basis. OpenAPI allows you to standardize this communication, and using these standardized API specifications makes it easy and fast to develop services.",source:"@site/docs/openapi.md",sourceDirName:".",slug:"/openapi",permalink:"/docs/openapi",editUrl:"https://github.com/kupboard/kupboard-docs/edit/main/docs/openapi.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Finance Collections",permalink:"/docs/finance"},next:{title:"Kupboard Console",permalink:"/docs/console"}},d=[{value:"What is OpenAPI?",id:"what-is-openapi",children:[]},{value:"OpenAPI with Kupboard",id:"openapi-with-kupboard",children:[]},{value:"Demo",id:"demo",children:[{value:"Build",id:"build",children:[]},{value:"Deploy",id:"deploy",children:[]}]}],s={toc:d};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rest APIs are the most common and effective method of communication in an Internet environment. In addition, there are various ways to enhance security, such as SSL and JWT. Therefore, most applications are designed and operated on an API basis. OpenAPI allows you to standardize this communication, and using these standardized API specifications makes it easy and fast to develop services. "),(0,i.kt)("h2",{id:"what-is-openapi"},"What is OpenAPI?"),(0,i.kt)("p",null,"The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and interact with the remote service with a minimal amount of implementation logic."),(0,i.kt)("p",null,"An OpenAPI definition can then be used by documentation generation tools to display the API, code generation tools to generate servers and clients in various programming languages, testing tools, and many other use cases."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md"},"Open API 3.0 Specification")),(0,i.kt)("h2",{id:"openapi-with-kupboard"},"OpenAPI with Kupboard"),(0,i.kt)("p",null,"If you have a specification written for the OpenAPI format, Kupboard can build and deploy service containers without any development. It is even possible to deploy a test server that generates and returns random data."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"openapi",src:n(6512).Z})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/kupboard/kupboard-materials/raw/main/kupboard-data-sample.tar.gz"},"kupboard-data-sample.tar.gz")," contains ",(0,i.kt)("inlineCode",{parentName:"p"},"data/api/demo.yaml")," and this is an API specification based on OpenAPI 3.0. ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/demo/list")," is defined in the file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"data\n\u2514\u2500\u2500 api\n     \u2514\u2500\u2500 demo.yaml\n")),(0,i.kt)("h3",{id:"build"},"Build"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," command to deploy your application using the OpenAPI specification located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"data/api")," directory. And to deploy a mockup application that provides random data, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--mock")," option together. Container images for these are automatically pushed into the Harbor registry and used for deployment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kupboard.sh build -s demo [--mock]\n")),(0,i.kt)("p",null,"In order to expose applications deployed in the above ways, a gateway must also be deployed. To build a gateway, use the service name ",(0,i.kt)("inlineCode",{parentName:"p"},"gateway"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kupboard.sh build -s gateway [--mock]\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Built and deployed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," command, ",(0,i.kt)("inlineCode",{parentName:"p"},"gateway")," is an application deployed in Kubernetes. This is different from a gateway cluster."))),(0,i.kt)("h3",{id:"deploy"},"Deploy"),(0,i.kt)("p",null,"When you complete building your OpenAPI application and gateway, you can deploy them using the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," command. As with the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," command, you must deploy applications and gateways for mockup using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-mock")," option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kupboard.sh deploy -s demo [--mock]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kupboard.sh deploy -s gateway [--mock]\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"After the OpenAPI application and gateway are deployed, the Nginx package must be installed in the gateway cluster for external access. Once Nginx is installed, the applications can be accessed by ",(0,i.kt)("inlineCode",{parentName:"p"},"app.mycompany.com")," and the mock application can be accessed by ",(0,i.kt)("inlineCode",{parentName:"p"},"mock.mycompany.com"),"."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"$ kupboard collection package -n nginx\n")))))}c.isMDXComponent=!0},6512:function(e,t,n){"use strict";t.Z=n.p+"assets/images/openapi-1-1d61ece16a726bc4b74cde9f58f3d595.png"}}]);