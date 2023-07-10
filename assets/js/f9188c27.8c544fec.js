"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5325],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),k=i,h=c["".concat(s,".").concat(k)]||c[k]||u[k]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7913:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var a=n(3117),i=(n(7294),n(3905));const r={title:"Installation"},o=void 0,l={unversionedId:"getting-started/installation",id:"version-1.6/getting-started/installation",title:"Installation",description:"Rancher Desktop is delivered as a desktop application. You can download it from",source:"@site/versioned_docs/version-1.6/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/1.6/getting-started/installation",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.6/getting-started/installation.md",tags:[],version:"1.6",frontMatter:{title:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/1.6/"},next:{title:"Features",permalink:"/1.6/getting-started/features"}},s={},p=[{value:"macOS",id:"macos",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installing Rancher Desktop on macOS",id:"installing-rancher-desktop-on-macos",level:3},{value:"Uninstalling Rancher Desktop on macOS",id:"uninstalling-rancher-desktop-on-macos",level:3},{value:"Windows",id:"windows",level:2},{value:"Requirements",id:"requirements-1",level:3},{value:"Installing Rancher Desktop on Windows",id:"installing-rancher-desktop-on-windows",level:3},{value:"Uninstalling Rancher Desktop on Windows",id:"uninstalling-rancher-desktop-on-windows",level:3},{value:"Linux",id:"linux",level:2},{value:"Requirements",id:"requirements-2",level:3},{value:"Ensuring You Have Access to <code>/dev/kvm</code>",id:"ensuring-you-have-access-to-devkvm",level:4},{value:"<code>pass</code> Setup",id:"pass-setup",level:4},{value:"Traefik Port Binding Access",id:"traefik-port-binding-access",level:4},{value:"Installation via .deb Package",id:"installation-via-deb-package",level:3},{value:"Uninstalling .deb Package",id:"uninstalling-deb-package",level:3},{value:"Installing via .rpm Package",id:"installing-via-rpm-package",level:3},{value:"Uninstalling .rpm Package",id:"uninstalling-rpm-package",level:3},{value:"Installing via AppImage",id:"installing-via-appimage",level:3},{value:"Uninstalling AppImage",id:"uninstalling-appimage",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/getting-started/installation"})),(0,i.kt)("p",null,"Rancher Desktop is delivered as a desktop application. You can download it from\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/releases"},"releases page on GitHub"),"."),(0,i.kt)("p",null,"When run for the first time or when changing versions, Kubernetes container\nimages are downloaded. It may take a little time to load on first run for a new\nKubernetes version."),(0,i.kt)("p",null,"After Rancher Desktop is installed, users will have access to these supporting utilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubectl/overview/"},"kubectl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/containerd/nerdctl"},"nerdctl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/moby/moby"},"Moby")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose"))),(0,i.kt)("h2",{id:"macos"},"macOS"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"Rancher Desktop requires the following on macOS:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"macOS Catalina 10.15 or higher."),(0,i.kt)("li",{parentName:"ul"},"Apple Silicon (M1) or Intel CPU with VT-x."),(0,i.kt)("li",{parentName:"ul"},"Persistent internet connection.")),(0,i.kt)("p",null,"It is also recommended to have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"8 GB of memory"),(0,i.kt)("li",{parentName:"ul"},"4 CPU")),(0,i.kt)("p",null,"Additional resources may be required depending on the workloads you plan to run."),(0,i.kt)("h3",{id:"installing-rancher-desktop-on-macos"},"Installing Rancher Desktop on macOS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher-sandbox/rancher-desktop/releases"},"releases page")," on GitHub."),(0,i.kt)("li",{parentName:"ol"},"Find the version of Rancher Desktop you want to download."),(0,i.kt)("li",{parentName:"ol"},"Expand the ",(0,i.kt)("strong",{parentName:"li"},"Assets")," section and download ",(0,i.kt)("inlineCode",{parentName:"li"},"Rancher.Desktop-X.Y.Z.dmg"),", where ",(0,i.kt)("inlineCode",{parentName:"li"},"X.Y.Z")," is the version of Rancher Desktop."),(0,i.kt)("li",{parentName:"ol"},"Navigate to the directory where you downloaded the installer to and run the installer. This will usually be the ",(0,i.kt)("inlineCode",{parentName:"li"},"Downloads")," folder."),(0,i.kt)("li",{parentName:"ol"},"Double-click the DMG file."),(0,i.kt)("li",{parentName:"ol"},"In the Finder window that opens, drag the Rancher Desktop icon to the Applications folder."),(0,i.kt)("li",{parentName:"ol"},"Navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Applications")," folder and double-click the Rancher Desktop to launch it.")),(0,i.kt)("p",null,"After Rancher Desktop is installed, users will have access to these supporting utilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubectl/overview/"},"kubectl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/containerd/nerdctl"},"nerdctl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/moby/moby"},"docker (moby)"))),(0,i.kt)("h3",{id:"uninstalling-rancher-desktop-on-macos"},"Uninstalling Rancher Desktop on macOS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},"Finder")," > ",(0,i.kt)("strong",{parentName:"li"},"Applications"),"."),(0,i.kt)("li",{parentName:"ol"},"Find Rancher Desktop."),(0,i.kt)("li",{parentName:"ol"},"Select it and choose ",(0,i.kt)("strong",{parentName:"li"},"File > Move to Trash"),"."),(0,i.kt)("li",{parentName:"ol"},"To delete the app, Finder > Empty Trash.")),(0,i.kt)("h2",{id:"windows"},"Windows"),(0,i.kt)("h3",{id:"requirements-1"},"Requirements"),(0,i.kt)("p",null,"Rancher Desktop requires the following on Windows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows 10 build 1909 or higher. The Home edition is supported."),(0,i.kt)("li",{parentName:"ul"},"Running on a machine with ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/troubleshooting#error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed"},"virtualization capabilities"),"."),(0,i.kt)("li",{parentName:"ul"},"Persistent internet connection.")),(0,i.kt)("p",null,"Rancher Desktop requires ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"Windows Subsystem for Linux")," on Windows; this will\nautomatically be installed as part of the Rancher Desktop setup.  Manually\ndownloading a distribution is not necessary."),(0,i.kt)("p",null,"It is also recommended to have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"8 GB of memory"),(0,i.kt)("li",{parentName:"ul"},"4 CPU")),(0,i.kt)("p",null,"Additional resources may be required depending on the workloads you plan to run."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," You can use Rancher Desktop as a Non-Admin user on a Windows machine. However, an Admin's intervention is required during the installation process for the below components."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WSL2 - ")," You need Admin privileges to install WSL2, which is an essential component of Rancher Desktop."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rancher Desktop Privileged Service - ")," You need Admin privileges to install the Rancher Desktop privileged service, which is required to expose applications/services, running inside containers, on all interfaces on the host machine. However, you can skip the installation of the Rancher Desktop Privileged Service with the limitation that you will not be able to expose applications/services on any interface except ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1"),".")),(0,i.kt)("h3",{id:"installing-rancher-desktop-on-windows"},"Installing Rancher Desktop on Windows"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher-sandbox/rancher-desktop/releases"},"releases page")," on GitHub."),(0,i.kt)("li",{parentName:"ol"},"Find the version of Rancher Desktop you want to download."),(0,i.kt)("li",{parentName:"ol"},"Expand the ",(0,i.kt)("strong",{parentName:"li"},"Assets")," section and download the Windows installer. It will be called ",(0,i.kt)("inlineCode",{parentName:"li"},"Rancher.Desktop.Setup.X.Y.Z.exe"),", where ",(0,i.kt)("inlineCode",{parentName:"li"},"X.Y.Z")," is the version of Rancher Desktop."),(0,i.kt)("li",{parentName:"ol"},"Navigate to the directory where you downloaded the installer to and run the installer. This will usually be the ",(0,i.kt)("inlineCode",{parentName:"li"},"Downloads")," folder."),(0,i.kt)("li",{parentName:"ol"},"Review the License Agreement and click ",(0,i.kt)("strong",{parentName:"li"},"I Agree")," to proceed with the installation."),(0,i.kt)("li",{parentName:"ol"},"When the installation completes, click ",(0,i.kt)("strong",{parentName:"li"},"Finish")," to close the installation wizard.")),(0,i.kt)("h3",{id:"uninstalling-rancher-desktop-on-windows"},"Uninstalling Rancher Desktop on Windows"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the taskbar, click the ",(0,i.kt)("strong",{parentName:"li"},"Start")," menu."),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Settings > Apps > Apps & features"),"."),(0,i.kt)("li",{parentName:"ol"},"Find and select the Rancher Desktop entry."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Uninstall")," and click it again when the confirmation appears."),(0,i.kt)("li",{parentName:"ol"},"Follow the prompts on the Rancher Desktop uninstaller to proceed."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Finish")," when complete.")),(0,i.kt)("h2",{id:"linux"},"Linux"),(0,i.kt)("h3",{id:"requirements-2"},"Requirements"),(0,i.kt)("p",null,"Rancher Desktop requires the following on Linux:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A distribution that can install .deb or .rpm packages, or AppImages."),(0,i.kt)("li",{parentName:"ul"},"A persistent internet connection."),(0,i.kt)("li",{parentName:"ul"},"An x86_64 processor with either AMD-V or VT-x."),(0,i.kt)("li",{parentName:"ul"},"Read-write access on ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/kvm"),". See below for details.")),(0,i.kt)("p",null,"It is also recommended to have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"8 GB of memory"),(0,i.kt)("li",{parentName:"ul"},"4 CPU")),(0,i.kt)("p",null,"Additional resources may be required depending on the workloads you plan to run."),(0,i.kt)("h4",{id:"ensuring-you-have-access-to-devkvm"},"Ensuring You Have Access to ",(0,i.kt)("inlineCode",{parentName:"h4"},"/dev/kvm")),(0,i.kt)("p",null,"On some distributions (Ubuntu 18.04 for example) the user has insufficient\nprivileges to use ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/kvm"),", which is required for Rancher Desktop.\nTo check whether you have the required privileges, do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[ -r /dev/kvm ] && [ -w /dev/kvm ] || echo 'insufficient privileges'\n")),(0,i.kt)("p",null,"If it outputs ",(0,i.kt)("inlineCode",{parentName:"p"},"insufficient privileges"),", you need to add your user to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"kvm")," group. You can do this with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'sudo usermod -a -G kvm "$USER"\n')),(0,i.kt)("p",null,"Then reboot in order to make these changes take effect."),(0,i.kt)("h4",{id:"pass-setup"},(0,i.kt)("inlineCode",{parentName:"h4"},"pass")," Setup"),(0,i.kt)("p",null,"By default, Rancher Desktop uses ",(0,i.kt)("inlineCode",{parentName:"p"},"pass")," to securely store credentials\npassed via ",(0,i.kt)("inlineCode",{parentName:"p"},"docker login")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nerdctl login"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"pass")," requires a small amount\nof setup if this is the first time it has been used on your machine. If you don't\nintend to use ",(0,i.kt)("inlineCode",{parentName:"p"},"docker login")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"nerdctl login")," you don't have to set up\n",(0,i.kt)("inlineCode",{parentName:"p"},"pass")," - just remember that if you use them in the future, you must set it\nup or you will run into errors."),(0,i.kt)("p",null,"Once Rancher Desktop is installed, you should create a GPG key. This will be\nused by ",(0,i.kt)("inlineCode",{parentName:"p"},"pass")," to secure secrets. You can create a GPG key with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gpg --generate-key\n")),(0,i.kt)("p",null,"The output should contain something like ",(0,i.kt)("inlineCode",{parentName:"p"},"8D818FB37A9279E341F01506ED96AD27A40C9C73"),".\nThis is your key ID. You can then initialize ",(0,i.kt)("inlineCode",{parentName:"p"},"pass")," by passing this key ID to it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pass init 8D818FB37A9279E341F01506ED96AD27A40C9C73\n")),(0,i.kt)("p",null,"For more information on ",(0,i.kt)("inlineCode",{parentName:"p"},"pass"),", please see ",(0,i.kt)("a",{parentName:"p",href:"https://www.passwordstore.org/"},"its website"),"."),(0,i.kt)("h4",{id:"traefik-port-binding-access"},"Traefik Port Binding Access"),(0,i.kt)("p",null,"Rancher Desktop makes use of Traefik as the default ingress controller. Users may run into a ",(0,i.kt)("inlineCode",{parentName:"p"},"permission denied")," error after deploying Rancher Desktop due to restricted port access on the Traefik ingress. Most Linux distributions (e.g. Ubuntu 20.04) do not allow non-root users to listen on TCP and UDP ports below ",(0,i.kt)("inlineCode",{parentName:"p"},"1024"),". In order to allow Traefik to listen to privileged ports on the local host, please run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo sysctl -w net.ipv4.ip_unprivileged_port_start=80\n")),(0,i.kt)("p",null,"After the command is run, all ports ",(0,i.kt)("inlineCode",{parentName:"p"},"80")," and above will become unprivileged and Traefik will be able to successfully access said ports."),(0,i.kt)("p",null,"To preserve this change across reboots as a custom kernel parameter setting, add the same command inside your ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.conf")," file."),(0,i.kt)("h3",{id:"installation-via-deb-package"},"Installation via .deb Package"),(0,i.kt)("p",null,"Add the Rancher Desktop repository and install Rancher Desktop with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -s https://download.opensuse.org/repositories/isv:/Rancher:/stable/deb/Release.key | gpg --dearmor | sudo dd status=none of=/usr/share/keyrings/isv-rancher-stable-archive-keyring.gpg\necho 'deb [signed-by=/usr/share/keyrings/isv-rancher-stable-archive-keyring.gpg] https://download.opensuse.org/repositories/isv:/Rancher:/stable/deb/ ./' | sudo dd status=none of=/etc/apt/sources.list.d/isv-rancher-stable.list\nsudo apt update\nsudo apt install rancher-desktop\n")),(0,i.kt)("h3",{id:"uninstalling-deb-package"},"Uninstalling .deb Package"),(0,i.kt)("p",null,"You can remove the package, repository, and key with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt remove --autoremove rancher-desktop\nsudo rm /etc/apt/sources.list.d/isv-rancher-stable.list\nsudo rm /usr/share/keyrings/isv-rancher-stable-archive-keyring.gpg\nsudo apt update\n")),(0,i.kt)("h3",{id:"installing-via-rpm-package"},"Installing via .rpm Package"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," RHEL, Fedora, and related distributions package QEMU, which Rancher Desktop\nuses on Linux, differently than other distributions. To use Rancher Desktop on these\ndistributions, please use the AppImage."),(0,i.kt)("p",null,"To add the repository and install on openSUSE:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo zypper addrepo https://download.opensuse.org/repositories/isv:/Rancher:/stable/rpm/isv:Rancher:stable.repo\nsudo zypper install rancher-desktop\n")),(0,i.kt)("h3",{id:"uninstalling-rpm-package"},"Uninstalling .rpm Package"),(0,i.kt)("p",null,"Ensure that Rancher Desktop has exited (if not, it should appear in the dock) and do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo zypper remove --clean-deps rancher-desktop\nsudo zypper removerepo isv_Rancher_stable\n")),(0,i.kt)("h3",{id:"installing-via-appimage"},"Installing via AppImage"),(0,i.kt)("p",null,"First, ensure that ",(0,i.kt)("inlineCode",{parentName:"p"},"pass")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gpg")," are installed. For example, on Fedora:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dnf install pass gnupg2\n")),(0,i.kt)("p",null,"You may download the AppImage ",(0,i.kt)("a",{parentName:"p",href:"https://download.opensuse.org/repositories/isv:/Rancher:/stable/AppImage/rancher-desktop-latest-x86_64.AppImage"},"here"),". In order to run it, simply make it executable\nand execute it. For better integration with your desktop, you may use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TheAssassin/AppImageLauncher"},"AppImageLauncher"),"."),(0,i.kt)("h3",{id:"uninstalling-appimage"},"Uninstalling AppImage"),(0,i.kt)("p",null,"Simply delete the AppImage. That's it!"))}u.isMDXComponent=!0}}]);