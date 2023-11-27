"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[3866],{14566:function(e,o,n){n.r(o),n.d(o,{assets:function(){return a},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return t},metadata:function(){return l},toc:function(){return d}});var s=n(85893),r=n(11151);const t={title:"Skaffold and Rancher Desktop"},i=void 0,l={id:"how-to-guides/skaffold-and-rancher-desktop",title:"Skaffold and Rancher Desktop",description:"Skaffold is a command line tool that facilitates continuous development for Kubernetes-native applications. Skaffold handles the workflow for building, pushing, and deploying your application, and it provides building blocks for creating CI/CD pipelines. This enables you to focus on iterating on your application locally while Skaffold continuously deploys to your local or remote Kubernetes cluster. To learn more about Skaffold, refer to the project docs here.",source:"@site/versioned_docs/version-1.10/how-to-guides/skaffold-and-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/skaffold-and-rancher-desktop",permalink:"/1.10/how-to-guides/skaffold-and-rancher-desktop",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.10/how-to-guides/skaffold-and-rancher-desktop.md",tags:[],version:"1.10",frontMatter:{title:"Skaffold and Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"Rancher on Rancher Desktop",permalink:"/1.10/how-to-guides/rancher-on-rancher-desktop"},next:{title:"Provisioning Scripts",permalink:"/1.10/how-to-guides/provisioning-scripts"}},a={},d=[];function c(e){const o={a:"a",blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Details:n,Head:t,TabItem:i,Tabs:l}=o;return n||u("Details",!0),t||u("Head",!0),i||u("TabItem",!0),l||u("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/skaffold-and-rancher-desktop"})}),"\n",(0,s.jsxs)(o.p,{children:["Skaffold is a command line tool that facilitates continuous development for Kubernetes-native applications. Skaffold handles the workflow for building, pushing, and deploying your application, and it provides building blocks for creating CI/CD pipelines. This enables you to focus on iterating on your application locally while Skaffold continuously deploys to your local or remote Kubernetes cluster. To learn more about Skaffold, refer to the project docs ",(0,s.jsx)(o.a,{href:"https://skaffold.dev/docs/",children:"here"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["In order to demonstrate the steps to set up Skaffold with Rancher Desktop, a sample nodejs app example is provided within the Rancher Desktop docs repository ",(0,s.jsx)(o.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample",children:"here"}),"."]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsxs)(o.strong,{children:["Important: Skaffold only works with ",(0,s.jsx)(o.code,{children:"dockerd"})," (Moby)."]})," Therefore, make sure to select your runtime as ",(0,s.jsx)(o.code,{children:"dockerd"})," from the ",(0,s.jsx)(o.strong,{children:"Kubernetes Settings"})," panel in the Rancher Desktop UI."]}),"\n"]}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Visit ",(0,s.jsx)(o.a,{href:"https://skaffold.dev/docs/install/",children:"https://skaffold.dev/docs/install/"})," to install Skaffold."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Clone the ",(0,s.jsx)(o.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io.git",children:"Rancher Desktop docs repository"})," and navigate to the ",(0,s.jsx)(o.code,{children:"express-sample"})," in a terminal as follows:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"cd docs.rancherdesktop.io/assets/express-sample\n"})}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Run ",(0,s.jsx)(o.code,{children:"skaffold init"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Per the ",(0,s.jsx)(o.a,{href:"https://skaffold.dev/docs/pipeline-stages/init/#build-config-initialization",children:"Skaffold docs"}),",",(0,s.jsx)(o.code,{children:"skaffold init"})," walks through your project directory and looks for any build configuration files such as ",(0,s.jsx)(o.code,{children:"Dockerfile"}),", ",(0,s.jsx)(o.code,{children:"build.gradle/pom.xml"}),", ",(0,s.jsx)(o.code,{children:"package.json"}),", ",(0,s.jsx)(o.code,{children:"requirements.txt"}),", or ",(0,s.jsx)(o.code,{children:"go.mod"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["We will select ",(0,s.jsx)(o.code,{children:"Dockerfile"})," and ",(0,s.jsx)(o.code,{children:"package.json"})," in our example. This will generate the initial configuration file that you can modify as needed. When prompted, select ",(0,s.jsx)(o.code,{children:"yes"})," to write your config to ",(0,s.jsx)(o.code,{children:"skaffold.yaml"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["In your editor, review your ",(0,s.jsx)(o.code,{children:"app.js"})," and ",(0,s.jsx)(o.code,{children:"manifests.yaml"})," files. Note that in ",(0,s.jsx)(o.code,{children:"manifests.yaml"}),", you will have a deployment config as well as a service config. It is only necessary to have 1 ",(0,s.jsx)(o.code,{children:"replica"})," for testing purposes."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Back in your terminal, you'll notice that you will have two options: ",(0,s.jsx)(o.code,{children:"skaffold run"})," that lets you build and deploy, and ",(0,s.jsx)(o.code,{children:"skaffold dev"})," that allows you to enter development mode with auto-redeploy. We will use ",(0,s.jsx)(o.code,{children:"skaffold dev"})," in this example."]}),"\n",(0,s.jsx)(o.p,{children:"You will need to have push access to the image repository. You can either use your docker login, set up a local registry, or build locally without pushing to an image registry:"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsx)(i,{value:"docker-hub",label:"Docker Hub",default:!0,children:(0,s.jsxs)(o.p,{children:["Before running ",(0,s.jsx)(o.code,{children:"skaffold dev"}),", use your docker login if you have a ",(0,s.jsx)(o.a,{href:"https://hub.docker.com/",children:"Docker Hub"})," account. Then, in the files ",(0,s.jsx)(o.code,{children:"skaffold.yaml"})," and ",(0,s.jsx)(o.code,{children:"manifests.yaml"})," replace ",(0,s.jsx)(o.code,{children:"matamagu/express-sample"})," for ",(0,s.jsx)(o.code,{children:"YOUR_DOCKER_HUB_USERNAME/express-sample"})," as ",(0,s.jsx)(o.code,{children:"skaffold dev"})," will push the built image to DockerHub."]})}),(0,s.jsxs)(i,{value:"local-registry",label:"Local Registry",children:[(0,s.jsxs)(o.p,{children:["You can set up a local registry by first running this command:",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]}),(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"docker run -d -p 5000:5000 --restart=always --name registry registry:2\n"})}),(0,s.jsx)(o.p,{children:"Then:"}),(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"skaffold dev --default-repo=localhost:5000\n"})})]}),(0,s.jsxs)(i,{value:"local-build",label:"Local Build",children:[(0,s.jsxs)(o.p,{children:["You can build locally without pushing to the image registry by setting your workloads ",(0,s.jsx)(o.code,{children:"imagePullPolicy"})," to ",(0,s.jsx)(o.code,{children:"IfNotPresent"})," in your ",(0,s.jsx)(o.code,{children:"manifests.yaml"})," file. You will also need to update your ",(0,s.jsx)(o.code,{children:"skaffold.yaml"})," with the following variables in order to implement this change as noted below:"]}),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Example YAML"}),(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yaml",children:"apiVersion: skaffold/v2beta29\nkind: Config\nmetadata:\n  name: skaffold\nbuild:\n  local:\n    push: false\n    useDockerCLI: true\n"})})]})]})]}),"\n",(0,s.jsx)(o.p,{children:"As you go through your development, Skaffold will detect any changes and will automatically go through the build and deployment process again. You will be able to see any changes reflected in the cluster."}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Point your web browser to ",(0,s.jsx)(o.code,{children:"localhost:3000"}),", and you will see the ",(0,s.jsx)(o.code,{children:"express-sample"})," screen."]}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function u(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:function(e,o,n){n.d(o,{Z:function(){return l},a:function(){return i}});var s=n(67294);const r={},t=s.createContext(r);function i(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);