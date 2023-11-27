"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4745],{89800:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var t=r(85893),o=r(11151),s=r(74866),l=r(85162);const a={title:"Setup NGINX Ingress Controller"},i=void 0,u={id:"how-to-guides/setup-NGINX-Ingress-Controller",title:"Setup NGINX Ingress Controller",description:"Rancher Desktop uses K3s under the hood, which in turn uses Traefik as the default ingress controller for your Kubernetes cluster. However, there are unique use cases where NGINX may be required or preferred. Below steps show how to use NGINX Ingress controller for a sample deployment.",source:"@site/versioned_docs/version-1.9/how-to-guides/setup-NGINX-Ingress-Controller.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/setup-NGINX-Ingress-Controller",permalink:"/1.9/how-to-guides/setup-NGINX-Ingress-Controller",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/how-to-guides/setup-NGINX-Ingress-Controller.md",tags:[],version:"1.9",frontMatter:{title:"Setup NGINX Ingress Controller"},sidebar:"tutorialSidebar",previous:{title:"Create a Multi-Node Cluster with k3d",permalink:"/1.9/how-to-guides/create-multi-node-cluster"},next:{title:"Debugging a Container App with VS Code Docker extension",permalink:"/1.9/how-to-guides/vs-code-docker"}},c={},d=[{value:"Steps",id:"steps",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/setup-NGINX-Ingress-Controller"})}),"\n",(0,t.jsx)(n.p,{children:"Rancher Desktop uses K3s under the hood, which in turn uses Traefik as the default ingress controller for your Kubernetes cluster. However, there are unique use cases where NGINX may be required or preferred. Below steps show how to use NGINX Ingress controller for a sample deployment."}),"\n",(0,t.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Uncheck ",(0,t.jsx)(n.code,{children:"Enable Traefik"})," from the ",(0,t.jsx)(n.code,{children:"Kubernetes Settings"})," page to disable Traefik. You may need to exit and restart Rancher Desktop for the change to take effect."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Deploy the NGINX ingress controller via ",(0,t.jsx)(n.code,{children:"helm"})," or ",(0,t.jsx)(n.code,{children:"kubectl"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.Z,{groupId:"deployment-approach",children:[(0,t.jsx)(l.Z,{value:"helm",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm upgrade --install ingress-nginx ingress-nginx \\\n  --repo https://kubernetes.github.io/ingress-nginx \\\n  --namespace ingress-nginx --create-namespace\n"})})}),(0,t.jsx)(l.Z,{value:"kubectl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.2/deploy/static/provider/cloud/deploy.yaml\n"})})})]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Wait for the ingress pods to come up and running."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl get pods --namespace=ingress-nginx\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Create a sample deployment and the associated service."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl create deployment demo --image=nginx --port=80\nkubectl expose deployment demo\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Create an ingress resource. The following command uses a host that maps to localhost."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'kubectl create ingress demo-localhost --class=nginx --rule="demo.localdev.me/*=demo:80"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Forward a local port to the ingress controller."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you access ",(0,t.jsx)(n.a,{href:"http://demo.localdev.me:8080/",children:"http://demo.localdev.me:8080/"}),", you should see NGINX Welcome page."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:function(e,n,r){r.d(n,{Z:function(){return l}});r(67294);var t=r(34334),o={tabItem:"tabItem_Ymn6"},s=r(85893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(o.tabItem,l),hidden:r,children:n})}},74866:function(e,n,r){r.d(n,{Z:function(){return k}});var t=r(67294),o=r(34334),s=r(12466),l=r(16550),a=r(20469),i=r(91980),u=r(67392),c=r(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const o=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,s=h(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,d]=f({queryString:r,groupId:o}),[m,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,c.Nk)(r);return[o,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:o}),b=(()=>{const e=u??m;return p({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=r(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},x=r(85893);function v(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,r=i.indexOf(n),o=a[r].value;o!==t&&(u(n),l(o))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function k(e){const n=(0,g.Z)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},11151:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var t=r(67294);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);