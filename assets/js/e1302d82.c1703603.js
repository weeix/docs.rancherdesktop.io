"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4870],{51050:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=t(85893),i=t(11151),s=t(93687);const o={sidebar_label:"Diagnostics",title:"Diagnostics"},r=void 0,c={id:"ui/diagnostics",title:"Diagnostics",description:"The Diagnostics feature runs several checks in the background to detect common problems such as missing minimum requirements, misconfigurations, etc., in your environment to help you self-troubleshoot and fix Rancher Desktop application issues.",source:"@site/versioned_docs/version-latest/ui/diagnostics.md",sourceDirName:"ui",slug:"/ui/diagnostics",permalink:"/ui/diagnostics",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/diagnostics.md",tags:[],version:"latest",frontMatter:{sidebar_label:"Diagnostics",title:"Diagnostics"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/ui/troubleshooting"},next:{title:"Extensions",permalink:"/ui/extensions"}},l={},u=[];function d(e){const n={em:"em",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components},{Head:t,TabItem:o,Tabs:r}=n;return t||h("Head",!0),o||h("TabItem",!0),r||h("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/diagnostics"})}),"\n","\n","\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"Diagnostics"})," feature runs several checks in the background to detect common problems such as missing minimum requirements, misconfigurations, etc., in your environment to help you self-troubleshoot and fix Rancher Desktop application issues."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," Rancher Desktop ",(0,a.jsx)(n.em,{children:"doesn't"})," send the diagnostics data to any remote server for processing or storing."]}),"\n",(0,a.jsxs)(r,{groupId:"os",defaultValue:s.Z.defaultOs,children:[(0,a.jsx)(o,{value:"Windows",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/Windows_Diagnostics.png",alt:""})})}),(0,a.jsx)(o,{value:"macOS",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/macOS_Diagnostics.png",alt:""})})}),(0,a.jsx)(o,{value:"Linux",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/Linux_Diagnostics.png",alt:""})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The diagnostics checks are run every time when the application launches. If there are any problems identified then the count of failed checks is shown next to the ",(0,a.jsx)(n.em,{children:"Diagnostics"})," menu text in the left navigation bar, indicating that something needs your attention. The ",(0,a.jsx)(n.em,{children:"Diagnostics"})," tab displays the results of the diagnostics tests, highlighting areas that need attention, and guides you to resolve problems."]}),"\n",(0,a.jsx)(n.p,{children:"On this tab you can mute/unmute individual checks if you have a non-standard setup and know that these checks don't apply to your situation. You can also rerun the diagnostics anytime to verify that changes you have made to your environment have rectified the problem."})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,t){var a=t(10412);const i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=i?"ios":"android",r=i?"macOS":s?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:r,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var a=t(67294);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);