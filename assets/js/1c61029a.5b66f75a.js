"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[3643],{66103:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=t(85893),a=t(11151),i=t(74866),o=t(85162);t(93687);const s={title:"Increasing Open File Limit"},l=void 0,c={id:"how-to-guides/increasing-open-file-limit",title:"Increasing Open File Limit",description:"You may wish to increase the open file limit as Rancher Desktop's default ulimit setting for pods may be too low, depending on your use case. This guide provides steps for increasing the open file limit using provisioning scripts alongside Rancher Desktop's internal processes.",source:"@site/versioned_docs/version-1.7/how-to-guides/increasing-open-file-limit.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/increasing-open-file-limit",permalink:"/1.7/how-to-guides/increasing-open-file-limit",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/how-to-guides/increasing-open-file-limit.md",tags:[],version:"1.7",frontMatter:{title:"Increasing Open File Limit"},sidebar:"tutorialSidebar",previous:{title:"Provisioning Scripts",permalink:"/1.7/how-to-guides/provisioning-scripts"},next:{title:"Running When Offline",permalink:"/1.7/how-to-guides/running-air-gapped"}},u={},d=[{value:"macOS &amp; Linux Steps",id:"macos--linux-steps",level:2},{value:"Windows Steps",id:"windows-steps",level:2}];function p(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/increasing-open-file-limit"})}),"\n",(0,r.jsxs)(n.p,{children:["You may wish to increase the open file limit as Rancher Desktop's default ",(0,r.jsx)(n.code,{children:"ulimit"})," setting for pods may be too low, depending on your use case. This guide provides steps for increasing the open file limit using provisioning scripts alongside Rancher Desktop's internal processes."]}),"\n",(0,r.jsx)(n.h2,{id:"macos--linux-steps",children:"macOS & Linux Steps"}),"\n",(0,r.jsx)(n.p,{children:"First, use lima override.yaml to write the provisioning scripts."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Create ",(0,r.jsx)(n.code,{children:"override.yaml"})," file at below path"]}),"\n"]}),"\n",(0,r.jsxs)(i.Z,{groupId:"os",children:[(0,r.jsx)(o.Z,{value:"macOS",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"~/Library/Application Support/rancher-desktop/lima/_config/override.yaml\n"})})}),(0,r.jsx)(o.Z,{value:"Linux",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"~/.local/share/rancher-desktop/lima/_config/override.yaml\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["You can then use the script below to increase the ",(0,r.jsx)(n.code,{children:"ulimit"})," for containers inside your created ",(0,r.jsx)(n.code,{children:"override.yaml"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If using the Elastic platform, please use the script below to set the ",(0,r.jsx)(n.code,{children:"vm.max_map_count"})," parameter as well."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n    sysctl -w vm.max_map_count=262144\n"})}),"\n",(0,r.jsx)(n.p,{children:"Lastly, please stop and restart Rancher Desktop in order for the updated limits to take effect."}),"\n",(0,r.jsx)(n.h2,{id:"windows-steps",children:"Windows Steps"}),"\n",(0,r.jsx)(n.p,{children:"First, be sure that you have run Rancher Desktop at least once in order for the configurations to initialize."}),"\n",(0,r.jsxs)(n.p,{children:["You can then create a provisioning script, say ",(0,r.jsx)(n.code,{children:"map_count.start"}),", at ",(0,r.jsx)(n.code,{children:"%AppData%\\rancher-desktop\\provisioning"})," with the below code to update the open file limit by increasing the ",(0,r.jsx)(n.code,{children:"max_map_count"})," parameter."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"#!/bin/sh\n\nsysctl -w vm.max_map_count=262144\n"})}),"\n",(0,r.jsx)(n.p,{children:"Lastly, please stop and restart Rancher Desktop for these changes to take effect."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},93687:function(e,n,t){var r=t(10412);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=a?"ios":"android",s=a?"macOS":i?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,n,t){t.d(n,{Z:function(){return o}});t(67294);var r=t(34334),a={tabItem:"tabItem_Ymn6"},i=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(67294),a=t(34334),i=t(12466),o=t(16550),s=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=f({queryString:t,groupId:a}),[m,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),b=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var v=t(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=t(85893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(w,{...e,...n})]})}function j(e){const n=(0,v.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var r=t(67294);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);