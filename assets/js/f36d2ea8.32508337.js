"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6098],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37767:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(83117),o=(n(67294),n(3905));const a={title:"Introduction",slug:"/"},i=void 0,c={unversionedId:"getting-started/introduction",id:"version-1.7/getting-started/introduction",title:"Introduction",description:"Rancher Desktop is an app that provides container management and Kubernetes on the desktop. It is available for Mac (both on Intel and Apple Silicon), Windows, and Linux.",source:"@site/versioned_docs/version-1.7/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/",permalink:"/1.7/",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/getting-started/introduction.md",tags:[],version:"1.7",frontMatter:{title:"Introduction",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/1.7/getting-started/installation"}},s={},u=[{value:"Container Management",id:"container-management",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Rancher vs Rancher Desktop",id:"rancher-vs-rancher-desktop",level:2}],l={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher Desktop is an app that provides container management and Kubernetes on the desktop. It is available for Mac (both on Intel and Apple Silicon), Windows, and Linux."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(64957).Z,width:"1813",height:"596"}),"\n",(0,o.kt)("em",{parentName:"p"},"The above image shows Kubernetes settings on Mac on the left and Windows on the right.")),(0,o.kt)("h2",{id:"container-management"},"Container Management"),(0,o.kt)("p",null,"Rancher Desktop provides the ability to build, push, and pull container images along with the ability to run containers. This is provided by either the Docker CLI (when you choose Moby/dockerd as you engine) or nerdctl (when you choose containerd as your engine). ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containerd/nerdctl"},"nerdctl"),' is a "Docker-compatible CLI for containerd" provided by the containerd project.'),(0,o.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"Kubernetes is built in to Rancher Desktop. Kubernetes is provided by ",(0,o.kt)("a",{parentName:"p",href:"https://k3s.io/"},"k3s"),", a lightweight certified distribution. With Rancher Desktop you have the ability to ",(0,o.kt)("em",{parentName:"p"},"choose your version of Kubernetes")," and ",(0,o.kt)("em",{parentName:"p"},"reset Kubernetes or Kubernetes and the whole container runtime with the click of a button"),"."),(0,o.kt)("h2",{id:"rancher-vs-rancher-desktop"},"Rancher vs Rancher Desktop"),(0,o.kt)("p",null,"While ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/"},"Rancher")," and Rancher Desktop share the ",(0,o.kt)("em",{parentName:"p"},"Rancher")," name they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop provides a local Kubernetes and container management platform. The two solutions complement each other."),(0,o.kt)("p",null,"If you want to run Rancher on your local system, you can install Rancher into Rancher Desktop."))}p.isMDXComponent=!0},64957:function(e,t,n){t.Z=n.p+"assets/images/intro-8e083250899e4ad7a467e4b9c4daf381.png"}}]);