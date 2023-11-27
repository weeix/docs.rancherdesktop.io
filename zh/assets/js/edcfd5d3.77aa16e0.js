"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7093],{56696:function(e,n,s){s.r(n),s.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return o}});var t=s(85893),r=s(11151);const i={title:"\u547d\u4ee4\u53c2\u8003\uff1ardctl"},l=void 0,c={id:"references/rdctl-command-reference",title:"\u547d\u4ee4\u53c2\u8003\uff1ardctl",description:"rdctl \u662f\u5305\u542b\u5728 Rancher Desktop \u4e2d\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5b83\u80fd\u8ba9\u4f60\u901a\u8fc7\u547d\u4ee4\u884c\u8bbf\u95ee GUI \u529f\u80fd\u3002rdctl \u65e8\u5728\u5e2e\u52a9\u7528\u6237\u5b8c\u6210\u811a\u672c\uff08\u7528\u4e8e\u81ea\u52a8\u5316\u3001CI/CD\uff09\u3001\u6545\u969c\u6392\u9664\u3001\u8fdc\u7a0b\u7ba1\u7406\u7b49\u4efb\u52a1\u3002\u5f53\u524d\u7248\u672c\u7684 rdctl \u652f\u6301\u4ee5\u4e0b\u547d\u4ee4\uff08\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u4e2d\u5c06\u652f\u6301\u66f4\u591a\u547d\u4ee4\uff09\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/references/rdctl-command-reference.md",sourceDirName:"references",slug:"/references/rdctl-command-reference",permalink:"/zh/references/rdctl-command-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/references/rdctl-command-reference.md",tags:[],version:"latest",frontMatter:{title:"\u547d\u4ee4\u53c2\u8003\uff1ardctl"},sidebar:"tutorialSidebar",previous:{title:"\u67b6\u6784",permalink:"/zh/references/architecture"},next:{title:"\u6346\u7ed1\u7684\u5b9e\u7528\u7a0b\u5e8f",permalink:"/zh/references/bundled-utilities"}},d={},o=[{value:"rdctl \u6216 rdctl help",id:"rdctl-\u6216-rdctl-help",level:2},{value:"rdctl api",id:"rdctl-api",level:2},{value:"rdctl api /vX",id:"rdctl-api-vx",level:2},{value:"rdctl api /v0/settings",id:"rdctl-api-v0settings",level:2},{value:"rdctl create-profile",id:"rdctl-create-profile",level:2},{value:"rdctl extension install",id:"rdctl-extension-install",level:2},{value:"rdctl extension ls",id:"rdctl-extension-ls",level:2},{value:"rdctl extension uninstall",id:"rdctl-extension-uninstall",level:2},{value:"rdctl list-settings",id:"rdctl-list-settings",level:2},{value:"rdctl set",id:"rdctl-set",level:2},{value:"rdctl shutdown",id:"rdctl-shutdown",level:2},{value:"rdctl start",id:"rdctl-start",level:2},{value:"rdctl version",id:"rdctl-version",level:2}];function a(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:s,TabItem:i,Tabs:l}=n;return s||p("Details",!0),i||p("TabItem",!0),l||p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"rdctl"})," \u662f\u5305\u542b\u5728 Rancher Desktop \u4e2d\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5b83\u80fd\u8ba9\u4f60\u901a\u8fc7\u547d\u4ee4\u884c\u8bbf\u95ee GUI \u529f\u80fd\u3002",(0,t.jsx)(n.code,{children:"rdctl"})," \u65e8\u5728\u5e2e\u52a9\u7528\u6237\u5b8c\u6210\u811a\u672c\uff08\u7528\u4e8e\u81ea\u52a8\u5316\u3001CI/CD\uff09\u3001\u6545\u969c\u6392\u9664\u3001\u8fdc\u7a0b\u7ba1\u7406\u7b49\u4efb\u52a1\u3002\u5f53\u524d\u7248\u672c\u7684 ",(0,t.jsx)(n.code,{children:"rdctl"})," \u652f\u6301\u4ee5\u4e0b\u547d\u4ee4\uff08\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u4e2d\u5c06\u652f\u6301\u66f4\u591a\u547d\u4ee4\uff09\uff1a"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["\u7531\u4e8e\u5f53\u524d\u7248\u672c\u7684 ",(0,t.jsx)(n.code,{children:"rdctl"})," \u662f\u5b9e\u9a8c\u6027\u7684\uff0c\u56e0\u6b64\u6240\u6709\u5b50\u547d\u4ee4\u7684\u540d\u79f0\u3001\u53c2\u6570\u4ee5\u53ca\u5b83\u4eec\u7684\u8f93\u51fa\u53ef\u80fd\u4f1a\u6539\u53d8\u3002"]})}),"\n",(0,t.jsxs)(n.admonition,{title:"\u8b66\u544a",type:"caution",children:[(0,t.jsx)(n.p,{children:"Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u5fc5\u987b\u4e3a\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c\uff1a"}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u547d\u4ee4\u5217\u8868"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"rdctl list-settings"}),"\n",(0,t.jsx)(n.li,{children:"rdctl set"}),"\n",(0,t.jsx)(n.li,{children:"rdctl shutdown"}),"\n"]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u5f88\u591a ",(0,t.jsx)(n.code,{children:"rdctl"})," \u547d\u4ee4\u90fd\u6709\u5bf9\u5e94\u7684 ",(0,t.jsx)(n.code,{children:"API"})," \u8c03\u7528\u3002\u4e0b\u9762\u5217\u51fa\u4e86\u4e24\u79cd\u683c\u5f0f\u7684\u53ef\u7528\u547d\u4ee4\u3002",(0,t.jsx)(n.code,{children:"api"})," \u793a\u4f8b\u5047\u5b9a\u4f60\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"curl"})," \u4f5c\u4e3a\u4e0e API \u5bf9\u8bdd\u7684\u5de5\u5177\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"rdctl-\u6216-rdctl-help",children:"rdctl \u6216 rdctl help"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"rdctl"})," \u6216 ",(0,t.jsx)(n.code,{children:"rdctl help"})," \u67e5\u770b\u53ef\u7528\u547d\u4ee4\u7684\u5217\u8868\uff1a"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-autoupdate=true",children:'> rdctl help\nThe eventual goal of this CLI is to enable any UI-based operation to be done from the command-line as well.\n\nUsage:\n  rdctl [command]\n\nAvailable Commands:\n  api           Run API endpoints directly\n  completion    Generate the autocompletion script for the specified shell\n  factory-reset Clear all the Rancher Desktop state and shut it down.\n  help          Help about any command\n  list-settings Lists the current settings.\n  set           Update selected fields in the Rancher Desktop UI and restart the backend.\n  shell         Run an interactive shell or a command in a Rancher Desktop-managed VM\n  shutdown      Shuts down the running Rancher Desktop application\n  start         Start up Rancher Desktop, or update its settings.\n  version       Shows the CLI version.\n\nFlags:\n      --config-path string   config file (default /Users/jan/Library/Application Support/rancher-desktop/rd-engine.json)\n  -h, --help                 help for rdctl\n      --host string          default is localhost; most useful for WSL\n      --password string      overrides the password setting in the config file\n      --port string          overrides the port setting in the config file\n      --user string          overrides the user setting in the config file\n\nUse "rdctl [command] --help" for more information about a command.\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"rdctl-api",children:"rdctl api"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"rdctl api /"})," \u5168\u5c40\u5217\u51fa\u6240\u6709\u7aef\u70b9\uff1a"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl api / | jq -r .[]\nGET /\nGET /v0\nGET /v1\nGET /v1/about\nGET /v1/diagnostic_categories\nGET /v1/diagnostic_checks\nPOST /v1/diagnostic_checks\nGET /v1/diagnostic_ids\nPUT /v1/factory_reset\nPUT /v1/propose_settings\nGET /v1/settings\nPUT /v1/settings\nPUT /v1/shutdown\nGET /v1/transient_settings\nPUT /v1/transient_settings\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"rdctl-api-vx",children:"rdctl api /vX"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"rdctl api /v1"})," \u5217\u51fa\u7248\u672c 1 \u4e2d\u7684\u6240\u6709\u7aef\u70b9\uff1a"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl api /v1 | jq -r .[]\nGET /v1\nGET /v1/about\nGET /v1/diagnostic_categories\nGET /v1/diagnostic_checks\nPOST /v1/diagnostic_checks\nGET /v1/diagnostic_ids\nPUT /v1/factory_reset\nPUT /v1/propose_settings\nGET /v1/settings\nPUT /v1/settings\nPUT /v1/shutdown\nGET /v1/transient_settings\nPUT /v1/transient_settings\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"rdctl-api-v0settings",children:"rdctl api /v0/settings"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"rdctl api [endpoints]"})," \u662f\u5bf9\u76f4\u63a5\u4f7f\u7528 API \u7684\u7528\u6237\u6700\u6709\u7528\u7684\u547d\u4ee4\uff0c\u56e0\u6b64\u5b83\u4eec\u4e0d\u9002\u5408\u50cf ",(0,t.jsx)(n.code,{children:"rdctl set"})," \u4e00\u6837\u65e5\u5e38\u4f7f\u7528\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u547d\u4ee4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'rdctl api /v0/settings --method PUT --body \'{"kubernetes": {"enabled": false}}\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0e\u4ee5\u4e0b\u547d\u4ee4\u662f\u4e00\u6837\u7684\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"rdctl set --kubernetes-enabled=false\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ea\u662f\u5b83\u6ca1\u90a3\u4e48\u7b80\u6d01\u548c\u7528\u6237\u53cb\u597d\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"rdctl-create-profile",children:"rdctl create-profile"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5 macOS ",(0,t.jsx)(n.code,{children:".plist"})," \u6216 Windows ",(0,t.jsx)(n.code,{children:".reg"})," \u683c\u5f0f\u4e3a Rancher Desktop \u8bbe\u7f6e\u751f\u6210\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"rdctl create-profile <options> <options-input>\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u9009\u9879\u548c\u793a\u4f8b\u547d\u4ee4"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u9009\u9879"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"--input [FILE]              File containing a JSON document.\n--body [JSON]               Command-line option containing a JSON document\n--from-settings             Use current settings.\n--output [plist, reg]       An output of .plist files for macOS and .reg files for Windows.\n\nAdditional options for --output reg:\n--type [locked, defaults]   The locked field is set as default, otherwise the default type can be specified.\n--hive [hklm, hkcu]         The hklm field is set as default, otherwise hkcu can be specified.\n"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u793a\u4f8b"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"rdctl create-profile --output reg --hive=Hkcu --from-settings\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"rdctl-extension-install",children:"rdctl extension install"}),"\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5 Rancher Desktop \u6269\u5c55\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"rdctl extension install <image-id>\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u9009\u9879 & \u793a\u4f8b\u8f93\u51fa"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u9009\u9879"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"--force               Avoids any interactivity.\n<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.\n"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u793a\u4f8b"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl extension install docker/logs-explorer-extension:0.2.2\nInstalling image docker/logs-explorer-extension:0.2.2\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"rdctl-extension-ls",children:"rdctl extension ls"}),"\n",(0,t.jsx)(n.p,{children:"\u5217\u51fa\u5f53\u524d\u5b89\u88c5\u7684\u955c\u50cf\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"rdctl extension ls\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u793a\u4f8b"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl extension ls\nExtension IDs\n\ndocker/logs-explorer-extension:0.2.2\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"rdctl-extension-uninstall",children:"rdctl extension uninstall"}),"\n",(0,t.jsx)(n.p,{children:"\u5378\u8f7d Rancher Desktop \u6269\u5c55\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"rdctl extension uninstall <image-id>\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u9009\u9879 & \u793a\u4f8b\u8f93\u51fa"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u9009\u9879"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.\n"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u793a\u4f8b"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl extension uninstall docker/logs-explorer-extension:0.2.2\nUninstalling image docker/logs-explorer-extension:0.2.2: Deleted docker/logs-explorer-extension:0.2.2\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"rdctl-list-settings",children:"rdctl list-settings"}),"\n",(0,t.jsxs)(l,{groupId:"command-reference",children:[(0,t.jsxs)(i,{value:"CLI",default:!0,children:[(0,t.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"rdctl list-settings"})," \u4ee5\u67e5\u770b\u5f53\u524d\u7684\u6d3b\u52a8\u914d\u7f6e\uff1a"]}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u9009\u9879 & \u793a\u4f8b\u8f93\u51fa"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u9009\u9879"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-autoupdate=true",children:"> rdctl list-settings --help\nLists the current settings in JSON format.\n\nUsage:\n  rdctl list-settings [flags]\n\nFlags:\n  -h, --help   help for list-settings\n\nGlobal Flags:\n      --config-path string   config file (default /Users/{username}/Library/Application Support/rancher-desktop/rd-engine.json)\n      --host string          default is localhost; most useful for WSL\n      --password string      overrides the password setting in the config file\n      --port string          overrides the port setting in the config file\n      --user string          overrides the user setting in the config file\n"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u793a\u4f8b"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-autoupdate=true",children:'> rdctl list-settings\n{\n  "version": 6,\n  "application": {\n    "adminAccess": false,\n    "pathManagementStrategy": "rcfiles",\n    "updater": {\n      "enabled": false\n    },\n    "debug": false,\n    "telemetry": {\n      "enabled": true\n    },\n    "autoStart": false,\n    "startInBackground": false,\n    "hideNotificationIcon": false,\n    "window": {\n      "quitOnClose": false\n    }\n  },\n  "virtualMachine": {\n    "memoryInGB": 6,\n    "numberCPUs": 2,\n    "hostResolver": true\n  },\n  "WSL": {\n    "integrations": {}\n  },\n  "containerEngine": {\n    "allowedImages": {\n      "enabled": false,\n      "patterns": [\n        "docker.io"\n      ]\n    },\n    "name": "moby"\n  },\n  "kubernetes": {\n    "version": "",\n    "port": 6443,\n    "enabled": false,\n    "options": {\n      "traefik": true,\n      "flannel": true\n    },\n    "ingress": {\n      "localhostOnly": false\n    }\n  },\n  "portForwarding": {\n    "includeKubernetesServices": false\n  },\n  "images": {\n    "showAll": true,\n    "namespace": "k8s.io"\n  },\n  "diagnostics": {\n    "showMuted": false,\n    "mutedChecks": {}\n  },\n  "experimental": {\n    "virtualMachine": {\n      "type": "qemu",\n      "useRosetta": false,\n      "socketVMNet": false,\n      "mount": {\n        "type": "reverse-sshfs",\n        "9p": {\n          "securityModel": "none",\n          "protocolVersion": "9p2000.L",\n          "msizeInKB": 128,\n          "cacheMode": "mmap"\n        }\n      },\n      "networkingTunnel": false\n    }\n  },\n  "extensions": {\n    "docker/logs-explorer-extension:0.2.2": true\n  }\n}\n\n'})})]})]}),(0,t.jsxs)(i,{value:"API",default:!0,children:[(0,t.jsx)(n.p,{children:"\u8c03\u7528\u4ee5\u4e0b API \u4ee5\u67e5\u770b\u5f53\u524d\u7684\u6d3b\u52a8\u914d\u7f6e\uff1a"}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -X GET\n'})})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1a",(0,t.jsx)(n.code,{children:"-X GET"})," \u662f\u53ef\u9009\u7684\u3002\u4f60\u4e5f\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\u524d\u9762\u7684\u547d\u4ee4\u3002"]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"rdctl-set",children:"rdctl set"}),"\n",(0,t.jsxs)(l,{groupId:"command-reference",children:[(0,t.jsxs)(i,{value:"CLI",default:!0,children:[(0,t.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"rdctl set [flags]"})," \u6765\u8bbe\u7f6e\u5c5e\u6027\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cKubernetes \u4f1a\u5728\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"set"})," \u547d\u4ee4\u65f6\u91cd\u7f6e\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u5355\u4e2a\u547d\u4ee4\u4e2d\u4f7f\u7528\u94fe\u63a5\u6765\u8bbe\u7f6e\u591a\u4e2a\u5c5e\u6027\u3002\u4e0b\u9762\u662f\u4e00\u4e9b\u53c2\u8003\u793a\u4f8b\uff1a"]}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"> rdctl set --kubernetes-enabled=false\n> rdctl set --container-engine docker --kubernetes-version 1.21.2\n"})})]})]}),(0,t.jsxs)(i,{value:"API",default:!0,children:[(0,t.jsx)(n.p,{children:"\u8c03\u7528\u4ee5\u4e0b API \u6765\u8bbe\u7f6e\u5c5e\u6027\uff1a"}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -d \'{ "kubernetes": { "containerEngine": "docker", "enabled": false, "version":"1.23.5" }}\' -X PUT\n'})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"rdctl-shutdown",children:"rdctl shutdown"}),"\n",(0,t.jsxs)(l,{groupId:"command-reference",children:[(0,t.jsxs)(i,{value:"CLI",default:!0,children:[(0,t.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"rdctl shutdown"})," \u6765\u6b63\u5e38\u5173\u95ed Rancher Desktop\uff1a"]}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"> rdctl shutdown\nShutting down.\n"})})]})]}),(0,t.jsxs)(i,{value:"API",default:!0,children:[(0,t.jsx)(n.p,{children:"\u8c03\u7528\u4ee5\u4e0b API \u6765\u5173\u95ed Rancher Desktop\uff1a"}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'shutdown: curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/shutdown -X PUT\n'})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"rdctl-start",children:"rdctl start"}),"\n",(0,t.jsxs)(l,{groupId:"command-reference",children:[(0,t.jsxs)(i,{value:"CLI",default:!0,children:[(0,t.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"rdctl start"})," \u6765\u786e\u4fdd Rancher Desktop \u6309\u7167\u8981\u6c42\u8fd0\u884c\u548c\u914d\u7f6e\uff1a"]}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u9009\u9879\u548c\u793a\u4f8b\u547d\u4ee4"}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u9009\u9879"}),"\uff1a"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Usage:\n  rdctl start [flags]\n\nFlags:\n      --application.admin-access                                        enable privileged operations\n      --application.auto-start                                          start app when logging in\n      --application.debug                                               generate more verbose logging\n      --application.hide-notification-icon                              don't show notification icon\n      --application.path-management-strategy string                     update PATH to include ~/.rd/bin (allowed values: [manual, rcfiles])\n      --application.start-in-background                                 start app without window\n      --application.telemetry.enabled                                   allow collection of anonymous statistics\n      --application.updater.enabled                                     automatically update to the latest release\n      --application.window.quit-on-close                                terminate app when the main window is closed\n      --container-engine.allowed-images.enabled                         only allow images to be pulled that match the allowed patterns\n      --container-engine.name string                                    set engine (allowed values: [containerd, docker, moby])\n      --diagnostics.show-muted                                          unhide muted diagnostics\n      --experimental.virtual-machine.mount.9p.cache-mode string         (allowed values: [none, loose, fscache, mmap])\n      --experimental.virtual-machine.mount.9p.msize-in-kib int          maximum packet size\n      --experimental.virtual-machine.mount.9p.protocol-version string   (allowed values: [9p2000, 9p2000.u, 9p2000.L])\n      --experimental.virtual-machine.mount.9p.security-model string     (allowed values: [passthrough, mapped-xattr, mapped-file, none])\n      --experimental.virtual-machine.mount.type string                  how directories are shared (allowed values: [reverse-sshfs, 9p, virtiofs])\n      --experimental.virtual-machine.socket-vmnet                       use socket-vmnet instead of vde-vmnet\n      --experimental.virtual-machine.type string                        (allowed values: [qemu, vz])\n      --experimental.virtual-machine.use-rosetta\n      -h, --help                                                        help for start\n      --images.namespace string                                         select only images from this namespace (containerd only)\n      --images.show-all                                                 show system images on Images page\n      --kubernetes.enabled                                              run Kubernetes\n      --kubernetes.options.flannel                                      use flannel networking; disable to install your own CNI\n      --kubernetes.options.traefik                                      install and run traefik\n      --kubernetes.port int                                             apiserver port\n      --kubernetes.version string                                       choose which version of Kubernetes to run\n      --no-modal-dialogs                                                avoid displaying dialog boxes\n      -p, --path string                                                 path to main executable\n      --port-forwarding.include-kubernetes-services                     show Kubernetes system services on Port Forwarding page\n      --virtual-machine.memory-in-gb int                                reserved RAM size\n      --virtual-machine.number-cpus int                                 reserved number of CPUs\n\nGlobal Flags:\n      --config-path string   config file (default /Users/{username}/Library/Application Support/rancher-desktop/rd-engine.json)\n      --host string          default is localhost; most useful for WSL\n      --password string      overrides the password setting in the config file\n      --port string          overrides the port setting in the config file\n      --user string          overrides the user setting in the config file\n"})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u793a\u4f8b"}),"\uff1a"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"> rdctl start --container-runtime dockerd -- kubernetes-version 1.19.3\n"})})]})]}),(0,t.jsxs)(i,{value:"API",default:!0,children:[(0,t.jsx)(n.p,{children:"\u8c03\u7528\u4ee5\u4e0b API \u6765\u786e\u4fdd Rancher Desktop \u6309\u7167\u8981\u6c42\u8fd0\u884c\u548c\u914d\u7f6e\uff0c\u8bf7\u586b\u5199\u4f60\u7684\u7528\u6237\u548c\u5bc6\u7801\uff1a"}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl -s -H "Authorization: Basic $(echo -n "user:PASSWORD" | base64)"\n'})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"rdctl-version",children:"rdctl version"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"rdctl version"})," \u6765\u67e5\u770b\u5f53\u524d rdctl CLI \u7684\u7248\u672c\uff1a"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\u8f93\u51fa"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-autoupdate=true",children:"> rdctl version\nrdctl client version: 1.1.0, targeting server version: v1\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var t=s(67294);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);