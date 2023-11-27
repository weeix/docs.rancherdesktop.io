"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9312],{99593:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return d}});var o=t(85893),i=t(11151);const s={title:"Debugging a Container App with VS Code Docker extension"},r=void 0,a={id:"how-to-guides/vs-code-docker",title:"Debugging a Container App with VS Code Docker extension",description:"The VS Code Docker extension makes it easy to build, manage, debug and deploy containerized applications in Visual Studio Code.",source:"@site/versioned_docs/version-1.7/how-to-guides/vs-code-docker.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/vs-code-docker",permalink:"/1.7/how-to-guides/vs-code-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/how-to-guides/vs-code-docker.md",tags:[],version:"1.7",frontMatter:{title:"Debugging a Container App with VS Code Docker extension"},sidebar:"tutorialSidebar",previous:{title:"Setup NGINX Ingress Controller",permalink:"/1.7/how-to-guides/setup-NGINX-Ingress-Controller"},next:{title:"VS Code Remote Containers",permalink:"/1.7/how-to-guides/vs-code-remote-containers"}},c={},d=[{value:"Steps to debug a sample application running within a container",id:"steps-to-debug-a-sample-application-running-within-a-container",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/vs-code-docker"})}),"\n",(0,o.jsx)(n.p,{children:"The VS Code Docker extension makes it easy to build, manage, debug and deploy containerized applications in Visual Studio Code."}),"\n",(0,o.jsx)(n.h3,{id:"steps-to-debug-a-sample-application-running-within-a-container",children:"Steps to debug a sample application running within a container"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Install and launch Rancher Desktop. Select ",(0,o.jsx)(n.code,{children:"dockerd (moby)"})," as the Container Runtime from the ",(0,o.jsx)(n.code,{children:"Kubernetes Settings"})," menu."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(16388).Z+"",width:"1155",height:"743"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Install and launch Visual Studio Code or Visual Studio Code Insiders. This tutorial uses Visual Studio Code."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(33106).Z+"",width:"1158",height:"741"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Install the VS Code Docker extension from the marketplace."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(73603).Z+"",width:"1261",height:"813"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["You can use the samples provided at this Github repository, ",(0,o.jsx)(n.a,{href:"https://github.com/bwateratmsft/samples",children:"https://github.com/bwateratmsft/samples"}),". Clone this repository and open ",(0,o.jsx)(n.code,{children:"expressapp"})," folder in your VS Code session."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['Open the command palette (Ctrl+Shift+P, F1, or Cmd+Shift+P) and run "Add Docker Files to Workspace". Since this is an Express app, Select ',(0,o.jsx)(n.code,{children:"Node.js"})," as the Application Platform and ",(0,o.jsx)(n.code,{children:"3000"})," (or any other available port) as the ",(0,o.jsx)(n.code,{children:"port"}),". As it's a simple example, select ",(0,o.jsx)(n.code,{children:"No"})," for the ",(0,o.jsx)(n.code,{children:"Include optional Docker Compose files"})," prompt. This step adds a ",(0,o.jsx)(n.code,{children:"Dockerfile"})," and ",(0,o.jsx)(n.code,{children:"Launch Configuration"})," required to debug the application."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(36566).Z+"",width:"1053",height:"702"})}),"\n",(0,o.jsxs)(n.ol,{start:"7",children:["\n",(0,o.jsx)(n.li,{children:"Insert a breakpoint in the code."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(23963).Z+"",width:"1059",height:"704"})}),"\n",(0,o.jsxs)(n.ol,{start:"8",children:["\n",(0,o.jsxs)(n.li,{children:['In the Debug window at the top, switch the active debug configuration to "Docker Node.js Launch". Press ',(0,o.jsx)(n.code,{children:"F5"})," to start the application container in ",(0,o.jsx)(n.code,{children:"Debug"})," mode. You will see the sample application's landing page opening in your browser, and the code execution stopping at the breakpoint. From here, you can debug the application as if it's running on your host."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(78956).Z+"",width:"1054",height:"704"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(20743).Z+"",width:"1054",height:"701"})}),"\n",(0,o.jsxs)(n.ol,{start:"9",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Sometimes, the application might not break at the set breakpoint on the first run as the debugging process may not have started. In this case, refresh the browser to trigger the execution again to hit the breakpoint. You can also get around this behavior by setting the property ",(0,o.jsx)(n.code,{children:"inspectMode: 'break'"})," in ",(0,o.jsx)(n.code,{children:"task.json"})," file to prevent the app from running until the debugger attaches."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"On some machines, the firewall settings might prevent the debugging process from establishing a connection between the host and the container processes. In this case, you can add a firewall rule to allow communication between the VM where the container is running and the host where you have the VS Code session running. On Windows, you can add a firewall rule by running the below command from a privileged powershell:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"New-NetFirewallRule -Action Allow -Description 'Allow communication from WSL containers' -Direction Inbound -Enabled True -InterfaceAlias 'vEthernet (WSL)' -Name 'WSL Inbound' -DisplayName 'WSL Inbound'\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},16388:function(e,n,t){n.Z=t.p+"assets/images/rd-main-682924ff059ac64a1aa2636e09ce2ef3.png"},36566:function(e,n,t){n.Z=t.p+"assets/images/vscode-docker-add-docker-files-1-e19810f9204feb5e440424de9e3101cc.png"},20743:function(e,n,t){n.Z=t.p+"assets/images/vscode-docker-debug-breakpoint-hit-42fb73fe3c0f223c2d0f06bdb7d555f6.png"},23963:function(e,n,t){n.Z=t.p+"assets/images/vscode-docker-debug-breakpoint-f30564461f6e03aa061fb9904d4c3c91.png"},78956:function(e,n,t){n.Z=t.p+"assets/images/vscode-docker-debug-configuration-c646939163651c68beb853de2f45a4ed.png"},73603:function(e,n,t){n.Z=t.p+"assets/images/vscode-docker-marketplace-0aca928329baea1157f0fa92111e99d0.png"},33106:function(e,n,t){n.Z=t.p+"assets/images/vscode-main-f178361041b0f3168d8041a308fa00b1.png"},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var o=t(67294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);