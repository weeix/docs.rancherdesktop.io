"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5113],{4726:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return b}});var t=r(85893),a=r(11151),s=r(74866),l=r(85162),u=r(93687);const i={sidebar_label:"Kubernetes",title:"Kubernetes"},o=void 0,c={id:"ui/preferences/kubernetes",title:"Kubernetes",description:"Enable Kubernetes",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7/ui/preferences/kubernetes.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/kubernetes",permalink:"/zh/1.7/ui/preferences/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/ui/preferences/kubernetes.md",tags:[],version:"1.7",frontMatter:{sidebar_label:"Kubernetes",title:"Kubernetes"},sidebar:"tutorialSidebar",previous:{title:"\u5bb9\u5668\u5f15\u64ce",permalink:"/zh/1.7/ui/preferences/container-engine"},next:{title:"\u4f7f\u7528\u955c\u50cf",permalink:"/zh/1.7/tutorials/working-with-images"}},d={},b=[{value:"Enable Kubernetes",id:"enable-kubernetes",level:3},{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"Kubernetes Port",id:"kubernetes-port",level:3},{value:"Enable Traefik",id:"enable-traefik",level:3}];function p(e){const n={code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"enable-kubernetes",children:"Enable Kubernetes"}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64\u9009\u9879\u5141\u8bb8\u4f60\u542f\u7528\u6216\u7981\u7528 Kubernetes\u3002\u7981\u7528 Kubernetes \u540e\uff0c\u4f60\u53ef\u4ee5\u53ea\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"containerd"})," \u6216 ",(0,t.jsx)(n.code,{children:"dockerd"})," \u6765\u51cf\u5c11\u8d44\u6e90\u6d88\u8017\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cKubernetes \u662f\u542f\u7528\u7684\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u542f\u7528/\u7981\u7528 Kubernetes\uff0c\u53ea\u9700\u9009\u4e2d/\u53d6\u6d88\u9009\u4e2d ",(0,t.jsx)(n.code,{children:"Enable Kubernetes"})," \u590d\u9009\u6846\u3002\u542f\u7528/\u7981\u7528 Kubernetes \u65f6\uff0c\u8be5\u5e94\u7528\u7a0b\u5e8f\u5c06\u91cd\u65b0\u542f\u52a8\u3002\u7981\u7528 Kubernetes \u4e0d\u4f1a\u5220\u9664\u73b0\u6709\u8d44\u6e90\uff0c\u91cd\u65b0\u542f\u7528 Kubernetes \u65f6\uff0c\u4f60\u53ef\u4ee5\u518d\u6b21\u4f7f\u7528\u8fd9\u4e9b\u8d44\u6e90\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"kubernetes-version",children:"Kubernetes Version"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u9009\u9879\u663e\u793a\u4e86 Rancher Desktop \u5b9e\u4f8b\u53ef\u4ee5\u4f7f\u7528\u7684 Kubernetes \u7248\u672c\u5217\u8868\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5347\u7ea7\u65f6\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f1a\u8fdb\u884c\u68c0\u67e5\uff0c\u770b\u76ee\u6807 Kubernetes \u7248\u672c\u662f\u5426\u53ef\u4ee5\u5728\u672c\u5730\u4f7f\u7528\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5b83\u4f1a\u4e0b\u8f7d\u5bf9\u5e94\u6587\u4ef6\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4fdd\u7559\u5de5\u4f5c\u8d1f\u8f7d\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4fdd\u7559\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u964d\u7ea7\u65f6\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u79fb\u9664\u5de5\u4f5c\u8d1f\u8f7d\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4fdd\u7559\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u5207\u6362\u7248\u672c\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u70b9\u51fb ",(0,t.jsx)(n.strong,{children:"Kubernetes version"})," \u4e0b\u62c9\u83dc\u5355\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u9009\u62e9\u8981\u8f6c\u6362\u7684\u7248\u672c\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"kubernetes-port",children:"Kubernetes Port"}),"\n",(0,t.jsx)(n.p,{children:"\u8bbe\u7f6e Kubernetes \u66b4\u9732\u7684\u7aef\u53e3\u3002\u5982\u679c\u6709\u591a\u4e2a K3s \u5b9e\u4f8b\u6b63\u5728\u8fd0\u884c\uff0c\u4f7f\u7528\u6b64\u8bbe\u7f6e\u53ef\u4ee5\u907f\u514d\u7aef\u53e3\u51b2\u7a81\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"enable-traefik",children:"Enable Traefik"}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u9009\u9879\u5141\u8bb8\u4f60\u542f\u7528\u6216\u7981\u7528 Traefik\u3002\u7981\u7528 Traefik \u540e\uff0c\u4f60\u53ef\u4ee5\u91ca\u653e\u7aef\u53e3 80 \u548c 443\uff0c\u4ee5\u4fbf\u5c06\u5176\u7528\u4e8e\u5907\u7528 ingress \u914d\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cTraefik \u662f\u542f\u7528\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u7981\u7528 Traefik \u4e0d\u4f1a\u5220\u9664\u73b0\u6709\u8d44\u6e90\u3002"}),"\n",(0,t.jsxs)(s.Z,{groupId:"os",defaultValue:u.Z.defaultOs,children:[(0,t.jsx)(l.Z,{value:"Windows",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Windows_kubernetes.png",alt:""})})}),(0,t.jsx)(l.Z,{value:"macOS",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/macOS_kubernetes.png",alt:""})})}),(0,t.jsx)(l.Z,{value:"Linux",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Linux_kubernetes.png",alt:""})})})]})]})}function f(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},93687:function(e,n,r){var t=r(10412);const a=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=a?"ios":"android",u=a?"macOS":s?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:u,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,n,r){r.d(n,{Z:function(){return l}});r(67294);var t=r(34334),a={tabItem:"tabItem_Ymn6"},s=r(85893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,l),hidden:r,children:n})}},74866:function(e,n,r){r.d(n,{Z:function(){return w}});var t=r(67294),a=r(34334),s=r(12466),l=r(16550),u=r(20469),i=r(91980),o=r(67392),c=r(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function h(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=b(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[o,d]=f({queryString:r,groupId:a}),[h,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),m=(()=>{const e=o??h;return p({value:e,tabValues:s})?e:null})();(0,u.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=r(72389),m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=r(85893);function x(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),c=e=>{const n=e.currentTarget,r=i.indexOf(n),a=u[r].value;a!==t&&(o(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:u.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function k(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=h(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(k,{...e,...n})]})}function w(e){const n=(0,v.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(n))}},11151:function(e,n,r){r.d(n,{Z:function(){return u},a:function(){return l}});var t=r(67294);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);