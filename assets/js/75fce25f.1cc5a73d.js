"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[3250],{13384:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return d}});var n=t(85893),r=t(11151),l=t(74866),i=t(85162);t(93687);const u={sidebar_label:"Hardware",title:"Hardware (macOS & Linux)"},s=void 0,o={id:"ui/preferences/virtual-machine/hardware",title:"Hardware (macOS & Linux)",description:"Memory",source:"@site/versioned_docs/version-1.9/ui/preferences/virtual-machine/hardware.md",sourceDirName:"ui/preferences/virtual-machine",slug:"/ui/preferences/virtual-machine/hardware",permalink:"/1.9/ui/preferences/virtual-machine/hardware",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/ui/preferences/virtual-machine/hardware.md",tags:[],version:"1.9",frontMatter:{sidebar_label:"Hardware",title:"Hardware (macOS & Linux)"},sidebar:"tutorialSidebar",previous:{title:"Emulation",permalink:"/1.9/ui/preferences/virtual-machine/emulation"},next:{title:"Network",permalink:"/1.9/ui/preferences/virtual-machine/network"}},c={},d=[{value:"Memory",id:"memory",level:3},{value:"CPUs",id:"cpus",level:3}];function p(e){const a={h3:"h3",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.Z,{groupId:"os",children:[(0,n.jsx)(i.Z,{value:"macOS",children:(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabHardware.png",alt:""})})}),(0,n.jsx)(i.Z,{value:"Linux",children:(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Linux_virtualMachine_tabHardware.png",alt:""})})})]}),"\n",(0,n.jsx)(a.h3,{id:"memory",children:"Memory"}),"\n",(0,n.jsx)(a.p,{children:"The amount of memory to allocate to Rancher Desktop. The selectable range is based on your system. The red area within the range indicates an allocation that may affect system services."}),"\n",(0,n.jsx)(a.h3,{id:"cpus",children:"CPUs"}),"\n",(0,n.jsx)(a.p,{children:"The number of CPUs to allocate to Rancher Desktop. The selectable range is based on your system. The red area within the range indicates an allocation that may affect system services."})]})}function f(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},93687:function(e,a,t){var n=t(10412);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",u=r?"macOS":l?"Windows":"Linux";a.Z={defaultGuide:"quickstart",defaultOs:u,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,a,t){t.d(a,{Z:function(){return i}});t(67294);var n=t(34334),r={tabItem:"tabItem_Ymn6"},l=t(85893);function i(e){let{children:a,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:t,children:a})}},74866:function(e,a,t){t.d(a,{Z:function(){return k}});var n=t(67294),r=t(34334),l=t(12466),i=t(16550),u=t(20469),s=t(91980),o=t(67392),c=t(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}(t);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function f(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const r=(0,i.k6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,e),r.replace({...r.location,search:a.toString()})}),[l,r])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,l=p(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!f({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[o,d]=m({queryString:t,groupId:r}),[h,v]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,c.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),b=(()=>{const e=o??h;return f({value:e,tabValues:l})?e:null})();(0,u.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=t(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=t(85893);function w(e){let{className:a,block:t,selectedValue:n,selectValue:i,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),c=e=>{const a=e.currentTarget,t=s.indexOf(a),r=u[t].value;r!==n&&(o(a),i(r))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a),children:u.map((e=>{let{value:a,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>s.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function y(e){let{lazy:a,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function x(e){const a=h(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(w,{...e,...a}),(0,g.jsx)(y,{...e,...a})]})}function k(e){const a=(0,v.Z)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(a))}},11151:function(e,a,t){t.d(a,{Z:function(){return u},a:function(){return i}});var n=t(67294);const r={},l=n.createContext(r);function i(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function u(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);