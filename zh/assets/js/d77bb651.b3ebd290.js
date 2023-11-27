"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6010],{26927:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var t=r(85893),s=r(11151),o=r(74866),a=r(85162);r(93687);const c={title:"\u6545\u969c\u6392\u9664\u63d0\u793a"},l=void 0,i={id:"troubleshooting-tips",title:"\u6545\u969c\u6392\u9664\u63d0\u793a",description:"\u6b64\u9875\u9762\u63d0\u4f9b\u4e86 Rancher Desktop \u76f8\u5173\u95ee\u9898\u7684\u6545\u969c\u6392\u9664\u63d0\u793a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.8/troubleshooting-tips.md",sourceDirName:".",slug:"/troubleshooting-tips",permalink:"/zh/1.8/troubleshooting-tips",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.8/troubleshooting-tips.md",tags:[],version:"1.8",frontMatter:{title:"\u6545\u969c\u6392\u9664\u63d0\u793a"},sidebar:"tutorialSidebar",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/1.8/faq"}},d={},u=[{value:"\u95ee\uff1a\u4f7f\u7528\u7248\u672c &gt;<code>v0.266</code> \u7684 VS Code dev-containers \u6269\u5c55\u542f\u52a8\u5bb9\u5668\u65f6\u51fa\u73b0 Docker \u9519\u8bef\uff0c\u5982\u4f55\u4fee\u590d\uff1f",id:"\u95ee\u4f7f\u7528\u7248\u672c-v0266-\u7684-vs-code-dev-containers-\u6269\u5c55\u542f\u52a8\u5bb9\u5668\u65f6\u51fa\u73b0-docker-\u9519\u8bef\u5982\u4f55\u4fee\u590d",level:4},{value:"\u95ee\uff1a\u4e3a\u4ec0\u4e48\u6211\u5728 Rancher Desktop \u7684 WSL \u96c6\u6210\u9875\u9762\u4e0b\u770b\u4e0d\u5230\u6211\u7684 WSL \u53d1\u884c\u7248\uff1f",id:"\u95ee\u4e3a\u4ec0\u4e48\u6211\u5728-rancher-desktop-\u7684-wsl-\u96c6\u6210\u9875\u9762\u4e0b\u770b\u4e0d\u5230\u6211\u7684-wsl-\u53d1\u884c\u7248",level:4},{value:"\u95ee\uff1a\u8fd0\u884c <code>kubectl config get-contexts</code> \u65f6\uff0c\u6211\u6ca1\u6709\u770b\u5230 Rancher Desktop \u7684\u6761\u76ee\uff0c\u5b83\u5728\u54ea\u91cc\uff1f",id:"\u95ee\u8fd0\u884c-kubectl-config-get-contexts-\u65f6\u6211\u6ca1\u6709\u770b\u5230-rancher-desktop-\u7684\u6761\u76ee\u5b83\u5728\u54ea\u91cc",level:4},{value:"\u95ee\uff1aRancher Desktop \u5361\u5728 <code>Waiting for Kubernetes API</code>\uff0c\u6211\u8be5\u600e\u4e48\u529e\uff1f",id:"\u95eerancher-desktop-\u5361\u5728-waiting-for-kubernetes-api\u6211\u8be5\u600e\u4e48\u529e",level:4},{value:"\u95ee\uff1a\u5b89\u88c5 Rancher Desktop \u5e76\u5378\u8f7d Docker Desktop \u540e\uff0c\u6211\u65e0\u6cd5\u518d\u8fd0\u884c <code>docker compose</code>\uff0c\u4e3a\u4ec0\u4e48\uff1f",id:"\u95ee\u5b89\u88c5-rancher-desktop-\u5e76\u5378\u8f7d-docker-desktop-\u540e\u6211\u65e0\u6cd5\u518d\u8fd0\u884c-docker-compose\u4e3a\u4ec0\u4e48",level:4},{value:"\u95ee\uff1a\u6211\u4f7f\u7528 Homebrew \u6765\u5b89\u88c5 Rancher Desktop\uff0c\u4f46\u662f <code>brew install rancher-desktop</code> \u63d0\u793a\u5931\u8d25\uff0c\u4e3a\u4ec0\u4e48\uff1f",id:"\u95ee\u6211\u4f7f\u7528-homebrew-\u6765\u5b89\u88c5-rancher-desktop\u4f46\u662f-brew-install-rancher-desktop-\u63d0\u793a\u5931\u8d25\u4e3a\u4ec0\u4e48",level:4},{value:"\u95ee\uff1a\u5c1d\u8bd5\u5728 WSL \u4e0a\u4f7f\u7528 Docker \u65f6\uff0c\u5982\u4f55\u4fee\u590d <code>permission denied</code> \u9519\u8bef\uff1f",id:"\u95ee\u5c1d\u8bd5\u5728-wsl-\u4e0a\u4f7f\u7528-docker-\u65f6\u5982\u4f55\u4fee\u590d-permission-denied-\u9519\u8bef",level:4},{value:"\u95ee\uff1a\u5982\u4f55\u89e3\u51b3 Linux \u4e0a\u7684 <code>kubectl: command not found</code> \u95ee\u9898\uff1f",id:"\u95ee\u5982\u4f55\u89e3\u51b3-linux-\u4e0a\u7684-kubectl-command-not-found-\u95ee\u9898",level:4},{value:"\u95ee\uff1a\u4f7f\u7528 <code>nerdctl run</code> \u8fd0\u884c\u5bb9\u5668\u65f6\uff0c\u5982\u4f55\u4fee\u590d <code>FATA[0005] subnet 10.4.0.0/24 overlaps with other one on this address space</code> \u95ee\u9898\uff1f",id:"\u95ee\u4f7f\u7528-nerdctl-run-\u8fd0\u884c\u5bb9\u5668\u65f6\u5982\u4f55\u4fee\u590d-fata0005-subnet-1040024-overlaps-with-other-one-on-this-address-space-\u95ee\u9898",level:4},{value:"\u95ee\uff1a\u5728 Windows \u4e0a\u5c06\u73b0\u6709 MSI \u964d\u7ea7\u5230\u8f83\u65e7\u7684 EXE \u7248\u672c\uff081.6.x \u6216\u66f4\u65e9\u7248\u672c\uff09\u65f6\uff0c\u5982\u4f55\u4fee\u590d <code>Installation Aborted</code> \u9519\u8bef\uff1f",id:"\u95ee\u5728-windows-\u4e0a\u5c06\u73b0\u6709-msi-\u964d\u7ea7\u5230\u8f83\u65e7\u7684-exe-\u7248\u672c16x-\u6216\u66f4\u65e9\u7248\u672c\u65f6\u5982\u4f55\u4fee\u590d-installation-aborted-\u9519\u8bef",level:4},{value:"\u95ee\uff1a\u4e3a\u4ec0\u4e48\u542f\u52a8 Cluster Dashboard \u65f6\u4f1a\u51fa\u73b0\u7a7a\u767d\u5c4f\u5e55\uff1f",id:"\u95ee\u4e3a\u4ec0\u4e48\u542f\u52a8-cluster-dashboard-\u65f6\u4f1a\u51fa\u73b0\u7a7a\u767d\u5c4f\u5e55",level:4}];function h(e){const n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u6b64\u9875\u9762\u63d0\u4f9b\u4e86 Rancher Desktop \u76f8\u5173\u95ee\u9898\u7684\u6545\u969c\u6392\u9664\u63d0\u793a\u3002"}),"\n",(0,t.jsxs)(n.h4,{id:"\u95ee\u4f7f\u7528\u7248\u672c-v0266-\u7684-vs-code-dev-containers-\u6269\u5c55\u542f\u52a8\u5bb9\u5668\u65f6\u51fa\u73b0-docker-\u9519\u8bef\u5982\u4f55\u4fee\u590d",children:["\u95ee\uff1a\u4f7f\u7528\u7248\u672c >",(0,t.jsx)(n.code,{children:"v0.266"})," \u7684 VS Code dev-containers \u6269\u5c55\u542f\u52a8\u5bb9\u5668\u65f6\u51fa\u73b0 Docker \u9519\u8bef\uff0c\u5982\u4f55\u4fee\u590d\uff1f"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7b54"}),"\uff1a\u5f53\u524d\u6709\u4e00\u4e2a\u89e3\u51b3\u65b9\u6cd5\uff0c\u53ef\u4ee5\u89e3\u51b3\u7528\u6237\u5728\u4f7f\u7528 VS Code dev-containers \u6269\u5c55 ",(0,t.jsx)(n.code,{children:"v0.266"})," \u6216\u66f4\u9ad8\u7248\u672c\u548c Rancher Desktop ",(0,t.jsx)(n.code,{children:"v1.8.1"})," \u542f\u52a8\u5bb9\u5668\u65f6\u9047\u5230\u7684 Docker \u9519\u8bef\u3002\u5728\u7528\u6237\u8bbe\u7f6e\u4e2d\u7981\u7528 Wayland \u5c06\u80fd\u8ba9\u5bb9\u5668\u6210\u529f\u542f\u52a8\u3002\u4f60\u53ef\u4ee5\u53d6\u6d88\u9009\u4e2d ",(0,t.jsx)(n.code,{children:"Settings"})," > ",(0,t.jsx)(n.code,{children:"Extensions"})," > ",(0,t.jsx)(n.code,{children:"Dev Containers"})," \u9009\u9879\u5361\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"Dev > Containers: Mount Wayland Socket (Applies to All Profiles)"}),"\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u95ee\u4e3a\u4ec0\u4e48\u6211\u5728-rancher-desktop-\u7684-wsl-\u96c6\u6210\u9875\u9762\u4e0b\u770b\u4e0d\u5230\u6211\u7684-wsl-\u53d1\u884c\u7248",children:"\u95ee\uff1a\u4e3a\u4ec0\u4e48\u6211\u5728 Rancher Desktop \u7684 WSL \u96c6\u6210\u9875\u9762\u4e0b\u770b\u4e0d\u5230\u6211\u7684 WSL \u53d1\u884c\u7248\uff1f"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7b54"}),"\uff1a\u4f60\u53ef\u80fd\u4f7f\u7528\u7684\u662f WSL 1 \u53d1\u884c\u7248\u3002Rancher Desktop \u4ec5\u652f\u6301 WSL 2 \u53d1\u884c\u7248\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"wsl --set-version <distro-name> 2"})," \u547d\u4ee4\u5c06 WSL 1 \u53d1\u884c\u7248\u8f6c\u6362\u4e3a WSL 2 \u53d1\u884c\u7248\u3002\u4f60\u8fd8\u53ef\u4ee5\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"wsl --set-default-version 2"})," \u547d\u4ee4\u6765\u5c06\u4f60\u4e4b\u540e\u53ef\u80fd\u5b89\u88c5\u7684\u6240\u6709\u53d1\u884c\u7248\u8bbe\u7f6e\u4e3a\u4f7f\u7528 WSL 2\u3002"]}),"\n",(0,t.jsxs)(n.h4,{id:"\u95ee\u8fd0\u884c-kubectl-config-get-contexts-\u65f6\u6211\u6ca1\u6709\u770b\u5230-rancher-desktop-\u7684\u6761\u76ee\u5b83\u5728\u54ea\u91cc",children:["\u95ee\uff1a\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"kubectl config get-contexts"})," \u65f6\uff0c\u6211\u6ca1\u6709\u770b\u5230 Rancher Desktop \u7684\u6761\u76ee\uff0c\u5b83\u5728\u54ea\u91cc\uff1f"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7b54"}),"\uff1aRancher Desktop \u5c06\u914d\u7f6e\u653e\u7f6e\u5728\u9ed8\u8ba4\u4f4d\u7f6e ",(0,t.jsx)(n.code,{children:"~/.kube/config"}),"\u3002\u4f60\u7684 ",(0,t.jsx)(n.code,{children:"KUBECONFIG"})," \u73af\u5883\u53d8\u91cf\u53ef\u80fd\u88ab\u8bbe\u7f6e\u4e3a\u5728\u5176\u4ed6\u4f4d\u7f6e\u67e5\u627e\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n",(0,t.jsxs)(n.h4,{id:"\u95eerancher-desktop-\u5361\u5728-waiting-for-kubernetes-api\u6211\u8be5\u600e\u4e48\u529e",children:["\u95ee\uff1aRancher Desktop \u5361\u5728 ",(0,t.jsx)(n.code,{children:"Waiting for Kubernetes API"}),"\uff0c\u6211\u8be5\u600e\u4e48\u529e\uff1f"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7b54"}),"\uff1a\u6ca1\u6709\u989d\u5916\u4fe1\u606f\u6211\u4eec\u5f88\u96be\u786e\u5b9a\u539f\u56e0\u3002\u5bfc\u822a\u5230 ",(0,t.jsx)(n.strong,{children:"Troubleshooting"})," \u9009\u9879\u5361\u5e76\u8bbf\u95ee\u65e5\u5fd7\u3002\u7136\u540e\uff0c\u8f6c\u5230 ",(0,t.jsx)(n.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/issues",children:"Rancher Desktop GitHub"})," \u9875\u9762\u5e76\u63d0\u4ea4\u9644\u52a0\u4e86\u4f60\u7684\u65e5\u5fd7\u7684 Issue\u3002"]}),"\n",(0,t.jsxs)(n.h4,{id:"\u95ee\u5b89\u88c5-rancher-desktop-\u5e76\u5378\u8f7d-docker-desktop-\u540e\u6211\u65e0\u6cd5\u518d\u8fd0\u884c-docker-compose\u4e3a\u4ec0\u4e48",children:["\u95ee\uff1a\u5b89\u88c5 Rancher Desktop \u5e76\u5378\u8f7d Docker Desktop \u540e\uff0c\u6211\u65e0\u6cd5\u518d\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"docker compose"}),"\uff0c\u4e3a\u4ec0\u4e48\uff1f"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7b54"}),"\uff1a\u8fd9\u662f Rancher Desktop \u65e9\u671f\u7248\u672c\uff081.1.0 \u4e4b\u524d\uff09\u7684\u95ee\u9898\u3002Rancher Desktop 1.1.0 \u53ca\u4ee5\u4e0a\u7248\u672c\u9644\u5e26\u4e86 ",(0,t.jsx)(n.code,{children:"docker-compose"}),"\uff0c\u5e76\u5728 ",(0,t.jsx)(n.code,{children:"~/.docker/cli-plugins"})," \u63d0\u4f9b\u4e86 CLI \u63d2\u4ef6\u3002\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f60\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u7684 Rancher Desktop\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4ecd\u7136\u65e0\u6cd5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"docker-compose"}),"\uff0c\u8bf7\u5728 ",(0,t.jsx)(n.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/issues/new?assignees=&labels=kind%2Fbug&template=bug_report.yml",children:"Github"}),"\u4e0a\u62a5\u544a\u8fd9\u4e2a Bug\u3002"]}),"\n",(0,t.jsxs)(n.h4,{id:"\u95ee\u6211\u4f7f\u7528-homebrew-\u6765\u5b89\u88c5-rancher-desktop\u4f46\u662f-brew-install-rancher-desktop-\u63d0\u793a\u5931\u8d25\u4e3a\u4ec0\u4e48",children:["\u95ee\uff1a\u6211\u4f7f\u7528 Homebrew \u6765\u5b89\u88c5 Rancher Desktop\uff0c\u4f46\u662f ",(0,t.jsx)(n.code,{children:"brew install rancher-desktop"})," \u63d0\u793a\u5931\u8d25\uff0c\u4e3a\u4ec0\u4e48\uff1f"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7b54"}),"\uff1aHomebrew cask \u7684\u547d\u540d\u7ea6\u5b9a\u89c4\u5b9a\u4e86 ",(0,t.jsx)(n.code,{children:"-desktop"})," \u540e\u7f00\u8981\u4ece cask formula \u540d\u79f0\u4e2d\u5220\u9664\u3002\u56e0\u6b64\uff0c\u8bf7\u6539\u7528 ",(0,t.jsx)(n.code,{children:"brew install rancher"}),"\u3002"]}),"\n",(0,t.jsxs)(n.h4,{id:"\u95ee\u5c1d\u8bd5\u5728-wsl-\u4e0a\u4f7f\u7528-docker-\u65f6\u5982\u4f55\u4fee\u590d-permission-denied-\u9519\u8bef",children:["\u95ee\uff1a\u5c1d\u8bd5\u5728 WSL \u4e0a\u4f7f\u7528 Docker \u65f6\uff0c\u5982\u4f55\u4fee\u590d ",(0,t.jsx)(n.code,{children:"permission denied"})," \u9519\u8bef\uff1f"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7b54"}),"\uff1a\u4f60\u9700\u8981\u5199\u6743\u9650\u624d\u80fd\u8bbf\u95ee docker socket\u3002\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u65b9\u6cd5\u6709\u5f88\u591a\uff0c\u4ee5\u4e0b\u662f\u5e38\u89c1\u7684\u65b9\u6cd5\u4e4b\u4e00\u3002\u4f7f\u7528 Ubuntu WSL \u547d\u4ee4\u884c\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo groupadd docker\nsudo adduser $USER docker\nsudo chown root:docker /var/run/docker.sock\nsudo chmod g+w /var/run/docker.sock\nnewgrp docker\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"\u95ee\u5982\u4f55\u89e3\u51b3-linux-\u4e0a\u7684-kubectl-command-not-found-\u95ee\u9898",children:["\u95ee\uff1a\u5982\u4f55\u89e3\u51b3 Linux \u4e0a\u7684 ",(0,t.jsx)(n.code,{children:"kubectl: command not found"})," \u95ee\u9898\uff1f"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher Desktop \u4f1a\u5728 Linux \u7684 ",(0,t.jsx)(n.code,{children:"/home/<user>/.local/bin"})," \u4e0b\u521b\u5efa ",(0,t.jsx)(n.code,{children:"kubectl"}),"\u3001",(0,t.jsx)(n.code,{children:"docker"}),"\u3001",(0,t.jsx)(n.code,{children:"helm"})," \u548c ",(0,t.jsx)(n.code,{children:"nerdctl"})," \u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u7b26\u53f7\u94fe\u63a5\u3002\u8981\u76f4\u63a5\u4ece\u63a7\u5236\u53f0\u8c03\u7528\u8fd9\u4e9b\u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e2d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5e76\u6267\u884c\u6ce8\u9500\u548c\u767b\u5f55\u6765\u5c06\u76ee\u5f55\u6dfb\u52a0\u5230\u4f60\u7684 ",(0,t.jsx)(n.code,{children:"PATH"})," \u73af\u5883\u53d8\u91cf\u4e2d\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo "export PATH=\\$PATH:/home/$(whoami)/.local/bin" >> ~/.bashrc\n'})}),"\n",(0,t.jsxs)(n.h4,{id:"\u95ee\u4f7f\u7528-nerdctl-run-\u8fd0\u884c\u5bb9\u5668\u65f6\u5982\u4f55\u4fee\u590d-fata0005-subnet-1040024-overlaps-with-other-one-on-this-address-space-\u95ee\u9898",children:["\u95ee\uff1a\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"nerdctl run"})," \u8fd0\u884c\u5bb9\u5668\u65f6\uff0c\u5982\u4f55\u4fee\u590d ",(0,t.jsx)(n.code,{children:"FATA[0005] subnet 10.4.0.0/24 overlaps with other one on this address space"})," \u95ee\u9898\uff1f"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7b54"}),"\uff1a\u5982\u679c\u8def\u7531\u89c4\u5219\u7684 IP \u5730\u5740\u6765\u81ea Iptables \u4e0a\u7684\u51b2\u7a81\u5b50\u7f51\uff0c\u4f60\u5c06\u770b\u5230\u6b64\u9519\u8bef\u3002\u51b2\u7a81\u7684\u8def\u7531\u53ef\u80fd\u6765\u81ea\u4e3b\u673a\u7f51\u7edc\uff08\u6865\u63a5\u6a21\u5f0f\uff09\u6216 Kubernetes \u7f51\u7edc\u3002\u6b64\u95ee\u9898\u7684\u5feb\u901f\u89e3\u51b3\u65b9\u6cd5\u662f\u901a\u8fc7\u547d\u4ee4 ",(0,t.jsx)(n.code,{children:"wsl --shutdown"})," \u5173\u95ed WSL\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["\u8b66\u544a\uff1a\u5173\u95ed WSL \u5c06\u505c\u6b62\u6240\u6709\u5176\u4ed6\u53d1\u884c\u7248\u4ee5\u53ca ",(0,t.jsx)(n.code,{children:"rancher-desktop"})," \u53d1\u884c\u7248\u3002"]})}),"\n",(0,t.jsxs)(n.h4,{id:"\u95ee\u5728-windows-\u4e0a\u5c06\u73b0\u6709-msi-\u964d\u7ea7\u5230\u8f83\u65e7\u7684-exe-\u7248\u672c16x-\u6216\u66f4\u65e9\u7248\u672c\u65f6\u5982\u4f55\u4fee\u590d-installation-aborted-\u9519\u8bef",children:["\u95ee\uff1a\u5728 Windows \u4e0a\u5c06\u73b0\u6709 MSI \u964d\u7ea7\u5230\u8f83\u65e7\u7684 EXE \u7248\u672c\uff081.6.x \u6216\u66f4\u65e9\u7248\u672c\uff09\u65f6\uff0c\u5982\u4f55\u4fee\u590d ",(0,t.jsx)(n.code,{children:"Installation Aborted"})," \u9519\u8bef\uff1f"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7b54"}),"\uff1a\u5728 MSI \u5378\u8f7d\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u5e94\u8be5\u5220\u9664\u7684 Windows \u6ce8\u518c\u8868\u9879 ",(0,t.jsx)(n.code,{children:"HKEY_LOCAL_MACHINE\\\\System\\\\CurrentControlSet\\\\Services\\\\EventLog\\\\Application\\\\RancherDesktopPrivilegedService"})," \u6ca1\u6709\u88ab\u5220\u9664\uff0c\u4f60\u5c06\u770b\u5230\u6b64\u9519\u8bef\u3002\u8bf7\u624b\u52a8\u5220\u9664\u6ce8\u518c\u8868\u9879\u5e76\u5c1d\u8bd5\u5b89\u88c5 EXE \u7248\u672c\u3002\u4f60\u53ef\u4ee5\u5728\u7279\u6743 shell \u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5220\u9664\u6ce8\u518c\u8868\u9879\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"reg.exe delete HKLM\\System\\CurrentControlSet\\Services\\EventLog\\Application\\RancherDesktopPrivilegedService /reg:64 /f\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u95ee\u4e3a\u4ec0\u4e48\u542f\u52a8-cluster-dashboard-\u65f6\u4f1a\u51fa\u73b0\u7a7a\u767d\u5c4f\u5e55",children:"\u95ee\uff1a\u4e3a\u4ec0\u4e48\u542f\u52a8 Cluster Dashboard \u65f6\u4f1a\u51fa\u73b0\u7a7a\u767d\u5c4f\u5e55\uff1f"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7b54"}),"\uff1aCluster Dashboard \u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u8fd0\u884c\uff0c\u56e0\u4e3a\u4f60\u4e3b\u673a\u4e0a\u7684\u53e6\u4e00\u4e2a\u8fdb\u7a0b\u6b63\u5728\u4f7f\u7528 Dashboard \u8fdb\u7a0b\uff08",(0,t.jsx)(n.code,{children:"steve"}),"\uff09\u6240\u4f9d\u8d56\u7684 ",(0,t.jsx)(n.code,{children:"9080"})," \u6216 ",(0,t.jsx)(n.code,{children:"9443"})," \u7aef\u53e3\u3002\u8981\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u8bf7\u8bc6\u522b\u5e76\u7ec8\u6b62\u4f7f\u7528\u8fd9\u4e9b\u7aef\u53e3\u7684\u8fdb\u7a0b\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u8bc6\u522b\u4f7f\u7528\u4e3b\u673a\u4e0a\u7279\u5b9a\u7aef\u53e3\u7684\u8fdb\u7a0b\u3002\u8bf7\u6ce8\u610f\uff0c\u5728 macOS \u548c Linux \u4e0a\uff0cRancher Dashboard \u8fdb\u7a0b\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"steve"}),"\uff0c\u800c\u5728 Windows \u4e0a\uff0c\u5b83\u662f ",(0,t.jsx)(n.code,{children:"steve.exe"}),"\u3002\u5982\u679c ",(0,t.jsx)(n.code,{children:"steve"})," \u662f\u552f\u4e00\u4f7f\u7528\u7aef\u53e3 9080 \u6216 9443 \u7684\u8fdb\u7a0b\uff0c\u8bf7\u4e0d\u8981\u7ec8\u6b62\u5b83\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u627e\u4f7f\u7528\u7279\u5b9a\u7aef\u53e3\u7684\u8fdb\u7a0b\u7684\u547d\u4ee4\u3002"}),"\n",(0,t.jsxs)(o.Z,{groupId:"os",children:[(0,t.jsx)(a.Z,{value:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"netstat -ano | findstr :9443\n"})})}),(0,t.jsx)(a.Z,{value:"macOS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"lsof -nP -iTCP -sTCP:LISTEN | grep 9443\n"})})}),(0,t.jsx)(a.Z,{value:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"lsof -nP -iTCP -sTCP:LISTEN | grep 9443\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},93687:function(e,n,r){var t=r(10412);const s=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),a=s?"ios":"android",c=s?"macOS":o?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:c,defaultPackageManager:"npm",defaultPlatform:a,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,n,r){r.d(n,{Z:function(){return a}});r(67294);var t=r(34334),s={tabItem:"tabItem_Ymn6"},o=r(85893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,a),hidden:r,children:n})}},74866:function(e,n,r){r.d(n,{Z:function(){return w}});var t=r(67294),s=r(34334),o=r(12466),a=r(16550),c=r(20469),l=r(91980),i=r(67392),d=r(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function v(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,o=h(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[i,u]=b({queryString:r,groupId:s}),[v,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,d.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),f=(()=>{const e=i??v;return p({value:e,tabValues:o})?e:null})();(0,c.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=r(72389),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},k=r(85893);function m(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),s=c[r].value;s!==t&&(i(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,s.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=v(e);return(0,k.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,k.jsx)(m,{...e,...n}),(0,k.jsx)(j,{...e,...n})]})}function w(e){const n=(0,x.Z)();return(0,k.jsx)(g,{...e,children:u(e.children)},String(n))}},11151:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return a}});var t=r(67294);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);