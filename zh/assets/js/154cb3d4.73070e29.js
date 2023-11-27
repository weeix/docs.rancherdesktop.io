"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[3597],{99969:function(e,n,s){s.r(n),s.d(n,{assets:function(){return t},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=s(85893),o=s(11151);const i={title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf"},l=void 0,c={id:"how-to-guides/transfer-container-images",title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf",description:"Rancher Desktop \u63d0\u4f9b dockerd \u548c containerd \u5bb9\u5668\u5f15\u64ce\u9009\u9879\u6765\u7ba1\u7406\u5bb9\u5668\u3002\u6709\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5c06\u955c\u50cf\u4ece\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u4f20\u8f93\u5230\u53e6\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u3002\u4f60\u4e5f\u53ef\u80fd\u5df2\u7ecf\u4ece\u4e0d\u540c\u7684\u5bb9\u5668\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u8fc1\u79fb\u5230 Rancher Desktop\uff0c\u5e76\u4e14\u5e0c\u671b\u5c06\u672c\u5730\u955c\u50cf\u4ece\u4ee5\u524d\u7684\u5e94\u7528\u7a0b\u5e8f\u73af\u5883\u5e26\u5230 Rancher Desktop \u73af\u5883\u4e2d\u3002\u672c\u6307\u5357\u4ecb\u7ecd\u4e86\u4f7f\u7528 save \u548c load \u547d\u4ee4\u4f20\u8f93\u955c\u50cf\u7684\u6b65\u9aa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/how-to-guides/transfer-container-images.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/transfer-container-images",permalink:"/zh/how-to-guides/transfer-container-images",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/transfer-container-images.md",tags:[],version:"latest",frontMatter:{title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf"},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u548c\u5378\u8f7d Rancher Desktop \u6269\u5c55",permalink:"/zh/how-to-guides/installing-uninstalling-extensions"},next:{title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4",permalink:"/zh/how-to-guides/create-multi-node-cluster"}},t={},d=[{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3}];function a(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{TabItem:s,Tabs:i}=n;return s||j("TabItem",!0),i||j("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Rancher Desktop \u63d0\u4f9b ",(0,r.jsx)(n.code,{children:"dockerd"})," \u548c ",(0,r.jsx)(n.code,{children:"containerd"})," \u5bb9\u5668\u5f15\u64ce\u9009\u9879\u6765\u7ba1\u7406\u5bb9\u5668\u3002\u6709\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5c06\u955c\u50cf\u4ece\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u4f20\u8f93\u5230\u53e6\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u3002\u4f60\u4e5f\u53ef\u80fd\u5df2\u7ecf\u4ece\u4e0d\u540c\u7684\u5bb9\u5668\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u8fc1\u79fb\u5230 Rancher Desktop\uff0c\u5e76\u4e14\u5e0c\u671b\u5c06\u672c\u5730\u955c\u50cf\u4ece\u4ee5\u524d\u7684\u5e94\u7528\u7a0b\u5e8f\u73af\u5883\u5e26\u5230 Rancher Desktop \u73af\u5883\u4e2d\u3002\u672c\u6307\u5357\u4ecb\u7ecd\u4e86\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"save"})," \u548c ",(0,r.jsx)(n.code,{children:"load"})," \u547d\u4ee4\u4f20\u8f93\u955c\u50cf\u7684\u6b65\u9aa4\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6b65\u9aa4",children:"\u6b65\u9aa4"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"1. \u5c06\u6e90\u73af\u5883\u7684\u955c\u50cf\u4fdd\u5b58\u4e3a tar \u5305"}),"\u3002"]}),"\n",(0,r.jsxs)(i,{groupId:"container-runtime",children:[(0,r.jsxs)(s,{value:"nerdctl",default:!0,children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4fdd\u5b58\u5355\u4e2a\u955c\u50cf"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"nerdctl save -o local-image.tar image:tag\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4fdd\u5b58\u591a\u4e2a\u955c\u50cf"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"nerdctl save -o local-images.tar image1:tag1 image2:tag2\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5c06\u6240\u6709\u955c\u50cf\u4fdd\u5b58\u5728\u547d\u540d\u7a7a\u95f4\u4e2d"}),"\n"]}),(0,r.jsxs)(n.p,{children:["\u4e0b\u9762\u4e24\u4e2a\u547d\u4ee4\u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"https://stedolan.github.io/jq/",children:"jq"})," \u8fdb\u884c JSON \u89e3\u6790\u3002\u957f\u547d\u4ee4\u4f1a\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nerdctl -n k8s.io image ls"})," \u5b50\u547d\u4ee4\u4f1a\u83b7\u53d6 ",(0,r.jsx)(n.code,{children:"k8s.io"})," \u547d\u540d\u7a7a\u95f4\u4e2d\u6240\u6709\u955c\u50cf\u7684\u5217\u8868\uff0c\u56e0\u6b64\u4e0d\u5305\u62ec\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u7684\u955c\u50cf\uff08\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"default"}),"\uff09\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"jq"})," \u5b50\u547d\u4ee4\u4f1a\u8fc7\u6ee4\u5e76\u683c\u5f0f\u5316\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684\u955c\u50cf\u5217\u8868\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u547d\u4ee4\u7684 ",(0,r.jsx)(n.code,{children:'select(.Repository!=\\"<none>\\")'})," \u90e8\u5206\u4f1a\u8df3\u8fc7\u4ed3\u5e93\u503c\u4e3a ",(0,r.jsx)(n.code,{children:"<none>"})," \u7684\u955c\u50cf\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6839\u636e\u955c\u50cf\u6807\u7b7e\u7684\u503c\u662f\u5426\u4e3a ",(0,r.jsx)(n.code,{children:"<none>"}),"\uff0c\u547d\u4ee4\u7684 ",(0,r.jsx)(n.code,{children:'if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')'})," \u90e8\u5206\u4f1a\u5c06\u955c\u50cf\u7684\u540d\u79f0\u683c\u5f0f\u5316\u4e3a ",(0,r.jsx)(n.code,{children:"<Repository>"})," \u6216 ",(0,r.jsx)(n.code,{children:"<Repository>:<Tag>"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6700\u540e\uff0c\u547d\u4ee4\u7684 ",(0,r.jsx)(n.code,{children:"nerdctl -n k8s.io save -o all-local-images-in-namespace.tar"})," \u90e8\u5206\u4f1a\u5c06\u524d\u4e24\u6b65\u8fc7\u6ee4\u548c\u683c\u5f0f\u5316\u7684\u955c\u50cf\u5217\u8868\u4fdd\u5b58\u5230 tar \u6587\u4ef6\u4e2d\u3002"]}),"\n"]}),(0,r.jsxs)(i,{groupId:"shell",children:[(0,r.jsx)(s,{value:"Bash",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format \'{{json .}}\' | jq -r \'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')\n'})})}),(0,r.jsx)(s,{value:"PowerShell",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format \'{{json .}}\' | jq -r \'select(.Repository!=\\"<none>\\") | if (.Tag==\\"<none>\\") then .Repository else (.Repository+\\":\\"+.Tag) end\')\n'})})})]})]}),(0,r.jsxs)(s,{value:"docker",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4fdd\u5b58\u5355\u4e2a\u955c\u50cf"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker save -o local-image.tar image:tag\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4fdd\u5b58\u591a\u4e2a\u955c\u50cf"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker save -o local-images.tar image1:tag1 image2:tag2\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4fdd\u5b58\u6240\u6709\u672c\u5730\u955c\u50cf"}),"\n"]}),(0,r.jsxs)(n.p,{children:["\u4e0b\u9762\u4e24\u4e2a\u547d\u4ee4\u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"https://stedolan.github.io/jq/",children:"jq"})," \u8fdb\u884c JSON \u89e3\u6790\u3002\u957f\u547d\u4ee4\u4f1a\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"docker image ls"})," \u5b50\u547d\u4ee4\u4f1a\u83b7\u53d6\u6240\u6709\u672c\u5730\u955c\u50cf\u7684\u5217\u8868\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"jq"})," \u5b50\u547d\u4ee4\u4f1a\u8fc7\u6ee4\u5e76\u683c\u5f0f\u5316\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684\u955c\u50cf\u5217\u8868\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u547d\u4ee4\u7684 ",(0,r.jsx)(n.code,{children:'select(.Repository!=\\"<none>\\")'})," \u90e8\u5206\u4f1a\u8df3\u8fc7\u4ed3\u5e93\u503c\u4e3a ",(0,r.jsx)(n.code,{children:"<none>"})," \u7684\u955c\u50cf\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6839\u636e\u955c\u50cf\u6807\u7b7e\u7684\u503c\u662f\u5426\u4e3a ",(0,r.jsx)(n.code,{children:"<none>"}),"\uff0c\u547d\u4ee4\u7684 ",(0,r.jsx)(n.code,{children:'if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')'})," \u90e8\u5206\u4f1a\u5c06\u955c\u50cf\u7684\u540d\u79f0\u683c\u5f0f\u5316\u4e3a ",(0,r.jsx)(n.code,{children:"<Repository>"})," \u6216 ",(0,r.jsx)(n.code,{children:"<Repository>:<Tag>"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6700\u540e\uff0c\u547d\u4ee4\u7684 ",(0,r.jsx)(n.code,{children:"docker save -o all-local-images-in-namespace.tar"})," \u90e8\u5206\u4f1a\u5c06\u524d\u4e24\u6b65\u8fc7\u6ee4\u548c\u683c\u5f0f\u5316\u7684\u955c\u50cf\u5217\u8868\u4fdd\u5b58\u5230 tar \u6587\u4ef6\u4e2d\u3002"]}),"\n"]}),(0,r.jsxs)(i,{groupId:"shell",children:[(0,r.jsx)(s,{value:"Bash",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'docker save -o all-local-images-in-namespace.tar $(docker image ls --format \'{{json .}}\' | jq -r \'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')\n'})})}),(0,r.jsx)(s,{value:"PowerShell",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'docker save -o all-local-images-in-namespace.tar $(docker image ls --format \'{{json .}}\' | jq -r \'select(.Repository!=\\"<none>\\") | if (.Tag==\\"<none>\\") then .Repository else (.Repository+\\":\\"+.Tag) end\')\n'})})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"2. \u4f7f\u7528\u76ee\u6807\u73af\u5883\u4e2d\u4fdd\u5b58\u7684 tar \u5305\u52a0\u8f7d\u955c\u50cf"}),"\u3002"]}),"\n",(0,r.jsxs)(i,{groupId:"container-runtime",children:[(0,r.jsx)(s,{value:"nerdctl",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"nerdctl load < local-images.tar\n"})})}),(0,r.jsx)(s,{value:"docker",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker load < local-images.tar\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var r=s(67294);const o={},i=r.createContext(o);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);