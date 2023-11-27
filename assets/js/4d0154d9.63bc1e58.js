"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6210],{2743:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var o=t(85893),a=t(11151),s=t(93687);const i={sidebar_label:"Troubleshooting",title:"Troubleshooting"},r=void 0,l={id:"ui/troubleshooting",title:"Troubleshooting",description:"Show Logs",source:"@site/versioned_docs/version-1.10/ui/troubleshooting.md",sourceDirName:"ui",slug:"/ui/troubleshooting",permalink:"/1.10/ui/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.10/ui/troubleshooting.md",tags:[],version:"1.10",frontMatter:{sidebar_label:"Troubleshooting",title:"Troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"Images",permalink:"/1.10/ui/images"},next:{title:"Diagnostics",permalink:"/1.10/ui/diagnostics"}},c={},u=[{value:"Show Logs",id:"show-logs",level:3},{value:"Enable Debug Mode",id:"enable-debug-mode",level:4},{value:"Reset Kubernetes",id:"reset-kubernetes",level:3},{value:"Factory Reset",id:"factory-reset",level:3}];function d(e){const n={h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.a)(),...e.components},{Head:t,TabItem:i,Tabs:r}=n;return t||h("Head",!0),i||h("TabItem",!0),r||h("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/troubleshooting"})}),"\n","\n","\n",(0,o.jsxs)(r,{groupId:"os",defaultValue:s.Z.defaultOs,children:[(0,o.jsx)(i,{value:"Windows",children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/Windows_Troubleshooting.png",alt:""})})}),(0,o.jsx)(i,{value:"macOS",children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/macOS_Troubleshooting.png",alt:""})})}),(0,o.jsx)(i,{value:"Linux",children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/Linux_Troubleshooting.png",alt:""})})})]}),"\n",(0,o.jsx)(n.h3,{id:"show-logs",children:"Show Logs"}),"\n",(0,o.jsx)(n.p,{children:"Use this option to open the folder containing all Rancher Desktop log files."}),"\n",(0,o.jsx)(n.h4,{id:"enable-debug-mode",children:"Enable Debug Mode"}),"\n",(0,o.jsx)(n.p,{children:"Enable debug level logging."}),"\n",(0,o.jsx)(n.h3,{id:"reset-kubernetes",children:"Reset Kubernetes"}),"\n",(0,o.jsx)(n.p,{children:"Reset Kubernetes and remove all workloads and configurations. Before the reset occurs, users are presented with a confirmation and the option to also delete container images."}),"\n",(0,o.jsx)(n.p,{children:"To reset Kubernetes:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Reset Kubernetes"}),". A confirmation window appears."]}),"\n",(0,o.jsx)(n.li,{children:"Optional: select whether to also delete container images."}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Reset"})," to proceed. Kubernetes stops and starts again."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"factory-reset",children:"Factory Reset"}),"\n",(0,o.jsx)(n.p,{children:"Remove the cluster and all other Rancher Desktop settings. To continue The initial setup procedure must be done again."}),"\n",(0,o.jsx)(n.p,{children:"To perform a factory reset:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Reset"}),". A confirmation window appears."]}),"\n",(0,o.jsx)(n.li,{children:"Optional: select whether cached Kubernetes images are kept."}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Factory Reset"})," to proceed. Kubernetes stops and Rancher Desktop closes."]}),"\n",(0,o.jsx)(n.li,{children:"Optional: start Rancher Desktop again."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,t){var o=t(10412);const a=!!o.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!o.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=a?"ios":"android",r=a?"macOS":s?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:r,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var o=t(67294);const a={},s=o.createContext(a);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);