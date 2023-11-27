"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6194],{44349:function(e,i,n){n.r(i),n.d(i,{assets:function(){return c},contentTitle:function(){return r},default:function(){return g},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return d}});var a=n(85893),s=n(11151),t=n(93687);const l={sidebar_label:"Images",title:"Images"},r=void 0,o={id:"ui/images",title:"Images",description:"The Images tab, allows you to manage the images on your virtual machine.",source:"@site/versioned_docs/version-1.10/ui/images.md",sourceDirName:"ui",slug:"/ui/images",permalink:"/1.10/ui/images",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.10/ui/images.md",tags:[],version:"1.10",frontMatter:{sidebar_label:"Images",title:"Images"},sidebar:"tutorialSidebar",previous:{title:"Port Forwarding",permalink:"/1.10/ui/port-forwarding"},next:{title:"Troubleshooting",permalink:"/1.10/ui/troubleshooting"}},c={},d=[{value:"Scanning Images",id:"scanning-images",level:3},{value:"Adding Images",id:"adding-images",level:3},{value:"Pulling Images",id:"pulling-images",level:4},{value:"Building Images",id:"building-images",level:4}];function u(e){const i={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components},{Head:n,TabItem:l,Tabs:r}=i;return n||h("Head",!0),l||h("TabItem",!0),r||h("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/images"})}),"\n","\n","\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.strong,{children:"Images"})," tab, allows you to manage the images on your virtual machine."]}),"\n",(0,a.jsxs)(i.p,{children:["To manage your images using nerdctl instead, refer to the ",(0,a.jsx)(i.a,{href:"/1.10/tutorials/working-with-images",children:"Images"})," section."]}),"\n",(0,a.jsxs)(r,{groupId:"os",defaultValue:t.Z.defaultOs,children:[(0,a.jsx)(l,{value:"Windows",children:(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/Windows_Images.png",alt:""})})}),(0,a.jsx)(l,{value:"macOS",children:(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/macOS_Images.png",alt:""})})}),(0,a.jsx)(l,{value:"Linux",children:(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/Linux_Images.png",alt:""})})})]}),"\n",(0,a.jsx)(i.h3,{id:"scanning-images",children:"Scanning Images"}),"\n",(0,a.jsxs)(i.p,{children:["This feature uses ",(0,a.jsx)(i.a,{href:"https://github.com/aquasecurity/trivy",children:"Trivy"})," to scan your images for vulnerabilities and configuration issues."]}),"\n",(0,a.jsx)(i.p,{children:"To scan an image:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:"From the image list, find the image you want to scan."}),"\n",(0,a.jsxs)(i.li,{children:["Click ",(0,a.jsx)(i.strong,{children:"\u22ee > Scan"}),"."]}),"\n",(0,a.jsx)(i.li,{children:"A summary of the vulnerabilities, sorted by the level of severity, are displayed."}),"\n",(0,a.jsxs)(i.li,{children:["Click ",(0,a.jsx)(i.strong,{children:">"})," to view the details of each vulnerability, including reference links to learn more about the particular vulnerability."]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"adding-images",children:"Adding Images"}),"\n",(0,a.jsx)(i.h4,{id:"pulling-images",children:"Pulling Images"}),"\n",(0,a.jsx)(i.p,{children:"Use this option to pull images from a registry to your virtual machine."}),"\n",(0,a.jsx)(i.p,{children:"To pull an image:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["Click the ",(0,a.jsx)(i.strong,{children:"+"})," button in the top-right corner."]}),"\n",(0,a.jsxs)(i.li,{children:["Click on the ",(0,a.jsx)(i.strong,{children:"Pull"})," tab."]}),"\n",(0,a.jsxs)(i.li,{children:["Enter the name of the image to pull.","\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsxs)(i.p,{children:["Note: By default, images are pulled from ",(0,a.jsx)(i.a,{href:"https://hub.docker.com/",children:"Docker Hub"})," which uses the ",(0,a.jsx)(i.code,{children:"repo/image[:tag]"})," format. To pull from other registries, include the hostname ",(0,a.jsx)(i.code,{children:"registry.example.com/repo/image[:tag]"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["Click ",(0,a.jsx)(i.strong,{children:"Pull"}),"."]}),"\n"]}),"\n",(0,a.jsx)(i.h4,{id:"building-images",children:"Building Images"}),"\n",(0,a.jsx)(i.p,{children:"Use this option to build an image and add it to your virtual machine."}),"\n",(0,a.jsx)(i.p,{children:"To build an image:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["Click the ",(0,a.jsx)(i.strong,{children:"+"})," button in the top-right corner."]}),"\n",(0,a.jsxs)(i.li,{children:["Click on the ",(0,a.jsx)(i.strong,{children:"Build"})," tab."]}),"\n",(0,a.jsxs)(i.li,{children:["Enter a name for the image being built. E.g., ",(0,a.jsx)(i.code,{children:"repo/image"}),", ",(0,a.jsx)(i.code,{children:"repo/image:tag"}),", ",(0,a.jsx)(i.code,{children:"registry.example.com/repo/image"}),", or ",(0,a.jsx)(i.code,{children:"registry.example.com/repo/image:tag"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Click ",(0,a.jsx)(i.strong,{children:"Build"}),"."]}),"\n",(0,a.jsx)(i.li,{children:"In the file browser, select the Dockerfile to build an image with."}),"\n"]})]})}function g(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}function h(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,i,n){var a=n(10412);const s=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),t=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=s?"ios":"android",r=s?"macOS":t?"Windows":"Linux";i.Z={defaultGuide:"quickstart",defaultOs:r,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,i,n){n.d(i,{Z:function(){return r},a:function(){return l}});var a=n(67294);const s={},t=a.createContext(s);function l(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(t.Provider,{value:i},e.children)}}}]);