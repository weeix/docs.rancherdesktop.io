"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[3755],{29980:function(e,n,a){a.r(n),a.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return h}});var t=a(85893),r=a(11151),i=a(74866),l=a(85162),s=a(93687);const o={sidebar_label:"\u955c\u50cf",title:"\u955c\u50cf"},u=void 0,c={id:"ui/images",title:"\u955c\u50cf",description:"Images \u9009\u9879\u5361\u5141\u8bb8\u4f60\u7ba1\u7406\u865a\u62df\u673a\u4e0a\u7684\u955c\u50cf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9/ui/images.md",sourceDirName:"ui",slug:"/ui/images",permalink:"/zh/1.9/ui/images",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/ui/images.md",tags:[],version:"1.9",frontMatter:{sidebar_label:"\u955c\u50cf",title:"\u955c\u50cf"},sidebar:"tutorialSidebar",previous:{title:"\u7aef\u53e3\u8f6c\u53d1",permalink:"/zh/1.9/ui/port-forwarding"},next:{title:"\u6545\u969c\u6392\u9664",permalink:"/zh/1.9/ui/troubleshooting"}},d={},h=[{value:"Scanning Images",id:"scanning-images",level:3},{value:"Adding Images",id:"adding-images",level:3},{value:"Pulling Images",id:"pulling-images",level:4},{value:"Building Images",id:"building-images",level:4}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Images"})," \u9009\u9879\u5361\u5141\u8bb8\u4f60\u7ba1\u7406\u865a\u62df\u673a\u4e0a\u7684\u955c\u50cf\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u6539\u7528 nerdctl \u7ba1\u7406\u955c\u50cf\uff0c\u8bf7\u53c2\u9605",(0,t.jsx)(n.a,{href:"../tutorials/working-with-images",children:"\u955c\u50cf"}),"\u3002"]}),"\n",(0,t.jsxs)(i.Z,{groupId:"os",defaultValue:s.Z.defaultOs,children:[(0,t.jsx)(l.Z,{value:"Windows",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/ui-main/Windows_Images.png",alt:""})})}),(0,t.jsx)(l.Z,{value:"macOS",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/ui-main/macOS_Images.png",alt:""})})}),(0,t.jsx)(l.Z,{value:"Linux",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/ui-main/Linux_Images.png",alt:""})})})]}),"\n",(0,t.jsx)(n.h3,{id:"scanning-images",children:"Scanning Images"}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64\u529f\u80fd\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://github.com/aquasecurity/trivy",children:"Trivy"})," \u6765\u626b\u63cf\u4f60\u7684\u955c\u50cf\uff0c\u4ece\u800c\u67e5\u627e\u6f0f\u6d1e\u548c\u914d\u7f6e\u95ee\u9898\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u626b\u63cf\u955c\u50cf\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u4ece\u955c\u50cf\u5217\u8868\u4e2d\uff0c\u627e\u5230\u8981\u626b\u63cf\u7684\u955c\u50cf\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u5355\u51fb ",(0,t.jsx)(n.strong,{children:"\u22ee > Scan"}),"\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5c06\u663e\u793a\u6309\u4e25\u91cd\u7a0b\u5ea6\u6392\u5e8f\u7684\u6f0f\u6d1e\u6458\u8981\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u5355\u51fb ",(0,t.jsx)(n.strong,{children:">"})," \u67e5\u770b\u200b\u200b\u6bcf\u4e2a\u6f0f\u6d1e\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5176\u4e2d\u5305\u62ec\u6f0f\u6d1e\u8be6\u60c5\u7684\u94fe\u63a5\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"adding-images",children:"Adding Images"}),"\n",(0,t.jsx)(n.h4,{id:"pulling-images",children:"Pulling Images"}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u9009\u9879\u53ef\u4ee5\u8ba9\u4f60\u5c06\u955c\u50cf\u4ece\u955c\u50cf\u4ed3\u5e93\u62c9\u53d6\u5230\u4f60\u7684\u865a\u62df\u673a\u4e2d\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u62c9\u53d6\u955c\u50cf\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,t.jsx)(n.strong,{children:"+"})," \u6309\u94ae\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5355\u51fb ",(0,t.jsx)(n.strong,{children:"Pull"})," \u9009\u9879\u5361\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u8f93\u5165\u8981\u62c9\u53d6\u7684\u955c\u50cf\u7684\u540d\u79f0\u3002","\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u955c\u50cf\u662f\u4ece ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/",children:"Docker Hub"})," \u4e2d\u63d0\u53d6\u7684\uff08\u683c\u5f0f\uff1a",(0,t.jsx)(n.code,{children:"repo/image[:tag]"}),"\uff09\u3002\u8981\u4ece\u5176\u4ed6\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\uff0c\u8bf7\u5305\u542b\u4e3b\u673a\u540d ",(0,t.jsx)(n.code,{children:"registry.example.com/repo/image[:tag]"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5355\u51fb ",(0,t.jsx)(n.strong,{children:"Pull"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"building-images",children:"Building Images"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u6b64\u9009\u9879\u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u4f60\u7684\u865a\u62df\u673a\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u6784\u5efa\u955c\u50cf\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,t.jsx)(n.strong,{children:"+"})," \u6309\u94ae\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5355\u51fb ",(0,t.jsx)(n.strong,{children:"Build"})," \u9009\u9879\u5361\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u8f93\u5165\u6784\u5efa\u7684\u955c\u50cf\u7684\u540d\u79f0\uff0c\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"repo/image"}),"\u3001",(0,t.jsx)(n.code,{children:"repo/image:tag"}),"\u3001",(0,t.jsx)(n.code,{children:"registry.example.com/repo/image"})," \u6216 ",(0,t.jsx)(n.code,{children:"registry.example.com/repo/image:tag"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5355\u51fb ",(0,t.jsx)(n.strong,{children:"Build"}),"\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5728\u6587\u4ef6\u6d4f\u89c8\u5668\u4e2d\uff0c\u9009\u62e9\u8981\u7528\u6765\u6784\u5efa\u955c\u50cf\u7684 Dockerfile\u3002"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},93687:function(e,n,a){var t=a(10412);const r=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",s=r?"macOS":i?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,n,a){a.d(n,{Z:function(){return l}});a(67294);var t=a(34334),r={tabItem:"tabItem_Ymn6"},i=a(85893);function l(e){let{children:n,hidden:a,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:a,children:n})}},74866:function(e,n,a){a.d(n,{Z:function(){return k}});var t=a(67294),r=a(34334),i=a(12466),l=a(16550),s=a(20469),o=a(91980),u=a(67392),c=a(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,i=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[u,d]=p({queryString:a,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),b=(()=>{const e=u??g;return m({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=a(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=a(85893);function x(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const n=e.currentTarget,a=o.indexOf(n),r=s[a].value;r!==t&&(u(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function k(e){const n=(0,f.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},11151:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return l}});var t=a(67294);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);