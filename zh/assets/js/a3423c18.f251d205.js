"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7573],{4010:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var t=r(85893),s=r(11151),l=r(74866),o=r(85162);const a={title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf"},i=void 0,c={id:"how-to-guides/transfer-container-images",title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf",description:"Rancher Desktop \u63d0\u4f9b dockerd \u548c containerd \u5bb9\u5668\u5f15\u64ce\u9009\u9879\u6765\u7ba1\u7406\u5bb9\u5668\u3002\u6709\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5c06\u955c\u50cf\u4ece\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u4f20\u8f93\u5230\u53e6\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u3002\u4f60\u4e5f\u53ef\u80fd\u5df2\u7ecf\u4ece\u4e0d\u540c\u7684\u5bb9\u5668\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u8fc1\u79fb\u5230 Rancher Desktop\uff0c\u5e76\u4e14\u5e0c\u671b\u5c06\u672c\u5730\u955c\u50cf\u4ece\u4ee5\u524d\u7684\u5e94\u7528\u7a0b\u5e8f\u73af\u5883\u5e26\u5230 Rancher Desktop \u73af\u5883\u4e2d\u3002\u672c\u6307\u5357\u4ecb\u7ecd\u4e86\u4f7f\u7528 save \u548c load \u547d\u4ee4\u4f20\u8f93\u955c\u50cf\u7684\u6b65\u9aa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9/how-to-guides/transfer-container-images.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/transfer-container-images",permalink:"/zh/1.9/how-to-guides/transfer-container-images",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/how-to-guides/transfer-container-images.md",tags:[],version:"1.9",frontMatter:{title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf"},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u548c\u5378\u8f7d Rancher Desktop \u6269\u5c55",permalink:"/zh/1.9/how-to-guides/installing-uninstalling-extensions"},next:{title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4",permalink:"/zh/1.9/how-to-guides/create-multi-node-cluster"}},d={},u=[{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Rancher Desktop \u63d0\u4f9b ",(0,t.jsx)(n.code,{children:"dockerd"})," \u548c ",(0,t.jsx)(n.code,{children:"containerd"})," \u5bb9\u5668\u5f15\u64ce\u9009\u9879\u6765\u7ba1\u7406\u5bb9\u5668\u3002\u6709\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5c06\u955c\u50cf\u4ece\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u4f20\u8f93\u5230\u53e6\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u3002\u4f60\u4e5f\u53ef\u80fd\u5df2\u7ecf\u4ece\u4e0d\u540c\u7684\u5bb9\u5668\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u8fc1\u79fb\u5230 Rancher Desktop\uff0c\u5e76\u4e14\u5e0c\u671b\u5c06\u672c\u5730\u955c\u50cf\u4ece\u4ee5\u524d\u7684\u5e94\u7528\u7a0b\u5e8f\u73af\u5883\u5e26\u5230 Rancher Desktop \u73af\u5883\u4e2d\u3002\u672c\u6307\u5357\u4ecb\u7ecd\u4e86\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"save"})," \u548c ",(0,t.jsx)(n.code,{children:"load"})," \u547d\u4ee4\u4f20\u8f93\u955c\u50cf\u7684\u6b65\u9aa4\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u6b65\u9aa4",children:"\u6b65\u9aa4"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1. \u5c06\u6e90\u73af\u5883\u7684\u955c\u50cf\u4fdd\u5b58\u4e3a tar \u5305"}),"\u3002"]}),"\n",(0,t.jsxs)(l.Z,{groupId:"container-runtime",children:[(0,t.jsxs)(o.Z,{value:"nerdctl",default:!0,children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4fdd\u5b58\u5355\u4e2a\u955c\u50cf"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nerdctl save -o local-image.tar image:tag\n"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4fdd\u5b58\u591a\u4e2a\u955c\u50cf"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nerdctl save -o local-images.tar image1:tag1 image2:tag2\n"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5c06\u6240\u6709\u955c\u50cf\u4fdd\u5b58\u5728\u547d\u540d\u7a7a\u95f4\u4e2d"}),"\n"]}),(0,t.jsxs)(n.p,{children:["\u4e0b\u9762\u4e24\u4e2a\u547d\u4ee4\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://stedolan.github.io/jq/",children:"jq"})," \u8fdb\u884c JSON \u89e3\u6790\u3002\u957f\u547d\u4ee4\u4f1a\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"nerdctl -n k8s.io image ls"})," \u5b50\u547d\u4ee4\u4f1a\u83b7\u53d6 ",(0,t.jsx)(n.code,{children:"k8s.io"})," \u547d\u540d\u7a7a\u95f4\u4e2d\u6240\u6709\u955c\u50cf\u7684\u5217\u8868\uff0c\u56e0\u6b64\u4e0d\u5305\u62ec\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u7684\u955c\u50cf\uff08\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"default"}),"\uff09\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"jq"})," \u5b50\u547d\u4ee4\u4f1a\u8fc7\u6ee4\u5e76\u683c\u5f0f\u5316\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684\u955c\u50cf\u5217\u8868\u3002","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u547d\u4ee4\u7684 ",(0,t.jsx)(n.code,{children:'select(.Repository!=\\"<none>\\")'})," \u90e8\u5206\u4f1a\u8df3\u8fc7\u4ed3\u5e93\u503c\u4e3a ",(0,t.jsx)(n.code,{children:"<none>"})," \u7684\u955c\u50cf\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u6839\u636e\u955c\u50cf\u6807\u7b7e\u7684\u503c\u662f\u5426\u4e3a ",(0,t.jsx)(n.code,{children:"<none>"}),"\uff0c\u547d\u4ee4\u7684 ",(0,t.jsx)(n.code,{children:'if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')'})," \u90e8\u5206\u4f1a\u5c06\u955c\u50cf\u7684\u540d\u79f0\u683c\u5f0f\u5316\u4e3a ",(0,t.jsx)(n.code,{children:"<Repository>"})," \u6216 ",(0,t.jsx)(n.code,{children:"<Repository>:<Tag>"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u6700\u540e\uff0c\u547d\u4ee4\u7684 ",(0,t.jsx)(n.code,{children:"nerdctl -n k8s.io save -o all-local-images-in-namespace.tar"})," \u90e8\u5206\u4f1a\u5c06\u524d\u4e24\u6b65\u8fc7\u6ee4\u548c\u683c\u5f0f\u5316\u7684\u955c\u50cf\u5217\u8868\u4fdd\u5b58\u5230 tar \u6587\u4ef6\u4e2d\u3002"]}),"\n"]}),(0,t.jsxs)(l.Z,{groupId:"shell",children:[(0,t.jsx)(o.Z,{value:"Bash",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format \'{{json .}}\' | jq -r \'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')\n'})})}),(0,t.jsx)(o.Z,{value:"PowerShell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format \'{{json .}}\' | jq -r \'select(.Repository!=\\"<none>\\") | if (.Tag==\\"<none>\\") then .Repository else (.Repository+\\":\\"+.Tag) end\')\n'})})})]})]}),(0,t.jsxs)(o.Z,{value:"docker",children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4fdd\u5b58\u5355\u4e2a\u955c\u50cf"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker save -o local-image.tar image:tag\n"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4fdd\u5b58\u591a\u4e2a\u955c\u50cf"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker save -o local-images.tar image1:tag1 image2:tag2\n"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4fdd\u5b58\u6240\u6709\u672c\u5730\u955c\u50cf"}),"\n"]}),(0,t.jsxs)(n.p,{children:["\u4e0b\u9762\u4e24\u4e2a\u547d\u4ee4\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://stedolan.github.io/jq/",children:"jq"})," \u8fdb\u884c JSON \u89e3\u6790\u3002\u957f\u547d\u4ee4\u4f1a\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docker image ls"})," \u5b50\u547d\u4ee4\u4f1a\u83b7\u53d6\u6240\u6709\u672c\u5730\u955c\u50cf\u7684\u5217\u8868\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"jq"})," \u5b50\u547d\u4ee4\u4f1a\u8fc7\u6ee4\u5e76\u683c\u5f0f\u5316\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684\u955c\u50cf\u5217\u8868\u3002","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u547d\u4ee4\u7684 ",(0,t.jsx)(n.code,{children:'select(.Repository!=\\"<none>\\")'})," \u90e8\u5206\u4f1a\u8df3\u8fc7\u4ed3\u5e93\u503c\u4e3a ",(0,t.jsx)(n.code,{children:"<none>"})," \u7684\u955c\u50cf\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u6839\u636e\u955c\u50cf\u6807\u7b7e\u7684\u503c\u662f\u5426\u4e3a ",(0,t.jsx)(n.code,{children:"<none>"}),"\uff0c\u547d\u4ee4\u7684 ",(0,t.jsx)(n.code,{children:'if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')'})," \u90e8\u5206\u4f1a\u5c06\u955c\u50cf\u7684\u540d\u79f0\u683c\u5f0f\u5316\u4e3a ",(0,t.jsx)(n.code,{children:"<Repository>"})," \u6216 ",(0,t.jsx)(n.code,{children:"<Repository>:<Tag>"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u6700\u540e\uff0c\u547d\u4ee4\u7684 ",(0,t.jsx)(n.code,{children:"docker save -o all-local-images-in-namespace.tar"})," \u90e8\u5206\u4f1a\u5c06\u524d\u4e24\u6b65\u8fc7\u6ee4\u548c\u683c\u5f0f\u5316\u7684\u955c\u50cf\u5217\u8868\u4fdd\u5b58\u5230 tar \u6587\u4ef6\u4e2d\u3002"]}),"\n"]}),(0,t.jsxs)(l.Z,{groupId:"shell",children:[(0,t.jsx)(o.Z,{value:"Bash",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'docker save -o all-local-images-in-namespace.tar $(docker image ls --format \'{{json .}}\' | jq -r \'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')\n'})})}),(0,t.jsx)(o.Z,{value:"PowerShell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'docker save -o all-local-images-in-namespace.tar $(docker image ls --format \'{{json .}}\' | jq -r \'select(.Repository!=\\"<none>\\") | if (.Tag==\\"<none>\\") then .Repository else (.Repository+\\":\\"+.Tag) end\')\n'})})})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"2. \u4f7f\u7528\u76ee\u6807\u73af\u5883\u4e2d\u4fdd\u5b58\u7684 tar \u5305\u52a0\u8f7d\u955c\u50cf"}),"\u3002"]}),"\n",(0,t.jsxs)(l.Z,{groupId:"container-runtime",children:[(0,t.jsx)(o.Z,{value:"nerdctl",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nerdctl load < local-images.tar\n"})})}),(0,t.jsx)(o.Z,{value:"docker",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker load < local-images.tar\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:function(e,n,r){r.d(n,{Z:function(){return o}});r(67294);var t=r(34334),s={tabItem:"tabItem_Ymn6"},l=r(85893);function o(e){let{children:n,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,o),hidden:r,children:n})}},74866:function(e,n,r){r.d(n,{Z:function(){return y}});var t=r(67294),s=r(34334),l=r(12466),o=r(16550),a=r(20469),i=r(91980),c=r(67392),d=r(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const s=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,l=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,u]=j({queryString:r,groupId:s}),[x,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,d.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),m=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=r(72389),m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=r(85893);function v(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),s=a[r].value;s!==t&&(c(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...l,className:(0,s.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(b,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,g.jsx)(k,{...e,children:u(e.children)},String(n))}},11151:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var t=r(67294);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);