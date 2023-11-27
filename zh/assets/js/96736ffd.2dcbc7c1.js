"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[2465],{19705:function(e,t,s){s.r(t),s.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=s(85893),r=s(11151),a=s(93687);const i={title:"Using Testcontainers on Rancher Desktop"},o=void 0,c={id:"how-to-guides/using-testcontainers",title:"Using Testcontainers on Rancher Desktop",description:"Rancher Desktop can be used with Testcontainers to execute ephemeral tests and containers that work inside Docker. This guide demonstrates the use of Testcontainers with a sample repository.",source:"@site/versioned_docs/version-1.10/how-to-guides/using-testcontainers.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/using-testcontainers",permalink:"/zh/1.10/how-to-guides/using-testcontainers",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.10/how-to-guides/using-testcontainers.md",tags:[],version:"1.10",frontMatter:{title:"Using Testcontainers on Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"Using the Traefik Ingress Controller",permalink:"/zh/1.10/how-to-guides/traefik-ingress-example"},next:{title:"\u67b6\u6784",permalink:"/zh/1.10/references/architecture"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"QEMU",id:"qemu",level:4},{value:"VZ",id:"vz",level:4}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Details:s,Head:i,TabItem:o,Tabs:c}=t;return s||p("Details",!0),i||p("Head",!0),o||p("TabItem",!0),c||p("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/using-testcontainers"})}),"\n","\n","\n",(0,n.jsxs)(t.p,{children:["Rancher Desktop can be used with ",(0,n.jsx)(t.a,{href:"https://testcontainers.com/",children:"Testcontainers"})," to execute ephemeral tests and containers that work inside Docker. This guide demonstrates the use of Testcontainers with a sample repository."]}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://testcontainers.com/",children:"Testcontainers"})," can only be used with the ",(0,n.jsx)(t.code,{children:"moby (dockerd)"})," runtime as it requires a Docker-API compatible container runtime. Kubernetes must be disabled for machines on Apple Silicon. The setting can be disabled via the ",(0,n.jsx)(t.strong,{children:"Preferences > Kubernetes"})," dialog, or by using the ",(0,n.jsx)(t.code,{children:"rdctl"})," command below:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"rdctl set --kubernetes-enabled=false\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Please also ensure that ",(0,n.jsx)(t.a,{href:"https://maven.apache.org/install.html",children:"Apache Maven"})," is installed on your machine in order to make use of the ",(0,n.jsx)(t.a,{href:"https://maven.apache.org/run-maven/index.html",children:(0,n.jsx)(t.code,{children:"mvn verify"})})," command."]}),"\n",(0,n.jsxs)(c,{groupId:"os",defaultValue:a.Z.defaultOs,children:[(0,n.jsxs)(o,{value:"Linux",children:[(0,n.jsxs)(t.p,{children:["You can download a sample test repository in the ",(0,n.jsx)(t.code,{children:"testcontainers-java-repro"})," located here: ",(0,n.jsx)(t.a,{href:"https://github.com/testcontainers/testcontainers-java-repro",children:"https://github.com/testcontainers/testcontainers-java-repro"})]}),(0,n.jsxs)(t.p,{children:["After the repository is downloaded, please navigate to the ",(0,n.jsx)(t.code,{children:"testcontainers-java-repro"})," folder and run the command ",(0,n.jsx)(t.code,{children:"mvn verify"}),"."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"mvn verify\n"})}),(0,n.jsxs)(t.p,{children:["After the command has been run, you should see a ",(0,n.jsx)(t.code,{children:"BUILD SUCCESS"})," with test statistics for failures, number of tests ran, skipped tests, time elapsed, and errors."]})]}),(0,n.jsxs)(o,{value:"macOS",children:[(0,n.jsxs)(t.p,{children:["You can download a sample test repository in the ",(0,n.jsx)(t.code,{children:"testcontainers-java-repro"})," located here: ",(0,n.jsx)(t.a,{href:"https://github.com/testcontainers/testcontainers-java-repro",children:"https://github.com/testcontainers/testcontainers-java-repro"})]}),(0,n.jsxs)(c,{groupId:"os",children:[(0,n.jsxs)(o,{value:"Apple Silicon",children:[(0,n.jsx)(t.p,{children:"Currently, workarounds are needed for using Testcontainers on macOS M1 machines. Below are methods for using Testcontainers on either runtime, depending on administrative access."}),(0,n.jsx)(t.h4,{id:"qemu",children:(0,n.jsx)(t.a,{href:"https://docs.rancherdesktop.io/ui/preferences/virtual-machine/emulation#qemu",children:"QEMU"})}),(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Workaround Summary"}),(0,n.jsxs)(t.p,{children:["This runtime can be used with administrative access enabled which can be set via the ",(0,n.jsx)(t.a,{href:"https://docs.rancherdesktop.io/ui/preferences/application/general",children:(0,n.jsx)(t.strong,{children:"Preferences > Application > General"})})," dialog. This will ensure that routable IP's are allocated."]}),(0,n.jsx)(t.p,{children:"Next, export the virtual machine port explicitly using the command below:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'export TESTCONTAINERS_HOST_OVERRIDE=$(rdctl shell ip a show rd0 | awk \'/inet / {sub("/.*",""); print $2}\')\n'})})]}),(0,n.jsx)(t.h4,{id:"vz",children:(0,n.jsx)(t.a,{href:"https://docs.rancherdesktop.io/ui/preferences/virtual-machine/emulation#vz",children:"VZ"})}),(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Workaround Summary"}),(0,n.jsxs)(t.p,{children:["This runtime can be used with administrative access enabled which can be set via the ",(0,n.jsx)(t.a,{href:"https://docs.rancherdesktop.io/ui/preferences/application/general",children:(0,n.jsx)(t.strong,{children:"Preferences > Application > General"})})," dialog. This will ensure that routable IP's are allocated."]}),(0,n.jsx)(t.p,{children:"Next, export the virtual machine port explicitly using the command below:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'export TESTCONTAINERS_HOST_OVERRIDE=$(rdctl shell ip a show vznat | awk \'/inet / {sub("/.*",""); print $2}\')\n'})}),(0,n.jsxs)(t.p,{children:["For ",(0,n.jsx)(t.code,{children:"VZ"})," virtual machines, you can also use Testcontainers without the need for administrative access by exporting the settings below:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'export DOCKER_HOST=unix://$HOME/.rd/docker.sock\nexport TESTCONTAINERS_DOCKER_SOCKET_OVERRIDE=/var/run/docker.sock\nexport TESTCONTAINERS_HOST_OVERRIDE=$(rdctl shell ip a show vznat | awk \'/inet / {sub("/.*",""); print $2}\')\n'})})]}),(0,n.jsxs)(t.p,{children:["After the respective virtual machine settings have been applied, and the repository is downloaded, please navigate to the ",(0,n.jsx)(t.code,{children:"testcontainers-java-repro"})," folder and run the command ",(0,n.jsx)(t.code,{children:"mvn verify"}),"."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"mvn verify\n"})}),(0,n.jsxs)(t.p,{children:["After the command has been run, you should see a ",(0,n.jsx)(t.code,{children:"BUILD SUCCESS"})," with test statistics for failures, number of tests ran, skipped tests, time elapsed, and errors."]})]}),(0,n.jsxs)(o,{value:"Intel",children:[(0,n.jsxs)(t.p,{children:["After the repository is downloaded, please navigate to the ",(0,n.jsx)(t.code,{children:"testcontainers-java-repro"})," folder and run the command ",(0,n.jsx)(t.code,{children:"mvn verify"}),"."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"mvn verify\n"})}),(0,n.jsxs)(t.p,{children:["After the command has been run, you should see a ",(0,n.jsx)(t.code,{children:"BUILD SUCCESS"})," with test statistics for failures, number of tests ran, skipped tests, time elapsed, and errors."]})]})]})]}),(0,n.jsxs)(o,{value:"Windows",children:[(0,n.jsxs)(t.p,{children:["You can download a sample test repository in the ",(0,n.jsx)(t.code,{children:"testcontainers-java-repro"})," located here: ",(0,n.jsx)(t.a,{href:"https://github.com/testcontainers/testcontainers-java-repro",children:"https://github.com/testcontainers/testcontainers-java-repro"})]}),(0,n.jsxs)(t.p,{children:["After the repository is downloaded, please navigate to the ",(0,n.jsx)(t.code,{children:"testcontainers-java-repro"})," folder and run the command ",(0,n.jsx)(t.code,{children:"mvn verify"}),"."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"mvn verify\n"})}),(0,n.jsxs)(t.p,{children:["After the command has been run, you should see a ",(0,n.jsx)(t.code,{children:"BUILD SUCCESS"})," with test statistics for failures, number of tests ran, skipped tests, time elapsed, and errors."]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,t,s){var n=s(10412);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),a=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macOS":a?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return i}});var n=s(67294);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);