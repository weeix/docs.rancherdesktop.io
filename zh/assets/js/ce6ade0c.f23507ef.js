"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7731],{91650:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return t},default:function(){return i},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return h}});var s=r(85893),c=r(11151);const a={title:"Rancher Desktop \u4e0a\u7684 Rancher"},t=void 0,o={id:"how-to-guides/rancher-on-rancher-desktop",title:"Rancher Desktop \u4e0a\u7684 Rancher",description:"\u867d\u7136 Rancher \u548c Rancher Desktop \u7684\u540d\u5b57\u91cc\u90fd\u5305\u542b Rancher\uff0c\u4f46\u5b83\u4eec\u7684\u529f\u80fd\u662f\u6709\u5dee\u522b\u7684\u3002Rancher Desktop \u4e0d\u662f\u684c\u9762\u7248 Rancher\u3002Rancher \u662f\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u7684\u5f3a\u5927\u89e3\u51b3\u65b9\u6848\uff0c\u800c Rancher Desktop \u8fd0\u884c\u672c\u5730 Kubernetes \u548c\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\uff0c\u8fd9\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\u76f8\u8f85\u76f8\u6210\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u5c06 Rancher \u4f5c\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u5b89\u88c5\u5728 Rancher Desktop \u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/rancher-on-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/rancher-on-rancher-desktop",permalink:"/zh/next/how-to-guides/rancher-on-rancher-desktop",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/rancher-on-rancher-desktop.md",tags:[],version:"current",frontMatter:{title:"Rancher Desktop \u4e0a\u7684 Rancher"},sidebar:"tutorialSidebar",previous:{title:"VS Code Remote Containers",permalink:"/zh/next/how-to-guides/vs-code-remote-containers"},next:{title:"Skaffold \u4e0e Rancher Desktop",permalink:"/zh/next/how-to-guides/skaffold-and-rancher-desktop"}},l={},h=[];function d(e){const n={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components},{TabItem:a,Tabs:t}=n;return a||p("TabItem",!0),t||p("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u867d\u7136 ",(0,s.jsx)(n.a,{href:"https://rancher.com/",children:"Rancher"})," \u548c ",(0,s.jsx)(n.a,{href:"https://rancherdesktop.io/",children:"Rancher Desktop"})," \u7684\u540d\u5b57\u91cc\u90fd\u5305\u542b ",(0,s.jsx)(n.em,{children:"Rancher"}),"\uff0c\u4f46\u5b83\u4eec\u7684\u529f\u80fd\u662f\u6709\u5dee\u522b\u7684\u3002Rancher Desktop \u4e0d\u662f\u684c\u9762\u7248 Rancher\u3002Rancher \u662f\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u7684\u5f3a\u5927\u89e3\u51b3\u65b9\u6848\uff0c\u800c Rancher Desktop \u8fd0\u884c\u672c\u5730 Kubernetes \u548c\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\uff0c\u8fd9\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\u76f8\u8f85\u76f8\u6210\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u5c06 Rancher \u4f5c\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u5b89\u88c5\u5728 Rancher Desktop \u4e2d\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u6307\u5357\u6982\u8ff0\u4e86\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"container runtime"})," \u6216 ",(0,s.jsx)(n.code,{children:"helm"}),"\uff08\u672c\u5730\u73af\u5883\uff09\u5728 Rancher Desktop \u4e0a\u5b89\u88c5 Rancher Dashboard \u7684\u6b65\u9aa4\uff1a"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1a\u5982\u679c\u5b9e\u7528\u7a0b\u5e8f\uff08\u4f8b\u5982\uff1ahelm\uff09\u6216\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7248\u672c\u4e0e\u4f1a\u8bdd\u4e2d\u7684 Kubernetes \u7248\u672c\u4e0d\u517c\u5bb9\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230\u95ee\u9898\u3002\u4f5c\u4e3a\u4e00\u4e2a\u6f5c\u5728\u7684\u4fee\u590d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.a,{href:"https://docs.rancherdesktop.io/getting-started/features/#kubernetes",children:"Preferences > Kubernetes"})," \u5bf9\u8bdd\u6846\u5207\u6362\u5230\u517c\u5bb9\u7684 Kubernetes \u7248\u672c\u3002",(0,s.jsx)(n.a,{href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-7-1/",children:"\u652f\u6301\u77e9\u9635\u9875\u9762"}),"\u4e0a\u5217\u51fa\u4e86 Rancher \u652f\u6301\u7684 Kubernetes \u5e73\u53f0\u3002"]}),"\n",(0,s.jsxs)(t,{groupId:"container-runtime",children:[(0,s.jsx)(a,{value:"nerdctl",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"nerdctl run --privileged -d --restart=always -p 8080:80 -p 8443:443 rancher/rancher\n"})})}),(0,s.jsx)(a,{value:"docker",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"docker run --privileged -d --restart=always -p 8080:80 -p 8443:443 rancher/rancher\n"})})}),(0,s.jsxs)(a,{value:"helm",default:!0,children:[(0,s.jsx)(n.p,{children:"1\uff1a\u6dfb\u52a0 Jetstack Chart\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"helm repo add jetstack https://charts.jetstack.io\n"})}),(0,s.jsx)(n.p,{children:"2\uff1a\u6dfb\u52a0\u6700\u65b0\u7684 Rancher Chart\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"})}),(0,s.jsx)(n.p,{children:"3\uff1a\u521b\u5efa cert-manager \u547d\u540d\u7a7a\u95f4\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"kubectl create namespace cert-manager\n"})}),(0,s.jsx)(n.p,{children:"4\uff1a\u5b89\u88c5 cert-manager \u670d\u52a1\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.7.1 --set installCRDs=true\n"})}),(0,s.jsx)(n.p,{children:"5\uff1a\u5e94\u7528 CRD\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml\n"})}),(0,s.jsx)(n.p,{children:"6\uff1a\u521b\u5efa cattle-system \u547d\u540d\u7a7a\u95f4\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"kubectl create namespace cattle-system\n"})}),(0,s.jsx)(n.p,{children:"7\uff1a\u5b89\u88c5 Rancher \u5e94\u7528\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"helm install rancher rancher-latest/rancher --namespace cattle-system --set hostname=rancher.rd.localhost --wait --timeout=10m\n"})})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u88c5\u9700\u8981\u51e0\u5206\u949f\u624d\u80fd\u5b8c\u6210\u3002\u5b89\u88c5\u540e\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee Rancher UI\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"container runtime"})," \u5b89\u88c5\uff1a",(0,s.jsx)(n.a,{href:"https://localhost:8443/",children:"https://localhost:8443/"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"helm"})," \u5b89\u88c5\uff1a",(0,s.jsx)(n.a,{href:"https://rancher.rd.localhost/",children:"https://rancher.rd.localhost/"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(27934).Z+"",width:"1189",height:"875"})}),"\n",(0,s.jsxs)(t,{groupId:"container-runtime",children:[(0,s.jsxs)(a,{value:"nerdctl",default:!0,children:[(0,s.jsx)(n.p,{children:"\u8981\u8bbf\u95ee Rancher UI\uff0c\u4f60\u9700\u8981\u83b7\u53d6\u5f15\u5bfc\u5bc6\u7801\uff1a"}),(0,s.jsx)(n.p,{children:"1\uff1a\u83b7\u53d6 Rancher UI \u5bb9\u5668 ID/\u540d\u79f0\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"nerdctl ps\n"})}),(0,s.jsx)(n.p,{children:"2\uff1a\u83b7\u53d6\u5f15\u5bfc\u5bc6\u7801\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'nerdctl logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n'})}),(0,s.jsx)(n.p,{children:"3\uff1a\u5f15\u5bfc\u5bc6\u7801\u793a\u4f8b\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n"})})]}),(0,s.jsxs)(a,{value:"docker",default:!0,children:[(0,s.jsx)(n.p,{children:"\u8981\u8bbf\u95ee Rancher UI\uff0c\u4f60\u9700\u8981\u83b7\u53d6\u5f15\u5bfc\u5bc6\u7801\uff1a"}),(0,s.jsx)(n.p,{children:"1\uff1a\u83b7\u53d6 Rancher UI \u5bb9\u5668 ID/\u540d\u79f0\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"docker ps\n"})}),(0,s.jsx)(n.p,{children:"2\uff1a\u83b7\u53d6\u5f15\u5bfc\u5bc6\u7801\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'docker logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n'})}),(0,s.jsx)(n.p,{children:"3\uff1a\u5f15\u5bfc\u5bc6\u7801\u793a\u4f8b\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6309\u7167\u5411\u5bfc\u8bf4\u660e\u5e76\u5355\u51fb ",(0,s.jsx)(n.code,{children:"Continue"})," \u4ee5\u8fdb\u5165 Rancher UI \u4e3b\u9875\u9762\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(4288).Z+"",width:"1589",height:"979"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 Rancher UI \u4e2d\uff0c\u4f60\u53ef\u4ee5\u7ba1\u7406 local \u96c6\u7fa4\u3001\u8282\u70b9\u7b49\u3002\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,s.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/",children:"Rancher \u6587\u6863"}),"\u3002"]})]})}function i(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4288:function(e,n,r){n.Z=r.p+"assets/images/rancherUiMainPage-b53cd5a80ad0bacb7aa613f3ae7bd0b7.png"},27934:function(e,n,r){n.Z=r.p+"assets/images/rancherUiWelcomePage-21a9632bf47edafe852af976ed625bf1.png"},11151:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return t}});var s=r(67294);const c={},a=s.createContext(c);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);