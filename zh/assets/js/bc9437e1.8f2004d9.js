"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9082],{61458:function(e,n,r){r.r(n),r.d(n,{assets:function(){return a},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var l=r(85893),t=r(11151),o=r(74866),i=r(85162);const c={title:"Hello World \u793a\u4f8b"},d=void 0,s={id:"how-to-guides/hello-world-example",title:"Hello World \u793a\u4f8b",description:"\u672c\u6559\u7a0b\u901a\u8fc7\u6f14\u793a\u5982\u4f55\u5c06\u5e94\u7528\u63a8\u9001\u5230\u672c\u5730 Kubernetes \u96c6\u7fa4\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Rancher Desktop\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9/how-to-guides/hello-world-example.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/hello-world-example",permalink:"/zh/1.9/how-to-guides/hello-world-example",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/how-to-guides/hello-world-example.md",tags:[],version:"1.9",frontMatter:{title:"Hello World \u793a\u4f8b"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u5bb9\u5668",permalink:"/zh/1.9/tutorials/working-with-containers"},next:{title:"\u5b89\u88c5\u548c\u5378\u8f7d Rancher Desktop \u6269\u5c55",permalink:"/zh/1.9/how-to-guides/installing-uninstalling-extensions"}},a={},u=[{value:"\u793a\u4f8b 1 - \u6784\u5efa\u955c\u50cf\u5e76\u8fd0\u884c\u5bb9\u5668",id:"\u793a\u4f8b-1---\u6784\u5efa\u955c\u50cf\u5e76\u8fd0\u884c\u5bb9\u5668",level:3},{value:"\u521b\u5efa\u6587\u4ef6\u5939",id:"\u521b\u5efa\u6587\u4ef6\u5939",level:4},{value:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684 Dockerfile",id:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684-dockerfile",level:4},{value:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145 Dockerfile",id:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145-dockerfile",level:4},{value:"\u6784\u5efa\u5e76\u8fd0\u884c\u955c\u50cf\u4ee5\u8fdb\u884c\u9a8c\u8bc1",id:"\u6784\u5efa\u5e76\u8fd0\u884c\u955c\u50cf\u4ee5\u8fdb\u884c\u9a8c\u8bc1",level:4},{value:"\u793a\u4f8b 2 - \u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5bb9\u5668\u90e8\u7f72\u5230 Kubernetes",id:"\u793a\u4f8b-2---\u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5bb9\u5668\u90e8\u7f72\u5230-kubernetes",level:3},{value:"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u5e76\u6dfb\u52a0\u4e00\u4e2a\u793a\u4f8b index.html \u6587\u4ef6\uff0c\u5982\u4e0b\u6240\u793a",id:"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u5e76\u6dfb\u52a0\u4e00\u4e2a\u793a\u4f8b-indexhtml-\u6587\u4ef6\u5982\u4e0b\u6240\u793a",level:4},{value:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684 Dockerfile",id:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684-dockerfile-1",level:4},{value:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145 Dockerfile",id:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145-dockerfile-1",level:4},{value:"\u4f7f\u7528\u672c\u5730\u4ee3\u7801\u6784\u5efa\u955c\u50cf",id:"\u4f7f\u7528\u672c\u5730\u4ee3\u7801\u6784\u5efa\u955c\u50cf",level:4},{value:"\u90e8\u7f72\u5230 Kubernetes",id:"\u90e8\u7f72\u5230-kubernetes",level:4},{value:"\u5220\u9664 pod \u548c\u955c\u50cf",id:"\u5220\u9664-pod-\u548c\u955c\u50cf",level:4}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u672c\u6559\u7a0b\u901a\u8fc7\u6f14\u793a\u5982\u4f55\u5c06\u5e94\u7528\u63a8\u9001\u5230\u672c\u5730 Kubernetes \u96c6\u7fa4\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Rancher Desktop\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["Rancher Desktop \u4f7f\u7528\u4e86\u4e24\u4e2a\u5bb9\u5668\u5f15\u64ce\uff0c\u5206\u522b\u662f ",(0,l.jsx)(n.a,{href:"https://containerd.io/",children:"containerd"})," \u548c ",(0,l.jsx)(n.a,{href:"https://mobyproject.org/",children:"Moby"}),"\uff0c\u5b83\u4eec\u662f Docker \u751f\u6001\u7cfb\u7edf\u7684\u5f00\u6e90\u7ec4\u4ef6\u3002\u5bf9\u4e8e ",(0,l.jsx)(n.code,{children:"nerdctl"}),"\uff0c\u4f7f\u7528 ",(0,l.jsx)(n.strong,{children:"containerd"})," \u8fd0\u884c\u65f6\u3002\u5bf9\u4e8e ",(0,l.jsx)(n.code,{children:"docker"}),"\uff0c\u4f7f\u7528 ",(0,l.jsx)(n.strong,{children:"dockerd(moby)"})," \u8fd0\u884c\u65f6\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b-1---\u6784\u5efa\u955c\u50cf\u5e76\u8fd0\u884c\u5bb9\u5668",children:"\u793a\u4f8b 1 - \u6784\u5efa\u955c\u50cf\u5e76\u8fd0\u884c\u5bb9\u5668"}),"\n",(0,l.jsx)(n.h4,{id:"\u521b\u5efa\u6587\u4ef6\u5939",children:"\u521b\u5efa\u6587\u4ef6\u5939"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mkdir hello-world\ncd hello-world\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684-dockerfile",children:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684 Dockerfile"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 Windows \u4e0a\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,l.jsx)(n.code,{children:"Dockerfile"})," \u7684\u7a7a\u767d\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 Linux \u4e0a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684 ",(0,l.jsx)(n.code,{children:"Dockerfile"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"vi Dockerfile\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145-dockerfile",children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145 Dockerfile"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'FROM alpine  \nCMD ["echo", "Hello World!!"]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u6784\u5efa\u5e76\u8fd0\u884c\u955c\u50cf\u4ee5\u8fdb\u884c\u9a8c\u8bc1",children:"\u6784\u5efa\u5e76\u8fd0\u884c\u955c\u50cf\u4ee5\u8fdb\u884c\u9a8c\u8bc1"}),"\n",(0,l.jsxs)(o.Z,{groupId:"container-runtime",children:[(0,l.jsx)(i.Z,{value:"nerdctl",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"nerdctl build --tag helloworld:v1.0 .\nnerdctl images | grep helloworld\nnerdctl run --rm helloworld:v1.0\n# \u79fb\u9664\u955c\u50cf\nnerdctl rmi helloworld:v1.0\n"})})}),(0,l.jsx)(i.Z,{value:"docker",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"docker build --tag helloworld:v1.0 .\ndocker images | grep helloworld\ndocker run --rm helloworld:v1.0\n# \u79fb\u9664\u955c\u50cf\ndocker rmi helloworld:v1.0\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b-2---\u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5bb9\u5668\u90e8\u7f72\u5230-kubernetes",children:"\u793a\u4f8b 2 - \u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5bb9\u5668\u90e8\u7f72\u5230 Kubernetes"}),"\n",(0,l.jsxs)(n.p,{children:["\u6839\u636e\u9700\u8981\u5c06 ",(0,l.jsx)(n.strong,{children:"Kubernetes Settings"})," \u9762\u677f\u4e2d\u7684 ",(0,l.jsx)(n.strong,{children:"Container Runtime"})," \u5207\u6362\u4e3a ",(0,l.jsx)(n.code,{children:"dockerd"})," \u6216 ",(0,l.jsx)(n.code,{children:"containerd"}),"\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u5e76\u6dfb\u52a0\u4e00\u4e2a\u793a\u4f8b-indexhtml-\u6587\u4ef6\u5982\u4e0b\u6240\u793a",children:"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u5e76\u6dfb\u52a0\u4e00\u4e2a\u793a\u4f8b index.html \u6587\u4ef6\uff0c\u5982\u4e0b\u6240\u793a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'mkdir nginx\ncd nginx\necho "<h1>Hello World from NGINX!!</h1>" > index.html\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684-dockerfile-1",children:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684 Dockerfile"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 Windows \u4e0a\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,l.jsx)(n.code,{children:"Dockerfile"})," \u7684\u7a7a\u767d\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 Linux \u4e0a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684 ",(0,l.jsx)(n.code,{children:"Dockerfile"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"vi Dockerfile\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145-dockerfile-1",children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145 Dockerfile"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"FROM nginx:alpine\nCOPY . /usr/share/nginx/html\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u4f7f\u7528\u672c\u5730\u4ee3\u7801\u6784\u5efa\u955c\u50cf",children:"\u4f7f\u7528\u672c\u5730\u4ee3\u7801\u6784\u5efa\u955c\u50cf"}),"\n",(0,l.jsxs)(n.p,{children:["\u26a0\ufe0f"," ",(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1a\u4f60\u9700\u8981\u5c06 ",(0,l.jsx)(n.code,{children:"--namespace k8s.io"})," \u6807\u5fd7\u4f20\u9012\u7ed9 ",(0,l.jsx)(n.code,{children:"nerdctl"})," build \u547d\u4ee4\uff0c\u4ee5\u4fbf ",(0,l.jsx)(n.code,{children:"nerdctl"})," \u6784\u5efa\u955c\u50cf\u5e76\u4f7f\u5176\u5728 ",(0,l.jsx)(n.code,{children:"k8s.io"})," \u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u7528\u3002"]}),"\n",(0,l.jsxs)(o.Z,{groupId:"container-runtime",children:[(0,l.jsx)(i.Z,{value:"nerdctl",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"nerdctl --namespace k8s.io build --tag nginx-helloworld:latest .\nnerdctl --namespace k8s.io images | grep nginx-helloworld\n"})})}),(0,l.jsx)(i.Z,{value:"docker",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"docker build --tag nginx-helloworld:latest .\ndocker images | grep nginx-helloworld\n"})})})]}),"\n",(0,l.jsx)(n.h4,{id:"\u90e8\u7f72\u5230-kubernetes",children:"\u90e8\u7f72\u5230 Kubernetes"}),"\n",(0,l.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4ece\u800c\u4f7f\u7528\u5728\u4e0a\u4e00\u6b65\u4e2d\u6784\u5efa\u7684\u955c\u50cf\u521b\u5efa\u548c\u8fd0\u884c pod\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u26a0\ufe0f"," ",(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1a\u4f60\u9700\u8981\u4f20\u9012 ",(0,l.jsx)(n.code,{children:"--image-pull-policy=Never"})," \u6807\u5fd7\u4ee5\u4f7f\u7528\u5e26\u6709 ",(0,l.jsx)(n.code,{children:":latest"})," \u6807\u7b7e\u7684\u672c\u5730\u955c\u50cf\uff08",(0,l.jsx)(n.code,{children:":latest"})," \u6807\u7b7e\u5c06\u59cb\u7ec8\u5c1d\u8bd5\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u4e2d\u62c9\u53d6\u955c\u50cf\uff09\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl run hello-world --image=nginx-helloworld:latest --image-pull-policy=Never --port=80\nkubectl port-forward pods/hello-world 8080:80\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,l.jsx)(n.code,{children:"localhost:8080"}),"\uff0c\u4f60\u5c06\u770b\u5230 ",(0,l.jsx)(n.code,{children:"Hello World from NGINX!!"})," \u7684\u4fe1\u606f\u3002\u5982\u679c\u4f60\u60f3\u7559\u5728\u547d\u4ee4\u884c\u4e0a\uff0c\u8bf7\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"curl localhost:8080"}),"\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u5220\u9664-pod-\u548c\u955c\u50cf",children:"\u5220\u9664 pod \u548c\u955c\u50cf"}),"\n",(0,l.jsxs)(o.Z,{groupId:"container-runtime",children:[(0,l.jsx)(i.Z,{value:"nerdctl",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl delete pod hello-world\n# \u79fb\u9664\u955c\u50cf\nnerdctl --namespace k8s.io rmi nginx-helloworld:latest\n"})})}),(0,l.jsx)(i.Z,{value:"docker",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl delete pod hello-world\n# \u79fb\u9664\u955c\u50cf\ndocker rmi nginx-helloworld:latest\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},85162:function(e,n,r){r.d(n,{Z:function(){return i}});r(67294);var l=r(34334),t={tabItem:"tabItem_Ymn6"},o=r(85893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,l.Z)(t.tabItem,i),hidden:r,children:n})}},74866:function(e,n,r){r.d(n,{Z:function(){return w}});var l=r(67294),t=r(34334),o=r(12466),i=r(16550),c=r(20469),d=r(91980),s=r(67392),a=r(50012);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:t}}=e;return{value:n,label:r,attributes:l,default:t}}))}(r);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d._X)(o),(0,l.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=h(e),[i,d]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:o}))),[s,u]=x({queryString:r,groupId:t}),[f,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,a.Nk)(r);return[t,(0,l.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),j=(()=>{const e=s??f;return p({value:e,tabValues:o})?e:null})();(0,c.Z)((()=>{j&&d(j)}),[j]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=r(72389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},b=r(85893);function v(e){let{className:n,block:r,selectedValue:l,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),a=e=>{const n=e.currentTarget,r=d.indexOf(n),t=c[r].value;t!==l&&(s(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>d.push(e),onKeyDown:u,onClick:a,...o,className:(0,t.Z)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:t}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function k(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,t.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,b.jsx)(k,{...e,children:u(e.children)},String(n))}},11151:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var l=r(67294);const t={},o=l.createContext(t);function i(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);