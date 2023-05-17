"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7551],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93687:function(e,t,n){var a=n(10412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",u=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:u,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(34334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return O}});var a=n(83117),r=n(67294),l=n(34334),o=n(12466),u=n(76775),i=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,s]=m({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=i??p;return f({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var v=n(72389),g="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==u&&(p(t),i(a))},f=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":u===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function O(e){const t=(0,v.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},14029:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(83117),r=(n(67294),n(3905)),l=n(74866),o=n(85162),u=n(93687);const i={sidebar_label:"\u8bca\u65ad",title:"\u8bca\u65ad"},s=void 0,c={unversionedId:"ui/diagnostics",id:"version-1.7/ui/diagnostics",title:"\u8bca\u65ad",description:"\u6ce8\u610f\uff1aRancher Desktop \u4e0d\u4f1a\u5c06\u8bca\u65ad\u6570\u636e\u53d1\u9001\u5230\u4efb\u4f55\u8fdc\u7a0b\u670d\u52a1\u5668\u8fdb\u884c\u5904\u7406\u6216\u5b58\u50a8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7/ui/diagnostics.md",sourceDirName:"ui",slug:"/ui/diagnostics",permalink:"/zh/1.7/ui/diagnostics",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/ui/diagnostics.md",tags:[],version:"1.7",frontMatter:{sidebar_label:"\u8bca\u65ad",title:"\u8bca\u65ad"},sidebar:"tutorialSidebar",previous:{title:"\u6545\u969c\u6392\u9664",permalink:"/zh/1.7/ui/troubleshooting"},next:{title:"\u5e94\u7528\u7a0b\u5e8f",permalink:"/zh/1.7/ui/preferences/application"}},p={},d=[],f={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1aRancher Desktop ",(0,r.kt)("em",{parentName:"p"},"\u4e0d\u4f1a"),"\u5c06\u8bca\u65ad\u6570\u636e\u53d1\u9001\u5230\u4efb\u4f55\u8fdc\u7a0b\u670d\u52a1\u5668\u8fdb\u884c\u5904\u7406\u6216\u5b58\u50a8\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Diagnostics")," \u529f\u80fd\u901a\u8fc7\u5728\u540e\u53f0\u8fd0\u884c\u591a\u9879\u68c0\u67e5\u6765\u68c0\u6d4b\u73af\u5883\u4e2d\u7684\u5e38\u89c1\u95ee\u9898\uff08\u4f8b\u5982\u4e0d\u6ee1\u8db3\u6700\u4f4e\u8981\u6c42\u3001\u914d\u7f6e\u9519\u8bef\u7b49\uff09\uff0c\u5e2e\u52a9\u4f60\u81ea\u884c\u6392\u9664\u548c\u4fee\u590d Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u6bcf\u6b21\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u65f6\u90fd\u4f1a\u8fd0\u884c\u8bca\u65ad\u68c0\u67e5\u3002\u5982\u679c\u53d1\u73b0\u4efb\u4f55\u95ee\u9898\uff0c\u5219\u5931\u8d25\u68c0\u67e5\u7684\u6570\u91cf\u4f1a\u663e\u793a\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\u7684 ",(0,r.kt)("em",{parentName:"p"},"Diagnostics")," \u83dc\u5355\u6587\u672c\u7684\u65c1\u8fb9\u3002",(0,r.kt)("em",{parentName:"p"},"Diagnostics")," \u9009\u9879\u5361\u4f1a\u663e\u793a\u8bca\u65ad\u6d4b\u8bd5\u7684\u7ed3\u679c\uff0c\u7a81\u51fa\u663e\u793a\u9700\u8981\u6ce8\u610f\u7684\u533a\u57df\uff0c\u5e76\u6307\u5bfc\u4f60\u89e3\u51b3\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u8fdb\u884c\u4e86\u975e\u6807\u51c6\u8bbe\u7f6e\uff0c\u5e76\u4e14\u77e5\u9053\u8fd9\u4e9b\u68c0\u67e5\u4e0d\u9002\u7528\u4e8e\u4f60\u7684\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u5728\u6b64\u9009\u9879\u5361\u4e0a mute/unmute \u4e2a\u522b\u68c0\u67e5\u3002\u4f60\u8fd8\u53ef\u4ee5\u968f\u65f6\u91cd\u65b0\u8fd0\u884c\u8bca\u65ad\u7a0b\u5e8f\uff0c\u4ece\u800c\u9a8c\u8bc1\u4f60\u5bf9\u73af\u5883\u6240\u505a\u7684\u66f4\u6539\u662f\u5426\u5df2\u7ecf\u89e3\u51b3\u4e86\u95ee\u9898\u3002"),(0,r.kt)(l.Z,{groupId:"os",defaultValue:u.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/Windows_Diagnostics.png",alt:null}))),(0,r.kt)(o.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/macOS_Diagnostics.png",alt:null}))),(0,r.kt)(o.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/Linux_Diagnostics.png",alt:null})))))}m.isMDXComponent=!0}}]);