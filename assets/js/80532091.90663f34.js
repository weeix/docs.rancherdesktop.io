"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7553],{16637:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return d}});var i=t(85893),n=t(11151),s=t(93687);const o={sidebar_label:"General",title:"General"},l=void 0,r={id:"ui/preferences/application/general",title:"General",description:"Allows for enablement of automatic updates, as well as an optional field to allow Rancher Desktop to collect anonymous statistics to help improve the application.",source:"@site/versioned_docs/version-1.11/ui/preferences/application/general.md",sourceDirName:"ui/preferences/application",slug:"/ui/preferences/application/general",permalink:"/1.11/ui/preferences/application/general",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.11/ui/preferences/application/general.md",tags:[],version:"1.11",frontMatter:{sidebar_label:"General",title:"General"},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/1.11/ui/extensions"},next:{title:"Behavior",permalink:"/1.11/ui/preferences/application/behavior"}},c={},d=[{value:"Automatic Updates",id:"automatic-updates",level:4},{value:"Statistics",id:"statistics",level:4},{value:"Administrative Access",id:"administrative-access",level:4},{value:"Automatic Updates",id:"automatic-updates-1",level:4},{value:"Statistics",id:"statistics-1",level:4},{value:"Administrative Access",id:"administrative-access-1",level:4},{value:"Automatic Updates",id:"automatic-updates-2",level:4},{value:"Statistics",id:"statistics-2",level:4}];function p(e){const a={h4:"h4",img:"img",p:"p",...(0,n.a)(),...e.components},{Head:t,TabItem:o,Tabs:l}=a;return t||h("Head",!0),o||h("TabItem",!0),l||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/preferences/application/general"})}),"\n","\n","\n",(0,i.jsx)(a.p,{children:"Allows for enablement of automatic updates, as well as an optional field to allow Rancher Desktop to collect anonymous statistics to help improve the application."}),"\n",(0,i.jsxs)(l,{groupId:"os",defaultValue:s.Z.defaultOs,children:[(0,i.jsxs)(o,{value:"Windows",children:[(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/preferences/Windows_application_tabGeneral.png",alt:""})}),(0,i.jsx)(a.h4,{id:"automatic-updates",children:"Automatic Updates"}),(0,i.jsx)(a.p,{children:"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."}),(0,i.jsx)(a.h4,{id:"statistics",children:"Statistics"}),(0,i.jsx)(a.p,{children:"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected."})]}),(0,i.jsxs)(o,{value:"macOS",children:[(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/preferences/macOS_application_tabGeneral.png",alt:""})}),(0,i.jsx)(a.h4,{id:"administrative-access",children:"Administrative Access"}),(0,i.jsx)(a.p,{children:"Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts."}),(0,i.jsx)(a.h4,{id:"automatic-updates-1",children:"Automatic Updates"}),(0,i.jsx)(a.p,{children:"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."}),(0,i.jsx)(a.h4,{id:"statistics-1",children:"Statistics"}),(0,i.jsx)(a.p,{children:"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected."})]}),(0,i.jsxs)(o,{value:"Linux",children:[(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/preferences/Linux_application_tabGeneral.png",alt:""})}),(0,i.jsx)(a.h4,{id:"administrative-access-1",children:"Administrative Access"}),(0,i.jsx)(a.p,{children:"Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts."}),(0,i.jsx)(a.h4,{id:"automatic-updates-2",children:"Automatic Updates"}),(0,i.jsx)(a.p,{children:"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."}),(0,i.jsx)(a.h4,{id:"statistics-2",children:"Statistics"}),(0,i.jsx)(a.p,{children:"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected."})]})]})]})}function u(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}function h(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,a,t){var i=t(10412);const n=!!i.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!i.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=n?"ios":"android",l=n?"macOS":s?"Windows":"Linux";a.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,a,t){t.d(a,{Z:function(){return l},a:function(){return o}});var i=t(67294);const n={},s=i.createContext(n);function o(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);