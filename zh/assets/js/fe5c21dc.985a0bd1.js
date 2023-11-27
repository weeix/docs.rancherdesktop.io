"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6525],{79221:function(e,n,i){i.r(n),i.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return t},toc:function(){return o}});var r=i(85893),a=i(11151);i(93687);const l={sidebar_label:"\u73af\u5883",title:"\u73af\u5883"},c=void 0,t={id:"ui/preferences/application/environment",title:"\u73af\u5883",description:"\u5141\u8bb8\u5728\u7528\u6237 shell \u4e2d\u914d\u7f6e $PATH \u53d8\u91cf\uff0c\u4ee5\u4fbf\u4e0e Rancher Desktop \u5b89\u88c5\u7684\u5b9e\u7528\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.11/ui/preferences/application/environment.md",sourceDirName:"ui/preferences/application",slug:"/ui/preferences/application/environment",permalink:"/zh/1.11/ui/preferences/application/environment",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.11/ui/preferences/application/environment.md",tags:[],version:"1.11",frontMatter:{sidebar_label:"\u73af\u5883",title:"\u73af\u5883"},sidebar:"tutorialSidebar",previous:{title:"\u884c\u4e3a",permalink:"/zh/1.11/ui/preferences/application/behavior"},next:{title:"\u4eff\u771f",permalink:"/zh/1.11/ui/preferences/virtual-machine/emulation"}},s={},o=[{value:"\u914d\u7f6e PATH",id:"\u914d\u7f6e-path",level:4},{value:"\u914d\u7f6e PATH",id:"\u914d\u7f6e-path-1",level:4}];function d(e){const n={code:"code",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{TabItem:i,Tabs:l}=n;return i||p("TabItem",!0),l||p("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u5141\u8bb8\u5728\u7528\u6237 shell \u4e2d\u914d\u7f6e ",(0,r.jsx)(n.code,{children:"$PATH"})," \u53d8\u91cf\uff0c\u4ee5\u4fbf\u4e0e Rancher Desktop \u5b89\u88c5\u7684\u5b9e\u7528\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002"]}),"\n",(0,r.jsxs)(l,{groupId:"os",children:[(0,r.jsxs)(i,{value:"macOS",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/macOS_application_tabEnvironment.png",alt:""})}),(0,r.jsx)(n.h4,{id:"\u914d\u7f6e-path",children:"\u914d\u7f6e PATH"}),(0,r.jsxs)(n.p,{children:["Rancher Desktop \u9644\u5e26\u547d\u4ee4\u884c\u5b9e\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u4e0e\u5176\u5404\u79cd\u529f\u80fd\u4ea4\u4e92\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u5305\u62ec ",(0,r.jsx)(n.code,{children:"docker"}),"\u3001",(0,r.jsx)(n.code,{children:"nerdctl"}),"\u3001",(0,r.jsx)(n.code,{children:"kubectl"})," \u548c ",(0,r.jsx)(n.code,{children:"helm"})," \u7b49\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u4f4d\u4e8e ",(0,r.jsx)(n.code,{children:"~/.rd/bin"}),"\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"ls ~/.rd/bin"})," \u6765\u67e5\u770b\u4f60\u7684\u5b89\u88c5\u4e2d\u5305\u542b\u4e86\u54ea\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u3002"]}),(0,r.jsxs)(n.p,{children:["\u8981\u4f7f\u7528\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\uff0c",(0,r.jsx)(n.code,{children:"~/.rd/bin"})," \u5fc5\u987b\u4f4d\u4e8e shell \u7684 ",(0,r.jsx)(n.code,{children:"PATH"})," \u53d8\u91cf\u4e2d\u3002"]}),(0,r.jsx)(n.p,{children:"\u6709\u4e24\u79cd\u6267\u884c\u6b64\u64cd\u4f5c\u7684\u9009\u9879\uff1a"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Automatic"}),"\uff1a",(0,r.jsx)(n.code,{children:"PATH"})," \u7ba1\u7406\u5c06\u901a\u8fc7\u4fee\u6539\u4f60\u7684 shell .rc \u6587\u4ef6\u6765\u5c06 ",(0,r.jsx)(n.code,{children:"~/.rd/bin"})," \u6dfb\u52a0\u5230 ",(0,r.jsx)(n.code,{children:"PATH"})," \u4e2d\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Manual"}),"\uff1a",(0,r.jsx)(n.code,{children:"PATH"})," \u7ba1\u7406\u4e0d\u4f1a\u6539\u53d8\u4efb\u4f55\u4e1c\u897f - \u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u4f60\u5fc5\u987b\u624b\u52a8\u5c06 ",(0,r.jsx)(n.code,{children:"~/.rd/bin"})," \u6dfb\u52a0\u5230 ",(0,r.jsx)(n.code,{children:"PATH"})," \u4e2d\u3002"]}),"\n"]})]}),(0,r.jsxs)(i,{value:"Linux",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/Linux_application_tabEnvironment.png",alt:""})}),(0,r.jsx)(n.h4,{id:"\u914d\u7f6e-path-1",children:"\u914d\u7f6e PATH"}),(0,r.jsxs)(n.p,{children:["Rancher Desktop \u9644\u5e26\u547d\u4ee4\u884c\u5b9e\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u4e0e\u5176\u5404\u79cd\u529f\u80fd\u4ea4\u4e92\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u5305\u62ec ",(0,r.jsx)(n.code,{children:"docker"}),"\u3001",(0,r.jsx)(n.code,{children:"nerdctl"}),"\u3001",(0,r.jsx)(n.code,{children:"kubectl"})," \u548c ",(0,r.jsx)(n.code,{children:"helm"})," \u7b49\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u4f4d\u4e8e ",(0,r.jsx)(n.code,{children:"~/.rd/bin"}),"\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"ls ~/.rd/bin"})," \u6765\u67e5\u770b\u4f60\u7684\u5b89\u88c5\u4e2d\u5305\u542b\u4e86\u54ea\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u3002"]}),(0,r.jsxs)(n.p,{children:["\u8981\u4f7f\u7528\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\uff0c",(0,r.jsx)(n.code,{children:"~/.rd/bin"})," \u5fc5\u987b\u4f4d\u4e8e shell \u7684 ",(0,r.jsx)(n.code,{children:"PATH"})," \u53d8\u91cf\u4e2d\u3002"]}),(0,r.jsx)(n.p,{children:"\u6709\u4e24\u79cd\u6267\u884c\u6b64\u64cd\u4f5c\u7684\u9009\u9879\uff1a"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Automatic"}),"\uff1a",(0,r.jsx)(n.code,{children:"PATH"})," \u7ba1\u7406\u5c06\u901a\u8fc7\u4fee\u6539\u4f60\u7684 shell .rc \u6587\u4ef6\u6765\u5c06 ",(0,r.jsx)(n.code,{children:"~/.rd/bin"})," \u6dfb\u52a0\u5230 ",(0,r.jsx)(n.code,{children:"PATH"})," \u4e2d\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Manual"}),"\uff1a",(0,r.jsx)(n.code,{children:"PATH"})," \u7ba1\u7406\u4e0d\u4f1a\u6539\u53d8\u4efb\u4f55\u4e1c\u897f - \u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u4f60\u5fc5\u987b\u624b\u52a8\u5c06 ",(0,r.jsx)(n.code,{children:"~/.rd/bin"})," \u6dfb\u52a0\u5230 ",(0,r.jsx)(n.code,{children:"PATH"})," \u4e2d\u3002"]}),"\n"]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,i){var r=i(10412);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),c=a?"ios":"android",t=a?"macOS":l?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:t,defaultPackageManager:"npm",defaultPlatform:c,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return c}});var r=i(67294);const a={},l=r.createContext(a);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);