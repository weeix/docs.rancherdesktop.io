"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[3298],{4813:function(e,n,o){o.r(n),o.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var t=o(85893),r=o(11151),s=o(74866),i=o(85162);o(93687);const a={title:"Troubleshooting Tips"},l=void 0,c={id:"troubleshooting-tips",title:"Troubleshooting Tips",description:"This page provides tips to troubleshoot issues you may have with Rancher Desktop.",source:"@site/versioned_docs/version-1.7/troubleshooting-tips.md",sourceDirName:".",slug:"/troubleshooting-tips",permalink:"/1.7/troubleshooting-tips",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/troubleshooting-tips.md",tags:[],version:"1.7",frontMatter:{title:"Troubleshooting Tips"},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/1.7/faq"}},d={},u=[{value:"Q: Why do I not see my WSL distro under Rancher Desktop&#39;s WSL Integration page?",id:"q-why-do-i-not-see-my-wsl-distro-under-rancher-desktops-wsl-integration-page",level:4},{value:"Q: I do not see an entry for Rancher Desktop when running <code>kubectl config get-contexts</code>, where is it?",id:"q-i-do-not-see-an-entry-for-rancher-desktop-when-running-kubectl-config-get-contexts-where-is-it",level:4},{value:"Q: Rancher Desktop is stuck on <code>Waiting for Kubernetes API</code>, what do I do?",id:"q-rancher-desktop-is-stuck-on-waiting-for-kubernetes-api-what-do-i-do",level:4},{value:"Q: I can no longer run <code>docker compose</code> after installing Rancher Desktop and uninstalling Docker Desktop, what happened?",id:"q-i-can-no-longer-run-docker-compose-after-installing-rancher-desktop-and-uninstalling-docker-desktop-what-happened",level:4},{value:"Q: I&#39;m using Homebrew to install Rancher Desktop, but <code>brew install rancher-desktop</code> is failing, why?",id:"q-im-using-homebrew-to-install-rancher-desktop-but-brew-install-rancher-desktop-is-failing-why",level:4},{value:"Q: How do I fix <code>permission denied</code> errors when trying to use Docker on WSL?",id:"q-how-do-i-fix-permission-denied-errors-when-trying-to-use-docker-on-wsl",level:4},{value:"Q: How do I fix <code>kubectl: command not found</code> issue on Linux?",id:"q-how-do-i-fix-kubectl-command-not-found-issue-on-linux",level:4},{value:"Q: How do I fix <code>FATA[0005] subnet 10.4.0.0/24 overlaps with other one on this address space</code> when running a container using <code>nerdctl run</code>?",id:"q-how-do-i-fix-fata0005-subnet-1040024-overlaps-with-other-one-on-this-address-space-when-running-a-container-using-nerdctl-run",level:4},{value:"Q: How do I fix the <code>Installation Aborted</code> error while downgrading from an existing MSI installation to an older EXE version (1.6.x or earlier) on Windows?",id:"q-how-do-i-fix-the-installation-aborted-error-while-downgrading-from-an-existing-msi-installation-to-an-older-exe-version-16x-or-earlier-on-windows",level:4},{value:"Q: Why do I see a blank screen when I launch the Cluster Dashboard?",id:"q-why-do-i-see-a-blank-screen-when-i-launch-the-cluster-dashboard",level:4}];function h(e){const n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/troubleshooting-tips"})}),"\n",(0,t.jsx)(n.p,{children:"This page provides tips to troubleshoot issues you may have with Rancher Desktop."}),"\n",(0,t.jsx)(n.h4,{id:"q-why-do-i-not-see-my-wsl-distro-under-rancher-desktops-wsl-integration-page",children:"Q: Why do I not see my WSL distro under Rancher Desktop's WSL Integration page?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," You are likely using a WSL 1 distro. Rancher Desktop supports only WSL 2 distros. You can convert your WSL 1 distro into a WSL 2 distro by running the command ",(0,t.jsx)(n.code,{children:"wsl --set-version <distro-name> 2"}),". You can also run the command ",(0,t.jsx)(n.code,{children:"wsl --set-default-version 2"})," to set all the future distributions you might install to use WSL 2."]}),"\n",(0,t.jsxs)(n.h4,{id:"q-i-do-not-see-an-entry-for-rancher-desktop-when-running-kubectl-config-get-contexts-where-is-it",children:["Q: I do not see an entry for Rancher Desktop when running ",(0,t.jsx)(n.code,{children:"kubectl config get-contexts"}),", where is it?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," Rancher Desktop places its configuration in the default location, ",(0,t.jsx)(n.code,{children:"~/.kube/config,"})," and uses that. Your ",(0,t.jsx)(n.code,{children:"KUBECONFIG"})," environment variable may be set to look elsewhere for configuration files."]}),"\n",(0,t.jsxs)(n.h4,{id:"q-rancher-desktop-is-stuck-on-waiting-for-kubernetes-api-what-do-i-do",children:["Q: Rancher Desktop is stuck on ",(0,t.jsx)(n.code,{children:"Waiting for Kubernetes API"}),", what do I do?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," The cause is hard to determine without additional information. Navigate to the Troubleshooting tab and use the button to access the logs. Then go to the ",(0,t.jsx)(n.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/issues",children:"Rancher Desktop GitHub"})," page and file an issue with the logs attached."]}),"\n",(0,t.jsxs)(n.h4,{id:"q-i-can-no-longer-run-docker-compose-after-installing-rancher-desktop-and-uninstalling-docker-desktop-what-happened",children:["Q: I can no longer run ",(0,t.jsx)(n.code,{children:"docker compose"})," after installing Rancher Desktop and uninstalling Docker Desktop, what happened?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," This was an issue related to earlier versions (prior to 1.1.0) of Rancher Desktop.  Rancher Desktop version 1.1.0 and above comes bundled with ",(0,t.jsx)(n.code,{children:"docker-compose"})," for you, and makes the cli plugins available at ",(0,t.jsx)(n.code,{children:"~/.docker/cli-plugins"}),". We strongly recommend you to be on the latest version of Rancher Desktop."]}),"\n",(0,t.jsxs)(n.p,{children:["If you still don't see ",(0,t.jsx)(n.code,{children:"docker-compose"})," available then please file a bug on ",(0,t.jsx)(n.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/issues/new?assignees=&labels=kind%2Fbug&template=bug_report.yml",children:"Github"}),"."]}),"\n",(0,t.jsxs)(n.h4,{id:"q-im-using-homebrew-to-install-rancher-desktop-but-brew-install-rancher-desktop-is-failing-why",children:["Q: I'm using Homebrew to install Rancher Desktop, but ",(0,t.jsx)(n.code,{children:"brew install rancher-desktop"})," is failing, why?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," Due to the Homebrew cask naming conventions, the ",(0,t.jsx)(n.code,{children:"-desktop"})," suffix is dropped from the cask formula name. Use ",(0,t.jsx)(n.code,{children:"brew install rancher"})," instead."]}),"\n",(0,t.jsxs)(n.h4,{id:"q-how-do-i-fix-permission-denied-errors-when-trying-to-use-docker-on-wsl",children:["Q: How do I fix ",(0,t.jsx)(n.code,{children:"permission denied"})," errors when trying to use Docker on WSL?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," You need write-permission to access the docker socket. There are many ways to go about that, but this is one of the more common approaches. Using the Ubuntu WSL command-line:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo groupadd docker\nsudo adduser $USER docker\nsudo chown root:docker /var/run/docker.sock\nsudo chmod g+w /var/run/docker.sock\nnewgrp docker\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"q-how-do-i-fix-kubectl-command-not-found-issue-on-linux",children:["Q: How do I fix ",(0,t.jsx)(n.code,{children:"kubectl: command not found"})," issue on Linux?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," By default, Rancher Desktop creates symlinks of ",(0,t.jsx)(n.code,{children:"kubectl"}),", ",(0,t.jsx)(n.code,{children:"docker"}),", ",(0,t.jsx)(n.code,{children:"helm"})," and ",(0,t.jsx)(n.code,{children:"nerdctl"})," binaries in the ",(0,t.jsx)(n.code,{children:"/home/<user>/.local/bin"})," directory on Linux. To be able to call these commands directly from the console you may add the directory to your ",(0,t.jsx)(n.code,{children:"PATH"})," environment variable by executing the following command in console and performing logout and login:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo "export PATH=\\$PATH:/home/$(whoami)/.local/bin" >> ~/.bashrc\n'})}),"\n",(0,t.jsxs)(n.h4,{id:"q-how-do-i-fix-fata0005-subnet-1040024-overlaps-with-other-one-on-this-address-space-when-running-a-container-using-nerdctl-run",children:["Q: How do I fix ",(0,t.jsx)(n.code,{children:"FATA[0005] subnet 10.4.0.0/24 overlaps with other one on this address space"})," when running a container using ",(0,t.jsx)(n.code,{children:"nerdctl run"}),"?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," You will see this error if there's a route rule with an IP address from a conflicting subnet on the Iptables. The conflicting routes could be either from the host network (bridge mode) or the Kubernetes network. A quick workaround to this issue is to shutdown WSL via the command ",(0,t.jsx)(n.code,{children:"wsl --shutdown"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["\u26a0\ufe0f"," Please note that shutting down WSL will stop all other distros along with the ",(0,t.jsx)(n.code,{children:"rancher-desktop"})," distro."]})}),"\n",(0,t.jsxs)(n.h4,{id:"q-how-do-i-fix-the-installation-aborted-error-while-downgrading-from-an-existing-msi-installation-to-an-older-exe-version-16x-or-earlier-on-windows",children:["Q: How do I fix the ",(0,t.jsx)(n.code,{children:"Installation Aborted"})," error while downgrading from an existing MSI installation to an older EXE version (1.6.x or earlier) on Windows?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," You will see this error if the Windows registry key ",(0,t.jsx)(n.code,{children:"HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Services\\EventLog\\Application\\RancherDesktopPrivilegedService"})," that is supposed to be deleted during the MSI uninstallation process is not deleted for some reason. Please manually delete the registry key and try installing the EXE version. You can run the below command in a privileged shell to delete the registry key."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"reg.exe delete HKLM\\System\\CurrentControlSet\\Services\\EventLog\\Application\\RancherDesktopPrivilegedService /reg:64 /f\n"})}),"\n",(0,t.jsx)(n.h4,{id:"q-why-do-i-see-a-blank-screen-when-i-launch-the-cluster-dashboard",children:"Q: Why do I see a blank screen when I launch the Cluster Dashboard?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," The Cluster Dashboard may not be running correctly because another process on your machine is using ports ",(0,t.jsx)(n.code,{children:"9080"})," or ",(0,t.jsx)(n.code,{children:"9443"})," that the Dashboard process (",(0,t.jsx)(n.code,{children:"steve"}),") depends on. To solve this, identify and terminate the process using those ports. You can use the command below to identify processes using a specific port on your host machine. Note that on macOS and Linux, the Rancher Dashboard process is named ",(0,t.jsx)(n.code,{children:"steve"}),", while on Windows, it's ",(0,t.jsx)(n.code,{children:"steve.exe"}),". If ",(0,t.jsx)(n.code,{children:"steve"})," is the only process using ports 9080 or 9443, do not terminate it."]}),"\n",(0,t.jsx)(n.p,{children:"Command to find processes using a specific port."}),"\n",(0,t.jsxs)(s.Z,{groupId:"os",children:[(0,t.jsx)(i.Z,{value:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"netstat -ano | findstr :9443\n"})})}),(0,t.jsx)(i.Z,{value:"macOS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"lsof -nP -iTCP -sTCP:LISTEN | grep 9443\n"})})}),(0,t.jsx)(i.Z,{value:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"lsof -nP -iTCP -sTCP:LISTEN | grep 9443\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},93687:function(e,n,o){var t=o(10412);const r=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",a=r?"macOS":s?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:a,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,n,o){o.d(n,{Z:function(){return i}});o(67294);var t=o(34334),r={tabItem:"tabItem_Ymn6"},s=o(85893);function i(e){let{children:n,hidden:o,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,i),hidden:o,children:n})}},74866:function(e,n,o){o.d(n,{Z:function(){return j}});var t=o(67294),r=o(34334),s=o(12466),i=o(16550),a=o(20469),l=o(91980),c=o(67392),d=o(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:o}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:o,attributes:t,default:r}}=e;return{value:n,label:o,attributes:t,default:r}}))}(o);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function p(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:o}=e;const r=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,l._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:o=!1,groupId:r}=e,s=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=o.find((e=>e.default))??o[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=g({queryString:o,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Nk)(o);return[r,(0,t.useCallback)((e=>{o&&s.set(e)}),[o,s])]}({groupId:r}),m=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=o(72389),m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},w=o(85893);function x(e){let{className:n,block:o,selectedValue:t,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,o=l.indexOf(n),r=a[o].value;r!==t&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;n=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;n=l[o]??l[l.length-1];break}}n?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},n),children:a.map((e=>{let{value:n,label:o,attributes:s}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":t===n}),children:o??n},n)}))})}function v(e){let{lazy:n,children:o,selectedValue:r}=e;const s=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=f(e);return(0,w.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,w.jsx)(x,{...e,...n}),(0,w.jsx)(v,{...e,...n})]})}function j(e){const n=(0,b.Z)();return(0,w.jsx)(k,{...e,children:u(e.children)},String(n))}},11151:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return i}});var t=o(67294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);