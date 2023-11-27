"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[2566],{16662:function(e,n,t){t.r(n),t.d(n,{assets:function(){return a},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var s=t(85893),r=t(11151);const i={title:"Command Reference: rdctl"},l=void 0,o={id:"references/rdctl-command-reference",title:"Command Reference: rdctl",description:"rdctl is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. rdctl is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of rdctl supports the below commands (with support for more commands to be added in upcoming releases):",source:"@site/versioned_docs/version-1.11/references/rdctl-command-reference.md",sourceDirName:"references",slug:"/references/rdctl-command-reference",permalink:"/1.11/references/rdctl-command-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.11/references/rdctl-command-reference.md",tags:[],version:"1.11",frontMatter:{title:"Command Reference: rdctl"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/1.11/references/architecture"},next:{title:"Bundled Utilities",permalink:"/1.11/references/bundled-utilities"}},a={},c=[{value:"rdctl or rdctl help",id:"rdctl-or-rdctl-help",level:2},{value:"rdctl api",id:"rdctl-api",level:2},{value:"rdctl api /vX",id:"rdctl-api-vx",level:2},{value:"rdctl api /v0/settings",id:"rdctl-api-v0settings",level:2},{value:"rdctl create-profile",id:"rdctl-create-profile",level:2},{value:"rdctl extension install",id:"rdctl-extension-install",level:2},{value:"rdctl extension ls",id:"rdctl-extension-ls",level:2},{value:"rdctl extension uninstall",id:"rdctl-extension-uninstall",level:2},{value:"rdctl list-settings",id:"rdctl-list-settings",level:2},{value:"rdctl set",id:"rdctl-set",level:2},{value:"rdctl shutdown",id:"rdctl-shutdown",level:2},{value:"rdctl snapshot",id:"rdctl-snapshot",level:2},{value:"rdctl start",id:"rdctl-start",level:2},{value:"rdctl version",id:"rdctl-version",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:t,Head:i,TabItem:l,Tabs:o}=n;return t||p("Details",!0),i||p("Head",!0),l||p("TabItem",!0),o||p("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/references/rdctl-command-reference"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"rdctl"})," is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. ",(0,s.jsx)(n.code,{children:"rdctl"})," is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of ",(0,s.jsx)(n.code,{children:"rdctl"})," supports the below commands (with support for more commands to be added in upcoming releases):"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["As the current version of ",(0,s.jsx)(n.code,{children:"rdctl"})," is experimental, all subcommand names, their arguments, and their output are still subject to change."]})}),"\n",(0,s.jsxs)(n.admonition,{title:"warning",type:"caution",children:[(0,s.jsx)(n.p,{children:"The Rancher Desktop application must be running for the following commands:"}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Command List"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"rdctl list-settings"}),"\n",(0,s.jsx)(n.li,{children:"rdctl set"}),"\n",(0,s.jsx)(n.li,{children:"rdctl shutdown"}),"\n"]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For many ",(0,s.jsx)(n.code,{children:"rdctl"})," commands, there are corresponding ",(0,s.jsx)(n.code,{children:"API"})," calls that can be applied. Listed below are the available commands shown in both formats. The ",(0,s.jsx)(n.code,{children:"api"})," examples will assume ",(0,s.jsx)(n.code,{children:"curl"})," as the tool being used to talk to the API."]})}),"\n",(0,s.jsx)(n.h2,{id:"rdctl-or-rdctl-help",children:"rdctl or rdctl help"}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"rdctl"})," or ",(0,s.jsx)(n.code,{children:"rdctl help"})," to see the list of available commands."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Example Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-autoupdate=true",children:'> rdctl help\nThe eventual goal of this CLI is to enable any UI-based operation to be done from the command-line as well.\n\nUsage:\n  rdctl [command]\n\nAvailable Commands:\n  api           Run API endpoints directly\n  completion    Generate the autocompletion script for the specified shell\n  factory-reset Clear all the Rancher Desktop state and shut it down.\n  help          Help about any command\n  list-settings Lists the current settings.\n  set           Update selected fields in the Rancher Desktop UI and restart the backend.\n  shell         Run an interactive shell or a command in a Rancher Desktop-managed VM\n  shutdown      Shuts down the running Rancher Desktop application\n  start         Start up Rancher Desktop, or update its settings.\n  version       Shows the CLI version.\n\nFlags:\n      --config-path string   config file (default /Users/jan/Library/Application Support/rancher-desktop/rd-engine.json)\n  -h, --help                 help for rdctl\n      --host string          default is localhost; most useful for WSL\n      --password string      overrides the password setting in the config file\n      --port string          overrides the port setting in the config file\n      --user string          overrides the user setting in the config file\n\nUse "rdctl [command] --help" for more information about a command.\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"rdctl-api",children:"rdctl api"}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"rdctl api /"})," to list all endpoints globally."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Example Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl api / | jq -r .[]\nGET /\nGET /v0\nGET /v1\nGET /v1/about\nGET /v1/diagnostic_categories\nGET /v1/diagnostic_checks\nPOST /v1/diagnostic_checks\nGET /v1/diagnostic_ids\nPUT /v1/factory_reset\nPUT /v1/propose_settings\nGET /v1/settings\nPUT /v1/settings\nPUT /v1/shutdown\nGET /v1/transient_settings\nPUT /v1/transient_settings\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"rdctl-api-vx",children:"rdctl api /vX"}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"rdctl api /v1"})," to list all endpoints in version 1."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Example Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl api /v1 | jq -r .[]\nGET /v1\nGET /v1/about\nGET /v1/diagnostic_categories\nGET /v1/diagnostic_checks\nPOST /v1/diagnostic_checks\nGET /v1/diagnostic_ids\nPUT /v1/factory_reset\nPUT /v1/propose_settings\nGET /v1/settings\nPUT /v1/settings\nPUT /v1/shutdown\nGET /v1/transient_settings\nPUT /v1/transient_settings\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"rdctl-api-v0settings",children:"rdctl api /v0/settings"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"rdctl api [endpoints]"})," are commands that are most useful for users working directly with the API itself, and therefore they would not be for everyday use, such as ",(0,s.jsx)(n.code,{children:"rdctl set"})," might be. For example,"]}),"\n",(0,s.jsx)(n.p,{children:"a command such as"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'rdctl api /v0/settings --method PUT --body \'{"kubernetes": {"enabled": false}}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"is the same as"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"rdctl set --kubernetes-enabled=false\n"})}),"\n",(0,s.jsx)(n.p,{children:"but less concise and user-friendly."}),"\n",(0,s.jsx)(n.h2,{id:"rdctl-create-profile",children:"rdctl create-profile"}),"\n",(0,s.jsxs)(n.p,{children:["Generates a deployment profile for Rancher Desktop settings in either macOS ",(0,s.jsx)(n.code,{children:".plist"})," or Windows ",(0,s.jsx)(n.code,{children:".reg"})," format."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"rdctl create-profile <options> <options-input>\n"})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Options & Example Command"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Options"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"--input [FILE]              File containing a JSON document.\n--body [JSON]               Command-line option containing a JSON document\n--from-settings             Use current settings.\n--output [plist, reg]       An output of .plist files for macOS and .reg files for Windows.\n\nAdditional options for --output reg:\n--type [locked, defaults]   The locked field is set as default, otherwise the default type can be specified.\n--hive [hklm, hkcu]         The hklm field is set as default, otherwise hkcu can be specified.\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"rdctl create-profile --output reg --hive=Hkcu --from-settings\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"rdctl-extension-install",children:"rdctl extension install"}),"\n",(0,s.jsx)(n.p,{children:"Installs a Rancher Desktop extension."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"rdctl extension install <image-id>\n"})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Options & Example Output"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Options"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--force               Avoids any interactivity.\n<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl extension install docker/logs-explorer-extension:0.2.2\nInstalling image docker/logs-explorer-extension:0.2.2\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"rdctl-extension-ls",children:"rdctl extension ls"}),"\n",(0,s.jsx)(n.p,{children:"Lists currently installed images."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"rdctl extension ls\n"})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Example Output"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl extension ls\nExtension IDs\n\ndocker/logs-explorer-extension:0.2.2\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"rdctl-extension-uninstall",children:"rdctl extension uninstall"}),"\n",(0,s.jsx)(n.p,{children:"Uninstalls a Rancher Desktop extension."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"rdctl extension uninstall <image-id>\n"})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Options & Example Output"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Options"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl extension uninstall docker/logs-explorer-extension:0.2.2\nUninstalling image docker/logs-explorer-extension:0.2.2: Deleted docker/logs-explorer-extension:0.2.2\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"rdctl-list-settings",children:"rdctl list-settings"}),"\n",(0,s.jsxs)(o,{groupId:"command-reference",children:[(0,s.jsxs)(l,{value:"CLI",default:!0,children:[(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"rdctl list-settings"})," to see the current active configuration."]}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Options & Example Output"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Options"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-autoupdate=true",children:"> rdctl list-settings --help \nLists the current settings in JSON format.\n\nUsage:\n  rdctl list-settings [flags]\n\nFlags:\n  -h, --help   help for list-settings\n\nGlobal Flags:\n      --config-path string   config file (default /Users/{username}/Library/Application Support/rancher-desktop/rd-engine.json)\n      --host string          default is localhost; most useful for WSL\n      --password string      overrides the password setting in the config file\n      --port string          overrides the port setting in the config file\n      --user string          overrides the user setting in the config file\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-autoupdate=true",children:'> rdctl list-settings\n{\n  "version": 6,\n  "application": {\n    "adminAccess": false,\n    "pathManagementStrategy": "rcfiles",\n    "updater": {\n      "enabled": false\n    },\n    "debug": false,\n    "telemetry": {\n      "enabled": true\n    },\n    "autoStart": false,\n    "startInBackground": false,\n    "hideNotificationIcon": false,\n    "window": {\n      "quitOnClose": false\n    }\n  },\n  "virtualMachine": {\n    "memoryInGB": 6,\n    "numberCPUs": 2,\n    "hostResolver": true\n  },\n  "WSL": {\n    "integrations": {}\n  },\n  "containerEngine": {\n    "allowedImages": {\n      "enabled": false,\n      "patterns": [\n        "docker.io"\n      ]\n    },\n    "name": "moby"\n  },\n  "kubernetes": {\n    "version": "",\n    "port": 6443,\n    "enabled": false,\n    "options": {\n      "traefik": true,\n      "flannel": true\n    },\n    "ingress": {\n      "localhostOnly": false\n    }\n  },\n  "portForwarding": {\n    "includeKubernetesServices": false\n  },\n  "images": {\n    "showAll": true,\n    "namespace": "k8s.io"\n  },\n  "diagnostics": {\n    "showMuted": false,\n    "mutedChecks": {}\n  },\n  "experimental": {\n    "virtualMachine": {\n      "type": "qemu",\n      "useRosetta": false,\n      "socketVMNet": false,\n      "mount": {\n        "type": "reverse-sshfs",\n        "9p": {\n          "securityModel": "none",\n          "protocolVersion": "9p2000.L",\n          "msizeInKB": 128,\n          "cacheMode": "mmap"\n        }\n      },\n      "networkingTunnel": false\n    }\n  },\n  "extensions": {\n    "docker/logs-explorer-extension:0.2.2": true\n  }\n}\n\n'})})]})]}),(0,s.jsxs)(l,{value:"API",default:!0,children:[(0,s.jsx)(n.p,{children:"Run the following API call to see the current active configuration:"}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Example Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -X GET\n'})})]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Using ",(0,s.jsx)(n.code,{children:"-X GET"})," is optional. You could also just use the preceding command by itself."]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"rdctl-set",children:"rdctl set"}),"\n",(0,s.jsxs)(o,{groupId:"command-reference",children:[(0,s.jsxs)(l,{value:"CLI",default:!0,children:[(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"rdctl set [flags]"})," to set properties. In most of the cases, Kubernetes would be reset on running the ",(0,s.jsx)(n.code,{children:"set"})," command. You can set multiple properties by chaining in a single command. See some examples below."]}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Example Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"> rdctl set --kubernetes-enabled=false\n> rdctl set --container-engine docker --kubernetes-version 1.21.2\n"})})]})]}),(0,s.jsxs)(l,{value:"API",default:!0,children:[(0,s.jsx)(n.p,{children:"Run the following API call to set properties:"}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Example Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -d \'{ "kubernetes": { "containerEngine": "docker", "enabled": false, "version":"1.23.5" }}\' -X PUT\n'})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"rdctl-shutdown",children:"rdctl shutdown"}),"\n",(0,s.jsxs)(o,{groupId:"command-reference",children:[(0,s.jsxs)(l,{value:"CLI",default:!0,children:[(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"rdctl shutdown"})," to gracefully shut down Rancher Desktop."]}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Example Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"> rdctl shutdown\nShutting down.\n"})})]})]}),(0,s.jsxs)(l,{value:"API",default:!0,children:[(0,s.jsx)(n.p,{children:"Run the following API call to shut down Rancher Desktop:"}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Example Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'shutdown: curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/shutdown -X PUT\n'})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"rdctl-snapshot",children:"rdctl snapshot"}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"rdctl snapshot"})," to store the current configuration of your virtual machine and all associated settings as a snapshot."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Options & Example Commands"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Options"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'Usage:\n  rdctl snapshot [command]\n\nAvailable Commands:\n  create      Create a snapshot\n  delete      Delete a snapshot\n  list        List snapshots\n  restore     Restore a snapshot\n  unlock      Remove snapshot lock\n\nFlags:\n  -h, --help   help for snapshot\n\nGlobal Flags:\n      --config-path string   config file (default /Users/[username]/Library/Application Support/rancher-desktop/rd-engine.json)\n      --host string          default is 127.0.0.1; most useful for WSL\n      --password string      overrides the password setting in the config file\n      --port string          overrides the port setting in the config file\n      --user string          overrides the user setting in the config file\n\nUse "rdctl snapshot [command] --help" for more information about a command.\n'})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl snapshot create example_snapshot\n$ rdctl snapshot delete example_snapshot\n$ rdctl snapshot list --json\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"rdctl-start",children:"rdctl start"}),"\n",(0,s.jsxs)(o,{groupId:"command-reference",children:[(0,s.jsxs)(l,{value:"CLI",default:!0,children:[(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"rdctl start"})," to ensure that Rancher Desktop is running and configured as requested."]}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Options & Example Command"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Options:"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Usage:\n  rdctl start [flags]\n\nFlags:\n      --application.admin-access                                        enable privileged operations\n      --application.auto-start                                          start app when logging in\n      --application.debug                                               generate more verbose logging\n      --application.hide-notification-icon                              don't show notification icon\n      --application.path-management-strategy string                     update PATH to include ~/.rd/bin (allowed values: [manual, rcfiles])\n      --application.start-in-background                                 start app without window\n      --application.telemetry.enabled                                   allow collection of anonymous statistics\n      --application.updater.enabled                                     automatically update to the latest release\n      --application.window.quit-on-close                                terminate app when the main window is closed\n      --container-engine.allowed-images.enabled                         only allow images to be pulled that match the allowed patterns\n      --container-engine.name string                                    set engine (allowed values: [containerd, docker, moby])\n      --diagnostics.show-muted                                          unhide muted diagnostics\n      --experimental.virtual-machine.mount.9p.cache-mode string         (allowed values: [none, loose, fscache, mmap])\n      --experimental.virtual-machine.mount.9p.msize-in-kib int          maximum packet size\n      --experimental.virtual-machine.mount.9p.protocol-version string   (allowed values: [9p2000, 9p2000.u, 9p2000.L])\n      --experimental.virtual-machine.mount.9p.security-model string     (allowed values: [passthrough, mapped-xattr, mapped-file, none])\n      --experimental.virtual-machine.mount.type string                  how directories are shared (allowed values: [reverse-sshfs, 9p, virtiofs])\n      --experimental.virtual-machine.socket-vmnet                       use socket-vmnet instead of vde-vmnet\n      --experimental.virtual-machine.type string                        (allowed values: [qemu, vz])\n      --experimental.virtual-machine.use-rosetta                        \n      -h, --help                                                        help for start\n      --images.namespace string                                         select only images from this namespace (containerd only)\n      --images.show-all                                                 show system images on Images page\n      --kubernetes.enabled                                              run Kubernetes\n      --kubernetes.options.flannel                                      use flannel networking; disable to install your own CNI\n      --kubernetes.options.traefik                                      install and run traefik\n      --kubernetes.port int                                             apiserver port\n      --kubernetes.version string                                       choose which version of Kubernetes to run\n      --no-modal-dialogs                                                avoid displaying dialog boxes\n      -p, --path string                                                 path to main executable\n      --port-forwarding.include-kubernetes-services                     show Kubernetes system services on Port Forwarding page\n      --virtual-machine.memory-in-gb int                                reserved RAM size\n      --virtual-machine.number-cpus int                                 reserved number of CPUs\n\nGlobal Flags:\n      --config-path string   config file (default /Users/{username}/Library/Application Support/rancher-desktop/rd-engine.json)\n      --host string          default is localhost; most useful for WSL\n      --password string      overrides the password setting in the config file\n      --port string          overrides the port setting in the config file\n      --user string          overrides the user setting in the config file\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"> rdctl start --container-runtime dockerd -- kubernetes-version 1.19.3\n"})})]})]}),(0,s.jsxs)(l,{value:"API",default:!0,children:[(0,s.jsx)(n.p,{children:"Run the following API call to ensure Rancher Desktop is running and configured, making sure to fill in your respective user and password values:"}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Example Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl -s -H "Authorization: Basic $(echo -n "user:PASSWORD" | base64)"\n'})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"rdctl-version",children:"rdctl version"}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"rdctl version"})," to see the current rdctl CLI version."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Example Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-autoupdate=true",children:"> rdctl version\nrdctl client version: 1.1.0, targeting server version: v1\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(67294);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);