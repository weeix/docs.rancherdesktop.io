"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[373],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(a),f=n,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||l;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},93687:function(e,t,a){var r=a(10412);const n=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=n?"ios":"android",u=n?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:u,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(67294),n=a(34334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return O}});var r=a(83117),n=a(67294),l=a(34334),o=a(12466),u=a(76775),i=a(91980),s=a(67392),c=a(50012);function d(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,s]=m({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),v=(()=>{const e=i??d;return f({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var v=a(72389),g="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==u&&(d(t),i(r))},f=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:p},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":u===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function O(e){const t=(0,v.Z)();return n.createElement(k,(0,r.Z)({key:String(t)},e))}},87475:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=a(83117),n=(a(67294),a(3905)),l=a(74866),o=a(85162),u=a(93687);const i={sidebar_label:"\u7aef\u53e3\u8f6c\u53d1",title:"\u7aef\u53e3\u8f6c\u53d1"},s=void 0,c={unversionedId:"ui/port-forwarding",id:"version-latest/ui/port-forwarding",title:"\u7aef\u53e3\u8f6c\u53d1",description:"\u5982\u9700\u8f6c\u53d1\u7aef\u53e3\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/ui/port-forwarding.md",sourceDirName:"ui",slug:"/ui/port-forwarding",permalink:"/zh/ui/port-forwarding",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/port-forwarding.md",tags:[],version:"latest",frontMatter:{sidebar_label:"\u7aef\u53e3\u8f6c\u53d1",title:"\u7aef\u53e3\u8f6c\u53d1"},sidebar:"tutorialSidebar",previous:{title:"\u901a\u7528",permalink:"/zh/ui/general"},next:{title:"\u955c\u50cf",permalink:"/zh/ui/images"}},d={},p=[],f={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{groupId:"os",defaultValue:u.Z.defaultOs,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Windows",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/ui-main/Windows_PortForwarding.png",alt:null}))),(0,n.kt)(o.Z,{value:"macOS",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/ui-main/macOS_PortForwarding.png",alt:null}))),(0,n.kt)(o.Z,{value:"Linux",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/ui-main/Linux_PortForwarding.png",alt:null})))),(0,n.kt)("p",null,"\u5982\u9700\u8f6c\u53d1\u7aef\u53e3\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u627e\u5230 Service \u5e76\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Forward"),"\uff0c"),(0,n.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u7aef\u53e3\u6216\u4f7f\u7528\u968f\u673a\u5206\u914d\u7684\u7aef\u53e3\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb ","\u2713"," \u6309\u94ae\u6765\u786e\u8ba4\u4f60\u7684\u9009\u62e9\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Cancel")," \u6765\u79fb\u9664\u5206\u914d\u7684\u7aef\u53e3\u3002")))}m.isMDXComponent=!0}}]);