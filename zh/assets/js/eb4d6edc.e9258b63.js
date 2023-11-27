"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9959],{86933:function(e,r,n){n.r(r),n.d(r,{assets:function(){return d},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return u}});var t=n(85893),o=n(11151),c=n(74866),l=n(85162);const s={title:"\u4f7f\u7528\u5bb9\u5668"},i=void 0,a={id:"tutorials/working-with-containers",title:"\u4f7f\u7528\u5bb9\u5668",description:"nerdctl \u662f\u4e00\u4e2a\u4e0e Docker \u517c\u5bb9\u7684\u5bb9\u5668 CLI\u3002nerdctl \u4e3b\u8981\u7528\u4e8e\u5bf9 Docker \u4e2d\u4e0d\u5b58\u5728\u7684 containerd \u5c16\u7aef\u529f\u80fd\u8fdb\u884c\u8bd5\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.10/tutorials/working-with-containers.md",sourceDirName:"tutorials",slug:"/tutorials/working-with-containers",permalink:"/zh/1.10/tutorials/working-with-containers",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.10/tutorials/working-with-containers.md",tags:[],version:"1.10",frontMatter:{title:"\u4f7f\u7528\u5bb9\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u955c\u50cf",permalink:"/zh/1.10/tutorials/working-with-images"},next:{title:"Hello World \u793a\u4f8b",permalink:"/zh/1.10/how-to-guides/hello-world-example"}},d={},u=[{value:"\u8fd0\u884c\u5bb9\u5668",id:"\u8fd0\u884c\u5bb9\u5668",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"\u66b4\u9732\u7aef\u53e3",id:"\u66b4\u9732\u7aef\u53e3",level:2},{value:"\u5b9a\u4f4d Kubernetes \u547d\u540d\u7a7a\u95f4",id:"\u5b9a\u4f4d-kubernetes-\u547d\u540d\u7a7a\u95f4",level:2}];function h(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"nerdctl"})," \u662f\u4e00\u4e2a\u4e0e Docker \u517c\u5bb9\u7684\u5bb9\u5668 CLI\u3002",(0,t.jsx)(r.code,{children:"nerdctl"})," \u4e3b\u8981\u7528\u4e8e\u5bf9 Docker \u4e2d\u4e0d\u5b58\u5728\u7684 containerd \u5c16\u7aef\u529f\u80fd\u8fdb\u884c\u8bd5\u9a8c\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://github.com/moby/moby",children:"Moby"})," \u662f\u4e00\u4e2a\u7531 Docker \u521b\u5efa\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u7528\u4e8e\u542f\u7528\u548c\u52a0\u901f\u8f6f\u4ef6\u5bb9\u5668\u5316\u3002\u7ec4\u4ef6\u5305\u62ec\u5bb9\u5668\u6784\u5efa\u5de5\u5177\u3001\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\u3001\u7f16\u6392\u5de5\u5177\u548c\u8fd0\u884c\u65f6\u7b49\u3002Docker CLI \u4f7f\u7528 Moby \u8fd0\u884c\u65f6\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"\u8fd0\u884c\u5bb9\u5668",children:"\u8fd0\u884c\u5bb9\u5668"}),"\n",(0,t.jsxs)(r.p,{children:["\u8981\u4f7f\u7528\u9ed8\u8ba4\u7684 ",(0,t.jsx)(r.code,{children:"bridge"})," CNI \u7f51\u7edc (10.4.0.0/24) \u8fd0\u884c\u5bb9\u5668\uff1a"]}),"\n",(0,t.jsxs)(c.Z,{groupId:"container-runtime",children:[(0,t.jsx)(l.Z,{value:"nerdctl",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"nerdctl run -it --rm alpine\n"})})}),(0,t.jsx)(l.Z,{value:"docker",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"docker run -it --rm alpine\n"})})})]}),"\n",(0,t.jsx)(r.p,{children:"\u8981\u4f7f\u7528 BuildKit \u6784\u5efa\u955c\u50cf\uff1a"}),"\n",(0,t.jsxs)(c.Z,{groupId:"container-runtime",children:[(0,t.jsx)(l.Z,{value:"nerdctl",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"nerdctl build -t foo /some-dockerfile-directory\nnerdctl run -it --rm foo\n"})})}),(0,t.jsx)(l.Z,{value:"docker",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"docker build -t foo /some-dockerfile-directory\ndocker run -it --rm foo\n"})})})]}),"\n",(0,t.jsx)(r.p,{children:"\u8981\u4f7f\u7528 BuiltKit \u8fdb\u884c\u6784\u5efa\u5e76\u5c06\u8f93\u51fa\u53d1\u9001\u5230\u672c\u5730\u76ee\u5f55\uff1a"}),"\n",(0,t.jsxs)(c.Z,{groupId:"container-runtime",children:[(0,t.jsx)(l.Z,{value:"nerdctl",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"nerdctl build -o type=local,dest=. /some-dockerfile-directory\n"})})}),(0,t.jsx)(l.Z,{value:"docker",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"docker build -o type=local,dest=. /some-dockerfile-directory\n"})})})]}),"\n",(0,t.jsx)(r.h2,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,t.jsx)(r.p,{children:"Docker Compose \u662f\u4e00\u4e2a\u7528\u4e8e\u5b9a\u4e49\u548c\u8fd0\u884c\u591a\u5bb9\u5668 Docker \u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u5177\u3002"}),"\n",(0,t.jsxs)(c.Z,{groupId:"container-runtime",children:[(0,t.jsxs)(l.Z,{value:"nerdctl",default:!0,children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"nerdctl-compose"})," CLI \u7528\u4e8e\u4e0e ",(0,t.jsx)(r.code,{children:"docker-compose"})," \u517c\u5bb9\uff1a"]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"nerdctl compose up -d\nnerdctl compose down\n"})})]}),(0,t.jsxs)(l.Z,{value:"docker",children:[(0,t.jsxs)(r.p,{children:["Docker CLI \u4e2d\u7684 ",(0,t.jsx)(r.code,{children:"compose"})," \u547d\u4ee4\u652f\u6301\u5927\u591a\u6570 ",(0,t.jsx)(r.code,{children:"docker-compose"})," \u547d\u4ee4\u548c\u6807\u5fd7\u3002\u5b83\u6709\u671b\u6210\u4e3a ",(0,t.jsx)(r.code,{children:"docker-compose"})," \u7684\u76f4\u63a5\u66ff\u4ee3\u54c1\u3002"]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"docker compose up -d\ndocker compose down\n"})})]})]}),"\n",(0,t.jsx)(r.h2,{id:"\u66b4\u9732\u7aef\u53e3",children:"\u66b4\u9732\u7aef\u53e3"}),"\n",(0,t.jsx)(r.p,{children:"\u8981\u4e3a\u5bb9\u5668\u516c\u5f00\u7aef\u53e3 8000\uff1a"}),"\n",(0,t.jsxs)(c.Z,{groupId:"container-runtime",children:[(0,t.jsx)(l.Z,{value:"nerdctl",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"nerdctl run -d -p 8000:80 nginx\n"})})}),(0,t.jsx)(l.Z,{value:"docker",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"docker run -d -p 8000:80 nginx\n"})})})]}),"\n",(0,t.jsxs)(r.p,{children:["\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,t.jsx)(r.a,{href:"http://localhost:8000/",children:"http://localhost:8000/"})," \u6765\u8bbf\u95ee\u5bb9\u5668\uff1a"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsxs)(r.em,{children:["\u6ce8\u610f\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u66b4\u9732\u7684\u7aef\u53e3\u53ef\u4ee5\u5728 macOS \u548c Linux \u4e0a\u7684\u6240\u6709\u7f51\u7edc\u63a5\u53e3\u4e0a\u8bbf\u95ee\u3002\u7136\u800c\uff0c\u5728 Windows \u4e0a\uff0c\u66b4\u9732\u7684\u7aef\u53e3\u53ea\u80fd\u901a\u8fc7 localhost \u7f51\u7edc\u63a5\u53e3\u8bbf\u95ee\uff08\u53c2\u89c1 issue ",(0,t.jsx)(r.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1180",children:"#1180"}),"\uff09\u3002\u76ee\u524d\u7684\u4e00\u4e2a\u89e3\u51b3\u65b9\u6cd5\u662f",(0,t.jsxs)(r.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1180#issuecomment-1005514200",children:["\u5728 Windows \u4e3b\u673a\u4e0a\u914d\u7f6e ",(0,t.jsx)(r.code,{children:"portproxy"})]}),"\uff0c\u4ece\u800c\u5c06\u7aef\u53e3\u516c\u5f00\u7ed9\u5176\u4ed6\u7f51\u7edc\u63a5\u53e3"]}),"\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=localhost\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u5b9a\u4f4d-kubernetes-\u547d\u540d\u7a7a\u95f4",children:"\u5b9a\u4f4d Kubernetes \u547d\u540d\u7a7a\u95f4"}),"\n",(0,t.jsxs)(r.p,{children:["\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(r.code,{children:"containerd"})," \u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"--namespace"})," \u53c2\u6570\u6765\u5b9a\u4f4d Kubernetes \u547d\u540d\u7a7a\u95f4\u3002\u8bf7\u6ce8\u610f ",(0,t.jsx)(r.code,{children:"docker"})," \u4e0d\u4f7f\u7528\u547d\u540d\u7a7a\u95f4\u3002"]}),"\n",(0,t.jsx)(c.Z,{groupId:"container-runtime",children:(0,t.jsx)(l.Z,{value:"nerdctl",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"nerdctl --namespace k8s.io build -t demo:latest /code/demos/rd/anvil-app\nnerdctl --namespace k8s.io ps\n"})})})})]})}function p(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:function(e,r,n){n.d(r,{Z:function(){return l}});n(67294);var t=n(34334),o={tabItem:"tabItem_Ymn6"},c=n(85893);function l(e){let{children:r,hidden:n,className:l}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,t.Z)(o.tabItem,l),hidden:n,children:r})}},74866:function(e,r,n){n.d(r,{Z:function(){return w}});var t=n(67294),o=n(34334),c=n(12466),l=n(16550),s=n(20469),i=n(91980),a=n(67392),d=n(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:o}}=e;return{value:r,label:n,attributes:t,default:o}}))}(n);return function(e){const r=(0,a.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const o=(0,l.k6)(),c=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i._X)(c),(0,t.useCallback)((e=>{if(!c)return;const r=new URLSearchParams(o.location.search);r.set(c,e),o.replace({...o.location,search:r.toString()})}),[c,o])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:o}=e,c=h(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:c}))),[a,u]=m({queryString:n,groupId:o}),[f,x]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,c]=(0,d.Nk)(n);return[o,(0,t.useCallback)((e=>{n&&c.set(e)}),[n,c])]}({groupId:o}),j=(()=>{const e=a??f;return p({value:e,tabValues:c})?e:null})();(0,s.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,c]),tabValues:c}}var x=n(72389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},b=n(85893);function v(e){let{className:r,block:n,selectedValue:t,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:a}=(0,c.o5)(),d=e=>{const r=e.currentTarget,n=i.indexOf(r),o=s[n].value;o!==t&&(a(r),l(o))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},r),children:s.map((e=>{let{value:r,label:n,attributes:c}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>i.push(e),onKeyDown:u,onClick:d,...c,className:(0,o.Z)("tabs__item",j.tabItem,c?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function k(e){let{lazy:r,children:n,selectedValue:o}=e;const c=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=c.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:c.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function g(e){const r=f(e);return(0,b.jsxs)("div",{className:(0,o.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...r}),(0,b.jsx)(k,{...e,...r})]})}function w(e){const r=(0,x.Z)();return(0,b.jsx)(g,{...e,children:u(e.children)},String(r))}},11151:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return l}});var t=n(67294);const o={},c=t.createContext(o);function l(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);