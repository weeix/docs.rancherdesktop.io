"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4837],{66473:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var r=n(85893),o=n(11151);n(74866),n(85162);const a={sidebar_label:"WSL",title:"WSL (Windows)"},s=void 0,u={id:"ui/preferences/wsl",title:"WSL (Windows)",description:"The option to make the Rancher Desktop Kubernetes configuration accessible to any Linux distributions configured for WSL. Once enabled, you can communicate with the Rancher Desktop Kubernetes cluster using tools like kubectl from within the WSL distribution.",source:"@site/versioned_docs/version-latest/ui/preferences/wsl.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/wsl",permalink:"/ui/preferences/wsl",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/preferences/wsl.md",tags:[],version:"latest",frontMatter:{sidebar_label:"WSL",title:"WSL (Windows)"}},i={},l=[];function c(e){const t={a:"a",code:"code",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The option to make the Rancher Desktop Kubernetes configuration accessible to any Linux distributions configured for WSL. Once enabled, you can communicate with the Rancher Desktop Kubernetes cluster using tools like ",(0,r.jsx)(t.code,{children:"kubectl"})," from within the WSL distribution."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Windows_wsl.png",alt:""})}),"\n",(0,r.jsxs)(t.p,{children:["With WSL, memory and CPU allocation is configured globally across all Linux distributions. Refer to the ",(0,r.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/wsl-config#options-for-wslconfig",children:"WSL documentation"})," for instructions."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},85162:function(e,t,n){n.d(t,{Z:function(){return s}});n(67294);var r=n(34334),o={tabItem:"tabItem_Ymn6"},a=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n,children:t})}},74866:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(67294),o=n(34334),a=n(12466),s=n(16550),u=n(20469),i=n(91980),l=n(67392),c=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=f(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,d]=p({queryString:n,groupId:o}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),v=(()=>{const e=l??b;return h({value:e,tabValues:a})?e:null})();(0,u.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=n(85893);function w(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),o=u[n].value;o!==r&&(l(t),s(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,o.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(w,{...e,...t}),(0,g.jsx)(k,{...e,...t})]})}function x(e){const t=(0,m.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:function(e,t,n){n.d(t,{Z:function(){return u},a:function(){return s}});var r=n(67294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);