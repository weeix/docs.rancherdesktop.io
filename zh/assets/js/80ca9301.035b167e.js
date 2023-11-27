"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7030],{3253:function(e,n,a){a.r(n),a.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var s=a(85893),t=a(11151),o=a(93687);const i={sidebar_label:"Snapshots",title:"Snapshots"},r=void 0,l={id:"ui/snapshots",title:"Snapshots",description:"SnapshotsExample",source:"@site/docs/ui/snapshots.md",sourceDirName:"ui",slug:"/ui/snapshots",permalink:"/zh/next/ui/snapshots",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/snapshots.md",tags:[],version:"current",frontMatter:{sidebar_label:"Snapshots",title:"Snapshots"},sidebar:"tutorialSidebar",previous:{title:"\u955c\u50cf",permalink:"/zh/next/ui/images"},next:{title:"\u6545\u969c\u6392\u9664",permalink:"/zh/next/ui/troubleshooting"}},c={},d=[{value:"Snapshot Management",id:"snapshot-management",level:3},{value:"Command Line - <code>rdctl snapshot</code>",id:"command-line---rdctl-snapshot",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Head:a,TabItem:i,Tabs:r}=n;return a||p("Head",!0),i||p("TabItem",!0),r||p("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/snapshots"})}),"\n","\n","\n",(0,s.jsxs)(r,{groupId:"os",defaultValue:o.Z.defaultOs,children:[(0,s.jsx)(i,{value:"Windows",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/Windows_Snapshots-List.png",alt:"Snapshots_Example"})})}),(0,s.jsx)(i,{value:"macOS",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/macOS_Snapshots-List.png",alt:"Snapshots_Example"})})}),(0,s.jsx)(i,{value:"Linux",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/Linux_Snapshots-List.png",alt:"Snapshots_Example"})})})]}),"\n",(0,s.jsx)(n.admonition,{title:"warning",type:"caution",children:(0,s.jsxs)(n.p,{children:["This is an ",(0,s.jsx)(n.strong,{children:"experimental"})," feature."]})}),"\n",(0,s.jsxs)(n.p,{children:["A snapshot can be used to store the current configuration of your virtual machine and all associated settings. Snapshots are stored in a ",(0,s.jsx)(n.code,{children:"snapshots"})," directory which are created at the below paths respective to your operating system:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["macOS: ",(0,s.jsx)(n.code,{children:"~/Library/Application Support/rancher-desktop/snapshots"})]}),"\n",(0,s.jsxs)(n.li,{children:["Linux: ",(0,s.jsx)(n.code,{children:"~/.local/share/rancher-desktop/snapshots"})]}),"\n",(0,s.jsxs)(n.li,{children:["Windows: ",(0,s.jsx)(n.code,{children:"%LOCALAPPDATA%\\rancher-desktop\\snapshots"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"snapshots"})," directory may be moved by creating a symlink from your system's default path to your preferred location."]}),"\n",(0,s.jsx)(n.h3,{id:"snapshot-management",children:"Snapshot Management"}),"\n",(0,s.jsx)(n.p,{children:"The following actions can be taken on the tab:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Create Snapshot"}),":\nYou can choose to create a snapshot through the user interface from the Snapshots tab by clicking the ",(0,s.jsx)(n.code,{children:"Create Snapshot"})," button. This will launch a dialog and provides a note alerting that Rancher Desktop will be unavailable during the creation of a new Snapshot."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Snapshot Name"}),":\nText can be entered into this field to name your snapshot."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Description"}),":\nText can be entered into the Description field that describes your snapshot."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Restore"}),":\nThe ",(0,s.jsx)(n.code,{children:"Restore"})," button can be used to restore a snapshot and will replace your current snapshot installation including preference settings. Rancher Desktop will be unavailable while this process is running."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Delete"}),":\nThe ",(0,s.jsx)(n.code,{children:"Delete"})," button can be used to remove snapshots permanently."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"command-line---rdctl-snapshot",children:["Command Line - ",(0,s.jsx)(n.code,{children:"rdctl snapshot"})]}),"\n",(0,s.jsxs)(n.p,{children:["All commands available through the user interface are also available using the ",(0,s.jsx)(n.code,{children:"rdctl snapshot"})," command. Please see the ",(0,s.jsx)(n.a,{href:"https://docs.rancherdesktop.io/references/rdctl-command-reference",children:"reference page"})," for more information."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,a){var s=a(10412);const t=!!s.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!s.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=t?"ios":"android",r=t?"macOS":o?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:r,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return i}});var s=a(67294);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);