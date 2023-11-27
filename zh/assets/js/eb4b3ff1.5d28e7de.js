"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8534],{8399:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return a},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var s=r(85893),t=r(11151);const o={title:"\u8bbe\u7f6e NGINX Ingress Controller"},i=void 0,l={id:"how-to-guides/setup-NGINX-Ingress-Controller",title:"\u8bbe\u7f6e NGINX Ingress Controller",description:"Rancher Desktop \u5728\u540e\u53f0\u4f7f\u7528 K3s\uff0c\u800c K3s \u53c8\u4f7f\u7528 Traefik \u4f5c\u4e3a Kubernetes \u96c6\u7fa4\u7684\u9ed8\u8ba4 Ingress Controller\u3002\u4f46\u662f\uff0c\u67d0\u4e9b\u7528\u4f8b\u53ef\u80fd\u9700\u8981\u6216\u66f4\u9002\u5408\u4f7f\u7528 NGINX\u3002\u4ee5\u4e0b\u793a\u4f8b\u6b65\u9aa4\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 NGINX Ingress Controller \u8fdb\u884c\u90e8\u7f72\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.11/how-to-guides/setup-NGINX-Ingress-Controller.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/setup-NGINX-Ingress-Controller",permalink:"/zh/1.11/how-to-guides/setup-NGINX-Ingress-Controller",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.11/how-to-guides/setup-NGINX-Ingress-Controller.md",tags:[],version:"1.11",frontMatter:{title:"\u8bbe\u7f6e NGINX Ingress Controller"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4",permalink:"/zh/1.11/how-to-guides/create-multi-node-cluster"},next:{title:"\u4f7f\u7528 VS Code Docker \u6269\u5c55\u6765\u8c03\u8bd5\u5bb9\u5668\u5e94\u7528\u7a0b\u5e8f",permalink:"/zh/1.11/how-to-guides/vs-code-docker"}},c={},d=[{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3}];function u(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components},{TabItem:r,Tabs:o}=n;return r||h("TabItem",!0),o||h("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Rancher Desktop \u5728\u540e\u53f0\u4f7f\u7528 K3s\uff0c\u800c K3s \u53c8\u4f7f\u7528 Traefik \u4f5c\u4e3a Kubernetes \u96c6\u7fa4\u7684\u9ed8\u8ba4 Ingress Controller\u3002\u4f46\u662f\uff0c\u67d0\u4e9b\u7528\u4f8b\u53ef\u80fd\u9700\u8981\u6216\u66f4\u9002\u5408\u4f7f\u7528 NGINX\u3002\u4ee5\u4e0b\u793a\u4f8b\u6b65\u9aa4\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 NGINX Ingress Controller \u8fdb\u884c\u90e8\u7f72\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6b65\u9aa4",children:"\u6b65\u9aa4"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"Kubernetes Settings"})," \u9875\u9762\u53d6\u6d88\u9009\u4e2d ",(0,s.jsx)(n.code,{children:"Enable Traefik"})," \u6765\u7981\u7528 Traefik\u3002\u4f60\u53ef\u80fd\u9700\u8981\u9000\u51fa\u5e76\u91cd\u65b0\u542f\u52a8 Rancher Desktop \u624d\u80fd\u4f7f\u66f4\u6539\u751f\u6548\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"helm"})," \u6216 ",(0,s.jsx)(n.code,{children:"kubectl"})," \u90e8\u7f72 NGINX Ingress Controller\uff1a"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o,{groupId:"deployment-approach",children:[(0,s.jsx)(r,{value:"helm",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"helm upgrade --install ingress-nginx ingress-nginx \\\n  --repo https://kubernetes.github.io/ingress-nginx \\\n  --namespace ingress-nginx --create-namespace\n"})})}),(0,s.jsx)(r,{value:"kubectl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.2/deploy/static/provider/cloud/deploy.yaml\n"})})})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u7b49\u5f85 ingress pod \u8fd0\u884c\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl get pods --namespace=ingress-nginx\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"\u521b\u5efa\u793a\u4f8b deployment \u548c\u5173\u8054\u7684 service\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl create deployment demo --image=nginx --port=80\nkubectl expose deployment demo\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"\u521b\u5efa ingress \u8d44\u6e90\u3002\u4ee5\u4e0b\u547d\u4ee4\u4f7f\u7528\u4e86\u6620\u5c04\u5230 localhost \u7684\u4e3b\u673a\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'kubectl create ingress demo-localhost --class=nginx --rule="demo.localdev.me/*=demo:80"\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"\u5c06\u672c\u5730\u7aef\u53e3\u8f6c\u53d1\u5230 Ingress Controller\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u73b0\u5728\uff0c\u5982\u679c\u4f60\u8bbf\u95ee ",(0,s.jsx)(n.a,{href:"http://demo.localdev.me:8080/",children:"http://demo.localdev.me:8080/"})," \uff0c\u4f60\u5e94\u8be5\u4f1a\u770b\u5230 NGINX \u7684\u6b22\u8fce\u9875\u9762\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var s=r(67294);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);