"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9643],{62174:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var a=n(85893),i=n(11151),o=n(74866),s=n(85162),r=n(93687);const l={sidebar_label:"Application",title:"Application"},c=void 0,d={id:"ui/preferences/application",title:"Application",description:"General",source:"@site/versioned_docs/version-latest/ui/preferences/application.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/application",permalink:"/ui/preferences/application",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/preferences/application.md",tags:[],version:"latest",frontMatter:{sidebar_label:"Application",title:"Application"}},u={},h=[{value:"General",id:"general",level:3},{value:"Automatic Updates",id:"automatic-updates",level:4},{value:"Statistics",id:"statistics",level:4},{value:"Administrative Access",id:"administrative-access",level:4},{value:"Automatic Updates",id:"automatic-updates-1",level:4},{value:"Statistics",id:"statistics-1",level:4},{value:"Administrative Access",id:"administrative-access-1",level:4},{value:"Automatic Updates",id:"automatic-updates-2",level:4},{value:"Statistics",id:"statistics-2",level:4},{value:"Behavior",id:"behavior",level:3},{value:"Startup",id:"startup",level:4},{value:"Background",id:"background",level:4},{value:"Notification Icon",id:"notification-icon",level:4},{value:"Startup",id:"startup-1",level:4},{value:"Background",id:"background-1",level:4},{value:"Notification Icon",id:"notification-icon-1",level:4},{value:"Startup",id:"startup-2",level:4},{value:"Background",id:"background-2",level:4},{value:"Notification Icon",id:"notification-icon-2",level:4},{value:"Environment",id:"environment",level:3},{value:"Configure PATH",id:"configure-path",level:4},{value:"Configure PATH",id:"configure-path-1",level:4}];function p(e){const t={code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"general",children:"General"}),"\n",(0,a.jsx)(t.p,{children:"Allows for enablement of automatic updates, as well as an optional field to allow Rancher Desktop to collect anonymous statistics to help improve the application."}),"\n",(0,a.jsxs)(o.Z,{groupId:"os",defaultValue:r.Z.defaultOs,children:[(0,a.jsxs)(s.Z,{value:"Windows",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Windows_application_tabGeneral.png",alt:""})}),(0,a.jsx)(t.h4,{id:"automatic-updates",children:"Automatic Updates"}),(0,a.jsx)(t.p,{children:"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."}),(0,a.jsx)(t.h4,{id:"statistics",children:"Statistics"}),(0,a.jsx)(t.p,{children:"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected."})]}),(0,a.jsxs)(s.Z,{value:"macOS",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/macOS_application_tabGeneral.png",alt:""})}),(0,a.jsx)(t.h4,{id:"administrative-access",children:"Administrative Access"}),(0,a.jsx)(t.p,{children:"Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts."}),(0,a.jsx)(t.h4,{id:"automatic-updates-1",children:"Automatic Updates"}),(0,a.jsx)(t.p,{children:"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."}),(0,a.jsx)(t.h4,{id:"statistics-1",children:"Statistics"}),(0,a.jsx)(t.p,{children:"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected."})]}),(0,a.jsxs)(s.Z,{value:"Linux",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Linux_application_tabGeneral.png",alt:""})}),(0,a.jsx)(t.h4,{id:"administrative-access-1",children:"Administrative Access"}),(0,a.jsx)(t.p,{children:"Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts."}),(0,a.jsx)(t.h4,{id:"automatic-updates-2",children:"Automatic Updates"}),(0,a.jsx)(t.p,{children:"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."}),(0,a.jsx)(t.h4,{id:"statistics-2",children:"Statistics"}),(0,a.jsx)(t.p,{children:"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected."})]})]}),"\n",(0,a.jsx)(t.h3,{id:"behavior",children:"Behavior"}),"\n",(0,a.jsx)(t.p,{children:"Allows for configuration of application behavior upon startup, background process behavior, and notification icon display."}),"\n",(0,a.jsxs)(o.Z,{groupId:"os",defaultValue:r.Z.defaultOs,children:[(0,a.jsxs)(s.Z,{value:"Windows",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Windows_application_tabBehavior.png",alt:""})}),(0,a.jsx)(t.h4,{id:"startup",children:"Startup"}),(0,a.jsx)(t.p,{children:"Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well."}),(0,a.jsx)(t.h4,{id:"background",children:"Background"}),(0,a.jsx)(t.p,{children:"When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the task switcher or task bar. The application window can still be opened via the context menu of the notification icon."}),(0,a.jsx)(t.p,{children:"When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the task switcher and task bar. This can be used to gain access to the background application again when the notification icon is unavailable as well."}),(0,a.jsx)(t.p,{children:"Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the task switcher and task bar), but can be configured to terminate the application as well when the main window is closed."}),(0,a.jsx)(t.h4,{id:"notification-icon",children:"Notification Icon"}),(0,a.jsx)(t.p,{children:"Rancher Desktop shows the application status with a notification icon. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon."})]}),(0,a.jsxs)(s.Z,{value:"macOS",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/macOS_application_tabBehavior.png",alt:""})}),(0,a.jsx)(t.h4,{id:"startup-1",children:"Startup"}),(0,a.jsx)(t.p,{children:"Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well."}),(0,a.jsx)(t.h4,{id:"background-1",children:"Background"}),(0,a.jsx)(t.p,{children:"When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the app switcher or the dock. The application window can still be opened via the context menu of the notification icon in the menu bar."}),(0,a.jsx)(t.p,{children:"When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the app switcher and the dock. This can be used to gain access to the background application again when the notification icon is unavailable as well."}),(0,a.jsx)(t.p,{children:"Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the app switcher and the dock), but can be configured to terminate the application as well when the main window is closed."}),(0,a.jsx)(t.h4,{id:"notification-icon-1",children:"Notification Icon"}),(0,a.jsx)(t.p,{children:"Rancher Desktop shows the application status with a notification icon in the menu bar. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon."})]}),(0,a.jsxs)(s.Z,{value:"Linux",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Linux_application_tabBehavior.png",alt:""})}),(0,a.jsx)(t.h4,{id:"startup-2",children:"Startup"}),(0,a.jsx)(t.p,{children:"Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well."}),(0,a.jsx)(t.h4,{id:"background-2",children:"Background"}),(0,a.jsx)(t.p,{children:"When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the task switcher or task bar. The application window can still be opened via the context menu of the notification icon."}),(0,a.jsx)(t.p,{children:"When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the task switcher and task bar. This can be used to gain access to the background application again when the notification icon is unavailable as well."}),(0,a.jsx)(t.p,{children:"Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the task switcher and task bar), but can be configured to terminate the application as well when the main window is closed."}),(0,a.jsx)(t.h4,{id:"notification-icon-2",children:"Notification Icon"}),(0,a.jsx)(t.p,{children:"Rancher Desktop shows the application status with a notification icon. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon."})]})]}),"\n",(0,a.jsx)(t.h3,{id:"environment",children:"Environment"}),"\n",(0,a.jsxs)(t.p,{children:["Allows for configuration of the ",(0,a.jsx)(t.code,{children:"$PATH"})," variable in the users shell in order to interact with Rancher Desktop installed utilities."]}),"\n",(0,a.jsxs)(o.Z,{groupId:"os",children:[(0,a.jsxs)(s.Z,{value:"macOS",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/macOS_application_tabEnvironment.png",alt:""})}),(0,a.jsx)(t.h4,{id:"configure-path",children:"Configure PATH"}),(0,a.jsxs)(t.p,{children:["A Rancher Desktop installation comes with command-line utilities that are used to interface with its various features. Some examples of these utilities are ",(0,a.jsx)(t.code,{children:"docker"}),", ",(0,a.jsx)(t.code,{children:"nerdctl"}),", ",(0,a.jsx)(t.code,{children:"kubectl"}),", and ",(0,a.jsx)(t.code,{children:"helm"}),". These utilities are located in ",(0,a.jsx)(t.code,{children:"~/.rd/bin"})," - you may see which utilities are included in your installation by running ",(0,a.jsx)(t.code,{children:"ls ~/.rd/bin"}),"."]}),(0,a.jsxs)(t.p,{children:["In order to use the utilities, ",(0,a.jsx)(t.code,{children:"~/.rd/bin"})," must be in the ",(0,a.jsx)(t.code,{children:"PATH"})," variable in your shell."]}),(0,a.jsx)(t.p,{children:"There are two options for doing this:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Automatic"}),": ",(0,a.jsx)(t.code,{children:"PATH"})," management will add ",(0,a.jsx)(t.code,{children:"~/.rd/bin"})," to your ",(0,a.jsx)(t.code,{children:"PATH"})," by modifying your shell .rc files for you."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Manual"}),": ",(0,a.jsx)(t.code,{children:"PATH"})," management does not change anything - in this mode, you must add ",(0,a.jsx)(t.code,{children:"~/.rd/bin"})," to your ",(0,a.jsx)(t.code,{children:"PATH"})," yourself."]}),"\n"]})]}),(0,a.jsxs)(s.Z,{value:"Linux",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Linux_application_tabEnvironment.png",alt:""})}),(0,a.jsx)(t.h4,{id:"configure-path-1",children:"Configure PATH"}),(0,a.jsxs)(t.p,{children:["A Rancher Desktop installation comes with command-line utilities that are used to interface with its various features. Some examples of these utilities are ",(0,a.jsx)(t.code,{children:"docker"}),", ",(0,a.jsx)(t.code,{children:"nerdctl"}),", ",(0,a.jsx)(t.code,{children:"kubectl"}),", and ",(0,a.jsx)(t.code,{children:"helm"}),". These utilities are located in ",(0,a.jsx)(t.code,{children:"~/.rd/bin"})," - you may see which utilities are included in your installation by running ",(0,a.jsx)(t.code,{children:"ls ~/.rd/bin"}),"."]}),(0,a.jsxs)(t.p,{children:["In order to use the utilities, ",(0,a.jsx)(t.code,{children:"~/.rd/bin"})," must be in the ",(0,a.jsx)(t.code,{children:"PATH"})," variable in your shell."]}),(0,a.jsx)(t.p,{children:"There are two options for doing this:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Automatic"}),": ",(0,a.jsx)(t.code,{children:"PATH"})," management will add ",(0,a.jsx)(t.code,{children:"~/.rd/bin"})," to your ",(0,a.jsx)(t.code,{children:"PATH"})," by modifying your shell .rc files for you."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Manual"}),": ",(0,a.jsx)(t.code,{children:"PATH"})," management does not change anything - in this mode, you must add ",(0,a.jsx)(t.code,{children:"~/.rd/bin"})," to your ",(0,a.jsx)(t.code,{children:"PATH"})," yourself."]}),"\n"]})]})]})]})}function f(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},93687:function(e,t,n){var a=n(10412);const i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),s=i?"ios":"android",r=i?"macOS":o?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:r,defaultPackageManager:"npm",defaultPlatform:s,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,n){n.d(t,{Z:function(){return s}});n(67294);var a=n(34334),i={tabItem:"tabItem_Ymn6"},o=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,s),hidden:n,children:t})}},74866:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(67294),i=n(34334),o=n(12466),s=n(16550),r=n(20469),l=n(91980),c=n(67392),d=n(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,o=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,u]=f({queryString:n,groupId:i}),[m,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,o]=(0,d.Nk)(n);return[i,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:i}),b=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,r.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var v=n(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},w=n(85893);function g(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=r[n].value;i!==a&&(c(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=m(e);return(0,w.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,w.jsx)(g,{...e,...t}),(0,w.jsx)(x,{...e,...t})]})}function k(e){const t=(0,v.Z)();return(0,w.jsx)(j,{...e,children:u(e.children)},String(t))}},11151:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return s}});var a=n(67294);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);