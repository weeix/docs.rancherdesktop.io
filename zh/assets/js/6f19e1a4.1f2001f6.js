"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7009],{30493:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var t=r(85893),s=r(11151),o=r(74866),a=r(85162);const l={title:"Skaffold \u4e0e Rancher Desktop"},c=void 0,i={id:"how-to-guides/skaffold-and-rancher-desktop",title:"Skaffold \u4e0e Rancher Desktop",description:"Skaffold \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u4e8e Kubernetes \u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u7684\u6301\u7eed\u5f00\u53d1\u3002Skaffold \u5904\u7406\u6784\u5efa\u3001\u63a8\u9001\u548c\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u6d41\uff0c\u5e76\u63d0\u4f9b\u7528\u4e8e\u521b\u5efa CI/CD \u6d41\u6c34\u7ebf\u7684\u6784\u5efa\u5757\u3002\u5b83\u80fd\u8ba9\u4f60\u4e13\u6ce8\u4e8e\u5728\u672c\u5730\u8fed\u4ee3\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\uff0cSkaffold \u5219\u80fd\u6301\u7eed\u90e8\u7f72\u5230\u4f60\u7684\u672c\u5730\u6216\u8fdc\u7a0b Kubernetes \u96c6\u7fa4\u3002\u8981\u4e86\u89e3\u6709\u5173 Skaffold \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Skaffold \u9879\u76ee\u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7/how-to-guides/skaffold-and-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/skaffold-and-rancher-desktop",permalink:"/zh/1.7/how-to-guides/skaffold-and-rancher-desktop",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/how-to-guides/skaffold-and-rancher-desktop.md",tags:[],version:"1.7",frontMatter:{title:"Skaffold \u4e0e Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"Rancher Desktop \u4e0a\u7684 Rancher",permalink:"/zh/1.7/how-to-guides/rancher-on-rancher-desktop"},next:{title:"\u914d\u7f6e\u811a\u672c",permalink:"/zh/1.7/how-to-guides/provisioning-scripts"}},d={},u=[];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Skaffold \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u4e8e Kubernetes \u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u7684\u6301\u7eed\u5f00\u53d1\u3002Skaffold \u5904\u7406\u6784\u5efa\u3001\u63a8\u9001\u548c\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u6d41\uff0c\u5e76\u63d0\u4f9b\u7528\u4e8e\u521b\u5efa CI/CD \u6d41\u6c34\u7ebf\u7684\u6784\u5efa\u5757\u3002\u5b83\u80fd\u8ba9\u4f60\u4e13\u6ce8\u4e8e\u5728\u672c\u5730\u8fed\u4ee3\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\uff0cSkaffold \u5219\u80fd\u6301\u7eed\u90e8\u7f72\u5230\u4f60\u7684\u672c\u5730\u6216\u8fdc\u7a0b Kubernetes \u96c6\u7fa4\u3002\u8981\u4e86\u89e3\u6709\u5173 Skaffold \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,t.jsx)(n.a,{href:"https://skaffold.dev/docs/",children:"Skaffold \u9879\u76ee\u6587\u6863"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u6f14\u793a\u4f7f\u7528 Rancher Desktop \u8bbe\u7f6e Skaffold \u7684\u6b65\u9aa4\uff0cRancher Desktop \u6587\u6863\u5728",(0,t.jsx)(n.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample",children:"\u6b64\u5904"}),"\u63d0\u4f9b\u4e86\u4e00\u4e2a nodejs \u5e94\u7528\u7a0b\u5e8f\u793a\u4f8b\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["\u91cd\u8981\u63d0\u793a\uff1aSkaffold \u4ec5\u9002\u7528\u4e8e ",(0,t.jsx)(n.code,{children:"dockerd"})," (Moby)"]}),"\u3002\u56e0\u6b64\uff0c\u8bf7\u786e\u4fdd\u5728 Rancher Desktop UI \u7684 ",(0,t.jsx)(n.strong,{children:"Kubernetes Settings"})," \u9762\u677f\u4e2d\u9009\u62e9\u4e86 ",(0,t.jsx)(n.code,{children:"dockerd"})," \u4f5c\u4e3a\u8fd0\u884c\u65f6\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u8bbf\u95ee ",(0,t.jsx)(n.a,{href:"https://skaffold.dev/docs/install/",children:"https://skaffold.dev/docs/install/"})," \u5b89\u88c5 Skaffold\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u514b\u9686 ",(0,t.jsx)(n.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io.git",children:"Rancher Desktop \u6587\u6863\u4ed3\u5e93"}),"\u5e76\u5728\u7ec8\u7aef\u4e2d\u5bfc\u822a\u5230 ",(0,t.jsx)(n.code,{children:"express-sample"}),"\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd docs.rancherdesktop.io/assets/express-sample\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"skaffold init"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6839\u636e ",(0,t.jsx)(n.a,{href:"https://skaffold.dev/docs/pipeline-stages/init/#build-config-initialization",children:"Skaffold \u6587\u6863"})," \u7684\u4ecb\u7ecd\uff0c",(0,t.jsx)(n.code,{children:"skaffold init"})," \u4f1a\u904d\u5386\u4f60\u7684\u9879\u76ee\u76ee\u5f55\u5e76\u67e5\u627e build \u914d\u7f6e\u6587\u4ef6\uff08\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"Dockerfile"}),"\u3001",(0,t.jsx)(n.code,{children:"build.gradle /pom.xml"}),"\u3001",(0,t.jsx)(n.code,{children:"package.json"}),"\u3001",(0,t.jsx)(n.code,{children:"requirements.txt"})," \u6216 ",(0,t.jsx)(n.code,{children:"go.mod"}),"\uff09\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u6211\u4eec\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u9009\u62e9 ",(0,t.jsx)(n.code,{children:"Dockerfile"})," \u548c ",(0,t.jsx)(n.code,{children:"package.json"}),"\u3002\u8fd9\u5c06\u751f\u6210\u4f60\u53ef\u4ee5\u4fee\u6539\u7684\u521d\u59cb\u914d\u7f6e\u6587\u4ef6\u3002\u51fa\u73b0\u63d0\u793a\u65f6\uff0c\u9009\u62e9 ",(0,t.jsx)(n.code,{children:"yes"})," \u5c06\u4f60\u7684\u914d\u7f6e\u5199\u5165 ",(0,t.jsx)(n.code,{children:"skaffold.yaml"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5728\u4f60\u7684\u7f16\u8f91\u5668\u4e2d\uff0c\u67e5\u770b\u4f60\u7684 ",(0,t.jsx)(n.code,{children:"app.js"})," \u548c ",(0,t.jsx)(n.code,{children:"manifests.yaml"})," \u6587\u4ef6\u3002\u8bf7\u6ce8\u610f\uff0c\u5728 ",(0,t.jsx)(n.code,{children:"manifests.yaml"})," \u4e2d\uff0c\u4f60\u5c06\u62e5\u6709\u4e00\u4e2a deployment \u914d\u7f6e\u548c\u4e00\u4e2a service \u914d\u7f6e\u3002\u5728\u6d4b\u8bd5\u573a\u666f\u4e0b\uff0c\u4ec5\u9700\u8981 1 \u4e2a ",(0,t.jsx)(n.code,{children:"replica"})," \u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u56de\u5230\u4f60\u7684\u7ec8\u7aef\uff0c\u4f60\u4f1a\u6ce8\u610f\u5230\u4f60\u6709\u4e24\u4e2a\u9009\u9879\uff0c\u5206\u522b\u662f ",(0,t.jsx)(n.code,{children:"skaffold run"}),"\uff08\u5141\u8bb8\u4f60\u6784\u5efa\u548c\u90e8\u7f72\uff09\u548c ",(0,t.jsx)(n.code,{children:"skaffold dev"})," \uff08\u5141\u8bb8\u4f60\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u81ea\u52a8\u91cd\u65b0\u90e8\u7f72\uff09\u3002\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"skaffold dev"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8e\u4f60\u9700\u8981\u5bf9\u955c\u50cf\u4ed3\u5e93\u5177\u6709\u63a8\u9001\u8bbf\u95ee\u6743\u9650\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u4f7f\u7528 docker \u767b\u5f55\uff0c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u672c\u5730\u955c\u50cf\u4ed3\u5e93\uff1a"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(a.Z,{value:"docker-hub",label:"Docker Hub",default:!0,children:(0,t.jsxs)(n.p,{children:["\u5728\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"skaffold dev"})," \u4e4b\u524d\uff0c\u5982\u679c\u4f60\u6709 ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/",children:"Docker Hub"})," \u8d26\u53f7\uff0c\u8bf7\u4f7f\u7528\u4f60\u7684 docker \u767b\u5f55\u3002\u7136\u540e\uff0c\u5728\u6587\u4ef6 ",(0,t.jsx)(n.code,{children:"skaffold.yaml"})," \u548c ",(0,t.jsx)(n.code,{children:"manifests.yaml"})," \u4e2d\uff0c\u5c06 ",(0,t.jsx)(n.code,{children:"matamagu/express-sample"})," \u66ff\u6362\u4e3a ",(0,t.jsx)(n.code,{children:"YOUR_DOCKER_HUB_USERNAME/express-sample"}),"\uff0c\u8fd9\u662f\u56e0\u4e3a ",(0,t.jsx)(n.code,{children:"skaffold dev"})," \u4f1a\u5c06\u6784\u5efa\u7684\u955c\u50cf\u63a8\u9001\u5230 DockerHub\u3002"]})}),(0,t.jsxs)(a.Z,{value:"local-registry",label:"\u672c\u5730\u955c\u50cf\u4ed3\u5e93",children:[(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5148\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u8bbe\u7f6e\u672c\u5730\u955c\u50cf\u4ed3\u5e93\uff1a",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker run -d -p 5000:5000 --restart=always --name registry registry:2\n"})}),(0,t.jsx)(n.p,{children:"\u7136\u540e\uff1a"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"skaffold dev --default-repo=localhost:5000\n"})})]})]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8fdb\u884c\u5f00\u53d1\u65f6\uff0cSkaffold \u5c06\u68c0\u6d4b\u6240\u6709\u66f4\u6539\uff0c\u5e76\u4f1a\u81ea\u52a8\u518d\u6b21\u6267\u884c\u6784\u5efa\u548c\u90e8\u7f72\u7684\u8fc7\u7a0b\u3002\u4f60\u5c06\u80fd\u591f\u770b\u5230\u96c6\u7fa4\u4e2d\u7684\u4efb\u4f55\u66f4\u6539\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,t.jsx)(n.code,{children:"localhost:3000"}),"\uff0c\u4f60\u5c06\u770b\u5230 ",(0,t.jsx)(n.code,{children:"express-sample"})," \u754c\u9762\u3002"]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:function(e,n,r){r.d(n,{Z:function(){return a}});r(67294);var t=r(34334),s={tabItem:"tabItem_Ymn6"},o=r(85893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,a),hidden:r,children:n})}},74866:function(e,n,r){r.d(n,{Z:function(){return y}});var t=r(67294),s=r(34334),o=r(12466),a=r(16550),l=r(20469),c=r(91980),i=r(67392),d=r(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function f(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c._X)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,o=h(e),[a,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[i,u]=p({queryString:r,groupId:s}),[x,k]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,d.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),b=(()=>{const e=i??x;return f({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var k=r(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},m=r(85893);function j(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),s=l[r].value;s!==t&&(i(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,s.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(j,{...e,...n}),(0,m.jsx)(v,{...e,...n})]})}function y(e){const n=(0,k.Z)();return(0,m.jsx)(g,{...e,children:u(e.children)},String(n))}},11151:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var t=r(67294);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);