"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9393],{38234:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var i=t(85893),a=t(11151),s=t(93687);const o={sidebar_label:"Containers",title:"Containers"},r=void 0,l={id:"ui/containers",title:"Containers",description:"ContainersExample",source:"@site/versioned_docs/version-latest/ui/containers.md",sourceDirName:"ui",slug:"/ui/containers",permalink:"/ui/containers",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/containers.md",tags:[],version:"latest",frontMatter:{sidebar_label:"Containers",title:"Containers"},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/ui/general"},next:{title:"Port Forwarding",permalink:"/ui/port-forwarding"}},c={},d=[{value:"Container Management",id:"container-management",level:3}];function u(e){const n={admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Head:t,TabItem:o,Tabs:r}=n;return t||p("Head",!0),o||p("TabItem",!0),r||p("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/containers"})}),"\n","\n","\n",(0,i.jsxs)(r,{groupId:"os",defaultValue:s.Z.defaultOs,children:[(0,i.jsx)(o,{value:"Windows",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/Windows_Containers.png",alt:"Containers_Example"})})}),(0,i.jsx)(o,{value:"macOS",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/macOS_Containers.png",alt:"Containers_Example"})})}),(0,i.jsx)(o,{value:"Linux",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/Linux_Containers.png",alt:"Containers_Example"})})})]}),"\n",(0,i.jsx)(n.admonition,{title:"warning",type:"caution",children:(0,i.jsxs)(n.p,{children:["This is an ",(0,i.jsx)(n.strong,{children:"experimental"})," feature."]})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Containers"})," tab offers quick access to manage containers and view key information such as:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"State"}),":\nThe container state(s) will be listed in this field, and by default running containers are presented first."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Name"}),":\nThe container name(s) will be listed in this field and can be sorted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Image"}),":\nAll image names will be listed in this field and can be sorted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Port(s)"}),":\nPorts are listed in this field and can be clicked for quick access to a localhost port."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Started"}),":\nContainer start-up times will be listed in this field and can be sorted."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The listed information can be sorted in ascending or descending order. Containers can also be filtered with input text in the ",(0,i.jsx)(n.code,{children:"Filter"})," field located at the top right. Bulk selection is available for managing multiple instances at once."]}),"\n",(0,i.jsx)(n.h3,{id:"container-management",children:"Container Management"}),"\n",(0,i.jsx)(n.p,{children:"The buttons located at the top of the page will be highlighted when a container is selected and depend on the container's state."}),"\n",(0,i.jsx)(n.p,{children:"Bulk selection and actions can also be performed on instances with the same state."}),"\n",(0,i.jsx)(n.p,{children:"The following actions are available:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Stop"}),":\nYou can terminate container instances using the ",(0,i.jsx)(n.code,{children:"Stop"})," button."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Start"}),":\nYou can initiate container instances using the ",(0,i.jsx)(n.code,{children:"Start"})," button."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Delete"}),":\nYou can delete container instances from your system entirely by using the ",(0,i.jsx)(n.code,{children:"Delete"})," button."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\u22ee"}),":\nThis button is located on the right side of the tab view. You can start, stop, or delete container instances depending on their  state using the ",(0,i.jsx)(n.code,{children:"\u22ee"})," button."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,t){var i=t(10412);const a=!!i.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!i.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=a?"ios":"android",r=a?"macOS":s?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:r,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var i=t(67294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);