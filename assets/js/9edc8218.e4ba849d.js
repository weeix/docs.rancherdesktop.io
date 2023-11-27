"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9414],{66441:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var t=r(85893),s=r(11151);const o={title:"Setup NGINX Ingress Controller"},i=void 0,l={id:"how-to-guides/setup-NGINX-Ingress-Controller",title:"Setup NGINX Ingress Controller",description:"Rancher Desktop uses K3s under the hood, which in turn uses Traefik as the default ingress controller for your Kubernetes cluster. However, there are unique use cases where NGINX may be required or preferred. Below steps show how to use NGINX Ingress controller for a sample deployment.",source:"@site/versioned_docs/version-latest/how-to-guides/setup-NGINX-Ingress-Controller.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/setup-NGINX-Ingress-Controller",permalink:"/how-to-guides/setup-NGINX-Ingress-Controller",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/setup-NGINX-Ingress-Controller.md",tags:[],version:"latest",frontMatter:{title:"Setup NGINX Ingress Controller"},sidebar:"tutorialSidebar",previous:{title:"Create a Multi-Node Cluster with k3d",permalink:"/how-to-guides/create-multi-node-cluster"},next:{title:"Debugging a Container App with VS Code Docker extension",permalink:"/how-to-guides/vs-code-docker"}},c={},d=[{value:"Steps",id:"steps",level:3}];function a(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Head:r,TabItem:o,Tabs:i}=n;return r||h("Head",!0),o||h("TabItem",!0),i||h("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/setup-NGINX-Ingress-Controller"})}),"\n",(0,t.jsx)(n.p,{children:"Rancher Desktop uses K3s under the hood, which in turn uses Traefik as the default ingress controller for your Kubernetes cluster. However, there are unique use cases where NGINX may be required or preferred. Below steps show how to use NGINX Ingress controller for a sample deployment."}),"\n",(0,t.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Uncheck ",(0,t.jsx)(n.code,{children:"Enable Traefik"})," from the ",(0,t.jsx)(n.code,{children:"Kubernetes Settings"})," page to disable Traefik. You may need to exit and restart Rancher Desktop for the change to take effect."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Deploy the NGINX ingress controller via ",(0,t.jsx)(n.code,{children:"helm"})," or ",(0,t.jsx)(n.code,{children:"kubectl"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i,{groupId:"deployment-approach",children:[(0,t.jsx)(o,{value:"helm",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm upgrade --install ingress-nginx ingress-nginx \\\n  --repo https://kubernetes.github.io/ingress-nginx \\\n  --namespace ingress-nginx --create-namespace\n"})})}),(0,t.jsx)(o,{value:"kubectl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.2/deploy/static/provider/cloud/deploy.yaml\n"})})})]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Wait for the ingress pods to come up and running."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl get pods --namespace=ingress-nginx\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Create a sample deployment and the associated service."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl create deployment demo --image=nginx --port=80\nkubectl expose deployment demo\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Create an ingress resource. The following command uses a host that maps to localhost."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'kubectl create ingress demo-localhost --class=nginx --rule="demo.localdev.me/*=demo:80"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Forward a local port to the ingress controller."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you access ",(0,t.jsx)(n.a,{href:"http://demo.localdev.me:8080/",children:"http://demo.localdev.me:8080/"}),", you should see NGINX Welcome page."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var t=r(67294);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);