"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[3662],{23661:function(e,n,o){o.r(n),o.d(n,{assets:function(){return d},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return l}});var s=o(85893),t=o(11151);const i={title:"ODO and Rancher Desktop"},r=void 0,a={id:"how-to-guides/odo-rancher-desktop",title:"ODO and Rancher Desktop",description:"odo is a fast, iterative and straightforward CLI tool for developers who write, build, and deploy applications on Kubernetes. The odo CLI abstracts away complex Kubernetes concepts and allows developers to focus on iterating code. The helper tool can detect changes to local code and deploy them to a container orchestrated cluster automatically, giving instant feedback to validate changes in real-time. Please refer to the odo project documentation to learn more.",source:"@site/versioned_docs/version-1.11/how-to-guides/odo-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/odo-rancher-desktop",permalink:"/1.11/how-to-guides/odo-rancher-desktop",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.11/how-to-guides/odo-rancher-desktop.md",tags:[],version:"1.11",frontMatter:{title:"ODO and Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"Running When Offline",permalink:"/1.11/how-to-guides/running-air-gapped"},next:{title:"Using the Traefik Ingress Controller",permalink:"/1.11/how-to-guides/traefik-ingress-example"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:3},{value:"Steps: <code>odo init</code>",id:"steps-odo-init",level:2},{value:"Steps: <code>odo dev</code>",id:"steps-odo-dev",level:2},{value:"Steps: <code>odo deploy</code>",id:"steps-odo-deploy",level:2},{value:"Steps: <code>odo describe component</code>",id:"steps-odo-describe-component",level:3},{value:"Steps: <code>odo delete component</code>",id:"steps-odo-delete-component",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Details:o,TabItem:i,Tabs:r}=n;return o||m("Details",!0),i||m("TabItem",!0),r||m("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"odo"})," is a fast, iterative and straightforward CLI tool for developers who write, build, and deploy applications on Kubernetes. The ",(0,s.jsx)(n.code,{children:"odo"})," CLI abstracts away complex Kubernetes concepts and allows developers to focus on iterating code. The helper tool can detect changes to local code and deploy them to a container orchestrated cluster automatically, giving instant feedback to validate changes in real-time. Please refer to the ",(0,s.jsxs)(n.a,{href:"https://odo.dev/docs/introduction",children:[(0,s.jsx)(n.code,{children:"odo"})," project documentation"]})," to learn more."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["For this guide you will use the ",(0,s.jsx)(n.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample",children:"express-sample node.js application"})," in the ",(0,s.jsx)(n.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io",children:"Rancher Desktop documentation"})," repository as a way to demonstrate the use of ",(0,s.jsx)(n.code,{children:"odo"})," and Rancher Desktop."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"odo"})," works with the ",(0,s.jsx)(n.code,{children:"dockerd (moby)"})," runtime, be sure to have it selected from the preferences dialog location ",(0,s.jsx)(n.em,{children:"Preferences"})," > ",(0,s.jsx)(n.em,{children:"Container Engine"})," > ",(0,s.jsx)(n.em,{children:"Allowed Images"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Please ensure that Kubernetes is enabled for your application. Additionally, in order to use ",(0,s.jsx)(n.code,{children:"odo deploy"}),", you will need to be able to build and push an image to a Docker container registry. Log in using your Docker credentials as noted below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ docker login docker.io\nUsername:\nPassword:\nLogin Succeeded!\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.code,{children:"odo"})," by visiting ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/overview/installation",children:"https://odo.dev/docs/overview/installation"})," and perform the appropriate install for your platform. The tool can be used both as a ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/overview/installation#cli-installation",children:"CLI tool"})," or an ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/overview/installation#ide-installation",children:"IDE plugin"}),", as well as a few ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/overview/installation#alternative-installation-methods",children:"alternative install methods"})," depending on your preference. This guide will focus on using the tool through the CLI."]}),"\n",(0,s.jsxs)(n.h2,{id:"steps-odo-init",children:["Steps: ",(0,s.jsx)(n.code,{children:"odo init"})]}),"\n",(0,s.jsxs)(n.p,{children:["This command will initialize the application by creating a ",(0,s.jsx)(n.code,{children:"devfile.yaml"})," for deployments."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Clone the ",(0,s.jsx)(n.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io",children:"Rancher Desktop documentation"})," repository and change your directory to the ",(0,s.jsx)(n.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample",children:"sample-express"})," application."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/rancher-sandbox/docs.rancherdesktop.io.git\ncd docs.rancherdesktop.io/assets/express-sample\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Before initializing, you must connect ",(0,s.jsx)(n.code,{children:"odo"})," to your cluster via a namespace, which can be created with the command ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/command-reference/create-namespace",children:(0,s.jsx)(n.code,{children:"odo create namespace <name>"})}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"odo create namespace odo-dev\n"})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Sample Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ odo create namespace odo-dev\n \u2713  Creating the namespace "odo-dev" [5ms]\n \u2713  Namespace "odo-dev" is ready for use\n \u2713  New namespace created and now using namespace: odo-dev\n'})})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["The command ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/command-reference/init",children:(0,s.jsx)(n.code,{children:"odo init"})})," will auto-detect your project framework and choose the appropriate ",(0,s.jsx)(n.code,{children:"devfile.yaml"})," to be used for deployment of your application. The command will allow you to confirm the Devfile (Y/n), select a container to change configuration (choose none for this example), and enter a component name (e.g. my-nodejs-app)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, the following command with the additional flags (e.g. ",(0,s.jsx)(n.code,{children:"--devfile-version 2.2.0"}),") can be used to initialize ",(0,s.jsx)(n.code,{children:"odo"})," and allow your application to be deployed:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"odo init --name my-nodejs-app --devfile nodejs --devfile-registry DefaultDevfileRegistry --devfile-version 2.2.0\n"})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Sample Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"  __\n /  \\__     Initializing a new component\n \\__/  \\    \n /  \\__/    odo version: v3.13.0\n \\__/\n\n \u2713  Downloading devfile \"nodejs:2.2.0\" from registry \"DefaultDevfileRegistry\" [1s]\n\nYour new component 'my-nodejs-app' is ready in the current directory.\nTo start editing your component, use 'odo dev' and open this folder in your favorite IDE.\nChanges will be directly reflected on the cluster.\n"})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"odo init\n"})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Sample Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ odo init\n  __\n /  \\__     Initializing a new component\n \\__/  \\    Files: Source code detected, a Devfile will be determined based upon source code autodetection\n /  \\__/    odo version: v3.13.0\n \\__/\n\nInteractive mode enabled, please answer the following questions:\n \u2713  Determining a Devfile for the current directory [910ms]\nBased on the files in the current directory odo detected\nLanguage: JavaScript\nProject type: Node.js\nApplication ports: 3000\nThe devfile "nodejs:2.1.1" from the registry "DefaultDevfileRegistry" will be downloaded.\n? Is this correct? Yes\n \u2713  Downloading devfile "nodejs:2.1.1" from registry "DefaultDevfileRegistry" [933ms]\n\n\u21aa Container Configuration "runtime":\n  OPEN PORTS:\n    - 3000\n    - 5858\n  ENVIRONMENT VARIABLES:\n    - DEBUG_PORT = 5858\n\n? Select container for which you want to change configuration? NONE - configuration is correct\n? Enter component name: my-nodejs-app\n\nYou can automate this command by executing:\n   odo init --name my-nodejs-app --devfile nodejs --devfile-registry DefaultDevfileRegistry --devfile-version 2.1.1\n\nYour new component \'my-nodejs-app\' is ready in the current directory.\nTo start editing your component, use \'odo dev\' and open this folder in your favorite IDE.\nChanges will be directly reflected on the cluster.\n'})})]}),"\n",(0,s.jsxs)(n.h2,{id:"steps-odo-dev",children:["Steps: ",(0,s.jsx)(n.code,{children:"odo dev"})]}),"\n",(0,s.jsxs)(n.p,{children:["Now, you can run the command ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/command-reference/dev",children:(0,s.jsx)(n.code,{children:"odo dev"})})," to continuously deploy applications as you make changes to your code through your preferred IDE."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["You may run into an ",(0,s.jsx)(n.code,{children:"ErrImagePull"})," error as the image may not be covered by Rancher Desktop's allowed images list. To resolve the error, please add the necessary image in ",(0,s.jsx)(n.em,{children:"Preferences"})," > ",(0,s.jsx)(n.em,{children:"Container Engine"})," > ",(0,s.jsx)(n.em,{children:"Allowed Images"})," and hit apply to update allowed images immediately."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"odo dev\n"})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Sample Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ odo dev\n  __\n /  \\__     Developing using the "my-nodejs-app" Devfile\n \\__/  \\    Namespace: odo-dev\n /  \\__/    odo version: v3.13.0\n \\__/\n\n\u21aa Running on the cluster in Dev mode\nI0728 13:50:53.115137   92567 starterserver.go:123] API Server started at localhost:20000/api/v1\n \u2022  Waiting for Kubernetes resources  ...\n \u26a0  Pod is Pending\n \u2713  Pod is Running\n \u2713  Syncing files into the container [306ms]\n \u2713  Building your application in container (command: install) [3s]\n \u2022  Executing the application (command: run)  ...\n \u2713  Waiting for the application to be ready [1s]\n -  Forwarding from 127.0.0.1:20001 -> 3000\n\n\n\u21aa Dev mode\n Status:\n Watching for changes in the current directory /Users/docs.rancherdesktop.io/assets/express-sample\n\n Keyboard Commands:\n[Ctrl+c] - Exit and delete resources from the cluster\n     [p] - Manually apply local changes to the application on the cluster\n'})})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"express-sample"})," application can now be accessed by the local port (127.0.0.1:20001). As an example, you can make a text change to the ",(0,s.jsx)(n.code,{children:"index.jade"})," file in the ",(0,s.jsx)(n.em,{children:"views"})," folder to see a real-time update to the application."]}),"\n",(0,s.jsxs)(n.h2,{id:"steps-odo-deploy",children:["Steps: ",(0,s.jsx)(n.code,{children:"odo deploy"})]}),"\n",(0,s.jsxs)(n.p,{children:["This command will deploy your application to your cluster with instructions from your ",(0,s.jsx)(n.code,{children:"devfile.yaml"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Be sure to be logged into the Docker container registry to push the application to, and set your container image build arguments to be the same as your container architecture using the ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/overview/configure/#environment-variables-controlling-odo-behavior:~:text=ODO_IMAGE_BUILD_ARGS",children:(0,s.jsx)(n.code,{children:"ODO_IMAGE_BUILD_ARGS"})})," environment variable:"]}),"\n"]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)(i,{value:"AMD64",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'export ODO_IMAGE_BUILD_ARGS="--platform=linux/amd64"\n'})})}),(0,s.jsx)(i,{value:"ARM",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'export ODO_IMAGE_BUILD_ARGS="--platform=linux/arm64"\n'})})})]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Update the ",(0,s.jsx)(n.code,{children:"Dockerfile"})," in the ",(0,s.jsx)(n.code,{children:"express-sample"})," directory to containerize the application with correct variables in order to build and push to a registry:"]}),"\n"]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Sample Dockerfile"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'# Install the app dependencies in a full SLE Node image\nFROM registry.suse.com/bci/nodejs:16\n\n# Copy package.json and package-lock.json\nCOPY package*.json ./\n\n# Install app dependencies\nRUN npm install --production\n\n# Install app dependencies\nCOPY . /opt/app-root/src\n\nENV NODE_ENV production\nENV PORT 3000\n\nCMD ["npm", "start"]\n'})})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Modify the ",(0,s.jsx)(n.code,{children:"devfile.yaml"})," to the example noted below for your container cluster."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Update the variables to access your container registry:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# Add the following variables code anywhere in devfile.yaml\n# This MUST be a container registry you are able to access\nvariables:\n  CONTAINER_IMAGE: docker.io/<INSERTUSERNAME>/nodejs-odo-example\n  RESOURCE_NAME: my-nodejs-app\n  CONTAINER_PORT: "3000"\n  DOMAIN_NAME: nodejs.example.com\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Update the Devfile schema to ",(0,s.jsx)(n.code,{children:"2.2.0"})," as ",(0,s.jsx)(n.code,{children:"odo deploy"})," makes use of this version. Additionally, there is a command to initialize ",(0,s.jsx)(n.code,{children:"odo"})," with the correct ",(0,s.jsx)(n.code,{children:"schemaVersion: 2.2.0"})," noted above in the installation:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# Deploy "kind" ID\'s use schema 2.2.0+\nschemaVersion: 2.2.0\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The commands seen below are used for deployment activities:"}),"\n"]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Deployment Commands"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# This is the main "composite" command that will run all below commands\ncommands:\n- id: deploy\n  composite:\n    commands:\n    - build-image\n    - k8s-deployment\n    - k8s-service\n    - k8s-url\n    group:\n      isDefault: true\n      kind: deploy\n\n# Below are the commands and their respective components that they are "linked" to deploy\n- id: build-image\n  apply:\n    component: outerloop-build\n- id: k8s-deployment\n  apply:\n    component: outerloop-deployment\n- id: k8s-service\n  apply:\n    component: outerloop-service\n- id: k8s-url\n  apply:\n    component: outerloop-url\n'})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The commands seen below are used for adding the Docker image location, K8s deployment and services to ",(0,s.jsx)(n.code,{children:"components"}),":"]}),"\n"]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Component Commands"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# This will build the container image before deployment\n- name: outerloop-build\n  image:\n    dockerfile:\n      buildContext: ${PROJECT_SOURCE}\n      rootRequired: false\n      uri: ./Dockerfile\n    imageName: "{{CONTAINER_IMAGE}}"\n# This will create a Deployment in order to run your container image across\n# the cluster.\n- name: outerloop-deployment\n  kubernetes:\n    inlined: |\n      kind: Deployment\n      apiVersion: apps/v1\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        replicas: 1\n        selector:\n          matchLabels:\n            app: {{RESOURCE_NAME}}\n        template:\n          metadata:\n            labels:\n              app: {{RESOURCE_NAME}}\n          spec:\n            containers:\n              - name: {{RESOURCE_NAME}}\n                image: {{CONTAINER_IMAGE}}\n                ports:\n                  - name: http\n                    containerPort: {{CONTAINER_PORT}}\n                    protocol: TCP\n                resources:\n                  limits:\n                    memory: "1024Mi"\n                    cpu: "500m"\n\n# This will create a Service so your Deployment is accessible.\n# Depending on your cluster, you may modify this code so it\'s a\n# NodePort, ClusterIP or a LoadBalancer service.\n- name: outerloop-service\n  kubernetes:\n    inlined: |\n      apiVersion: v1\n      kind: Service\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        ports:\n        - name: "{{CONTAINER_PORT}}"\n          port: {{CONTAINER_PORT}}\n          protocol: TCP\n          targetPort: {{CONTAINER_PORT}}\n        selector:\n          app: {{RESOURCE_NAME}}\n        type: NodePort\n'})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The last addition to our Devfile is adding the Kubernetes ingress component as noted below:"}),"\n"]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Ingress Commands"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'- name: outerloop-url\n  kubernetes:\n    inlined: |\n      apiVersion: networking.k8s.io/v1\n      kind: Ingress\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        rules:\n          - host: "{{DOMAIN_NAME}}"\n            http:\n              paths:\n                - path: "/"\n                  pathType: Prefix\n                  backend:\n                    service:\n                      name: {{RESOURCE_NAME}}\n                      port:\n                        number: {{CONTAINER_PORT}}\n'})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Below is the example ",(0,s.jsx)(n.code,{children:"devfile.yaml"})," that you can use to help illustrate command and variable settings after they are all put together. Please review your Devfile to match or update the appropriate variables as noted below:"]}),"\n"]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Final Devfile"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'commands:\n- exec:\n    commandLine: npm install\n    component: runtime\n    group:\n      isDefault: true\n      kind: build\n    workingDir: ${PROJECT_SOURCE}\n  id: install\n- exec:\n    commandLine: npm start\n    component: runtime\n    group:\n      isDefault: true\n      kind: run\n    workingDir: ${PROJECT_SOURCE}\n  id: run\n- exec:\n    commandLine: npm run debug\n    component: runtime\n    group:\n      isDefault: true\n      kind: debug\n    workingDir: ${PROJECT_SOURCE}\n  id: debug\n- exec:\n    commandLine: npm test\n    component: runtime\n    group:\n      isDefault: true\n      kind: test\n    workingDir: ${PROJECT_SOURCE}\n  id: test\n# This is the main "composite" command that will run all below commands\n- id: deploy\n  composite:\n    commands:\n    - build-image\n    - k8s-deployment\n    - k8s-service\n    - k8s-url\n    group:\n      isDefault: true\n      kind: deploy\n# Below are the commands and their respective components that they are "linked" to deploy\n- id: build-image\n  apply:\n    component: outerloop-build\n- id: k8s-deployment\n  apply:\n    component: outerloop-deployment\n- id: k8s-service\n  apply:\n    component: outerloop-service\n- id: k8s-url\n  apply:\n    component: outerloop-url\ncomponents:\n- container:\n    args:\n    - tail\n    - -f\n    - /dev/null\n    endpoints:\n    - name: http-node\n      targetPort: 3000\n    - exposure: none\n      name: debug\n      targetPort: 5858\n    env:\n    - name: DEBUG_PORT\n      value: "5858"\n    image: registry.suse.com/bci/nodejs:16:latest\n    memoryLimit: 1024Mi\n    mountSources: true\n  name: runtime\n# This will build the container image before deployment\n- name: outerloop-build\n  image:\n    dockerfile:\n      buildContext: ${PROJECT_SOURCE}\n      rootRequired: false\n      uri: ./Dockerfile\n    imageName: "{{CONTAINER_IMAGE}}"\n# This will create a Deployment in order to run your container image across\n# the cluster.\n- name: outerloop-deployment\n  kubernetes:\n    inlined: |\n      kind: Deployment\n      apiVersion: apps/v1\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        replicas: 1\n        selector:\n          matchLabels:\n            app: {{RESOURCE_NAME}}\n        template:\n          metadata:\n            labels:\n              app: {{RESOURCE_NAME}}\n          spec:\n            containers:\n              - name: {{RESOURCE_NAME}}\n                image: {{CONTAINER_IMAGE}}\n                ports:\n                  - name: http\n                    containerPort: {{CONTAINER_PORT}}\n                    protocol: TCP\n                resources:\n                  limits:\n                    memory: "1024Mi"\n                    cpu: "500m"\n\n# This will create a Service so your Deployment is accessible.\n# Depending on your cluster, you may modify this code so it\'s a\n# NodePort, ClusterIP or a LoadBalancer service.\n- name: outerloop-service\n  kubernetes:\n    inlined: |\n      apiVersion: v1\n      kind: Service\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        ports:\n        - name: "{{CONTAINER_PORT}}"\n          port: {{CONTAINER_PORT}}\n          protocol: TCP\n          targetPort: {{CONTAINER_PORT}}\n        selector:\n          app: {{RESOURCE_NAME}}\n        type: NodePort\n- name: outerloop-url\n  kubernetes:\n    inlined: |\n      apiVersion: networking.k8s.io/v1\n      kind: Ingress\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        rules:\n          - host: "{{DOMAIN_NAME}}"\n            http:\n              paths:\n                - path: "/"\n                  pathType: Prefix\n                  backend:\n                    service:\n                      name: {{RESOURCE_NAME}}\n                      port:\n                        number: {{CONTAINER_PORT}}\nmetadata:\n  description: Stack with Node.js 16\n  displayName: Node.js Runtime\n  icon: https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg\n  language: JavaScript\n  name: my-node-app\n  projectType: Node.js\n  tags:\n  - Node.js\n  - Express\n  - ubi8\n  version: 2.1.1\nschemaVersion: 2.2.0\nstarterProjects:\n- git:\n    remotes:\n      origin: https://github.com/odo-devfiles/nodejs-ex.git\n  name: nodejs-starter\n# Add the following variables code anywhere in devfile.yaml\n# This MUST be a container registry you are able to access\nvariables:\n  CONTAINER_IMAGE: docker.io/<INSERTUSERNAME>/node-odo-example\n  RESOURCE_NAME: my-node-app\n  CONTAINER_PORT: "3000"\n  DOMAIN_NAME: node.example.com\n'})})]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Now, you can run the command ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/command-reference/deploy",children:(0,s.jsx)(n.code,{children:"odo deploy"})})," to deploy the application to the cluster:"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["You may run into an ",(0,s.jsx)(n.code,{children:"unauthorized: image"})," error as the image may not be covered by Rancher Desktop's allowed images list. To resolve the error, please add the necessary image in ",(0,s.jsx)(n.em,{children:"Preferences"})," > ",(0,s.jsx)(n.em,{children:"Container Engine"})," > ",(0,s.jsx)(n.em,{children:"Allowed Images"})," and hit apply to update allowed images immediately."]})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Sample Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ odo deploy\n  __\n /  \\__     Running the application in Deploy mode using my-node-app Devfile\n \\__/  \\    Namespace: odo-dev\n /  \\__/    odo version: v3.13.0\n \\__/\n\n\u21aa Building & Pushing Image: docker.io/arjsin/nodejs-odo-example\n \u2022  Building image locally  ...\n[+] Building 2.7s (9/9) FINISHED                                                \n => [internal] load build definition from Dockerfile                       0.0s\n => => transferring dockerfile: 405B                                       0.0s\n => [internal] load .dockerignore                                          0.0s\n => => transferring context: 364B                                          0.0s\n => [internal] load metadata for registry.suse.com/bci/nodejs:16           2.2s\n => [1/4] FROM registry.suse.com/bci/nodejs:16@sha256:dda0e616a0fcb3dc589  0.0s\n => [internal] load build context                                          0.0s\n => => transferring context: 5.14kB                                        0.0s\n => CACHED [2/4] COPY package*.json ./                                     0.0s\n => CACHED [3/4] RUN npm install --production                              0.0s\n => [4/4] COPY . /opt/app-root/src                                         0.0s\n => exporting to image                                                     0.4s\n => => exporting layers                                                    0.4s\n => => writing image sha256:c6d3ed7d9fb4736d3c4e95b54054533f79d64d3a01e65  0.0s\n => => naming to docker.io/arjsin/nodejs-odo-example                       0.0s\n \u2713  Building image locally [3s]\n \u2022  Pushing image to container registry  ...\nUsing default tag: latest\nThe push refers to repository [docker.io/arjsin/nodejs-odo-example]\n20658d9b13ba: Pushed \n7b1ee26c3aea: Pushed \n067890bef08d: Pushed \nd08e96dfc7bc: Pushed \n174c0e293bd0: Pushed \nlatest: digest: sha256:ca598fc0c5278e8d00cba41e14914f1d3f7a3561bd4a324f2ffcd33b166135ad size: 1368\n \u2713  Pushing image to container registry [30s]\n\n\u21aa Deploying Kubernetes Component: my-node-app\n \u2713  Creating resource Deployment/my-node-app \n\n\u21aa Deploying Kubernetes Component: my-node-app\n \u2713  Creating resource Service/my-node-app \n\n\u21aa Deploying Kubernetes Component: my-node-app\n \u2713  Creating resource Ingress/my-node-app \n\nYour Devfile has been successfully deployed\n"})})]}),"\n",(0,s.jsxs)(n.h3,{id:"steps-odo-describe-component",children:["Steps: ",(0,s.jsx)(n.code,{children:"odo describe component"})]}),"\n",(0,s.jsxs)(n.p,{children:["Now, the command ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/command-reference/describe-component",children:(0,s.jsx)(n.code,{children:"odo describe component"})})," can be used to view information from the Devfile such as Kubernetes components, ingresses, and the URL to access the application:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"odo describe component\n"})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Sample Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ odo describe component\nName: my-nodejs-app\nDisplay Name: Node.js Runtime\nProject Type: Node.js\nLanguage: JavaScript\nVersion: 2.2.0\nDescription: Node.js 18 application\nTags: Node.js, Express, ubi8\n\nRunning in: None\n\nSupported odo features:\n \u2022  Dev: true\n \u2022  Deploy: false\n \u2022  Debug: true\n\nCommands:\n \u2022  install\n      Type: exec\n      Group: build\n      Command Line: "npm install"\n      Component: runtime\n      Component Type: container\n \u2022  run\n      Type: exec\n      Group: run\n      Command Line: "npm start"\n      Component: runtime\n      Component Type: container\n \u2022  debug\n      Type: exec\n      Group: debug\n      Command Line: "npm run debug"\n      Component: runtime\n      Component Type: container\n \u2022  test\n      Type: exec\n      Group: test\n      Command Line: "npm test"\n      Component: runtime\n      Component Type: container\n\nContainer components:\n \u2022  runtime\n    Source Mapping: /projects\n'})})]}),"\n",(0,s.jsxs)(n.h2,{id:"steps-odo-delete-component",children:["Steps: ",(0,s.jsx)(n.code,{children:"odo delete component"})]}),"\n",(0,s.jsxs)(n.p,{children:["After you have completed testing, you can free the resources used by ",(0,s.jsx)(n.code,{children:"odo"})," by using the command ",(0,s.jsx)(n.a,{href:"https://odo.dev/docs/command-reference/delete-component",children:(0,s.jsx)(n.code,{children:"odo delete component"})}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"odo delete component\n"})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Sample Output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ odo delete component\nSearching resources to delete, please wait...\nThis will delete "my-node-app" from the namespace "odo-dev".\n \u2022  The following resources will get deleted from cluster:\n \u2022  \t- Deployment: my-node-app\n \u2022  \t- Service: my-node-app\n \u2022  \t- Ingress: my-node-app\n\n? Are you sure you want to delete "my-node-app" and all its resources? Yes\n \u2713  Deleting resources from cluster [52ms]\nThe component "my-node-app" is successfully deleted from namespace "odo-dev"\n'})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return r}});var s=o(67294);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);