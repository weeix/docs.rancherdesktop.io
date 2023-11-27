"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7981],{97226:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return h}});var t=n(85893),a=n(11151),s=n(74866),c=n(85162);const l={title:"Rancher Desktop \u4e0a\u7684 Rancher"},o=void 0,i={id:"how-to-guides/rancher-on-rancher-desktop",title:"Rancher Desktop \u4e0a\u7684 Rancher",description:"\u867d\u7136 Rancher \u548c Rancher Desktop \u7684\u540d\u5b57\u91cc\u90fd\u5305\u542b Rancher\uff0c\u4f46\u5b83\u4eec\u7684\u529f\u80fd\u662f\u6709\u5dee\u522b\u7684\u3002Rancher Desktop \u4e0d\u662f\u684c\u9762\u7248 Rancher\u3002Rancher \u662f\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u7684\u5f3a\u5927\u89e3\u51b3\u65b9\u6848\uff0c\u800c Rancher Desktop \u8fd0\u884c\u672c\u5730 Kubernetes \u548c\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\uff0c\u8fd9\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\u76f8\u8f85\u76f8\u6210\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u5c06 Rancher \u4f5c\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u5b89\u88c5\u5728 Rancher Desktop \u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.8/how-to-guides/rancher-on-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/rancher-on-rancher-desktop",permalink:"/zh/1.8/how-to-guides/rancher-on-rancher-desktop",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.8/how-to-guides/rancher-on-rancher-desktop.md",tags:[],version:"1.8",frontMatter:{title:"Rancher Desktop \u4e0a\u7684 Rancher"},sidebar:"tutorialSidebar",previous:{title:"VS Code Remote Containers",permalink:"/zh/1.8/how-to-guides/vs-code-remote-containers"},next:{title:"Skaffold \u4e0e Rancher Desktop",permalink:"/zh/1.8/how-to-guides/skaffold-and-rancher-desktop"}},u={},h=[];function d(e){const r={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["\u867d\u7136 ",(0,t.jsx)(r.a,{href:"https://rancher.com/",children:"Rancher"})," \u548c ",(0,t.jsx)(r.a,{href:"https://rancherdesktop.io/",children:"Rancher Desktop"})," \u7684\u540d\u5b57\u91cc\u90fd\u5305\u542b ",(0,t.jsx)(r.em,{children:"Rancher"}),"\uff0c\u4f46\u5b83\u4eec\u7684\u529f\u80fd\u662f\u6709\u5dee\u522b\u7684\u3002Rancher Desktop \u4e0d\u662f\u684c\u9762\u7248 Rancher\u3002Rancher \u662f\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u7684\u5f3a\u5927\u89e3\u51b3\u65b9\u6848\uff0c\u800c Rancher Desktop \u8fd0\u884c\u672c\u5730 Kubernetes \u548c\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\uff0c\u8fd9\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\u76f8\u8f85\u76f8\u6210\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u5c06 Rancher \u4f5c\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u5b89\u88c5\u5728 Rancher Desktop \u4e2d\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u672c\u6307\u5357\u6982\u8ff0\u4e86\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"container runtime"})," \u6216 ",(0,t.jsx)(r.code,{children:"helm"}),"\uff08\u672c\u5730\u73af\u5883\uff09\u5728 Rancher Desktop \u4e0a\u5b89\u88c5 Rancher Dashboard \u7684\u6b65\u9aa4\uff1a"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u6ce8\u610f"}),"\uff1a\u5982\u679c\u5b9e\u7528\u7a0b\u5e8f\uff08\u4f8b\u5982\uff1ahelm\uff09\u6216\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7248\u672c\u4e0e\u4f1a\u8bdd\u4e2d\u7684 Kubernetes \u7248\u672c\u4e0d\u517c\u5bb9\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230\u95ee\u9898\u3002\u4f5c\u4e3a\u4e00\u4e2a\u6f5c\u5728\u7684\u4fee\u590d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(r.a,{href:"https://docs.rancherdesktop.io/getting-started/features/#kubernetes",children:"Preferences > Kubernetes"})," \u5bf9\u8bdd\u6846\u5207\u6362\u5230\u517c\u5bb9\u7684 Kubernetes \u7248\u672c\u3002",(0,t.jsx)(r.a,{href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-7-1/",children:"\u652f\u6301\u77e9\u9635\u9875\u9762"}),"\u4e0a\u5217\u51fa\u4e86 Rancher \u652f\u6301\u7684 Kubernetes \u5e73\u53f0\u3002"]}),"\n",(0,t.jsxs)(s.Z,{groupId:"container-runtime",children:[(0,t.jsx)(c.Z,{value:"nerdctl",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"nerdctl run --privileged -d --restart=always -p 8080:80 -p 8443:443 rancher/rancher\n"})})}),(0,t.jsx)(c.Z,{value:"docker",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"docker run --privileged -d --restart=always -p 8080:80 -p 8443:443 rancher/rancher\n"})})}),(0,t.jsxs)(c.Z,{value:"helm",default:!0,children:[(0,t.jsx)(r.p,{children:"1\uff1a\u6dfb\u52a0 Jetstack Chart\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"helm repo add jetstack https://charts.jetstack.io\n"})}),(0,t.jsx)(r.p,{children:"2\uff1a\u6dfb\u52a0\u6700\u65b0\u7684 Rancher Chart\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"})}),(0,t.jsx)(r.p,{children:"3\uff1a\u521b\u5efa cert-manager \u547d\u540d\u7a7a\u95f4\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"kubectl create namespace cert-manager\n"})}),(0,t.jsx)(r.p,{children:"4\uff1a\u5b89\u88c5 cert-manager \u670d\u52a1\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.7.1 --set installCRDs=true\n"})}),(0,t.jsx)(r.p,{children:"5\uff1a\u5e94\u7528 CRD\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml\n"})}),(0,t.jsx)(r.p,{children:"6\uff1a\u521b\u5efa cattle-system \u547d\u540d\u7a7a\u95f4\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"kubectl create namespace cattle-system\n"})}),(0,t.jsx)(r.p,{children:"7\uff1a\u5b89\u88c5 Rancher \u5e94\u7528\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"helm install rancher rancher-latest/rancher --namespace cattle-system --set hostname=rancher.rd.localhost --wait --timeout=10m\n"})})]})]}),"\n",(0,t.jsx)(r.p,{children:"\u5b89\u88c5\u9700\u8981\u51e0\u5206\u949f\u624d\u80fd\u5b8c\u6210\u3002\u5b89\u88c5\u540e\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee Rancher UI\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\u901a\u8fc7 ",(0,t.jsx)(r.code,{children:"container runtime"})," \u5b89\u88c5\uff1a",(0,t.jsx)(r.a,{href:"https://localhost:8443/",children:"https://localhost:8443/"})]}),"\n",(0,t.jsxs)(r.li,{children:["\u901a\u8fc7 ",(0,t.jsx)(r.code,{children:"helm"})," \u5b89\u88c5\uff1a",(0,t.jsx)(r.a,{href:"https://rancher.rd.localhost/",children:"https://rancher.rd.localhost/"})]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:n(32402).Z+"",width:"1189",height:"875"})}),"\n",(0,t.jsxs)(s.Z,{groupId:"container-runtime",children:[(0,t.jsxs)(c.Z,{value:"nerdctl",default:!0,children:[(0,t.jsx)(r.p,{children:"\u8981\u8bbf\u95ee Rancher UI\uff0c\u4f60\u9700\u8981\u83b7\u53d6\u5f15\u5bfc\u5bc6\u7801\uff1a"}),(0,t.jsx)(r.p,{children:"1\uff1a\u83b7\u53d6 Rancher UI \u5bb9\u5668 ID/\u540d\u79f0\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"nerdctl ps\n"})}),(0,t.jsx)(r.p,{children:"2\uff1a\u83b7\u53d6\u5f15\u5bfc\u5bc6\u7801\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:'nerdctl logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n'})}),(0,t.jsx)(r.p,{children:"3\uff1a\u5f15\u5bfc\u5bc6\u7801\u793a\u4f8b\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n"})})]}),(0,t.jsxs)(c.Z,{value:"docker",default:!0,children:[(0,t.jsx)(r.p,{children:"\u8981\u8bbf\u95ee Rancher UI\uff0c\u4f60\u9700\u8981\u83b7\u53d6\u5f15\u5bfc\u5bc6\u7801\uff1a"}),(0,t.jsx)(r.p,{children:"1\uff1a\u83b7\u53d6 Rancher UI \u5bb9\u5668 ID/\u540d\u79f0\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"docker ps\n"})}),(0,t.jsx)(r.p,{children:"2\uff1a\u83b7\u53d6\u5f15\u5bfc\u5bc6\u7801\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:'docker logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n'})}),(0,t.jsx)(r.p,{children:"3\uff1a\u5f15\u5bfc\u5bc6\u7801\u793a\u4f8b\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n"})})]})]}),"\n",(0,t.jsxs)(r.p,{children:["\u6309\u7167\u5411\u5bfc\u8bf4\u660e\u5e76\u5355\u51fb ",(0,t.jsx)(r.code,{children:"Continue"})," \u4ee5\u8fdb\u5165 Rancher UI \u4e3b\u9875\u9762\u3002"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:n(47900).Z+"",width:"1589",height:"979"})}),"\n",(0,t.jsxs)(r.p,{children:["\u5728 Rancher UI \u4e2d\uff0c\u4f60\u53ef\u4ee5\u7ba1\u7406 local \u96c6\u7fa4\u3001\u8282\u70b9\u7b49\u3002\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,t.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/",children:"Rancher \u6587\u6863"}),"\u3002"]})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},85162:function(e,r,n){n.d(r,{Z:function(){return c}});n(67294);var t=n(34334),a={tabItem:"tabItem_Ymn6"},s=n(85893);function c(e){let{children:r,hidden:n,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,c),hidden:n,children:r})}},74866:function(e,r,n){n.d(r,{Z:function(){return w}});var t=n(67294),a=n(34334),s=n(12466),c=n(16550),l=n(20469),o=n(91980),i=n(67392),u=n(50012);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,i.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const a=(0,c.k6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o._X)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,s=d(e),[c,o]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[i,h]=m({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,u.Nk)(n);return[a,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),j=(()=>{const e=i??f;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:c,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=n(72389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},x=n(85893);function b(e){let{className:r,block:n,selectedValue:t,selectValue:c,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),u=e=>{const r=e.currentTarget,n=o.indexOf(r),a=l[n].value;a!==t&&(i(r),c(a))},h=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>o.push(e),onKeyDown:h,onClick:u,...s,className:(0,a.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function k(e){const r=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(b,{...e,...r}),(0,x.jsx)(v,{...e,...r})]})}function w(e){const r=(0,g.Z)();return(0,x.jsx)(k,{...e,children:h(e.children)},String(r))}},47900:function(e,r,n){r.Z=n.p+"assets/images/rancherUiMainPage-b53cd5a80ad0bacb7aa613f3ae7bd0b7.png"},32402:function(e,r,n){r.Z=n.p+"assets/images/rancherUiWelcomePage-21a9632bf47edafe852af976ed625bf1.png"},11151:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return c}});var t=n(67294);const a={},s=t.createContext(a);function c(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);