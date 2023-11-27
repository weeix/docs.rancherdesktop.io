"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9736],{2123:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return d}});var t=r(85893),s=r(11151),i=r(74866),o=r(85162);const l={title:"\u914d\u7f6e\u811a\u672c"},c=void 0,a={id:"how-to-guides/provisioning-scripts",title:"\u914d\u7f6e\u811a\u672c",description:"\u914d\u7f6e\u811a\u672c\u53ef\u4ee5\u8986\u76d6 Rancher Desktop \u7684\u4e00\u4e9b\u5185\u90e8\u6d41\u7a0b\u3002\u4f8b\u5982\uff0c\u811a\u672c\u53ef\u7528\u4e8e\u5411 K3s \u63d0\u4f9b\u67d0\u4e9b\u547d\u4ee4\u884c\u53c2\u6570\u3001\u6dfb\u52a0\u989d\u5916\u7684\u6302\u8f7d\u3001\u589e\u52a0 ulimit \u503c\u7b49\u3002\u672c\u6307\u5357\u5c06\u4ecb\u7ecd\u5982\u4f55\u4e3a macOS\u3001Linux \u548c Windows \u4e3b\u673a\u8bbe\u7f6e\u811a\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.6/how-to-guides/provisioning-scripts.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/provisioning-scripts",permalink:"/zh/1.6/how-to-guides/provisioning-scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.6/how-to-guides/provisioning-scripts.md",tags:[],version:"1.6",frontMatter:{title:"\u914d\u7f6e\u811a\u672c"},sidebar:"tutorialSidebar",previous:{title:"Skaffold \u4e0e Rancher Desktop",permalink:"/zh/1.6/how-to-guides/skaffold-and-rancher-desktop"},next:{title:"\u589e\u52a0\u6253\u5f00\u6587\u4ef6\u9650\u5236",permalink:"/zh/1.6/how-to-guides/increasing-open-file-limit"}},u={},d=[{value:"macOS &amp; Linux",id:"macos--linux",level:2},{value:"Windows",id:"windows",level:2}];function h(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u914d\u7f6e\u811a\u672c\u53ef\u4ee5\u8986\u76d6 Rancher Desktop \u7684\u4e00\u4e9b\u5185\u90e8\u6d41\u7a0b\u3002\u4f8b\u5982\uff0c\u811a\u672c\u53ef\u7528\u4e8e\u5411 K3s \u63d0\u4f9b\u67d0\u4e9b\u547d\u4ee4\u884c\u53c2\u6570\u3001\u6dfb\u52a0\u989d\u5916\u7684\u6302\u8f7d\u3001\u589e\u52a0 ulimit \u503c\u7b49\u3002\u672c\u6307\u5357\u5c06\u4ecb\u7ecd\u5982\u4f55\u4e3a macOS\u3001Linux \u548c Windows \u4e3b\u673a\u8bbe\u7f6e\u811a\u672c\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"macos--linux",children:"macOS & Linux"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 macOS \u548c Linux \u4e0a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 lima override.yaml \u6765\u7f16\u5199\u914d\u7f6e\u811a\u672c\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728\u4ee5\u4e0b\u8def\u5f84\u521b\u5efa ",(0,t.jsx)(n.code,{children:"override.yaml"})," \u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(i.Z,{groupId:"os",children:[(0,t.jsx)(o.Z,{value:"macOS",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"~/Library/Application Support/rancher-desktop/lima/_config/override.yaml\n"})})}),(0,t.jsx)(o.Z,{value:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"~/.local/share/rancher-desktop/lima/_config/override.yaml\n"})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728\u4e0a\u4e00\u6b65\u4e2d\u521b\u5efa\u7684 ",(0,t.jsx)(n.code,{children:"override.yaml"})," \u6587\u4ef6\u4e2d\u7f16\u5199\u914d\u7f6e\u811a\u672c\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u811a\u672c\u6765\u589e\u52a0\u5bb9\u5668\u7684 ulimit\uff1a"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"override.yaml"})," \u6765\u8986\u76d6/\u4fee\u6539 lima \u914d\u7f6e\u8bbe\u7f6e\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u521b\u5efa\u4e86\u989d\u5916\u7684\u6302\u8f7d\uff1a"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mounts:\n  - location: /some/path\n    writable: true\n"})}),"\n",(0,t.jsx)(n.h2,{id:"windows",children:"Windows"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1a\u5728 Windows \u4e0a\uff0c\u4f60\u53ea\u80fd\u4e3a 1.1.0 \u6216\u66f4\u9ad8\u7248\u672c\u7684 Rancher Desktop \u4f7f\u7528\u8fd9\u4e9b\u914d\u7f6e\u811a\u672c\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4f60\u9700\u8981\u81f3\u5c11\u8fd0\u884c Rancher Desktop \u4e00\u6b21\u4ee5\u5141\u8bb8\u5b83\u521b\u5efa\u914d\u7f6e\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6253\u5f00 ",(0,t.jsx)(n.code,{children:"%AppData%\\\\rancher-desktop\\\\provisioning"})," \u76ee\u5f55\u3002\u5b8c\u6574\u8def\u5f84\u7684\u793a\u4f8b\uff1a",(0,t.jsx)(n.code,{children:"C:\\\\Users\\\\Joe\\\\AppData\\\\Roaming\\\\rancher-desktop\\\\provisioning"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u4efb\u4f55\u6587\u4ef6\u6269\u5c55\u540d\u4e3a ",(0,t.jsx)(n.code,{children:".start"})," \u7684\u6587\u4ef6\uff08\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"k3s-overrides.start"}),"\uff09\u90fd\u53ef\u4ee5\u5728 ",(0,t.jsx)(n.em,{children:"Rancher Desktop \u542f\u52a8 Kubernetes \u540e\u7aef\uff08\u5982\u679c\u542f\u7528\uff09"})," \u65f6\u6267\u884c\u3002\u6b64\u7c7b\u6587\u4ef6\u5c06\u5728 Rancher Desktop WSL \u4e0a\u4e0b\u6587\u4e2d\u8fd0\u884c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:".start"})," \u6587\u4ef6\u7684\u793a\u4f8b\u6d41\u7a0b\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Rancher Desktop \u5185\u90e8\u8bbe\u7f6e"}),"\n",(0,t.jsx)(n.li,{children:"\u8fd0\u884c\u914d\u7f6e\u811a\u672c"}),"\n",(0,t.jsxs)(n.li,{children:["\u5728 UI \u4e2d\u542f\u7528 ",(0,t.jsx)(n.code,{children:"dockerd"})," \u6216 ",(0,t.jsx)(n.code,{children:"containerd"})]}),"\n",(0,t.jsx)(n.li,{children:"Kubernetes (K3s)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"%AppData%\\\\rancher-desktop\\\\provisioning\\\\insecure-registry.start"})," \u5c06\u5141\u8bb8 ",(0,t.jsx)(n.code,{children:"nerdctl"})," \u9ed8\u8ba4\u4f7f\u7528\u4e0d\u5b89\u5168\u7684\u955c\u50cf\u4ed3\u5e93\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"#!/bin/sh\n\nmkdir -p /etc/nerdctl\ncat >  /etc/nerdctl/nerdctl.toml <<EOF\ninsecure_registry = true\nEOF\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8bf7\u6ce8\u610f\uff0c\u6587\u4ef6\u6269\u5c55\u540d\u4e3a ",(0,t.jsx)(n.code,{children:".stop"})," \u7684\u6587\u4ef6\uff08\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"wipe-data.stop"}),"\uff09\u53ef\u4ee5\u5728 ",(0,t.jsx)(n.em,{children:"Rancher Desktop \u5173\u95ed Kubernetes \u540e\u7aef\uff08\u5982\u679c\u542f\u7528\uff09\u540e"})," \u6267\u884c\u3002\u6b64\u7c7b\u6587\u4ef6\u5c06\u5728\u76f8\u540c\u7684 Rancher Desktop WSL \u4e0a\u4e0b\u6587\u4e2d\u8fd0\u884c\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:".stop"})," \u6587\u4ef6\u7684\u793a\u4f8b\u6d41\u7a0b\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u505c\u6b62 ",(0,t.jsx)(n.code,{children:"k3s"}),"\u3001",(0,t.jsx)(n.code,{children:"dockerd"})," \u6216 ",(0,t.jsx)(n.code,{children:"containerd"})]}),"\n",(0,t.jsx)(n.li,{children:"\u8fd0\u884c\u53d6\u6d88\u914d\u7f6e\u7684\u811a\u672c"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u91cd\u8981\u63d0\u793a"}),"\uff1a\u811a\u672c\u9700\u8981\u4ee5 Unix \u884c\u7ed3\u5c3e\u4fdd\u5b58\uff0c\u672a\u5b8c\u6210\u884c\u5c3e\u8f6c\u6362\uff0c\u4e14\u5177\u6709 DOS \u884c\u7ed3\u5c3e\u7684\u6587\u4ef6\u53ef\u80fd\u4f1a\u4ea7\u751f\u610f\u60f3\u4e0d\u5230\u7684\u7ed3\u679c\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u914d\u7f6e\u811a\u672c\u66f4\u6539\u7684\u5185\u5bb9\u662f\u6709\u9650\u5236\u7684\u3002\u4f8b\u5982\uff0c\u4f60\u4e0d\u80fd\u4f7f\u7528\u914d\u7f6e\u811a\u672c\u66f4\u6539 WSL2 \u4e0a\u7684\u786c ulimit\u3002\u8bf7\u8c28\u614e\u4f7f\u7528\u914d\u7f6e\u811a\u672c\uff0c\u5982\u679c\u4f60\u5bf9\u914d\u7f6e\u811a\u672c\u6709\u4efb\u4f55\u5177\u4f53\u95ee\u9898\uff0c\u8bf7\u968f\u65f6\u5728 Slack/Github \u4e0a\u4e0e Rancher Desktop \u56e2\u961f\u8054\u7cfb\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:function(e,n,r){r.d(n,{Z:function(){return o}});r(67294);var t=r(34334),s={tabItem:"tabItem_Ymn6"},i=r(85893);function o(e){let{children:n,hidden:r,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,o),hidden:r,children:n})}},74866:function(e,n,r){r.d(n,{Z:function(){return w}});var t=r(67294),s=r(34334),i=r(12466),o=r(16550),l=r(20469),c=r(91980),a=r(67392),u=r(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,a.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,i=h(e),[o,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[a,d]=m({queryString:r,groupId:s}),[x,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,u.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),j=(()=>{const e=a??x;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=r(72389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},b=r(85893);function v(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.o5)(),u=e=>{const n=e.currentTarget,r=c.indexOf(n),s=l[r].value;s!==t&&(a(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.Z)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,b.jsx)(k,{...e,children:d(e.children)},String(n))}},11151:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var t=r(67294);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);