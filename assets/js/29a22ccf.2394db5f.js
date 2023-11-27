"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4140],{35818:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return l},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return d}});var o=n(85893),s=n(11151);const i={title:"VS Code Remote Containers"},r=void 0,a={id:"how-to-guides/vs-code-remote-containers",title:"VS Code Remote Containers",description:"The [Visual Studio Code Remote - Containers] extension lets you use a Docker container as a full-featured development environment, which helps ensure a consistent environment across developer machines and makes it easy for new team members and contributors to get up and running. Since Rancher Desktop supports Docker CLI via [Moby], you can use the Visual Studio Code Remote - Containers extension out-of-the-box.",source:"@site/versioned_docs/version-1.8/how-to-guides/vs-code-remote-containers.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/vs-code-remote-containers",permalink:"/1.8/how-to-guides/vs-code-remote-containers",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.8/how-to-guides/vs-code-remote-containers.md",tags:[],version:"1.8",frontMatter:{title:"VS Code Remote Containers"},sidebar:"tutorialSidebar",previous:{title:"Debugging a Container App with VS Code Docker extension",permalink:"/1.8/how-to-guides/vs-code-docker"},next:{title:"Rancher on Rancher Desktop",permalink:"/1.8/how-to-guides/rancher-on-rancher-desktop"}},c={},d=[{value:"Steps to try a sample dev container",id:"steps-to-try-a-sample-dev-container",level:3},{value:"Next steps",id:"next-steps",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/vs-code-remote-containers"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers",children:"Visual Studio Code Remote - Containers"})," extension lets you use a Docker container as a full-featured development environment, which helps ensure a consistent environment across developer machines and makes it easy for new team members and contributors to get up and running. Since Rancher Desktop supports Docker CLI via ",(0,o.jsx)(t.a,{href:"https://mobyproject.org/",children:"Moby"}),", you can use the Visual Studio Code Remote - Containers extension out-of-the-box."]}),"\n",(0,o.jsx)(t.h3,{id:"steps-to-try-a-sample-dev-container",children:"Steps to try a sample dev container"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Install and launch Rancher Desktop. Select ",(0,o.jsx)(t.code,{children:"dockerd (moby)"})," as the Container Runtime from the ",(0,o.jsx)(t.code,{children:"Kubernetes Settings"})," menu."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(48536).Z+"",width:"1155",height:"743"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"Install and launch Visual Studio Code or Visual Studio Code Insiders. This tutorial uses Visual Studio Code."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(33474).Z+"",width:"1158",height:"741"})}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsx)(t.li,{children:"Install the Remote Development extension pack."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(38079).Z+"",width:"1155",height:"742"})}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsxs)(t.li,{children:["After the extension is installed, you will see the extension item in the side bar, and a green button at the lower left corner to show the command palette with various options/commands related to ",(0,o.jsx)(t.code,{children:"Remote Development"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(88283).Z+"",width:"1154",height:"742"})}),"\n",(0,o.jsxs)(t.ol,{start:"5",children:["\n",(0,o.jsxs)(t.li,{children:["Microsoft provides a number of sample dev containers at this GitHub repository: ",(0,o.jsx)(t.a,{href:"https://github.com/microsoft/vscode-dev-containers.git",children:"https://github.com/microsoft/vscode-dev-containers.git"}),". Clone this repository to your local machine."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"git clone https://github.com/microsoft/vscode-dev-containers.git\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"6",children:["\n",(0,o.jsxs)(t.li,{children:["Press ",(0,o.jsx)(t.code,{children:"F1"}),' to bring up a search bar on the command pallette to query for available commands. Begin to type in "Dev Containers: Open Folder in Container..." and click on the command ',(0,o.jsx)(t.code,{children:"Dev Containers: Open Folder in Container..."}),". Browse to one of the samples in the cloned respository, e.g., ",(0,o.jsx)(t.code,{children:"javascript-node"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(34566).Z+"",width:"2040",height:"1530"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(16895).Z+"",width:"1157",height:"740"})}),"\n",(0,o.jsxs)(t.ol,{start:"7",children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["On selecting a sample, you will see the progress notification  ",(0,o.jsx)(t.img,{src:n(48013).Z+"",width:"280",height:"34"})," while the container is being loaded, and once the container is successfully started, the bottom left corner shows the container name. ",(0,o.jsx)(t.img,{src:n(45714).Z+"",width:"198",height:"23"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Once the container is started, Press ",(0,o.jsx)(t.code,{children:"F5"})," in the VS Code IDE to start the sample application. You will see that the application is started and served on ",(0,o.jsx)(t.code,{children:"localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(65190).Z+"",width:"895",height:"519"})}),"\n",(0,o.jsx)(t.p,{children:"Congratulations! You have successfully loaded and run a sample dev container using Rancher Desktop and VS Code."}),"\n",(0,o.jsx)(t.h3,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsxs)(t.p,{children:["Microsoft has provided extensive documentation about using dev containers in various scenarios ",(0,o.jsx)(t.a,{href:"https://code.visualstudio.com/docs/remote/remote-overview",children:"here"}),". Please refer to the following tutorials to try a use case that's relevant to your needs."]}),"\n",(0,o.jsx)(t.p,{children:"Happy Containerizing with Rancher Desktop!"})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},48536:function(e,t,n){t.Z=n.p+"assets/images/rd-main-682924ff059ac64a1aa2636e09ce2ef3.png"},33474:function(e,t,n){t.Z=n.p+"assets/images/vscode-main-f178361041b0f3168d8041a308fa00b1.png"},65190:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-appinbrowser-e9d44a0336fe517fe6ff131ad5a2a23a.png"},34566:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-commandpalette-b10da256e680258d31715b286f25f914.png"},48013:function(e,t){t.Z="data:image/png;base64,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"},45714:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAAAXCAYAAABQ+TDXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAScSURBVHhe7ZixaxRBFMb9eyxE7RQLQSsLSSEWKnb+AZZqEY2CiqYy2AlilKRKJyEaIgYVEsRLUBNDiNccSXGopEgOEuJ47yZf5s3bN7t7t3tnAjPww9uZ2Xkz73vf7sZDRwaumEgkYjl8q9IiGiMSYfTEGOdffzbLq1PmqjIWiexHum4MMkVte8v8qDxQxyOR/UhXjRFNETmodM0YnZhirG6UtmHeT1xU55fNYHVzNyZa72JrHL87bX42d7FTn1LHe8GZN4tmPbCHYwOjZqZhmhpfSIy1g41RMy8GLqvjaVjNytepsDGujT01p0Vfp28KMsbv6rDXd25ujSo00V8mEPhv46vpZ+JQ7KKic2yh/1+ztQuMQU3mYj8Yo1sUMsaJZ+NmrrFl1paGPXPcX9k0O+sz5ubQJW9+FpoxCJu47hUUxe3FU/ngGqNmPrWezH7xRmOkcGp00iwIcxwdGGwW27Zp/GrPHCFjaGMQBQ1Pe81EmFvUdPJTi6+Hz56lyktvXygavPlcc4VAZ3PN7UXuOysGkLEw7tab2r1/w0xPvGr9Dj0YXNGOJOaFjOGfJzlu10TbMB8q3xPG8Ofo2hH2rO5e5Ait0wdeYWMQZZkjzRhUlDikVuh0L41rY07c5BOJEis/oTRofT4PAsii5YVtjSRF801IfctMPLoHcULGSIshC4UbH+vx+wnkDtccnju+Fo1JY+Car4UCxxx57fak75mucW5pMIKfV+aLrj9W3yXuyUMpxiBSzbH+xdzJYY4sY6BgtGLmAvK5uDckfNoYkEIBvg+Ix/cvjSCvNfg5pNBZMTBfFhDyivGs83L4fuia51bGk6YEPMeaCWUMrQ5COmnG0AzULqUZg4A5qvNP9vr2zPFnxtwQCZNkGQOJod96swXCCzkrWVxobZwICc4FRdHyOLIvZAy7Dm++0NIYoRj4rTXKnVwvD7JoEYMbDfsJ5RIPkNu7n2MyPo+BNbUWWptrg9rI0jSLUo3R93be1Lc3zOz0Pa+fzNE//sjr0wgZQwqaVcxcMCmsJFT0HAgr45VhDCuk69OKBOfOiqGNc+R6edDy53JmCx3x6Cyhpzo3htxf2pmzCOlHtUStnbNySjPGnik+PVTH8xAyhjx8KBkciET/piUnjxBWuOSTHoKTYbKK1l27dbiBcU8RY2Sdpd2iIzRjEKTVTv2bt/+QLtww9j7fPPI+bU6ItFoI7T0PpRijb3LR1HeKmYLQjCGfqAQE5smjAuF/xKII1xvJgpbYBOqCQXTaG39ryCLNKtrQHF4EOBeEbtcYdG0LxT/z4+pq6zpkjLRCDBUXckYNsTVd7Dy3H7k/7J8XN9bm55RaIAY3Bq3Fa4CPoS8vhY0BU8zPFjMFQQeWLSSYSyha0gCymNNwRemavFfuL61AQ33W6NScmO4c/n9ddmIMP4Zt0nhlGINAHB47mcekLrZg0WpmZGIhEcOf42sRMkYytr7vPBQyxsnn02al+flUhikikU4gY+R9+LVD4TfG2aHran8k0m1Cb8AyKGyMSKTX8M/P0CdgUaIxIhGFaIxIRCEaIxJRiMaIRBSsMSrmH0xonOubZb/0AAAAAElFTkSuQmCC"},88283:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-installed-a9e4e95d1fdb6d6bdf1c384376e6a712.png"},38079:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-marketplace-3c4d59014a6ebada6ca73a2282fd7803.png"},16895:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-openfolder-a0bc5ec3a9afc6ddebd9085f710a7ae9.png"},11151:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var o=n(67294);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);