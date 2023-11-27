"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6574],{75266:function(e,n,a){a.r(n),a.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});var t=a(85893),o=a(11151),i=a(93687);const r={sidebar_label:"Port Forwarding",title:"Port Forwarding"},s=void 0,l={id:"ui/port-forwarding",title:"Port Forwarding",description:"How to Forward a Port",source:"@site/versioned_docs/version-latest/ui/port-forwarding.md",sourceDirName:"ui",slug:"/ui/port-forwarding",permalink:"/ui/port-forwarding",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/port-forwarding.md",tags:[],version:"latest",frontMatter:{sidebar_label:"Port Forwarding",title:"Port Forwarding"},sidebar:"tutorialSidebar",previous:{title:"Containers",permalink:"/ui/containers"},next:{title:"Images",permalink:"/ui/images"}},d={},c=[{value:"How to Forward a Port",id:"how-to-forward-a-port",level:3},{value:"Admin vs Non-Admin Port Mappings",id:"admin-vs-non-admin-port-mappings",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components},{Head:a,TabItem:r,Tabs:s}=n;return a||m("Head",!0),r||m("TabItem",!0),s||m("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/port-forwarding"})}),"\n","\n","\n",(0,t.jsxs)(s,{groupId:"os",defaultValue:i.Z.defaultOs,children:[(0,t.jsx)(r,{value:"Windows",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/Windows_PortForwarding.png",alt:""})})}),(0,t.jsx)(r,{value:"macOS",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/macOS_PortForwarding.png",alt:""})})}),(0,t.jsx)(r,{value:"Linux",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/Linux_PortForwarding.png",alt:""})})})]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-forward-a-port",children:"How to Forward a Port"}),"\n",(0,t.jsx)(n.p,{children:"The steps below outline how to forward a port:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Find the service and click ",(0,t.jsx)(n.strong,{children:"Forward"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Specify a port to use or use the randomly assigned port."}),"\n",(0,t.jsx)(n.li,{children:"Click the \u2713 button to confirm your selection."}),"\n",(0,t.jsxs)(n.li,{children:["Optional: click ",(0,t.jsx)(n.strong,{children:"Cancel"})," to remove the port assigned."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"admin-vs-non-admin-port-mappings",children:"Admin vs Non-Admin Port Mappings"}),"\n",(0,t.jsxs)(n.p,{children:["Rancher Desktop includes automated port forwarding for versions ",(0,t.jsx)(n.code,{children:"1.9"})," and later. For non-admin port access, port mappings are configured to the localhost and unpriviliged ports ",(0,t.jsx)(n.code,{children:"> 1024"}),". Priviliged port mappings can also be configured by users with admin permissions for ports ",(0,t.jsx)(n.code,{children:"<= 1024"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Please see ",(0,t.jsx)(n.a,{href:"https://docs.rancherdesktop.io/getting-started/installation/#traefik-port-binding-access",children:"Traefik Port Binding Access"})," to configure ports at the operating system level."]})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,a){var t=a(10412);const o=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=o?"ios":"android",s=o?"macOS":i?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return r}});var t=a(67294);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);