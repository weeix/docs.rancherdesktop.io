"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[2361],{83247:function(e,n,s){s.r(n),s.d(n,{assets:function(){return a},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return t}});var c=s(85893),r=s(11151),d=s(93687);const l={title:"\u79bb\u7ebf\u8fd0\u884c"},i=void 0,o={id:"how-to-guides/running-air-gapped",title:"\u79bb\u7ebf\u8fd0\u884c",description:"Rancher Desktop \u53ef\u4ee5\u5728\u79bb\u7ebf\u6a21\u5f0f\u4e0b\u8fd0\u884c\u3002\u672c\u6587\u4ecb\u7ecd\u4e86\u79bb\u7ebf\u8fd0\u884c\u7684\u8981\u6c42\u4ee5\u53ca\u53ef\u80fd\u51fa\u73b0\u7684\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/running-air-gapped.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/running-air-gapped",permalink:"/zh/next/how-to-guides/running-air-gapped",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/running-air-gapped.md",tags:[],version:"current",frontMatter:{title:"\u79bb\u7ebf\u8fd0\u884c"},sidebar:"tutorialSidebar",previous:{title:"\u589e\u52a0\u6253\u5f00\u6587\u4ef6\u9650\u5236",permalink:"/zh/next/how-to-guides/increasing-open-file-limit"},next:{title:"ODO \u4e0e Rancher Desktop",permalink:"/zh/next/how-to-guides/odo-rancher-desktop"}},a={},t=[{value:"Windows \u7528\u6237\u987b\u77e5",id:"windows-\u7528\u6237\u987b\u77e5",level:3},{value:"\u7f51\u7edc\u654f\u611f\u533a\u57df",id:"\u7f51\u7edc\u654f\u611f\u533a\u57df",level:3},{value:"\u73b0\u6709 Deployment",id:"\u73b0\u6709-deployment",level:3},{value:"\u51c6\u5907\u79bb\u7ebf\u7cfb\u7edf",id:"\u51c6\u5907\u79bb\u7ebf\u7cfb\u7edf",level:3},{value:"Cache \u76ee\u5f55",id:"cache-\u76ee\u5f55",level:4},{value:"kuberlr \u76ee\u5f55",id:"kuberlr-\u76ee\u5f55",level:4},{value:"\u7248\u672c\u8bf4\u660e",id:"\u7248\u672c\u8bf4\u660e",level:5}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{TabItem:s,Tabs:l}=n;return s||x("TabItem",!0),l||x("Tabs",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"Rancher Desktop \u53ef\u4ee5\u5728\u79bb\u7ebf\u6a21\u5f0f\u4e0b\u8fd0\u884c\u3002\u672c\u6587\u4ecb\u7ecd\u4e86\u79bb\u7ebf\u8fd0\u884c\u7684\u8981\u6c42\u4ee5\u53ca\u53ef\u80fd\u51fa\u73b0\u7684\u95ee\u9898\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"windows-\u7528\u6237\u987b\u77e5",children:"Windows \u7528\u6237\u987b\u77e5"}),"\n",(0,c.jsxs)(n.p,{children:["\u672c\u6587\u6863\u7684\u73af\u5883\u53d8\u91cf\u4f7f\u7528 Powershell \u8bed\u6cd5\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Command shell\uff0c\u770b\u5230 ",(0,c.jsx)(n.code,{children:"$env:FOO"})," \u73af\u5883\u53d8\u91cf\u7684\u5f15\u7528\u65f6\uff0c\u8bf7\u5c06\u5176\u66ff\u6362\u4e3a ",(0,c.jsx)(n.code,{children:"%FOO%"}),"\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u7f51\u7edc\u654f\u611f\u533a\u57df",children:"\u7f51\u7edc\u654f\u611f\u533a\u57df"}),"\n",(0,c.jsx)(n.p,{children:"Rancher Desktop \u5047\u8bbe\u6709\u4e24\u4e2a\u7684\u533a\u57df\u7684\u7f51\u7edc\u53ef\u7528\uff0c\u5e76\u4f1a\u5728\u79bb\u7ebf\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u6062\u590d\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5c06 Kubernetes ",(0,c.jsx)(n.code,{children:"k3s"})," \u955c\u50cf\u62c9\u5165 ",(0,c.jsx)(n.code,{children:"k3s"})," \u7f13\u5b58\u76ee\u5f55"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"kuberlr"})," \u4f5c\u4e3a\u5bf9 ",(0,c.jsx)(n.code,{children:"kubectl"})," \u7684\u7248\u672c\u611f\u77e5\u5305\u88c5\u5668\uff0c\u56e0\u6b64\u5ba2\u6237\u7aef\u4e0e Kubernetes Server \u7684\u5dee\u5f02\u4e0d\u4f1a\u8d85\u8fc7\u4e00\u4e2a\u6b21\u8981\u7248\u672c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u73b0\u6709-deployment",children:"\u73b0\u6709 Deployment"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c Rancher Desktop \u5b89\u88c5\u5728\u6700\u521d\u5c31\u5177\u6709\u7f51\u7edc\u8bbf\u95ee\u6743\u9650\u7684\u4e3b\u673a\u4e0a\uff0c\u5728\u5173\u95ed\u7f51\u7edc\u8fde\u63a5\u540e\uff0cRancher Desktop \u4ecd\u80fd\u5728\u8be5\u4e3b\u673a\u4e0a\u8fd0\u884c\u3002\u4f46\u662f\uff0c\u4e0b\u62c9\u83dc\u5355\u4e2d\u53ef\u7528\u7684 Kubernetes \u7248\u672c\u4f1a\u9650\u5236\u4e3a\u5df2\u4e0b\u8f7d\u5e76\u5b58\u50a8\u5728\u7f13\u5b58\u4e2d\u7684\u7248\u672c\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,c.jsx)(n.code,{children:"kuberlr"})," \u5305\u88c5\u5668\uff08Windows \u7528\u6237\u9700\u8981\u4e3a\u6bcf\u4e2a\u53ef\u6267\u884c\u5b9e\u7528\u7a0b\u5e8f\u6587\u4ef6\u6dfb\u52a0 ",(0,c.jsx)(n.code,{children:".exe"})," \u540e\u7f00\uff09\uff0c\u56e0\u6b64\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"kubectl"})," \u5ba2\u6237\u7aef\u4f1a\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u867d\u7136\u6211\u4eec\u7684\u7cfb\u7edf\u5728\u521d\u59cb\u5316\u65f6\u5df2\u7ecf\u8fde\u63a5\u5230\u4e92\u8054\u7f51\uff0c\u4f46\u662f\u540e\u7eed\u4f7f\u7528\u65f6\u4f1a\u8ba9\u4e3b\u673a\u8131\u673a\u4f7f\u7528\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5047\u8bbe ",(0,c.jsx)(n.code,{children:"rancher-desktop"})," \u7f13\u5b58\u4e2d\u6709\u4e09\u4e2a\u7248\u672c\u7684 ",(0,c.jsx)(n.code,{children:"k3s"}),"\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"1.24.3"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"1.21.14"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"1.19.16"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5047\u8bbe\u5728\u8fd9\u4e2a\u7cfb\u7edf\u4e0a\u6211\u4eec\u53ea\u6709\u5728\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"1.24.3"})," \u548c ",(0,c.jsx)(n.code,{children:"1.21.14"})," \u65f6\u8fd0\u884c\u4e86 ",(0,c.jsx)(n.code,{children:"kubectl"}),"\u3002\u6362\u8a00\u4e4b\uff0c",(0,c.jsx)(n.code,{children:"~/.kuberlr/PLATFORM-ARCH/"})," \u76ee\u5f55\uff08Windows \u4e0a\u4e3a",(0,c.jsx)(n.code,{children:"$env:HOMEDRIVE%\\$env:HOMEPATH/.kuberlr/windows-amd64"}),"\uff09\u53ea\u5305\u542b\u4e24\u4e2a\u6587\u4ef6\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"kubectl1.24.3"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"kubectl1.21.14"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u6211\u4eec\u5c06\u7cfb\u7edf\u8131\u673a\uff0c\u5e76\u901a\u8fc7 UI \u5207\u6362\u5230 Kubernetes ",(0,c.jsx)(n.code,{children:"1.19.16"}),"\uff0c\u5219\u7cfb\u7edf\u4f1a\u5728\u8fd0\u884c ",(0,c.jsx)(n.code,{children:"kubectl"})," \u7684\u65f6\u5019\u5931\u8d25\u3002\n\u95ee\u9898\u5728\u4e8e ",(0,c.jsx)(n.code,{children:"kubectl"})," \u662f ",(0,c.jsx)(n.code,{children:"kuberlr"})," \u7684\u522b\u540d\uff0c\u5b83\u4f1a\u5c1d\u8bd5\u4e0b\u8f7d ",(0,c.jsx)(n.code,{children:"kubectl 1.19.16"})," \u5e76\u5c06\u5b83\u5b89\u88c5\u5230 ",(0,c.jsx)(n.code,{children:".kuberlr"})," \u76ee\u5f55\u4e2d\uff0c\u4f46\u5374\u65e0\u6cd5\u8fdb\u884c\u8bbf\u95ee\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u56e0\u6b64\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6700\u597d\u7684\u65b9\u6cd5\u662f\u9009\u62e9\u7f13\u5b58\u4e2d\u6bcf\u4e2a\u53ef\u7528\u7684 Kubernetes \u7248\u672c\uff0c\u5e76\u8fd0\u884c ",(0,c.jsx)(n.code,{children:"kubectl --context rancher-desktop cluster-info"})," \u6765\u786e\u4fdd\u5b89\u88c5\u4e86\u9002\u5f53\u7248\u672c\u7684 ",(0,c.jsx)(n.code,{children:"kubectl"})," \u5ba2\u6237\u7aef\uff0c\u4ee5\u4fbf\u5728\u65ad\u5f00\u8fde\u63a5\u65f6\u80fd\u8fde\u63a5\u7cfb\u7edf\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60_\u53ef\u4ee5_\u624b\u52a8\u5b89\u88c5\u7248\u672c\u5316\u7684 ",(0,c.jsx)(n.code,{children:"kubectl"}),"\uff0c\u5177\u4f53\u5185\u5bb9\u4f1a\u5728\u4e0b\u4e00\u8282\u4e2d\u4ecb\u7ecd\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u51c6\u5907\u79bb\u7ebf\u7cfb\u7edf",children:"\u51c6\u5907\u79bb\u7ebf\u7cfb\u7edf"}),"\n",(0,c.jsx)(n.p,{children:"\u6b64\u5904\u5047\u8bbe\u4f60\u6709\u67d0\u79cd\u79fb\u52a8\u5a92\u4f53\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u586b\u5145\u5230\u8054\u7f51\u7cfb\u7edf\u4e0a\uff0c\u7136\u540e\u79fb\u81f3\u79bb\u7ebf\u7cfb\u7edf\u4e2d\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u8981\u8ba9 Rancher Desktop \u79bb\u7ebf\u8fd0\u884c\uff0c\u4f60\u9700\u8981\u586b\u5145\u4e24\u4e2a\u76ee\u5f55\uff1a"}),"\n",(0,c.jsx)(n.h4,{id:"cache-\u76ee\u5f55",children:"Cache \u76ee\u5f55"}),"\n",(0,c.jsxs)(n.p,{children:["\u8981\u586b\u5145\u6e90\u78c1\u76d8\uff08\u6211\u4eec\u5728\u6b64\u5c06\u5176\u79f0\u4e3a ",(0,c.jsx)(n.code,{children:"%SOURCEDISK%"}),"\uff0c\u5b9e\u9645\u4e0a\u5b83\u4e5f\u53ef\u80fd\u662f\u67d0\u79cd\u53ef\u79fb\u52a8\u8bbe\u5907\uff0c\u4f8b\u5982 USB \u9a71\u52a8\u5668\uff09\uff0c\u4f60\u9700\u8981\u4ee5\u4e0b\u6587\u4ef6\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"k3s-versions.json"}),"\uff1a\u8be5\u6587\u4ef6\u7531 Rancher Desktop \u521b\u5efa\u3002\u5b83\u4ece ",(0,c.jsx)(n.code,{children:"https://update.k3s.io/v1-release/channels"})," \u8bfb\u53d6\u539f\u59cb JSON \u6587\u4ef6\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u4e0d\u540c\u7c7b\u578b\u7684 JSON \u6587\u4ef6\u3002\u76ee\u524d\u6ca1\u6709\u5b9e\u7528\u7a0b\u5e8f\u6765\u8fdb\u884c\u8fd9\u79cd\u8f6c\u6362\u3002\u83b7\u53d6\u6b64\u6587\u4ef6\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u662f\u5728\u8fde\u63a5\u7684\u7cfb\u7edf\u4e0a\u8fd0\u884c Rancher Desktop \u5e76\u4fdd\u5b58 ",(0,c.jsx)(n.code,{children:"CACHE/k3s-versions.json"})," \u6587\u4ef6\uff08\u8bf7\u53c2\u9605\u4e0b\u65b9\u4e0d\u540c\u7cfb\u7edf\u7684 ",(0,c.jsx)(n.code,{children:"CACHE"})," \u4f4d\u7f6e\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["Kubernetes K3s \u955c\u50cf\u7684 Tar \u5305\u3002\u5b83\u4eec\u5217\u5728 ",(0,c.jsx)(n.a,{href:"https://github.com/k3s-io%E2%80%8B%E2%80%8B/k3s/releases%E3%80%82%E5%A6%82%E6%9E%9C%E4%BD%A0%E4%BD%BF%E7%94%A8%E7%9A%84%E6%98%AF",children:"https://github.com/k3s-io\u200b\u200b/k3s/releases\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f"})," ",(0,c.jsx)(n.code,{children:"k3s"})," v1.26.1 \u53ca\u66f4\u9ad8\u7248\u672c\uff0c\u4f60\u9700\u8981\u4e3a AMD/Intel \u4e3b\u673a\u4e0b\u8f7d ",(0,c.jsx)(n.code,{children:"k3s-airgap-images-amd64.tar"}),"\uff0c\u4e3a M1 \u4e3b\u673a\u4e0b\u8f7d ",(0,c.jsx)(n.code,{children:"k3s-airgap-images-arm64.tar"}),"\uff0c\u6216\u4e0b\u8f7d\u76f8\u5e94\u7684 ",(0,c.jsx)(n.code,{children:"*.tar.zst"})," \u538b\u7f29\u5305\u3002\u6700\u540e\uff0c\u4f60\u9700\u8981\u4e0b\u8f7d\u6240\u9009\u7248\u672c\u7684 ",(0,c.jsx)(n.code,{children:"k3s"})," \u53ef\u6267\u884c\u6587\u4ef6\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u8ba9\u4f60\u79bb\u7ebf\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 K3s v1.24.3 build 1\uff1a"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"cd .../CACHE\nmkdir v1.24.3+k3s1\ncd v1.24.3+k3s1\nwget https://github.com/k3s-io/k3s/releases/download/v1.24.3%2Bk3s1/k3s-airgap-images-amd64.tar\nwget https://github.com/k3s-io/k3s/releases/download/v1.24.3%2Bk3s1/sha256sum-amd64.txt\nwget https://github.com/k3s-io/k3s/releases/download/v1.24.3%2Bk3s1/k3s\n"})}),"\n",(0,c.jsxs)(l,{groupId:"os",defaultValue:d.Z.defaultOs,children:[(0,c.jsxs)(s,{value:"Windows",children:[(0,c.jsxs)(n.p,{children:["\u5728 Windows \u4e0a\uff0c\u7f13\u5b58\u76ee\u5f55\u662f ",(0,c.jsx)(n.code,{children:"$env:HOMEDRIVE%\\$env:HOMEPATH\\AppData\\Local\\rancher-desktop\\cache\\k3s"}),"\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u8be5\u76ee\u5f55\uff1a"]}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"mkdir -Force $env:HOMEDRIVE%\\$env:HOMEPATH\\AppData\\Local\\rancher-desktop\\cache\\k3s\n"})}),(0,c.jsx)(n.p,{children:"\u5047\u8bbe\u4f60\u5df2\u6709\u67d0\u4e9b\u6e90\u5a92\u4f53\uff0c\u4f60\u8fd8\u9700\u8981\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u9884\u586b\u5145\u7f13\u5b58\uff1a"}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"copy-item -Force $env:SOURCEDISK\\k3s-versions.json $env:HOMEDRIVE%\\$env:HOMEPATH\\AppData\\Local\\rancher-desktop\\cache\\\ncopy-item -Recurse -Force $env:SOURCEDISK\\v<MAJOR>.<MINOR>.<PATCH>+k3s<BUILD> $env:HOMEDRIVE%\\$env:HOMEPATH\\AppData\\Local\\rancher-desktop\\cache\\k3s\\\n"})})]}),(0,c.jsxs)(s,{value:"macOS",children:[(0,c.jsxs)(n.p,{children:["\u5728 macOS \u4e0a\uff0c\u7f13\u5b58\u76ee\u5f55\u662f ",(0,c.jsx)(n.code,{children:"$HOME/Library/Caches/rancher-desktop"}),"\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u586b\u5145\uff1a"]}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"CACHEDIR=$HOME/Library/Caches/rancher-desktop\nmkdir -p $CACHEDIR/k3s\ncp $SOURCEDISK/k3s-versions.json $CACHEDIR/\ncp -r $SOURCEDISK/v<MAJOR>.<MINOR>.<PATCH>+k3s<BUILD> $CACHEDIR/k3s/\n"})})]}),(0,c.jsxs)(s,{value:"Linux",children:[(0,c.jsxs)(n.p,{children:["\u5728 Linux \u4e0a\uff0c\u7f13\u5b58\u76ee\u5f55\u662f ",(0,c.jsx)(n.code,{children:"$HOME/.cache/rancher-desktop"}),"\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u586b\u5145\uff1a"]}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"CACHEDIR=$HOME/.cache/rancher-desktop\nmkdir -p $CACHEDIR/k3s\ncp $SOURCEDISK/k3s-versions.json $CACHEDIR/\ncp -r $SOURCEDISK/v<MAJOR>.<MINOR>.<PATCH>+k3s<BUILD> $CACHEDIR/k3s/\n"})})]})]}),"\n",(0,c.jsx)(n.h4,{id:"kuberlr-\u76ee\u5f55",children:"kuberlr \u76ee\u5f55"}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u4e2a\u76ee\u5f55\u7684\u4f4d\u7f6e\u66f4\u76f4\u63a5\uff0c\u5728\u6240\u6709\u5e73\u53f0\u4e0a\uff0c\u8be5\u76ee\u5f55\u90fd\u4f4d\u4e8e ",(0,c.jsx)(n.code,{children:"HOME/.kuberlr/PLATFORM-ARCH"}),"\uff0c\u5176\u4e2d\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"HOME"})," \u662f\u4e3b\u76ee\u5f55\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5728 Windows \u4e0a\u4e3a ",(0,c.jsx)(n.code,{children:"$env:HOMEDRIVE%\\$env:HOMEPATH"}),"\uff0c\u5728 macOS \u548c Linux \u4e0a\u4e3a ",(0,c.jsx)(n.code,{children:"~"})," \u6216 ",(0,c.jsx)(n.code,{children:"$HOME"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"PLATFORM"})," \u662f ",(0,c.jsx)(n.code,{children:"windows"}),"\u3001",(0,c.jsx)(n.code,{children:"linux"})," \u6216 ",(0,c.jsx)(n.code,{children:"darwin"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"ARCH"})," \u5728 M1 \u4e3b\u673a\u4e0a\u662f ",(0,c.jsx)(n.code,{children:"aarch64"}),"\uff0c\u5728\u5176\u5b83\u4e3b\u673a\u4e0a\u662f ",(0,c.jsx)(n.code,{children:"amd64"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8981\u8fdb\u884c\u586b\u5145\uff0c\u8bf7\u786e\u5b9a\u4f60\u8981\u4f7f\u7528\u7684 Kubernetes \u7248\u672c\uff0c\u5e76\u8054\u7f51\u4e0b\u8f7d\u9002\u5f53\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3002\u5b83\u4eec\u5c06\u4f4d\u4e8e\uff1a"}),"\n",(0,c.jsxs)(l,{groupId:"os",defaultValue:d.Z.defaultOs,children:[(0,c.jsx)(s,{value:"Windows",children:(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"https://dl.k8s.io/VERSION/bin/PLATFORM/CPU/kubectl.exe"})})}),(0,c.jsx)(s,{value:"macOS",children:(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"https://dl.k8s.io/VERSION/bin/PLATFORM/CPU/kubectl"})})}),(0,c.jsx)(s,{value:"Linux",children:(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"https://dl.k8s.io/VERSION/bin/PLATFORM/CPU/kubectl"})})})]}),"\n",(0,c.jsx)(n.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"VERSION"})," \u7684\u683c\u5f0f\u662f ",(0,c.jsx)(n.code,{children:"vMAJOR.MINOR.PATCH"}),"\uff08\u5982 ",(0,c.jsx)(n.code,{children:"v1.22.1"}),"\uff09"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"PLATFORM"})," \u662f ",(0,c.jsx)(n.code,{children:"darwin"}),"\u3001",(0,c.jsx)(n.code,{children:"linux"})," \u6216 ",(0,c.jsx)(n.code,{children:"windows"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"CPU"})," \u5728 M1 \u4e3b\u673a\u4e0a\u662f ",(0,c.jsx)(n.code,{children:"arm64"}),"\uff0c\u5728\u5176\u4ed6\u4e3b\u673a\u4e0a\u662f ",(0,c.jsx)(n.code,{children:"amd64"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u8981\u83b7\u53d6\u4f7f\u7528 Kubernetes v1.22 \u4e14\u7528\u4e8e Windows \u7684 kubectl\uff0c\u6b64 Windows \u547d\u4ee4 shell\uff08\u4e0d\u662f PowerShell\uff09\u547d\u4ee4\u4f1a\u5c06\u5176\u653e\u5728 ",(0,c.jsx)(n.code,{children:"SOURCEDISK"})," \u4e0a\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"wget -O %SOURCEDISK/kubectl1.22.1.exe https://dl.k8s.io/v1.22.1/bin/windows/amd64/kubectl.exe\n"})}),"\n",(0,c.jsx)(n.h5,{id:"\u7248\u672c\u8bf4\u660e",children:"\u7248\u672c\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:["Kubectl \u5ba2\u6237\u7aef\u4fdd\u8bc1\u4f7f\u7528\u4e3b\u8981\u7248\u672c\u76f8\u540c\u7684 Server\uff0c\u4e14\u5b83\u4eec\u6700\u591a\u53ea\u76f8\u5dee\u4e00\u4e2a\u6b21\u8981\u7248\u672c\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528\u7684 Kubernetes \u7248\u672c\u662f v1.21.x\u3001v1.22.x \u548c v1.23.x\uff0c\u5bf9\u4e8e\u4efb\u4f55 ",(0,c.jsx)(n.code,{children:"x"})," \u8865\u4e01\u7248\u672c\uff0c\u4f60\u53ea\u9700\u5728 ",(0,c.jsx)(n.code,{children:".kuberlr"})," \u76ee\u5f55\u4e2d\u5b89\u88c5 ",(0,c.jsx)(n.code,{children:"kubectl1.22.x"})," \u5373\u53ef\u3002\u4f46\u662f\uff0c\u5982\u679c\u4f60\u590d\u5236\u4e00\u4e2a Kubernetes ",(0,c.jsx)(n.code,{children:"v1.24.x"})," \u5230 ",(0,c.jsx)(n.code,{children:"CACHE"})," \u76ee\u5f55\uff0c\u4f60\u9700\u8981\u786e\u4fdd ",(0,c.jsx)(n.code,{children:".kuberlr"})," \u76ee\u5f55\u4e2d\u4e5f\u6709\u4e00\u4e2a\u517c\u5bb9\u7684 ",(0,c.jsx)(n.code,{children:"kubectl"}),"\uff08",(0,c.jsx)(n.code,{children:"v1.23.x"}),"\u3001",(0,c.jsx)(n.code,{children:"v1.24.x"})," \u6216 ",(0,c.jsx)(n.code,{children:"v1.25.x"})," \u4e2d\u7684\u5176\u4e2d\u4e00\u4e2a\u5373\u53ef\uff09\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,s){var c=s(10412);const r=!!c.Z.canUseDOM&&navigator.platform.startsWith("Mac"),d=!!c.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",i=r?"macOS":d?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var c=s(67294);const r={},d=c.createContext(r);function l(e){const n=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);