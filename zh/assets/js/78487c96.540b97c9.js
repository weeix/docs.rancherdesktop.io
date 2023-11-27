"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1294],{85779:function(e,n,o){o.r(n),o.d(n,{assets:function(){return a},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return i},metadata:function(){return t},toc:function(){return l}});var s=o(85893),r=o(11151);const i={title:"ODO \u4e0e Rancher Desktop"},d=void 0,t={id:"how-to-guides/odo-rancher-desktop",title:"ODO \u4e0e Rancher Desktop",description:"odo \u662f\u4e00\u6b3e\u5feb\u901f\u3001\u8fed\u4ee3\u5f00\u53d1\u4e14\u7b80\u5355\u7684 CLI \u5de5\u5177\uff0c\u9002\u5408\u5728 Kubernetes \u4e0a\u7f16\u5199\u3001\u6784\u5efa\u548c\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u4eba\u5458\u3002odo CLI \u62bd\u8c61\u51fa\u4e86\u590d\u6742\u7684 Kubernetes \u6982\u5ff5\uff0c\u8ba9\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u4e13\u6ce8\u4e8e\u4ee3\u7801\u8fed\u4ee3\u3002\u8be5\u5de5\u5177\u53ef\u4ee5\u68c0\u6d4b\u672c\u5730\u4ee3\u7801\u7684\u66f4\u6539\uff0c\u5e76\u5c06\u5176\u81ea\u52a8\u90e8\u7f72\u5230\u5bb9\u5668\u7f16\u6392\u7684\u96c6\u7fa4\u4e2d\uff0c\u901a\u8fc7\u5373\u65f6\u53cd\u9988\u6765\u5b9e\u65f6\u9a8c\u8bc1\u66f4\u6539\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 odo \u9879\u76ee\u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/odo-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/odo-rancher-desktop",permalink:"/zh/next/how-to-guides/odo-rancher-desktop",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/odo-rancher-desktop.md",tags:[],version:"current",frontMatter:{title:"ODO \u4e0e Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"\u79bb\u7ebf\u8fd0\u884c",permalink:"/zh/next/how-to-guides/running-air-gapped"},next:{title:"Using the Traefik Ingress Controller",permalink:"/zh/next/how-to-guides/traefik-ingress-example"}},a={},l=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u6b65\u9aa4\uff1a<code>odo init</code>",id:"\u6b65\u9aa4odo-init",level:2},{value:"\u6b65\u9aa4\uff1a<code>odo dev</code>",id:"\u6b65\u9aa4odo-dev",level:2},{value:"\u6b65\u9aa4\uff1a<code>odo deploy</code>",id:"\u6b65\u9aa4odo-deploy",level:2},{value:"\u6b65\u9aa4\uff1a<code>odo describe component</code>",id:"\u6b65\u9aa4odo-describe-component",level:3},{value:"\u6b65\u9aa4\uff1a<code>odo delete component</code>",id:"\u6b65\u9aa4odo-delete-component",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:o,TabItem:i,Tabs:d}=n;return o||m("Details",!0),i||m("TabItem",!0),d||m("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"odo"})," \u662f\u4e00\u6b3e\u5feb\u901f\u3001\u8fed\u4ee3\u5f00\u53d1\u4e14\u7b80\u5355\u7684 CLI \u5de5\u5177\uff0c\u9002\u5408\u5728 Kubernetes \u4e0a\u7f16\u5199\u3001\u6784\u5efa\u548c\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u4eba\u5458\u3002",(0,s.jsx)(n.code,{children:"odo"})," CLI \u62bd\u8c61\u51fa\u4e86\u590d\u6742\u7684 Kubernetes \u6982\u5ff5\uff0c\u8ba9\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u4e13\u6ce8\u4e8e\u4ee3\u7801\u8fed\u4ee3\u3002\u8be5\u5de5\u5177\u53ef\u4ee5\u68c0\u6d4b\u672c\u5730\u4ee3\u7801\u7684\u66f4\u6539\uff0c\u5e76\u5c06\u5176\u81ea\u52a8\u90e8\u7f72\u5230\u5bb9\u5668\u7f16\u6392\u7684\u96c6\u7fa4\u4e2d\uff0c\u901a\u8fc7\u5373\u65f6\u53cd\u9988\u6765\u5b9e\u65f6\u9a8c\u8bc1\u66f4\u6539\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,s.jsxs)(n.a,{href:"https://odo.dev/docs/introduction",children:[(0,s.jsx)(n.code,{children:"odo"})," \u9879\u76ee\u6587\u6863"]}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u524d\u63d0",children:"\u524d\u63d0"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u672c\u6307\u5357\u4e2d\uff0c\u4f60\u5c06\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io",children:"Rancher Desktop \u6587\u6863"}),"\u4ed3\u5e93\u4e2d\u7684 ",(0,s.jsx)(n.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample",children:"express-sample node.js \u5e94\u7528\u7a0b\u5e8f"}),"\u6765\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"odo"})," \u548c Rancher Desktop\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"odo"})," \u4e0e ",(0,s.jsx)(n.code,{children:"dockerd (moby)"})," \u8fd0\u884c\u65f6\u914d\u5408\u4f7f\u7528\uff0c\u8bf7\u4ece\u504f\u597d\u8bbe\u7f6e\u5bf9\u8bdd\u6846\u4f4d\u7f6e\u4e2d\u9009\u4e2d\u5b83\uff1a",(0,s.jsx)(n.em,{children:"Preferences"})," > ",(0,s.jsx)(n.em,{children:"Container Engine"})," > ",(0,s.jsx)(n.em,{children:"Allowed Images"}),"\u3002"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u8bf7\u786e\u4fdd\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u542f\u7528\u4e86 Kubernetes\u3002\u6b64\u5916\uff0c\u8981\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"odo deploy"}),"\uff0c\u4f60\u9700\u8981\u80fd\u591f\u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5176\u63a8\u9001\u5230 Docker \u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\u3002\u4f7f\u7528 Docker \u51ed\u8bc1\u767b\u5f55\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ docker login docker.io\nUsername:\nPassword:\nLogin Succeeded!\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/overview/installation",children:"https://odo.dev/docs/overview/installation"})," \u5b89\u88c5 ",(0,s.jsx)(n.code,{children:"odo"}),"\uff0c\u5e76\u9488\u5bf9\u4f60\u7684\u5e73\u53f0\u8fdb\u884c\u5b89\u88c5\u3002\u8be5\u5de5\u5177\u65e2\u53ef\u4ee5\u7528\u4f5c ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/overview/installation#cli-installation",children:"CLI \u5de5\u5177"}),"\uff0c\u4e5f\u53ef\u4ee5\u7528\u4f5c ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/overview/installation#ide-installation",children:"IDE \u63d2\u4ef6"}),"\uff0c\u4f60\u8fd8\u80fd\u6839\u636e\u81ea\u5df1\u7684\u559c\u597d\u4f7f\u7528",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/overview/installation#alternative-installation-methods",children:"\u5176\u4ed6\u5b89\u88c5\u65b9\u6cd5"}),"\u3002\u672c\u6307\u5357\u5c06\u91cd\u70b9\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 CLI \u4f7f\u7528\u8be5\u5de5\u5177\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u6b65\u9aa4odo-init",children:["\u6b65\u9aa4\uff1a",(0,s.jsx)(n.code,{children:"odo init"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u901a\u8fc7\u521b\u5efa\u7528\u4e8e\u90e8\u7f72\u7684 ",(0,s.jsx)(n.code,{children:"devfile.yaml"})," \u6765\u521d\u59cb\u5316\u5e94\u7528\u7a0b\u5e8f\u3002"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u514b\u9686 ",(0,s.jsx)(n.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io",children:"Rancher Desktop \u6587\u6863"}),"\u4ed3\u5e93\uff0c\u5e76\u8fdb\u5165 ",(0,s.jsx)(n.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample",children:"sample-express"})," \u5e94\u7528\u7a0b\u5e8f\u8def\u5f84\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/rancher-sandbox/docs.rancherdesktop.io.git\ncd docs.rancherdesktop.io/assets/express-sample\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\u5728\u521d\u59cb\u5316\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u901a\u8fc7\u547d\u540d\u7a7a\u95f4\u5c06 ",(0,s.jsx)(n.code,{children:"odo"})," \u8fde\u63a5\u5230\u96c6\u7fa4\uff0c\u8be5\u547d\u540d\u7a7a\u95f4\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/command-reference/create-namespace",children:(0,s.jsx)(n.code,{children:"odo create namespace <name>"})})," \u547d\u4ee4\u521b\u5efa\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"odo create namespace odo-dev\n"})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ odo create namespace odo-dev\n \u2713  Creating the namespace "odo-dev" [5ms]\n \u2713  Namespace "odo-dev" is ready for use\n \u2713  New namespace created and now using namespace: odo-dev\n'})})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://odo.dev/docs/command-reference/init",children:(0,s.jsx)(n.code,{children:"odo init"})})," \u547d\u4ee4\u5c06\u81ea\u52a8\u68c0\u6d4b\u4f60\u7684\u9879\u76ee\u6846\u67b6\uff0c\u5e76\u9009\u62e9\u5408\u9002\u7684 ",(0,s.jsx)(n.code,{children:"devfile.yaml"})," \u6765\u90e8\u7f72\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u8be5\u547d\u4ee4\u5c06\u8ba9\u4f60\u786e\u8ba4 Devfile (Y/n)\u3001\u9009\u62e9\u5bb9\u5668\u6765\u66f4\u6539\u914d\u7f6e\uff08\u5728\u672c\u793a\u4f8b\u4e2d\u9009\u62e9 ",(0,s.jsx)(n.code,{children:"none"}),"\uff09\uff0c\u7136\u540e\u8f93\u5165\u7ec4\u4ef6\u540d\u79f0\uff08\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"my-nodejs-app"}),"\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u5e26\u6709\u9644\u52a0\u6807\u5fd7\uff08\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"--devfile-version 2.2.0"}),"\uff09\u7684\u547d\u4ee4\u6765\u521d\u59cb\u5316 ",(0,s.jsx)(n.code,{children:"odo"}),"\uff0c\u5e76\u5141\u8bb8\u5e94\u7528\u90e8\u7f72\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"odo init --name my-nodejs-app --devfile nodejs --devfile-registry DefaultDevfileRegistry --devfile-version 2.2.0\n"})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"  __\n /  \\__     Initializing a new component\n \\__/  \\\n /  \\__/    odo version: v3.13.0\n \\__/\n\n \u2713  Downloading devfile \"nodejs:2.2.0\" from registry \"DefaultDevfileRegistry\" [1s]\n\nYour new component 'my-nodejs-app' is ready in the current directory.\nTo start editing your component, use 'odo dev' and open this folder in your favorite IDE.\nChanges will be directly reflected on the cluster.\n"})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"odo init\n"})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ odo init\n  __\n /  \\__     Initializing a new component\n \\__/  \\    Files: Source code detected, a Devfile will be determined based upon source code autodetection\n /  \\__/    odo version: v3.13.0\n \\__/\n\nInteractive mode enabled, please answer the following questions:\n \u2713  Determining a Devfile for the current directory [910ms]\nBased on the files in the current directory odo detected\nLanguage: JavaScript\nProject type: Node.js\nApplication ports: 3000\nThe devfile "nodejs:2.1.1" from the registry "DefaultDevfileRegistry" will be downloaded.\n?Is this correct?Yes\n \u2713  Downloading devfile "nodejs:2.1.1" from registry "DefaultDevfileRegistry" [933ms]\n\n\u21aa Container Configuration "runtime":\n  OPEN PORTS:\n    - 3000\n    - 5858\n  ENVIRONMENT VARIABLES:\n    - DEBUG_PORT = 5858\n\n?Select container for which you want to change configuration?NONE - configuration is correct\n?Enter component name: my-nodejs-app\n\nYou can automate this command by executing:\n   odo init --name my-nodejs-app --devfile nodejs --devfile-registry DefaultDevfileRegistry --devfile-version 2.1.1\n\nYour new component \'my-nodejs-app\' is ready in the current directory.\nTo start editing your component, use \'odo dev\' and open this folder in your favorite IDE.\nChanges will be directly reflected on the cluster.\n'})})]}),"\n",(0,s.jsxs)(n.h2,{id:"\u6b65\u9aa4odo-dev",children:["\u6b65\u9aa4\uff1a",(0,s.jsx)(n.code,{children:"odo dev"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/command-reference/dev",children:(0,s.jsx)(n.code,{children:"odo dev"})})," \u547d\u4ee4\u5728\u901a\u8fc7 IDE \u66f4\u6539\u4ee3\u7801\u65f6\u6301\u7eed\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u80fd\u4f1a\u9047\u5230 ",(0,s.jsx)(n.code,{children:"ErrImagePull"})," \u9519\u8bef\uff0c\u8fd9\u662f\u56e0\u4e3a\u8be5\u955c\u50cf\u53ef\u80fd\u672a\u5305\u542b\u5728 Rancher Desktop \u5141\u8bb8\u7684\u955c\u50cf\u5217\u8868\u4e2d\u3002\u8981\u89e3\u51b3\u8be5\u9519\u8bef\uff0c\u8bf7\u5728 ",(0,s.jsx)(n.em,{children:"Preferences"})," > ",(0,s.jsx)(n.em,{children:"Container Engine"})," > ",(0,s.jsx)(n.em,{children:"Allowed Images"})," \u4e2d\u6dfb\u52a0\u955c\u50cf\uff0c\u7136\u540e\u70b9\u51fb ",(0,s.jsx)(n.strong,{children:"Apply"})," \u7acb\u5373\u66f4\u65b0\u5141\u8bb8\u7684\u955c\u50cf\u5217\u8868\u3002"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"odo dev\n"})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ odo dev\n  __\n /  \\__     Developing using the "my-nodejs-app" Devfile\n \\__/  \\    Namespace: odo-dev\n /  \\__/    odo version: v3.13.0\n \\__/\n\n\u21aa Running on the cluster in Dev mode\nI0728 13:50:53.115137   92567 starterserver.go:123] API Server started at localhost:20000/api/v1\n \u2022  Waiting for Kubernetes resources  ...\n \u26a0  Pod is Pending\n \u2713  Pod is Running\n \u2713  Syncing files into the container [306ms]\n \u2713  Building your application in container (command: install) [3s]\n \u2022  Executing the application (command: run)  ...\n \u2713  Waiting for the application to be ready [1s]\n -  Forwarding from 127.0.0.1:20001 -> 3000\n\n\n\u21aa Dev mode\n Status:\n Watching for changes in the current directory /Users/docs.rancherdesktop.io/assets/express-sample\n\n Keyboard Commands:\n[Ctrl+c] - Exit and delete resources from the cluster\n     [p] - Manually apply local changes to the application on the cluster\n'})})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"express-sample"})," application can now be accessed by the local port (127.0.0.1:20001). As an example, you can make a text change to the ",(0,s.jsx)(n.code,{children:"index.jade"})," file in the ",(0,s.jsx)(n.em,{children:"views"})," folder to see a real-time update to the application."]}),"\n",(0,s.jsxs)(n.h2,{id:"\u6b65\u9aa4odo-deploy",children:["\u6b65\u9aa4\uff1a",(0,s.jsx)(n.code,{children:"odo deploy"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u5c06\u6839\u636e ",(0,s.jsx)(n.code,{children:"devfile.yaml"})," \u4e2d\u7684\u8bf4\u660e\u5c06\u5e94\u7528\u7a0b\u5e8f\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\u3002"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u8bf7\u52a1\u5fc5\u767b\u5f55\u5230\u8981\u63a8\u9001\u5e94\u7528\u7a0b\u5e8f\u7684 Docker \u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\uff0c\u5e76\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/overview/configure/#environment-variables-controlling-odo-behavior:~:text=ODO_IMAGE_BUILD_ARGS",children:(0,s.jsx)(n.code,{children:"ODO_IMAGE_BUILD_ARGS"})})," \u73af\u5883\u53d8\u91cf\u5c06\u5bb9\u5668\u955c\u50cf\u6784\u5efa\u53c2\u6570\u8bbe\u7f6e\u4e3a\u4e0e\u5bb9\u5668\u67b6\u6784\u76f8\u540c:"]}),"\n"]}),"\n",(0,s.jsxs)(d,{children:[(0,s.jsx)(i,{value:"AMD64",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'export ODO_IMAGE_BUILD_ARGS="--platform=linux/amd64"\n'})})}),(0,s.jsx)(i,{value:"ARM",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'export ODO_IMAGE_BUILD_ARGS="--platform=linux/arm64"\n'})})})]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\u66f4\u65b0 ",(0,s.jsx)(n.code,{children:"express-sample"})," \u76ee\u5f55\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"Dockerfile"})," \u4ee5\u4f7f\u7528\u6b63\u786e\u7684\u53d8\u91cf\u5bf9\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u5bb9\u5668\u5316\uff0c\u4ee5\u4fbf\u6784\u5efa\u5e76\u63a8\u9001\u5230\u955c\u50cf\u4ed3\u5e93\uff1a"]}),"\n"]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"\u793a\u4f8b Dockerfile"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'# Install the app dependencies in a full SLE Node image\nFROM registry.suse.com/bci/nodejs:16\n\n# Copy package.json and package-lock.json\nCOPY package*.json ./\n\n# Install app dependencies\nRUN npm install --production\n\n# Install app dependencies\nCOPY . /opt/app-root/src\n\nENV NODE_ENV production\nENV PORT 3000\n\nCMD ["npm", "start"]\n'})})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\u4e3a\u4f60\u7684\u5bb9\u5668\u96c6\u7fa4\u5c06 ",(0,s.jsx)(n.code,{children:"devfile.yaml"})," \u4fee\u6539\u4e3a\u4e0b\u9762\u793a\u4f8b\u5185\u5bb9\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u66f4\u65b0\u53d8\u91cf\u4ee5\u8bbf\u95ee\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# Add the following variables code anywhere in devfile.yaml\n# This MUST be a container registry you are able to access\nvariables:\n  CONTAINER_IMAGE: docker.io/<INSERTUSERNAME>/nodejs-odo-example\n  RESOURCE_NAME: my-nodejs-app\n  CONTAINER_PORT: "3000"\n  DOMAIN_NAME: nodejs.example.com\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5c06 Devfile \u67b6\u6784\u66f4\u65b0\u4e3a ",(0,s.jsx)(n.code,{children:"2.2.0"}),"\uff0c\u8fd9\u662f\u56e0\u4e3a ",(0,s.jsx)(n.code,{children:"odo deploy"})," \u4f7f\u7528\u6b64\u7248\u672c\u3002\u6b64\u5916\uff0c\u8fd8\u6709\u4e00\u4e2a\u547d\u4ee4\u53ef\u4ee5\u4f7f\u7528\u5b89\u88c5\u4e2d\u63d0\u5230\u7684\u6b63\u786e ",(0,s.jsx)(n.code,{children:"schemaVersion: 2.2.0"})," \u6765\u521d\u59cb\u5316 ",(0,s.jsx)(n.code,{children:"odo"}),"\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# Deploy "kind" ID\'s use schema 2.2.0+\nschemaVersion: 2.2.0\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4ee5\u4e0b\u547d\u4ee4\u7528\u4e8e\u90e8\u7f72\u6d3b\u52a8\uff1a"}),"\n"]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"\u90e8\u7f72\u547d\u4ee4"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# This is the main "composite" command that will run all below commands\ncommands:\n- id: deploy\n  composite:\n    commands:\n    - build-image\n    - k8s-deployment\n    - k8s-service\n    - k8s-url\n    group:\n      isDefault: true\n      kind: deploy\n\n# Below are the commands and their respective components that they are "linked" to deploy\n- id: build-image\n  apply:\n    component: outerloop-build\n- id: k8s-deployment\n  apply:\n    component: outerloop-deployment\n- id: k8s-service\n  apply:\n    component: outerloop-service\n- id: k8s-url\n  apply:\n    component: outerloop-url\n'})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4ee5\u4e0b\u547d\u4ee4\u7528\u4e8e\u5c06 Docker \u955c\u50cf\u4f4d\u7f6e\u3001K8s deployment \u548c service \u6dfb\u52a0\u5230",(0,s.jsx)(n.code,{children:"\u7ec4\u4ef6"}),"\uff1a"]}),"\n"]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"\u7ec4\u4ef6\u547d\u4ee4"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# This will build the container image before deployment\n- name: outerloop-build\n  image:\n    dockerfile:\n      buildContext: ${PROJECT_SOURCE}\n      rootRequired: false\n      uri: ./Dockerfile\n    imageName: "{{CONTAINER_IMAGE}}"\n# This will create a Deployment in order to run your container image across\n# the cluster.\n- name: outerloop-deployment\n  kubernetes:\n    inlined: |\n      kind: Deployment\n      apiVersion: apps/v1\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        replicas: 1\n        selector:\n          matchLabels:\n            app: {{RESOURCE_NAME}}\n        template:\n          metadata:\n            labels:\n              app: {{RESOURCE_NAME}}\n          spec:\n            containers:\n              - name: {{RESOURCE_NAME}}\n                image: {{CONTAINER_IMAGE}}\n                ports:\n                  - name: http\n                    containerPort: {{CONTAINER_PORT}}\n                    protocol: TCP\n                resources:\n                  limits:\n                    memory: "1024Mi"\n                    cpu: "500m"\n\n# This will create a Service so your Deployment is accessible.\n# Depending on your cluster, you may modify this code so it\'s a\n# NodePort, ClusterIP or a LoadBalancer service.\n- name: outerloop-service\n  kubernetes:\n    inlined: |\n      apiVersion: v1\n      kind: Service\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        ports:\n        - name: "{{CONTAINER_PORT}}"\n          port: {{CONTAINER_PORT}}\n          protocol: TCP\n          targetPort: {{CONTAINER_PORT}}\n        selector:\n          app: {{RESOURCE_NAME}}\n        type: NodePort\n'})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Devfile \u4e2d\u6700\u540e\u6dfb\u52a0\u7684\u662f Kubernetes ingress \u7ec4\u4ef6\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n"]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Ingress \u547d\u4ee4"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'- name: outerloop-url\n  kubernetes:\n    inlined: |\n      apiVersion: networking.k8s.io/v1\n      kind: Ingress\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        rules:\n          - host: "{{DOMAIN_NAME}}"\n            http:\n              paths:\n                - path: "/"\n                  pathType: Prefix\n                  backend:\n                    service:\n                      name: {{RESOURCE_NAME}}\n                      port:\n                        number: {{CONTAINER_PORT}}\n'})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4e0b\u9762\u662f ",(0,s.jsx)(n.code,{children:"devfile.yaml"})," \u793a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u793a\u4f8b\u6587\u4ef6\u4e86\u89e3\u5982\u4f55\u540c\u65f6\u4f7f\u7528\u547d\u4ee4\u548c\u53d8\u91cf\u8bbe\u7f6e\u3002\u8bf7\u68c0\u67e5\u4f60\u7684 Devfile \u4ee5\u5339\u914d\u6216\u66f4\u65b0\u53d8\u91cf\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n"]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"\u6700\u7ec8 Devfile"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'commands:\n- exec:\n    commandLine: npm install\n    component: runtime\n    group:\n      isDefault: true\n      kind: build\n    workingDir: ${PROJECT_SOURCE}\n  id: install\n- exec:\n    commandLine: npm start\n    component: runtime\n    group:\n      isDefault: true\n      kind: run\n    workingDir: ${PROJECT_SOURCE}\n  id: run\n- exec:\n    commandLine: npm run debug\n    component: runtime\n    group:\n      isDefault: true\n      kind: debug\n    workingDir: ${PROJECT_SOURCE}\n  id: debug\n- exec:\n    commandLine: npm test\n    component: runtime\n    group:\n      isDefault: true\n      kind: test\n    workingDir: ${PROJECT_SOURCE}\n  id: test\n# This is the main "composite" command that will run all below commands\n- id: deploy\n  composite:\n    commands:\n    - build-image\n    - k8s-deployment\n    - k8s-service\n    - k8s-url\n    group:\n      isDefault: true\n      kind: deploy\n# Below are the commands and their respective components that they are "linked" to deploy\n- id: build-image\n  apply:\n    component: outerloop-build\n- id: k8s-deployment\n  apply:\n    component: outerloop-deployment\n- id: k8s-service\n  apply:\n    component: outerloop-service\n- id: k8s-url\n  apply:\n    component: outerloop-url\ncomponents:\n- container:\n    args:\n    - tail\n    - -f\n    - /dev/null\n    endpoints:\n    - name: http-node\n      targetPort: 3000\n    - exposure: none\n      name: debug\n      targetPort: 5858\n    env:\n    - name: DEBUG_PORT\n      value: "5858"\n    image: registry.suse.com/bci/nodejs:16:latest\n    memoryLimit: 1024Mi\n    mountSources: true\n  name: runtime\n# This will build the container image before deployment\n- name: outerloop-build\n  image:\n    dockerfile:\n      buildContext: ${PROJECT_SOURCE}\n      rootRequired: false\n      uri: ./Dockerfile\n    imageName: "{{CONTAINER_IMAGE}}"\n# This will create a Deployment in order to run your container image across\n# the cluster.\n- name: outerloop-deployment\n  kubernetes:\n    inlined: |\n      kind: Deployment\n      apiVersion: apps/v1\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        replicas: 1\n        selector:\n          matchLabels:\n            app: {{RESOURCE_NAME}}\n        template:\n          metadata:\n            labels:\n              app: {{RESOURCE_NAME}}\n          spec:\n            containers:\n              - name: {{RESOURCE_NAME}}\n                image: {{CONTAINER_IMAGE}}\n                ports:\n                  - name: http\n                    containerPort: {{CONTAINER_PORT}}\n                    protocol: TCP\n                resources:\n                  limits:\n                    memory: "1024Mi"\n                    cpu: "500m"\n\n# This will create a Service so your Deployment is accessible.\n# Depending on your cluster, you may modify this code so it\'s a\n# NodePort, ClusterIP or a LoadBalancer service.\n- name: outerloop-service\n  kubernetes:\n    inlined: |\n      apiVersion: v1\n      kind: Service\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        ports:\n        - name: "{{CONTAINER_PORT}}"\n          port: {{CONTAINER_PORT}}\n          protocol: TCP\n          targetPort: {{CONTAINER_PORT}}\n        selector:\n          app: {{RESOURCE_NAME}}\n        type: NodePort\n- name: outerloop-url\n  kubernetes:\n    inlined: |\n      apiVersion: networking.k8s.io/v1\n      kind: Ingress\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        rules:\n          - host: "{{DOMAIN_NAME}}"\n            http:\n              paths:\n                - path: "/"\n                  pathType: Prefix\n                  backend:\n                    service:\n                      name: {{RESOURCE_NAME}}\n                      port:\n                        number: {{CONTAINER_PORT}}\nmetadata:\n  description: Stack with Node.js 16\n  displayName: Node.js Runtime\n  icon: https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg\n  language: JavaScript\n  name: my-node-app\n  projectType: Node.js\n  tags:\n  - Node.js\n  - Express\n  - ubi8\n  version: 2.1.1\nschemaVersion: 2.2.0\nstarterProjects:\n- git:\n    remotes:\n      origin: https://github.com/odo-devfiles/nodejs-ex.git\n  name: nodejs-starter\n# Add the following variables code anywhere in devfile.yaml\n# This MUST be a container registry you are able to access\nvariables:\n  CONTAINER_IMAGE: docker.io/<INSERTUSERNAME>/node-odo-example\n  RESOURCE_NAME: my-node-app\n  CONTAINER_PORT: "3000"\n  DOMAIN_NAME: node.example.com\n'})})]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u547d\u4ee4 ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/command-reference/deploy",children:(0,s.jsx)(n.code,{children:"odo deploy"})})," \u5c06\u5e94\u7528\u7a0b\u5e8f\u90e8\u7f72\u5230\u96c6\u7fa4\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u80fd\u4f1a\u9047\u5230 ",(0,s.jsx)(n.code,{children:"unauthorized: image"})," \u9519\u8bef\uff0c\u8fd9\u662f\u56e0\u4e3a\u8be5\u955c\u50cf\u53ef\u80fd\u672a\u5305\u542b\u5728 Rancher Desktop \u5141\u8bb8\u7684\u955c\u50cf\u5217\u8868\u4e2d\u3002\u8981\u89e3\u51b3\u8be5\u9519\u8bef\uff0c\u8bf7\u5728 ",(0,s.jsx)(n.em,{children:"Preferences"})," > ",(0,s.jsx)(n.em,{children:"Container Engine"})," > ",(0,s.jsx)(n.em,{children:"Allowed Images"})," \u4e2d\u6dfb\u52a0\u955c\u50cf\uff0c\u7136\u540e\u70b9\u51fb ",(0,s.jsx)(n.strong,{children:"Apply"})," \u7acb\u5373\u66f4\u65b0\u5141\u8bb8\u7684\u955c\u50cf\u5217\u8868\u3002"]})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ odo deploy\n  __\n /  \\__     Running the application in Deploy mode using my-node-app Devfile\n \\__/  \\    Namespace: odo-dev\n /  \\__/    odo version: v3.13.0\n \\__/\n\n\u21aa Building & Pushing Image: docker.io/arjsin/nodejs-odo-example\n \u2022  Building image locally  ...\n[+] Building 2.7s (9/9) FINISHED\n => [internal] load build definition from Dockerfile                       0.0s\n => => transferring dockerfile: 405B                                       0.0s\n => [internal] load .dockerignore                                          0.0s\n => => transferring context: 364B                                          0.0s\n => [internal] load metadata for registry.suse.com/bci/nodejs:16           2.2s\n => [1/4] FROM registry.suse.com/bci/nodejs:16@sha256:dda0e616a0fcb3dc589  0.0s\n => [internal] load build context                                          0.0s\n => => transferring context: 5.14kB                                        0.0s\n => CACHED [2/4] COPY package*.json ./                                     0.0s\n => CACHED [3/4] RUN npm install --production                              0.0s\n => [4/4] COPY . /opt/app-root/src                                         0.0s\n => exporting to image                                                     0.4s\n => => exporting layers                                                    0.4s\n => => writing image sha256:c6d3ed7d9fb4736d3c4e95b54054533f79d64d3a01e65  0.0s\n => => naming to docker.io/arjsin/nodejs-odo-example                       0.0s\n \u2713  Building image locally [3s]\n \u2022  Pushing image to container registry  ...\nUsing default tag: latest\nThe push refers to repository [docker.io/arjsin/nodejs-odo-example]\n20658d9b13ba: Pushed\n7b1ee26c3aea: Pushed\n067890bef08d: Pushed\nd08e96dfc7bc: Pushed\n174c0e293bd0: Pushed\nlatest: digest: sha256:ca598fc0c5278e8d00cba41e14914f1d3f7a3561bd4a324f2ffcd33b166135ad size: 1368\n \u2713  Pushing image to container registry [30s]\n\n\u21aa Deploying Kubernetes Component: my-node-app\n \u2713  Creating resource Deployment/my-node-app\n\n\u21aa Deploying Kubernetes Component: my-node-app\n \u2713  Creating resource Service/my-node-app\n\n\u21aa Deploying Kubernetes Component: my-node-app\n \u2713  Creating resource Ingress/my-node-app\n\nYour Devfile has been successfully deployed\n"})})]}),"\n",(0,s.jsxs)(n.h3,{id:"\u6b65\u9aa4odo-describe-component",children:["\u6b65\u9aa4\uff1a",(0,s.jsx)(n.code,{children:"odo describe component"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4 ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/command-reference/describe-component",children:(0,s.jsx)(n.code,{children:"odo describe component"})})," \u67e5\u770b Devfile \u4e2d\u7684\u4fe1\u606f\uff0c\u4f8b\u5982 Kubernetes \u7ec4\u4ef6\u3001ingress \u548c\u8bbf\u95ee\u5e94\u7528\u7a0b\u5e8f\u7684 URL\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"odo describe component\n"})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ odo describe component\nName: my-nodejs-app\nDisplay Name: Node.js Runtime\nProject Type: Node.js\nLanguage: JavaScript\nVersion: 2.2.0\nDescription: Node.js 18 application\nTags: Node.js, Express, ubi8\n\nRunning in: None\n\nSupported odo features:\n \u2022  Dev: true\n \u2022  Deploy: false\n \u2022  Debug: true\n\nCommands:\n \u2022  install\n      Type: exec\n      Group: build\n      Command Line: "npm install"\n      Component: runtime\n      Component Type: container\n \u2022  run\n      Type: exec\n      Group: run\n      Command Line: "npm start"\n      Component: runtime\n      Component Type: container\n \u2022  debug\n      Type: exec\n      Group: debug\n      Command Line: "npm run debug"\n      Component: runtime\n      Component Type: container\n \u2022  test\n      Type: exec\n      Group: test\n      Command Line: "npm test"\n      Component: runtime\n      Component Type: container\n\nContainer components:\n \u2022  runtime\n    Source Mapping: /projects\n'})})]}),"\n",(0,s.jsxs)(n.h2,{id:"\u6b65\u9aa4odo-delete-component",children:["\u6b65\u9aa4\uff1a",(0,s.jsx)(n.code,{children:"odo delete component"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6d4b\u8bd5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4 ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/command-reference/delete-component",children:(0,s.jsx)(n.code,{children:"odo delete component"})})," \u91ca\u653e ",(0,s.jsx)(n.code,{children:"odo"})," \u4f7f\u7528\u7684\u8d44\u6e90\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"odo delete component\n"})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ odo delete component\nSearching resources to delete, please wait...\nThis will delete "my-node-app" from the namespace "odo-dev".\n \u2022  The following resources will get deleted from cluster:\n \u2022  \t- Deployment: my-node-app\n \u2022  \t- Service: my-node-app\n \u2022  \t- Ingress: my-node-app\n\n?Are you sure you want to delete "my-node-app" and all its resources?Yes\n \u2713  Deleting resources from cluster [52ms]\nThe component "my-node-app" is successfully deleted from namespace "odo-dev"\n'})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return d}});var s=o(67294);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);