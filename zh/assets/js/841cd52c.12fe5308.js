"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1655],{82537:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(85893),s=n(11151),o=n(74866),a=n(85162);const l={title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4"},u=void 0,c={id:"how-to-guides/create-multi-node-cluster",title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4",description:"Rancher Desktop \u652f\u6301\u5355\u8282\u70b9\u96c6\u7fa4\u8bbe\u7f6e\uff0c\u8fd9\u6ee1\u8db3\u5927\u591a\u6570\u672c\u5730\u5f00\u53d1\u573a\u666f\u3002\u4f46\u662f\uff0c\u5728\u67d0\u4e9b\u7528\u4f8b\u4e2d\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4\uff0c\u6216\u542f\u52a8\u591a\u4e2a\u96c6\u7fa4\u5e76\u7075\u6d3b\u5730\u5728\u96c6\u7fa4\u4e4b\u95f4\u5207\u6362\u3002\u5c3d\u7ba1 Rancher Desktop \u6ca1\u6709\u5185\u7f6e\u7684\u591a\u8282\u70b9/\u96c6\u7fa4\u529f\u80fd\uff0c\u4f46\u4f60\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 k3d \u4e0e Rancher Desktop \u6765\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002k3d \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u5305\u88c5\u5668\uff0c\u7528\u4e8e\u5728 Docker \u4e2d\u8fd0\u884c k3s\uff08\u4e00\u4e2a\u6700\u5c0f\u5316\u7684 Kubernetes \u53d1\u884c\u7248\uff0cRancher Desktop \u4e5f\u4f7f\u7528\u5b83\uff09\u3002k3d \u80fd\u8ba9\u4f60\u8f7b\u677e\u5728 Docker \u4e2d\u521b\u5efa\u5355\u8282\u70b9\u548c\u591a\u8282\u70b9 k3s \u96c6\u7fa4\uff08\u4f8b\u5982\u7528\u4e8e Kubernetes \u4e0a\u7684\u672c\u5730\u5f00\u53d1\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9/how-to-guides/create-multi-node-cluster.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/create-multi-node-cluster",permalink:"/zh/1.9/how-to-guides/create-multi-node-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/how-to-guides/create-multi-node-cluster.md",tags:[],version:"1.9",frontMatter:{title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf",permalink:"/zh/1.9/how-to-guides/transfer-container-images"},next:{title:"\u8bbe\u7f6e NGINX Ingress Controller",permalink:"/zh/1.9/how-to-guides/setup-NGINX-Ingress-Controller"}},i={},d=[{value:"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4",id:"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Rancher Desktop \u652f\u6301",(0,r.jsx)(t.strong,{children:"\u5355\u8282\u70b9\u96c6\u7fa4"}),"\u8bbe\u7f6e\uff0c\u8fd9\u6ee1\u8db3\u5927\u591a\u6570\u672c\u5730\u5f00\u53d1\u573a\u666f\u3002\u4f46\u662f\uff0c\u5728\u67d0\u4e9b\u7528\u4f8b\u4e2d\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4\uff0c\u6216\u542f\u52a8\u591a\u4e2a\u96c6\u7fa4\u5e76\u7075\u6d3b\u5730\u5728\u96c6\u7fa4\u4e4b\u95f4\u5207\u6362\u3002\u5c3d\u7ba1 Rancher Desktop \u6ca1\u6709\u5185\u7f6e\u7684\u591a\u8282\u70b9/\u96c6\u7fa4\u529f\u80fd\uff0c\u4f46\u4f60\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 ",(0,r.jsx)(t.a,{href:"https://k3d.io",children:"k3d"})," \u4e0e Rancher Desktop \u6765\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002k3d \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u5305\u88c5\u5668\uff0c\u7528\u4e8e\u5728 Docker \u4e2d\u8fd0\u884c k3s\uff08\u4e00\u4e2a\u6700\u5c0f\u5316\u7684 Kubernetes \u53d1\u884c\u7248\uff0cRancher Desktop \u4e5f\u4f7f\u7528\u5b83\uff09\u3002k3d \u80fd\u8ba9\u4f60\u8f7b\u677e\u5728 Docker \u4e2d\u521b\u5efa\u5355\u8282\u70b9\u548c\u591a\u8282\u70b9 k3s \u96c6\u7fa4\uff08\u4f8b\u5982\u7528\u4e8e Kubernetes \u4e0a\u7684\u672c\u5730\u5f00\u53d1\uff09\u3002"]}),"\n",(0,r.jsx)(t.h3,{id:"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4",children:"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["\u786e\u4fdd\u5728 ",(0,r.jsx)(t.strong,{children:"Kubernetes Settings"})," \u9875\u9762\u4e2d\u9009\u62e9\u4e86 ",(0,r.jsx)(t.strong,{children:"dockerd(moby)"})," \u4f5c\u4e3a\u5bb9\u5668\u8fd0\u884c\u65f6\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u5b89\u88c5 k3d\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.Z,{groupId:"installation-approach",children:[(0,r.jsx)(a.Z,{value:"wget",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\n"})})}),(0,r.jsx)(a.Z,{value:"curl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\n"})})})]}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsxs)(t.li,{children:["\u8fd0\u884c ",(0,r.jsx)(t.code,{children:"k3d cluster create"})," \u547d\u4ee4\u6765\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u3002\u4f8b\u5982\uff1a"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"k3d cluster create two-node-cluster --agents 2\nk3d cluster create three-node-cluster --agents 3\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:["k3d \u5c06\u65b0\u521b\u5efa\u7684\u96c6\u7fa4\u8bbe\u7f6e\u4e3a active\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"kubectl config use-context"})," \u547d\u4ee4\u6765\u5207\u6362\u96c6\u7fa4\u3002\u4f8b\u5982\uff1a"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"kubectl config use-context k3d-two-node-cluster\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u8981\u4e86\u89e3\u6709\u5173 ",(0,r.jsx)(t.strong,{children:"k3s"})," \u548c ",(0,r.jsx)(t.strong,{children:"k3d"})," \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u8fd9\u4e9b\u9879\u76ee\u7684\u6587\u6863\uff08",(0,r.jsx)(t.a,{href:"https://docs.k3s.io/",children:"k3s \u6587\u6863"})," \u548c ",(0,r.jsx)(t.a,{href:"https://k3d.io/",children:"k3d \u6587\u6863"}),"\uff09\u3002"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["\u26a0\ufe0f"," \u8bf7\u6ce8\u610f\uff0c",(0,r.jsx)(t.code,{children:"k3d"})," \u521b\u5efa\u7684\u96c6\u7fa4\u4e0d\u662f\u901a\u8fc7 Rancher Desktop GUI \u7ba1\u7406\u7684\u3002"]})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:function(e,t,n){n.d(t,{Z:function(){return a}});n(67294);var r=n(34334),s={tabItem:"tabItem_Ymn6"},o=n(85893);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:n,children:t})}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(67294),s=n(34334),o=n(12466),a=n(16550),l=n(20469),u=n(91980),c=n(67392),i=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=h(e),[a,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=f({queryString:n,groupId:s}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,i.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),k=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{k&&u(k)}),[k]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(72389),k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=n(85893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),i=e=>{const t=e.currentTarget,n=u.indexOf(t),s=l[n].value;s!==r&&(c(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:i,...o,className:(0,s.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",k.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function w(e){const t=(0,m.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},11151:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var r=n(67294);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);