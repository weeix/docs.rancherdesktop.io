"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6977],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n(34334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(83117),a=n(67294),o=n(34334),l=n(12466),i=n(76775),s=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:n,groupId:r}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=s??c;return f({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var h=n(72389),b="tabList__CuJ",v="tabItem_LNqP";function N(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==i&&(c(t),s(r))},f=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:d},l,{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(N,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},28398:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(83117),a=(n(67294),n(3905)),o=n(74866),l=n(85162);const i={title:"Skaffold \u4e0e Rancher Desktop"},s=void 0,u={unversionedId:"how-to-guides/skaffold-and-rancher-desktop",id:"version-1.9-tech-preview/how-to-guides/skaffold-and-rancher-desktop",title:"Skaffold \u4e0e Rancher Desktop",description:"Skaffold \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u4e8e Kubernetes \u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u7684\u6301\u7eed\u5f00\u53d1\u3002Skaffold \u5904\u7406\u6784\u5efa\u3001\u63a8\u9001\u548c\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u6d41\uff0c\u5e76\u63d0\u4f9b\u7528\u4e8e\u521b\u5efa CI/CD \u6d41\u6c34\u7ebf\u7684\u6784\u5efa\u5757\u3002\u5b83\u80fd\u8ba9\u4f60\u4e13\u6ce8\u4e8e\u5728\u672c\u5730\u8fed\u4ee3\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\uff0cSkaffold \u5219\u80fd\u6301\u7eed\u90e8\u7f72\u5230\u4f60\u7684\u672c\u5730\u6216\u8fdc\u7a0b Kubernetes \u96c6\u7fa4\u3002\u8981\u4e86\u89e3\u6709\u5173 Skaffold \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Skaffold \u9879\u76ee\u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9-tech-preview/how-to-guides/skaffold-and-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/skaffold-and-rancher-desktop",permalink:"/zh/1.9-tech-preview/how-to-guides/skaffold-and-rancher-desktop",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9-tech-preview/how-to-guides/skaffold-and-rancher-desktop.md",tags:[],version:"1.9-tech-preview",frontMatter:{title:"Skaffold \u4e0e Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"Rancher Desktop \u4e0a\u7684 Rancher",permalink:"/zh/1.9-tech-preview/how-to-guides/rancher-on-rancher-desktop"},next:{title:"\u914d\u7f6e\u811a\u672c",permalink:"/zh/1.9-tech-preview/how-to-guides/provisioning-scripts"}},p={},c=[],d={toc:c};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Skaffold \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u4e8e Kubernetes \u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u7684\u6301\u7eed\u5f00\u53d1\u3002Skaffold \u5904\u7406\u6784\u5efa\u3001\u63a8\u9001\u548c\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u6d41\uff0c\u5e76\u63d0\u4f9b\u7528\u4e8e\u521b\u5efa CI/CD \u6d41\u6c34\u7ebf\u7684\u6784\u5efa\u5757\u3002\u5b83\u80fd\u8ba9\u4f60\u4e13\u6ce8\u4e8e\u5728\u672c\u5730\u8fed\u4ee3\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\uff0cSkaffold \u5219\u80fd\u6301\u7eed\u90e8\u7f72\u5230\u4f60\u7684\u672c\u5730\u6216\u8fdc\u7a0b Kubernetes \u96c6\u7fa4\u3002\u8981\u4e86\u89e3\u6709\u5173 Skaffold \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://skaffold.dev/docs/"},"Skaffold \u9879\u76ee\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u6f14\u793a\u4f7f\u7528 Rancher Desktop \u8bbe\u7f6e Skaffold \u7684\u6b65\u9aa4\uff0cRancher Desktop \u6587\u6863\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample"},"\u6b64\u5904"),"\u63d0\u4f9b\u4e86\u4e00\u4e2a nodejs \u5e94\u7528\u7a0b\u5e8f\u793a\u4f8b\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a\uff1aSkaffold \u4ec5\u9002\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"strong"},"dockerd")," (Moby)"),"\u3002\u56e0\u6b64\uff0c\u8bf7\u786e\u4fdd\u5728 Rancher Desktop UI \u7684 ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Settings")," \u9762\u677f\u4e2d\u9009\u62e9\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerd")," \u4f5c\u4e3a\u8fd0\u884c\u65f6\u3002")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://skaffold.dev/docs/install/"},"https://skaffold.dev/docs/install/")," \u5b89\u88c5 Skaffold\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u514b\u9686 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io.git"},"Rancher Desktop \u6587\u6863\u4ed3\u5e93"),"\u5e76\u5728\u7ec8\u7aef\u4e2d\u5bfc\u822a\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"express-sample"),"\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"cd docs.rancherdesktop.io/assets/express-sample\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold init"),"\u3002"),(0,a.kt)("p",{parentName:"li"},"\u6839\u636e ",(0,a.kt)("a",{parentName:"p",href:"https://skaffold.dev/docs/pipeline-stages/init/#build-config-initialization"},"Skaffold \u6587\u6863")," \u7684\u4ecb\u7ecd\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold init")," \u4f1a\u904d\u5386\u4f60\u7684\u9879\u76ee\u76ee\u5f55\u5e76\u67e5\u627e build \u914d\u7f6e\u6587\u4ef6\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle /pom.xml"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"requirements.txt")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"go.mod"),"\uff09\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5728\u6211\u4eec\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u3002\u8fd9\u5c06\u751f\u6210\u4f60\u53ef\u4ee5\u4fee\u6539\u7684\u521d\u59cb\u914d\u7f6e\u6587\u4ef6\u3002\u51fa\u73b0\u63d0\u793a\u65f6\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"yes")," \u5c06\u4f60\u7684\u914d\u7f6e\u5199\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold.yaml"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u4f60\u7684\u7f16\u8f91\u5668\u4e2d\uff0c\u67e5\u770b\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"manifests.yaml")," \u6587\u4ef6\u3002\u8bf7\u6ce8\u610f\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"manifests.yaml")," \u4e2d\uff0c\u4f60\u5c06\u62e5\u6709\u4e00\u4e2a deployment \u914d\u7f6e\u548c\u4e00\u4e2a service \u914d\u7f6e\u3002\u5728\u6d4b\u8bd5\u573a\u666f\u4e0b\uff0c\u4ec5\u9700\u8981 1 \u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"replica")," \u5373\u53ef\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u56de\u5230\u4f60\u7684\u7ec8\u7aef\uff0c\u4f60\u4f1a\u6ce8\u610f\u5230\u4f60\u6709\u4e24\u4e2a\u9009\u9879\uff0c\u5206\u522b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold run"),"\uff08\u5141\u8bb8\u4f60\u6784\u5efa\u548c\u90e8\u7f72\uff09\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold dev")," \uff08\u5141\u8bb8\u4f60\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u81ea\u52a8\u91cd\u65b0\u90e8\u7f72\uff09\u3002\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold dev"),"\u3002"),(0,a.kt)("p",{parentName:"li"}," \u7531\u4e8e\u4f60\u9700\u8981\u5bf9\u955c\u50cf\u4ed3\u5e93\u5177\u6709\u63a8\u9001\u8bbf\u95ee\u6743\u9650\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u4f7f\u7528 docker \u767b\u5f55\uff0c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u672c\u5730\u955c\u50cf\u4ed3\u5e93\uff1a"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"docker-hub",label:"Docker Hub",default:!0,mdxType:"TabItem"},(0,a.kt)("p",{parentName:"li"},"  \u5728\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold dev")," \u4e4b\u524d\uff0c\u5982\u679c\u4f60\u6709 ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," \u8d26\u53f7\uff0c\u8bf7\u4f7f\u7528\u4f60\u7684 docker \u767b\u5f55\u3002\u7136\u540e\uff0c\u5728\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold.yaml")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"manifests.yaml")," \u4e2d\uff0c\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"matamagu/express-sample")," \u66ff\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"YOUR_DOCKER_HUB_USERNAME/express-sample"),"\uff0c\u8fd9\u662f\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold dev")," \u4f1a\u5c06\u6784\u5efa\u7684\u955c\u50cf\u63a8\u9001\u5230 DockerHub\u3002")),(0,a.kt)(l.Z,{value:"local-registry",label:"\u672c\u5730\u955c\u50cf\u4ed3\u5e93",mdxType:"TabItem"},(0,a.kt)("p",{parentName:"li"},"  \u4f60\u53ef\u4ee5\u5148\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u8bbe\u7f6e\u672c\u5730\u955c\u50cf\u4ed3\u5e93\uff1a",(0,a.kt)("br",null),(0,a.kt)("br",null),"  "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"docker run -d -p 5000:5000 --restart=always --name registry registry:2\n")),(0,a.kt)("p",{parentName:"li"},"  \u7136\u540e\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"skaffold dev --default-repo=localhost:5000\n")))),(0,a.kt)("p",{parentName:"li"},"\u5728\u8fdb\u884c\u5f00\u53d1\u65f6\uff0cSkaffold \u5c06\u68c0\u6d4b\u6240\u6709\u66f4\u6539\uff0c\u5e76\u4f1a\u81ea\u52a8\u518d\u6b21\u6267\u884c\u6784\u5efa\u548c\u90e8\u7f72\u7684\u8fc7\u7a0b\u3002\u4f60\u5c06\u80fd\u591f\u770b\u5230\u96c6\u7fa4\u4e2d\u7684\u4efb\u4f55\u66f4\u6539\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000"),"\uff0c\u4f60\u5c06\u770b\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"express-sample")," \u754c\u9762\u3002"))))}f.isMDXComponent=!0}}]);